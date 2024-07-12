import pin from '../assets/pin.png'

export default function Card() {
    return (
        <div className="card--container">
            <img src="https://i.natgeofe.com/n/1488e878-fe1d-4ce7-b6f5-16ce19435851/cherry-blossoms-mt-fuji-japan_3x4.jpg" className="card--main--picture" />
            <div className="card--details">
                <div className="card--location">
                    <img src={pin} alt="" className="card--pin" />
                    <h5 className="card--country">JAPAN</h5>
                    <a href="" className="card--map--link">View on Google Maps</a>
                </div>
                <h2>Mount Fuji</h2>
                <h4>12 Jan, 2021 - 24 Jan, 2021</h4>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}