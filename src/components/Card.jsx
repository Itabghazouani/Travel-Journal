export default function Card(props) {

  return (
    <div className="card">
      <img src={`../public/assets/${props.item.image}`} alt="Site Photo" className="card--img"/>
      <div className="card--info">
        <div className="card--location">
          <i className="fa-solid fa-location-dot"></i>
          <span className="card--location--city">{props.item.location}</span>
          <a href={props.item.googleMapsUrl} target="_blank" className="card--location--link">View on Google Maps</a>
        </div>
        <h1 className="card--title">{props.item.title}</h1>
        <div className="card--dates">
          <span>{props.item.startDate} - </span><span>{props.item.endDate}</span>
        </div>
        <p className="card--desc">{props.item.description}</p>
      </div>
    </div>
  )
}
