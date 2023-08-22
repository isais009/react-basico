import styled from 'styled-components'

const Screen = ({value}) => {

    return(
        <DivStyle>{value}</DivStyle>
    )

}


const DivStyle = styled.div`

    display: inline-block;
    background-color: #E3E3E3;
    border-radius: 5px;
    padding: 20px 40px;
    text-align: center;
    font-size: 40px;
    font-weight: 900;
    border: solid 2px rgba(0,0,0, 0.8);

`


export default Screen;