import './App.css'
import { Provider } from 'react-redux'
import store from './store'
import RoutesHOC from './routes'

function App() {
  return(
    <Provider store={store}>
      <RoutesHOC></RoutesHOC>
    </Provider>
  )
}

export default App
