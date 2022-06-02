import React from "react"

const Card = (props) => {

  // const isLoading = messagesLoading || masterDataLoading
  return (
    <div>
      {props.cards.forEach((v, i) => {
        return (
          <div>
            {v}
          </div>
      )    
      })}
    </div>
  )
}

export default Card
