import AnimatedTitle from '../View/AnimatedTitle';
import { data } from '../data/about';
import AnimatedParagraph from '../View/AnimatedParagraph';
import RevealBgEffect from '../View/RevealBgEffect';

export default function About(){
    return (
        <section id='about'>
            <AnimatedTitle text="About"/>
            <div
            style={{
                display: "flex",
               flexDirection: "row",
               justifyContent: "space-around",
               flexWrap: "wrap"
            }}
            >

            <div
            style={{
                display: "block",
                maxWidth: "100vw",
                width: "600px",
                padding: "1em"
            }}
            >

            <AnimatedParagraph text={data.text}/>
            </div>
            <RevealBgEffect item={"/img16.jpeg"}/>

            </div>
            
        </section>
    )
}