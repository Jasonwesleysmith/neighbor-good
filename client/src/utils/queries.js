import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;

export const QUERY_JOBS = gql`
  query jobs($username: String) {
    jobs(username: $username) {
      _id
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

export const QUERY_JOB = gql`
  query job($id: ID!) {
    job(_id: $id) {
      _id
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

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      jobs {
        _id
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
  }
`;
