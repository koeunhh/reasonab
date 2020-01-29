import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import '../../styles/trial.scss';

class TrialKor extends Component{

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
    const filename = this.state.filename;
    console.log(filename);
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
          <h1 className='trial__intro--title'>무료 피드백 체험</h1>
          <h4 className='trial__intro--description'>
            포트폴리오는 아티스트의 실력과 창의력 뿐만이 아니라 아티스트의 성향도 보여줍니다.
            알다(RDA)는 당신을 더 알아가고 싶습니다. 포트폴리오를 보내주시면 무료 피드백을 드립니다.</h4>
          <button onClick={this.showForm} className='trial__startBtn'>무료 피드백</button>
        </div>
        <form onSubmit={this.formSubmit} className='trial__form' ref='trialForm'>
          <h2 className='trial__form--title'>무료 피드백 체험</h2>
          {/* <h4 className='trial__form--description'>
            Free for first visitors only <br/>
            Up to 3 art pieces <br/>
            <span id='price'>(Original price is $250/per piece)</span>
          </h4> */}
          <div className='trial__form--tab' ref='tab1'>
            <label>성</label>  
            <input className='input' ref='trialInput' type='text' name='firstname' placeholder='빈 칸을 채워주세요'/> 
            <label>이름</label>  
            <input className='input' ref='trialInput' type='text' name='lastname' placeholder='빈 칸을 채워주세요'/> 
            <label>전화번호</label>
            <input className='input' ref='trialInput' type='phone' name='phone' placeholder='빈 칸을 채워주세요'/>
            <label>이메일</label>
            <input className='input' ref='trialInput' type='email' name='email' placeholder='빈 칸을 채워주세요'/>
            <img src='../assets/images/studentwork1.png' alt='studentwork1'/> 
          </div>
          <div className='trial__form--tab' ref='tab2'>
            <label>파일</label>
            <input className='input' ref='trialInput' id='file' type="file" name="userfile" onChange={this.uploadFile}/>
            <label id='fileBtn' htmlFor='file'>파일 첨부</label>
            <h4 id='filename'>{this.state.filename}</h4>
            <h2 className='fileError'>파일을 첨부해주세요</h2>
            <label>제목</label>  
            <input className='input' ref='trialInput' type='text' name='title' placeholder='빈 칸을 채워주세요'/> 
            <label>재료*</label>  
            <input className='input' ref='trialInput' type='text' name='medium' placeholder='빈 칸을 채워주세요'/>
            <label>작품 설명**</label>  
            <textarea className='input' ref='trialInput' id='statement' name='statement' placeholder='빈 칸을 채워주세요'></textarea>
            <h5>최대 50글자</h5>
            <div id='medium'>
              <h2>재료</h2>
              <p>작품에 쓰인 재료를 의미합니다 <br/>
                  eg. 종이/나무/세라믹에 한 오일 페인팅 <br/>
                  eg. 검은 종이에 색연필</p>
              <h2>작품 설명</h2>
              <p>작품 영감이나 설명을 의미합니다. 간단하게 한 두 문장이면 충분합니다.</p>
            </div>
            <img src='../assets/images/studentwork2.png' alt='studentwork2'/>   
          </div>
          <h4 className='trial__form--quote'>RDA는 당신과 함께합니다. 당신의 꿈을 이룰 수 있도록 도와드리겠습니다.</h4>
          <div className='trial__form--buttons'>
            <button type='button' className='prevBtn' ref='prevBtn' onClick={this.prevTab}>이전</button>
            <button type='button' className='nextBtn' ref='nextBtn' onClick={this.nextTab}>다음</button>            
          </div>
        </form>
      <img className={`trial__studentWork${tab}`} ref='studentWorkTablet' src={`/assets/images/studentwork${tab}.png`} alt={`studentwork${tab}`}/>
      </div>
    )
  }
}

export default withRouter(TrialKor);