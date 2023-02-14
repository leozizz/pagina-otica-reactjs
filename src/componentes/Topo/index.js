import React from 'react'

export default function Header(){
    return(
        <header>
            <div className='header-container limitar-secao'>
                <div className='logo-container'>
                    <img className='logo' src="assets/logo.png"/>
                </div>
                <nav className='nav-menu'>
                    <a href="#produtos">PRODUTOS</a>
                    <a href="sobre">SOBRE</a>
                    <a href="contato">CONTATO</a>
                </nav>
            </div>
        </header>
    )
}