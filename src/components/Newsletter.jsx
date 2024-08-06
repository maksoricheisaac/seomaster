import { useState } from 'react'
import bgNewsletter from '../../public/images/bg-newsletter.png'
import newsletter from '../../public/images/newsletter.png'


const Newsletter = () => {
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
        <section style={{"background": `url(${bgNewsletter})`, "backgroundColor": "#2124B1"}} className="w-full flex items-center bg-blue-800  px-14 py-5 my-24">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
                <h2 className="text-3xl font-bold text-white">Ready to get started</h2>
                <p className="text-sm text-white">Diam elitr est dolore at sanctus nonumy.</p>
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
            <div className="hidden md:block md:w-1/2">
                <img  src={newsletter} alt="Newsletter" className="h-72" />
            </div>
        </section>
    )
}

export default Newsletter