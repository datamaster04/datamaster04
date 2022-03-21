import React from "react";
import '../App.css';


export default function Home() {
    return (
        <section>
    <div className="waveWrapper waveAnimation long_background">
        <div className="waveWrapperInner bgTop">
            <div className="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
        </div>
        <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
        </div>
    </div>
        
    <div className="container">
        <div className="row justify-contify-center text-center g-0">
        <div className="col-12 col-lg-6">                              
      <p className="gaming">Gaming</p>
    </div>
    <div className="col-12 col-lg-6">
      <p className="innebandy_tekst">Innebandy</p>   
    </div>
    <div className="col-12 col-lg-6">
      <p className="ishockey_tekst">Ishockey</p>
    </div>
    <div className="col-12 col-lg-6">
      <p className="programmering_tekst">Programmering</p>
    </div>
    <div className="col-12 col-lg-6">
      <p className="hamkam_tekst">Fotball</p>
    </div>
    <div className="col-12 col-lg-6">
      <p className="youtube_tekst">Youtube og Video redigering</p>
    </div>
        </div>
    </div>

    <div className="kontaktinformasjon">
        <p className="kontakttekst">Navn: Sondre Røste-Kise
         <br />
         <a className="telefonlink" href="tel:95032146">Telefon: 95032146</a>
         <br />
         <a className="maillink" href="mailto:datamaster04@gmail.com">Mail: datamaster04</a>
            
        </p>
    </div>
        
    </section>
    
    )
}


