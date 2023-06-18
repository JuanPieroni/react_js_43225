import { useState } from 'react';
import { Button, Progress } from 'semantic-ui-react';


const BarraProgreso = () => {
  const [percent, setPercent] = useState(10);

  const increment = () => {
    setPercent((prevPercent) => (prevPercent >= 100 ? 0 : prevPercent + 35));
  };

  return (
    <div>
      <Progress percent={percent} indicating />
      <Button onClick={increment}>Increment</Button>
    </div>
  );
};

export default BarraProgreso;