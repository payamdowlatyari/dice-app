
import ImageToParticle from 'react-image-particles';

export default function Particles({src}){
    return (
        <div className='img-particles'>
        <ImageToParticle
            path={src}
            width={500}
            height={500}
            numParticles={2000}
        />
        </div>
    )
}