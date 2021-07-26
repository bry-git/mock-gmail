import React, {useState} from 'react'
import './emailPreview.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


 const EmailPreview = (emails) => {
    //  const [onHover, setOnHover] = useState('false')

    return (
      <div className="email-preview">
          <input type="checkbox"></input>
          <StarBorderIcon/>
          <span>Sender</span>
          <span>Subject</span>
          <span>body preview</span>
          <DeleteOutlineIcon/>
          <span>date received</span>
      </div>
    )
} 

export default EmailPreview
