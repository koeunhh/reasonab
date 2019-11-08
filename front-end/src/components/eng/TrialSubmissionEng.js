import React, { Component } from 'react';
import '../../styles/trialSubmission.scss';

export default class TrialSubmissionEng extends Component {
  
  componentDidMount(){
    document.querySelector('.content').style = 'revert';
  }
  
  render(){    
    return(
      <div className='trialSubmission'>
        <h2>Your portfolio has been submitted successfully!</h2>
      </div>
    )
  }
}