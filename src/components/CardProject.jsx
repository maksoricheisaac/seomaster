import img1 from '../../public/images/portfolio-1.jpg'
import img2 from '../../public/images/portfolio-2.jpg'
import img3 from '../../public/images/portfolio-3.jpg'
import img4 from '../../public/images/portfolio-4.jpg'
import img5 from '../../public/images/portfolio-5.jpg'
import img6 from '../../public/images/portfolio-6.jpg'

const imgs = [img1, img2, img3, img4, img5, img6]

const CardProject = ({img, category, name}) => {
    const idImg = img - 1
    return (
        <div className=" group h-[150px] md:h-[300px]  cursor-pointer rounded-lg text-white " style={{"background": `url(${imgs[idImg]})`}}>
            <div className="hidden group-hover:flex transition-all duration-500 flex-col rounded-lg items-center justify-center w-full h-full group-hover:bg-blue-800">
                <p className="font-bold"> {category} </p>
                <p className="text-xl"> {name} </p>
            </div>
        </div>
    )
}

export default CardProject