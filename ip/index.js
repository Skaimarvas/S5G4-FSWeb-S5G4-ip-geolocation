//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

function cardOlustur() {
  ipAdresimiAl().then(() => {
    const urlCall = " https://apis.ergineer.com/ipgeoapi/" + benimIP;
    axios
      .get(urlCall)
      .then(function (response) {
        const data = response.data;

        const card = document.createElement("div");
        card.className = "card";

        const bayrakImg = document.createElement("img");
        bayrakImg.src = "https://flagpedia.net/data/flags/w702/tr.webp";

        const cardInfo = document.createElement("div");
        cardInfo.className = "card-info";

        const ipAdres = document.createElement("h3");
        ipAdres.className = "ip";
        ipAdres.textContent = Object.values(data)[0];

        const ulke = document.createElement("p");
        ulke.className = "ulke";
        ulke.textContent = `${Object.values(data)[3]} (${
          Object.values(data)[4]
        }) `;

        const lokasyon = document.createElement("p");
        lokasyon.textContent = `Enlem: ${Object.values(data)[10]} Boylam: ${
          Object.values(data)[11]
        }`;

        const sehir = document.createElement("p");
        sehir.textContent = `Şehir: ${Object.values(data)[8]}`;

        const saat = document.createElement("p");
        saat.textContent = `Saat Dilimi: ${Object.values(data)[12]}`;

        const kur = document.createElement("p");
        kur.textContent = `Para Birimi: ${Object.values(data)[13]}`;

        const ispInfo = document.createElement("p");
        ispInfo.textContent = `ISP: ${Object.values(data)[14]}`;

        card.append(bayrakImg, cardInfo);
        cardInfo.append(ipAdres, ulke, lokasyon, sehir, saat, kur, ispInfo);
        document.querySelector(".cards").append(card);
      })

      .catch(function (error) {
        console.error("Veri alınamadı", error);
      })

      .finally(() => {
        console.log("Tamamlandı");
      });
  });
}

cardOlustur();
