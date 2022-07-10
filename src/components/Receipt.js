import '../styling.css'

function Receipt(props) {
    const person = props.person;
    const {main, protein, rice, sauce, toppings, drink, cost} = props.order
    const view = {display: props.paid ? 'none' : 'block'}
    
    return (
        <div style={view} className="Ticket" onClick={props.onClick}>
            <h3>Korilla Receipts</h3>
            <h1>{person}</h1>
            <div className="ticketword">
                <ul>
                    <li>
                        <span className="type">Main: </span>
                        <span className="order">{main}</span>
                    </li>
                    <li>
                        <span className="type">Protein: </span>
                        <span className="order">{protein}</span>
                    </li>
                    <li>
                        <span className="type">Rice: </span>
                        <span className="order">{rice}</span>
                    </li>
                    <li>
                        <span Classname="type">Sauce: </span>
                        <span className="order">{sauce}</span>
                    </li>
                    <li>
                        <span className="type">Toppings: </span>
                        <span className="order">{toppings}</span>
                    </li>
                    <li>
                        <span className="order">Drink: </span>
                        <span className="type">{drink}</span>
                    </li>
                    <li>
                        <span className="order">Cost: </span>
                        <span className="type">{cost}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Receipt;