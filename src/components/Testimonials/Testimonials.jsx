import React, { useState } from 'react'
import { testimonialsData  } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion';
import './Testimonials.css'

const Testimonials = () => {
    const [selected , setSelected] = useState(0);
    const tlength = testimonialsData.length-1;

    const transition  = {type:'spring' , duration:3}

    const next = ()=>
    {

        let value=selected;
        if(selected === tlength)
            setSelected(0);
        else
        {    
            value = value+1  
            setSelected(value);
        }
            
    }
    const previous = ()=>
    {

        let value=selected;
        if(selected === 0)
            setSelected(tlength);
        else
        {    
            value = value-1  
            setSelected(value);
        }
    }

  return (
    <div className="Testimonials">
        <div className="left-t">

           <span>Testimonials</span>
           <span className='stroke-text'>what they</span>
           <span>say about us</span> 

            <motion.span 
            key={selected}
            initial={{opacity:0 , x:-100}}
            animate={{opacity:1, x:0}}
            exit={{opacity:0 , x:100}}
            transition={transition}
            >
                {testimonialsData[selected].review}
            </motion.span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{" "}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div initial={{opacity:0,x:-100}} whileInView={{opacity:1 , x:0}} transition={{...transition , duration:2}}></motion.div>
            <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1 , x:0}} transition={{...transition , duration:2}}></motion.div>
            <motion.img key={selected} initial={{opacity:0,x:100}} animate={{opacity:1 , x:0}} exit={{opacity:0 , x:-100}} transition={transition} src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img src={leftArrow} alt="" onClick={previous}/>
                <img src={rightArrow} alt="" onClick={next}/>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
