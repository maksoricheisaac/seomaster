import services from '../../public/data/services.json'
import CardService from './CardService'
import Badge from './Badge'

const Services = () => {
    
    return (
        <section className="px-14 md:px-24  my-10">
            <Badge text="Our Services" />
            <h1 className="text-center text-4xl font-bold my-10">What Solutions We Provide</h1>
            <div className="flex flex-col gap-5 md:grid md:grid-cols-3">
                {
                    services.map((service) => (
                        <CardService key={service.id} title={service.title} desc={service.desc} />
                    ))
                }
            </div>
            
        </section>
    )
}

export default Services