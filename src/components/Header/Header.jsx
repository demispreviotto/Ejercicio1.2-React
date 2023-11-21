import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className='banner' />
            <div className="avatar-container">
                <img className="avatar" src="https://avatars.githubusercontent.com/u/99538600?v=4" alt="avatar" />
                <img className="otw" src="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png" alt="otw" />
            </div>
            <h1>Demis Previotto</h1>
            <p>Diseñador Industrial - Desarrollador Full Stack MERN | Javascript | React | NodeJS | Express | MySQL | MongoDB</p>
        </>
    )
}

export default Header