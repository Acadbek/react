
function PostList(props) {
  return(
    <div className={'div'}>
      <p onClick={props.cb}>{props.name}</p>
      <button>{props.btn}</button>
    </div>
  ) 
}

export default PostList