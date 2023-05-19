// import jwt from 'jsonwebtoken';

// const verifyToken = () => {
//   const token = localStorage.getItem('token');

//   if (token) {
//     try {
//       const decodedToken = jwt.verify(token, process.env.REACT_APP_JWT_SECRET);
//       return decodedToken;
//     } catch (err) {
//       console.error('Invalid Token', err);
//       localStorage.removeItem('token');
//       return null;
//     }
//   } else {
//     return null;
//   }
// };

// export default verifyToken;







// import decode from 'jwt-decode';

// class AuthService {
//     getProfile() {
//         return decode(this.getToken());
//     }

//     loggedIn() {
//         const token = this.getToken();
//         return token && !this.isTokenExpired(token) ? true : false;
//     }

//     isTokenExpired(token) {
//         const decoded = decode(token);
//         if (decoded.exp < Date.now() / 1000) {
//             localStorage.removeItem('id_token');
//             return true;
//         }
//         return false;
//     }

//     getToken() {
//         return localStorage.getItem('id_token');
//     }

//     login(idToken) {
//         localStorage.setItem('id_token', idToken);
//         window.location.assign('/');
//     }

//     logout() {
//         localStorage.removeItem('id_token');
//         window.location.reload();
//     }
// }

// export default new AuthService();
