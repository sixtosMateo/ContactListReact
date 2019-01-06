import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './utils/ImageInput';
import serializeForm from 'form-serialize';


class CreateContact extends Component{
  handleSubmit = (e) =>{

      e.preventDefault()
      // serializeForm will do the browser behavior when submitting a form
      // but instead of serializing into a string and reload the browser
      // it will the browser
      const values = serializeForm(e.target, // e.target is the from itself
      {
        hash: true
      })
      //console.log(values)
      // makes sure that the passed something
      if(this.props.onCreateContact){
        this.props.onCreateContact(values);
      }

  }


  render(){
    return(

      <div className="create-contact-container">
        <Link to="/" className="close-create-form">Back</Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
          <ImageInput
            className="create-contact-avatar-input"
            name="avatarURL"
            maxheight={64}/>

           <div className="create-contact-details">
              <input type="text" name="name" placeholder="Name"/>
              <input type="text" name="email" placeholder="Email"/>
              <button></button>
           </div>

        </form>

      </div>
    )
  }
}

export default CreateContact;
