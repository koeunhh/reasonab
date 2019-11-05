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
    this.major = React.createRef();
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

    // axios.post('https://rda-toronto.herokuapp.com/trial', {
    axios.post('http://localhost:8080/trial', {
      name: e.target.name.value,
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
    const code = this.getBase64(file);
    this.getBase64(file).then(
      data => this.setState({file: data})
    )
    .catch(err => console.log(err));
    this.setState({
      filename: file.name
    })
  }

  componentDidMount(){
    this.showTab();
    document.querySelector('.App').style.backgroundColor = 'black';
    document.querySelector('.copyright').style.color = 'white';
    document.querySelector('footer').style.borderColor = '#9A9A9A';
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
      const trialInput = this.refs['trialInput'];
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
    const app = document.querySelector('.App');
    app.style.backgroundColor = 'white';
  }

  resetFormColor = () => {
    this.refs.trial.id = 'trialBlack';
    const app = document.querySelector('.App');
    app.style.backgroundColor = 'black';
  }

  showForm = () => {
    const trial = this.refs.trial;
    trial.querySelector('.trial__intro').style.display = 'none';
    trial.querySelector('.trial__startBtn').style.display = 'none';
    trial.querySelector('.trial__form').style.display = 'flex';
    if(window.innerWidth >= 1024){
      this.refs.studentWorkTablet.style.display = 'block';
    }
  }

  render(){

    return(
      <div className='trial' id='trialBlack' ref='trial'>
        <div className='trial__intro'>
          <h3 className='trial__intro--title'>Get Free Feedback</h3>
          <h4 className='trial__intro--description'>
            Portfolio is a way to showcase your skills and creativity. 
            We also believe that it is a reflection of your personality.
            For us to get to know more about you send us your portfolio.
            We will review your portfolio and give some feedback.</h4>
          <button onClick={this.showForm} className='trial__startBtn'>Free Feedback</button>
        </div>
        <form onSubmit={this.formSubmit} className='trial__form' ref='trialForm'>
          <h3 className='trial__form--title'>Get Free Feedback</h3>
          <h4 className='trial__form--description'>
            Free for first visitors only <br/>
            Up to 3 art pieces <br/>
            <span id='price'>(Original price is $250/per piece)</span>
          </h4>
          <div className='trial__form--tab' ref='tab1'>
            <label>Your Name</label>  
            <input className='input' ref='trialInput' type='text' name='name' placeholder='THIS FIELD IS REQUIRED'/> 
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
            <h3 className='fileError'>PLEASE UPLOAD A FILE</h3>
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
        <img className='trial__studentWork' ref='studentWorkTablet' src='../assets/images/studentwork1.png' alt='studentwork1'/>
      </div>
    )
  }
}

export default withRouter(TrialEng);