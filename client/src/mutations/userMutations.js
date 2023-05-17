import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      username
      email
    }
  }
`;

export { REGISTER_USER };
