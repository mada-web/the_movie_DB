import './styles/App.css'
import 'semantic-ui-css/semantic.min.css'
import Header from './components/Header'
import { Page } from './pages/Page'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route path="/films" render={() => <Page find={'popular'} />} />
      </BrowserRouter>
    </div>
  )
}

export default App
