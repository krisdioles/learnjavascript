var option = 0
var cart = []

var fruits = [
    ["apel", 10000, 3],
    ["jeruk", 15000, 5],
    ["anggur", 20000, 6],   
]

while(option<5){
    option = parseInt(window.prompt(`Selamat datang di toko A. Silakan pilih menu berikut:
    1. Menampilkan daftar buah
    2. Menambah buah
    3. Menghapus buah
    4. Membeli buah
    5. Exit`))

    if(option == 1){
        // biar rapi print nya
        var fruitString = ""
        for(var i=0; i<=fruits.length-1; i++) {
            fruitString += `${i+1}. Buah ${fruits[i][0]} dengan harga ${fruits[i][1]} dan stok ${fruits[i][2]}\n`
        }
        alert(fruitString)
    }else if(option ==2){
        var namaBaru = window.prompt("Masukkan nama buah baru!")
        var hargaBaru = parseInt(window.prompt("Masukkan harga buah baru!"))
        var stokBaru = parseInt(window.prompt("Masukkan stok buah baru!"))
        
        var tambah = [namaBaru, hargaBaru, stokBaru]
        fruits.push(tambah)
        alert(fruits)
    }else if(option ==3){
        hapus = window.prompt("Masukkan buah yang ingin dihapus!")
        for(var i=0 ; i< fruits.length; i++){
            if(fruits[i][0] === hapus){
                fruits.splice(i,1)
            }
        }
        alert(fruits)
    }else if(option==4){
        var condition = true
        while(condition){
            var beli = ""
            var kuantitasBeli = 0
            var adaBuah = false
            var stokBuah = -1

            while(!adaBuah) {
                beli = window.prompt("Masukan buah yang akan Anda beli:")
                for(var i=0; i<=fruits.length-1; i++) {
                    if(beli == fruits[i][0]) {
                        adaBuah = true
                        stokBuah = fruits[i][2]
                    }
                }

                if(!adaBuah) {
                    alert("Buah yang anda pilih tidak ada")
                }
            }

            do {  
                kuantitasBeli = parseInt(window.prompt(`Masukkan jumlah buah yang akan Anda beli: [stok : ${stokBuah}]`))
            } while(kuantitasBeli > stokBuah)

            var beliBuah = [beli, kuantitasBeli]

            cart.push(beliBuah)

            // biar rapi print nya 
            var cartDetail = ""
            for(var i=0; i<=cart.length-1; i++) {
                cartDetail += `${i+1}. Buah ${cart[i][0]} dengan kuantitas ${cart[i][1]}\n`
            }
            alert(`Keranjang anda : \n${cartDetail}`)

            var beliLagi = window.confirm("Apakah anda mau beli lagi?")
            if(!beliLagi) {
                condition = false

                if(cart.length > 0) {
                    alert(`Buah yang anda beli: \n${cartDetail}`)

                    // hitung total biaya
                    var totalBiaya = 0
                    for(var i=0; i<=cart.length-1; i++) {
                        for(j=0; j<=fruits.length-1; j++) {
                            if(cart[i][0] == fruits[j][0]) { // cari buah (di arr fruits) yg ada di cart buat dapetin indeks nya
                                totalBiaya += cart[i][1] * fruits[j][1] // kuantitas beli * harga buah
                            }
                        }
                    }
                    alert(`Total biaya: \n${totalBiaya}`)
                }
            }
        }
    }else if(option==5){
        let confirmation = window.confirm("Are you sure?")
        if(!confirmation){
            option--
        }
    }
}