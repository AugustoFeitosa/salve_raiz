/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/tema/listaTemas/ListaTemas';
import FormularioTema from './components/tema/formularioTema/FormularioTema';
import DeletarTema from './components/tema/deletarTema/DeletarTema';
import ListaPostagens from './components/postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import Perfil from './pages/perfil/Perfil';




function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          
            <div className='min-h-[60vh]'>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/temas" element={<ListaTemas />} />
                <Route path="/cadastroTema" element={<FormularioTema />} />
                <Route path="/editarTema/:id" element={<FormularioTema />} />
                <Route path="/deletarTema/:id" element={<DeletarTema />} />
                <Route path="/postagens" element={<ListaPostagens />} />
                <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
                <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
                <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
                <Route path="/perfil" element={<Perfil />} />
              </Routes>
            </div>
          
          <Footer />

        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;