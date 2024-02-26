import { TypeAnimation } from 'react-type-animation';
import Spinner from '../View/Spinner';

export default function Home() {
    return (
        <section id='home'>
            <Spinner />
            <h2 className='main-title'>Payam <br /> Dowlatyari</h2>
            <div className='sub-title'>
            <TypeAnimation
                sequence={[
                    'I am a Software Engineer',
                    1000,
                    'I am a UX Designer',
                    1000,
                    'I am a Photographer',
                    1000,
                    'I am a Blogger',
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
                />
            </div>
        </section>
    )
}