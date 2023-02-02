import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Header from './components/Header';
import Navbar from './components/Navbar';
import RestaurantCards from './components/RestaurantCards';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client = {client}>
    <Routes>
    
    </Routes>
    </ApolloProvider>
  );
}


export default App;
