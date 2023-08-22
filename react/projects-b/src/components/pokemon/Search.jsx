import { styled } from "styled-components"

const Search = ({ search, setSearch }) => {

    return(
        <Input 
            type="text"
            placeholder="Buscador"
            value={search} 
            onChange={(e) => setSearch(e.target.value)}
        />
    )

}

const Input = styled.input`
    width: 100%;
    border: solid 3px rgba(0,0,0, 0.2);
    padding: 10px 20px;
    border-radius: 20px;
    margin-bottom: 10px;

    &:focus{
        outline: none;
    }
`

export default Search