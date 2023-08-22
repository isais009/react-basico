import styled from 'styled-components'
import Numero from '../components/calculadora/Numero'
import Screen from '../components/calculadora/Screen'
import Signo from '../components/calculadora/Signo'
import { useState } from 'react'


const Calculadora = () => {

    const [op, setOp] = useState('');
    const [res, setRes] = useState(0);

    return (
        <CustomDiv>
            <h2>Calculadora</h2>

            <div className='screens'>
                <Screen value={op} /> =
                <Screen value={res}/>
            </div>

            <div className='botones'>
                <div className='numeros'>
                    {
                        [0,1,2,3,4,5,6,7,8,9].map((item) => <Numero key={item} num={item} setOp={setOp} />)
                    }
                </div>

                <div className='signos'>
                    {
                        ['+', '-', '*', '/'].map((item) => <Signo key={item} signo={item} setOp={setOp} />) 
                    }
                </div>
            </div>

            <Button onClick={() => { setRes(0); setOp(''); }}>DEL</Button>
            <Button onClick={() => setRes(eval(op))}>Resolver</Button>
        </CustomDiv>
    )

}


const CustomDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    margin: 20px auto;

    .botones{
        display: flex;
        margin-top: 10px;
        .numeros,
        .signos{
            display: flex;
            flex-wrap: wrap;
        }
    }

    .screens{
        display: flex;
        gap: 10px;
    }
`


const Button = styled.button`
    display: block;
    margin-top: 5px;
    padding: 10px;
    background-color: #943126;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
`

export default Calculadora