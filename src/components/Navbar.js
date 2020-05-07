import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav-wrapper amber darken-3">
        <div className="container">
            <a href="/"className="brand-logo">Mee_Notebook</a>
            <ul className="right">
                <li><a href="/">Home</a></li>
                <li><a href="/bio">Bio</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
    
}

export default Navbar;