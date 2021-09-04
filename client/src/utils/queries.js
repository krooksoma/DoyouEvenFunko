import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      funkos {
        _id
        model
        series
        number
        price
        image
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleProfile($userId: ID!) {
    profile(userId: $userId) {
      _id
      username      
    }
  }
`;

export const QUERY_FUNKOS = gql`
  query getFunkos {
    funkos{
      _id
      model
      series
      number
      price
      image
    }
  }
`;

export const QUERY_SINGLE_FUNKO = gql`
  query getSingleFunko($funkoId: ID!) {
    thought(funkoId: $funkoId) {
      _id
      model
      series
      number
      price
      image
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      password  
      funkos {
        _id
        model
        series
        number
        price
        image
      }     
    }
  }
`;
