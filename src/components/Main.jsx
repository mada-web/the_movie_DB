import React from 'react'
import tmdb from '../img/tmdb.svg'
import { useState, useEffect } from 'react'
import { Input } from './Input'

export const MainPage = (props) => {
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
    <div className="main-page-content">
      <img className="main-page-image" src={tmdb} alt="tmdb icon" />
      <Input
        setValue={setSearchInput}
        size={'massive'}
        placeholder={'Search TMDB'}
        icon="search"
      />
    </div>
  )
}
