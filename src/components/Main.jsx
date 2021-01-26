import React from 'react'
import google from '../img/google.jpg'
import { useState, useEffect } from 'react'
import { Input } from './Input'
import { Image } from 'semantic-ui-react'

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
      <p>Google</p>
      {/* <img src={google} alt="google is here" /> */}
      <Input
        setValue={setSearchInput}
        size={'massive'}
        placeholder={'Search Google'}
        icon="search"
      />
    </div>
  )
}
;<Image className="main-page-image" src={google} fluid />
