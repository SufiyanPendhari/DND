import '../App.css'

function DropDown({onChange}) {
    // change in query 
    const onChanged = (e)=>[
        onChange(e.target.value)
    ]
    return(
        <div className="Main-L">
            <h3>Category</h3>
            <select className="DropDown" name="enter" id="" onChange={onChanged}>
                <option className="option" value="technology">Technology</option>
                <option className="option" value="science">Science</option>
                <option className="option" value="fashion">Fashion</option>
                <option className="option" value="architecture">Architecture</option>
                <option className="option" value="beach">Beach</option>
                <option className="option" value="phones">Phones</option>
                <option className="option" value="landscape">Landscape</option>
                <option className="option" value="people">People</option>
                <option className="option" value="nature">Nature</option>

            </select>
        </div>
    )
}

export default DropDown