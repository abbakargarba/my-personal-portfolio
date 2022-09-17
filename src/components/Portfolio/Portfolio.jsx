import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



// const data = [
//     {
//        id: 1,
//        Image: IMG1,
//        title: 'Crypto Currency Dashboard & Financial Visualization',
//        github: 'https://github.com',
//        demo: 'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization' 
//     },
//     {
//         id: 2,
//         Image: IMG2,
//         title: 'Charts Templates & infographics in figma',
//         github: 'https://github.com',
//         demo: 'https://dribble.com/shots/16580766-orion-UI-kit-Charts-templates-infographics-in-figma' 
//      },
//      {
//         id: 3,
//         Image: IMG3,
//         title: 'Figma dashboard UI kit for data design web apps',
//         github: 'https://github.com',
//         demo: 'https://dribble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps' 
//      },
//      {
//         id: 4,
//         Image: IMG4,
//         title: 'Maintaining tasks and tracking progress',
//         github: 'https://github.com',
//         demo: 'https://dribble.com/shots/16955822-Maintaining-tasks-and-tracking-progress' 
//      },
//      {
//         id: 5,
//         Image: IMG5,
//         title: 'Charts templates & infographics in Figma',
//         github: 'https://github.com',
//         demo: 'https://dribble.com/shots/16580766-orion-UI-kit-Charts-templates-infographics-in-figma'  
//      },
//      {
//         id: 6,
//         Image: IMG6,
//         title: 'Charts templates & infographics in Figma',
//         github: 'https://github.com',
//         demo: 'https://dribble.com/shots/16580766-orion-UI-kit-Charts-templates-infographics-in-figma'  
//      },
// ]


const Portfolio = () => {
    return (
        <section id='Portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                {/* {
                    data.map(({id, image, title, github, demo}) => {
                        return ( */}
                            <article className='portfolio__item'>
                            <div className='portfolio__item-image'>
                                <img src={IMG1} alt=''/>
                            </div>
                            <h3>Crypto currency dashboard and financial visualization</h3>
                            <div className='portfolio__item-cta'>
                            <a href='https://github.com' className='btn' target="blank">Github</a>
                            <a href='https://dribble.com' className='btn btn-primary' target="blank">Live Demo</a>
                            </div>
                        </article>
                        <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG2} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                    <a href='https://github.com' className='btn' target="blank">Github</a>
                    <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="blank">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG3} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                    <a href='https://github.com' className='btn' target="blank">Github</a>
                    <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="blank">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG4} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                    <a href='https://github.com' className='btn' target="blank">Github</a>
                    <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="blank">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG5} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                    <a href='https://github.com' className='btn' target="blank">Github</a>
                    <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="blank">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={IMG6} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                    <a href='https://github.com' className='btn' target="blank">Github</a>
                    <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target="blank">Live Demo</a>
                    </div>
                </article>
          
                        
                    
            
            </div>
        </section>
    )
}

export default Portfolio
