import React from "react";

export default function SecaoContato(){
    return(
        <section>
            <div className="container">
                <h2>FALE CONOSCO</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="infoSocial">
                    <div className="contato">
                        <h3>Contato</h3>
                        <p><img src="assets/local.png"></img>Nova Iguaçu, RJ</p>
                        <p><img src="assets/telefone.png"></img></p>
                        <p><img src="assets/email.pmg"></img></p>
                    </div>
                    <div className="redesSociais">
                        <h3>Nossas Redes Sociais</h3>
                        <img src="assets/fb.png"></img>
                        <img src="assets/ig.png"></img>
                        <img src="assets/tt.png"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}