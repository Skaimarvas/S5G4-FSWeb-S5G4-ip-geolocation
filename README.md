# IP Geolocation Projesi

Bu projede Ergineer IP Geolocation API'sine sorgu atacağız ve sonuçlarla IP'ye ait konum bilgilerini göstereceğiz. Amacımız bileşen temelli bir data oluşturup bu datayı kullanarak API'ye sorgu atmak (öncelikle kendi datanızı kullanacaksınız). CSS ve HTML yapısı sizin için oluşturuldu, siz sadece bileşen fonksiyonunu yazıp parçaları birleştireceksiniz.

## Bilmeniz Gerekenler

- Projenin bağımlılıklarını eklemek:
  - script elemanları
  - npm kullanmak
- JavaScript:
  - Javascript fonksiyonlarıyla DOM bileşenleri(components) oluşturmak
  - Üçüncü parti bir kütüphane kullanmak (Axios)
  - Promise'ler, .then & .catch
  - HTTP GET sorguları
  - Dizi Metotları
- DOM
  - Eleman seçimi
  - Basit DOM manipülasyonu
  - Eventler ve event dinleyicileri

## Projeyi Git'le Kurun

**Aşağıdaki adımları uygulayın:**

- [x] Bu projeyi forklayarak bir kopyasını oluşturun.
- [x] Reponun kendi versiyonunuzu klonlayın.
- [x] Commitinizi pushlayın: `git push origin main`.

### Proje Kurulumu

- [x] Komut satırınızla projenin kök dizinine gidin.
- [x] `npm install` komutuyla `package.json` da listelenen proje bağımlılıklarını indirin
- [x] `npm start` komutuyla projenizi derleyip çalıştırın.

### Axios Kurulumu

#### npm ile Axios yüklemesi

- [x] Komut satırınızla projenin kök dizinine gidin.
- [x] `npm install axios` komutuyla bağımlılığı indirin (bu şekilde `package.json` a da eklenecektir).
- [x] Yukarıdaki `ipgeo/index.js` dosyasını açın, ve en üstüne `import axios from 'axios';` yazarak kütüphaneyi import edin.

### Bölüm 1: IP Geolocation API'den Data Sorgusu

- [ ] `ip/index.js` içindeki yönergeleri takip ederek API'ye nasıl sorgu atacağınızı öğrenin.

### Bölüm 2: Bileşen fonksiyonunu yaratın

- API'den datayı alınca, data içindeki bilgileri anlamak için göz gezdirin. API'den aldığınız datayı ekleyerek, HTML'yi ip/index.js dosyası içine yazacaksınız.
- Bileşeni yazmayı tamamlamadan önce, kendi IP'nizi içeren bir sorgu oluşturun ve DOM'a aktarın.

### Bölüm 3: IP'nizi dinamik olarak alın

- Eğer scripti geliştirirken IP'yi elinizle girdiyseniz şimdi bunu dinamik hale dönüştüreceğiz. `ip/index.js` sayfa üstündeki ipAdresimiAl() fonksiyonuna asenkron bir sorgu atarak ip'yi dinamik hale getirin, sayfadaki yönergeleri izleyebilirsiniz.
