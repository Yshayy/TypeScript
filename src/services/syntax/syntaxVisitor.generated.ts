///<reference path='references.ts' />

module TypeScript {
    export function visitNodeOrToken(visitor: ISyntaxVisitor, element: ISyntaxNodeOrToken): any {
        if (element === undefined) { return undefined; }
        return element.accept(visitor);
    }

    export interface ISyntaxVisitor {
        visitToken(token: ISyntaxToken): any;
        visitSourceUnit(node: SourceUnitSyntax): any;
        visitQualifiedName(node: QualifiedNameSyntax): any;
        visitObjectType(node: ObjectTypeSyntax): any;
        visitFunctionType(node: FunctionTypeSyntax): any;
        visitArrayType(node: ArrayTypeSyntax): any;
        visitConstructorType(node: ConstructorTypeSyntax): any;
        visitGenericType(node: GenericTypeSyntax): any;
        visitTypeQuery(node: TypeQuerySyntax): any;
        visitTupleType(node: TupleTypeSyntax): any;
        visitUnionType(node: UnionTypeSyntax): any;
        visitParenthesizedType(node: ParenthesizedTypeSyntax): any;
        visitInterfaceDeclaration(node: InterfaceDeclarationSyntax): any;
        visitFunctionDeclaration(node: FunctionDeclarationSyntax): any;
        visitModuleDeclaration(node: ModuleDeclarationSyntax): any;
        visitClassDeclaration(node: ClassDeclarationSyntax): any;
        visitEnumDeclaration(node: EnumDeclarationSyntax): any;
        visitImportDeclaration(node: ImportDeclarationSyntax): any;
        visitExportAssignment(node: ExportAssignmentSyntax): any;
        visitMemberFunctionDeclaration(node: MemberFunctionDeclarationSyntax): any;
        visitMemberVariableDeclaration(node: MemberVariableDeclarationSyntax): any;
        visitConstructorDeclaration(node: ConstructorDeclarationSyntax): any;
        visitIndexMemberDeclaration(node: IndexMemberDeclarationSyntax): any;
        visitGetAccessor(node: GetAccessorSyntax): any;
        visitSetAccessor(node: SetAccessorSyntax): any;
        visitPropertySignature(node: PropertySignatureSyntax): any;
        visitCallSignature(node: CallSignatureSyntax): any;
        visitConstructSignature(node: ConstructSignatureSyntax): any;
        visitIndexSignature(node: IndexSignatureSyntax): any;
        visitMethodSignature(node: MethodSignatureSyntax): any;
        visitBlock(node: BlockSyntax): any;
        visitIfStatement(node: IfStatementSyntax): any;
        visitVariableStatement(node: VariableStatementSyntax): any;
        visitExpressionStatement(node: ExpressionStatementSyntax): any;
        visitReturnStatement(node: ReturnStatementSyntax): any;
        visitSwitchStatement(node: SwitchStatementSyntax): any;
        visitBreakStatement(node: BreakStatementSyntax): any;
        visitContinueStatement(node: ContinueStatementSyntax): any;
        visitForStatement(node: ForStatementSyntax): any;
        visitForInStatement(node: ForInStatementSyntax): any;
        visitEmptyStatement(node: EmptyStatementSyntax): any;
        visitThrowStatement(node: ThrowStatementSyntax): any;
        visitWhileStatement(node: WhileStatementSyntax): any;
        visitTryStatement(node: TryStatementSyntax): any;
        visitLabeledStatement(node: LabeledStatementSyntax): any;
        visitDoStatement(node: DoStatementSyntax): any;
        visitDebuggerStatement(node: DebuggerStatementSyntax): any;
        visitWithStatement(node: WithStatementSyntax): any;
        visitPrefixUnaryExpression(node: PrefixUnaryExpressionSyntax): any;
        visitDeleteExpression(node: DeleteExpressionSyntax): any;
        visitTypeOfExpression(node: TypeOfExpressionSyntax): any;
        visitVoidExpression(node: VoidExpressionSyntax): any;
        visitConditionalExpression(node: ConditionalExpressionSyntax): any;
        visitBinaryExpression(node: BinaryExpressionSyntax): any;
        visitPostfixUnaryExpression(node: PostfixUnaryExpressionSyntax): any;
        visitMemberAccessExpression(node: MemberAccessExpressionSyntax): any;
        visitInvocationExpression(node: InvocationExpressionSyntax): any;
        visitArrayLiteralExpression(node: ArrayLiteralExpressionSyntax): any;
        visitObjectLiteralExpression(node: ObjectLiteralExpressionSyntax): any;
        visitObjectCreationExpression(node: ObjectCreationExpressionSyntax): any;
        visitParenthesizedExpression(node: ParenthesizedExpressionSyntax): any;
        visitParenthesizedArrowFunctionExpression(node: ParenthesizedArrowFunctionExpressionSyntax): any;
        visitSimpleArrowFunctionExpression(node: SimpleArrowFunctionExpressionSyntax): any;
        visitCastExpression(node: CastExpressionSyntax): any;
        visitElementAccessExpression(node: ElementAccessExpressionSyntax): any;
        visitFunctionExpression(node: FunctionExpressionSyntax): any;
        visitOmittedExpression(node: OmittedExpressionSyntax): any;
        visitVariableDeclaration(node: VariableDeclarationSyntax): any;
        visitVariableDeclarator(node: VariableDeclaratorSyntax): any;
        visitArgumentList(node: ArgumentListSyntax): any;
        visitParameterList(node: ParameterListSyntax): any;
        visitTypeArgumentList(node: TypeArgumentListSyntax): any;
        visitTypeParameterList(node: TypeParameterListSyntax): any;
        visitHeritageClause(node: HeritageClauseSyntax): any;
        visitEqualsValueClause(node: EqualsValueClauseSyntax): any;
        visitCaseSwitchClause(node: CaseSwitchClauseSyntax): any;
        visitDefaultSwitchClause(node: DefaultSwitchClauseSyntax): any;
        visitElseClause(node: ElseClauseSyntax): any;
        visitCatchClause(node: CatchClauseSyntax): any;
        visitFinallyClause(node: FinallyClauseSyntax): any;
        visitTypeParameter(node: TypeParameterSyntax): any;
        visitConstraint(node: ConstraintSyntax): any;
        visitSimplePropertyAssignment(node: SimplePropertyAssignmentSyntax): any;
        visitFunctionPropertyAssignment(node: FunctionPropertyAssignmentSyntax): any;
        visitParameter(node: ParameterSyntax): any;
        visitEnumElement(node: EnumElementSyntax): any;
        visitTypeAnnotation(node: TypeAnnotationSyntax): any;
        visitExternalModuleReference(node: ExternalModuleReferenceSyntax): any;
        visitModuleNameModuleReference(node: ModuleNameModuleReferenceSyntax): any;
    }
}