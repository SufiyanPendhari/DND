import '../App.css'

function ImageList({list,onTileDragStart,onTileDragEnd,onDragOver}) {
  
    return (
        <div className="Main-L">
            <h4>Files</h4>
            <div className="ImageList">
               {list.map((data,i)=>{
                return <Image key={i} image={data.name} onDragOver={onDragOver} onTileDragStart={onTileDragStart} onTileDragEnd={onTileDragEnd}/>
               })} 
            </div>
        </div>
    )
}

function Image({image,onTileDragStart,onTileDragEnd,onDragOver}) {
    return <div className="Image" draggable="true" onDragStart={onTileDragStart} onDragEnd={onTileDragEnd} onDragOver={onDragOver}>{image}</div>
}

export default ImageList