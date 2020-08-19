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

export type CreateTodoMutationVariables = Exact<{
  title: Scalars['String'];
}>;


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createTodo'>
);

export type GetTodoListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodoListQuery = (
  { __typename?: 'Query' }
  & { getTodoList?: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'userId' | 'title'>
  )>>> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Users' }
    & Pick<Users, 'id' | 'nickname' | 'email'>
  )> }
);


export const CreateTodoDocument = gql`
    mutation CreateTodo($title: String!) {
  createTodo(input: {title: $title})
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const GetTodoListDocument = gql`
    query GetTodoList {
  getTodoList {
    id
    userId
    title
  }
}
    `;

/**
 * __useGetTodoListQuery__
 *
 * To run a query within a React component, call `useGetTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, baseOptions);
      }
export function useGetTodoListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, baseOptions);
        }
export type GetTodoListQueryHookResult = ReturnType<typeof useGetTodoListQuery>;
export type GetTodoListLazyQueryHookResult = ReturnType<typeof useGetTodoListLazyQuery>;
export type GetTodoListQueryResult = ApolloReactCommon.QueryResult<GetTodoListQuery, GetTodoListQueryVariables>;
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