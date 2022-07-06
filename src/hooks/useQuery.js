import { useLocation } from "react-router";
import React from "react";

export function useQuery() {
    //hook de ract-router q recoge el parametro q se pasa por la ruta
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }