function csvArray(csv, delimeter, header){
    let array;

    if(header){
        array = csv.split("\n")

        for(let i = 0; i < array.length; i++){
            array[i] = array[i].split(delimeter)
        }

        //first one for header and second one for body
        return {head: array[0] ,
                body: array.splice(1,array.length)}
    }
    else{
        array = csv.split("\n")

        for(let i = 0; i < array.length; i++){
            array[i] = array[i].split(delimeter)
        }

        return array
    }
}

function csvJSON(csv,delimeter){

    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(delimeter);
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(delimeter);
  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    
    return result; //JavaScript object
    // return JSON.stringify(result); //JSON
  }

function jsonCSV(jsonObj) {
    var array = typeof jsonObj != 'object' ? JSON.parse(jsonObj) : jsonObj;
    var csv = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line !== '') line += ','

            line += array[i][index];
        }

        csv += line + '\r\n';
    }

    return csv;
}

module.exports =  {csvJSON,jsonCSV,csvArray}