import React, { useEffect, useState } from 'react';

import api from '../../services/api/api'

const Form = () => {
  const [references, setReferences] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [newReference, setNewReference] = useState({
    name: '',
    biography: '',
    category: '',
    photo_url: '',
  });
  

//   const fetchReferences = async () => {
//     try {
//       const response = await api.get('/search');
//       setReferences(response.data.result);
//     } catch (error) {
//       console.error('Erro ao buscar referências:', error);
//     }
//   };

  const createReference = async () => {
    try {
      const response = await api.post('/createreference', newReference);
      console.log('Referência criada com sucesso:', response.data.message);
      fetchReferences(); 
    } catch (error) {
      console.error('Erro ao criar referência:', error);
    }
  };

//   useEffect(() => {
//     fetchReferences();
//   }, []);

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

      
    

export default Form;
