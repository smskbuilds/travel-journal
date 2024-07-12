import pin from '../assets/pin.png'

export default function Card(props) {
    return (
        <>
            <div className="card--container">
                <img src={props.imageUrl} className="card--main--picture" />
                <div className="card--details">
                    <div className="card--location">
                        <img src={pin} alt="" className="card--pin" />
                        <h5 className="card--country">{props.location}</h5>
                        <a href={props.googleMapsUrl} className="card--map--link">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <h4>{`${props.startDate} - ${props.endDate}`}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}