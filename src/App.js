import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home';
import Posts from './components/posts';
import Albums from './components/albums';
import ToDos from './components/todos';
import Photos from './components/albums/Photos';
import Comments from './components/posts/Comments';

import Container from '@material-ui/core/Container';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/:id/comments" component={Comments} />
          <Route exact path="/albums" component={Albums}/>
          <Route exact path="/albums/:id" component={Photos}/>
          <Route exact path="/todos" component={ToDos} />
        </Switch>
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
