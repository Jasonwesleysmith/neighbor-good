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
  query jobs {
    jobs {
      _id
      job
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
