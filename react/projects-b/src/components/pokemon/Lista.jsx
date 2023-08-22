import { styled } from "styled-components"
import Pokemon from "./Pokemon"

const Lista = ({ pokemones }) => {

    return(
        <Contenedor>
            {
                pokemones.map((pokemon, index) => (
                    <Pokemon 
                        key={index} 
                        pokemon={pokemon}    
                    />
                ))
            }
        </Contenedor>
    )

}

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`

export default Lista