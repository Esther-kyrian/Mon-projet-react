import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({ nom: '', adresse: '', tel: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération du client:', error);
      }
    };
    fetchClient();
  }, [id]);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3001/clients/${id}`, client);
    navigate('/clients', { replace: true });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="mb-4 text-center">Mettre à jour le client</h1>
          <form>
            <div className="mb-3">
              <label className="form-label">Nom du client:</label>
              <input
                type="text"
                className="form-control"
                value={client.nom}
                onChange={(e) => setClient({ ...client, nom: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Adresse:</label>
              <input
                type="text"
                className="form-control"
                value={client.adresse}
                onChange={(e) => setClient({ ...client, adresse: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Téléphone:</label>
              <input
                type="text"
                className="form-control"
                value={client.tel}
                onChange={(e) => setClient({ ...client, tel: e.target.value })}
              />
            </div>
            <div className="d-grid">
              <button type="button" className="btn btn-primary" onClick={handleUpdate}>
                Mettre à jour
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateClient;