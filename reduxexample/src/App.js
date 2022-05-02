import React from 'react';
import {connect} from 'react-redux';
import { Component } from 'react';
import { createContact, deleteContact } from './redux/ActionCreators';
import ContactView from './component/ContactView';

class App extends Component {
  nameRef = React.createRef();
  emailRef = React.createRef();

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let contact = {
      name: this.nameRef.current.value,
      email: this.emailRef.current.value,
    };
    this.props.createNewContact(contact);
  }

  render() {
    return <div>
      <h1>Contacts Application</h1>
      <form onSubmit={this.handleSubmit}>
        Name: <input type="text" ref={this.nameRef} /> <br />
        Email: <input type="text" ref={this.emailRef} /> <br />
        <button type="submit">Submit</button>
      </form>
      {
        this.props.contacts.map(contact => <ContactView 
          key={contact.email}
          contact={contact}
          deleteContact={(email) => this.props.deleteContact(email)}
          />)
      }
    </div>
  }
}
// state from "redux store"
// returns "contacts" as "props"
const mapStateToProps = (state) => {
  return {
    contacts : state.contacts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNewContact : contact => dispatch(createContact(contact)),
    deleteContact: email => dispatch(deleteContact(email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);