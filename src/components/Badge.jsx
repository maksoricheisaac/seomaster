const Badge = ({text}) => {
    return (
        <div className="flex items-center gap-5">
            <div>
                <div className="relative h-4 w-4 bg-blue-500">
                    <div className="absolute -top-2 left-2 h-4 w-4 bg-blue-800"></div>
                </div>
            </div>
            <p className="text-blue-700 font-semibold"> {text} </p>
        </div>
    )
    
}

export default Badge