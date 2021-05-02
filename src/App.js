import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import SingleTrip from './components/SingleTrip'
import Trips from './components/Trips'
import Blog from './components/Blog'
import SingleBlogPost from './components/SingleBlogPost'
import NavBar from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Contact} path="/contact" />
        <Route component={SingleTrip} path="/trips/:slug" />
        <Route component={Trips} path="/trips" />
        <Route component={SingleBlogPost} path="/blog/:slug" />
        <Route component={Blog} path="/blog" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
