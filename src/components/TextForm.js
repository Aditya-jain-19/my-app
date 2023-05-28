import React , {useState} from 'react'

export default function Textform({heading,mode,showAlert}) {
  const [text , setText] = useState("Enter The text");
  const handleUpCase = ()=>{
    // console.log(" handleUpCase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    showAlert("Converted to upper case!","success");
  }
  const handleLowCase = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    showAlert("Converted to lower case!","success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const handleCleartext=()=>{
    setText("");
    showAlert("Text cleared!","success");
  }
  const handleExtraSpace=()=>{
    var textt = text.split(/[ ]+/);
    setText(textt.join(" "));
    showAlert("Extra spaces removed!","success");
  }
  const handleCopy=()=>{
    var text = document.getElementById("textarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    showAlert("Copied to clipboard!","success");
  }
  return (
    <>
    <div className='container' style={{color : mode==='light'?'black':'white' }}>
<div className="mb-3">
  <h3 style={{color : mode==='light'?'black':'white' }}>{heading}</h3>
  {/* <label htmlFor="textarea" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: mode==='light'?'white':'grey' ,  color : mode==='light'?'black':'white' }} id="textarea" rows="8"></textarea>
</div>
<button className={`btn btn-${mode==='light'?'secondary':'light'} mx-1`} onClick={handleUpCase}>Convert To Uppercase</button>
<button className={`btn btn-${mode==='light'?'secondary':'light'} mx-1`} onClick={handleLowCase}>Convert To Lowercase</button>
<button className={`btn btn-${mode==='light'?'secondary':'light'} mx-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button className={`btn btn-${mode==='light'?'secondary':'light'} mx-1`} onClick={handleCopy}>Copy</button>
<button className={`btn btn-${mode==='light'?'secondary':'light'} mx-1`} onClick={handleCleartext}>Clear Text</button>
    </div>
    <div className='container my-4'  style={{color : mode==='light'?'black':'white' }}>
      <h3 >Analysis Of Your Text</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.08*text.split(" ").length} minutes read</p>
      <h4>Preview</h4>
      <p>{text.length===0?"Write something in textbox above to preview it here!":text}</p>
    </div>
    </>
  )
}
