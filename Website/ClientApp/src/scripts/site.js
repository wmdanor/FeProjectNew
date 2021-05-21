import 'normalize.css';
import '../styles/style.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';

import { NavbarLink, Navbar, NavbarDropdown } from './components/Navbar';
import {
  DropdownToggle,
  DropdownList,
  DropdownItem,
} from './components/Dropdown';
// import { GridList } from './components/GridList';

const Router = ReactRouterDOM.BrowserRouter;
const { Route } = ReactRouterDOM;
const { Switch } = ReactRouterDOM;

function About() {
  return <h2>О сайте</h2>;
}

function NotFound() {
  return <h2>Ресурс не найден</h2>;
}

// const products = [
//   {
//     id: 1,
//     name: 'Game',
//     price: 10,
//   },
//   {
//     id: 2,
//     name: 'Cock',
//     price: 5,
//   },
//   {
//     id: 3,
//     name: 'Anus',
//     price: 30,
//   },
//   {
//     id: 4,
//     name: 'Phone',
//     price: 50,
//   },
// ];

function Main() {
  // return <GridList data={products} />;
  return <div>Main</div>;
}

function AppNavbar() {
  return (
    <Navbar>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/about">About</NavbarLink>
      <NavbarDropdown>
        <DropdownToggle>Dropdown</DropdownToggle>
        <DropdownList>
          <DropdownItem>One</DropdownItem>
          <DropdownItem>Two</DropdownItem>
        </DropdownList>
      </NavbarDropdown>
    </Navbar>
  );
}

function Header() {
  return (
    <>
      <header>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/AE7QT5anSHY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </header>
      <AppNavbar />
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
