import React from 'react';
import Main from './layouts/Main';
import {UserProvider} from "./context/UserContext"
import './App.css';

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
