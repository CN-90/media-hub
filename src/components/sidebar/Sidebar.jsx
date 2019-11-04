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
          <NavLink
            isActive={(match, location) => {
              if (location.pathname.includes('popular')) return true;
            }}
            activeClassName="active"
            to={'/movies/popular/1'}
          >
            <li>Popular</li>
          </NavLink>
          <NavLink
            isActive={(match, location) => {
              if (location.pathname.includes('now_playing')) return true;
            }}
            activeClassName="active"
            to={'/movies/now_playing/1'}
          >
            <li>Now Playing</li>
          </NavLink>
          <NavLink
            isActive={(match, location) => {
              if (location.pathname.includes('upcoming')) return true;
            }}
            activeClassName="active"
            to={'/movies/upcoming/1'}
          >
            <li>Upcoming</li>
          </NavLink>
          <NavLink
            isActive={(match, location) => {
              if (location.pathname.includes('top_rated')) return true;
            }}
            activeClassName="active"
            to={'/movies/top_rated/1'}
          >
            <li>Top Rated</li>
          </NavLink>
          <NavLink
            isActive={(match, location) => {
              if (location.pathname.includes('search')) return true;
            }}
            activeClassName="active"
            to={'/movies/search/'}
          >
            <li>Search</li>
          </NavLink>
        </ul>
      </TextContainer>
    </Navbar>
  );
};

export default Sidebar;
