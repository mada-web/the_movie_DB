import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import { MoviesPage } from './pages/MoviesTvsPage'
import { MainPage } from './components/Main'
import { MovieSinglePage } from './pages/SingleMoviePage'
import { PeoplesPage } from './pages/PeoplesPage'
import { SearchPage } from './pages/SearchPage'
import { TvSinglePage } from './pages/TvSinglePage'
import { PersonPage } from './pages/PersonPage'

import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route exact path="/" component={MainPage} />
        <Route
          exact
          path="/movie/popular/:page"
          render={(props) => (
            <MoviesPage {...props} type={'movie'} find={'popular'} />
          )}
        />
        <Route
          exact
          path="/movie/now_playing/:page"
          render={(props) => (
            <MoviesPage {...props} type={'movie'} find={'now_playing'} />
          )}
        />
        <Route
          exact
          path="/movie/top_rated/:page"
          render={(props) => (
            <MoviesPage {...props} type={'movie'} find={'top_rated'} />
          )}
        />
        <Route
          exact
          path="/movie/upcoming/:page"
          render={(props) => (
            <MoviesPage {...props} type={'movie'} find={'upcoming'} />
          )}
        />
        <Route
          exact
          path="/tv/popular/:page"
          render={(props) => (
            <MoviesPage {...props} type={'tv'} find={'popular'} />
          )}
        />
        <Route
          exact
          path="/tv/airing_today/:page"
          render={(props) => (
            <MoviesPage {...props} type={'tv'} find={'airing_today'} />
          )}
        />
        <Route
          exact
          path="/tv/on_the_air/:page"
          render={(props) => (
            <MoviesPage {...props} type={'tv'} find={'on_the_air'} />
          )}
        />
        <Route
          exact
          path="/tv/top_rated/:page"
          render={(props) => (
            <MoviesPage {...props} type={'tv'} find={'top_rated'} />
          )}
        />
        <Route
          exact
          path="/person/popular/:page"
          render={(props) => (
            <PeoplesPage {...props} type={'person'} find={'popular'} />
          )}
        />
        <Route
          exact
          path="/search/:input/:page"
          render={(props) => (
            <SearchPage {...props} type={'search'} find={'multi'} />
          )}
        />
        <Route
          exact
          path="/movie/:id"
          render={(props) => <MovieSinglePage {...props} type={'movie'} />}
        />
        <Route
          exact
          path="/tv/:id"
          render={(props) => <TvSinglePage {...props} type={'tv'} />}
        />
        <Route
          exact
          path="/person/:id"
          render={(props) => <PersonPage {...props} type={'person'} />}
        />
      </BrowserRouter>
    </div>
  )
}
export default App
