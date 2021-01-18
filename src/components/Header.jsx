import React from 'react'
import { Link } from 'react-router-dom'
import { Header as SemanticHeader, Segment } from 'semantic-ui-react'

const Header = () => (
  <Segment>
    <SemanticHeader as="h3" textAlign="justified">
      <Link to="/films">ФИЛЬМЫ</Link>
      <Link to="/top">СЕРИАЛЫ</Link>
      <Link to="/top">ЛЮДИ</Link>
      <Link to="/top">ЕЩЕ</Link>
      <Link to="/top">ВОЙТИ</Link>
      <Link to="/top">ПОИСК</Link>
    </SemanticHeader>
  </Segment>
)

export default Header
