import './SingleCard.css'
export default function SingleCard({card, handleChoice, flipped, disabled}) {

    const handleClick = () => {
        handleChoice(card)
    } 

  return (
    <div className = "card">
        <div className={flipped ? "flipped":""}>
            <img 
                className="front" 
                src={card.src} 
                alt="card front" 
                width="200" 
                height="200"/>
            <img 
                className="back" 
                onClick={disabled || flipped ? null:handleClick} 
                src="/images/cover.jpg" 
                alt="card back" 
                width="200" 
                height="200"/>
        </div>
    </div>
  )
}
