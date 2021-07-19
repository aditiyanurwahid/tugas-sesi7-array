// Soal no 1
let pekerjaan = ["web developer", "system analyst", "software developer", "database administrator", "hardware engineer"];
console.log(pekerjaan.length);
console.log(pekerjaan);

document.getElementById("panjangData").innerHTML = pekerjaan.length;
document.getElementById("bidangPekerjaan").innerHTML = pekerjaan;

// Soal nomor 2
let tim = ["Andi", "Budi", "Coki", "Doni", "Eman", "Fani"];
const tim1 = tim.slice(0, 3);
const tim2 = tim.slice(3, 6);

console.log(tim1, tim2);

document.getElementById("fullTim").innerHTML = tim;
document.getElementById("tim1").innerHTML = tim1;
document.getElementById("tim2").innerHTML = tim2;

// Soal nomor 3
let arr = [3, 5, 7, 9, 11];
let hasil = arr.map((num) => {
  return num * 5;
});

console.log(arr);
console.log(hasil);

document.getElementById("arrayAwal").innerHTML = arr;
document.getElementById("arrayBaru").innerHTML = hasil;

// Soal no 4
let pertama = ["Math", "English", "Programming"];
let kedua = ["Geography", "Spanish", "Programming"];

function checkPelajaran(pertama, kedua) {
  return pertama.some((periksa) => kedua.includes(periksa));
}

console.log(checkPelajaran(pertama, kedua));

document.getElementById("pelajaranPertama").innerHTML = pertama;
document.getElementById("pelajaranKedua").innerHTML = kedua;
document.getElementById("hasilPelajaran").innerHTML = checkPelajaran(pertama, kedua);
