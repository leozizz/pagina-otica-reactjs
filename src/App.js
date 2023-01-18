import React from "react"
import './App.css'

import Header from './componentes/Topo/'
import Conteudo from './componentes/Conteudo/'
import Footer from './componentes/Rodape'

export default function App () {
    return (
    <div>
        <Header></Header>
        <Conteudo></Conteudo>
        <Footer></Footer>
    </div>
    )
}