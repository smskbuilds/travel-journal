import globe from '../assets/globe.png'

export default function Header() {
    return (
        <div className="header--container">
            <img src={globe} className = 'globe--icon'/>
            <h1>my travel journal.</h1>
        </div>
    )
}