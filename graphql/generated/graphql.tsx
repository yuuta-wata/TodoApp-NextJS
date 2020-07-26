import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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


export const AllTodoListDocument = gql`
    query AllTodoList {
  allTodoList {
    id
    userId
    title
  }
}
    `;
export type AllTodoListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AllTodoListQuery, AllTodoListQueryVariables>, 'query'>;

    export const AllTodoListComponent = (props: AllTodoListComponentProps) => (
      <ApolloReactComponents.Query<AllTodoListQuery, AllTodoListQueryVariables> query={AllTodoListDocument} {...props} />
    );
    
export type AllTodoListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllTodoListQuery, AllTodoListQueryVariables>
    } & TChildProps;
export function withAllTodoList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllTodoListQuery,
  AllTodoListQueryVariables,
  AllTodoListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllTodoListQuery, AllTodoListQueryVariables, AllTodoListProps<TChildProps, TDataName>>(AllTodoListDocument, {
      alias: 'allTodoList',
      ...operationOptions
    });
};

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