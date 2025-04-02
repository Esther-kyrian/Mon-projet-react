// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

// Importation des composants avec des barres obliques (/)
import CreateClient from './components/creatclient';
import ClientList from './components/clientslist';
import ClientDetails from './components/clientdetails';
import UpdateClient from './components/updateclient';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientList />} />
        <Route path="/clients" element={<ClientList />} />
        <Route path="/clients/create" element={<CreateClient />} />
        <Route path="/clients/:id" element={<ClientDetails />} />
        <Route path="/clients/:id/update" element={<UpdateClient />} />
      </Routes>
    </Router>
  );
};

export default App;