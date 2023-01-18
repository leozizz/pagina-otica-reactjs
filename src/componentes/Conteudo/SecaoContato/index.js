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
                        <p><img src="assets/telefone.png"></img>(21) 9999-9999</p>
                        <p><img src="assets/email.png"></img>contato@oticavida.com</p>
                    </div>
                    <div className="redesSociais">
                        <h3>Nossas Redes Sociais</h3>
                        <p><img src="assets/fb.png"></img>/OticaVida</p>
                        <p><img src="assets/ig.png"></img>@oticavidarj</p>
                        <p><img src="assets/tt.png"></img>@oticavidarj</p>                       
                    </div>
                </div>
            </div>
        </section>
    )
}