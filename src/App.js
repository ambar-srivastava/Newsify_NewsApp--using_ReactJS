import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={2}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general" /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" category="entertainment" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business" /></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" country="in" category="health" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" country="in" category="science" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" category="sports" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App;
