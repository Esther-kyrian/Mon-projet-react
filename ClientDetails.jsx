import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ClientDetails = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du client:', error);
        setClient(null);
      }
    };
    fetchClient();
  }, [id]);

  if (!client) {
    return (
      <div className="container mt-4">
        <h1 className="mb-4 text-center">Détails du client</h1>
        <p className="text-center">Client non trouvé ou en cours de chargement...</p>
        <div className="text-center">
          <Link to={`/clients`} className="btn btn-secondary">
            Retour
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center text-primary">Détails du client</h1>
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <strong>Nom du client:</strong> {client.nom}
          </p>
          {client.adresse && (
            <p className="card-text">
              <strong>Adresse:</strong> {client.adresse}
            </p>
          )}
          <p className="card-text">
            <strong>Téléphone:</strong> {client.telephone}
          </p>
          <div className="mt-3">
            <Link to={`/clients`} className="btn btn-primary">
              Retour à la liste des clients
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;