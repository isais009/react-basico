import styled from 'styled-components'

const Signo = ({signo, setOp}) => {

    return <Button onClick={() => setOp((actual) => actual + '' + signo)}>{signo}</Button>

}

const Button = styled.button`
    background-color: #D35400;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    border: solid 3px rgba(0,0,0,0.2);
    border-radius: 5px;
    cursor: pointer;
`


export default Signo