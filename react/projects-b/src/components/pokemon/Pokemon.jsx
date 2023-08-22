import { styled } from "styled-components"

const Pokemon = ({ pokemon }) => {

    const { name, thumb } = pokemon;

    return(
        <Div>
            <img src={thumb} alt={name} />
            <h2>{name}</h2>
        </Div>
    )

}

const Div = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 3px 3px 3px rgba(0,0,0, 0.05);
    cursor: pointer;
    &:hover{
        background-color: #f2f2f2;
    }
`

export default Pokemon