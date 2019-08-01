import React, {Component} from 'react';
import axios from 'axios';

import '../styles/trialDetail.scss';

export default class TrialDetail extends Component{

  constructor(props) {
    super(props);
    this.state ={
        formDisplay: 'none',
        file: null,
        tab: 1,
        numOfTabs: 3
    };
    this.major = React.createRef();
  }

  formSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('phone', e.target.phone.value);
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

  componentDidMount(){
    this.showTab();
  }

  componentDidUpdate(){
    this.showTab();
  }

  // showForm = () => {
  //   const form = this.refs['trialForm'];
  //   const btn = this.refs['formBtn'];
  //   form.style.display = 'flex';
  //   btn.parentNode.removeChild(btn);
  // }

  showTab = () => {
    const { tab, numOfTabs} = this.state;
    var currentTab = this.refs[`tab${this.state.tab}`];
    currentTab.style.display = 'flex';
    var { prevBtn, nextBtn } = this.refs;
    if(tab === 1){
      prevBtn.style.display = 'none';
    }
    else {
      this.refs.prevBtn.style.display = 'block';
    }
    if(tab === numOfTabs) {
      nextBtn.innerHTML = 'Send';
    }
    else{
      nextBtn.innerHTML = 'Next';
    }
  }

  nextTab = () => {
    const {tab} = this.state;
    var currentTab = this.refs[`tab${tab}`];
    if(this.validateForm(currentTab)){
      currentTab.style.display = 'none';
      if(tab === this.state.numOfTabs){
        this.refs.nextBtn.type = 'submit';
        var form = document.getElementsByTagName('form')[0];
        form.style.display = 'none';
        var success = document.getElementsByClassName('trialDetail__success')[0];
        success.style.display = 'block';
      }
      else {
        this.setState({tab: tab + 1});
      }
    }
    else {
      return false;
    }
  }

  prevTab = () => {
    const {tab} = this.state;
    var currentTab = this.refs[`tab${tab}`];
    currentTab.style.display = 'none';
    this.refs.nextBtn.type = 'button';
    this.setState({tab: tab - 1});
  }

  validateForm = (current) => {
    var myInput = current.getElementsByClassName('input')[0].value;
    if(myInput === ''){
      alert('invalid input');
      return false;
    }
    else{
      return true;
    }
  }

  selectMajor = e => {
    console.log(e.target.value);

  }

  render(){

    return(
      <div className='trialDetail'>
        <h3 className='trialDetail__title'>Get free feedback</h3>
        <h4 className='trialDetail__description'>Free for first visitors only</h4>
        <h4 className='trialDetail__description'>Up to 3 art pieces</h4>
        <h4 className='trialDetail__description' id='price'>(Original price is $250/per piece)</h4>
        {/* <button className='trialDetail__btn' onClick={this.showForm} ref='formBtn'>Free Trial</button> */}
        <form onSubmit={this.formSubmit} className='trialDetail__form' ref='trialForm'>
          <div className='tab' ref='tab0'>
            <label>Major</label>
            <input type='button' value='Ui/Ux' onClick={this.selectMajor}/>
            <input type='button' value='Interior Design' onClick={this.selectMajor}/>
            <input type='button' value='Animation' onClick={this.selectMajor}/>
          </div>
          <div className='tab' ref='tab1'>
            <label>Full Name</label>  
            <input className='input' type='text' name='name'/> 
            <label>Phone Number</label>
            <input className='input' type='phone' name='phone'/>
            <label>Email</label>
            <input className='input' type='email' name='email'/>
            <img src='assets/images/studentwork1.png' alt='studentwork1'/> 
          </div>
          {/* <div className='tab' ref='tab2'>
                       
          </div> */}
          <div className='tab' ref='tab2'>
            <label>File</label>
            <input className='input' id='file' type="file" name="userfile" onChange={this.uploadFile}/>
          </div>
          <div className='tab' ref='tab3'>
            <label>Message</label>
            <textarea className='input' id='message' name='message'></textarea>
          </div>
          <button type='button' className='prevBtn' ref='prevBtn' onClick={this.prevTab}>Previous</button>
          <button type='button' className='nextBtn' ref='nextBtn' onClick={this.nextTab}>Next</button>            
        </form>
        <h3 className='trialDetail__success'>Form submitted!</h3>
      </div>
    )
  }
}