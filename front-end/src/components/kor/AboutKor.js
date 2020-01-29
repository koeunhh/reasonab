import React, { Component } from 'react';

import '../../styles/about.scss';

export default class AboutKor extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.whiteBackground();
    this.props.changeFooterColor();
  }

  render(){    
    return(
      <div className='about'>
        <div className='about__detail'>
          <h2>아는만큼 보는 알다는 각 전공별 엄선된 튜터 중심으로 1대 5미만의 소수 정예 수업을 진행합니다.</h2>
          <ul>
            <li>Basic Technique</li> 
            <li>그래픽 디자인</li>
            <li>애니메이션/일러스트레이션</li>
            <li>순수 예술/조형</li>
            <li>인테리어/건축</li>
            <li>UI/UX/웹디자인</li>
            <li>3D/VFX/CG</li>
          </ul>
          <h2>알다는 꺽지 않을 고집이 있습니다.</h2>
          <ul>
            <li>100% 선생님이 만들어주는 포트폴리오 X</li>
            <li>학생의 창의성을 의심하는 주입식 X</li>
            <li>학생의 미래를 생각하지 않는 단기적인 가이드 X</li>
            <li>* 1:1 개인 담당 튜터와 항시 상담 가능</li>
          </ul>
          <h2>알다는 함께 눈물 흘릴 명분이 있습니다.</h2>
          <ul>
            <li>학생 스스로 선생님을 설득해 낸 포트폴리오</li>
            <li>학생과 함께 뛰며 노력에대한 보상을 줄 선배들</li>
            <li>학생 개개인의 꿈에 맞춘 1:1 프리미엄 미래 컨설팅</li>
            <li>매월 알다 장학금 / 상시 상담 카톡 / 월말파티</li>
          </ul>
          <h2>아는 만큼 보이는 알다에서 더 멀리, 더 높이 미래를 꿈꾸는 학생들을 기다립니다</h2>
        </div>
        <div className='about__teachers'>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
          <div className='about__teachers--each'>
            <img src='../assets/images/heesun.jpg' alt='heesun'/>
            <h5>Luke Jung</h5>
            <h5>Designer</h5>
          </div>
        </div>
      </div>
    )
  }
}
