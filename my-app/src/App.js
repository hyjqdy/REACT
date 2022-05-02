import './App.css'; //css-loader & style-loader
import CustomerList from './CustomerList';
import CustomHookComponent from './CustomHookComponent';

function App() {
  return (
    <div className="App">
       <h1>Customer Application</h1>
       {/* <CustomerList/> */}
       <CustomHookComponent/>
    </div>
  );
}

export default App;
