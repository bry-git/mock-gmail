const fetch = require('node-fetch')

export const getAllEmails = () => {

    fetch(`http://localhost:3001/emails`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => { throw new Error('ERROR') })
}

export const sendEmail = (data) => {
    fetch(`http://localhost:3001/send`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => { throw new Error('ERROR') })
}

export const deleteEmail = (id) => {
    fetch(`http://localhost:3001/emails/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data)
}

