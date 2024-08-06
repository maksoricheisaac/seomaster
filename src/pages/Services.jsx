import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Service from "../components/Service";

export default function Services(){
    return (
        <>
            <Header >
                <Hero page="services" />
            </Header>
            <Main>
                <Service />
            </Main>
            <Footer />
        </>
    )
}