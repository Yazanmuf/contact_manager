//will be component that will wrap around our application
import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    ],
    // dispatch is part of our state, should be able to call an action from anywhere
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
