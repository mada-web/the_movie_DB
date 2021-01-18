import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
// import Item from './components/FilmItem'
import { List } from './utils/List'
import { BrowserRouter, Route } from 'react-router-dom'

// import { Stories } from './views/StoriesList'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route path="/films" component={List} />
        {/* <Route path="/ask" render={() => <Stories find={'askstories'} />} /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
