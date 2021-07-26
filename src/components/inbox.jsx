import React from 'react'
import EmailPreview from './emailPreview.jsx'
import '../api-client.js'
import { getAllEmails } from '../api-client.js'

class Inbox extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        // const previewList = emails.map(() => {
        //     return(<EmailPreview/>)
        // })

        return (
            <div className="inbox" onClick={() => {

               const emails = getAllEmails()
               
               }}>
                <EmailPreview/>
            </div>
        )
    }

}

export default Inbox