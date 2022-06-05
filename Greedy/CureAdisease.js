// A new deadly virus has infected large population of a planet. Scientists have discovered a new strain of virus which can cure this disease. Vaccine produced from this virus has various strength.


// A person is cured only if strength in vaccine batch is more than midichlorians count of person.

// A doctor receives a new set of report which contains midichlorians count of each infected patient, You have all vaccine doctor has and their strengths. You need to determine if doctor can save all patients with the vaccines he has. The number of vaccines and patients are equal.


let input=`5
123 146 454 542 456
100 328 248 689 200`;
input=input.split("\n");

let vaccinesArr=input[1].split(" ").map(Number);
let midichloriansArr=input[2].split(" ").map(Number);
let result=letFind(vaccinesArr,midichloriansArr);
console.log(result);
function letFind(vaccinesArr,midichloriansArr){
    for(let i in vaccinesArr){
        if(vaccinesArr[i]<midichloriansArr[i])
        return "No";
        
    }
    return "Yes"
}