function urutkanString(str) {
   
    let arr = str.split("");
    let hasil = arr.sort();
    let gabung = hasil.join("");
    return gabung;
    
}

console.log(urutkanString("HELLO"));
console.log(urutkanString("DUMBWAYS"));