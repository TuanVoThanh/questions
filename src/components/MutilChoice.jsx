import React, { Component } from "react";

class MultiChoice extends Component {
  checkExact = (e) => {
    // console.log("e:", e.target.value); //clg
    let value = e.target.value;
    // console.log(value); //clg
    if (value) return true;
    return false;
};

  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="form-check">
          <input
            onClick={this.checkExact}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue={this.props.question.answers[0].exact}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            &ensp;a. {question.answers[0].content}
          </label>
        </div>
        <div className="form-check">
          <input
            onClick={this.handleClick}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue={this.props.question.answers[1].exact}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            &ensp;b. {question.answers[1].content}
          </label>
        </div>
        <div className="form-check">
          <input
            onClick={this.handleClick}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue={this.props.question.answers[2].exact}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            &ensp;c. {question.answers[2].content}
          </label>
        </div>
        <div className="form-check">
          <input
            onClick={this.handleClick}
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            defaultValue={this.props.question.answers[3].exact}
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            &ensp;d. {question.answers[3].content}
          </label>
          <br />
        </div>
      </div>
    );
  }
}

export default MultiChoice;
