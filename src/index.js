//#region Değişkenler

// const ddmmyy = moment() // Date type'lar üzerinde ekstra özellikler getiren bir kütüphane. Bu ders için önemli değil.
//             .format('DD/MM/YYYY') // Tarih formatı

const DD_MM_YYYY = 'DD/MM/YYYY';
const currentDate = moment() // Date type'lar üzerinde ekstra özellikler getiren bir kütüphane. Bu ders için önemli değil.
            .format(DD_MM_YYYY) // Tarih formatı

// ====================================================================================================

const user = {name:"mehmet"};

// // a.js
// getUserName(user);

// // b.js
// getClientName(user);

// a.js b.js
getUserName(user);

// ====================================================================================================

// constans.js
const MILISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

// a.js
// setTimeout(() => {
//     // İşlem
// }, 
// //86400000
// 1000 * 60 * 60 * 24
// );

setTimeout(() => {
    // İşlem
}, MILISECONDS_IN_A_DAY);

// ====================================================================================================
// Özellikle bir dizinin içerisindeki özellikle bir indekste bulunan elemanı alırken değişkenleri kullanmalayız.

//                               (\d{5})$
const address = "Çankaya, Ankara 06000";

const cityZipCodeRegex = /,\s*[^,]+\s*(\d{5})$/;
// saveCityZipCode(
//     address.match(cityZipCodeRegex)[1]
// );
const [_, zipCode] = address.match(cityZipCodeRegex); // Destructuring
saveCityZipCode(zipCode);

// ====================================================================================================

const locations = ["Istanbul", "Izmir", "Ankara", "Antalya"];
// locations.forEach(l => {
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     // Do something
//     doStuff(l);
// });

locations.forEach(location => {
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    // Do something
    doStuff(location);
});

// ====================================================================================================



// ====================================================================================================

//#endregion Değişkenler