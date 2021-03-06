//
// Copyright (c) Microsoft Corporation.  All rights reserved.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

/// <reference path="formatting.ts"/>

module TypeScript.Services.Formatting {
    export class FormattingManager {
        private options: FormattingOptions;

        constructor(private syntaxTree: SyntaxTree,
                    private snapshot: ITextSnapshot,
                    private rulesProvider: RulesProvider,
            editorOptions: ts.EditorOptions) {
            //
            // TODO: convert to use FormattingOptions instead of EditorOptions
            this.options = new FormattingOptions(!editorOptions.ConvertTabsToSpaces, editorOptions.TabSize, editorOptions.IndentSize, editorOptions.NewLineCharacter)
        }

        public formatSelection(minChar: number, limChar: number): ts.TextChange[] {
            var span = TextSpan.fromBounds(minChar, limChar);
            return this.formatSpan(span, FormattingRequestKind.FormatSelection);
        }

        public formatDocument(): ts.TextChange[] {
            var span = TextSpan.fromBounds(0, this.snapshot.getLength());
            return this.formatSpan(span, FormattingRequestKind.FormatDocument);
        }

        public formatOnSemicolon(caretPosition: number): ts.TextChange[] {
            var sourceUnit = this.syntaxTree.sourceUnit();
            var semicolonPositionedToken = findToken(sourceUnit, caretPosition - 1);

            if (semicolonPositionedToken.kind() === SyntaxKind.SemicolonToken) {
                // Find the outer most parent that this semicolon terminates
                var current: ISyntaxElement = semicolonPositionedToken;
                while (current.parent !== null &&
                    end(current.parent) === end(semicolonPositionedToken) &&
                    current.parent.kind() !== SyntaxKind.List) {
                    current = current.parent;
                }

                // Compute the span
                var span = new TextSpan(fullStart(current), fullWidth(current));

                // Format the span
                return this.formatSpan(span, FormattingRequestKind.FormatOnSemicolon);
            }

            return [];
        }

        public formatOnClosingCurlyBrace(caretPosition: number): ts.TextChange[] {
            var sourceUnit = this.syntaxTree.sourceUnit();
            var closeBracePositionedToken = findToken(sourceUnit, caretPosition - 1);

            if (closeBracePositionedToken.kind() === SyntaxKind.CloseBraceToken) {
                // Find the outer most parent that this closing brace terminates
                var current: ISyntaxElement = closeBracePositionedToken;
                while (current.parent !== null &&
                    end(current.parent) === end(closeBracePositionedToken) &&
                    current.parent.kind() !== SyntaxKind.List) {
                    current = current.parent;
                }

                // Compute the span
                var span = new TextSpan(fullStart(current), fullWidth(current));

                // Format the span
                return this.formatSpan(span, FormattingRequestKind.FormatOnClosingCurlyBrace);
            }

            return [];
        }

        public formatOnEnter(caretPosition: number): ts.TextChange[] {
            var lineNumber = this.snapshot.getLineNumberFromPosition(caretPosition);

            if (lineNumber > 0) {
                // Format both lines
                var prevLine = this.snapshot.getLineFromLineNumber(lineNumber - 1);
                var currentLine = this.snapshot.getLineFromLineNumber(lineNumber);
                var span = TextSpan.fromBounds(prevLine.startPosition(), currentLine.endPosition());

                // Format the span
                return this.formatSpan(span, FormattingRequestKind.FormatOnEnter);

            }

            return [];
        }

        private formatSpan(span: TextSpan, formattingRequestKind: FormattingRequestKind): ts.TextChange[] {
            // Always format from the beginning of the line
            var startLine = this.snapshot.getLineFromPosition(span.start());
            span = TextSpan.fromBounds(startLine.startPosition(), span.end());

            var result: ts.TextChange[] = [];

            var formattingEdits = Formatter.getEdits(span, this.syntaxTree.sourceUnit(), this.options, true, this.snapshot, this.rulesProvider, formattingRequestKind);

            //
            // TODO: Change the ILanguageService interface to return TextEditInfo (with start, and length) instead of TextEdit (with minChar and limChar)
            formattingEdits.forEach(item => {
                result.push({
                    span: new TextSpan(item.position, item.length),
                    newText: item.replaceWith
                });
            });

            return result;
        }
    }
}