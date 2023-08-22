import Article from "./Article";

const App = () => {

    const nombre = 'Isaias';
    const apellido = 'Chavez';

    return(
        <div className="contendor">
            <h3>{nombre} {apellido}</h3>
            <Article 
                titulo="Lorem ipsum dolor sit amet, consectetur"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et odio non nisi ultrices euismod at vehicula leo. Donec gravida congue dui pretium efficitur. Sed nec orci blandit urna venenatis placerat. Ut ut leo sed mauris fringilla finibus. Aliquam porttitor nisi sit amet nisi imperdiet sodales. Phasellus tincidunt fringilla efficitur. Curabitur rutrum leo mi, et volutpat mi aliquam lobortis. Proin egestas dictum lacus, fermentum bibendum justo elementum quis. Duis ultricies molestie ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            />

            <Article
                titulo="Ut ut leo sed mauris"
                desc="Proin egestas dictum lacus, fermentum bibendum justo elementum quis. Duis ultricies molestie ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            />
        </div>
    );

}

export default App;