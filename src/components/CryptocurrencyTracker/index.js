import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptoCurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], notLoaded: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const modData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      currencyLogo: eachItem.currency_logo,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))
    this.setState({cryptoData: modData, notLoaded: false})
  }

  render() {
    const {cryptoData, notLoaded} = this.state
    return (
      <div className="cryptoTracker">
        {notLoaded ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptoCurrenciesList cryptoData={cryptoData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
