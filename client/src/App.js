import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";

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
          </Routes>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
