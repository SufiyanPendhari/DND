import { useEffect, useState } from 'react'
import '../App.css'

function DropDown({onChange}) {
    const [dropDownData,setDropDownData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/category`)
        .then(res=>res.json())
        .then(datas=>{
         setDropDownData(datas)
         onChange(datas[0]._id)
        })
      },[])
    // change in query 
    const onChanged = (e)=>{
        const data = dropDownData.find((data)=>data.categoryName===e.target.value)
        onChange(data._id)
    }
    return(
        <div className="Main-L">
            <h3>Category</h3>
            <select className="DropDown" name="enter" id="" onChange={onChanged}>
                {
                    dropDownData.map((data)=>{
                     return <option  className="option" value={data.categoryName}>{data.categoryName}</option>
                    })
                }

            </select>
        </div>
    )
}

export default DropDown