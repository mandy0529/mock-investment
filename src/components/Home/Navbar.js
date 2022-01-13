import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarWrapper} from '../../styles/navbar';
import {navbarList} from '../../utils/helper';

function Navbar() {
  return (
    <NavbarWrapper>
      {navbarList.map((item) => {
        const {id, title, path} = item;
        return (
          <Link key={id} to={path}>
            {title}
          </Link>
        );
      })}
    </NavbarWrapper>
  );
}

export default Navbar;
