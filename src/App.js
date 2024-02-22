
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [add, setAdd] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const sum = (event) => {
     event.preventDefault();
    if(num1 === '0' || num2 === '0'){
      alert('Please enter a number');
    }
    else{
      const add = parseInt(num1) + parseInt(num2);
      setAdd(add);
    }
  };
  return (
    <div className="App">
      <div className='container'>
          <form onSubmit={sum} className='login-form'>
            <h1>Sum Calculator</h1>
            {/* number one */}
            <div className="form-input-material">
              <label htmlFor='num1'>Number 1:</label>
              <input type='number' placeholder='Enter a number' className='form-control' 
                onChange={handleNum1Change}
                required/>
            </div>

            {/* number two */}
            <div className="form-input-material">
              <label htmlFor='num2'>Number 2:</label>
              <input type='number' placeholder='Enter a number' className='form-control' 
                onChange={handleNum2Change}
                required/>
            </div>

            {/* sum button */}
            <div>
              <button className="btn btn-primary mt-2" type='submit'>Sum</button>
            </div>

            {/* show result */}
            <div>
              <h3>Sum Result : {add}</h3>
            </div>
          </form>
      </div>
    </div>
  );
}

export default App;
