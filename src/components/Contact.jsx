import React, { Component } from 'react'

class Contact extends Component {
    render() {
        const { contact } = this.props;
        return (
            <div className='card card-body mb-3'>
                <h4> {contact.name} </h4>
                <ul className='list-group'>
                    <li className='list-group-item'>email: {contact.email}</li>
                    <li className='list-group-item'>number: {contact.phone}</li>
                </ul>
            </div>
        )
    }
}

export default Contact;