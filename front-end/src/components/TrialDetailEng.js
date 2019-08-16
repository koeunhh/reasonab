import React, {Component} from 'react';
import axios from 'axios';

import '../styles/trialDetail.scss';

export default class TrialDetailEng extends Component{

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
    let file = document.querySelector('#file').value;
    if(file !== ''){
      document.querySelector('.fileError').style.display = 'none';
      document.querySelector('#fileBtn').style.marginBottom = '40px';
    }
  }

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
    window.scrollTo(0, 0);
    const {tab} = this.state;
    var currentTab = this.refs[`tab${tab}`];
    if(this.validateForm(currentTab)){
      this.resetFormColor();      
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
    window.scrollTo(0, 0);
    const {tab} = this.state;
    var currentTab = this.refs[`tab${tab}`];
    this.resetFormColor(); 
    currentTab.style.display = 'none';
    this.refs.nextBtn.type = 'button';
    this.setState({tab: tab - 1});
  }

  validateForm = (current) => {
    let inputs = current.getElementsByTagName('input');
    let file = document.querySelector('#file').value;
    let validInput = true;
    //input validation
    for(let i = 0; i < inputs.length; i++){
      let myInput = inputs[i].value;
      if(myInput === ''){
        this.changeFormColor();
        inputs[i].placeholder = 'THIS FIELD IS REQUIRED';
        //file validation
        if(this.state.tab === 2 && file === ''){
          current.querySelector('.fileError').style.display = 'block';
          document.querySelector('#fileBtn').style.marginBottom = 0;
        }
        validInput = false;
      }
    }
    //textarea validation
    if(this.state.tab === 2){
      let textarea = current.querySelector('textarea');
      if(textarea.value === ''){
        textarea.placeholder = 'THIS FIELD IS REQUIRED';
        validInput = false;
      }
    }
    return validInput;
  }

  $grey = '#797979';
  $lightgrey = '#D9D9D9';
  $white = 'white';

  changeFormColor = () => {
    const trialDetail = document.querySelector('.trialDetail');
    trialDetail.style.backgroundColor = this.$white;
    trialDetail.style.color = this.$grey;
    var currentTab = this.refs[`tab${this.state.tab}`];
    const formInput = currentTab.querySelectorAll('.input');
    for(let i = 0; i < formInput.length; i++){
      formInput[i].style.backgroundColor = this.$white;
      formInput[i].style.color = this.$grey;
      formInput[i].style.border = `1px solid ${this.$grey}`;
    }
    const btn = trialDetail.querySelectorAll('button');
    for(let i = 0; i < btn.length; i++){
      btn[i].style.color = this.$grey;
      btn[i].style.borderColor = this.$grey;
      btn[i].style.backgroundColor = this.$white;
    }
    const fileBtn = trialDetail.querySelector('#fileBtn');
    fileBtn.style.color = this.$grey;
    fileBtn.style.borderColor = this.$grey;
    fileBtn.style.backgroundColor = this.$white;
  }

  resetFormColor = () => {
    const trialDetail = document.querySelector('.trialDetail');
    trialDetail.style.backgroundColor = 'black';
    trialDetail.style.color = this.$lightgrey;
    var currentTab = this.refs[`tab${this.state.tab}`];
    const formInput = currentTab.querySelectorAll('.input');
    for(let i = 0; i < formInput.length; i++){
      formInput[i].style.backgroundColor = 'black';
      formInput[i].style.color = this.$grey;
      formInput[i].style.border = `solid 1px ${this.$grey}`;
      formInput[i].placeholder = '';
    }
    const btn = trialDetail.querySelectorAll('button');
    for(let i = 0; i < btn.length; i++){
      btn[i].style.color = this.$white;
      btn[i].style.borderColor = this.$white;
      btn[i].style.backgroundColor = 'black';
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
          <div className='trialDetail__form--tab' ref='tab0'>
            <label>Major</label>
            <input type='button' value='Ui/Ux' onClick={this.selectMajor}/>
            <input type='button' value='Interior Design' onClick={this.selectMajor}/>
            <input type='button' value='Animation' onClick={this.selectMajor}/>
          </div>
          <div className='trialDetail__form--tab' ref='tab1'>
            <label>Your Name</label>  
            <input className='input' type='text' name='name'/> 
            <label>Phone Number</label>
            <input className='input' type='phone' name='phone'/>
            <label>Email</label>
            <input className='input' type='email' name='email'/>
            <img src='../assets/images/studentwork1.png' alt='studentwork1'/> 
            <h4 className='quote'>You are not alone. We are here to help you get into your dream school.</h4>
          </div>
          <div className='trialDetail__form--tab' ref='tab2'>
            <label>File</label>
            <input className='input' id='file' type="file" name="userfile" onChange={this.uploadFile}/>
            <label id='fileBtn' htmlFor='file'>Upload file</label>
            <h3 className='fileError'>PLEASE UPLOAD A FILE</h3>
            <label>Title</label>  
            <input className='input' type='text' name='title'/> 
            <label>Medium*</label>  
            <input className='input' type='text' name='medium'/>
            <label>Short Statement**</label>  
            <textarea className='input' id='message' name='message'></textarea>
            <h5>Maximum 50 words</h5>
            <div id='medium'>
              <h2>Medium</h2>
              <p>materials you used for your art pieces <br/>
                  eg. oil painting on paper/wood/ceramic <br/>
                  eg. mixed media/coloured pencil on black paper</p>
              <h2>Short Statement</h2>
              <p>a short paragraph about your intention or inspiration of your art pieces</p>
            </div>
            <img src='../assets/images/studentwork2.png' alt='studentwork2'/>   
            <h4 className='quote'>You are not alone. We are here to help you get into your dream school.</h4>
          </div>
          <div className='trialDetail__form--tab' ref='tab3'>
          </div>
          <div className='trialDetail__form--buttons'>
            <button type='button' className='prevBtn' ref='prevBtn' onClick={this.prevTab}>Previous</button>
            <button type='button' className='nextBtn' ref='nextBtn' onClick={this.nextTab}>Next</button>            
          </div>
        </form>
        <h3 className='trialDetail__success'>Form submitted!</h3>
      </div>
    )
  }
}