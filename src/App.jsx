import './App.css'
import Counter from './counter';
import Friends from './friends';
import Team from './team';
import Users from './users';

function App() {
  function handleClick() {
    alert('button clicked')
  }
  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => { alert('click me again button click') }}>Click me again</button>
      <button onClick={() => addToFive(5)}>Third button</button>
    </>
  )
}

export default App
