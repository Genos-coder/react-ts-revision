function GridExample() {
  return (
    <div className="h-screen w-full bg-white grid  gap-4 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
        {Array(50).fill(undefined).map((item,idx)=>{
            return <Box id={idx+1} key={`random${idx}`}/>
        })}
    </div>
  )
}
export default GridExample

const Box = ({id}:{id:number})=>{
    return <div className="h-[300px] grid place-content-center rounded-lg border border-black">{id}</div>
}