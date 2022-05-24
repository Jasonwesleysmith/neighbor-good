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

// export const MY_JOBS = gql`
  
// `;

// export const UNCLAIMED_JOBS = gql`
  
// `;
