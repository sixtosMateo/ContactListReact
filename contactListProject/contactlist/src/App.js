import React, { Component } from 'react';
import ContactLists from './ContactLists';
import * as ContactsAPI from './utils/ContactsAPI';

import CreateContact from './CreateContact';

class App extends Component {
  state={
    screen: 'list',
    contacts:[]

  }

  componentDidMount(){
    // this function from ContactsAPI file is returning a promise therefore we
    // use .then
    ContactsAPI.getAll().then((contacts)=> {
      // can delete since names are the same
      this.setState({contacts: contacts})
    })
  }

  removeContact = (contact) => {
    // using function setState because previous state needed to remove contact
    this.setState((state) => ({
      // setting array contacts to previous state BUT filtered JS function to remove contact
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }
  changeScreen=()=>{
    this.setState((state)=>({
      screen: "create"
    }))
  }


  render() {
    return (
      <div>
        {this.state.screen ==='list' && (
          <ContactLists changeScreen={this.changeScreen} onDeleteContact = {this.removeContact} contacts={this.state.contacts}/>
        )}

        {this.state.screen ==='create' && (
          <CreateContact/>
        )}
      </div>
    )
  }
}

export default App;
