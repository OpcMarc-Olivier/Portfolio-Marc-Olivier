import React, { useEffect, useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import '../sass/components/presentation.scss'

function Presentation() {
  const [typedText, setTypedText] = useState('')
  const myText = "Je suis Marc-Olivier Perrois, \net je suis développeur web"
  const delay = 80

  useEffect(()=>{
    let currentIndex = 0;
    const typedInterval = setInterval(()=>{
      if(currentIndex <= myText.length){
        setTypedText(myText.slice(0,currentIndex))
        currentIndex ++;
      }else{clearInterval(typedInterval)}
    },delay)
    return ()=> clearInterval(typedInterval)
  },[])

  return (
    <div className='presentation'>
         <h1 className='title'>{
        typedText.split('\n').map((line,index)=>(
          <React.Fragment key={index} >
            {line}
            {index!== typedText.split('\n').length -1 && <br/>}
          </React.Fragment>
        ))
        }
        </h1>
        <div className="arrow-down">
          <a href="/#work">
            <FaAngleDown/>
          </a>
        </div>
    </div>
  )
}

export default Presentation