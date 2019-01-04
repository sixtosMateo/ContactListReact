import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
  // <button classnName = contact-remove>
        // passing onDeleteContact method from parent component(app)
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

  render(){
    return(
      <div className='contact-container'>
        {JSON.stringify(this.state)}
        
        <div className='contact-search'>
          <input className='contact-search-box'
                 type='text'
                 placeholder="Search Contact"
                 value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>

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
      </div>


    )
  }
}

export default ContactLists;
