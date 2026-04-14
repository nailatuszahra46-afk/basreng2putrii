function hubungiWA() {
  const pesan = "Halo, saya ingin bertanya tentang Basreng 2 Putri 😊";
  const nomor = "6285800509081"; // ganti nomor kamu

  const url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}
function bukaMaps() {
  const url = "https://www.google.com/maps?q=Bibis";
  window.open(url, "_blank");
}