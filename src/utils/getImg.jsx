import placeholder from "../utils/placeholder.png"
export function getImg(path, width){
    return  path                                         //si hay poster_path(imagen de la pelicula)
    ? `https://image.tmdb.org/t/p/w${width}${path        // pongo la imagen q viene de la api  
        }`   
    : placeholder;                                            //sino cargo la imagen local "placeholder"
}


