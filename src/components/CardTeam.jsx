import img1 from '../../public/images/team-1.jpg'
import img2 from '../../public/images/team-2.jpg'
import img3 from '../../public/images/team-3.jpg'

const imgs = [img1, img2, img3]

const CardTeam = ({img, firstname, lastname, title}) => {
    const idImg = img - 1
    return (
        <div className="relative group">
            <img 
                className="absolute z-10  -top-10 right-12 h-80 rounded-lg group-hover:shadow-2xl"
                src={`${imgs[idImg]}`}  
                alt="Membre"
            />
            <div className="shadow-lg z-0 rounded-lg w-64 relative h-[350px] group-hover:bg-blue-800 group-hover:shadow-lg group-hover:text-white duration-500">
                
                <div className="absolute bottom-2 px-5">
                    <p className="text-xl font-bold"> {firstname} {lastname} </p>
                    <p className="text-gray-600 group-hover:text-white"> {title} </p>
                </div>
            </div>    
        </div>
    )
}

export default CardTeam