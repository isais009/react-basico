import { useState, useEffect } from 'react'

const Contador = () => {

    const [ numero, setNumero ] = useState(0);

    useEffect(()=>{
        console.log('Numero cambio de estado');
    }, [numero]);

    function sumar(){
        if(numero < 100){
            setNumero(numero + 1);
        }else{
            alert('El numero tiene que ser menor o igual a 100');
        }
    }

    function restar(){
        if(numero > 0){
            setNumero(numero - 1);
        }else{
            alert('El numero tiene que ser mayor a 0');
        }
    }

    return(
        <div>
            <p>Numero: {numero}</p>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
        </div>
    );

}

export default Contador;
