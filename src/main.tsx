import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {ApolloClient ,InMemoryCache, HttpLink } from "@apollo/client";
import {ApolloProvider } from "@apollo/client/react";
import { BrowserRouter } from 'react-router-dom';


const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
)
