import logo from './logo.svg';
import './App.css';
import HeaderTop from './COMPONENTS/Header';
import WelcomeHero from './COMPONENTS/Herostrat';
import ListTopics from './COMPONENTS/Listtopics';
import Works from './COMPONENTS/Workstrat';
import ExploreSection from './COMPONENTS/Explorestrat';
import Reviews from './COMPONENTS/Reviewstrat';
import Statistics from './COMPONENTS/Statisticsstart';
import Blog from './COMPONENTS/Blogstrat';
import Subscription from './COMPONENTS/Subscriptionstrat';
import Footer from './COMPONENTS/Footer';
import TopArea from './COMPONENTS/Toparea';
import { Route, Routes } from 'react-router-dom';
import Contact from './COMPONENTS/Contact';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HeaderTop/>}/>
      <Route path='/works' element={<Works/>}/>
      <Route path='/explore' element={<ExploreSection/>}/>
      <Route path='/review' element={<Reviews/>}/><Route path='/' element={<HeaderTop/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

      <HeaderTop/>
      <TopArea/>
      
      <WelcomeHero/>
      <ListTopics/>
      <Works/>
      <ExploreSection/>
      <Reviews/>
      <Statistics/>
      <Blog/>
      <Subscription/>
      <Footer/>
      
    </div>
  );
}

export default App;
