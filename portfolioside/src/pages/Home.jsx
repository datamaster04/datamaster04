import React from "react";
import '../App.css';


export default function Home() {
    return (
        <section>
      
        
        <div className='container'>
            <div className='HvorforHamar'>
                <p className='Tekst_HvorforHamar'>Hvorfor flytte til Hamar?</p>
            </div>
            <div className='row justify-content-center text-center g-0'>
                <div className='col-12 col-lg-6 turisme-test'>
                <h2 className='has-text-align-center has-primary-color has-text-color'> Turisme</h2>
                            <p className='has-text-align-center has-primary-color has-text-color'> Hamar er en by med mye turisme, vi har gamle 
                            attraksjoner som Kirsti Flagstad museum, Domkirkodden. Vi har også nye attraksjoner som Kulturhus, Kino, og et 
                            fantastisk landskap. Kom til Hamar, vi har flotte eiendommer, vinteraktiviteter, hoteller, og masse arrangementer. 
                            Vi er også Norges spisekammer her på østlandet.</p>
                            <h6 className='has-text-align-center has-accent-color has-text-color'>
                                    <a className='link-hamar-kommune' href='https://www.hamar.kommune.no/'>Hamar</a>
                            </h6>
                </div>
                <div className='col-12 col-lg-6 teknologi-test'>
                <h2 className='has-text-align-center has-primary-color has-text-color'> Teknologi & Gründer næring</h2>
                            <p className='has-text-align-center has-primary-color has-text-color'> Hamar er full
                             av teknologi, vi omgir oss i teknologi hele dagen. Det er elektriserte og automatiserte 
                             løsninger gjennom hele byen. Hamar er Norges spill hovedstad, det er mange muligheter 
                             i karrieren din her i Hamar regionen </p>
                            <h6 className='has-text-align-center has-accent-color has-text-color'>
                                    <a className='link-hamar-kommune' href='https://parkhamar.no/'>Park - Gründermiljøet</a>
                            </h6>
                </div>
                <div className='col-12 col-lg-6'>
                <h2 className='has-text-align-center has-primary-color has-text-color'> Teknologi & Gründer næring</h2>
                            <p className='has-text-align-center has-primary-color has-text-color'> Hamar er full
                             av teknologi, vi omgir oss i teknologi hele dagen. Det er elektriserte og automatiserte 
                             løsninger gjennom hele byen. Hamar er Norges spill hovedstad, det er mange muligheter 
                             i karrieren din her i Hamar regionen </p>
                            <h6 className='has-text-align-center has-accent-color has-text-color'>
                                    <a className='link-hamar-kommune' href='https://parkhamar.no/'>Park - Gründermiljøet</a>
                            </h6>
                </div>
            </div>
        </div>
        
        
    </section>
    )
}
