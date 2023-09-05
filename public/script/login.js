
document.addEventListener("DOMContentLoaded", () => {
    //* Sayfa yüklendiğinde alert öğesinin boş olup olmadığını kontrol ettim
    //* boş olmadığı taktirde alertClose düğmesine tıklanma olayı verildi!
    let alert = document.querySelector(".teknaAlert");
    if (alert.textContent.trim() != "") {
        document.querySelector(".alertClose").addEventListener("click", () => {
            $(".teknaAlert").slideUp("slow");
        })
        
        //*alert açıldığında 3 saniye sonra alert kaybolur
        setTimeout(() => {
            $(".teknaAlert").slideUp("slow");
        },3000)
    }
})