import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = ()=>{
        console.log("UpperCase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = ()=>{
        console.log("UpperCase was clicked")
        let newText = '';
        setText(newText)
    }

    const handleExtraSpaces= ()=>{
        console.log("UpperCase was clicked")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
    }
const [text, setText] = useState("");
// setText("new text")
 return (
     <>
        <div className = "container" style={{color : props.mode=== 'dark'?'white':'#152353'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value= {text} onChange={handleOnChange} style ={{backgroundColor : props.mode=== 'dark'?'#13466e':'white',color : props.mode=== 'dark'?'white':'#152353'}}id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-2" style={{color : props.mode=== 'dark'?'white':'#152353'}}>
            <h2>YOUR TEXT SUMMARY:-</h2>
             <h2>No.of Words</h2>
             {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
             <h2>No. of characters</h2>
             {text.length}
             <h2>Time taken to read one word</h2>
             {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}
             <h2>Preview</h2>
             {text.length>0?text:"Enter your text to preview here"}
        </div>
        </>
    )
}
