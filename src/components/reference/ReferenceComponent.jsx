import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api/api';

const ReferenceComponent = () => {
  const [references, setReferences] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [newReference, setNewReference] = useState({
    name: '',
    biography: '',
    category: '',
    photo_url: '',
  });
  
  const [searchName, setSearchName] = useState('');
  const [searchId, setSearchId] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [referenceByName, setReferenceByName] = useState(null);
  const [referenceById, setReferenceById] = useState(null);
  const [referencesByCategory, setReferencesByCategory] = useState([]);
  const [sortedReferences, setSortedReferences] = useState([]);

  const fetchReferences = async () => {
    try {
      const response = await api.get('/search');
      setReferences(response.data.result);
    } catch (error) {
      console.error('Erro ao buscar referências:', error);
    }
  };

  const fetchReferenceByName = async (name) => {
    try {
      const response = await api.get(`/search/name/${name}`);
      setReferenceByName(response.data.references);
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setErrorMessage('Referência não encontrada');
        setReferenceByName([]);
      } else {
        setErrorMessage('Erro ao buscar referência por nome');
      }
    }
  };

  const fetchReferenceById = async () => {
    try {
      const response = await api.get(`/search/${searchId}`);
      setReferenceById(response.data.reference);
    } catch (error) {
      console.error('Erro ao buscar referência por ID:', error);
    }
  };

  const fetchReferencesByCategory = async () => {
    try {
      const response = await api.get(`/search/category/${searchCategory}`);
      setReferencesByCategory(response.data.references);
    } catch (error) {
      console.error('Erro ao buscar referências por categoria:', error);
    }
  };

  const fetchSortedReferences = async () => {
    try {
      const response = await api.get('/sorted');
      setSortedReferences(response.data.sortedReferences);
    } catch (error) {
      console.error('Erro ao buscar referências ordenadas:', error);
    }
  };

  const createReference = async () => {
    try {
      const response = await api.post('/createreference', newReference);
      console.log('Referência criada com sucesso:', response.data.message);
      fetchReferences(); 
    } catch (error) {
      console.error('Erro ao criar referência:', error);
    }
  };

  const deleteReference = async (id) => {
    try {
      const response = await api.delete(`/deletereference/${id}`);
      console.log('Referência deletada:', response.data.reference);
      fetchReferences(); 
    } catch (error) {
      console.error('Erro ao deletar referência:', error);
    }
  };

  useEffect(() => {
    fetchReferences();
  }, []);

  return (
    <div className="container">
      <h1>Referências</h1>
      <div className="references-list">
        {references.map((ref) => (
          <div className="card" key={ref.id}>
            <img src={ref.photo_url} alt={ref.name} />
            <h4>{ref.name}</h4>
            <p>{ref.biography}</p>
            <p>Categoria: {ref.category}</p>
            <button onClick={() => deleteReference(ref.id)}>Deletar</button>
          </div>
        ))}
      </div>

      <h2>Criar Nova Referência</h2>
      <input
        type="text"
        placeholder="Nome"
        value={newReference.name}
        onChange={(e) => setNewReference({ ...newReference, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Biografia"
        value={newReference.biography}
        onChange={(e) => setNewReference({ ...newReference, biography: e.target.value })}
      />
      <input
        type="text"
        placeholder="Categoria"
        value={newReference.category}
        onChange={(e) => setNewReference({ ...newReference, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL da Foto"
        value={newReference.photo_url}
        onChange={(e) => setNewReference({ ...newReference, photo_url: e.target.value })}
      />
      <button onClick={createReference}>Criar</button>
      
      </div>
  );
};

      
    

export default ReferenceComponent;
