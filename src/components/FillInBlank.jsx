import React, { Component } from "react";

class FillInBlank extends Component {

    checkExact = (e) => {
    // console.log("e", e.target.value); //clg

    let value = e.target.value.toLowerCase().trim();;
    // console.log('value', value); //clg

    let answer = this.props.question.answers[0].content.toLowerCase();
    // console.log('answer', answer); //clg

    if (value === answer) return true;
    return false;
  };

  render() {
    return (
      <input
        onChange={this.checkExact}
        className="form-control form-control-md col-md-4"
        type="text"
        placeholder="Trả lời câu hỏi"
      ></input>
    );
  }

}

export default FillInBlank;
