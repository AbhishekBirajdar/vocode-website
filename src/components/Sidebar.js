import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/telephony">Telephony</Link></li>
        <li><Link to="/create-agent">Create Your Own Page</Link></li>
        <li><Link to="/connecting-agent">Connecting Your Agent</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
