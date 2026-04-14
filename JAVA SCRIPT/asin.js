function tambahKeranjang() {
  alert("klik masuk");
  
  const ukuran = document.getElementById("ukuran");

  if (!ukuran || ukuran.value === "") {
    alert("Silakan pilih ukuran terlebih dahulu!");
    return;
  }

  const namaUkuran = ukuran.options[ukuran.selectedIndex].text;
  const harga = parseInt(ukuran.value);

  // kirim ke keranjang
  addToCart("Basreng Asin - " + namaUkuran, harga);

  alert("Masuk ke keranjang 🛒");
}

function updateHarga() {
  const ukuran = document.getElementById("ukuran");
  const harga = ukuran.value;

  document.getElementById("harga").innerText =
    harga ? "Rp " + harga : "Rp 0";
}