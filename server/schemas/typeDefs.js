const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String  
    funkos: [Funko]  
  }

  type Funko {
    _id: ID
    model: String
    series: String
    number: Int 
    price: Float
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }
  
  enum Order {
    ASC
    DESC
  }
  
  input SortBy {
    field: String!
    order: Order!
  }

  type Query {
    users: [User]
    user(userId: ID!): User 
    funkos(username: String!): [Funko]
    funko(funkoId: ID!): Funko
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String, password: String): Auth   
    addFunko(model: String, series: String, number: Int, price: Float, image: String): Funko
    removeFunko(funkoId: ID!): User
  }
  `;
  

module.exports = typeDefs;
