import { Link } from "react-router-dom"

const BreadCrumb = ({page}) => {
    return (
        <div>
            {page == "about" && <> <h1 className="text-center text-5xl font-bold my-5">About Us</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> {page} </Link> </p> </>}
            {page == "services" && <> <h1 className="text-center text-5xl font-bold my-5">Our Services</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> {page} </Link> </p> </>}
            {page == "projects" && <> <h1 className="text-center text-5xl font-bold my-5">Our Projects</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> {page} </Link> </p> </>}
            {page == "contact" && <> <h1 className="text-center text-5xl font-bold my-5">Contact Us</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> {page} </Link> </p> </>}
            {page == "privacy-policy" && <> <h1 className="text-center text-5xl font-bold my-5">Privacy Policy</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> Privacy Policy </Link> </p> </>}
            {page == "terms-&-condition" && <> <h1 className="text-center text-5xl font-bold my-5">Terms & Condition</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> Terms & Condition </Link> </p> </>}
            {page == "career" && <> <h1 className="text-center text-5xl font-bold my-5">Career</h1> <p className="text-center text-xl"> <Link to="/" className="text-blue-300">Home</Link> / <Link to={`/${page}`} className="capitalize  underline underline-offset-8"> {page} </Link> </p> </>}
        </div>
    )
}

export default BreadCrumb