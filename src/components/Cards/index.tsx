import React from 'react'
import { Main } from './styled'
import santander from '../../assets/santander 1.png'
import { Link } from 'react-router-dom'

const Cards = () => {
    return (
        <Main>
            <div className = "cardContainer">
                <div className = "nickName">
                    <img src={santander} alt="Santander" />
                    <p>Santander</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum assumenda quae, quasi explicabo quos necessitatibus culpa cumque facere voluptates perspiciatis, hic illum delectus! Obcaecati amet eaque sapiente quibusdam optio.</p>
                <button>Saiba mais</button>
            </div>
            <div className = "cardContainer">
                <div className = "nickName">
                    <img src={santander} alt="Santander" />
                    <p>Santander</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum assumenda quae, quasi explicabo quos necessitatibus culpa cumque facere voluptates perspiciatis, hic illum delectus! Obcaecati amet eaque sapiente quibusdam optio.</p>
                <button>Saiba mais</button>
            </div>
            <div className = "cardContainer">
                <div className = "nickName">
                    <img src={santander} alt="Santander" />
                    <p>Santander</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum assumenda quae, quasi explicabo quos necessitatibus culpa cumque facere voluptates perspiciatis, hic illum delectus! Obcaecati amet eaque sapiente quibusdam optio.</p>
                <button>Saiba mais</button>
            </div>
            <div className = "cardContainer">
                <div className = "nickName">
                    <img src={santander} alt="Santander" />
                    <p>Santander</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum assumenda quae, quasi explicabo quos necessitatibus culpa cumque facere voluptates perspiciatis, hic illum delectus! Obcaecati amet eaque sapiente quibusdam optio.</p>
                <button>Saiba mais</button>
            </div>
            <div className = "cardContainer">
                <div className = "nickName">
                    <img src={santander} alt="Santander" />
                    <p>Santander</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum assumenda quae, quasi explicabo quos necessitatibus culpa cumque facere voluptates perspiciatis, hic illum delectus! Obcaecati amet eaque sapiente quibusdam optio.</p>
                <button>Saiba mais</button>
            </div>
            <div className = "cardContainer">
                <div className = "nickName">
                    <img src={santander} alt="Santander" />
                    <p>Santander</p>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro laborum assumenda quae, quasi explicabo quos necessitatibus culpa cumque facere voluptates perspiciatis, hic illum delectus! Obcaecati amet eaque sapiente quibusdam optio.</p>
                <button>Saiba mais</button>
            </div>
        </Main>
    )
}

export default Cards