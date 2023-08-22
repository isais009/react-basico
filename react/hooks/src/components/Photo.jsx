const Photo = ({ id, title, thumb }) => {

    return(
        <article>
            <h3>{id}.- {title}</h3>
            {/* <img src={thumb} /> */}
        </article>
    );

}

export default Photo