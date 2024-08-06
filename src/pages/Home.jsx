import About from "../components/About";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Newsletter from "../components/Newsletter";
import Project from "../components/Project";
import Service from "../components/Service";
import Team from "../components/Team";

export default function Home(){
    return (
        <>  
            <Header >
                <Hero />
            </Header>
            <Main>
                <About />
                <Newsletter />
                <Service />
                <Project />
                <Banner />
                <Team />
            </Main>
            <Footer />
        </>
    )
}