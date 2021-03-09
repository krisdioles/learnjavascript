var apel = 10000;
var anggur = 20000;
var mangga = 30000;

var stokApel = 5
var stokAnggur = 4
var stokMangga = 5

var kuantitasApel = 0
do {
    kuantitasApel = window.prompt(`masukkan jumlah apel (stok : ${stokApel})`)
} while(kuantitasApel>stokApel)

var kuantitasApel = window.prompt("masukkan jumlah apel")
while(kuantitasApel>stokApel) {
    kuantitasApel = window.prompt(`masukkan jumlah apel (stok : ${stokApel})`)
}

var kuantitasAnggur = window.prompt("masukkan jumlah anggur")
while(kuantitasAnggur>stokAnggur) {
    kuantitasAnggur = window.prompt(`masukkan jumlah Anggur (stok : ${stokAnggur})`)
}

var kuantitasMangga = window.prompt("masukkan jumlah mangga")
while(kuantitasMangga>stokMangga) {
    kuantitasMangga = window.prompt(`masukkan jumlah Mangga (stok : ${stokMangga})`)
}

// if(kuantitasApel>stokApel) {
//     kuantitasApel=stokApel
// }

// if(kuantitasAnggur>stokAnggur) {
//     kuantitasAnggur=stokAnggur
// }

// if(kuantitasMangga>stokMangga) {
//     kuantitasMangga=stokMangga
// }

var totalHarga = apel*kuantitasApel + anggur*kuantitasAnggur + mangga*kuantitasMangga

alert(`total harga yg dibayarkan ${totalHarga}`)

// alert(`kembalian ${bayar-totalHarga}`)

var bayar = window.prompt("masukkan uang yg akan dibayar")
while(bayar<totalHarga) {
    bayar = window.prompt(`duit anda kurang ${totalHarga-bayar}, silahkan masukkan uang yg akan dibayar`)
}

alert(`kembalian anda ${bayar-totalHarga}`)