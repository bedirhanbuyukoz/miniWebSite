var img = document.getElementById("myImg");
var btn = document.getElementById("myBtn");
var visible = true;


btn.addEventListener("click", function() {
    if (visible) {
      img.style.display = "none";
      btn.innerHTML = "Resmi Göster";
      visible = false;
    } else {
      img.style.display = "block";
      btn.innerHTML = "Resmi Gizle";
      visible = true;
    }
  });
  



function validateForm(){
    const isim = document.getElementById("isim").value;
    const soyisim = document.getElementById("soyisim").value;
    const email = document.getElementById("email").value;
    const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

if (isim === "" || soyisim === "") {
    alert("İsim ve Soyisim alanları boş geçilemez.");
    return false;
  }

  if (!emailPattern.test(email)) {
    alert("Lütfen geçerli bir e-posta adresi girin.");
    return false;
  }

  alert("Kayıt alınmıştır.");
  return false;
}


