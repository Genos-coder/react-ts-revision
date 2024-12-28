export function getFinalState(baseState:number, queue:(number|((n:number)=>number))[]) {
    let finalState = baseState;
  
    for(let work of queue) {
        if(typeof work ==="number"){
            finalState = work
        }else{
            finalState = work(finalState);
        }
    }
    return finalState;
  }
  