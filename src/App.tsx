import React, { useState } from 'react';
import Button from './components/Button';
import './App.css';

const App = () => {
  const [showSurrounding, setShowSurrounding] = useState(false);
  const [nestedButtons, setNestedButtons] = useState(Array(5).fill(false));
  const [animationDirection, setAnimationDirection] = useState('animate-out'); // New state for animation direction

  const toggleSurroundingButtons = () => {
    if (showSurrounding) {
      setAnimationDirection('animate-in');
      setTimeout(() => {
        setShowSurrounding(false);
      }, 600); 
    } else {
      setShowSurrounding(true);
      setAnimationDirection('animate-out');
    }

    if (!showSurrounding) {
      // If the bubbles are showing, hide them
      setTimeout(() => {
        setNestedButtons(Array(5).fill(false)); // Reset all nested buttons to false
      }, 600); //  delay adjustd to match your animation duration
    }
  };

  const toggleNestedButtons = (index:number) => {
    setNestedButtons(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="app">
      <Button className="large" onClick={toggleSurroundingButtons}>Main</Button>
      {showSurrounding && (
        <div className="surrounding-buttons">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className={`position-${index} ${animationDirection}`}>
              <Button
                className="small"
                onClick={() => toggleNestedButtons(index)}
              >
                {index + 1}
              </Button>
              {nestedButtons[index] && (
                <div className="nested-buttons">
                  <Button className="extra-small">A</Button>
                  <Button className="extra-small">B</Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
