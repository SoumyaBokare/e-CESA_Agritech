import { FaTrophy } from "react-icons/fa";
import "./prizes.css";

const Prizes = () => {
  const prizeData = [
    { place: "First Runner Up", amount: "₹70,000" },
    { place: "Winner", amount: "₹1,00,000" },
    { place: "Second Runner Up", amount: "₹30,000" },
  ];

  return (
    <section className="prizes-section">
      <h2 className="prizes-title">PRIZES</h2>
      <ul className="prizes-list">
        {prizeData.map((prize, index) => (
          <li key={index} className={`prize-item ${prize.place.replace(/\s+/g, '-').toLowerCase()}`}>
            <FaTrophy className="prize-icon" />
            <p className="prize-place">{prize.place}</p>
            <p className="prize-amount">{prize.amount}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Prizes;