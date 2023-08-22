import styled from 'styled-components'

const Article = ({titulo, desc, src}) => {

    return (
        <Content>
            <img className='imagen' src={src} />
            <h2>{titulo}</h2>
            <p>{desc}</p>
        </Content>
    )

}

const Content = styled.article`
    
    border-bottom: solid 2px rgba(0,0,0, 0.05);
    padding: 20px 0px;

    .imagen{
        width: 80%;
    }
`

export default Article