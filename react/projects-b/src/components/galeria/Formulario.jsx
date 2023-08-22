import styled from 'styled-components'

const Formulario = ({ form, onChange, onSubmit }) => {

    return (

        <Form onSubmit={onSubmit}>

            <div className='input'>
                <label>Titulo</label>
                <input 
                    type='text' 
                    name='titulo' 
                    placeholder='Escribir el titulo' 
                    onChange={onChange}
                    value={form.titulo}
                />
            </div>

            <div className='input'>
                <label>Descripcion</label>
                <textarea 
                    name='descripcion' 
                    placeholder='Escribir descripcion' 
                    onChange={onChange} 
                    value={form.descripcion}
                ></textarea>
            </div>

            <div className='input'>
                <label>URL de imagen</label>
                <input 
                    type='url' 
                    name='url' 
                    placeholder='Ingresar url de imagen' 
                    onChange={onChange} 
                    value={form.url}   
                />
            </div>


            <input type='submit' value="Enviar"/>

        </Form>

    )

}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;

    .input{
        display: flex;
        flex-direction: column;

        input, textarea{
            padding: 10px 20px;
            font-family: 'Montserrat', sans-serif;
        }
    }

    input[type='submit']{
        padding: 10px;
        border-radius: 10px;
        border:solid 3px rgba(0,0,0, 0.1);
        background-color: #16A085;
        color: white;
        cursor: pointer;
    }
`


export default Formulario