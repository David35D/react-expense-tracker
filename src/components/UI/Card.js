import './Card.css';

const Card = (props) => {
    const classes = `card ${props.className}`;      // Adding classes to the card dinamically

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;