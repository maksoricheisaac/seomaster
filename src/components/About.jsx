
import { Link } from "react-router-dom"
import about from '../../public/images/about.jpg'
import Badge from "./Badge"


const About = () => {

    return (
        <section className="px-14 md:px-28 w-full flex flex-col md:flex-row md:items-center md:justify-center gap-10">
            <div className="md:w-1/2">
                <Badge text="About Us" />
                <h2 className="text-4xl font-bold">The best SEO solution with 10 years of experience</h2>
                <p className="text-gray-600 my-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                <div className="grid grid-cols-2 my-5">
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold">Award Winning</p>
                        <p className="font-semibold">Professional Staff</p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p className="font-semibold">Award Winning</p>
                        <p className="font-semibold">Professional Staff</p>
                    </div>
                </div>
                <Link to="/about" className=" px-4 py-2 my-10 bg-blue-800 text-white rounded-full hover:bg-blue-900">Read More</Link>
            </div>
            <div className="md:w-1/2">
                <img src={about} alt="Image" className="h-88 "/>
            </div>
        </section>
    )
}

export default About