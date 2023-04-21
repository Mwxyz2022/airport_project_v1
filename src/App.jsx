import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Main from './components/main/Main'

import store from './store'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  </Provider>
)
export default App
