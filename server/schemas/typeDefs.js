const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    jobs: [Job]
  }

  type Job {
    _id: ID
    job: String
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
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobs: [Job]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String, jobs: [ID]): User
    addJob(
      job: String
      pay: String
      date: String
      time: String
      createdAt: String
      name: String
      phoneNumber: String
      location: String
      description: String
      additionalInfo: String
      username: String!
    ): Job
  }
`;

module.exports = typeDefs;
