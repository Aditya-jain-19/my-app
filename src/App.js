import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
// import Navbar2 from './components/Navbar2';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [colMode, setcolMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message , type)=> { 
    setAlert({
      msg : message, 
      type :type 
    })

    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  const toggleMode=()=>{
    if(colMode==='light'){
      setcolMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled!","success");
    }else{
      setcolMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled!","success");
    }
  }
  return (
    <>
    <Navbar title={"Texily.com"} about= {"About texily"} mode={colMode}  toggleMode={toggleMode} />
    {/* <Navbar2 title={"texily.com"} about= "About texily" /> */}
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter The Text To Analyze" mode={colMode} showAlert={showAlert} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
