const Article = ({ titulo, desc }) => {

    return (
        <article>
            <img src="https://images.unsplash.com/photo-1689631857988-a46ee3adf86b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80" width={100} />
            <h2>{titulo}</h2>
            <p>{desc}</p>
        </article>
    );

}

export default Article;
