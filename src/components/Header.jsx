import React from 'react'
import tmdb from './tmdb.svg'
import { Link } from 'react-router-dom'
import {
  Header as SemanticHeader,
  Segment,
  // Image,
  // Icon,
} from 'semantic-ui-react'

const Header = () => {
  return (
    <Segment>
      <SemanticHeader as="h3">
        <Link to="/">
          <img src={tmdb} alt="React Logo" />
        </Link>
        <Link to="/films">ФИЛЬМЫ</Link>
        <Link to="/top">СЕРИАЛЫ</Link>
        <Link to="/top">ЛЮДИ</Link>
        <Link to="/top">ЕЩЕ</Link>
        <Link to="/top">ВОЙТИ</Link>
        <Link to="/top">ПОИСК</Link>
      </SemanticHeader>
    </Segment>
  )
}

export default Header
