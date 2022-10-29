function proses() {
    var umur = document.kirim.umur.value
    var nama = document.kirim.nama.value
    if (umur >= 18)
        document.write("Hallo " + nama + ", Kamu diizinkan masuk")
    else
        document.write("Hallo " + nama + ", Kamu tidak diizinkan masuk")
}