const arr = [{
 name : "Umberto",
 surname : "Di Nocera",
 age : 21,
 city : "Castellammare Di Stabia",
 hobby : "Tennis",
 favoriteFood : "Pizza",
 favoriteVideoGame : "GTA V",
 favoriteFilm : "La vita è bella",
 favoriteBook :  "Steve Jobs",
 petName : "Baby",
},{
    name:"Denis",
    surname:"Bruno",
    age:21,
    city:"Santa Croce Camerina",
    hobby:"play videogame",
    favoriteFood:"Pizza",
    favoriteVideoGame:"Grand Theft Auto V",
    favoriteFilm:"Inception",
    favoriteBook:"Uno, Nessuno e Centomila",
    petName:" "
},{
    name:"marco",
    surname:"bruno",
    age: 23 ,
    city: "napoli",
    hobby: "gym",
   favotiteFood: "pizza",
   favoriteVideoGames:" fifa",
   favoriteBook: "harry potter",
   favoriteFilm: "inception",
   petName: ""
},{
    name: "Massimo",
    surname: "Rabuffo",
    age: 26,
    city:"Caserta",
    hobby: "web developer",
    favouriteFood: "Pizza",
    favouriteVideogame: "The last of us",
    favouriteFilm:"interstellar",
    favouriteBook:"La strada",
    petName:"Chloe",
}];

function printPetName(petName){
    for (let i = 0; i < petName.length; i++)
    {
       if(arr[i].petName!==""){
        console.log(arr[i].petName)
       }
    }
}

printPetName(arr)