document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // kalau link kosong atau #
      if (!href || href.startsWith("#")) return;

      e.preventDefault(); // tahan pindah halaman
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 600);
    });
  });
});

let cart = [];

function addToCart(nama, harga) {
  const item = cart.find(i => i.nama === nama);

  if (item) {
    item.qty++;
  } else {
    cart.push({ nama: nama, harga: harga, qty: 1 });
  }

  console.log(cart);

  renderCart(); 
}

function renderCart() {
  const container = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.qty;

    container.innerHTML += `
      <div class="cart-item">
        ${item.nama} (${item.qty})
        <div>
          <button onclick="tambah(${index})">+</button>
          <button onclick="kurang(${index})">-</button>
          <button onclick="hapus(${index})">x</button>
        </div>
      </div>
    `;
  });

  count.innerText = total;
}

function tambah(i) {
  cart[i].qty++;
  renderCart();
}

function kurang(i) {
  if (cart[i].qty > 1) {
    cart[i].qty--;
  } else {
    cart.splice(i, 1);
  }
  renderCart();
}

function hapus(i) {
  cart.splice(i, 1);
  renderCart();
}

function toggleCart() {
  const box = document.getElementById("cart-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function checkoutWA() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  let pesan = "Halo kak 😊%0A%0A";
  pesan += "Saya ingin memesan:%0A";

 let total = 0;

cart.forEach((item, i) => {
  pesan += `${i + 1}. ${item.nama} (${item.qty}) - Rp${item.harga * item.qty}%0A`;
  total += item.harga * item.qty;
});

pesan += `%0ATotal: Rp${total}%0A`;

  pesan += "%0ATerima kasih 🙏";

  const nomorWA = "6285800509081";
  const url = "https://wa.me/" + nomorWA + "?text=" + pesan;

  window.open(url, "_blank");
}
renderCart();

