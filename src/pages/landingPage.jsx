import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebouce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");  
  const searchDebounce = useDebounce(search, 300);    //el paramatro a verificar si hay cambia y el delay q se quiere 
  return (                                            // se utiliza pa q no este buscando todo el tiempo, la idea es q si pasa "delay" sin cambios en "search" entonces es q hace la busqueda, sino se reinicia el delay 
    <div>                                             
      <Search />
      <MoviesGrid key={searchDebounce}/>  {       /* el objetivo d agregar "key" es pq react reinicia un componente cuando la key cambia */}
    </div>                                /* y hacia falta reiniciar los componentes hijos de "MoviesGrid" luego de la busqueda */  
  );
}
