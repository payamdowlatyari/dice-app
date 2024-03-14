import AnimatedTitle from '../View/AnimatedTitle';
import { services } from '../data/about';

const getServices = (service) =>{

    return(   
        <div className="my-slide">
            <h2>{service.name}</h2>
            <p>{service.text}</p>
        </div>
    );
}

export default function Services(){

    return (
        <section id='services'>
          <AnimatedTitle text="Services"/>

            <div className="my-carousel">
                {services.map((service) => {
                  return getServices(service);
                })}
            </div>
        </section>
    )
}