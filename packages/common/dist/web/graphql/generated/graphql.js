"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useMeLazyQuery = exports.useMeQuery = exports.withMe = exports.MeComponent = exports.MeDocument = exports.useLoginMutation = exports.withLogin = exports.LoginComponent = exports.LoginDocument = exports.useAllTodoListLazyQuery = exports.useAllTodoListQuery = exports.withAllTodoList = exports.AllTodoListComponent = exports.AllTodoListDocument = void 0;
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var React = __importStar(require("react"));
var ApolloReactComponents = __importStar(require("@apollo/react-components"));
var ApolloReactHoc = __importStar(require("@apollo/react-hoc"));
var ApolloReactHooks = __importStar(require("@apollo/react-hooks"));
exports.AllTodoListDocument = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query AllTodoList {\n  allTodoList {\n    id\n    userId\n    title\n  }\n}\n    "], ["\n    query AllTodoList {\n  allTodoList {\n    id\n    userId\n    title\n  }\n}\n    "])));
exports.AllTodoListComponent = function (props) { return (React.createElement(ApolloReactComponents.Query, __assign({ query: exports.AllTodoListDocument }, props))); };
function withAllTodoList(operationOptions) {
    return ApolloReactHoc.withQuery(exports.AllTodoListDocument, __assign({ alias: 'allTodoList' }, operationOptions));
}
exports.withAllTodoList = withAllTodoList;
;
/**
 * __useAllTodoListQuery__
 *
 * To run a query within a React component, call `useAllTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTodoListQuery({
 *   variables: {
 *   },
 * });
 */
function useAllTodoListQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.AllTodoListDocument, baseOptions);
}
exports.useAllTodoListQuery = useAllTodoListQuery;
function useAllTodoListLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.AllTodoListDocument, baseOptions);
}
exports.useAllTodoListLazyQuery = useAllTodoListLazyQuery;
exports.LoginDocument = graphql_tag_1.default(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    mutation Login($email: String!, $password: String!) {\n  login(loginInput: {email: $email, password: $password})\n}\n    "], ["\n    mutation Login($email: String!, $password: String!) {\n  login(loginInput: {email: $email, password: $password})\n}\n    "])));
exports.LoginComponent = function (props) { return (React.createElement(ApolloReactComponents.Mutation, __assign({ mutation: exports.LoginDocument }, props))); };
function withLogin(operationOptions) {
    return ApolloReactHoc.withMutation(exports.LoginDocument, __assign({ alias: 'login' }, operationOptions));
}
exports.withLogin = withLogin;
;
/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
    return ApolloReactHooks.useMutation(exports.LoginDocument, baseOptions);
}
exports.useLoginMutation = useLoginMutation;
exports.MeDocument = graphql_tag_1.default(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    query Me {\n  me {\n    id\n    nickname\n    email\n  }\n}\n    "], ["\n    query Me {\n  me {\n    id\n    nickname\n    email\n  }\n}\n    "])));
exports.MeComponent = function (props) { return (React.createElement(ApolloReactComponents.Query, __assign({ query: exports.MeDocument }, props))); };
function withMe(operationOptions) {
    return ApolloReactHoc.withQuery(exports.MeDocument, __assign({ alias: 'me' }, operationOptions));
}
exports.withMe = withMe;
;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
function useMeQuery(baseOptions) {
    return ApolloReactHooks.useQuery(exports.MeDocument, baseOptions);
}
exports.useMeQuery = useMeQuery;
function useMeLazyQuery(baseOptions) {
    return ApolloReactHooks.useLazyQuery(exports.MeDocument, baseOptions);
}
exports.useMeLazyQuery = useMeLazyQuery;
var templateObject_1, templateObject_2, templateObject_3;
