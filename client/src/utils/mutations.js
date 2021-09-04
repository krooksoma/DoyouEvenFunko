import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_FUNKO = gql`
  mutation addFunko($model: String!, $series: String!, $number: Int!, $price: Float, $image: String ) {
    addFunko(model: $model, series: $series, number: $number, price: $price, image: $image ) {
      _id
      model
      series
      number
      price
      image    
    }
  }
`;


export const REMOVE_FUNKO = gql `
mutation removeFunko($funkoId: ID!){
  removeFunko(funkoId: $funkoId) {
      _id      
      email      
  }
}
`;
