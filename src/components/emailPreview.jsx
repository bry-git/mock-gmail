import React from 'react'
import './emailPreview.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const sample = `{"sender":"katie@galvanize.com","recipient":"jane@galvanize.com","subject":"Standup meeting","message":"Mr. and Mrs. Dursley, of number four, Privet Drive, wereproud to say that they were perfectly normal, thankyou very much.","date":"2020-08-23T18:25:43.511Z","id":1}`

 const EmailPreview = (emails) => {
    const data = JSON.parse(sample)

    return (
      <div className="email-preview">
          <input type="checkbox"></input>
          <StarBorderIcon/>
          <span>{data.sender}</span>
          <span>{data.subject}</span>
          <DeleteOutlineIcon/>
          <span>{data.date}</span>
      </div>
    )
} 

export default EmailPreview
