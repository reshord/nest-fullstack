import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './styles/App/index.css'
import reportWebVitals from './tests/reportWebVitals';
import {Provider} from 'react-redux'
import store from './rtk/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Favorites from './Components/Favorites/Favorites';
import Auth from './Components/Auth/Auth';
import WatchMovie from './Components/WatchMovie/WatchMovie';
import Twitch from './Components/Twitch/Twitch';
import NavbarFooter from './Components/NavbarFooter/NavbarFooter';
import MenuFilms from './Components/Menu/MenuFilms';
import "simplebar/src/simplebar.css";
import PopularNow from './Components/sidebars/SidebarMenu/CategoriesPages/PopularNow';
import Error404 from './Components/Error404';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
            <Routes>
              <Route path='/' element={<App />}/>
              <Route path='/favorites' element={<Favorites />}/>
              <Route path='/auth' element={<Auth />}/>
              <Route path='/watch/:film' element={<WatchMovie />}/>
              <Route path='/twitch' element={<Twitch />}/>
              <Route path='/menu' element={<MenuFilms />}/>
              <Route path='/popular-now' element={<PopularNow />}/>
              <Route path='*' element={<Error404 />}/>
            </Routes>
          </Provider>
          <div className="navbarFooterBlock">
            <NavbarFooter />

          </div>
      </BrowserRouter>
  </React.StrictMode>

);



reportWebVitals();
