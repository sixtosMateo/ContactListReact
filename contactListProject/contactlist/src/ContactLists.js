import React, {Component} from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'

//
// // this is a example of stateless functional component
// function ContactLists(props){
//   return(
//     <ol className='contact-list'>
//               {props.contacts.map((contact)=> (
//                   <li key={contact.id} className='contact-list-item'>
//                     <div className='contact-avatar'
//                     style={{backgroundImage: `url(${contact.avatarURL})`}}>
//                     </div>
//                     <div className='contact-details'>
//                       <p>{contact.name}</p>
//                       <p>{contact.email}</p>
//                     </div>
//
//                     <button className='contact-remove'onClick={() => props.onDeleteContact(contact)} >
//                       remove
//                     </button>
//                   </li>
//                 ))
//               }
//       </ol>
//   )
//
//
//
// }

// set a property to our statelss functional component
// ContactLists.propTypes={
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
//
// }


class ContactLists extends Component {

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired

  }

  state = {
    query:  ''
  }

  //clears of any extra white space
  updateQuery=(query)=>{
    this.setState({
      query: query.trim()
    })
  }
  clearQuery = () => {
    this.setState({
      query: ''
    })
  }
  render(){
    // object destructuring:
    // intializing variable so that we dont have to use this.props or this.state
    const {contacts, onDeleteContact} = this.props;
    const {query} = this.state;

    let showingContacts
    if(query){
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingContacts = contacts.filter((contact) => match.test(contact.name))
    }
    else{
      showingContacts = contacts
    }

    showingContacts.sort(sortBy('name'))

    return(
      <div className='contact-container'>

        <div className='contact-search'>
          <input
          className='contact-search-box'
                 type='text'
                 placeholder="Search Contact"
                 value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}></input>
          <a
            href="#create"
            onClick={()=>{this.props.changeScreen()}}
            className="contact-add"
          >add</a>

        </div>
        {
          showingContacts.length !== contacts.length &&(
            <div className = "count-contact">
              <span>Now showing {showingContacts.length} of {contacts.length} total</span>
              <button onClick= {() => this.clearQuery() }>Show all</button>
            </div>
          )
        }

        <ol className='contact-list'>
            {showingContacts.map((contact)=> (
                <li key={contact.id} className='contact-list-item'>
                  <div className='contact-avatar'
                  style={{backgroundImage: `url(${contact.avatarURL})`}}>
                  </div>
                  <div className='contact-details'>
                    <p>{contact.name}</p>
                    <p>{contact.email}</p>
                  </div>

                  <button className='contact-remove'onClick={() => onDeleteContact(contact)} >
                    remove
                  </button>
                </li>
              ))
            }
        </ol>
      </div>


    )
  }
}

export default ContactLists;
