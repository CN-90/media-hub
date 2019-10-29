import React from 'react';
import { Navbar, Brand, TextContainer } from './Sidebar.styles';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Navbar>
      <Brand>
        <span className="yellow">MOVIE</span> HUB
      </Brand>
      <TextContainer>
        <p className="yellow">Movies</p>
        <ul>
          <NavLink activeClassName="active" to={'/movies/now_playing/1'}>
            <li>Now Playing</li>
          </NavLink>
          <NavLink activeClassName="active" to={'/movies/popular/1'}>
            <li>Popular</li>
          </NavLink>
          <NavLink activeClassName="active" to={'/movies/upcoming/1'}>
            <li>Upcoming</li>
          </NavLink>
          <NavLink activeClassName="active" to={'/movies/top_rated/1'}>
            <li>Top Rated</li>
          </NavLink>
          <NavLink activeClassName="active" to={'/movies/search/'}>
            <li>Search</li>
          </NavLink>
        </ul>
      </TextContainer>
    </Navbar>
  );
};

export default Sidebar;
