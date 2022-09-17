import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {
    return (
        <section id='Services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className='container service__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>Data SCIENCE</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Data Science */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>WEB Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF webDev */}
                <article className='service'>
                    <div className='service__head'>
                        <h3>Content Creation</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                        <li>
                            <BsPatchCheckFill className = 'service__list-icon'/> 
                            <p>lorem, ipsum dolor sit constuer elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Content creation */}
            </div>
        </section>
    )
}

export default Services
