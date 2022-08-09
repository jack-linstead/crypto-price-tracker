import React from 'react'
import './Coin.css'

const Coin = (props) => {
  return (
    <div className='coin-container'>
        <div className="coin-row">
            <div className="coin">
                <img src={props.image} alt="crypto" />
                <h1>{props.name}</h1>
                <p className="coin-symbol">{props.symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${props.current_price.toLocaleString()}</p>
                <p className="coin-volume">${props.total_volume.toLocaleString()}</p>
                {props.price_change_percentage_24h < 0 ? (
                    <p className='coin-percent red'>{props.price_change_percentage_24h.toFixed(2)}%</p>
                ) :(
                    <p className='coin-percent green'>{props.price_change_percentage_24h.toFixed(2)}%</p>
                )}
                <p className='coin-multiple'>{(props.ath/props.current_price).toFixed(2)}X to to ATH of {props.ath}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin