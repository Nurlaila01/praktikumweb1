// membuat variabel
let myNumber = 15;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`);

//Menampilkan operasi aritmatika yang melibatkan 2 variabel
let x = 21
let y = 5
console.log(x, y)
console.log('x + y =', x + y)
console.log('x - y =', x - y)
console.log('x * y =', x * y)
console.log('x / y =', x / y)
console.log('x % y =', x % y)
console.log('x++ =', x++)
console.log('++x =', ++x)
console.log('x-- =', x--)
console.log('--x =', --x);

//Menampilkan operasi perbandingan yang melibatkan 2 variabel
let a = 24
let b = 10
console.log(a, b)
console.log('a > b =', a > b)
console.log('a < b =', a < b)
console.log('a >= b =', a >= b)
console.log('a <= b =', a <= b)
console.log('a == b =', a == b)
console.log('a != b =', a != b)
console.log('a === b =', a === b)
console.log('a !== b =', a !== b);

//Menampilkan operasi operator logika
console.log('true && true =', true && true)
console.log('true && false =', true && false)
console.log('false && true =', false && true)
console.log('false && false =', false && false)
console.log('true || true =', true || true)
console.log('true || false =', true || false)
console.log('false || true =', false || true)
console.log('false || false =', false || false)
console.log('!true =', !true)
console.log('!false =', !false)

function luas_persegi(s) {    //membuat nama dan parameter pada fungsi
    // statement yang ada pada fungsi
    var luas;
    luas = s*s;
    return luas;
};
console.log(luas_persegi(15));   //menampilkan hasil fungsi yang dipanggil
function luas_segitiga(a,t) {   //membuat nama dan parameter pada fungsi
    // statement yang ada pada fungsi
    var luas;
    luas = a*t/2;
    return luas;
};
console.log(luas_segitiga(5,8));    //menampilkan hasil fungsi yang dipanggil
function volume_balok(p,l,t) {  //membuat nama dan parameter pada fungsi
   // statement yang ada pada fungsi
    var volume;
    volume = p*l*t;
    return volume;
};
console.log(volume_balok(5,2,3));   //menampilkan hasil fungsi yang dipanggil