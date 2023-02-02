import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Main from '../src/components/Main';
import Reservations from '../src/components/ReservationForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client = {client}>
    <Routes>
    <Route path = "/Gastronauts" element = {<Main />} />
    <Route path = "/reservation" element = {<Reservations />} />
    </Routes>
    </ApolloProvider>
  );
}


export default App;
