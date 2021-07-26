import  React from "react" 
import { sendEmail } from '../api-client'
// import Compose from "./compose.jsx"



const DataCompose = ( para ) => {
  const DataToObject = (event) => {
    // event.preventDefault()
    let dataHolder = {
      sender: document.getElementById("sender").value,
      recipient: document.getElementById("recipient").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      date:  new Date()
    }
    let data = {}
    // if (document.getElementById("sender").value === null|| 
    //     document.getElementById("recipient").value === null||
    //     document.getElementById("subject").value === null ||
    //     document.getElementById("message").vaule === null) {
    //       console.log("error works")
    //      alert("all feilds require a string value")
    // }
    // else {
    // data = dataHolder
    // console.log("i work")
    // }
    data = dataHolder
    console.log("i work")
    console.log(data)
    sendEmail(data)
    // document.forms[0].reset()
  }

  return (
    <div className="compose-input">
      <div className="compose-first-line">
        <input className="compose-half-line" id="sender" input="text" name="sender" placeholder="Sender"/>
        <input className="compose-half-line" id="recipient" input="text" name="recipient" placeholder='Resipient'/>
     </div>
    <input className="compose-single" input="text" id="subject" name="subject" placeholder='Subject'/>
    <input className="compose-body" input="text" id="message" name="message" placeholder='Message'/>
    <input type="submit" onClick={() => DataToObject()}></input>
    {/* // <button id="btn" onClick={() => DataToObject()}>Send</button> */}
    </div>
  )


}
export default DataCompose