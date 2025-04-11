import "./Card.css";
import { Button } from "../ButtonElement";
import PropTypes from 'prop-types';

const buttonStyles = {
    width: "70%",
    alignItems: "center",
    marginBottom: "0",
    textDecoration: "none", 
    backgroundColor: "#12263f",
    color: "#ffffff",
    cursor: "pointer",
    marginLeft: "50px",
    textSize: "20px",   
};

function Card(props) {
    Card.propTypes = {
        link: PropTypes.string.isRequired,
    };

    const redirect = () => {
        window.location.href = props.link; 
    };

    Card.propTypes = {
        image: PropTypes.string.isRequired,
        head: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        event: PropTypes.string.isRequired, 
        date: PropTypes.string.isRequired, 
    };

    return (
        <div className="cardproject">
            <img className="cardimage" src={props.image} alt="image" />

            <div className="layer">
                <h2>{props.head}</h2>
                <p>{props.content}</p>
                <Button style={buttonStyles} onClick={redirect}>Register Now</Button>
            </div>
            <div className="event-info">
                <p>{props.event}</p> {/* Display event information */}
            </div>
            {/* <div className="date-info">
                <i className="fas fa-calendar-alt"></i>
                <p>{props.date}</p>
            </div> */}
            {/* <div className="date-info">
            <i className="fas fa-map-marker-alt"></i>
                <p>Online</p>
            </div> */}
        </div>
    );
}

export default Card;
