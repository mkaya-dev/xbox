import React from 'react'
import microsoft from "../Resimler/microsoft.png"
import xbox from "../Resimler/xbox.png"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

    return (
        <>
            <nav>
                <h3><img src={microsoft} style={{width:90}} /></h3>
                <h2 style={{marginLeft:20}}>I</h2>
                <h3><img src={xbox} style={{width:90,marginLeft:15}}/> </h3>
                <ul>
                    <li>Game Pass</li>
                    <li>Oyunlar</li>
                    <li>Cihazlar</li>
                    <li>Topluluk</li>
                    <li>Destek</li>
                    <li>Benim Xbox</li>
                    <li>Geliştiriciler</li>
                </ul>
                <ul style={{marginLeft:150}}>
                    <li>Tüm Microsoft</li>
                    <li>Ara <i class="fa-solid fa-magnifying-glass"></i></li>
                    <li>Sepet <i class="fa-solid fa-cart-shopping"></i></li>
                    <li>Oturum  Aç</li>
                    <li><i style={{fontSize:25}} class="fa-regular fa-circle-user"></i></li>
                </ul>
               

            </nav>


        </>
    )
}

export default Navbar;
