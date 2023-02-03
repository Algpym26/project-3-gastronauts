import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Main from '../src/components/Main';
import Reservations from './components/ReservationForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client = {client}>
    <Routes>
    <Route path = "/" element = {<Main />} />
    <Route path = "/reservation" element = {<Reservations />} />
    </Routes>
    </ApolloProvider>
  );
}


export default App;
