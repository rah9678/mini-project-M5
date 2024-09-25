import React, { useEffect, useState } from 'react';
import api from '../../services/api/api';

const Search = () => {
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

      <h2>Buscar Referência por Nome</h2>
      <input
        type="text"
        placeholder="Nome"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button onClick={fetchReferenceByName}>Buscar</button>
      {referenceByName && (
        <div className="result-container">
          <h3>Resultado da busca por nome:</h3>
          <p>{referenceByName.name} - {referenceByName.category}</p>
        </div>
      )}

      <h2>Buscar Referência por ID</h2>
      <input
        type="text"nplaceholder="ID" value={searchId}  onChange={(e) => setSearchId(e.target.value)}
      />
      <button onClick={fetchReferenceById}>Buscar</button>
      {referenceById && (
        <div className="result-container">
          <h3>Resultado da busca por ID:</h3>
          <p>{referenceById.name} - {referenceById.category}</p>
        </div>
      )}

      <h2>Buscar Referências por Categoria</h2>
      <input type="text" placeholder="Categoria" value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}/>
      <button onClick={fetchReferencesByCategory}>Buscar</button>
      {referencesByCategory.length > 0 && (
        <div>
          <h3>Resultados da busca por categoria:</h3>
          <ul>
            {referencesByCategory.map((ref) => (
              <li key={ref.id}>{ref.name}</li>
            ))}
          </ul>
        </div>
      )}
      



      <h2>Buscar Todas as Referências em Ordem Alfabética</h2>
      <button onClick={fetchSortedReferences}>Buscar Ordenadas</button>
      {sortedReferences.length > 0 && (
        <div>
          <h3>Referências em ordem alfabética:</h3>
          <ul>
            {sortedReferences.map((ref) => (
              <li key={ref.id}>
                {ref.name} - {ref.category}
              </li>
            ))}
               </ul>
        </div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Search;
