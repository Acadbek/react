import './App.css';
import Loader from './Loader';
import Input from './Input';
import Content from './Content';
import LifeCycleHooks from './LifeCycleHooks'
import Iteration from './iteration';
import Post from './Post';
import Form from './Form';

function App(props) {
  const handle = () => {
    console.log('545545454')
  }
  return props.isLoading ? (
    <Loader/>
  ):(
   <div>
    {/* <Content text={'askjdaskjdaksjdkj'}/> */}
    {/* <LifeCycleHooks/> */}
    {/* <Iteration/> */}
    {/* <Post callBack={handle}/> */}
    <Form/>
   </div>
  );
}

export default App;
