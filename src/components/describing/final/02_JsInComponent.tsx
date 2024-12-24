function JsInComponent() {
    const obj = {
        name:"t-rex",
        age: "66-68 million",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY6zxIiimsr9vVfc9xk7vY4fqzoIfMqqvDw&s"
    }
  return (
    <div className="p-2 rounded-md flex-col border border-b border-blacsk">
        <picture className="flex-1">
            <img src={obj.image} alt="t-reximage" />
        </picture>
        <p className="flex  items-start justify-center">
            <span>
                name:
                </span>
                <span>

            {obj.name}
                </span>
        </p>
        
        <p className="flex justify-center">
            <span>
                Age:
                </span>
                <span>

            {obj.age}
                </span>
        </p>
    </div>
  )
}
export default JsInComponent