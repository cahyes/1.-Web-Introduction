let nama = document.querySelector(".nama");
let posisi = document.querySelector(".role");
let descValue = document.querySelector(".descValue");

let listValue = descValue.querySelectorAll("li");
console.log(listValue);

let form = document.querySelector("form");

let submit = document.querySelector(".submit");

form.addEventListener("submit", function (e) {
  // Mengambil nilai inputan saat form disubmit
  const namaa = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const usia = document.getElementById("usia").value;
  const lokasi = document.getElementById("lokasi").value;
  const experience = document.getElementById("experience").value;
  const email = document.getElementById("email").value;

  // Mengubah konten elemen sesuai dengan inputan
  nama.textContent = namaa;
  posisi.textContent = role;
  listValue[0].textContent = `: ${availability}`;
  listValue[1].textContent = `: ${usia}`;
  listValue[2].textContent = `: ${lokasi}`;
  listValue[3].textContent = `: ${experience}`;
  listValue[4].textContent = `: ${email}`;

  // Mengosongkan kolom input
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("availability").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("lokasi").value = "";
  document.getElementById("experience").value = "";
  document.getElementById("email").value = "";

  //ini bagia paling penting karena ketika form disubmit terrefresh secara default
  // Mencegah refresh halaman
  e.preventDefault();
});
