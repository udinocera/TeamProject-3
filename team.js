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
