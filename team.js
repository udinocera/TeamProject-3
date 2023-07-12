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



function controllaNomi(arr) {
    let names = {};
    let duplicateName = [];

    for (i = 0; i < arr.length; i++) {
      let name = arr[i].name;

      if (names[name]) {
        var isDuplicate = false;
        for (j = 0; j < duplicateName.length; j++) {
          if (duplicateName[j] === name) {
            isDuplicate = true;
            break;
          }
        }

        if (!isDuplicate) {
          duplicateName.push(name);
        }
      }

      names[name] = true;
    }
    return duplicateName;
  }

  var duplicateName = controllaNomi(arr);

  if (duplicateName.length > 0) {
    console.log("Ci sono membri con lo stesso nome nell'array.");
    console.log("Nomi duplicati: " + duplicateName.join(", "));
  } else {
    console.log("Non ci sono membri con lo stesso nome nell'array.");
  }
function findMiddleAge (array) {
    let numberOfObject = 0;
    let middleAge = 0
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
       sum += array[i].age;
       numberOfObject++;
    };
    middleAge = sum/numberOfObject;
    return middleAge;
};

console.log(findMiddleAge(arr));



function stampaNomeVideogiocoPreferito(arr) {
    if (arr.favoriteVideoGame === "LOL") {
      console.log("Il tuo videogioco preferito è LOL!");
    } else {
      console.log("Il tuo videogioco preferito non è LOL.");
    }
}  
stampaNomeVideogiocoPreferito(arr)
