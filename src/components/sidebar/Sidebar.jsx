import React from 'react';
import { SidebarNav, Brand, TextContainer } from './Sidebar.styles';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <SidebarNav>
      <Brand>
        <span className="yellow">MOVIE</span> HUB
      </Brand>

      <TextContainer>
        <ul>
          <NavLink
            isActive={(match, location) => {
              console.log(match);
              if (location.pathname.includes('signin')) return true;
            }}
            activeClassName="active"
            to={'/signin'}
          >
            <li
              style={{
                margin: '35px 0 0 0'
              }}
            >
              Log In
            </li>
          </NavLink>
          <NavLink
            isActive={(match, location) => {
              if (location.pathname.includes('signup')) return true;
            }}
            activeClassName="active"
            to={'/signup'}
          >
            <li
              style={{
                margin: '8px 0 0 0'
              }}
            >
              Sign Up
            </li>
          </NavLink>

          <p className="yellow">Movies</p>
          <NavLink
            isActive={(match, location) => {
              console.log(match);
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
    </SidebarNav>
  );
};

export default Sidebar;
