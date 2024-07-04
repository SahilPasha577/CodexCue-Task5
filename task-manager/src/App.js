import './App.css';
import { Home } from './MyComp/Home';
import { CategoryPage } from './MyComp/CategoryPage';
import { TaskProvider } from './MyComp/TaskContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <TaskProvider>
          <div className='container'>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/category/:category" element={<CategoryPage />} />

            </Routes>

          </div>
        </TaskProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
