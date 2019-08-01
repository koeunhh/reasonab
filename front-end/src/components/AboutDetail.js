import React, { Component } from 'react';

import '../styles/aboutDetail.scss';

export default class AboutDetail extends Component {
  render(){
    const { eng, kor } = this.props;
    
    return(
      <div className='aboutDetail'>
        <h1 className={eng}>About Detail</h1>
        <p className={eng}>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <p className={eng}>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <p className={eng}>
          Labore qui do adipisicing ullamco est est nisi veniam ad deserunt reprehenderit excepteur ad. 
          Culpa aliquip mollit pariatur dolor elit esse ut proident adipisicing. 
          Consectetur adipisicing reprehenderit cupidatat proident sint ex qui. 
          Nisi aute aliqua deserunt reprehenderit. Dolore amet elit exercitation ipsum irure. 
          Occaecat exercitation eu ipsum esse consectetur ad nostrud. 
          Aute ex eu sint irure culpa laboris ea officia culpa aliqua.
        </p>
        <h1 className={kor}>RDA를 소개합니다.</h1>
        <p className={kor}>
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
        </p>
        <p className={kor}>
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
        </p>
        <p className={kor}>
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다. 
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
          한글로 된 글입니다. 한글로 된 글입니다. 한글로 된 글입니다.
        </p>
      </div>
    )
  }
}