import React, { Component } from 'react'
import './card.styles.css'
class Card extends Component {

  render() {
    const {monster : { id, name, email } } = this.props;
    
    return(
      <div key={id} className="card-container">
          <img src={`https://robohash.org/${id}set=set3&size=150x150`} alt={`monster ${name}  `} />
          <h2>{name}</h2>
          <h3>{email}</h3>
      </div>
    )
  }
}
export default Card