import { useState } from 'react';
import PropTypes from 'prop-types';

const CardContainer = ({ children }) => {
  const [layout, setLayout] = useState('column');

  const handleLayoutChange = (e) => {
    setLayout(e.target.value);
  };

  return (
    <div>
      <select value={layout} onChange={handleLayoutChange}>
        <option value="column">Columnas</option>
        <option value="row">Filas</option>
      </select>

      <div
        style={{
          display: 'flex',
          flexDirection: layout,
          gap: '1rem', 
          padding: '1rem', 
          border: '1px solid #ddd', 
          borderRadius: '8px', 
        }}
      >
        {children}
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  children: PropTypes.node
};

export default CardContainer;
