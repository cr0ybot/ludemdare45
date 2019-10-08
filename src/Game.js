
import React, { useState } from 'react';
//import Sketch from 'react-p5';

import './Game.scss';

function Game() {
	/*
  const [canvas, setCanvas] = useState(null);

  const setup = (p5, container) => {
    const { background, createCanvas, windowWidth, windowHeight } = p5;
    const c = createCanvas(windowWidth, windowHeight).parent(container);
    c.style('display', 'block');
    background(0);
    setCanvas(c);
  };

  const draw = (p5) => {
    const { background, resizeCanvas, windowWidth, windowHeight } = p5;
    resizeCanvas(windowWidth, windowHeight);
    background(0);
  };

  return (
    <Sketch setup={setup} draw={draw} />
  );
	*/

	return <div className="Game">Hello, nothing.</div>;
}

export default Game;
