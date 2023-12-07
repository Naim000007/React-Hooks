import React, { useEffect, useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
    const [resetMessage, setResetMessage] = useState('');
    const [isResetClicked, setIsResetClicked] = useState(false);


    function addOne(){
        setIsResetClicked(false)

        setCount(count+1)
        if(count==5) {
            alert('You have reached the maximum count')
            setCount(0)
            setIsResetClicked(false)

        }   
    }
    function DecreaseOne(){
        setIsResetClicked(false)
        setCount(count-1)
        if(count== -5) {
            alert('You have reached minimum count')
            setCount(0)
            setIsResetClicked(false)

        }   
    }
    const reset = ()=>{
        setIsResetClicked(true)
        setCount(0)
        
    }
    useEffect(() => {
        document.title = `Count: ${count}`;
      }, [count]);
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={addOne}>Add one</button> {"   "}
      <button onClick={DecreaseOne}> Decrease one </button>{"   "}
      <button onClick={reset}>reset</button>
      <br />
      {
        isResetClicked ? <p>Reset Button is clicked</p> : ""
      }
    </div>
  )
}

export default Count
