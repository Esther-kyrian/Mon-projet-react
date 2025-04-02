import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ClientList = () => {
  const [clients, setClients] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des clients:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/clients/${id}`);
      fetchData();
    } catch (error) {
      console.error('Erreur lors de la suppression du client:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-primary">Liste des clients</h1>
      <div className="d-flex justify-content-center mb-3">
        <Link to={`/clients/create`} className="btn btn-success">
          <i className="bi bi-plus-circle me-1"></i> Ajouter un client
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>{client.nom}</td>
                <td>{client.email}</td>
                <td>{client.telephone}</td>
                <td>
                  <Link
                    to={`/clients/edit/${client.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    <i className="bi bi-pencil-square me-1"></i> Modifier
                  </Link>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="btn btn-sm btn-danger"
                  >
                    <i className="bi bi-trash me-1"></i> Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientList;