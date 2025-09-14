
import './App.css';

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Student></Student>
      <Student></Student>
      <Person></Person>
      <Developer name= 'Rafin' tech= "JS"></Developer>
      <Developer name= 'Apurbo' tech= "Python"></Developer>
      <Developer name= 'Mithia' tech= "Java"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Mushfiq" runs="5000"></Player>
      <Salami event= 'Rojar Eid' amount= "1000" ></Salami>
      <Salami event= 'Graduation' amount= "0" ></Salami>
    </>
  )
}

function Salami({event, amount=0}) {
  return(
    <div className='student'>
      <p>Salami For : {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}




// const {name, runa} = {name: 'Tamim', runs: '5000'}
function Player({name, runs}) {
  return(
    <div style={{
      border: '2px solid blue',
      borderRadius: '20px',
    }}>
      <h3>Name : {name}</h3>
      <p>Run : {runs}</p>
    </div>
  )
}

// const {name, tech}= {name: 'Apurbo', tech: "JS"}


function Developer(props) {
  console.log(props);     
  return(
    <div style={{
      border: '2px solid green',
      borderRadius: '20px',
    }}>
      <h3>Developer : {props.name}</h3>
      <p>Technology : {props.tech}</p>
    </div>
  )
}


function Person(){

  const age = 25;
  const name = 'mushfiq';

  const personStyle ={
    color: 'red',
    textAlign: 'left',
  }

  return(

    <p id='' title='tooltip' style={personStyle}> HI, I am {name} & my age is {age} </p>
  )
}

function Student() {
  
  return(
    <div className='student'>
      <p>name: </p>
      <p>dept</p>
    </div>
  )
}


function Pet() {
  return(
    <p>Cat</p>
  )
}


function Sports() {
  return(
    <div>
      <h2>Football</h2>
      <ul>
        <li>Fild</li>
        <li>Ball</li>
      </ul>
      <p>Love to play</p>
    </div>
  )
}

export default App
