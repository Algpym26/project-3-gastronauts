import { gql } from "@apollo/client";

export const GET_ME = gql`

query getMe {
  me {
      username
      email
      madeReservations{
        _id
        name
        location
        description

      }


  }


}


`;