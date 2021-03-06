///<reference path='references.ts' />

module TypeScript {
    export interface ISyntaxNodeOrToken extends ISyntaxElement {
        accept(visitor: ISyntaxVisitor): any;
    }
}