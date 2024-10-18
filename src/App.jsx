
import './App.css'
import Count from './count'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleCick(){
    alert('this is a click button')
  }
  const handleButtonClick3=()=>{
    alert('button Click 3')
  }
  const handleButtonClice4=(num)=>{
    alert(num+5)
  }

  return (
    <>
      <h1>React core-concapt</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Count></Count>
      <button onClick={handleCick}>Click me</button>
      <button onClick={handleButtonClick3}>click me3</button>
      <button onClick={()=>{alert("click button 2")}}>Click 2</button>
      <button onClick={()=>handleButtonClice4(5)}>Click 4</button>
    </>
  )
}

export default App
