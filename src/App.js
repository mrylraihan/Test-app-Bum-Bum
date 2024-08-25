import './App.css';
import Group from './components/Group';
import testData from './data/testData';
import data from './data/testData'

function App() {
  console.log(data)
  // You have to think about about how your storing your data and also how you want to transform your data
  let jsData = JSON.parse(testData)
  return (
    <>
    <div className="app">
     <h1>Medical Bum-Bum</h1>
    </div>
      {jsData.map(ele=><Group data={ele} key={ele.header}/>)}
    </>
  );
}

export default App;
