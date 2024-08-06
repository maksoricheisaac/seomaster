import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import AboutSection from '../components/About';
import Newsletter from "../components/Newsletter";
import Team from "../components/Team";

export default function About(){
    return (
        <>
            <Header >
                <Hero page="about" />
            </Header>
            <Main>
                <AboutSection />
                <Newsletter />
                <Team />
            </Main>
            <Footer />
        </>
    )
}