import {   useEffect, useState } from 'react'
import '../App.css'
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from 'react-icons/md'


function MainScreen({list,status}) {
    let [i,setI]=useState(0)
    useEffect(()=>{
        setI(status)
    },[status])
   
    const onLeft = () =>{
        i>0? setI(i-1):setI(list.length-1)   
        console.log(i);
    }
    const onRight = () =>{
       i<list.length-1? setI(i+1):setI(0)
       console.log(i);
    }



    return(
        <div className="Main-R" >
            <div className="left-arrow" onClick={onLeft}><MdKeyboardArrowLeft size="50px" color="#9e9e9e"/></div>
            <div className="MainScreen"><img src={list.length>0?list[i].url:''} alt="" /></div>
            <div className="right-arrow"  onClick={onRight}><MdKeyboardArrowRight size="50px" color="#9e9e9e"/></div>
        </div>
      

     
        

        
    )
}

export default  MainScreen