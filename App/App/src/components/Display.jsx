import React, { Component } from 'react';
import Answer from './Answer.jsx';
import Prompt from './Prompt.jsx';

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentIndex: 0,
          showAnswer: false
        }
        this.showClick = this.showClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
      }
    
      showClick() {
        let currShow = this.state.showAnswer;
        this.setState({ showAnswer: !currShow });
      }
    
      nextClick() {
        const { questions } = this.props;
        let currIndex = this.state.currentIndex;
        let nextIndex = (currIndex + 1) % questions.length;
        this.setState({ currentIndex: nextIndex })
        this.showClick();
      }
    
      render() {
        const { questions } = this.props;
        const { currentIndex, showAnswer } = this.state;
        let answerArea;
        if (showAnswer)  {
          answerArea = <Answer questions={questions} currentIndex={currentIndex} nextClick={this.nextClick} />
        } else {
          answerArea = <div />
        }
        return (
          <div> 
            Question:
            <Prompt questions={questions} currentIndex={currentIndex}/>
            <button onClick={this.showClick}> Show answer </button>
            {answerArea}
          </div>
        )
      }
    }

export default Display;