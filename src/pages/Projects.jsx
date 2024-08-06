import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Project from "../components/Project";

export default function Projects(){
    return (
        <>
            <Header >
                <Hero page="projects" />
            </Header>
            <Main>
                <Project />
            </Main>
            <Footer />
        </>
    )
}