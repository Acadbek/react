import './App.css';

import Loader from './Loader';
import axios from 'axios';
import News from './News';

let user = []
const getUser = async () => {
  let res = await axios.get('https://jsonplaceholder.typicode.com/users')
  user = res.data
  console.log(user)
}

getUser()

const name = true

function App(props) {
  return props.isLoading ? (
    <Loader/>
  ):(
    <div>
      <News name={name ? 'asadbek': 'john'} extra={2022} text={'Asadbek Nosirjonov'} header={'BigJOB'} img={'https://reqres.in/img/faces/7-image.jpg'}>
        Extra info
      </News>
      <News name={name ? 'asadbek': 'john'} extra={2022} text={'Asadbek Nosirjonov'} header={'BigJOB'} img={'https://reqres.in/img/faces/5-image.jpg'}/>
    </div>
  );
}

export default App;
