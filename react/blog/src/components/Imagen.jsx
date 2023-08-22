const Imagen = ({ classID, titulo }) => {

    return (
        <article class={`imagen imagen-${classID}`}>
            <div class="imagen-degradado">
                <h2 class="imagen-titulo">{titulo}</h2>
            </div>
        </article>
    )

}

export default Imagen