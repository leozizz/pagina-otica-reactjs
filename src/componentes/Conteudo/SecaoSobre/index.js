import React from "react";

export default function SecaoSobre(){
    return(
        <section className="secao-sobre">
            <div className="container limitar-secao">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="card-container">
                    <img src="assets/loja.png"></img>
                    <div className="card">
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card">
                        <h3>ATENDIMENTO FLEXIVEL</h3>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                    <img src="assets/atendimento.png"></img>
                </div>
            </div>
        </section>
    )
}