import Social from '../Social';
import AnimatedTitle from '../View/AnimatedTitle';

export default function Contact(){
    return (
        <section id='contact'>
            <AnimatedTitle text="Contact"/>
            <div className='contacts'>

            
            <div>
                <h2>Email</h2>
            <h3 className='three'>
            <a href='maito:pdowlatyari@gmail.com'>pdowlatyari@gmail.com</a>
            </h3>
            </div>
            <div>
                <h2>Links</h2>
            <h3 className='three'>
            <a href='https://payamd-blog.vercel.app'>My Web Blog</a>
            </h3>

            <h3 className='three'>
            <a href='https://payamd-photo.vercel.app'>Photography</a>
            </h3>
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