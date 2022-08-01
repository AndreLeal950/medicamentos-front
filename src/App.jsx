
import './styles/App.sass';
import { Routes, Route, Link } from 'react-router-dom';

import Listamedicamentos from './routes/Listamedicamentos';
import Listafarmacias from './routes/Listafarmacias';
import Home from './routes/Home';
import Sobre from './routes/Sobre';




function App() {
  return (
    <>
      <header className='nav'>
        <spam>Consulta de Medicamento</spam>
        <Link to= '/' className='link'>Home</Link>
        <Link to= '/listaM' className='link'>Medicamentos</Link>
        <Link to= '/listaF' className='link'>Farmácias</Link>
        <Link to= '/sobre' className='link'>Sobre</Link>
      </header>
      <main>
       <Routes>
          < Route path="/" element={<Home />} />
          < Route path="/listaM" element={<Listamedicamentos />} />
          < Route path="/listaF" element={<Listafarmacias />} />
          < Route path="/sobre" element={<Sobre />} />

        </Routes>
      </main>
       {/* <Main /> */}
      </>
  );
}

export default App;
