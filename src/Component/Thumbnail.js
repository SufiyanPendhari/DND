import '../App.css'
import ImageIcon from './ImageIcon'

function ListOfImage({list, onClick,onDragStart,onDragEnd,onDragOver}) {
  
    
   return(
       <div className="List-ThumbNail">
           {list.map((data,i)=>{
               return <ImageIcon key={i} name={data.name} source={data.url} onDragOver={onDragOver} onClick={onClick}  id={i} onDragStart={onDragStart} onDragEnd={onDragEnd} />
           })}
       </div>
   ) 
}

export default ListOfImage