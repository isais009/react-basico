import { useState } from 'react'
import Formulario from "../components/galeria/Formulario"
import Article from '../components/galeria/Article'

import styled from 'styled-components'

const Galeria = () => {

    const [posts, setPosts] = useState([]);

    const [ form, setForm ] = useState({
        titulo: '',
        descripcion: '',
        url: ''
    });


    const clearForm = () => {
        setForm({
            titulo: '',
            descripcion: '',
            url: ''
        });
    }

    const escucharInput = (e) => {
        const input = e.target.name;
        const value = e.target.value;

        setForm(function(state){
            return {
                ...state,
                [input]: value
            }
        });
    }

    const sendForm = (e) =>{
        e.preventDefault();
        setPosts((state) => ([
            ...state,
            form
        ]));

        clearForm();
    }

    return (
        <Div>
            <h2>Pagina Galeria</h2>
            <Formulario 
                form={form}
                onChange={escucharInput}
                onSubmit={sendForm}     
            />


            {
                posts.map((item, index) => (
                    <Article key={index} titulo={item.titulo} desc={item.descripcion} src={item.url} />
                ))
            }
        </Div>
    )

}

const Div = styled.div`

    width: 98%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;

`

export default Galeria