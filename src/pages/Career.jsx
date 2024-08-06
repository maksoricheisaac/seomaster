import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import CareerSection from '../components/Career'

export default function Career(){
    return (
        <>
            <Header>
                <Hero page="career" />
            </Header>
            <Main>
                <CareerSection />
            </Main>
            <Footer />
        </>
        
    )
}