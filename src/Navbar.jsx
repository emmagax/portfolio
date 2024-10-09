import Nav from 'react-bootstrap/Nav';
import './Navbar.css'

function Menu() {
    return (
        <>
            <nav id='navbar' className="justify-content-center" activeKey="/home">
                <a id='navlink' href="#">Home</a>
                <a id='navlink' href='#'>About Me</a>
                <a id='navlink' href='#'>Projects</a>
                <a id='navlink' href='#'>Contact</a>
                <span className="dot"></span>
            </nav>
        </>
    );
}

export default Menu;