import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
    addUser(email: $email, password: $password, username: $username) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob(
    $pay: String
    $date: String
    $time: String
    $name: String
    $phoneNumber: String
    $location: String!
    $description: String!
    $additionalInfo: String
    $username: String!
  ) {
    addJob(
      pay: $pay
      date: $date
      time: $time
      name: $name
      phoneNumber: $phoneNumber
      location: $location
      description: $description
      additionalInfo: $additionalInfo
      username: $username
    ) {
      pay
      date
      time
      createdAt
      name
      phoneNumber
      location
      description
      additionalInfo
      username
    }
  }
`;
