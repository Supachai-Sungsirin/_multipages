import { useEffect, useState } from "react";

import "./Timer.css";

function Timer() {
  const [running, setRunning] = useState(false);
  const [secounds, setSeconds] = useState(58);

  useEffect( () =>{
    let interval = null;
    if (running) {
      interval = setInterval(() => {
        setSeconds(secounds => secounds + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, secounds]);

  function runClick() {
    setRunning(!running);
  }

  function secoundsToString(secounds) {
    const MINUTE_SECOUNDS = 60;
    const HOUR_SECOUNDS = 60 * MINUTE_SECOUNDS;
    const DAY_SECOUNDS = 24 * HOUR_SECOUNDS;

    const days = Math.floor(secounds / DAY_SECOUNDS);
    const hours = Math.floor((secounds % DAY_SECOUNDS) / HOUR_SECOUNDS);
    const minutes = Math.floor((secounds % HOUR_SECOUNDS) / MINUTE_SECOUNDS);
    const secs = secounds % MINUTE_SECOUNDS;

    if (days > 0) {
      return `${days}d ${hours}h ${minutes}m ${secs}s`
    } else if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`
    } else { 
      return `${secs}s`
    }
  }

  function resetClick() {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <div className="timer-container">
      <h3 className="timer-title">Timer</h3>
      <p>
        <input
          className="timer-display"
          type="text"
          readOnly={true}
          value={secoundsToString(secounds)}
        />
      </p>
      <div className="timer-buttons">
        <button className="btn btn-danger" onClick={resetClick}><i class="bi bi-arrow-clockwise">&nbsp;Reset</i></button>
        <button className={"btn " + (running ? "btn-warning" : "btn-success")} onClick={runClick}>
        <i className={"bi " + (running ? "bi-pause" : "bi-play")}></i>&nbsp;
        {running ? 'Pause' : 'Run'}
        </button>
      </div>
    </div>
  );
}

export default Timer;
