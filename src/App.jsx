import './App.css';
import Loader from './Loader';
import Input from './Input';
import Content from './Content';
import LifeCycleHooks from './LifeCycleHooks'
import Iteration from './iteration';

function App(props) {
  return props.isLoading ? (
    <Loader/>
  ):(
   <div>
    {/* <Content text={'askjdaskjdaksjdkj'}/> */}
    {/* <LifeCycleHooks/> */}
    <Iteration/>
   </div>
  );
}

export default App;
