import { useFetch } from "../../../hooks/"
import { ClassCard, CreateClassBtn, JoinClassBtn } from "../../components"

export const ClassPage = () => {
  const user_id=localStorage.getItem("id_usuario");
  const user_rol=localStorage.getItem("id_rol");
  const { content}=useFetch(`http://142.93.203.113:3001/api/users/${user_id}/class`,"GET")
  const {data,isLoading}=content;
  return (
    <div className="mt-3 d-flex justify-content-around flex-wrap">
      {isLoading? <>Cargando clases...</>: 
      <>{data.map((clase)=> <ClassCard key={clase.id_clase} title={clase.nombre_clase} id={clase.id_clase} idVisible={"true"}  />)} </> }
      {user_rol==="3"?<CreateClassBtn/> : <JoinClassBtn/>}
    </div>
  )
}
