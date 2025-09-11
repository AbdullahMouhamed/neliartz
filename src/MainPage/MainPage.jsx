
import Design from './../assets/components/Design';
import Navbar from './../assets/components/Navbar';
import About from './../assets/components/About';
import Hero from './../assets/components/Hero';
import GalleryPage from '../GalleryPage/GalleryPage';
import Content from '../assets/components/Content';
import Contact from '../assets/components/Contact';
import Footer from '../assets/components/Footer';
export default function MainPage() {
    return (
        <>
            <Design />
            <Navbar />
            <div className="pt-16"> {/* pushes sections down */}
                <Hero />
                <About />
                <GalleryPage />
                <Content />
                <Contact />
                <Footer />
            </div>
        </>
    );
}

