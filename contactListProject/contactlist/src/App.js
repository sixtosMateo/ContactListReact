import React, { Component } from 'react';
import ContactLists from './ContactLists';
import * as ContactsAPI from './utils/ContactsAPI';


class App extends Component {
  state={
    contacts : [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]

  }

  removeContact = (contact) => {
    // using function setState because previous state needed to remove contact
    this.setState((state) => ({
      // setting array contacts to previous state BUT filtered JS function to remove contact
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }


  render() {
    return (
      <div>
        <ContactLists onDeleteContact = {this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
