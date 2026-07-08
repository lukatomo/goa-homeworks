import react from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <Link to="/"></Link>
            <Link to="/about"></Link>
            <Link to="/contact"></Link>
        </nav>
    );
}

export default NavBar;