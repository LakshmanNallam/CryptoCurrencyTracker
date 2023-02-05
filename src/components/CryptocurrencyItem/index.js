import './index.css'

const CryptoCurrencyItem = props => {
  const {eachItem} = props
  return (
    <li className="header noBg">
      <div className="firstCon">
        <div className="imgConnn">
          <img
            src={`${eachItem.currencyLogo}`}
            className="imgg"
            alt={eachItem.currencyName}
          />
        </div>
        <p>{eachItem.currencyName}</p>
      </div>
      <div className="secondsCon">
        <p>{eachItem.usdValue}</p>
        <p>{eachItem.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
