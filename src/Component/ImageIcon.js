import '../App.css'

function ImageIcon({source,name,onClick,id,onDragStart,onDragEnd,onDragOver}) {
    // to change image 
    const onClicked=()=>{
        onClick(id)
    }
  
    return (
        <div className="ImageIcon" draggable="true" onDragOver={onDragOver} onDragEnd={onDragEnd} onDragStart={onDragStart}  onClick={onClicked}>
            <div className="Icon"  ><img draggable="false" src={source} height="80px" width="80px" alt=""/></div>
            <div className="IconTitle">{name}</div>
        </div>
    )
}

export default ImageIcon