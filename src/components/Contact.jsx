import React, { Component } from 'react'

class Contact extends Component {
    state = {
        showContactInfo: true,
    }

    onShowClick = (name, e) => {
        console.log(name)
    }
    render() {
        const { contact } = this.props;
        return (
            <div className='card card-body mb-3'>
                <h4> {contact.name}<button onClick={this.onShowClick.bind(this, contact.name)} className='fas fa-sort-down' /> </h4>
                <ul className='list-group'>
                    <li className='list-group-item'>email: {contact.email}</li>
                    <li className='list-group-item'>number: {contact.phone}</li>
                </ul>
            </div>
        )
    }
}

export default Contact;