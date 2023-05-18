import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";
import Favorites from "./Pages/Favorites";
import Register from "./Pages/Register";
import Login from "./Pages/Login";


const client = new ApolloClient({
  uri: "http://localhost:3333/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
