import '../styles/App/App.css';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import SidebarMenu from './sidebars/SidebarMenu/SidebarMenu';
import SidebarSearch from './sidebars/SidebarSearch/SidebarSearch';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <div className="main">
          <SidebarMenu />
          <Content />
          <SidebarSearch />
        </div>
        <div className="footer">
          <Footer />
        </div>
    </div>
  );
}

export default App;
