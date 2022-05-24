const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    jobs: [Job]
  }

  type Job {
    _id: String
    pay: String
    date: String
    time: String
    createdAt: String
    name: String
    phoneNumber: String
    location: String
    description: String
    additionalInfo: String
    username: String
    claimbedBy: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobs(username: String): [Job]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(username: String!): Job
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
