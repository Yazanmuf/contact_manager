import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'John Doe',
        email: 'bro@gmail.com',
        number: '123-123-1233'
      },
      {
        id: '2',
        name: 'karinaa',
        email: 'jkkk@gmail.com',
        number: '123-333-1233'
      },
      {
        id: '3',
        name: 'Mohinder Suresh',
        email: 'Mosur@gmail.com',
        number: '13123-42343-1233'
      }
    ]
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            // Passing in the entire contact as a prop
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
