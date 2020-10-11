import React from 'react'

export default function Hero({ title, subtitle })
{
    return (
        <>
        <div className="hero">

            <div className="hero-clip">

                <div className="hero-bubbles hero-bubbles-left"></div>
                <div className="hero-bubbles hero-bubbles-right"></div>

                <h1 className="hero-title slide-in-from-top">
                    { title },
                </h1>
                
                <div className="hero-description slide-in-from-left" dangerouslySetInnerHTML={{ __html: subtitle }}></div>

                <div className="hero-buttons-container">
                    <a href="#my-projects" className="hero-btn hero-btn-primary scroll-to slide-in-from-bottom">My Projects</a>
                    <a href="#contact-me" className="hero-btn hero-btn-secondary scroll-to slide-in-from-top">Contact Me</a>
                </div>
            </div>

            <div className="hero-floating-image slide-in-from-right">
                <img src='img/hero.webp' alt="hero" />
            </div>
        
        </div>
        </>
    )
}
