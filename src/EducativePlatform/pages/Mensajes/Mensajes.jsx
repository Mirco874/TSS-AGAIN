import { useNavigate, useParams } from "react-router-dom";
import { useFetch, useForm } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./Mensajes.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import { useEffect } from "react";
import { useState } from "react";
import { del, get, post } from "../../helpers";
export const Mensajes = () => {
  const [aportes, setAportes] = useState([]);
  const { id_destino } = useParams();
  const navigate = useNavigate();
  const formularioSubir = { contenido: "" };
  const { form, onFormUpdate } = useForm(formularioSubir);
  const id_usuario = localStorage.getItem("id_usuario");
  console.log(id_destino);
  const getMensajes = async () => {
    const data = await get(`http://142.93.203.113:3001/api/myMessages`
    , {idUsuarioOrigen:id_usuario, idUsuarioDestino:id_destino});
    console.log(id_usuario)
    console.log(id_destino)
    console.log(data);
    setAportes(data);
    
  };
  useEffect(() => {
    getMensajes();
  }, []);

  const subirComentario = async (e) => {
    e.preventDefault();
    
    console.log(id_usuario);
    await post(`http://142.93.203.113:3001/api/myMessages`,  {
      ...form,
      idUsuarioOrigen:id_usuario, 
      idUsuarioDestino:id_destino
    });
    
  };
  
  return (
    <div className={styles.Titulo}>
      <p>Crear un nuevo aporte</p>
      <div className={styles.Class}></div>
    </div>
  );
};
