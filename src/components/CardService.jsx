import { Link } from "react-router-dom"
import iconPrimary from '../../public/images/icon-shape-primary.png'
import iconWhite from '../../public/images/icon-shape-white.png'
import { useState } from "react"



const CardService = ({title, desc, link}) => {
    const [cardHover, setCardHover] = useState(false)
    

    return (
        <div onMouseLeave={() => setCardHover(false)} onMouseEnter={() => setCardHover(true)} className="shadow-xl rounded-lg group " id="cardService">
            <div className="flex flex-col rounded-lg p-10 items-center group-hover:bg-blue-800 group-hover:duration-500 duration-500 group-hover:text-white">
                {cardHover ? 
                    <img className="h-24 w-24" src={iconWhite} alt="Image de service" /> 
                    : 
                    <img className="h-24 w-24" src={iconPrimary} alt="Image de service" />
                }
                
                <h3 className="font-semibold text-center² text-xl my-4 ">{title}</h3>
                <p className="text-gray-600 text-center group-hover:text-white"> {desc} </p>
                <Link className="mt-10 py-2 px-4 bg-blue-800 text-white rounded-full group-hover:bg-white group-hover:text-blue-800 " to="services">Read More</Link>
            </div>
        </div>
    )
}

export default CardService



