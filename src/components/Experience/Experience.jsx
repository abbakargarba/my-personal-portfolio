import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='Experience'>
            <h5>My Skills</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>HTML</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>CSS</h4>
                           <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>JavaScript</h4>
                           <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>React</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/>
                           <div>
                           <h4>Boostrap</h4>
                           <small className='text-light'>Experienced</small>
                            </div> 
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>Quasar</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONT END & BEGINING OF DATA SCIENCE */}
                <div className='experience__backend'>
                <h3>DATA SCIENCE</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>Python</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>SQL</h4>
                           <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/>
                           <div>
                           <h4>PowerBI</h4>
                           <small className='text-light'>Experienced</small>
                            </div> 
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>Excel</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>R</h4>
                           <small className='text-light'>Intermediate</small>
                           </div>
                        </article>
                        <article className='experience__details'>
                           <BsPatchCheckFill className = 'experience__details-icon'/> 
                           <div>
                           <h4>PowerPoint</h4>
                           <small className='text-light'>Experienced</small>
                           </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience