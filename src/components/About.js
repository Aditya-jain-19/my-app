import React  from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:'#EDF6F4',
    //     backgroundColor:'#4D5453'
    // })
    let myStyle = {
        color : props.mode==='dark'?'#EDF6F4':'#4D5453',
        backgroundColor : props.mode!=='dark'?'#EDF6F4':'#4D5453'
    }
  return (
    <div className='container' style={myStyle}>
        <h3 className='my-3'>About Us</h3>
                    <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header">
                <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyse your text
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    <code>Textily.com</code> provides you a efficent way of analysing your text. Be it word count, conversions, extra space rempval we provide it all!!!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                 This free online texting websites allow you to send a text for free online. websites free services dont require you to subscribe to a plan. You can send text message from any internet-connected desktop computer and also mobile device.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatible
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse"  style={myStyle} data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}>
                    This software is compatible with all types of browser be it chrome, edge, oppera, safari and all types of devices be it mobile, desktop or a tab!!
                </div>
                </div>
            </div>
           
            </div>
    </div>
  )
}
