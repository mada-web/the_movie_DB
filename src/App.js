import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import { Page } from './pages/MoviePage'
import { PeoplePage } from './pages/PeopleCard'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route
          path="/movie/popular"
          render={() => <Page find={'popular'} type="movie" />}
        />
        <Route
          path="/movie/now_playing"
          render={() => <Page find={'now_playing'} type="movie" />}
        />
        <Route
          path="/movie/top_rated"
          render={() => <Page find={'top_rated'} type="movie" />}
        />
        <Route
          path="/movie/upcoming"
          render={() => <Page find={'upcoming'} type="movie" />}
        />
        <Route
          path="/tv/popular"
          render={() => <Page find={'popular'} type="tv" />}
        />
        <Route
          path="/tv/airing_today"
          render={() => <Page find={'airing_today'} type="tv" />}
        />
        <Route
          path="/tv/on_the_air"
          render={() => <Page find={'on_the_air'} type="tv" />}
        />
        <Route
          path="/tv/top_rated"
          render={() => <Page find={'top_rated'} type="tv" />}
        />
        <Route
          path="/person/popular"
          render={() => <PeoplePage find={'popular'} type="person" />}
        />
      </BrowserRouter>
    </div>
  )
}

export default App
