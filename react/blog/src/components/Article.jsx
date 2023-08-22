const Article = ({ ruta, titulo, desc }) => {

    return(
        <article class="article">
            <img class="article-img" src={ruta} />
            <div class="article-contenido">
                <h2>{titulo}</h2>
                <p>{desc}</p>
            </div>
        </article>
    )

}

export default Article