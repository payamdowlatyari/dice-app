import { TypeAnimation } from 'react-type-animation';
import Spinner from '../View/Spinner';

export default function Home() {
    return (
        <section id='home'>
            <Spinner />
            <h2 style={{ position: 'absolute', top: '3em', left: '1em'  }}>Payam <br /> Dowlatyari</h2>
            <div style={{ position: 'absolute', top: '24em', left: '6em' }}>
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