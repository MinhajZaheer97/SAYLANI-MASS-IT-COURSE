import {useState}from 'react';

const App = () => {
   const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'fixed',
        inset: 0,
        height: '100dvh',
        overflow: 'hidden',
      }}>
      <div style={{
        position: 'absolute',
        pointerEvents: 'none',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  );
}

export default App