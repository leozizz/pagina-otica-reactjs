import React from "react"

import SecaoCapa from './SecaoCapa/'
import SecaoProdutos from './SecaoProdutos/'
import SecaoSobre from './SecaoSobre'
import SecaoContato from './SecaoContato'

export default function Conteudo(){
    return (
        <div>
        <SecaoCapa></SecaoCapa>
        <SecaoProdutos></SecaoProdutos>
        <SecaoSobre></SecaoSobre>
        <SecaoContato></SecaoContato>
        </div>
    )
}