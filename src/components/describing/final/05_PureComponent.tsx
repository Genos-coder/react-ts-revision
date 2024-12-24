// let guest = 0;

// function Cup() {
//   // Bad: changing a preexisting variable!
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   )};

// So instead this 


function Cup({guestCount}:{guestCount:number}) {
  // Bad: changing a preexisting variable!
  return <h2>Tea cup for guest {guestCount}</h2>;
}
export default function TestSet(){
    let guest = 0;
    return  <>
    <Cup guestCount={++guest}/>
    <Cup guestCount={++guest}/>
    <Cup guestCount={++guest}/>
    </>
}