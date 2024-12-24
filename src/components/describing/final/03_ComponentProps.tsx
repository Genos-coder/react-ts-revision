type PropsType = {
    quote:string
    author:string
}

function ComponentProps({quote,author}:PropsType) {
  return (
    <div className="border border-black p-2">
        <span>"</span>
        <p>{quote}</p>
        <span>"</span>
    <h2>~{author}</h2>
    </div>
  )
}
export default ComponentProps