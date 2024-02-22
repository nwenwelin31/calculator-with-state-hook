
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [add, setAdd] = useState('');
  const sum = (event) => {
    event.preventDefault();
    if(num1 === 0 || num2 === 0){
      alert('Please enter a number');
    }
    else{
      const add = parseInt(num1) + parseInt(num2);
      setAdd(add);
    }
  }
  return (
    <div className="App">
      <div className='container'>
          <form onSubmit={sum}>
            <div className='col-md-5'>
            <h2>Sum Calculator</h2>
            </div>
            {/* number one */}
            <div className='col-md-5'>
              <label htmlFor='num1'>Number 1:</label>
              <input type='number' name='num1' id='num1' placeholder='Enter a number' className='form-control' required 
                onChange={(event) => setNum1(event.target.value)}
              />
            </div>

            {/* number two */}
            <div className='col-md-5'>
              <label htmlFor='num2'>Number 2:</label>
              <input type='number' name='num2' id='num2' placeholder='Enter a number' className='form-control' required 
                onChange={(event) => setNum2(event.target.value)}
              />
            </div>

            {/* sum button */}
            <div className='col-md-5 mt-2'>
              <button data-mdb-ripple-init class="btn btn-primary btn-block mb-4" type='submit'>Sum</button>
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
