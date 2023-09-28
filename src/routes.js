import { BrowserRouter, Route, Routes } from "react-router-dom";
import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/menu";
import Rodape from "./componentes/rodape";
import PaginaPadrao from "./componentes/paginapadrao";
import Post from "./paginas/post";
import NaoEncontrada from "./paginas/naoencontrada";
import ScrollToTop from "./componentes/scrolltotop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
    
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
  
}

export default AppRoutes;
