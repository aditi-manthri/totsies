"use client";
import { useState } from "react";
import "./globals.css";

export default function HomePage() {
  const [count, setCount] = useState(0);
  const maxCount = 10;

  const incrementCounter = () => {
    if (count < maxCount) {
      setCount(count + 1);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counterBox">
        {count >= maxCount && (
          <div className="overlay">
            <div className="lollipopIcon">🍭</div>
            <h2 className="congratulationsText">Congratulations! You have reached the center of a Tootsie Pop!</h2>
            <a className="message" href="https://www.npr.org/2015/02/10/385138839/how-many-licks-does-it-take-to-get-to-a-tootsie-pops-center">Click here to learn more about this kind of useless fact, lol</a>
            <button className="actionButton" onClick={resetCounter}>Replay</button>
          </div>
        )}

        <h1 className="title">How Many Licks to the Center of a Tootsie Pop?</h1>
        <div className="countDisplay">{count}</div>

        {count < maxCount ? (
          <button onClick={incrementCounter} className="actionButton">
            (c)lick
          </button>
        ) : null}
      </div>
    </div>
  );
}
