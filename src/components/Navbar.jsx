import React, { useEffect } from 'react'
import Logo from '../LOGO.png'
import './Navbar.css'
export function Navbar(){
    useEffect(()=>{
        console.log(window.location)
    },[])
    return(
        <div className='App'>
           

        
          <nav className='nav'>
                <div onClick={() => window.location.href = `${window.location.origin}/#`} className="div-logo">
                    <img src={Logo} />
            </div>
            <div className="items-nav">
            <div  onClick={() => window.location.href = `${window.location.origin}/#`} className="div-item">
                <span>Home</span>
            </div>
            <div onClick={() => window.location.href = `${window.location.origin}/#services`} className="div-item">
                <span>Services</span>
            </div>
            <div onClick={() => window.location.href=`${window.location.origin}/#rates`} className="div-item">
                <span>Feedbacks</span>
            </div>
            <div className="div-item-btn">
                <button>Contact</button>
            </div>
            </div>
            </nav>
            
        </div>
        
    )
}