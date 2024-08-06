import projects from '../../public/data/projects.json'
import Badge from './Badge'
import CardProject from './CardProject'

const Project = () => {
    return (
        <section className="mt-20 px-14 md:px-24">
            <Badge text="Our Projects" />
            <h1 className="text-center text-4xl font-bold my-10">Recently Launched Projects</h1>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-5" >
                {projects.map((project) => (
                    <CardProject key={project.id} img={project.img} category={project.category} name={project.name} />
                ))}
            </div>
            
        </section>
    )
}

export default Project 