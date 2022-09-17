import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#header')
    return (
        <nav>
            <a href='#header' onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href='#Experience'  onClick={() => setActiveNav('#Experience')}  className={activeNav === '#Experience' ? 'active' : ''}><BiBook/></a>
            <a href='#Services'  onClick={() => setActiveNav('#Services')}  className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
            <a href='#contact'  onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav
