import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL_END_POINT } from "./Consts";
const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};
const Client = new ApolloClient({
  uri: BASE_URL_END_POINT,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,

  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

export default Client;
