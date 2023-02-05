import {Component} from 'react'
import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptoCurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props
    console.log(cryptoData)
    return (
      <div className="CrypptoList">
        <h1>Cryptocurrency Tracker</h1>
        <div className="ImgCon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
            className="img"
            alt="cryptocurrency"
          />
        </div>
        <div className="table">
          <div className="header">
            <div className="firstCon">
              <p>Coin Type</p>
            </div>
            <div className="secondsCon">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          {cryptoData.map(eachItem => (
            <CryptoCurrencyItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default CryptoCurrenciesList
