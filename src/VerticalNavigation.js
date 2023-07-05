import React from 'react';
import { Link } from 'react-router-dom';

const VerticalNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default VerticalNavigation;
