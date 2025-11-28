import { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  
  const handleUpClick = () => {
    let newText = text.toUpperCase().trim();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  }

  const handleDownClick = () => {
    let newText = text.toLowerCase().trim();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleCamelClick = () => {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    let newText = words.join(' ').trim();
    setText(newText);
    props.showAlert("Converted to CamelCase!", "success");
  }

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" ").trim());
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared!", "success");
  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
    <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : props.mode === 'dark' ? 'grey' : props.mode === 'red' ? '#bc5454ff' : props.mode === 'green' ? '#4bb543ff' : '#3b5998ff', color: props.mode === 'light' ? 'black' : 'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <div className='cotainer my-3'>
        <button className={`btn btn-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'} mx-1`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'} mx-1`} onClick={handleDownClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'} mx-1`} onClick={handleCamelClick}>Convert to CamelCase</button>
        <button className={`btn btn-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'} mx-1`} onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className={`btn btn-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'} mx-1`} onClick={handleClearClick}>Clear Text</button>
        <button className={`btn btn-${props.mode === 'light' ? 'light' : props.mode === 'dark' ? 'dark' : props.mode === 'red' ? 'danger' : props.mode === 'green' ? 'success' : 'primary'} mx-1`} onClick={handleCopyClick}>Copy Text</button>
      </div>
    </div>
    <div className="container my-2" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h1>Your text summary</h1>
      <p>{text.trim() === '' ? 0 : text.trim().split(' ').length} words and {text.trim().length} characters</p>
      <p>{(text.trim() === '' ? 0 : text.trim().split(' ').length) * 0.008} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.trim().length>0 ? text : "Enter in above textbox to preview"}</p>
    </div>
    </>
  );
}