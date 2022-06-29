import React from 'react'
import photo from '../contact-photo.jpg'
import './Contact.css'
export const ContactPage = () => {
    function openUrl(url){
        window.open(url)
    }
    return(
        <div>
            <div className="contact-main">
                <div className="contact-main-c">
                    <div className="photo">
                        <img src={photo} className="photo-img" />
                    </div>
                    <div className="texts">
                        <div className="p-text">
                            You can contact us via
                        </div>
                        <div className="btns">
                            <button onClick={() => openUrl('https://www.freelancer.com/u/amr1mohamed2')} className='btn-1'>Freelancer</button>
                            <button onClick={() => openUrl('mailto:armohamed23456@gmail.com')}>Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}