var buah = ["pisang", "jeruk", "mangga"];
var sayuran = ["bayem", "Daon Singkong", "Kol"];
// var isBuah = "";
// for (var z = 0; z < buah.length; z++) {
//   console.log(buah[z]);
//   isBuah = isBuah + "<li>" + buah[z] + "</li>";
// }
// console.log(isBuah);
// document.getElementById("buah").innerHTML = isBuah;

// const namaSayur = sayuran.map((sayur) => {
//   return "<li>" + sayur + "</li>";
// });

// document.getElementById("sayur").innerHTML = namaSayur;

// while
createListBuah();
createListSayur();

function createListBuah() {
  var isBuah = "";
  var counter = 0;
  while (counter < buah.length) {
    isBuah += "<li>" + buah[counter] + "</li>";
    counter++;
  }
  document.getElementById("buah").innerHTML = isBuah;
}

function createListSayur() {
  var isSayuran = "";
  var counter = 0;

  while (counter < sayuran.length) {
    var btnEdit = "<button class='btn-edit'onclick='add()'>+</button>";
    var inputBaru = `<span><input></input</span>`;
    isSayuran += "<li>" + sayuran[counter] + " " + btnEdit + "</li>";
    counter++;
  }

  document.getElementById("sayuran").innerHTML = isSayuran;
}

// masukan buah ke dalam array

function tambahBuah(namaBuah) {
  // buah.length >= 10 ? alert("CUMAN BISA 10") : buah.push(namaBuah);
  // createListBuah();
  if (buah.length >= 10) {
    alert("Maa jumalh buah tidak bisa lebih dari 10");
  } else {
    if (cariBuahSama(namaBuah)) {
      alert("Maaf buah Sudah diinput");
    } else {
      buah.push(namaBuah);
      createListBuah();
    }
  }
}

function tambahSayur(namaSayur) {
  if (sayuran.length >= 10) {
    alert("Maaf jumlah sayur tidak bisa lebih dari 10");
  } else {
    if (cariSayurSama(namaSayur)) {
      alert("Maaf sayur Sudah diinput");
    } else {
      sayuran.push(namaSayur);
      createListSayur();
    }
  }
}

function add() {
  var namaSayur = prompt("Tambah Baru");
  tambahSayur(namaSayur);
  createListSayur();
}

function cariBuahSama(namaBuah) {
  for (var i = 0; i < buah.length; i++) {
    if (buah[i].toLowerCase() === namaBuah.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function cariSayurSama(namaSayur) {
  for (var i = 0; i < sayuran.length; i++) {
    if (sayuran[i].toLowerCase() === namaSayur.toLowerCase()) {
      return true;
    }
  }
  return false;
}
