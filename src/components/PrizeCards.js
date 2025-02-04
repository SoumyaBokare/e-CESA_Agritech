import { useEffect, useState } from "react"
import "./prizes.css"

const PrizeCards = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const progress = Math.min(Math.max(scrollPosition / windowHeight, 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getCardStyle = (index) => {
    const baseRotation = -10 + index * 5
    const targetRotation = 0
    const baseTranslateX = -150 + index * 100
    const targetTranslateX = index * 300

    const currentRotation = baseRotation + (targetRotation - baseRotation) * scrollProgress
    const currentTranslateX = baseTranslateX + (targetTranslateX - baseTranslateX) * scrollProgress

    return {
      transform: `
        translateX(${currentTranslateX}px)
        rotate(${currentRotation}deg)
      `,
    }
  }

  const cards = [
    { amount: "₹1,00,000", rank: "Winner", position: "1st", className: "first" },
    { amount: "₹70,000", rank: "First Runner Up", position: "2nd", className: "second" },
    { amount: "₹30,000", rank: "Second Runner Up", position: "3rd", className: "third" },
  ]

  return (
    <div className="container">
      <h2>Prize Pool</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className={`card ${card.className}`} style={getCardStyle(index)}>
            <div className="amount">{card.amount}</div>
            <div className="rank">{card.rank}</div>
            <div className="position">{card.position}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PrizeCards

