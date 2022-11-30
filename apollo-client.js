import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/josh4324/rsvpweb",
  cache: new InMemoryCache(),
});

export default client;
