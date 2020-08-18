import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getTodoList?: Maybe<Array<Maybe<Todo>>>;
  allTodoList?: Maybe<Array<Maybe<Todo>>>;
  getUsers?: Maybe<Array<Maybe<Users>>>;
  me?: Maybe<Users>;
  helloNestJS: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  userId: Scalars['ID'];
  title: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  id: Scalars['ID'];
  nickname: Scalars['String'];
  email: Scalars['String'];
  loginstatus: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Scalars['Boolean']>;
  deleteTodo?: Maybe<Scalars['Boolean']>;
  register?: Maybe<Scalars['Boolean']>;
  login?: Maybe<Scalars['Boolean']>;
  testUserLogin?: Maybe<Scalars['Boolean']>;
  logOut?: Maybe<Scalars['Boolean']>;
  deleteAccount?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationRegisterArgs = {
  registerInput: RegisterInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationTestUserLoginArgs = {
  loginInput: LoginInput;
};


export type MutationDeleteAccountArgs = {
  deleteAccountInput: DeleteAccountInput;
};

export type CreateTodoInput = {
  title: Scalars['String'];
};

export type RegisterInput = {
  nickname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type DeleteAccountInput = {
  nickname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AllTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTodoListQuery = (
  { __typename?: 'Query' }
  & { allTodoList?: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'userId' | 'title'>
  )>>> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'nickname' | 'email'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  nickname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);


export const AllTodoListDocument = gql`
    query AllTodoList {
  allTodoList {
    id
    userId
    title
  }
}
    `;

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
export function useAllTodoListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllTodoListQuery, AllTodoListQueryVariables>) {
        return ApolloReactHooks.useQuery<AllTodoListQuery, AllTodoListQueryVariables>(AllTodoListDocument, baseOptions);
      }
export function useAllTodoListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllTodoListQuery, AllTodoListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllTodoListQuery, AllTodoListQueryVariables>(AllTodoListDocument, baseOptions);
        }
export type AllTodoListQueryHookResult = ReturnType<typeof useAllTodoListQuery>;
export type AllTodoListLazyQueryHookResult = ReturnType<typeof useAllTodoListLazyQuery>;
export type AllTodoListQueryResult = ApolloReactCommon.QueryResult<AllTodoListQuery, AllTodoListQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password})
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    nickname
    email
  }
}
    `;

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
export function useMeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = ApolloReactCommon.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($nickname: String!, $email: String!, $password: String!) {
  register(registerInput: {nickname: $nickname, email: $email, password: $password})
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      nickname: // value for 'nickname'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;