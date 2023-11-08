// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {

// Sayfa dön butonunu seç
         var backToTopButton = document.getElementById('back-to-top');

// Eğer buton mevcut ise
                 if (backToTopButton) {
// Pencere kaydırıldığında kontrol et
                                 window.addEventListener('scroll', function() {
// Eğer belirli bir mesafe kaydırıldıysa butonu göster
                                                         if (window.scrollY > 300) {
                                                                         backToTopButton.style.display = 'block';
                                                                                     } else {
                                                                                                     backToTopButton.style.display = 'none';
                                                                                                                 }
                                                                                                                         });

// Butona tıklandığında en üste dön
                                                                                                                                         backToTopButton.addEventListener('click', function() {
                                                                                                                                                     window.scrollTo(0, 0);
                                                                                                                                                             });
                                                                                                                                                                 }

                                                                                                                                                                 });
                                           
