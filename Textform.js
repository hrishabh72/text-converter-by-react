import React,{useState} from 'react'


export default function Textform(props) {
const handleUpclick=()=>{
  // console.log("upper case was clicked"+ text)
  let newText =text.toUpperCase();
  setText("you have clicked on handleupclick")
  setText(newText)
}
const handleloclick=()=>{
  // console.log("upper case was clicked"+ text)
  let newText =text.toLowerCase();
  setText("you have clicked on handleupclick")
  setText(newText)
}
const handleOnChange=(event)=>{
  // console.log("onChange");
  setText(event.target.value);
}
const [text, setText]=useState('enter the text here');
 
  return (
    <>
    <div className="conatiner"> 
        <h1>{props.heading}</h1>
     <div className="mb-3">
      {/* <label for="myBox" class="form-label">Example textarea</label> */}
      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleUpclick}>convert To Uppercase</button>
     <button className="btn btn-primary mx-2" onClick={handleloclick}>convert To lowercase</button>
    </div>
    <div className="conatiner my-3">
      <h1>your text summary</h1>
      <p> {text.split(" ").length}  words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
