import React from 'react'
import tmdb from '../img/tmdb.svg'
import Input from './Input'
import { Link } from 'react-router-dom'
import {
  Header as SemanticHeader,
  Segment,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const Header = () => {
  return (
    <Segment>
      <SemanticHeader as="h3">
        <Link to="/">
          <img src={tmdb} alt="React Logo" />
        </Link>
        <Menu vertical>
          <Dropdown item text="Movies">
            <Dropdown.Menu>
              <Link to="/movie/popular">
                <Dropdown.Item active>Popular</Dropdown.Item>
              </Link>
              <Link to="/movie/now_playing">
                {' '}
                <Dropdown.Item active>Now Playing</Dropdown.Item>
              </Link>
              <Link to="/movie/top_rated">
                {' '}
                <Dropdown.Item active>Top Rated</Dropdown.Item>
              </Link>
              <Link to="/movie/upcoming">
                {' '}
                <Dropdown.Item active>Upcoming</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Menu vertical>
          <Dropdown item text="TV Shows">
            <Dropdown.Menu>
              <Link to="/tv/popular">
                <Dropdown.Item active>Popular</Dropdown.Item>
              </Link>
              <Link to="/tv/airing_today">
                {' '}
                <Dropdown.Item active>Airing Today</Dropdown.Item>
              </Link>
              <Link to="/tv/on_the_air">
                {' '}
                <Dropdown.Item active>On TV</Dropdown.Item>
              </Link>
              <Link to="/tv/top_rated">
                {' '}
                <Dropdown.Item active>Top Rated</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Menu vertical>
          <Dropdown item text="People">
            <Dropdown.Menu>
              <Link to="/person/popular">
                <Dropdown.Item active>Popular</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>

        <Input />
      </SemanticHeader>
    </Segment>
  )
}

export default Header
