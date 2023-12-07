import React, { useCallback, useEffect, useState } from 'react'

function Clearup() {
    const [widthCount , setWidthCount] = useState(window.screen.width);

    const currentScreenWidth = ()=>{
        setWidthCount(()=> window.innerWidth);
        return ()=>{
            window.removeEventListener('resize', currentScreenWidth)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', currentScreenWidth)
        document.title =`Window ${widthCount}`
    },[widthCount])
  return (
    <div>
      <h1>This window size is <span style={{color:'blue'}}>{widthCount}</span></h1>
    </div>
  )
}

export default Clearup
