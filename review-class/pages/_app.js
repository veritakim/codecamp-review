import '../styles/globals.css';
import { createUploadLink } from "apollo-upload-client";
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql"
  })

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
