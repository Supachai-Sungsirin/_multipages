import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./Animation.css";

const Animation = () => {
  // Global constants
  const fieldWidth = 700;
  const fieldHeight = 500;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const minSpeed = 3;
  const maxSpeed = 5;

  // State
  const [running, setRunning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, rotationAngle: 0 });
  const [direction, setDirection] = useState({ goRight: true, goDown: true });
  const [speed, setSpeed] = useState({ vx: 5, vy: 5 });

  // Random speed generator
  const randomSpeed = () => Math.random() * (maxSpeed - minSpeed) + minSpeed;

  // Run/Pause toggle
  const runClick = () => {
    setRunning(!running);
  };

  // Position calculation
  const calculate = () => {
    setPosition((prevPos) => {
      let { x, y, rotationAngle } = prevPos;
      let newDirection = { ...direction };
      let newSpeed = { ...speed };

      if (direction.goRight) {
        x = x + speed.vx;
        rotationAngle += 5;
        if (x >= maxLeft) {
          newDirection.goRight = false;
          newSpeed.vx = randomSpeed();
          rotationAngle += 90;
        }
      } else {
        x = x - speed.vx;
        rotationAngle -= 5;
        if (x <= 0) {
          newDirection.goRight = true;
          newSpeed.vx = randomSpeed();
          rotationAngle += 90;
        }
      }

      if (direction.goDown) {
        y = y + speed.vy;
        if (y >= maxTop) {
          newDirection.goDown = false;
          newSpeed.vy = randomSpeed();
          rotationAngle += 90;
        }
      } else {
        y = y - speed.vy;
        if (y <= 0) {
          newDirection.goDown = true;
          newSpeed.vy = randomSpeed();
          rotationAngle += 90;
        }
      }

      rotationAngle = rotationAngle % 360;
      setDirection(newDirection);
      setSpeed(newSpeed);

      return { x, y, rotationAngle };
    });
  };

  // Animation process
  useEffect(() => {
    const process = () => {
      if (running) {
        calculate();
      }
    };

    const interval = setInterval(process, 25);
    return () => clearInterval(interval);
  }, [running, direction, speed]);

  // Change ball image
  const changeImage = (img) => {
    const ball = document.getElementById("ball");
    switch (img) {
      case "basketball":
        ball.style.backgroundImage = "url('/_multipages/basketball.png')";
        break;
      case "football":
        ball.style.backgroundImage = "url('/_multipages/football.png')";
        break;
      case "volleyball":
        ball.style.backgroundImage = "url('/_multipages/volleyball.jpg')";
        break;
      case "human":
        ball.style.backgroundImage = "url('/_multipages/human.png')";
        break;
      case "cartoon":
        ball.style.backgroundImage = "url('/_multipages/cartoon.png')";
        break;
      case "logo":
        ball.style.backgroundImage = "url('/_multipages/logo(2).png')";
        break;
      case "none":
        ball.style.backgroundImage = "none";
        break;
      default:
        ball.style.backgroundImage = "none";
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case " ":
          runClick();
          event.preventDefault();
          break;
        case "0":
          changeImage("none");
          break;
        case "1":
          changeImage("basketball");
          break;
        case "2":
          changeImage("football");
          break;
        case "3":
          changeImage("volleyball");
          break;
        case "4":
          changeImage("human");
          break;
        case "5":
          changeImage("cartoon");
          break;
        case "6":
          changeImage("logo");
          break;
        default:
          console.log("กดคีย์ไม่ถูก");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [running]);

  // Initial setup
  useEffect(() => {
    const field = document.getElementById("field");
    const ball = document.getElementById("ball");

    field.style.width = fieldWidth + "px";
    field.style.height = fieldHeight + "px";

    ball.style.height = diameter + "px";
    ball.style.width = diameter + "px";
    ball.style.transition = "transform 0.4s";
  }, []);

  return (
    <div
      id="container"
      style={{
        margin: "10px auto",
        border: "1px solid black",
        width: "fit-content",
        borderRadius: "10px",
      }}
    >
      <div
        id="field"
        style={{
          border: "1px solid red",
          margin: "10px",
          backgroundImage: "url(/_multipages/floor.avif)",
          backgroundPosition: "center",
        }}
      >
        <div
          id="ball"
          style={{
            border: "1px solid green",
            backgroundColor: "rgb(159, 195, 227)",
            borderRadius: "50%",
            position: "relative",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `rotate(${position.rotationAngle}deg)`,
          }}
        />
      </div>

      <div id="control" style={{ margin: "10px" }}>
  <button
    onClick={runClick}
    id="run"
    style={{ marginRight: "10px" }}
    className={running ? "btn btn-warning" : "btn btn-success"}
  >
    <i className={`bi ${running ? "bi-pause" : "bi-play"}`}></i>
    {running ? " PAUSE" : " RUN"}
  </button>

  <button 
    className="btn btn-outline-dark" 
    onClick={() => changeImage("none")}
    style={{ marginRight: "10px" }}
  >
    None
  </button>

  <button 
    className="btn btn-outline-primary" 
    onClick={() => changeImage("basketball")}
    style={{ marginRight: "10px" }}
  >
    Basketball
  </button>

  <button 
    className="btn btn-outline-primary" 
    onClick={() => changeImage("football")}
    style={{ marginRight: "10px" }}
  >
    Football
  </button>

  <button 
    className="btn btn-outline-primary" 
    onClick={() => changeImage("volleyball")}
    style={{ marginRight: "10px" }}
  >
    Volleyball
  </button>

  <button 
    className="btn btn-outline-primary" 
    onClick={() => changeImage("human")}
    style={{ marginRight: "10px" }}
  >
    Human
  </button>

  <button 
    className="btn btn-outline-primary" 
    onClick={() => changeImage("cartoon")}
    style={{ marginRight: "10px" }}
  >
    Cartoon
  </button>

  <button 
    className="btn btn-outline-primary" 
    onClick={() => changeImage("logo")}
    style={{ marginRight: "10px" }}
  >
    Logo
  </button>
</div>
    </div>
  );
};

export default Animation;
