import React, { Component } from 'react'

class Contact extends Component {
    state = {
        showContactInfo: false,
    }
    // Toggles on / off the button
    onShowClick = (e) => {
        console.log(e);
        this.setState({ showContactInfo: !this.state.showContactInfo })
    }
    render() {
        const { contact } = this.props;
        const { showContactInfo } = this.state

        return (
            <div className='card card-body mb-3'>
                <h5> {contact.name}<i onClick={this.onShowClick} className='fas fa-sort-down' style={{ cursor: 'pointer' }} />
                    <i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }}></i> </h5>
                {
                    showContactInfo ?
                        <ul className='list-group'>
                            <li className='list-group-item'>email: {contact.email}</li>
                            <li className='list-group-item'>number: {contact.number}</li>
                        </ul> : null
                }

            </div >
        )
    }
}

export default Contact;