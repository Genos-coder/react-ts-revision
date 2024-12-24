function ConditionalRender() {

    //always make all constant variable name in capital
    const ATHLETES_ARR = [
        {
        name:"Usain Bolt",
        sport:"Runner",
        isRetired:true
    },
    {
    name:"Virat Kohli",
    sport :"Cricket",
    isRetired:false
    },
        {
        name:"Chritiano Ronaldo",
        sport:"Football",
        isRetired:false
    },
        {
        name:"Tom Brady",
        sport:"American Football",
        isRetired:true
    },
]
  return (
    <ul className="flex flex-col gap-2 ">
        {/* Each child in a list should have a unique "key" prop. this error will throw up if don't provide each child keys */}
        {/* Keys must not change or that defeats their purpose! Don’t generate them while rendering.  */}
        {   
            ATHLETES_ARR.map((athelete,idx)=>{
                return <li key={`${idx}athletes`} className="border border-b border-black p-2  rounded-lg">
                    <h2 className="w-full text-start">{athelete.name}</h2>
                    <p className="w-full text-start">{athelete.sport}</p>
                    <span className="w-full text-start block">Is retired:-{athelete.isRetired ?
                    <span>"✔️"</span>
                    :
                    <span>
                        "❌"
                    </span>
                    }</span>
                </li>
            })
        }
    </ul>
  )
}
export default ConditionalRender