import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Main from '../src/components/Main';
import Reservations from './components/ReservationForm';
import Sidebar from './components/Navbar';
// import Login from './components/loginForm';
// import SignUp from './components/signupForm';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client = {client}>
    {/* <Sidebar> */}
    <Routes>
    <Route path = "/" element = {<Main />} />
    <Route path = "/reservation" element = {<Reservations />} />
    {/* <Route path = "/login" element = {<Login />} /> */}
    {/* <Route path = "/signup" element = {<SignUp />} /> */}
    </Routes> 
    {/* </Sidebar> */}
    </ApolloProvider>
  );
}


export default App;
