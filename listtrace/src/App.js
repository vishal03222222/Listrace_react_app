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

function App() {
  return (
    <div className="App">
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
