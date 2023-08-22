import styled from 'styled-components'

const Numero = ({num, setOp}) => {

    return(
        <Button onClick={() => setOp((actual) => actual + '' + num)}>{num}</Button>
    )

}

const Button = styled.button`
    background-color: #2E86C1;
    color: white;
    padding: 20px;
    font-size: 20px;
    border-radius: 5px;
    border: solid 2px rgba(0,0,0, 0.3);
    cursor: pointer;
`

export default Numero