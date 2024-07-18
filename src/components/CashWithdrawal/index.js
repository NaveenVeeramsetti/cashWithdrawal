// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  denomination = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initialName = name.slice(0, 1)
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="initial-name-container">
            <div className="name-container">
              <p className="initial-name">{initialName}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="balance-details-container">
            <p className="balance-description">Your Balance</p>
            <div>
              <p className="balance">{balance}</p> <br />
              <p className="currency">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="sum-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-list">
            {denominationsList.map(eachButton => (
              <DenominationItem
                denominationItemDetails={eachButton}
                key={eachButton.id}
                denomination={this.denomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
