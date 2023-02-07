// Will need to define Query and Mutation types
// Mutations addUser, Login, makeReservation, cancelReservation

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String! email: String!, password: String!): Auth
    login( email: String! password:String!): Auth
    makeReservation(resInfo:ResInfo! ): User
    cancelReservation(restaurant_id: ID!): User

  }

    input ResInfo {

      restaurant_id: ID!
    name: String!
    location: String!
    description: String!
    image: String!
    hours: String!
    menu: [String]
    tags: [String]

    }
  
  type User {
    _id: ID!
    username: String!
    email: String
    madeReservations: [Restaurant]
  }

  type Restaurant {
    restaurant_id: ID!
    name: String!
    location: String!
    description: String!
    image: String!
    hours: String!
    menu: [String]
    tags: [String]

  }

  type Auth {
    token: ID!
    user: User
  }

  `;

module.exports = typeDefs;