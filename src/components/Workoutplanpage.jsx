import React from 'react'
import { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import './workoutplan.css'
import { data } from './workouts.json'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { alignProperty } from '@mui/material/styles/cssUtils'
import mastercard from './images/icons8-mastercard-48.png'
import paypal from './images/icons8-paypal-48.png'
import visa from './images/icons8-visa-50.png'
import { Link } from 'react-router-dom'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const Workoutplanpage = ({ workoutData, setWorkoutData }) => {
  let { name } = useParams();
  const [currentWorkout, setCurrentWorkout] = useState();
  const [currentWorkout2, setCurrentWorkout2] = useState();
  const [currentBmi, setBmi] = useState('to90');
  const [showingBmi, setShowingBmi] = useState();
  const [condition, setcondition] = useState();
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(50);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [halfCurrentWorkout, setHalfCurrentWorkout] = useState([]);
  const loggedUser = JSON.parse(localStorage.getItem('loggeduser'))
  const [creditnum, setCreditNum] = useState();
  const [confnum, setConfNum] = useState("");
  const [nameoncard, setnameoncard] = useState("");
  const [exdate, setexdate] = useState();
  useEffect(() => {
    setCurrentWorkout(workoutData?.find(obj => obj?.name == name));
  }, [workoutData])
  useEffect(() => {
    if (currentWorkout) {
      const newValue1 = Object.values(currentWorkout[currentBmi])[0];
      const newValue2 = Object.values(currentWorkout[currentBmi])[1];
      if (!halfCurrentWorkout.includes(newValue1) && !halfCurrentWorkout.includes(newValue2)) {
        setHalfCurrentWorkout([newValue1, newValue2]);
      }
    }

  }, [currentBmi, currentWorkout]);

  function Bmicalc(weight, height) {
    let bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    setShowingBmi(bmi)
    if (bmi < 18.5) {
      setcondition('Under Weight')
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setcondition('Normal Weight')
    } else if (bmi >= 25 && bmi <= 29.9) {
      setcondition('Over Weight')
    } else if (bmi >= 30) {
      setcondition('Obesse')
    }
  }
  function changeWork() {
    if (showingBmi < 18.5) {
      setBmi('to70')
    } else if (showingBmi >= 18.5 && showingBmi <= 24.9) {
      setBmi('to90')
    } else if (showingBmi >= 25 && showingBmi <= 29.9) {
      setBmi('to120')
    } else if (showingBmi >= 30) {
      setBmi('to120')
    }
  }
  function noPaiment() {
    if (localStorage.getItem("loggeduser")) {
      if (loggedUser.creditnum != "") {
        console.log(currentWorkout);
        return currentWorkout && Object.values(currentWorkout[currentBmi]).map((item, index) => {
          return (
            <div className='work-hard' key={index}>
              <div className='workout-card'>
                <h2 className='exercises-name'>{item.name}</h2>
                <h2>{item.sets} sets</h2>
                <h2>{item.reps} reps</h2>
                <h2>weight to use - {item.weight}</h2>
                <ol className='list'>
                  {item.instructions.split("!").map((item, index) => {
                    return (
                      <li className="list-item" key={index}><span>{item}</span></li>
                    );
                  })}
                </ol>
              </div>
              <div className='workout-images'>
                <img className='workout-image' src={currentWorkout.images[index]} />
              </div>
            </div>
          );
        })


      }
      else {
        return halfCurrentWorkout && halfCurrentWorkout.map((item, index) => {
          return (
            <div className='workout-text' key={index}>
              <div className='work-hard'>
                <div className='workout-card'>
                  <h2 className='exercises-name'>{item.name}</h2>
                  <h2>{item.sets} sets</h2>
                  <h2>{item.reps} reps</h2>
                  <h2>weight to use - {item.weight}</h2>
                  <ol className='list'>
                    {item.instructions.split("!").map((item, index) => {
                      return (
                        <li className="list-item" key={index}><span>{item}</span></li>
                      );
                    })}
                  </ol>
                </div>
                <div className='workout-images'>
                  <img className='workout-image' src={currentWorkout.images[index]} alt="" />
                </div>
              </div>
            </div>
          );
        });
      }
    }
    else {
      console.log(halfCurrentWorkout);
      return halfCurrentWorkout && halfCurrentWorkout.map((item, index) => {
        console.log(item);
        return (
          <div className='workout-text' key={index}>
            <div className='work-hard'>
              <div className='workout-card'>
                <h2 className='exercises-name'>{item.name}</h2>
                <h2>{item.sets} sets</h2>
                <h2>{item.reps} reps</h2>
                <h2>weight to use - {item.weight}</h2>
                <ol className='list'>
                  {item.instructions.split("!").map((item, index) => {
                    return (
                      <li className="list-item" key={index}><span>{item}</span></li>
                    );
                  })}
                </ol>
              </div>
              <div className='workout-images'>
                <img className='workout-image' src={currentWorkout.images[index]} alt="" />
              </div>
            </div>
          </div>
        );
      });
    }
  }
  function changeworkout() {
    if (localStorage.getItem('loggeduser')) {
      let user = JSON.parse(localStorage.getItem('loggeduser'))
      let users = JSON.parse(localStorage.getItem('users')).filter(item => item.email != user.email)
      const newperson = { username: user.username, email: user.email, password: user.password, verify: user.verify, creditnum: user.creditnum, confirmationnum: user.confirmationnum, myworkout: currentWorkout?.name };
      localStorage.setItem('loggeduser', JSON.stringify(newperson))
      users.push(newperson)
      localStorage.setItem('users', JSON.stringify(users))
    }
  }
  function handleClick() {
    if (localStorage.getItem("loggeduser")) {
      if (creditnum.length == 19 && confnum.length == 3) {
        loggedUser.creditnum = creditnum;
        loggedUser.confirmationnum = confnum;
        console.log(loggedUser);
        localStorage.setItem("loggeduser", JSON.stringify(loggedUser))
        const users = JSON.parse(localStorage.getItem("users")).filter((item) => item.email != loggedUser.email);
        users.push(loggedUser);
        localStorage.setItem("users", JSON.stringify(users));
        noPaiment();
      }
      else {
        alert("the credit card number or the confirmation number is incorrect");
      }

    }
  }
  // const handleInputChange = (event) => {
  //   const { value } = event.target;
  //   const formattedValue = value.replace(/\s/g, '').match(/.{1, 4}/g)?.join(' '); 
  //   console.log(formattedValue)
  //   setCreditNum(formattedValue); 
  //   console.log(creditnum)
  // };
  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = value.replace(/\s/g, '').match(/\d{1,4}/g)?.join(' ');
    console.log(formattedValue);
    
    if (formattedValue) {
      setCreditNum(formattedValue);
    } else {
      setCreditNum(value);
    }
  };
  const handleExpiryDate = (date) => {
    setExpiryDate({
      value: date
    });
  };
  function handlePayment() {
    if (!localStorage.getItem("loggeduser")) {
      return (
        <><Button onClick={handleOpen}>to continue reading</Button><Modal open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className='payment-container'>
              <h1> you need to login first</h1>
              <Link to='/user'>
                <button class='sbmit-btn' id="login">to login</button>
              </Link>
            </div>
          </Box>
        </Modal></>

      )
    }
    else if (loggedUser.creditnum != "") {
      return null
    }
    else {
      return (
        <><Button onClick={handleOpen}>to continue reading</Button><Modal open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className='payment-container'>
              <h1>Add Payment Method</h1>
              <div>
                <img src={mastercard} alt="" />
                <img src={paypal} alt="" />
                <img src={visa} alt="" />
              </div>
              <div className='flex-start'>
                <h3 className='start'>Credit card number</h3>
                <input type='text'  value={creditnum} maxLength="19" placeholder='1234 5678 9012 3456' className='input' onChange={e => {handleInputChange(e)}}></input>
              </div>
              <div className='flex-start'>
                <h3 className='start'>Name on card</h3>
                <input type='text' placeholder='Ex.John' className='input'></input>
              </div>
              <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}>
                <span className='flex-start'>
                  <span className='start'>Expiery date</span>
                  <input type='text' className='input2' placeholder='06/23' value={exdate} onChange={e => setexdate(e.target.value.replace(/\//g, "").substring(0, 2) +
                    (e.target.value.length > 2 ? '/' : '') +
                    e.target.value.replace(/\//g, "").substring(2, 4))}></input>
                </span>
                <span className='flex-start'>
                  <span className='start'>Security number</span>
                  <input type='number' min="1" max="999" placeholder='• • •' className='input2' onChange={e => setConfNum(e.target.value)}></input>
                </span>
              </div>
              <button class="sbmit-btn" onClick={() => handleClick()}>Subscribe 19.99$</button>

            </div>
          </Box>
        </Modal></>

      )
    }
  }

  return (
    <div className='workoutplan-container'>
      <h1 style={{ marginBottom: '50px', marginTop: '50px' }}>Our workouts</h1>
      <div className='bmi-container'>
        <h1>BMI Calculator</h1>
        <div class="display">
          <p id="result">{showingBmi}</p>
          <p id="category">{condition}</p>
        </div>
        <div class="row">
          <input type="range" min={30} max={300} value={weight} id="weight" onChange={e => setWeight(e.target.value)} />
          <span id="weight-val">{weight} kg</span>
        </div>
        <div class="row">
          <input type="range" min={100} max={300} value={height} id="height" onChange={e => setHeight(e.target.value)} />
          <span id="height-val">{height} cm</span>
        </div>
        <div className='calc-buttons'>
          <button onClick={() => Bmicalc(weight, height)} className='caculator'>calculate</button>
          <button onClick={() => changeWork()} className='caculator'>change workout</button>
        </div>
      </div>
      <div className='workout-base-info'>
        <h1>{currentWorkout?.name}</h1>
        <h1>Level : {currentWorkout?.level}</h1>
        <h1>Best for {currentWorkout?.goal}</h1>
        <h3>Exercises : {currentWorkout?.exercises}</h3>
      </div>

      {localStorage.getItem("loggeduser") && loggedUser.creditnum != "" && <button className='current-button' onClick={() => changeworkout()}>Make current workout</button>}
      <div className='workout-text'>
        {noPaiment()}
        {handlePayment()}
      </div>

    </div>
  )
}

export default Workoutplanpage
