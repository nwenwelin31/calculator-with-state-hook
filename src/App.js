
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num1, setNum1] = useState('Not');
  const [num2, setNum2] = useState('Not');
  const [result, setResult] = useState();
  const [operation, setOperation] = useState();
  const [action, setAction] = useState();

  
  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

    const handleNum2Change = (event) => {
      setNum2(event.target.value);
    };
    const handleOperation = (op) => {
      setOperation(op);
    };

    
const calculator = () => {
  let result;
  let action;
    switch (operation) {
      case '+':
        result =(parseInt(num1) + parseInt(num2));
        action ="Sum Result : ";
        break;
      case '-':
        result = (parseInt(num1) - parseInt(num2));
        action ="Subtract Result : ";
        break;
      case '*':
        result = (parseInt(num1) * parseInt(num2));
        action ="Multiply Result : ";
        break;
      case '/':
        // Check if num2 is not zero before performing division
        if (parseInt(num2) !== 0) {
          result = (parseInt(num1) / parseInt(num2));
          action ="Division Result : ";
        } else {
          result = "Cannot divide by zero";
        }
        break;
      default:
        break;
    }
    setResult(result);
    setAction(action);
};

useEffect(() => {
  calculator();
  console.log('calculating')
}, [num1,num2,operation]);


  // const sum = (event) => {
  //    event.preventDefault();
  //   if(num1 === '0' || num2 === '0'){
  //     alert('Please enter a number');
  //   }
  //   else{
  //     const add = parseInt(num1) + parseInt(num2);
  //     setAdd(add);
  //   }
  // };
  return (
    <div className="App">
      <div className='container'>
          <form className='login-form'>
            <h1>Calculator</h1>
            {/* number one */}
            <div className="form-input-material">
              <label htmlFor=''>Number 1:</label>
              <input type='number' name='num1' placeholder='Enter a number' className='form-control' 
                onChange={handleNum1Change}
                required/>
            </div>

            {/* number two */}
            <div className="form-input-material">
              <label htmlFor=''>Number 2:</label>
              <input type='number' name='num2' placeholder='Enter a number' className='form-control' 
                onChange={handleNum2Change} required/>
            </div>

            {/* sum button */}
            <div className='d-flex'>
              <button className="btn btn-primary mx-1" type='button' onClick={() => handleOperation('+')}>+</button>
              <button className="btn btn-primary mx-1" type='button' onClick={() => handleOperation('-')}>-</button>
              <button className="btn btn-primary mx-1" type='button' onClick={() => handleOperation('*')}>*</button>
              <button className="btn btn-primary mx-1" type='button' onClick={() => handleOperation('/')}>/</button>
            </div>

            {/* show result */}
            <div>
              <h3>{ isNaN(result) ? '':  action+result}</h3>
            </div>
          </form>
      </div>
    </div>
  );
}

export default App;
