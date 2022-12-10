import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks";
import { PracticeCard } from "../../components";
import { Link } from "react-router-dom";
import styles from "./ContribuirPage.module.css";
import PerfilU from "../MisAportes/foto/PerfilUsuario.jpg";
import RevisarAporte from "../Contribuir/fotos/RevisarAporte.jpg";
import SubirAporte from "../Contribuir/fotos/SubirAporte.jpg";
export const ContribuirPage = () => {
  return (
    <div>
      <h1>Mis aportes</h1>
      <div className={styles.Inicio}>
        <div className={styles.Cuadro}>
          <img src={RevisarAporte} alt="" className={styles.fotoCuadro} />
          <Link to={`/clases/contribuir/MisAportes`}>
            <p>Revisar mis aportes</p>
          </Link>
        </div>

        <div className={styles.Cuadro}>
          <img src={SubirAporte} alt="" className={styles.fotoCuadro2} />
          <Link to={`/clases/contribuir/SubirAporte`}>
            <p>Subir aporte</p>
          </Link>
        </div>
      </div>

      <Link to={`/clases/contribuir/AportesRecientes`}>
        <div>
          <h1>Aportes recientes: </h1>
        </div>
      </Link>
      
        <div className={styles.Titulo}>
        <Link to={`/clases/contribuir/Aporte`}>
        <div className={styles.Class}>
          <img src={PerfilU} alt="" className={styles.foto} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam
            obcaecati voluptas veniam dicta sed quasi commodi omnis unde.
            Aliquam explicabo quas quibusdam perferendis sit impedit eum debitis
            pariatur iusto!
          </p>
        </div>
        </Link>
        <div className={styles.Class}>
          <img src={PerfilU} alt="" className={styles.foto} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe totam
            obcaecati voluptas veniam dicta sed quasi commodi omnis unde.
            Aliquam explicabo quas quibusdam perferendis sit impedit eum debitis
            pariatur iusto!
          </p>
        </div>
      </div>
    </div>
  );
};
