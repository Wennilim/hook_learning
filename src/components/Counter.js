import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [count,setCount]=useState(0);
    const [calculation, setCalculation]=useState(0);

    useEffect(()=>{
        setCalculation(()=>count*3); //存放公式的地方
    },[count]); //初始值，经过计算后的数值将暂时存放在[count]这里

  return (
    <>
    <p>Count: {count}</p> 
    <button onClick={() => setCount((number) => number + 1)}>*</button> {/*每按一次*符号，count的数值将会+1 */}
    <p>Calculation: {calculation}</p>
  </>
  )
}


//<Button 
//  onClick={()=>setCount((number)=>number+1)}
//>
//*
//</Button>