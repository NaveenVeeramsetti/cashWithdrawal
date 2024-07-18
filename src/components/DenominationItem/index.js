// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationItemDetails, denomination} = props
  const {value} = denominationItemDetails

  const onClickButton = () => {
    denomination(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
