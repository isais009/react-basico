import Article from "./Article"
import Article2 from "./Article2"


const Contenido = () => {

    return(
        <div class="contenedor-article-aside contenedor-limite">

            <section class="articles">

                <Article
                    titulo="One Piece | Guía completa de arcos y sagas del anime"
                    desc="One Piece es un anime que cuenta la historia de Luffy, un pirata 
                            que busca un tesoro conocido como el One Piece, y quiere convertirse 
                            en el próximo Rey de los Piratas. Su primer episodio se emitió..."
                    ruta="https://cdn.superaficionados.com/imagenes/arcos-sagas-anime-one-piece-54n.jpg"
                />


                <Article
                    titulo="Los 37 doramas más populares internacionalmente"
                    desc="One Piece es un anime que cuenta la historia de Luffy, un pirata 
                            que busca un tesoro conocido como el One Piece, y quiere convertirse 
                            en el próximo Rey de los Piratas. Su primer episodio se emitió..."
                    ruta="https://cdn.superaficionados.com/imagenes/los-15-doramas-mas-populares-internacionalmente-54n.jpg"
                />


                <Article
                    titulo="¡52 interesantes animes que no puedes dejar de ver!"
                    desc="One Piece es un anime que cuenta la historia de Luffy, un pirata 
                            que busca un tesoro conocido como el One Piece, y quiere convertirse 
                            en el próximo Rey de los Piratas. Su primer episodio se emitió..."
                    ruta="https://cdn.superaficionados.com/imagenes/25-interesantes-animes-que-no-puedes-dejar-de-ver-54n.jpg"
                />


                <Article
                    titulo="Descubre el orden cronológico adecuado para ver las películas de DC"
                    desc="One Piece es un anime que cuenta la historia de Luffy, un pirata 
                            que busca un tesoro conocido como el One Piece, y quiere convertirse 
                            en el próximo Rey de los Piratas. Su primer episodio se emitió..."
                    ruta="https://cdn.superaficionados.com/imagenes/orden-cronologico-peliculas-dc-comics-54n.jpg"
                />


                <Article
                    titulo="Anime | Descubre los mejores Isekai hasta el momento"
                    desc="One Piece es un anime que cuenta la historia de Luffy, un pirata 
                            que busca un tesoro conocido como el One Piece, y quiere convertirse 
                            en el próximo Rey de los Piratas. Su primer episodio se emitió..."
                    ruta="https://cdn.superaficionados.com/imagenes/anime-descubre-los-mejores-isekai-hasta-el-momento-54n.jpg"
                />

            </section>

            <aside class="secundario">
    
                <Article2/>
                <Article2/>
                <Article2/>
                <Article2/>

            </aside>

        </div>
    )

}

export default Contenido