import {Routes , Route , Link} from 'react-router-dom'
import Home from "./Routes/Home";

import Name from './Routes/Name';

const App = ()=><div>
  From the App ... building state, routes & components...
  <Link to='/'>Home</Link>
  <Link to='/name'>Name</Link>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/name' element={<Name />} />
  </Routes>
  
</div>

export default App;
