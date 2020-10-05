import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MultiChoice from './components/MutilChoice';
import FillInBlank from "./components/FillInBlank";

class App extends Component {
  state = {
    questions: [],
  };

  async componentDidMount() {
    const { data: questions } = await axios.get(
      "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions"
    );
    this.setState({ questions });
    // console.log("questions", this.state.questions); //clg
  }

  handleSubmit = () => {
    let result = 0;

 
    // console.log(this.state.questions);
    // console.log("Kết quả: ", result + "/" + this.state.questions.length);
  };
  

  render() {
    const { questions } = this.state;
    return (
      <div className="container">
        <h3><strong>DANH SÁCH CÂU HỎI</strong></h3>
        {questions.map((question) => {
          if (question.questionType === 1)
            return (
              <div key={question.id}>
                <br/>
                <h4>Câu hỏi {question.id}:</h4>
                <p>{question.content}</p>
                <MultiChoice question={question} />
              </div>
            );
          return (
            <div key={question.id}>
              <h4>Câu hỏi {question.id}:</h4>
              <p>{question.content}</p>
              <FillInBlank question={question} />
              <br />
            </div>
          );
        })}
        <br />
        <button onClick={this.handleSubmit} className="btn btn-success" type="submit" style={{marginBottom: "50px"}}>SUBMIT</button>
      </div>
    );
  }
}

export default App;
