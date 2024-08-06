import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import ContactSection from '../components/Contact';

export default function Contact(){
    return (
        <>
            <Header >
                <Hero page="contact" />
            </Header>
            <Main>
                <ContactSection />
            </Main>
            <Footer />
        </>
    )
}