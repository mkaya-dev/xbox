import React from 'react'
import Slider from '../Componenet/Slider';
import "./All.css"
import resim1 from "../Resimler/x1.jpg"
import resim2 from "../Resimler/x2.jpg"
import resim3 from "../Resimler/x3.jpg"
import resim4 from "../Resimler/x4.jpg"
import resim5 from "../Resimler/x5.jpg"
import resim6 from "../Resimler/x6.jpg"
import resim8 from "../Resimler/x7.jpg"
import resim9 from "../Resimler/x8.jpg"
import resim10 from "../Resimler/x9.jpg"
import resim11 from "../Resimler/x10.jpg"
import resim12 from "../Resimler/x11.jpg"
import resim13 from "../Resimler/x12.jpg"

const Home = () => {
    return (
        <>
            <Slider />
            <div className='kutu1'>
                <div className='kutu1ıc'>
                    <div class="container text-center">
                        <div class="row align-items-start">
                            <div class="col">
                                <img style={{ width: 80 }} src="https://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg" alt="" data-loc-image="keyImageicon1" srcset="https://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg" /><br />
                                <span className='cızgı' style={{ color: "green" }}>GAME PASS</span>

                            </div>
                            <div class="col">
                                <img style={{ width: 80 }} src="https://assets.xboxservices.com/assets/e2/a8/e2a830ea-71e7-42fa-af94-7a07d66f150e.svg?n=Homepage-FY20_Home-Icons-0_Games_72x56-01.svg" alt="" data-loc-image="keyImageicon2" srcset="https://assets.xboxservices.com/assets/e2/a8/e2a830ea-71e7-42fa-af94-7a07d66f150e.svg?n=Homepage-FY20_Home-Icons-0_Games_72x56-01.svg" /><br />
                                <span className='cızgı' style={{ color: "green" }}>OYUNLAR</span>
                            </div>
                            <div class="col">
                                <img style={{ width: 80 }} src="https://assets.xboxservices.com/assets/12/74/12744081-03f9-42a4-87be-e869ddce3327.svg?n=Homepage-FY20_Home-Icons-0_Consoles_72x56-02.svg" alt="" data-loc-image="keyImageicon3" srcset="https://assets.xboxservices.com/assets/12/74/12744081-03f9-42a4-87be-e869ddce3327.svg?n=Homepage-FY20_Home-Icons-0_Consoles_72x56-02.svg" /><br />
                                <span className='cızgı' style={{ color: "green" }}>KONSOLLAR</span>
                            </div>
                            <div class="col">
                                <img style={{ width: 80 }} src="https://assets.xboxservices.com/assets/29/ff/29ffa9b2-2d48-433b-abb7-99229bcbaa8b.svg?n=Homepage-FY20_Home-Icons-0_Accessories_72x56-01.svg" alt="" data-loc-image="keyImageicon4" srcset="https://assets.xboxservices.com/assets/29/ff/29ffa9b2-2d48-433b-abb7-99229bcbaa8b.svg?n=Homepage-FY20_Home-Icons-0_Accessories_72x56-01.svg" /><br />
                                <span className='cızgı' style={{ color: "green" }}>AKSESUARLAR</span>
                            </div>
                            <div class="col">
                                <img style={{ width: 80 }} src="https://assets.xboxservices.com/assets/50/9a/509a35c3-472d-46ed-b29d-2f47adca7be9.svg?n=Homepage-FY20_Home-Icons-0_Deals_72x56-01.svg" alt="" data-loc-image="keyImageicon5" srcset="https://assets.xboxservices.com/assets/50/9a/509a35c3-472d-46ed-b29d-2f47adca7be9.svg?n=Homepage-FY20_Home-Icons-0_Deals_72x56-01.svg" /><br />
                                <span className='cızgı' style={{ color: "green" }}>FIRSATLAR</span>
                            </div>
                            <div class="col">
                                <img style={{ width: 80 }} src="https://assets.xboxservices.com/assets/30/ab/30abec76-ab4c-4275-b0ca-725a6eb2f85f.svg?n=Homepage-FY20_Home-Icons-0_Sign-In_72x56-01.svg" alt="" data-loc-image="keyImageicon6" srcset="https://assets.xboxservices.com/assets/30/ab/30abec76-ab4c-4275-b0ca-725a6eb2f85f.svg?n=Homepage-FY20_Home-Icons-0_Sign-In_72x56-01.svg" /><br />
                                <span className='cızgı' style={{ color: "green" }}>OTURUM AÇIN</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='kutu2'>
                <div className='sol'>
                    <img  src={resim1} style={{ width: 800, padding: 5 }} />
                    <div style={{ marginLeft: 50, marginTop: -290 }} className='yuksel'>
                        <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>KONSOL-BİLGİSEYAR</button><br/><br/>
                        <h1 style={{ fontSize: 50, color: "black" }}>Madden NFL 24 </h1><br/>
                        <h4 style={{ fontSize: 20, color: "black" }}>EA Play aracılığıyla Ultimate Team Supercharge Paketi'ni kapın </h4><br/>
                        <p className='siyah' style={{color:"black", fontSize: 18 }} class="card-text">HEMEN KATILIN <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                </div>
                <div className='sag'>
                    <div style={{ width: 880, marginTop: 4, background: "green" }} class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <div class="card-body" style={{ padding: 3, marginLeft: 50, marginTop: 100 }} >
                                    <h1 style={{ color: "white" }} class="card-title">Yeni favori oyununuzu keşfedin</h1><br/>
                                    <p style={{ color: "white" }} class="card-text">Aylık düşük bir ucret karşılıgında<br />yüzlerce oyunu oynayın</p><br/>
                                    <p className='yesil' style={{color:"white", fontSize: 18 }} class="card-text">HEMEN KATILIN <i class="fa-solid fa-angle-right"></i></p>
                                </div>
                            </div>
                            <div style={{ width: 450, marginLeft: 130 }} class="col-md-4">
                                <img  src={resim2} style={{ width: 900 }} class="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sag'>
                    <img src={resim3} style={{ width: 880, height: 870, marginTop: -12, padding: 3 }} />
                    <div style={{ marginLeft: 50, marginTop: -325 }} className='yuksel'>
                        <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>YENİ</button>
                        <h1 style={{ fontSize: 50, color: "black" }}>Oyun deneyiminiz bir üst seviyeye <br /> çıkarın</h1>
                        <h4 style={{ fontSize: 20, color: "black" }}>Xbox Kablosuz Oyun Kumandası - Dream Vapor Special Edition ile rekabeti <br />buharlaştırın  </h4>
                        <p className='siyah' style={{color:"black", fontSize: 18 }} class="card-text">AYRINTILARA GÖZ ATIN  <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                </div>
            </div>
            <div className='kutu3'>
                <div className='sol'>
                    <div class="card mb-3" style={{ width: 790, height: 500, background: "green", padding: 1, marginLeft: 5, marginTop: -20 }}>
                        <div class="row g-0">
                            <div style={{ width: 420 }} class="col-md-4">
                                <img  src={resim4} style={{ width: 700, height: 499, marginLeft: -3 }} class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-5">
                                <div class="card-body" style={{ padding: 30, marginTop: 50, }}>
                                    <h1 style={{ color: "white" }} class="card-title">Banishers: Ghosts<br />of New Eden</h1>
                                    <p style={{ color: "white" }} class="card-text">Her kararının Önemli olduğu hikaye<br />odaklı Aksiyon-RPG'de hayaletleri<br />avlayın</p>
                                    <p className='yesil' style={{color:"white", fontSize: 18 }} class="card-text">HEMEN KATILIN <i class="fa-solid fa-angle-right"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='kutu4'>
                <div className='sag'>
                    <div class="card mb-4" style={{ border: "1px solid white" }}>
                        <div style={{ width: 880, marginTop: 5, background: "green", height: 510 }} class="card mb-1">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <div class="card-body" style={{ padding: 60 }} >
                                        <h6 style={{ color: "white", fontSize: 30 }} class="card-title">Son of Nunu:A<br />League of Legends <br />Story</h6>
                                        <p style={{ color: "white" }} class="card-text">iki sıkı arkadaş bir cılgın macera</p>
                                        <p className='yesil' style={{color:"white", fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i></p>
                                    </div>
                                </div>
                                <div style={{ width: 450, marginLeft: 130 }} class="col-md-4">
                                    <img src={resim6} style={{ width: 900 }} class="img-fluid rounded-start" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sol'>
                    <div class="card mb-1   " style={{ border: "1px solid white" }}>
                        <div className='sol'>
                            <div class="card mb-1" style={{ width: 795, height: 508, background: "green", marginTop: -5 }}>
                                <div class="row g-0">
                                    <div style={{ width: 422 }} class="col-md-4">
                                        <div class="card-body" style={{ padding: 40, marginTop: 50, }}>
                                            <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>ŞİMDİ SATIŞTA</button>
                                            <h1 style={{ color: "white" }} class="card-title">TEKKEN 8</h1>
                                            <p style={{ color: "white" }} class="card-text">HeR Vuruşun gücünü hisedin ve<br />yumruğunuzun kaderle<br />buluşmasına izin verin </p>
                                            <p className='yesil' style={{color:"white", fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i></p>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <img src={resim5} style={{ width: 750, height: 499, marginLeft: 35 }} class="img-fluid rounded-start" alt="..." />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='kutu6'>
                <div className='sol'>
                    <img style={{ marginTop: -17 }} srcset="https://assets.xboxservices.com/assets/a7/60/a760fa08-94c1-4c34-8c6f-54a5ea12f2d3.jpg?n=294958693_Home-Hero-1084_1904x805.jpg" src="https://assets.xboxservices.com/assets/a7/60/a760fa08-94c1-4c34-8c6f-54a5ea12f2d3.jpg?n=294958693_Home-Hero-1084_1904x805.jpg" alt="Arka planda Xbox Game Pass ile oynayabileceğiniz oyunların kutu resimlerinden oluşan bir mozaikle birlikte Robot White oyun kumandası ile Xbox Series S ve üzerinde Xbox Game Pass Ultimate yazan bir kart." data-loc-image="keyImagefullanim" data-loc-alt="keyAltfull" />
                </div>
                <div className='sag' style={{ marginRight: 90, marginTop: -550 }}>
                    <h2 style={{ fontSize: 50 }}>Xbox Series S - <br />Başlangıç Paketi </h2><br/>
                    <p style={{ fontSize: 17 }}>Xbox Series S'i ve 3 aylık Game Pass Ultimate ile birlikte<br /> yüzlerce oyun edinin</p><br/>
                    <button className='yesılbutton'>DAHA FAZLA BİLGİ EDİNİN <i class="fa-solid fa-angle-right"></i></button>
                </div>
            </div>
            <div className='kutu7'>
                <div className='sol'>
                    <div class="card mb-1   " style={{ border: "1px solid white" }}>
                        <div className='sol'>
                            <div class="card mb-1" style={{ width: 825, height: 505, background: "green", marginTop: 10, marginLeft: 1 }}>
                                <div class="row g-0">
                                    <div style={{ width: 422 }} class="col-md-2">
                                        <div class="card-body" style={{ padding: 40, marginTop: 50, }}>
                                            <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>ŞİMDİ SATIŞTA</button>
                                            <h1 style={{ color: "white" }} class="card-title">Stumble Guys</h1>
                                            <p style={{ color: "white" }} class="card-text">Milyonlarca oyuncuya katılarak bu eğlence dolu, çok oyunculu ve nakavt odaklı Battle Royale'de zafere ulaş! Koşuşturma kaosunda yer almaya hazır mısın? Koşmak, sendelemek, düşmek, zıplamak ve kazanmak hiç bu kadar eğlenceli olmamıştı! </p>
                                            <p className='yesil' style={{ color:"white",fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i></p>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <img src={resim8} style={{ width: 750, height: 499, marginLeft: 55 }} class="img-fluid rounded-start" alt="..." />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sag'>
                    <div class="card mb-1" style={{ width: 850, height: 505, background: "green", marginTop: 10, border: "1px solid white" }}>
                        <div class="row g-1">
                            <div style={{ width: 422 }} class="col-md-4">
                                <div class="card-body" style={{ padding: 40, marginTop: 50, }}>
                                    <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>YENİ SEZON</button>
                                    <h1 style={{ color: "white" }} class="card-title">Apex Legends</h1>
                                    <p style={{ color: "white" }} class="card-text">Apex Legends: Breakout'ta <br /> Keninizi Aksiyonun Ortasına Atın </p>
                                    <p className='yesil' style={{color:"white", fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i></p>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <img src={resim9} style={{ width: 750, height: 499, marginLeft: 70 }} class="img-fluid rounded-start" alt="..." />

                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className='sol'>
                    <div class="card mb-1   " style={{ border: "1px solid white" }}>
                        <div className='sol'>
                            <div class="card mb-1" style={{ width: 825, height: 505, marginTop: -128, marginLeft: 1, border: "1px solid white" }}>
                                <div class="row g-1">
                                    <div style={{ width: 422 }} class="col-md-2">
                                        <img src={resim10} style={{ width: 750, height: 499, marginLeft: 5 }} class="img-fluid rounded-start" alt="..." />

                                    </div>
                                    <div class="col-md-5">
                                        <div class="card-body" style={{ padding: 40, marginTop: 50, }}>
                                            <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>KONSOL - BİLGİSEYAR</button>
                                            <h1 style={{ color: "black" }} class="card-title">Halo Infiniti: Spirt<br /> of Fire  </h1>
                                            <p style={{ color: "white" }} class="card-text"> </p>
                                            <p className='siyah' style={{color:"black", fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sag'>
                    <img src={resim11} style={{ width: 850, height: 870, marginTop: -128, padding: 3 }} />
                    <div style={{ marginLeft: 50, marginTop: -325 }} className='yuksel'>
                        <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>KONSOL - BİLGİSEYAR</button>
                        <h1 style={{ fontSize: 50, color: "white" }}>Palword (Oyun Önizlemesi) </h1>
                        <h4 style={{ fontSize: 20, color: "white" }}>Şimdi PC Game Pass veya Ultimate ile erişebilir  </h4><br />
                        <p className='yesil' style={{color:"white", fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN  <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                </div>
                <div className='sol'>
                    <img src={resim12} style={{ width: 830, padding: 5, marginTop: -5 }} />
                    <div style={{ marginLeft: 50, marginTop: -265 }} className='yuksel'>
                        <h1 style={{ fontSize: 50, color: "white" }}>WWE 2K24 </h1>
                        <h4 style={{ fontSize: 20, color: "white" }}>Hikayenizi Tamamlayın </h4><br />
                        <p className='yesil' style={{color:"white",  fontSize: 18 }} class="card-text">ÖN ŞİPARİŞ VERİN <i class="fa-solid fa-angle-right"></i></p>
                    </div>
                </div>
                <div className='sag'>
                    <div class="card mb-1" style={{ width: 850, height: 505, marginTop: 5, border: "1px solid white" }}>
                        <div class="row g-0">
                            <div style={{ width: 422 }} class="col-md-4">
                                <div class="card-body" style={{ padding: 40, marginTop: 50, }}>
                                    <button style={{ background: "#FDBF60", color: "black", border: "1px solid #211C6A", height: 25, marginTop: 10 }}>YENİ SEZON</button>
                                    <h1 style={{ color: "black" }} class="card-title">Diablo IV : Season <br /> of the Construct</h1>
                                    <p style={{ color: "black" }} class="card-text">Yeni bir arkadaş edinin yeni<br /> tehlikeli zindanlarda hayatta kalın<br />Yeni Ödüller kazanın  </p>
                                    <p className='siyah' style={{ color:"black", fontSize: 18 }} class="card-text">ŞİMDİ EDİNİN <i class="fa-solid fa-angle-right"></i></p>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <img src={resim13} style={{ width: 900, height: 565, marginLeft: 70 }} class="img-fluid rounded-start" alt="..." />

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='kutu8'>
                <div className='kutu8ıc'>
                    <p style={{ marginTop: 20 }}>Xbox'ı takip edin</p>
                    <button style={{ marginLeft: 10, width: 40, height: 40, marginTop: 10,background:"white" }} className='btn btn-light'><i class="fa-brands fa-facebook-f"></i></button>
                    <button style={{ marginLeft: 10, width: 40, height: 40, marginTop: 10 ,background:"white"}} className='btn btn-light'><i class="fa-brands fa-x-twitter"></i></button>
                    <button style={{ marginLeft: 10, width: 40, height: 40, marginTop: 10,background:"white" }} className='btn btn-light'><i class="fa-brands fa-instagram"></i></button>
                    <button style={{ marginLeft: 10, width: 40, height: 40, marginTop: 10,background:"white" }} className='btn btn-light'><i class="fa-brands fa-whatsapp"></i></button>
                    <button style={{ marginLeft: 10, width: 40, height: 40, marginTop: 10 ,background:"white"}} className='btn btn-light'><i class="fa-brands fa-tiktok"></i></button>
                    <button style={{ marginLeft: 10, width: 40, height: 40, marginTop: 10,background:"white" }} className='btn btn-light'><i class="fa-brands fa-youtube"></i></button>
                </div>
            </div>
            <div className='kutu9'>
                <div className='kutu9ıc'>
                    <ul>
                        <h6 style={{ marginLeft: 10 }}>Goz At</h6>
                        <li>Xbox Konnsoları </li><br />
                        <li>Xbox oyunları </li><br />
                        <li>Xbox Game Pass</li><br />
                        <li>Xbox aksesuarları</li>
                    </ul>
                    <ul>
                        <h6 style={{ marginLeft: 10 }}>Kaynaklar</h6>
                        <li>Xbox Desteği</li><br />
                        <li>Geri bildirim</li><br />
                        <li>Topluluk Standartları</li><br />
                        <li>Işıga Duyarlı Nöbet Uyarısı</li>
                    </ul>
                    <ul>
                        <h6 style={{ marginLeft: 10 }}>Microsoft Store</h6>
                        <li>Microsoft hesapı</li><br />
                        <li>Microsoft Store Destegi</li><br />
                        <li>iadeler</li><br />
                    </ul>
                    <ul>
                        <h6 style={{ marginLeft: 10 }}>Geliştiriciler için</h6>
                        <li>Oyunlar</li><br/>

                    </ul>
                </div>
            </div>
            <div className='kutu10'>
                <div className='kutu10ıc'>
                    <li><i class="fa-solid fa-earth-americas"></i> Türkçe(Türkiye)</li>
                    <li>Gizlilik Tercihleriniz </li>
                    <li style={{marginLeft:100}}>Microsofa Başvurun</li>
                    <li>Gizlilik ve Tanımlama Bilgileri</li>
                    <li>Tanımlama bilgilerini yönetin</li>
                    <li>Kulanım Şartlarıı </li>
                    <li>Ticari Markalar</li>
                    <li>Üçüncü Taraf Bildirimleri</li>
                    <li>Reklamsız hakkında</li>
                    <li>@ Microsoft 2024</li>



                </div>
            </div>

        </>
    )
}

export default Home;
