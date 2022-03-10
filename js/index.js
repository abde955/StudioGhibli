const requestURL = './json/peliculas.json';

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}


fetchMoviesJSON().then(movies => {
         /* console.log(movies) */

    for (let index = 0; index < movies.peliculas.length; index++) {
       
        let title = movies.peliculas[index].nombre;
        let original_name = movies.peliculas[index].original_name;
        let año = movies.peliculas[index].año
        let clasificacion = movies.peliculas[index].clasificacion
        let img = movies.peliculas[index].img;
            moviesSection.innerHTML += `
            
            
            
            <div class="card border-dark mb-3 container rounded" style="max-width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-header o-name">${original_name}</h5>
                        <img class="card-img-top img-fluid" src="${img}" alt="Card image cap">
                        <h6 class="card-title">${title}</h6>
                        <h8 class="card-title">${clasificacion}</h8>
                        <h7 class="card-title">${año}</h7>                
                    </div>
                </div>
            
            
           
            `
        
        
    }
})