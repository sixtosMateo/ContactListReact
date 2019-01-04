import React, {Component} from 'react';

class ContactLists extends Component {
  // <button classnName = contact-remove>
        // passing onDeleteContact method from parent component(app)

  render(){
    return(
      <ol className='contact-list'>
          {this.props.contacts.map((contact)=> (
              <li key={contact.id} className='contact-list-item'>
                <div className='contact-avatar'
                style={{backgroundImage: `url(${contact.avatarURL})`}}>
                </div>
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.email}</p>
                </div>

                <button className='contact-remove'onClick={() => this.props.onDeleteContact(contact)} >
                  remove
                </button>
              </li>
            ))
          }
      </ol>
    )
  }
}
export default ContactLists;
