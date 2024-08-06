const CardProject = ({img, category, name}) => {
    return (
        <div className=" group h-[300px]  cursor-pointer rounded-lg text-white " style={{"background": `url(public/images/${img})`}}>
            <div className="hidden group-hover:flex transition-all duration-500 flex-col rounded-lg items-center justify-center w-full h-full group-hover:bg-blue-800">
                <p className="font-bold"> {category} </p>
                <p className="text-xl"> {name} </p>
            </div>
        </div>
    )
}

export default CardProject