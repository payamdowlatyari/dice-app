import AnimatedTitle from '../View/AnimatedTitle';
import { Slider } from '../View/Slides/Slider';
import { portfolio } from '../data/about';
export default function Portfolio(){


    return (
        <section 
            id='portfolio'
            style={{ 
                height: "150vh",
            }}
        >
        <AnimatedTitle text="Portfolio"/>

        <div id='slider-app'>
        <Slider heading="Example Slider" slides={portfolio} />
        </div>    
    </section>
  );
}
