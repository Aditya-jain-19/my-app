import React , {useState} from 'react'

export default function Textform({heading,mode,showAlert}) {
  const [text , setText] = useState("Enter The text");
  const handleUpCase = ()=>{
    
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
    // var text = document.getElementById("textarea");
    // text.select();
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard!","success");
  }
  return (
    <>
    <div className='container' style={{color : mode==='light'?'black':'white' }}>
<div className="mb-3">
  <h3 className="my-2" style={{color : mode==='light'?'black':'white'}}>{heading}</h3>
  {/* <label htmlFor="textarea" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: mode==='dark'?'black':'white' ,  color : mode==='dark'?'white':'black' }} id="textarea" rows="8"></textarea>
</div>
<button disabled={text.length===0} className={`btn btn-${mode!=='light'?'secondary':'light'} mx-1 my-1`} onClick={handleUpCase}>Convert To Uppercase</button>
<button disabled={text.length===0} className={`btn btn-${mode!=='light'?'secondary':'light'} mx-1 my-1`} onClick={handleLowCase}>Convert To Lowercase</button>
<button disabled={text.length===0} className={`btn btn-${mode!=='light'?'secondary':'light'} mx-1 my-1`} onClick={handleExtraSpace}>Remove Extra Spaces</button>
<button disabled={text.length===0} className={`btn btn-${mode!=='light'?'secondary':'light'} mx-1 my-1`} onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className={`btn btn-${mode!=='light'?'secondary':'light'} mx-1 my-1`} onClick={handleCleartext}>Clear Text</button>
    </div>
    <div className='container my-4'  style={{color : mode==='light'?'black':'white' }}>
      <h3 >Analysis Of Your Text</h3>
      <p>{text.split(/\s+/).filter((element)=>{return (element.length!==0)}).length} words and {text.length} characters</p>
      <p>{0.08*text.split(/\s+/).filter((element)=>{return (element.length!==0)}).length} minutes read</p>
      <h4>Preview</h4>
      <p>{text.length===0?"Nothing to preview":text}</p>
    </div>
    </>
  )
}
