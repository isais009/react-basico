import Imagen from "./Imagen"

const Galeria = () => {

    return (
        <section className="contenedor-imagenes">

            <div className="imagenes contenedor-limite">

                <Imagen 
                    classID="1" 
                    titulo="Piratas del Caribe | Orden cronológico de la saga"
                />

                <Imagen 
                    classID="2" 
                    titulo="¿Quiénes son los 14 villanos de Boku No Hero Academia más poderosos?"
                />

                <Imagen 
                    classID="3" 
                    titulo="Las 51 mejores películas de extraterrestres que deberías ver"
                />

                <Imagen 
                    classID="4" 
                    titulo="Las 46 frases más memorables de Disney"
                />

                <Imagen 
                    classID="5" 
                    titulo="Test | ¿Qué personaje de Kimetsu No Yaiba eres?"
                />

                <Imagen 
                    classID="6" 
                    titulo="Los mejores 25 animes tristes para llorar"
                />

            </div>

        </section>
    )
    
}

export default Galeria;