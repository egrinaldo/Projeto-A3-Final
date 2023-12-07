import './SobrePag.css'


export default function SobrePag() {
    return (
      <div>
        <main className='corpo'>
          <div className='imgC'>
          <img id='imgC' src="src/assets/img_sobre/peacegroup.jpeg" alt="" />
            <h1 className='bemv'>BEM-VINDO AO GAME HUB</h1>
            <p className='texto0'>Acreditamos que os jogos são uma forma poderosa de unir pessoas de todas as origens.
        Por isso, nos esforçamos para criar experiências de jogo que sejam acessíveis e inclusivas.
        Oferecemos uma ampla variedade de jogos, para atender a diferentes interesses e habilidades.
        Acreditamos que quando todo mundo tem a chance de jogar, o mundo fica um lugar mais feliz e unido.</p>

          </div>

         <div id='desejamos'>
          <h2>Desejamos que os jogos sejam:</h2>
         </div>
         <section className='acredito'>
          <div className='acredimg'>
            <img src="src/assets/img_sobre/download__1_-removebg.png" alt="" />
          </div>
          <div className='acredtxt'>
            <h3 className='h3inclu'>Inclusivo</h3>
            <p className='texto1'>Acreditamos que a diversidade é o que nos torna únicos e especiais.
          Por isso, nos esforçamos para criar uma comunidade onde todos possam se sentir à vontade para ser quem são.
          Estamos abertos a novas perspectivas e experiências, e celebramos a diversidade de nossos fãs.</p>
          <button className='bn'><a href="/Cadastro" className='cadast'>JUNTE-SE À NOSSA COMUNIDADE</a></button>
          </div>
         </section>

          <div className='acess'>
            <section className='acredito2'>
              <div className='acredtxt2'>
                <h3 className='h3acess'>Acessível a todos</h3>
                <p className='texto2'>Por isso, nos esforçamos para tornar os jogos mais acessíveis e inclusivos.
          Oferecemos uma ampla variedade de recursos de acessibilidade, para que todos possam jogar da maneira que funcione melhor para eles.
          Acreditamos que quando todos têm a oportunidade de jogar, o mundo fica um lugar mais feliz e unido.</p>
              </div>
              <div className='acredimg2'>
                <img  src="src/assets/img_sobre/download__1_-removebg-Cadeirante.png" alt="" />
              </div>
            </section>
          </div>

          <div className='seg'>
            <section className='acredito3'>
              <div className='acredimg3'>
              <img src="src/assets/img_sobre/seguranca.png" alt="" />
              </div>
              <div className='acredtxt3'>
              <h3 className='h3seg'>Seguro para todos</h3>
                <p className='texto3'>Jogos são uma parte importante da vida, mas é importante jogar de forma segura e responsável.
            Nos esforçamos para criar um lugar onde todos possam jogar sem medo de serem prejudicados ou discriminados.</p>
              </div>
            </section>
          </div>
        </main>

      </div>
    )
  }
