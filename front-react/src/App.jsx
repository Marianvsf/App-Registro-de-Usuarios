import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './front/js/components/home';
import RegistrationForm from './front/js/components/registrationForm';
import UsersList from './front/js/components/usersList';
import './front/styles/App.css';



function App() {


  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/registration_form' element={<RegistrationForm />} />
        <Route path='/users' element={<UsersList />} />
      </Routes>
      </div>
      
    </>
  )
}

export default App;
