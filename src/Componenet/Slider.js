import React from 'react'
import "../Pages/All.css"
import resim1 from "../Resimler/slayt1.jpg"
import resim2 from "../Resimler/slayt2.jpg"
import resim3 from "../Resimler/slayt3.jpg"


const Slider = () => {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={resim2} style={{ height: 600 }} class="d-block w-100" alt="..." />
                        <div className='yuksel'>
                            <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>YENİ SEZON</button>
                            <h1 style={{ fontSize: 80 }}>Call of Duty: Warzone<br /> ve Modern Warfer III </h1>
                            <h4 style={{ fontSize: 30 }}>Fortune's Keep'e geri dönün ve 2.<br />Sezon'daki Çürümeden kurtulun.</h4>
                            <button className='cızgi' style={{ background: "#21d921", width: 160, height: 40, border: "1px solid white" }}>Şimdi Edinin <i class="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={resim1} style={{ height: 600 }} class="d-block w-100" alt="..." />
                        <div className='yuksel'>
                            <button style={{ background: "#FDBF60", color: "black", border: "1px solid #40A2E3", height: 25, marginTop: 10 }}>KONSOL - BİLGİSEYAR</button>
                            <h1 style={{ fontSize: 80 }}>Persona 3 Reload</h1>
                            <h4 style={{ fontSize: 30 }}>Pc Game Pass veya Ultimate ile<br />Dark Hour'a adım atın.</h4>
                            <button className='cızgi' style={{ background: "#21d921", width: 160, height: 40, border: "1px solid white" }}>ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i> </button>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <img src={resim3} style={{ height: 600 }} class="d-block w-100" alt="..." />
                        <div className='yuksel'>
                            <button style={{ background: "#FDBF60", color: "black", border: "1px solid inherit", height: 25, marginTop: 10 }}>KONSOL</button>
                            <h1 style={{ fontSize: 80 }}>MLB The<br /> Show 23 </h1>
                            <h4 style={{ fontSize: 30 }}>Xbox Game Pass Ultimate ile <br /> Yayınlandıgı Gün oynayın</h4>
                            <button className='cızgi' style={{ background: "#21d921", width: 160, height: 40, border: "1px solid white" }}>Şimdi Edinin <i class="fa-solid fa-angle-right"></i></button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Slider;
