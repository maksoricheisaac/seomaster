import { Link } from 'react-router-dom'
import bgBottomHero from '../../public/images/bg-bottom-hero.png'
import hero from '../../public/images/hero.png'
import bgTree from '../../public/images/bg-tree.png'
import bgDot from '../../public/images/bg-dot.png'
import bgRound from '../../public/images/bg-round.png'
import BreadCrumb from './BreadCrumb'

const Hero = ({page}) => {
    return (
        <section className="text-white my-10">
            <div className="px-14 md:px-24 ">
            
            {
                !page ? 
                <div className="flex flex-col gap-10 md:flex-row items-center justify-center">
                    <div className="md:w-1/2 max-md:flex flex-col items-center">
                        <h1 className="text-4xl font-bold my-10">All in one SEO tool need to grow your business rapidly</h1>
                        <p className="my-10">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                        <Link to="#" className=" px-5 py-2 border rounded-full hover:bg-white hover:text-blue-800 hover:border-blue-800">Contact Us</Link>
                    </div>
                    <div  className="md:w-1/2">
                        <img  src={hero}/>
                    </div>
                </div>
                    
                : 
                <div>
                    <BreadCrumb page={page} />
                </div>
            }
            </div>
                    
            <img src={bgDot} className="absolute top-0 left-1 z-0"/>
            <img src={bgTree} className="absolute bottom-0 rigth-0 z-0"/>
            <img src={bgRound} className="absolute top-0  z-0"/>
            <img src={bgDot} className="absolute  right-0 z-0"/>
                
           
            <img src={bgBottomHero} />
        </section>
    )
}

export default Hero