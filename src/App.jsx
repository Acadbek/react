import './App.css';
import Loader from './Loader';
import Input from './Input';
import Content from './Content';


function App(props) {
  return props.isLoading ? (
    <Loader/>
  ):(
   <div>
    <Content text={'askjdaskjdaksjdkj'}/>
   </div>
  );
}

export default App;
