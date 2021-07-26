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

        const emails = getAllEmails()

        return (
            <div className="inbox">
                <EmailPreview/>
            </div>
        )
    }

}

export default Inbox