import { Field, Formik, ErrorMessage } from 'formik'
import styled from 'styled-components'

const Validacion = () => {

    const send = (values, {resetForm}) => {
        console.log('formulario enviado');
        console.log(values);
        resetForm();
    }

    const formValidate = (values) => {
        
        let errors = {};

        if(!values.nombre){
            errors.nombre = 'Porfavor ingresar un nombre'
        }else if(values.nombre.length < 3){
            errors.nombre = 'El nombre debe contener mas de 2 caracteres'
        }else if(!/^[a-zA-Z\s]+$/.test(values.nombre)){
            errors.nombre = 'Solo se permiten ingresar letras'
        }


        if(!values.apellido){
            errors.apellido = 'Porfavor ingresar un apellido'
        }else if(values.nombre.length < 3){
            errors.nombre = 'El apellido debe contener mas de 2 caracteres'
        }else if(!/^[a-zA-Z\s]+$/.test(values.nombre)){
            errors.nombre = 'Solo se permiten ingresar letras'
        }


        if(!values.correo){
            errors.correo = 'Porfavor ingresar un correo electronico'
        }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.correo)){
            errors.correo = 'Este no es un correo electronico'
        }


        if(!values.telefono){
            errors.telefono = 'Porfavor ingresar un numero de telefono'
        }else if(!/^-?\d+$/.test(values.telefono)){
            errors.telefono = 'Solo se permiten ingresar numeros'
        }else if(values.telefono.length < 7 || values.telefono.length > 8){
            errors.telefono = 'Los caracteres no pueden ser menor a 7 ni mayor a 8'
        }

        return errors;   
    }

    return(
        <>

            <Formik
                initialValues={{
                    nombre: '',
                    apellido: '',
                    correo: '',
                    telefono: ''
                }}
                validate={formValidate}
                onSubmit={send}
            >                       

                {({ errors, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <center><h2>Formulario de registro</h2></center> 

                        <Field 
                            type='text' 
                            name='nombre' 
                            placeholder='Nombre'
                        />
                        
                        <ErrorMessage 
                            name='nombre' 
                            component={() => <Error>{errors.nombre}</Error>}
                        />


                        <Field 
                            type='text' 
                            name='apellido'
                            placeholder='Apellido'
                        />

                        <ErrorMessage 
                            name='apellido' 
                            component={() => <Error>{errors.apellido}</Error>}
                        />


                        <Field 
                            type='text'
                            name='correo'
                            placeholder='Correo electronico'
                        />

                        <ErrorMessage 
                            name='correo' 
                            component={() => <Error>{errors.correo}</Error>}
                        />


                        <Field 
                            type='text' 
                            name='telefono' 
                            placeholder='Telefono'  
                        />

                        <ErrorMessage 
                            name='telefono' 
                            component={() => <Error>{errors.telefono}</Error>}
                        />

                        <input type='submit' value='Enviar' />
                    </Form>
                )}

            </Formik>

        </>
    )
    
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;

    input{
        padding: 8px 12px;
        border-radius: 5px;
        border: solid 2px rgba(0,0,0, 0.05);
    }

    input[type="submit"]{
        background-color: #7D3C98;
        color: white;
        cursor: pointer;
    }
`


const Error = styled.p`
    font-size: 12px;
    color: #CB4335;
`


export default Validacion