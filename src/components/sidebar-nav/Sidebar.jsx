import React from 'react';
import { Navbar, Brand, TextContainer } from './Sidebar.styles';
import { Link, NavLink } from 'react-router-dom';

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
            activeClassName="active"
            to={{
              pathname: '/movies/NowPlaying',
              state: { title: 'Now Playing', apiCall: 'now_playing' }
            }}
          >
            <li>Now Playing</li>
          </NavLink>
          <NavLink
            activeClassName="active"
            to={{
              pathname: '/movies/Popular',
              state: { title: 'Popular Movies', apiCall: 'popular' }
            }}
          >
            <li>Popular</li>
          </NavLink>
          <NavLink
            activeClassName="active"
            to={{
              pathname: '/movies/Upcoming',
              state: { title: 'Upcoming Movies', apiCall: 'upcoming' }
            }}
          >
            <li>Upcoming</li>
          </NavLink>
          <NavLink
            activeClassName="active"
            to={{
              pathname: '/movies/TopRated',
              state: { title: 'Top Rated' }
            }}
          >
            <li>Top Rated</li>
          </NavLink>
        </ul>
        <p>Television</p>
        <ul>
          <li>On air</li>
          <li>Popular</li>
          <li>Upcoming</li>
          <li>Top Rated</li>
        </ul>
      </TextContainer>
    </Navbar>
  );
};

export default Sidebar;
