import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import { GlobalProvider } from './GlobalContext';
import Tasks from './Tasks';

const {
  NX_API_URL,
} = process.env;

const client = new ApolloClient({
  uri: NX_API_URL,
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalProvider>
        <Tasks />
      </GlobalProvider>
    </ApolloProvider>
  );
}

export default App;
