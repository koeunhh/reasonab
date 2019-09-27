import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import '../styles/trialDetail.scss';

class TrialDetailKor extends Component{

  constructor(props) {
    super(props);
    this.state ={
        formDisplay: 'none',
        file: null,
        tab: 1,
        numOfTabs: 2
    };
    this.major = React.createRef();
  }

  formSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('phone', e.target.phone.value);
    formData.append('email', e.target.email.value);
    formData.append('userfile', this.state.file);
    formData.append('title', e.target.title.value);
    formData.append('medium', e.target.medium.value);
    formData.append('statement', e.target.statement.value);

    axios.post('https://rda-toronto.herokuapp.com/trial', formData, {
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
    this.props.history.push('/kor/trial/formSubmitted');
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
      nextBtn.innerHTML = '보내기';
    }
    else{
      nextBtn.innerHTML = '다음';
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
    let file = document.querySelector('#file').value;
    let validInput = true;
    //input validation
    for(let i = 0; i < inputs.length; i++){
      let myInput = inputs[i].value;
      if(myInput === ''){
        this.changeFormColor();
        inputs[i].placeholder = '빈칸을 채워주세요';
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
        this.changeFormColor();
        textarea.placeholder = '빈칸을 채워주세요';
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
    const trialDetailTitle = trialDetail.querySelector('.trialDetail__title');
    trialDetailTitle.style.color = this.$grey;
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
    const quote = currentTab.querySelector('.quote');
    quote.style.color = this.$grey;
  }

  resetFormColor = () => {
    const trialDetail = document.querySelector('.trialDetail');
    trialDetail.style = 'revert';
    const trialDetailTitle = document.querySelector('.trialDetail__title');
    trialDetailTitle.style = 'revert';
    var currentTab = this.refs[`tab${this.state.tab}`];
    const formInput = currentTab.querySelectorAll('.input');
    for(let i = 0; i < formInput.length; i++){
      formInput[i].style = 'revert';
      formInput[i].placeholder = '';
    }
    const btn = trialDetail.querySelectorAll('button');
    for(let i = 0; i < btn.length; i++){
      btn[i].style = 'revert';
    }
    const startBtn = trialDetail.querySelector('.trialDetail__startBtn');
    startBtn.style.display = 'none';
    const fileBtn = trialDetail.querySelector('#fileBtn');
    fileBtn.style = 'revert';
    const fileError = trialDetail.querySelector('.fileError');    
    fileError.style.display = 'none';
    const quote = currentTab.querySelector('.quote');
    quote.style.color = this.$white;
  }

  showForm = () => {
    document.querySelector('.trialDetail__intro').style.display = 'none';
    document.querySelector('.trialDetail__startBtn').style.display = 'none';
    document.querySelector('.trialDetail__description').style.display = 'block';
    document.querySelector('.trialDetail__form').style.display = 'flex';
  }

  render(){

    return(
      <div className='trialDetail'>
        <h3 className='trialDetail__title'>무료 피드백 체험</h3>
        <h4 className='trialDetail__intro'>
          포트폴리오는 아티스트의 실력과 창의력 뿐만이 아니라 아티스트의 성향도 보여줍니다.
          알다(RDA)는 당신을 더 알아가고 싶습니다. 포트폴리오를 보내주시면 무료 피드백을 드립니다.</h4>
        <button onClick={this.showForm} className='trialDetail__startBtn'>무료 피드백</button>
        <h4 className='trialDetail__description'>
          첫 이용자만 1회 무료 <br/>
          작품 3개까지 가능 <br/>
          <span id='price'>(가격은 $250/작품 입니다)</span>
        </h4>
        <form onSubmit={this.formSubmit} className='trialDetail__form' ref='trialForm'>
          <div className='trialDetail__form--tab' ref='tab1'>
            <label>이름</label>  
            <input className='input' type='text' name='name'/> 
            <label>연락처</label>
            <input className='input' type='phone' name='phone'/>
            <label>이메일</label>
            <input className='input' type='email' name='email'/>
            <img src='../assets/images/studentwork1.png' alt='studentwork1'/> 
            <h4 className='quote'>RDA는 당신과 함께합니다. 원하시는 학교에 들어갈 수 있도록 도와드리겠습니다.</h4>
          </div>
          <div className='trialDetail__form--tab' ref='tab2'>
            <label>File</label>
            <input className='input' id='file' type="file" name="userfile" onChange={this.uploadFile}/>
            <label id='fileBtn' htmlFor='file'>파일 업로드</label>
            <h3 className='fileError'>파일 업로드 해주세요</h3>
            <label>제목</label>  
            <input className='input' type='text' name='title'/> 
            <label>재료*</label>  
            <input className='input' type='text' name='medium'/>
            <label>작품 설명**</label>  
            <textarea className='input' id='statement' name='statement'></textarea>
            <h5>최대 50 글자</h5>
            <div id='medium'>
              <h2>재료</h2>
              <p>작품에 쓰인 재료를 의미합니다 <br/>
                  eg. 종이/나무/세라믹에 한 오일 페인팅 <br/>
                  eg. 검은 종이에 색연필</p>
              <h2>작품 설명</h2>
              <p>작품 영감이나 설명을 의미합니다. 간단하게 한 두 문장이면 충분합니다.</p>
            </div>
            <img src='../assets/images/studentwork2.png' alt='studentwork2'/>   
            <h4 className='quote'>RDA는 당신과 함께합니다. 원하시는 학교에 들어갈 수 있도록 도와드리겠습니다.</h4>
          </div>
          <div className='trialDetail__form--buttons'>
            <button type='button' className='prevBtn' ref='prevBtn' onClick={this.prevTab}>이전</button>
            <button type='button' className='nextBtn' ref='nextBtn' onClick={this.nextTab}>다음</button>            
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(TrialDetailKor);