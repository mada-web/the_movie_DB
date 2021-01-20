import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import { MoviePage } from './pages/MoviePage'
import { PeoplePage } from './pages/PeoplePage'
import { SearchPage } from './pages/SearchPage'

import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route
          path="/movie/popular/:page"
          render={(props) => (
            <MoviePage {...props} type={'movie'} find={'popular'} />
          )}
        />
        <Route
          path="/movie/now_playing/:page"
          render={(props) => (
            <MoviePage {...props} type={'movie'} find={'now_playing'} />
          )}
        />
        <Route
          path="/movie/top_rated/:page"
          render={(props) => (
            <MoviePage {...props} type={'movie'} find={'top_rated'} />
          )}
        />
        <Route
          path="/movie/upcoming/:page"
          render={(props) => (
            <MoviePage {...props} type={'movie'} find={'upcoming'} />
          )}
        />
        <Route
          path="/tv/popular/:page"
          render={(props) => (
            <MoviePage {...props} type={'tv'} find={'popular'} />
          )}
        />
        <Route
          path="/tv/airing_today/:page"
          render={(props) => (
            <MoviePage {...props} type={'tv'} find={'airing_today'} />
          )}
        />
        <Route
          path="/tv/on_the_air/:page"
          render={(props) => (
            <MoviePage {...props} type={'tv'} find={'on_the_air'} />
          )}
        />
        <Route
          path="/tv/top_rated/:page"
          render={(props) => (
            <MoviePage {...props} type={'tv'} find={'top_rated'} />
          )}
        />
        <Route
          path="/person/popular/:page"
          render={(props) => (
            <PeoplePage {...props} type={'person'} find={'popular'} />
          )}
        />
        <Route
          path="/search/:input"
          render={(props) => (
            <SearchPage {...props} type={'search'} find={'multi'} />
          )}
        />
      </BrowserRouter>
    </div>
  )
}
export default App
