import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import TermsSection from '../components/Terms'

export default function Terms(){
    return (
        <>
            <Header>
                <Hero page="terms-&-condition" />
            </Header>
            <Main>
                <TermsSection />
            </Main>
            <Footer />
        </>
        
    )
}