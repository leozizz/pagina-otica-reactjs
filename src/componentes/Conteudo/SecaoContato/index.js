import React from "react";

export default function SecaoContato(){
    return(
        <section className="secao-contato">
            <div className="container limitar-secao">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="info-social">
                    <div className="contato">
                        <h3>Contato</h3>
                        <div className="item-container">
                            <img src="assets/local.png"></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className="item-container">
                            <img src="assets/telefone.png"></img>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className="item-container">
                            <img src="assets/email.png"></img>
                            <p>contato@oticavida.com</p>
                        </div>                        
                    </div>
                    <div className="redes-sociais">
                        <h3>Nossas Redes Sociais</h3>
                        <div className="item-container">
                            <img src="assets/fb.png"></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className="item-container">
                            <img src="assets/ig.png"></img>
                            <p>@oticavidarj</p>
                        </div>
                        <div className="item-container">
                            <img src="assets/tt.png"></img>
                            <p>@oticavidarj</p>                       
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}