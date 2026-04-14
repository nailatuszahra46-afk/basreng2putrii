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

function addToCart(nama) {
  const item = cart.find(i => i.nama === nama);

  if (item) {
    item.qty++;
  } else {
    cart.push({ nama: nama, qty: 1 });
  }

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
function toggleDetail() {
  const detail = document.getElementById("detail-section");
  detail.style.display = detail.style.display === "none" ? "block" : "none";
}

document.getElementById("ukuran").addEventListener("change", function() {
  document.getElementById("harga").innerText = this.value;
});