import React, { Component } from 'react';
import { Consumer } from '../../context';

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
    console.log(contact);
  };
  // Pretend that this is coming from redux
  static defaultProps = {
    name: 'Fred Smith',
    email: 'Fred@yahoo.com',
    phone: '222-233-3344'
  };
  render() {
    const { name, email, phone } = this.props;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dipatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-sm"
                      placeholder="Enter Name"
                      defaultValue={name}
                      ref={this.nameInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-sm"
                      placeholder="Enter E-mail"
                      defaultValue={email}
                      ref={this.emailInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-sm"
                      placeholder="Enter Number"
                      defaultValue={phone}
                      ref={this.phoneInput}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn-light btn-sm"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
