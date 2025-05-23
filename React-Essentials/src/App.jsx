import Examples from './components/Examples.jsx';
import CoreConcepts from './components/Header/CoreConcepts.jsx';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
