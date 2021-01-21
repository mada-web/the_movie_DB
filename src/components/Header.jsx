import React from 'react'
import tmdb from '../img/tmdb.svg'
import { Input } from './Input'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
  Header as SemanticHeader,
  Segment,
  Dropdown,
  Menu,
} from 'semantic-ui-react'

const Header = (props) => {
  const { history } = props
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    const listener = (event) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        history.push(`/search/${searchInput}/1`)
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  })

  return (
    <Segment>
      <SemanticHeader as="h3">
        <Link to="/">
          <img src={tmdb} alt="React Logo" />
        </Link>
        <Menu vertical>
          <Dropdown item text="Movies">
            <Dropdown.Menu>
              <Link to="/movie/popular/1">
                <Dropdown.Item active>Popular</Dropdown.Item>
              </Link>
              <Link to="/movie/now_playing/1">
                {' '}
                <Dropdown.Item active>Now Playing</Dropdown.Item>
              </Link>
              <Link to="/movie/top_rated/1">
                {' '}
                <Dropdown.Item active>Top Rated</Dropdown.Item>
              </Link>
              <Link to="/movie/upcoming/1">
                {' '}
                <Dropdown.Item active>Upcoming</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Menu vertical>
          <Dropdown item text="TV Shows">
            <Dropdown.Menu>
              <Link to="/tv/popular/1">
                <Dropdown.Item active>Popular</Dropdown.Item>
              </Link>
              <Link to="/tv/airing_today/1">
                {' '}
                <Dropdown.Item active>Airing Today</Dropdown.Item>
              </Link>
              <Link to="/tv/on_the_air/1">
                {' '}
                <Dropdown.Item active>On TV</Dropdown.Item>
              </Link>
              <Link to="/tv/top_rated/1">
                {' '}
                <Dropdown.Item active>Top Rated</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
        <Menu vertical>
          <Dropdown item text="People">
            <Dropdown.Menu>
              <Link to="/person/popular/1">
                <Dropdown.Item active>Popular</Dropdown.Item>
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>

        <Input setValue={setSearchInput} />
      </SemanticHeader>
    </Segment>
  )
}

export default Header
