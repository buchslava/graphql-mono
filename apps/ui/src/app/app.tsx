import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/react-hooks";
import { GlobalProvider } from './GlobalContext';
import Tasks from './Tasks';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <GlobalProvider>
          <Tasks />
        </GlobalProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
