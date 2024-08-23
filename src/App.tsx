import './App.css';
import EducationExperience from './components/Education&Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Photo from './components/Photo';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Photo />
        <Profile />
        <Technologies />
        <EducationExperience />
        <Projects />
        <Footer/>
      </div>
    </>
  );
}

export default App;
