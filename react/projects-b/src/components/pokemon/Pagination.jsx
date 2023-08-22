import { styled } from "styled-components"

const Pagination = ({ pag, setApi }) => {

    const { next, previous } = pag;

    const cambiarURL = (param) => {
        if(param){
            setApi(param)
        }else{
            alert('Error');
        }
    }

    return(
        <Contenedor>
            <button className="btn-pag" onClick={() => cambiarURL(previous)}>Anterior</button>
            <button className="btn-pag" onClick={() => cambiarURL(next)}>Siguiente</button>
        </Contenedor>
    )

}

const Contenedor = styled.div`
    display: flex;
    justify-content: space-between;
    .btn-pag{
        padding: 5px 20px;
        border-radius: 5px;
        border: solid 2px rgba(0,0,0, 0.2);
        cursor: pointer;
        background-color: #2E86C1;
        color: white;
    }
`

export default Pagination