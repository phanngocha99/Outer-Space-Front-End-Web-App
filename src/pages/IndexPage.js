import Banner from '../components/Banner.js';
import About from '../components/About.js';
import News from '../components/News.js';
import Discover from '../components/Discover.js';
import Event from '../components/Event.js';
import Contact from '../components/Contact.js';

export default function IndexPage() {
    return (
        <>
            <main>
                <Banner />
                <About />
                <News />
                <Discover />
                <Event />
                <Contact />
            </main >
        </>
    )
}