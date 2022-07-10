import Receipt from './components/Receipt';
import record from './order/Record';
import { useState } from 'react';

function App() {
    const [receipts, setReceipts] = useState(record);

    function onClick(person) {
        setReceipts(lastReceipt => {
            return lastReceipt.map(receipt => {
                return receipt.person == person ? {...receipt, paid: !receipt.paid} : receipt})
        })
    }
    return (
        <div className="App">
            {
                receipts.map((receipt) => {
                    return <Receipt key={receipt.person} person={receipt.person} order={receipt.order} paid={receipt.paid} onClick={() => onClick(receipt.person)} />
                })
            }
        </div>
    )
}

export default App;