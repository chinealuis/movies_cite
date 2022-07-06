import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
//import { useNavigate } from "react-router";
//import { useQuery } from "../hooks/useQuery";
import {useSearchParams} from "react-router-dom"

export function Search() {
  //const navigate = useNavigate();                           // hook de react-router
  //const query = useQuery();
  const [query, setQuery] = useSearchParams();             //mejor q el navigare, se setea lo q se pasa por parametros porl la url
  const search = query.get("search");                      //se guarda el valor del paramatro de busqueda de la url

/*    const handleSubmit = (e) => {
    e.preventDefault();                                    //previene haga una consulta al servidor cuando se pincha en el submit
    navigate("/?search=" + search);                        //va a poner en el navegador lo q se meta por el input
                                                          // con ese formato "/search?=" + "lo q se ponga en el input"
  }; */
  return (
    <form className={styles.searchContainer} >
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={search}                                    // se va a mostrar el valor d la busqueda
          placeholder="Title"
          aria-label="Search Movie"
          onChange={(e) => {
            const value = e.target.value;
            //navigate("/?search=" + value);                  // va a buscar cada vez q cambie lo q se esta introduciendo por el input
            setQuery({search:value})                          //hace lo mismo q navigate pero esta mejor
          }}
        />
       
          <FaSearch size={20} className={styles.searchButton} color="black" />                          {/* barra de busqueda */}
        
      </div>
    </form>
  );
}
