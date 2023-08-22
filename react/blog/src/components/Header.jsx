import Logo from './Logo'
import Menu from './Menu'

const Header = () =>{

    return (
        <header className="header-top-main">
            <section className="contenedor-top contenedor-limite">
                <Logo/>
                <Menu />
            </section>
        </header>
    );

}

export default Header