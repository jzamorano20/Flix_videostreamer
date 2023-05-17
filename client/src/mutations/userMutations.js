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
const LOGIN_USER = gql`
mutation loginUser(
	$email: String!
	$password: String!
)
{
	loginUser(email: $email, password: $password){
		email
	}
}`
export { REGISTER_USER };
