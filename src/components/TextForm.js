import React ,{useState} from 'react'

export default function TextForm
(props) {
    const UpperCase=()=>{
    
let newText=text.toUpperCase();
setText(newText);
props.showAlert("Converted to Upper Case","success");
    }
const LowerCase=()=>{

let newText2=text.toLowerCase();
setText(newText2);
props.showAlert("Converted to Lower Case","success");
}

const CopyAllText = () => {
  const textarea = document.getElementById('myBox');
  textarea.select();
  document.execCommand('copy');
  props.showAlert("All Text Copied","success");
};
const DeleteAllText = () => {
  // const textarea = document.getElementById('myBox');
  // textarea.select();
  // document.execCommand('delete');
  const textarea = text.replace(text,'');
  setText(textarea);
  
props.showAlert("Text Cleared","success");
};
    const HandleOnChange=(event)=>{
          
        setText(event.target.value)
       }
       
       const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        
        // Get all available voices
        let voices = window.speechSynthesis.getVoices();
        
        // Choose a voice (e.g., the second voice in the list)
        msg.voice = voices[0]; // Change the index as needed
        
        // Speak the text
        window.speechSynthesis.speak(msg);
      }
      
    const[text,setText]=useState('');

  return (
    <>
    <div className='container' style={ {color: props.mode==='dark'?'red':'black'}} >
        <h1>{props.heading} </h1>
<div className="form-group">

<textarea placeholder="Start typing, or copy and paste your document here..... " className="form-control" 
value= {text} onChange={HandleOnChange} style={ {backgroundColor: props.mode==='light'?'white':'#042743',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div> 
  <button type="button" className="btn btn-primary mx-1" onClick={UpperCase}>Covert To UpperCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={LowerCase}>Covert To LowerCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={CopyAllText}>Copy All Text </button>
  <button type="button" className="btn btn-primary mx-1" onClick={DeleteAllText}>Reset </button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
<div className="contain" style={ {color: props.mode==='dark'?'red':'black'}}>
  <h2>
  Your Text Summary
  </h2>
  <p>
  {text.trim() === '' ? "No text entered" : `${text.match(/\S+/g).length} words and ${text.replace(/\s+/g, '').length} characters`}
</p>


  <p style={ {color: props.mode==='dark'?'white':'black'}}>{ text.length>0? (0.08 * text.split(" ").length):"0.0"} Minuts For Read</p>
  <h2>Preview</h2>
  <p style={ {color: props.mode==='dark'?'white':'black'}}>{text.length>0? text:"Before Preview Enter Somethig Above in Text Area"}</p>
</div>
</>
  )
}
