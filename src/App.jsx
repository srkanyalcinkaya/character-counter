import Footer from "./components/footer";
import React, { useState } from "react";
import Navbar from "./components/navbar";


export default function App() {


  const [text, setText] = useState("")



  function characterCounter(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    
    // Metni kelimelere ayır
    const words = text.toLowerCase().split("").length;

    return words
  }

  function wordCount(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    // Metni boşluklara göre böler ve bir dizi oluşturur
    var words = text.split(/\s+/);
    // Dizinin uzunluğunu döndürür, yani kaç kelime olduğunu verir
    return words.length - 1;
  }

  function paragraphCount(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    // Metni paragraflara göre böler ve bir dizi oluşturur
    var paragraphs = text.split(/\n{2,}/);
    // Dizinin uzunluğunu döndürür, yani kaç paragraf olduğunu verir
    return paragraphs.length;
  }

  function sentenceCount(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    // Metni paragraflara göre böler ve bir dizi oluşturur
    var sentences = text.split(".");
    // Dizinin uzunluğunu döndürür, yani kaç paragraf olduğunu verir
    return sentences.length - 1 ;
  }

  function countNonSpaceCharacters(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    // Metindeki boşlukları (boşluk, sekme, yeni satır) çıkart
    var textWithoutSpaces = text.replace(/\s/g, '');
    // Boşluk olmayan karakterlerin sayısını döndür
    return textWithoutSpaces.length;
  }

  function countUniqueWords(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    // Metni boşluklara göre böler ve bir dizi oluşturur
    var wordsArray = text.split(/\s+/);
    // Dizideki benzersiz kelimeleri saklamak için bir nesne oluştur
    var uniqueWords = {};

    // Dizi elemanlarını döngüye alarak benzersiz kelimeleri say
    wordsArray.forEach(function (word) {
      // Kelimeyi küçük harflere çevirerek tutarlılık sağla
      var lowercaseWord = word.toLowerCase();
      // Eğer kelime nesnede yoksa, nesneye ekle
      if (!uniqueWords[lowercaseWord]) {
        uniqueWords[lowercaseWord] = true;
      }
    });

    // Nesnenin anahtarlarının sayısını döndür, bu benzersiz kelime sayısını verecek
    return Object.keys(uniqueWords).length;
  }


  function calculateReadingTime(text) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    // Metnin kelime sayısını hesapla
    var wordCount = text.split(/\s+/).length;

    // Ortalama yetişkin okuma hızı (kelime/dakika)
    var averageReadingSpeed = 225; // Örnek bir değer

    // Okuma süresini hesapla (dakika)
    var readingTime = wordCount / averageReadingSpeed;

    // Sonucu yuvarla ve döndür
    return Math.ceil(readingTime);
  }


  function calculateSpeakingTime(text, wordsPerMinute = 180) {
    // Metni kontrol edip boşsa 0 döndür
    if (text.trim().length === 0) {
      return 0;
    }
    var wordCount = text.split(/\s+/).length;
    var speakingTimeMinutes = wordCount / wordsPerMinute;
    // Sonucu yuvarla ve döndür
    return Math.ceil(speakingTimeMinutes); // dakika cinsinden
  }


  function calculateWordFrequencies(text) {
    // Metni temizle
    text = text.replace(/[^\w\sğüşıöçĞÜŞİÖÇ]/g, "").replace(/\s+/g, " ");

    // Metni kelimelere ayır
    const words = text.toLowerCase().split(" ");

    // Kelime frekanslarını hesapla
    const frequencies = {};
    words.forEach(word => {
      if (word) frequencies[word] = (frequencies[word] || 0) + 1;
    });

    // Toplam kelime sayısını hesapla
    const totalWords = words.length;

    // Kelime yüzdeliklerini hesapla ve sonuçları bir diziye ekle
    const results = [];
    for (let word in frequencies) {
      const percentage = ((frequencies[word] / totalWords) * 100).toFixed(2);
      results.push({ word, count: frequencies[word], percentage: `${percentage}%` });
    }

    // Yüzdeye göre sırala ve döndür
    return results.sort((a, b) => b.count - a.count);
  }



  return (
    <>
      <Navbar />

      <main className="w-full flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto p-5  ">
          <div className="flex flex-col gap-6">
            <div className="flex bg-zinc-600 rounded-2xl ">
              <div className="py-4 px-6 text-center w-full">
                <div className="text-sm text-white/60">Karakter</div>
                <div className="text-4xl font-extrabold  ">{characterCounter(text)}</div>
              </div>
              <div className="py-4 px-6 text-center w-full border-x-[1px] border-white-10">
                <div className="text-sm text-white/60">Kelime</div>
                <div className="text-4xl font-extrabold  ">{wordCount(text)}</div>
              </div>
              <div className="py-4 px-6 text-center w-full border-r-[1px] border-white-10">
                <div className="text-sm text-white/60">Paragraf</div>
                <div className="text-4xl font-extrabold  ">{paragraphCount(text)}</div>
              </div>
              <div className="py-4 px-6 text-center w-full">
                <div className="text-sm text-white/60">Cümle</div>
                <div className="text-4xl font-extrabold  ">{sentenceCount(text)}</div>
              </div>
            </div>
            <div className="w-full ">
              <textarea name="text" className="w-full bg-zinc-600 rounded-2xl placeholder:text-white/60 p-4 border-[1px] border-white/10 min-h-12 placeholder:text-sm focus:outline-white/60     " value={text} onChange={(e) => setText(e.target.value)} id="text" rows="7" placeholder="Metninizi buraya yazın veya kopyalayıp yapıştırın."></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-600 rounded-2xl">
                <div className="py-4 px-6 text-center w-full  ">
                  <div className="text-sm text-white/60">Boşluksuz Karakter</div>
                  <div className="text-4xl font-extrabold  ">{countNonSpaceCharacters(text)}</div>
                </div>
                <div className="h-[1px] w-full bg-white/40" />
                <div className="py-4 px-6 text-center w-full ">
                  <div className="text-sm text-white/60">Benzersiz Kelime</div>
                  <div className="text-4xl font-extrabold  ">{countUniqueWords(text)}</div>
                </div>
              </div>
              <div className=" text-center w-full h-full bg-zinc-600 rounded-2xl text-sm  flex flex-col text-white/60 items-center justify-center md:p-0 p-6 ">
                {text.split("").length > 2 ?
                  <>
                    <div className="px-6 py-4 border-b text-sm font-semibold w-full ">
                      Anahtar Kelimeler
                    </div>
                    <div className=" overflow-x-auto grid-flow-col   inline-grid  w-full h-full">
                      {calculateWordFrequencies(text).slice(0, 10)?.map((item, index) => (
                        <div key={index} className="flex flex-col  items-center px-6 py-4 text-sm text-white/80 border-x-[.5px] border-zinc-200 p-2   ">
                          <span>
                            {item.word}
                          </span>
                          <span className="text-4xl font-extrabold">
                            {item.count}
                          </span>
                          <span>
                            {item.percentage}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                  :
                  <div>
                    En çok kullanılan anahtar kelimelerin listesini görmek için yazmaya başlayın.
                  </div>}

              </div>
              <div className="bg-zinc-600 rounded-2xl">
                <div className="py-4 px-6 text-center w-full  ">
                  <div className="text-sm text-white/60">Okuma Süresi</div>
                  <div className="text-4xl font-extrabold  ">{calculateReadingTime(text)} Dakika</div>
                </div>
                <div className="h-[1px] w-full bg-white/40" />
                <div className="py-4 px-6 text-center w-full ">
                  <div className="text-sm text-white/60">Konuşma Süresi</div>
                  <div className="text-4xl font-extrabold  ">{calculateSpeakingTime(text)} Dakika</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12" >
              <article className="prose max-w-full">
                <h2 className="text-2xl text-white/80 mb-4 ">Karakter Sayısı Nedir?</h2>
                <p className="text-base text-white/50 mb-2">Karakter sayısı, bir metindeki boşluklar ve diğer özel karakterler dahil tüm karakterlerin toplam sayısıdır.
                  Çoğunlukla bir metin veya dökümanın belirli miktarda karaktere sahip olmasının sağlanması için karakter sayısını
                  bilmek gerekmektedir.</p>
                <p className="text-base text-white/50 mb-2">Karakter sayısı özellikle çeviri sektöründe sıklıkla kullanılmaktadır. Günümüzde birçok çevirmen, bir çevirinin
                  maliyetini boşluksuz karakter sayısı üzerinden hesaplamaktadır.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Kelime Sayısı ile Karakter Sayısı Arasındaki Fark Nedir?</h2>
                <p className="text-base text-white/50 mb-2">Kelime sayısı bir metindeki kelimelerin toplam sayısıdır. Diğer yandan karakter sayısı ise bir metindeki tüm
                  karakterlerin toplam sayısıdır. Bir metinde kaç karakter olduğunu öğrenmek istiyorsanız, özel karakterler dahil
                  tüm karakterleri saymanız gerekir.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Karakterleri Nasıl Sayarsınız?</h2>
                <p className="text-base text-white/50 mb-2">Metindeki karakter sayısını bulmak için belgenizi Word veya LibreOffice ile açabilir, bu programların istatistik
                  araçları ile karakter sayısını öğrenebilirsiniz. Alternatif olarak, karakter sayısını saymak için Karakter Sayacı
                  gibi çevrimiçi bir araç kullanabilirsiniz.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Karakter Sayısı Boşlukları İçerir mi?</h2>
                <p className="text-base text-white/50 mb-2">Evet. Boşluksuz karakter sayısı, karakter sayısından farklı olan başka bir ölçüdür.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Online Karakter Sayma Nasıl Yapılır?</h2>
                <p className="text-base text-white/50 mb-2">Karakter Sayacı ile online karakter sayısı bulma işlemini, kolay ve ücretsiz olarak gerçekleştirebilirsiniz.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Karakter Sayacı Nedir?</h2>
                <p className="text-base text-white/50 mb-2">Karakter Sayacı, kullanımı basit ve ücretsiz olan online karakter sayısı hesaplama aracıdır. Bu aracı kullanarak
                  Twitter karakter sayısı hesaplama gibi işlemleri hızlı biçimde yapabilirsiniz.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Karakter Sayacı Nasıl Kullanılır?</h2>
                <p className="text-base text-white/50 mb-2">Metninizi üstteki kutuya yazın veya kopyalayıp yapıştırın. Ardından, Karakter Sayacı size boşluklu veya boşluksuz
                  karakter sayısı ile metindeki <a href="/tr/word-counter/">kelime sayısı</a>nı gösterecektir.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Mac için Word'de Karakter Sayımını Nasıl Yaparım?</h2>
                <p className="text-base text-white/50 mb-2">Uygulama ekranının altında bulabileceğiniz durum çubuğunda yer alan sözcük sayımına tıklayıp, Karakter
                  (boşluksuz) ve Karakter (boşluklu) sayılarını görebilirsiniz.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Bir Mesaj Metni Kaç Karakterdir?</h2>
                <p className="text-base text-white/50 mb-2">Tek bir SMS için karakter sınırı 160 karakterdir.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Twitter Karakter Sınırı Kaç?</h2>
                <p className="text-base text-white/50 mb-2">Eskiden bir tweet en fazla 140 karakterden oluşabilmekteydi. Ancak, 2023 yılında bir tweet en fazla 280
                  karakterden oluşabilmektedir.</p>
                <h2 className="text-2xl text-white/80 mb-4 ">Her Sosyal Ağ için Maksimum Karakter Sayısı Kaç?</h2>
                <p className="text-base text-white/50 mb-2">Sosyal ağlar için maksimum karakter sayıları:</p>
                <ul className="text-base text-white/50 mb-2 flex-col flex space-y-2 list-disc   ">
                  <li>Facebook: 63206 - bir gönderi için</li>
                  <li>Instagram: 2200 - bir gönderi için</li>
                  <li>Twitter: 280 - bir tweet için</li>
                  <li>YouTube: 70 - bir video başlığı için, 5000 - bir video açıklaması için</li>
                  <li>Twitch: 150 - biyografi için</li>
                </ul>
              </article>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}