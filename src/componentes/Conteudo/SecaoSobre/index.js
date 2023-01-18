import React from "react";

export default function SecaoSobre(){
    return(
        <section>
            <div className="container">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>

                <div className="cardContainer">
                    <div className="card">
                        <img src="assets/loja.png"></img>
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card">
                        <img src="assets/atendimento.png"></img>
                        <h3>ATENDIMENTO FLEXIVEL</h3>
                        <p>Nossa equipe é treinada para te atender</p>
                    </div>
                </div>
            </div>
        </section>
    )
}