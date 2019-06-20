import React, {Component} from 'react';
import axios from 'axios';

import '../styles/trialDetail.scss';

export default class TrialDetail extends Component{

  constructor(props) {
    super(props);
    this.state ={
        file: null
    };
  }

  formSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('email', e.target.email.value);
    formData.append('message', e.target.message.value);
    formData.append('userfile', this.state.file);

    axios.post('http://localhost:8080/trial', formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    e.target.reset();
  }

  uploadFile = e => {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    })
  }

  render(){
    return(
      <div className='trialDetail'>
        <h1 className='trialDetail__title'>Free Trial</h1>
        <form onSubmit={this.formSubmit} className='trialDetail__form'>
          <label>Full Name</label>
          <input className='input' type='text' name='name' required/>
          <label>Email</label>
          <input className='input' type='email' name='email' required/>
          <label>File</label>
          <input className='input' id='file' type="file" name="userfile" onChange={this.uploadFile}/>
          <label>Message</label>
          <textarea className='input' id='message' name='message' required></textarea>
          <button type='submit' name='submit'>Send</button>
        </form>
      </div>
    )
  }
}