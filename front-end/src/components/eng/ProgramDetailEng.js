import React, { Component } from 'react';

import '../../styles/programDetail.scss';

export default class ProgramDetailEng extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
    this.props.whiteBackground();
    this.props.changeFooterColor();  
  }
  
  render(){    
    return(
      <div className='programDetail'>
        <div className='programDetail__title'>
          <h1>RDA <section>프로그램</section></h1>
          <h1>그래픽 디자인</h1>
        </div>
        <div className='programDetail__schools'>
          <h3>지원 가능 학교</h3>
          <ul>
            <li><strong>OCAD</strong> University</li>
            <li><strong>Ryerson</strong> University</li>
            <li><strong>York</strong> University</li>
            <li><strong>Humber</strong> College</li>
            <li><strong>George Brown</strong> College</li>
            <li><strong>Seneca</strong> College</li>
            <li><strong>Sheridan</strong> College</li>
            <li><strong>Centennial</strong> College</li>
          </ul>
        </div>
        <div className='programDetail__jobs'>
          <h3>가능 직업군</h3>
          <ul id='jobs-mobile'>
            <li>그래픽 디자이너 / 패키지 디자이너</li>
            <li>모션그래픽 디자이너 / 컨텐츠 기획자</li>
            <li>영상 디자이너 / 특수효과 디자이너</li>
            <li>출판 디자이너 / 광고 디자이너.기획자</li>
            <li>디스플레이 디자이너 / 웹.앱 디자이너</li>
            <li>시각 디자이너 / 비주얼 아티스트</li>
          </ul>
          <ul id='jobs-tablet'>
            <li>그래픽 디자이너 / 패키지 디자이너 / 모션그래픽 디자이너</li>
            <li>컨텐츠 기획자 / 영상 디자이너 / 특수효과 디자이너</li>
            <li>출판 디자이너 / 광고 디자이너.기획자 / 디스플레이 디자이너</li>
            <li>웹/앱 디자이너 / 시각 디자이너 / 비주얼 아티스트</li>
          </ul>
        </div>
        <div className='programDetail__class'>
          <h3>RDA 수업 목표</h3>
          <p>토론토 내 그래픽 디자이너들은 타 직종에 비해 더 넓은 직업군에서 일 할 기회를얻을 수 있습니다. 
            하지만 그만큼 졸업 후에 현업에서 요구하는 실제적인 스킬과 개념적인 부분은 미리 확실히 습득하지 못하면, 
            후에 현지인들을 따라 가기가 쉽지 않습니다. RDA의 수업은 이에 맞추어, 기초 드로잉 실력은 물론이고 
            고급 프로그램 스킬까지 두루 경험 하고 학생 스스로 발전 시킬 수 있도록 구성되어 있습니다. 
            개개인에 맞춘 단계별 학습 구조와 각 단계별로 최적화된 담당 선생님들은, 1:1 그 이상의 효율을 기대합니다. 
            RDA는 학생의 대학/컬리지 입시 포트폴리오 합격은 물론, 더 먼 미래까지도 학생과 부모님의 입장에서 봅니다.</p>
        </div>
        <div className='programDetail__curriculum'>
          <h3>기초 수업 커리큘럼</h3>
          <div className='programDetail__curriculum--item'>
            <h4 className='curriculumStep'>기초 포트폴리오</h4>
            <h4>기초 포트폴리오 색감 / 형태 / 명암 / 투시 / 구도 / 라이프드로잉 / 발상.연상법</h4>
          </div>
          <img src='../assets/icons/triangle-arrow.png'/>
          <div className='programDetail__curriculum--item'>
            <h4 className='curriculumStep'>어도비 그래픽 프로그램</h4>
            <h4>포토샵 / 일러스트레이션 / 인디자인 / 프리미어 프로 / 어도비XD</h4>
          </div>
          <img src='../assets/icons/triangle-arrow.png'/>
          <div className='programDetail__curriculum--item'>
            <h4 className='curriculumStep'>서양 예술.디자인 역사</h4>
          </div>
          <img src='../assets/icons/triangle-arrow.png'/>
          <div className='programDetail__curriculum--item'>
            <h4 className='curriculumStep'>디자인 인문학.철학</h4>
          </div>
          <img src='../assets/icons/triangle-arrow.png'/>
          <div className='programDetail__curriculum--item'>
            <h4 className='curriculumStep'>컬리지.대학 선행반 / 취업 포트폴리오 / 성인 아트워크</h4>
          </div>
        </div>
      </div>
    )
  }
}