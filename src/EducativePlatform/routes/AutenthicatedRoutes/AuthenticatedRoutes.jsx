import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar, SideBar } from "../../components";
import { existLogedUser } from "../../helpers";

import { ClassContent, ClassPage, CodeEditorPage, CreateContentPage, JoinClassPage, MaterialPage, PracticePage, RegisterClassPage } from "../../pages";
import { Aporte } from "../../pages/Aportes/Aporte";
import { AportesRecientes } from "../../pages/AportesRecientes/AportesRecientes";
import { ContribuirPage } from "../../pages/Contribuir/ContribuirPage";
import { MisAportes } from "../../pages/MisAportes/MisAportes";
import { SubirAporte } from "../../pages/SubirAporte/SubirAporte";

export const AuthenticatedRoutes = () => {

  return (
      <div className="row w-100">
        <div className="col-12 w-100">
          <NavBar color="light" userName={"asdsa"} logged={"true"}/>
        </div>
        <div className="col-2">
          <SideBar />
        </div>
        <div className="main-content col-10">
          <Routes>
          <Route path="" element={<ClassPage/>} />
            <Route path="/crear-clase" element={existLogedUser()?<RegisterClassPage/>:<Navigate to="/"/>}/>
            <Route path="/unirse-clase" element={existLogedUser()? <JoinClassPage/> :<Navigate to="/"/>}/>
            <Route path="/:id" element={ existLogedUser()?<ClassContent/>:<Navigate to="/"/>}/>
            <Route path="/:id/crear-capitulo" element={existLogedUser()?<CreateContentPage/>:<Navigate to="/"/>}/>
            <Route path="/:id/material/:id_capitulo" element={existLogedUser()?<MaterialPage/>:<Navigate to="/"/>}/>
            <Route path="/:id/practica/:id_practica" element={existLogedUser()?<PracticePage/>:<Navigate to="/"/>}/>
            <Route path="/:id/practica/:id_practica/compilador/:id_ejemplo" element={existLogedUser()?<CodeEditorPage/>:<Navigate to="/"/>}/>
            <Route path="/contribuir" element={<ContribuirPage/>}/>
            <Route path="/contribuir/MisAportes" element={existLogedUser()?<MisAportes/>:<Navigate to="/"/>}/>
            <Route path="/contribuir/AportesRecientes" element={existLogedUser()?<AportesRecientes/>:<Navigate to="/"/>}/>
            <Route path="/contribuir/SubirAporte" element={existLogedUser()?<SubirAporte/>:<Navigate to="/"/>}/>
            <Route path="/contribuir/MisAportes/:id" element={existLogedUser()?<Aporte/>:<Navigate to="/"/>}/>
          </Routes>
        </div>
      </div>
  );
};
