import Social from '../Social';
import AnimatedTitle from '../View/AnimatedTitle';

export default function Contact(){
    return (
        <section id='contact'
        style={{
            height: "130vh"
        }}
        >
            <AnimatedTitle text="Contact"/>
            <div className='contacts'>

            
            <div>
                <h2>Email</h2>
            <div className='menu__item'>
            <a className='menu__item-inner' href='maito:pdowlatyari@gmail.com'>pdowlatyari@gmail.com</a>
            </div>
            </div>
            <div>
                <h2>Links</h2>
                <div className='menu__item'>
            <a className='menu__item-inner' href='https://payamd-blog.vercel.app'>My Web Blog</a>
            </div>

            <div className='menu__item'>
            <a className='menu__item-inner' href='https://payamd-photo.vercel.app'>Photography</a>
            </div>
            </div>
            <div>
                <h2>Follow</h2>
                <Social />          
            </div>
            </div>
           
            <div>
           
                
            </div>
        </section>
    )
}