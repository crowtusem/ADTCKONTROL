
//if else:iki seçeneğin oldupu yerlerde kullanılır
//if else if else:2 den fazla seçeneğin olduğu yerlerde kullanılır.
//if if if: her bir koşula ayrı değerlendirilmesi için kullanılır.
/*
Ad ve Tc 
Ad:boş geçilemez
TCNO:boş geçilrmez 11 karekterden oluşmalı
*/


let ad = prompt('isminizi giriniz');
let tcno = prompt('tcno giriniz');
kontrolEt(ad, tcno);
function kontrolEt(ad, tcno) {
    if (ad != "") {
        if (tcno.length == 11) {
            console.log('isim ve tcno problemsiz girildi');
            alert('isim ve tcno problemsiz girildi ' + ad + ' ' + tcno);
        } else {
            console.log('lütfen tc no 11 karekter olarak giriniz');

        }

    } else {
        console.log('Lütfen isim alanını boş bırakmayın!');
    }
}