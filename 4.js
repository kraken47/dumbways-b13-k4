function encrypt(str){
    let result ='';
    for (let i=0;i<str.length;i++){
        let a = str.charCodeAt(i);
        let b = a ^ 4;
        result += String.fromCharCode(b)
    }
    return result;
}
function decrypt(str){
    let encoded = "";
   for (let i=0; i<str.length;i++) {
       let a = str.charCodeAt(i);
       let b = a ^ 4;  
       encoded = encoded+String.fromCharCode(b);
   }
   return encoded;
}
console.log(encrypt("Lucinta"));
console.log(decrypt("Hqgmjpe"));
