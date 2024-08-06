
import img1 from '../../public/images/portfolio-1.jpg'
import img2 from '../../public/images/portfolio-2.jpg'
import img3 from '../../public/images/portfolio-3.jpg'
import img4 from '../../public/images/portfolio-4.jpg'
import img5 from '../../public/images/portfolio-5.jpg'
import img6 from '../../public/images/portfolio-6.jpg'
import { Link } from 'react-router-dom'
import footer from '../../public/images/footer.png'
import { useState } from 'react'

const projects = [img1, img2, img3, img4, img5, img6]

const Footer = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email) {
            setSuccess("Email enregistrée avec succès")
            setError("")
        } else {
            setError("Veuillez insérer votre adresse email")
            setSuccess("")
        }
    }
    return (

        <footer className="text-white  px-14 pt-20 pb-10" style={{"background": `url(${footer})`, "backgroundColor": "#2124B1"}}>
            <div className="md:grid md:grid-cols-4 md:gap-5"> 
                <div className="my-5">
                    <h3 className="font-bold text-2xl my-2">Get In Touch</h3>
                    <ul className="list-disc">
                        <li> 123 Street, New York, USA </li>
                        <li>+012 345 67890</li>
                        <li>info@example.com</li>
                    </ul>
                </div>
                <div className="my-5">
                    <h3 className="font-bold text-2xl my-2">Popular Link</h3>
                    <ul className="list-disc">
                        <li><Link to="/about" > About Us </Link></li>
                        <li><Link to="/contact" > Contact Us </Link></li>
                        <li><Link to="/privacy-policy" > Privacy Policy </Link></li>
                        <li><Link to="/terms-&-condition" > Terms & Condition </Link></li>
                        <li><Link to="/career" > Career </Link></li>
                    </ul>
                </div>
                <div className="my-5">
                    <h3 className="font-bold text-2xl my-2">Project Gallery</h3>
                    <div className="grid grid-cols-3 gap-5">
                        {projects.map((project) => (
                            <Link to="" key={project}>
                                <img src={project} className="h-16 w-16 md:h-24 md:w-24" />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="my-5">
                    <h3 className="font-bold text-2xl my-2">Newsletter</h3>
                    <p className="my-2">Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                    {error && <p className="text-red-500"> {error} </p> }
                    {success && <p className="text-green-500"> {success} </p> }
                    <form method="POST" onSubmit={handleSubmit}>
                        <input 
                            className="p-3 rounded-full w-full"
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    </form>

                </div>
            </div>
            
            <div className="my-5 border-t pt-5">
                <p className="text-center">@SEOmaster, All Right Reserved. Designed by <span className="underline italic">Riche Makso</span> </p>
            </div>
        </footer>
    )
}

export default Footer