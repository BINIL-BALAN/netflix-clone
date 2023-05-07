import './App.css';
import Rows from './components/Rows';
import Banner from './components/Banner';
import { requests } from './requests';
function App() {
  return (
    <div className='app'>
      <Banner/>
     <Rows isPoster={true} title='Netflix originals' fetchUrl={requests.fetchNetflixOriginals}/>
     <Rows title='Trending' fetchUrl={requests.fetchTrending}/>
     <Rows title='Top rated' fetchUrl={requests.fetchTopRated}/>
     <Rows title='Action' fetchUrl={requests.fetchActionMovies}/>
     <Rows title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
     <Rows title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
     <Rows title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
     <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
