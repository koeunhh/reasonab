import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import '../../styles/trial.scss';

class TrialEng extends Component{

  constructor(props) {
    super(props);
    this.state ={
        formDisplay: 'none',
        filename: '',
        file: null,
        tab: 1,
        numOfTabs: 2
    };
  }

  componentDidMount(){
    window.scrollTo(0, 0);
    this.showTab();
    this.props.blackBackground();
    this.props.changeFooterColor();
  }

  componentDidUpdate(){
    this.showTab();
    let file = document.querySelector('#file').value;
    if(file !== ''){
      document.querySelector('.fileError').style.display = 'none';
      document.querySelector('#fileBtn').style.marginBottom = 0;
    }
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = error => reject(error);
    });
  }
  
  formSubmit = e => {
    e.preventDefault();

    // axios.post('http://localhost:8080/trial', {
    axios.post('https://rda-toronto.herokuapp.com/trial', {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      file: this.state.file,
      filename: this.state.filename,
      title: e.target.title.value,
      medium: e.target.medium.value,
      statement: e.target.statement.value
    })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });

    e.target.reset();
    this.props.history.push('/en/trial/formSubmitted');
  }

  uploadFile = e => {
    const file = e.target.files[0];
    this.getBase64(file).then(
      data => this.setState({file: data})
    )
    .catch(err => console.log(err));
    this.setState({
      filename: file.name
    })
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
    let validInput = true;
    //input validation
    for(let i = 0; i < inputs.length; i++){
      let myInput = inputs[i].value;
      if(myInput === ''){
        this.changeFormColor();
        validInput = false;
      }
    }
    //textarea validation
    if(this.state.tab === 2){
      let textarea = current.querySelector('textarea');
      if(textarea.value === ''){
        this.changeFormColor();
        validInput = false;
      }
    }
    return validInput;
  }

  changeFormColor = () => {
    this.refs.trial.id = 'trialWhite';
    this.props.whiteBackground();
    this.props.changeFooterColor();
  }

  resetFormColor = () => {
    this.refs.trial.id = 'trialBlack';
    this.props.blackBackground();
    this.props.changeFooterColor();
  }

  showForm = () => {
    window.scrollTo(0, 0);
    const trial = this.refs.trial;
    trial.querySelector('.trial__intro').style.display = 'none';
    trial.querySelector('.trial__startBtn').style.display = 'none';
    trial.querySelector('.trial__form').style.display = 'flex';
    if(window.innerWidth >= 1024){
      this.refs.studentWorkTablet.style.display = 'block';
    }
  }

  render(){

    const { tab } = this.state;

    return(
      <div className='trial' id='trialBlack' ref='trial'>
        <div className='trial__intro'>
          <h1 className='trial__intro--title'>Get Free Feedback</h1>
          <h4 className='trial__intro--description'>
            Portfolio is a way to showcase your skills and creativity. 
            We also believe that it is a reflection of your personality.
            For us to get to know more about you send us your portfolio.
            We will review your portfolio and give some feedback.</h4>
          <button onClick={this.showForm} className='trial__startBtn'>Free Feedback</button>
        </div>
        <form onSubmit={this.formSubmit} className='trial__form' ref='trialForm'>
          <h2 className='trial__form--title'>Get Free Feedback</h2>
          <div className='trial__form--tab' ref='tab1'>
            <label>First Name</label>  
            <input className='input' ref='trialInput' type='text' name='firstname' placeholder='THIS FIELD IS REQUIRED'/> 
            <label>Last Name</label>  
            <input className='input' ref='trialInput' type='text' name='lastname' placeholder='THIS FIELD IS REQUIRED'/> 
            <label>Phone Number</label>
            <input className='input' ref='trialInput' type='phone' name='phone' placeholder='THIS FIELD IS REQUIRED'/>
            <label>Email</label>
            <input className='input' ref='trialInput' type='email' name='email' placeholder='THIS FIELD IS REQUIRED'/>
            <img src='../assets/images/studentwork1.png' alt='studentwork1'/> 
          </div>
          <div className='trial__form--tab' ref='tab2'>
            <label>File</label>
            <input className='input' ref='trialInput' id='file' type="file" name="userfile" onChange={this.uploadFile}/>
            <label id='fileBtn' htmlFor='file'>Upload file</label>
            <h4 id='filename'>{this.state.filename}</h4>
            <h2 className='fileError'>PLEASE UPLOAD A FILE</h2>
            <label>Title</label>  
            <input className='input' ref='trialInput' type='text' name='title' placeholder='THIS FIELD IS REQUIRED'/> 
            <label>Medium*</label>  
            <input className='input' ref='trialInput' type='text' name='medium' placeholder='THIS FIELD IS REQUIRED'/>
            <label>Short Statement**</label>  
            <textarea className='input' ref='trialInput' id='statement' name='statement' placeholder='THIS FIELD IS REQUIRED'></textarea>
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
          </div>
          <h4 className='trial__form--quote'>You are not alone. We are here to help you get into your dream school.</h4>
          <div className='trial__form--buttons'>
            <button type='button' className='prevBtn' ref='prevBtn' onClick={this.prevTab}>Previous</button>
            <button type='button' className='nextBtn' ref='nextBtn' onClick={this.nextTab}>Next</button>            
          </div>
        </form>
      <img className={`trial__studentWork${tab}`} ref='studentWorkTablet' src={`/assets/images/studentwork${tab}.png`} alt={`studentwork${tab}`}/>
      </div>
    )
  }
}

export default withRouter(TrialEng);