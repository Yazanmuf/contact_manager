import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: '1',
                name: "John Doe",
                email: 'bro@gmail.com',
                number: '123-123-1233',
            },
            {
                id: '2',
                name: "karinaa",
                email: 'jkkk@gmail.com',
                number: '123-333-1233',
            },
            {
                id: '3',
                name: "Mohinder Suresh",
                email: 'Mosur@gmail.com',
                number: '13123-42343-1233',
            },
        ]

    }
    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        )
    }
}

export default Contacts;