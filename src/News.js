
const News = ({ name, extra, text, header, img, alt }) => {

  return name ?(
    <div className="big-box">
      <div className="intro">
        <img className="big-box-img" src={img} alt={alt} />
        <h1>{name}</h1>
      </div>
      <div className="box">
        <pre>{extra}</pre>
        <p>{text}</p>
      </div>
      <div className="square">
        <h1>{header}</h1>
      </div>
    </div>
  ) : (
    <h1>Malumot topilmadi</h1>
  )
}

export default News