import React , { Component } from 'react';
import axios from 'axios'
import './styles.css'

class PostForm extends Component {
    constructor(props){
        super(props)

        this.state = { 
            nome: '',
            telefone: '',
            endereco: '',
            problema: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/api/cadastrar-cliente',this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)  
            })           
    }

    render(){
        const {nome , telefone , endereco , problema} = this.state
        
        return (
     
            <div id="forms">
                <div>Deixe-nos te ajudar ! =] </div><br></br>
                <form onSubmit={this.submitHandler} >
                    <div>
                        <input type="text" name="nome" value={nome}
                        placeholder="Digite seu nome" 
                        onChange={this.changeHandler}/>
                    </div><br></br>

                    <div>
                        <input type="text" name="telefone" value={telefone}
                        placeholder="Digite seu telefone" 
                        onChange={this.changeHandler}/>
                    </div><br></br>

                    <div>
                        <input type="text" name="endereco" value={endereco}
                        placeholder="Digite seu endereco" 
                        onChange={this.changeHandler}/>
                    </div><br></br>

                    <div>
                        <input type="text" name="problema" value={problema}
                        placeholder="Digite seu problema" 
                        onChange={this.changeHandler}/>
                    </div><br></br>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        )   
    }
}



export default PostForm
