import Logo from './Logo'

const Footer = () => {
    
    return (
        <footer>
            <div class="acerca-de">
                <div class="contenedor-limite">
                    {/* <img src="https://cdn.superaficionados.com/img/logo.svg" alt="Logo Super aficionados" /> */}
                    
                    <Logo />
                    <p>
                        SuperAficionados es un sitio web con informaciones y curiosidades para ti, 
                        que eres fan de superhéroes, películas, series, cómics, juegos y mucho más.
                    </p>
                </div>
            </div>

            <div class="nav-footer">
                
                <div class="nav-footer--content contenedor-limite">
                    <nav>
                        <a href="">Últimas Novedades</a>
                        <a href="">Populares</a>
                        <a href="">Contacto</a>
                    </nav>
                    <p class="copy">2018 - 2023 © 7Graus</p>
                </div>

            </div>
        </footer>
    )

}

export default Footer