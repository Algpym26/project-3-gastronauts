// Will need mutation for logging in, adding a user, making a reservation and canceling a reservation

import { gql } from "@apollo/client";

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

export const ADD_RESERVATION = gql`
  mutation makeReservation ($resInfo: resInfo!){
    makeReservation(resInfo: $resInfo){
      _id
      username
      email
      madeReservations {
        name
        location
        description
        image
        hours
        menu
        tags
      }

    }

  }


`;
export const REMOVE_RESERVATION = gql`  
  mutation cancelReservation ($restaurant_id: ID!){
    cancelReservation (restaurant_id: $restaurant_id){
      _id
      username
      email
      madeReservations {
        name
        location
        description
        image
        hours
        menu
        tags
      }
    }

  }

`;
