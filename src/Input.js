import './Input.css'
let input = document.getElementsByTagName('input')

function viewConsole() {
  console.log(input.value)
}

const Input = () => {
  return (
    <div className='input'>
      <input type="text" />
      <button type='submit' onClick={viewConsole}>CLICK</button>
    </div>
  )
}

export default Input