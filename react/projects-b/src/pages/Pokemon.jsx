import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Lista from '../components/pokemon/Lista'
import Pagination from '../components/pokemon/Pagination';
import Search from '../components/pokemon/Search';

const Pokemon = () => {

    const [ search, setSearch ] = useState('');
    const [ pokemones, setPokemones ] = useState([]);
    const [ pagination, setPagination ] = useState({});
    const [ api, setApi ] = useState('https://pokeapi.co/api/v2/pokemon');

    useEffect(()=>{
        getPokemon();
    }, [pagination])


    const getPokemon = async() => {
        const poke = await fetch(api);
        const response = poke.json();
        const { results, next, previous } = await response;
        
        setPagination({ next, previous });

        let lista = [];
        // const lista2 = [];

        for(const item of results){
            const single = await fetch(item.url);
            const response = single.json();
            const { name, sprites} = await response;
            lista = [
                ...lista,
                {
                    name,
                    thumb: sprites.front_default
                }
            ];

            // lista2.push({
            //     name,
            //     thumb: sprites.front_default
            // });
        }

        setPokemones(lista);
    }
    
    return(
        <Contenedor>
            <h2>Pokemon: {search}</h2>
            <Search search={search} setSearch={setSearch} />
            <Pagination pag={pagination} setApi={setApi} />
            <Lista pokemones={
                pokemones.filter((item) => item.name.includes(search.toLowerCase()))
            } />
        </Contenedor>
    )

}


const Contenedor = styled.div`
    width: 98%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`

export default Pokemon