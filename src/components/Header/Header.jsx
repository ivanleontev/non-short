import React from 'react';

import './header.scss';

function Header() {
  return (
    <div className="header d-flex justify-between">
      <div className="headerLeft">
        <p className="d-flex">
          Noo <p className="logoCenter">ooo</p> oon
          <p className="logoShort">short</p>
        </p>
      </div>
      <div className="HeaderRight"></div>
    </div>
  );
}

export default Header;
