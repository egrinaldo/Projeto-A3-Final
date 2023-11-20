import './SobrePag.css'


export default function SobrePag() {
    return (
        <div>
            <main className='corpo'>
                <div className='imgC'>
                    <img src="src/assets/img_sobre/peacegroup.jpeg" alt="" />
                    <h1>BEM-VINDO AO GAME HUB</h1>
                    <p>Acreditamos que os jogos são uma forma poderosa de unir pessoas de todas as origens.
                        Por isso, nos esforçamos para criar experiências de jogo que sejam acessíveis e inclusivas.
                        Oferecemos uma ampla variedade de jogos, para atender a diferentes interesses e habilidades.
                        Acreditamos que quando todo mundo tem a chance de jogar, o mundo fica um lugar mais feliz e unido.</p>

                </div>

                <div>
                    <h2>Desejamos que os jogos sejam:</h2>
                </div>
                <section className='"acredito"'>
                    <div className='acredimg'>
                        <img src="src/assets/img_sobre/download__1_-removebg.png" alt="" />
                    </div>
                    <div className='acredtxt'>
                        <h2>Inclusivo</h2>
                        <p>Acreditamos que a diversidade é o que nos torna únicos e especiais.
                            Por isso, nos esforçamos para criar uma comunidade onde todos possam se sentir à vontade para ser quem são.
                            Estamos abertos a novas perspectivas e experiências, e celebramos a diversidade de nossos fãs.</p>
                        <button className='bn'><a href="/Cadastro" className='cadast'>JUNTE-SE À NOSSA COMUNIDADE</a></button>
                    </div>
                </section>
            </main>

        </div>
    )
}
