// let items = ['item 1', 'item 2', 'item 3', 'item 4',]

// items.forEach(function(item){
//     CreateItem(item)
// })


let list = document.querySelector('#myList')


//Liste elemanı oluşturma metodu.
function CreateItem(item){
    //? Yeni liste elemanı içerik oluşturma
    let li = document.createElement('li') //li öğesi oluşturduk
    let t = document.createTextNode(item) //t adında item argümanında içerik oluşturduk
    li.className = 'list-group-item' // CLASSNAME ÖNCEKİ KLASLARI SİLER YENİ EKLER
    li.appendChild(t) //Li elemanının sonuna t elemanını ekledik
    list.appendChild(li) // List elemanının sonuna li elemanını ekledik


    //? Oluşturulan liste elemanını kapatmak için x butonu ekleme
    let span = document.createElement('span') //span öğesi oluşturduk
    let text = document.createTextNode('\u00D7') //text adında ASCII kodu vererek x işareti oluşturduk
    span.className = 'close' //close adında yeni class ismi ekledik
    span.appendChild(text) //span elamanının sonuna text öğesini ekledik
    li.appendChild(span) //li elamanının sonuna span öğesini ekledik


    // x işaretine basarak belirli liste elamanının display none yapma
    span.onclick = function(){
        let li = this.parentElement // li'nin bir üst elemanını seçtik
        li.style.display = 'none' // li display none yapma
    }
    document.querySelector('#txtItem').value = '' //listeye eleman ekledikten sonra inputu boşalttık

}


//listeyi check etme olayı
list.addEventListener('click', function(item){
    if(item.target.tagName == 'LI'){ //Eğer item elamanının hedefi LI elementiyse...
        item.target.classList.toggle('checked')//check sınıfı yoksa ekle, varsa sil
        ToggleDeleteButton()
    }
})


//Eğer check olayı en az 1 ise selete all butonu görünecek metodu
function ToggleDeleteButton(){
    let checkList = document.querySelectorAll('.checked') // Tüm checked adındaki klasları al
     if(checkList.length > 0)
    // eğer checked class sayısı 0 dan büyükse display nonu sil ve butonu göster
    document.querySelector('#deleteAll').classList.remove('d-none') 
     else 
     // eğer checked class yoksa display none ekle ve butonu sil 
     document.querySelector('#deleteAll').classList.add('d-none')
}


// Add butonuna basınca değer varsa inputu listeye ekleme
document.querySelector('#btnCreate').onclick = function(){
    let item = document.querySelector('#txtItem').value //input değerini aldık

    //Eğer değer yoksa
    if(item == ''){
        alert('Lütfen değer giriniz!') // eğer input değeri boşsa uyarı verdik
        return
    }

    // Eğer değer girilmişse
    CreateItem(item) //Element oluşturma metodu çalışacak
}


//! Aşağıdaki check olaylarını silmemizin sebebi, check sınıfını sayan ToggleDeleteButton metodunun checked sınıflarını doğru sayması...
//Delete All tuşuna basınca tüm check olanları silme
document.querySelector('#deleteAll').onclick = function(){
    let elements = document.querySelectorAll('.checked') //Tüm checked sınıflarını aldık
    elements.forEach(function(item){
        item.style.display = 'none' // tüm check sınıflarını none yaptık
    })
}


// Enter tusuna inputa verilen değeri eklemne
document.addEventListener('keydown', function(e){
    if(e.key=='Enter'){ // eğer basılan tuş Enter ise
        let item = document.querySelector('#txtItem').value //input değerini aldık

    //Eğer değer yoksa
    if(item == ''){
        alert('Lütfen değer giriniz!') // eğer input değeri boşsa uyarı verdik
        return
    }

    // Eğer değer girilmişse
    CreateItem(item) //Element oluşturma metodu çalışacak
    }
})