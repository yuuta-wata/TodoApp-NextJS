import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: any;
}> = {
    [K in keyof T]: T[K];
};
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Query = {
    __typename?: 'Query';
    getTodoList?: Maybe<Array<Maybe<Todo>>>;
    allTodoList?: Maybe<Array<Maybe<Todo>>>;
    getUsers?: Maybe<Array<Maybe<Users>>>;
    me?: Maybe<Users>;
    helloNestJS: Scalars['String'];
};
export declare type Todo = {
    __typename?: 'Todo';
    id: Scalars['ID'];
    userId: Scalars['ID'];
    title: Scalars['String'];
};
export declare type Users = {
    __typename?: 'Users';
    id: Scalars['ID'];
    nickname: Scalars['String'];
    email: Scalars['String'];
    loginstatus: Scalars['Boolean'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    createTodo?: Maybe<Scalars['Boolean']>;
    deleteTodo?: Maybe<Scalars['Boolean']>;
    register?: Maybe<Scalars['Boolean']>;
    login?: Maybe<Scalars['Boolean']>;
    testUserLogin?: Maybe<Scalars['Boolean']>;
    logOut?: Maybe<Scalars['Boolean']>;
    deleteAccount?: Maybe<Scalars['Boolean']>;
};
export declare type MutationCreateTodoArgs = {
    input: CreateTodoInput;
};
export declare type MutationDeleteTodoArgs = {
    id: Scalars['ID'];
};
export declare type MutationRegisterArgs = {
    registerInput: RegisterInput;
};
export declare type MutationLoginArgs = {
    loginInput: LoginInput;
};
export declare type MutationTestUserLoginArgs = {
    loginInput: LoginInput;
};
export declare type MutationDeleteAccountArgs = {
    deleteAccountInput: DeleteAccountInput;
};
export declare type CreateTodoInput = {
    title: Scalars['String'];
};
export declare type RegisterInput = {
    nickname: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type LoginInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type DeleteAccountInput = {
    nickname: Scalars['String'];
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type AllTodoListQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type AllTodoListQuery = ({
    __typename?: 'Query';
} & {
    allTodoList?: Maybe<Array<Maybe<({
        __typename?: 'Todo';
    } & Pick<Todo, 'id' | 'userId' | 'title'>)>>>;
});
export declare type LoginMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type LoginMutation = ({
    __typename?: 'Mutation';
} & Pick<Mutation, 'login'>);
export declare type MeQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type MeQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'Users';
    } & Pick<Users, 'id' | 'nickname' | 'email'>)>;
});
export declare const AllTodoListDocument: ApolloReactComponents.DocumentNode;
export declare type AllTodoListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTodoListQuery, AllTodoListQueryVariables>, 'query'>;
export declare const AllTodoListComponent: (props: AllTodoListComponentProps) => JSX.Element;
export declare type AllTodoListProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<AllTodoListQuery, AllTodoListQueryVariables>;
} & TChildProps;
export declare function withAllTodoList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, AllTodoListQuery, AllTodoListQueryVariables, AllTodoListProps<TChildProps, TDataName>>): (WrappedComponent: React.ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<AllTodoListQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => React.ComponentClass<TProps, any>;
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
export declare function useAllTodoListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTodoListQuery, AllTodoListQueryVariables>): ApolloReactComponents.QueryResult<AllTodoListQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useAllTodoListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTodoListQuery, AllTodoListQueryVariables>): ApolloReactComponents.QueryTuple<AllTodoListQuery, Exact<{
    [key: string]: never;
}>>;
export declare type AllTodoListQueryHookResult = ReturnType<typeof useAllTodoListQuery>;
export declare type AllTodoListLazyQueryHookResult = ReturnType<typeof useAllTodoListLazyQuery>;
export declare type AllTodoListQueryResult = ApolloReactCommon.QueryResult<AllTodoListQuery, AllTodoListQueryVariables>;
export declare const LoginDocument: ApolloReactComponents.DocumentNode;
export declare type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
export declare type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;
export declare const LoginComponent: (props: LoginComponentProps) => JSX.Element;
export declare type LoginProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
    [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;
} & TChildProps;
export declare function withLogin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps, TDataName>>): (WrappedComponent: React.ComponentType<TProps & { [key in TDataName]: ApolloReactCommon.MutationFunction<LoginMutation, Exact<{
    email: string;
    password: string;
}>>; } & TChildProps>) => React.ComponentClass<TProps, any>;
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
export declare function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>): ApolloReactComponents.MutationTuple<LoginMutation, Exact<{
    email: string;
    password: string;
}>>;
export declare type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export declare type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export declare type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export declare const MeDocument: ApolloReactComponents.DocumentNode;
export declare type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;
export declare const MeComponent: (props: MeComponentProps) => JSX.Element;
export declare type MeProps<TChildProps = {}, TDataName extends string = 'data'> = {
    [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, MeQueryVariables>;
} & TChildProps;
export declare function withMe<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps, TDataName>>): (WrappedComponent: React.ComponentType<TProps & { [key in TDataName]: ApolloReactHoc.DataValue<MeQuery, Exact<{
    [key: string]: never;
}>>; } & TChildProps>) => React.ComponentClass<TProps, any>;
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
export declare function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactComponents.QueryResult<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>): ApolloReactComponents.QueryTuple<MeQuery, Exact<{
    [key: string]: never;
}>>;
export declare type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export declare type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export declare type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
