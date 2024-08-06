import { useState } from "react"

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name || !email || !subject || !message){
            setError("Veuillez renseigner tous les champs")
            setSuccess("")
        } else {
            setSuccess("Votre message a été envoyé avec succès")
            setError("")
        }
    }
    return (
        <section className="flex flex-col items-center">
            <h1 className="text-center text-4xl font-bold my-10">Contact For Any Query</h1>
            {error && <div className="p-3 bg-red-600 text-center text-red-900 w-[540px] rounded-lg my-5"> {error} </div>}
            {success && <div className="p-3 bg-green-600 text-center text-green-900 w-[540px] rounded-lg my-5"> {success} </div>}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-14 w-[650px]">
                <div className="flex flex-col md:flex-row gap-5">
                   <input onChange={(e) => setName(e.target.value)} className="py-4 w-full md:w-1/2 px-3 border-gray-300 border rounded-lg" type="text" name="name" id="name" placeholder="Your Name"/>
                   <input onChange={(e) => setEmail(e.target.value)} className="py-4 w-full md:w-1/2 px-3 border-gray-300 border rounded-lg" type="email" name="email" id="email" placeholder="Your Email" />
                </div>
                <input onChange={(e) => setSubject(e.target.value)} className="w-full py-4 px-3 border-gray-300 border rounded-lg" type="text" name="subject" id="subject" placeholder="Subject" />
                <textarea onChange={(e) => setMessage(e.target.value)} className="w-full py-4 px-3 border-gray-300 border rounded-lg" rows={3} name="message" id="message" placeholder="Message"></textarea>
                <button type="submit" className="px-5 py-3 bg-blue-800 text-white rounded-lg duration-500 hover:bg-blue-900">Send Message</button>
            </form>

        </section>
        
    )
}

export default Contact