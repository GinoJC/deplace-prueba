import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import SearchContextProvider from 'context/searchContext';
import FilterContextProvider from 'context/filterContext';
import Layout from 'components/layout';

function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SearchContextProvider>
        <FilterContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FilterContextProvider>
      </SearchContextProvider>
    </ApolloProvider>
  )
}

export default App
