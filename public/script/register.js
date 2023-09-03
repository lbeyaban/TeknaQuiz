//*register form kontrolü (boş input,şifre uyuşması vs.)
const alert = document.querySelector(".teknaAlert")
document.querySelector(".registerForm").addEventListener("submit",(e) =>{
    const nameSurname = document.querySelector('.nameSurname').value;
    const email = document.querySelector('.email').value;
    const sinif = document.querySelector('.selectClass').value;
    const password = document.querySelector('.pass').value;
    const passwordAgain = document.querySelector('.passAgain').value;
    
    if (!nameSurname || !email || sinif === "Sınıf Seçiniz" || !password || !passwordAgain) {
        showAlertFunc("Lütfen tüm alanları doldurun.")
    }
    
    if (password !== passwordAgain) {
        showAlertFunc("Girdiğiniz şifreler uyuşmuyor.")
    }
    
    if (password.length < 8 || !/\d/.test(password) || !(/[A-Z]/.test(password) && /[a-z]/.test(password))) {
        showAlertFunc(`Şifreniz en az 8 karakter, 1 rakam ve büyük küçük harf içermelidir.`)
    }

    //*hatalı kullanımda alerti yürüten fonksiyon
    function showAlertFunc(alertTextMessage){
        const alertMessage = alert.querySelector(".alertMessage")
        alertMessage.innerHTML=alertTextMessage
        $(alert).slideDown();
        e.preventDefault(); //*=> submitin işlevselliği kayıt edilir
    }
}) 

//*alert kapatma fonksiyonu
document.querySelector(".alertClose").addEventListener("click", () => {
    $(".teknaAlert").slideUp("slow");
})