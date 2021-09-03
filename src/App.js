import './App.css';
import DropDown from './Component/dropdown';
import ImageList from './Component/list';
import MainScreen from './Component/mainScreen';
import ListOfImage from './Component/Thumbnail';
import {useEffect, useState} from 'react'

function App() {
  // set the image data with limit of 8
  const [data,setData]= useState([])
  // set data for side bar
  const [primeData,setPrimeData]=useState([])
  // for change on click of thumbnail
  const [status,setStatus] = useState(0)
  // set query data 
  const [query,setQuery] =useState('technology')

  // make fetch request everytime query is updated
  useEffect(()=>{
    fetch(`http://localhost:5000/${query}`)
    .then(res=>res.json())
    .then(datas=>{
     setData(datas.slice(0,8))
      setPrimeData([...datas])
    })
  },[query])
  
 // to change the image in main screen
  const onClick =(i)=>{
  setStatus(i)
}
// to remove image from thumbnail list
// on drag start
const onDragStart=(e)=>{
  e.target.classList.add('done')
}
// on drag end

const onDragEnd =(e)=>{
  try {
    e.target.classList.remove('done')
    if(document.elementFromPoint(e.screenX,e.screenY).className==="Image" ||document.elementFromPoint(e.screenX,e.screenY).className=== "ImageList"){  
      
      console.log(1);
      if(data.length>1){
      const newData = data.filter((data)=>data.name!==(e.target.childNodes[1].innerHTML)) 
      setData(newData);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

// to add image to the thumbnail 
// on drag start 
const onTileDragStart=(e)=>{
  e.target.classList.add('dnd')
}
// on drag end 
const onTileDragEnd =(e)=>{
  e.target.classList.remove('dnd')
  console.log(document.elementFromPoint(e.screenX,e.screenY));
  try {
    if(document.elementFromPoint(e.screenX,e.screenY).className==="ImageIcon"||document.elementFromPoint(e.screenX,e.screenY).className==="IconTitle"
    ||document.elementFromPoint(e.screenX,e.screenY).className==="List-ThumbNail"){  
      if(data.find(d=>d.name===e.target.innerHTML)){    
        alert('Image already exists in Carousel')
      } else{
        setData([...data,primeData.find(d=>d.name===e.target.innerHTML)])
      }
    }
  } catch (error) {
    console.log(error);
  }
 
}
// onChange in query 
const onChange = (i)=>{
  setQuery(i)
}

// on Drag over
const onDragOver=(e)=>{
  e.preventDefault() 
}


return (
    <div className="App">
      <div className="Heading">
      Carousel
      </div>
      <div className="Body">
     <div className="L-section">
       <DropDown onChange={onChange}/>
       <ImageList list={primeData} onTileDragStart={onTileDragStart} onTileDragEnd={onTileDragEnd} onDragOver={onDragOver} />
     </div>
     <div className="R-section">
       <MainScreen list={data} status={status}/>
      <ListOfImage list={data} onClick={onClick} onDragStart={onDragStart} onDragEnd={onDragEnd} onDragOver={onDragOver} />
       </div> 
      </div>
    </div>
  );
}

export default App;
