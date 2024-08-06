import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import PrivacyPolicySection from "../components/PrivacyPolicy";

export default function PrivacyPolicy(){
    return (
        <>
            <Header>
                <Hero page="privacy-policy" />
            </Header>
            <Main>
                <PrivacyPolicySection />
            </Main>
            <Footer />
        </>
        
    )
}