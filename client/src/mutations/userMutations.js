import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;
const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
      loginUser(email: $email, password: $password) {
        username
        email
      }
    }
  `;


export { REGISTER_USER, LOGIN_USER };
