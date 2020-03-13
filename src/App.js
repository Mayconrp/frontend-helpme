import React from 'react';
import axios from 'axios'
import Header from './components/Header';
//import PostForm from './components/Post';
import Form from './components/Form' ;
import './styles.css';

/* const handleSubmit = values => console.log(JSON.stringify(values)) */
const handleSubmit = values => axios.post('http://localhost:8080/api/cadastrar-cliente', values)
        .then(response => {
          console.log(response)
          alert("Usuario cadastrado com sucesso! ")
          // cagado precisa arrumar
          values.nome = ""
          values.telefone = ""
          values.endereco = ""
          values.problema = ""
        })
        .catch(error => {
          alert("Usuario ja cadastrado !" ) 
        }) 
      
      const initialValues = {}

const App = () => (
    <div className="App">
      
      <Header></Header>

      <Form handleSubmit={handleSubmit} initialValues={initialValues}/>

      {/* <PostForm></PostForm> */}
    </div>

)

export default App;
