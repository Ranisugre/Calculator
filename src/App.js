import  { Component } from "react";
import "./App.css";
class App extends Component {

  constructor (){
    super();
    this.state = {
     input :'',
     result :'0'
    }
  }
  eventHandler(value1){
    if (value1 === '=') {
      this.calculateResult();
    } else if (value1 === 'AC') {
      this.clearInput();
    } else {
      this.setState((present) => ({
        input: present.input + value1,
      }));
    }
  }
  clearInput() {
    this.setState({ input: '', result: '0' });
  }
  calculateResult (){
    try {
      const result = eval('0 +' + this.state.input);
      this.setState({result});
    }catch (error){
      this.setState({result :'Error'})
    }
  }
  render (){
    return (
      <>
      <h1>A virtual calculator built with React</h1>
      <div className="calculator">
        <div className="output">
          <div className="input">{this.state.input}</div>
          <div className="result">{this.state.result}</div>
        </div>
       <button className="span-two" onClick={()=>this.eventHandler('AC')}>AC</button>
       <button onClick={()=>this.eventHandler('/')}>/</button>
       <button onClick={()=>this.eventHandler('+')}>+</button>
       <button onClick={()=>this.eventHandler('7')}>7</button> 
       <button onClick={()=>this.eventHandler('8')}>8</button>
       <button onClick={()=>this.eventHandler('9')}>9</button>
       <button onClick={()=>this.eventHandler('*')}>*</button>
       <button onClick={()=>this.eventHandler('4')}>4</button> 
       <button onClick={()=>this.eventHandler('5')}>5</button>
       <button onClick={()=>this.eventHandler('6')}>6</button>
       <button onClick={()=>this.eventHandler('-')}>-</button>
       <button onClick={()=>this.eventHandler('1')}>1</button> 
       <button onClick={()=>this.eventHandler('2')}>2</button>
       <button onClick={()=>this.eventHandler('3')}>3</button>
       <button onClick={()=>this.eventHandler('+')}>+</button>
       <button className="span-two" onClick={()=>this.eventHandler('0')}>0</button>
       <button onClick={()=>this.eventHandler('.')}>.</button>
       <button onClick={()=>this.eventHandler('=')}>=</button>
       
  
  
      </div>
        
      </>
    );
  };
  }

 
  
export default App;
