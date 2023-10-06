//#region Değişkenler

// const ddmmyy = moment() // Date type'lar üzerinde ekstra özellikler getiren bir kütüphane. Bu ders için önemli değil.
//             .format('DD/MM/YYYY') // Tarih formatı

const DD_MM_YYYY = "DD/MM/YYYY";
const currentDate = moment() // Date type'lar üzerinde ekstra özellikler getiren bir kütüphane. Bu ders için önemli değil.
  .format(DD_MM_YYYY); // Tarih formatı

// ====================================================================================================

const user = { name: "mehmet" };

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
// const zipCode = address.match(cityZipCodeRegex)[1];
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

locations.forEach((location) => {
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

// Değişkenleri kapsayan bir obje yapısı mevcutsa, değişkenlerde o objenin bir özelliğini temsil ediyorsa tekrar objenin ismini değişkenlerde geçirmeye gerek yok.

// const customer = {
//     customerId: 1,
//     customerName: "Mehmet",
//     customerSurname: "Kara",
//     customerAge: 30,
// }
// const customerFullName = `${customer.customerName} ${customer.customerSurname}`

const customer = {
  id: 1,
  name: "Mehmet",
  surname: "Kara",
  age: 30,
};
const customerFullName = `${customer.name} ${customer.surname}`;

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

console.log(customerFullName);

// class Customer {
//     constructor(customerId, customerName, customerSurname, customerAge) {
//         this.customerId = customerId;
//         this.customerName = customerName;
//         this.customerSurname = customerSurname;
//         this.customerAge = customerAge;
//     }
// }
class Customer {
  constructor(id, name, surname, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
}
const customerFromClass = new Customer(1, "Mehmet", "Kara", 30);
customerFromClass.name = "Mehmet";

// ====================================================================================================

// utils.js
// function createFileLogger(folderPath){
//     folderPath = folderPath ?? "./logs";
//     const fileLogger = new FileLogger();
//     fileLogger.folderPath = folderPath;
//     return fileLogger;
// }

function createFileLogger(folderPath = "./logs") {
  const fileLogger = new FileLogger();
  fileLogger.folderPath = folderPath;
  return fileLogger;
}

// a.js
createFileLogger();

// ====================================================================================================

// function createJsonLogger(jsonFileName){
//     let jsonFilePath;
//     if(jsonFileName){
//         jsonFilePath = `./logs/${jsonFileName}`;
//     } else {
//         jsonFilePath = "./logs/log.json";
//     }

//     let jsonFilePath = jsonFileName ? `./logs/${jsonFileName}` : "./logs/log.json";
// }

function createJsonLogger(jsonFileName) {
  // "log.json" betiği bir konfigürasyon dosyasından geliyorsa bu şekilde kullanılabilir.
  let jsonFilePath = `./logs/${jsonFileName ?? "log.json"}`;
}

function createJsonLogger(jsonFileName = "log.json") {
  // Sabit ise varsayılan parametre değeri geçilebilir.
  let jsonFilePath = `./logs/${jsonFileName}`;
}

// ====================================================================================================

//#endregion Değişkenler

//#region Fonksiyonlar

// function createMenu(title, body, buttonText, cancellable){
//     // Do something
// }
// createMenu("Menu Başlığı", "Menu İçeriği", "Tamam", true);

// Positinal Parameters
// function createMenu(title, body, buttonText, buttonColor, cancellable){
//     // Do something
// }
// createMenu("Menu Başlığı", "Menu İçeriği", "Tamam", true); // Bu şekilde kullanıldığında cancellable parametresi undefined olacaktır.
// createMenu("Menu Başlığı", "Menu İçeriği", "Tamam", null, true); // Bu şekilde kullanıldığında cancellable parametresi undefined olacaktır.

// function createMenu(menuProperties){
//     // const title = menuProperties.title;
//     // const body = menuProperties.body;
//     // const buttonText = menuProperties.buttonText;
//     // const buttonColor = menuProperties.buttonColor;
//     // const cancellable = menuProperties.cancellable;

//     const {title, body, buttonText, buttonColor, cancellable} = menuProperties; // Destructuring
// }

// Named Parameters
function createMenu(
  documentElementId,
  {
    title,
    body,
    buttonText,
    buttonColor = "orange",
    buttonTextColor = "black",
    cancellable,
  }
) {
  // Craete menu to innerHTML of element that has documentElementId id.
}
createMenu("#sidebar", {
  buttonText: "Tamam",
  body: "Menu İçeriği",
  title: "Menu Başlığı",
  cancellable: true,
});
createMenu("#sidebar", {
  title: "Menu Başlığı",
  body: "Menu İçeriği",
  buttonText: "Tamam",
  buttonColor: "red",
  cancellable: true,
});

// Named Parameters özelliği olmayan veya havada obje üretemediğimiz dillerde (Örn. Java) bu şekilde kullanılabilir.
class MenuProperties {
  constructor(title, body, buttonText, buttonColor, cancellable) {
    this.title = title;
    this.body = body;
    this.buttonText = buttonText;
    this.buttonColor = buttonColor;
    this.buttonTextColor = isDarkColor(this.buttonColor) ? "white" : "black";
    this.cancellable = cancellable;
  }
}

const menuTitle = "Menu Başlığı";
const menuBody = "Menu İçeriği";
const menuButtonText = "Tamam";
const menuButtonColor = "red";
const menuCancellable = true;
const menuProperties = new MenuProperties(
  menuTitle,
  menuBody,
  menuButtonText,
  menuButtonColor,
  menuCancellable
);
createMenu("#sidebar", menuProperties);

// Angular üzerinde örnek

// Deprecated
// aService.add().subsribe((response)=>{ // Next // Success
//         console.log(response);
//     }, (error)=>{ // Error
//         console.log(error);
//     },
//     ()=>{ // Completed
//         console.log("İşlem tamamlandı.");
//     }
// )

// aService.add().subsribe((response)=>{ // Next // Success
//     console.log(response);
//     }, null,
//     ()=>{ // Completed
//         console.log("İşlem tamamlandı.");
//     }
// )

// New
aService.add().subsribe({
  next: (response) => {
    // Next // Success
    console.log(response);
  },
  completed: () => {
    // Completed
    console.log("İşlem tamamlandı.");
  },
});

// TypeScript üzerinde örnek
// function createMenuInTypeScript(
//     documentElementId: string,
//     {title, body, buttonText, buttonColor = 'orange', cancellable}
//         : {title: string, body: string, buttonText: string, buttonColor?: string|null, cancellable: boolean})
// {
// }

// interface MenuProperties {
//     title: string,
//     body: string,
//     buttonText: string,
//     buttonColor?: string|null,
//     cancellable: boolean
// }
// function createMenuInTypeScript(
//     documentElementId: string,
//     {title, body, buttonText, buttonColor = 'orange', cancellable}: MenuProperties)
// {
// }

// ====================================================================================================

class User {
  constructor(userId, email, active, lastLoggedIn) {
    this.userId = userId;
    this.email = email;
    this.active = active;
    this.lastLoggedIn = lastLoggedIn;
  }
}
class Customer extends User {
  constructor(customerId, userId, email, active) {
    super(userId, email, active);
    this.customerId = customerId;
  }
}
class Manager extends User {
  constructor(managerId, userId, email, active) {
    super(userId, email, active);
    this.managerId = managerId;
  }
}
// function sendEmailToCustomers(customers, emailContent) {
//   customers.forEach((customer) => {
//     if (customer.active) {
//       const user = HttpClient.get(`/users/getbyid/${customer.userId}`);
//       const connection = {
//         host: env.get("host"),
//         port: env.get("port"),
//         username: env.get("userName"),
//         password: env.get("password"),
//       };
//       EmailClient.connect(connection);
//       const emailContent = { subject: "İndirim var koşun", body: emailContent };
//       EmailClient.sendEmail(user.email, emailContent);
//       EmailClient.disconnect();
//     }
//   });
// }
// const onSaleEmailContent = "Şu şu şu üründe indirim var.";

// function sendEmailToManagers(managers, emailContent) {
//   customers.forEach((customer) => {
//     if (customer.active) {
//       const user = HttpClient.get(`/users/getbyid/${customer.userId}`);
//       const connection = {
//         host: env.get("host"),
//         port: env.get("port"),
//         username: env.get("userName"),
//         password: env.get("password"),
//       };
//       EmailClient.connect(connection);
//       const emailContent = {
//         subject: "Genel şirket içi duyuru var koşun",
//         body: emailContent,
//       };
//       EmailClient.sendEmail(user.email, emailContent);
//       EmailClient.disconnect();
//     }
//   });
// }
// const generalAnnouncementEmailContent = "Şirket içi duyuru var.";

function sendEmailToUsers(users, { subject, content }) {
  users.filter(isUserActive).forEach((user) => {
    const user = getUserById(user.id);
    const emailContent = { subject: subject, body: content };
    sendEmail({ email: user.email, emailContent });
  });
}

function isUserActive(user) { // Her zaman pozitif ifade içeren ve yaklaşımı sergileyen fonksiyonlar hazırlayın.
  return user.active || user.lastLoggedIn > moment().subtract(5, "years");
}

function getUserById(userId) {
  return HttpClient.get(`/users/getbyid/${userId}`);
  // user.id;
}

function sendEmail({ email, subject, body }) {
  const configuration = getEmailConfiguration();
  EmailClient.connect(configuration);
  const emailContent = {
    subject: subject,
    body: body,
  };
  EmailClient.sendEmail(email, emailContent);
  EmailClient.disconnect();
}

function getEmailConfiguration() {
  return {
    host: env.get("host"),
    port: env.get("port"),
    username: env.get("userName"),
    password: env.get("password"),
  };
}

// ====================================================================================================

// function isUserInactive(user) { // Negatif ifadelerden kaçının.
//   return !user.active || user.lastLoggedIn < moment().subtract(5, "years");
// }

function isUserActive(user) { // Her zaman pozitif ifade içeren ve yaklaşımı sergileyen fonksiyonlar hazırlayın.
  return user.active || user.lastLoggedIn > moment().subtract(5, "years");
}

if (isUserActive(user)) {}
if (!isUserActive(user)) {}

// ====================================================================================================

const nameInput = "Ahmet Çetinkaya";

// function convertToLastName(){
//   nameInput = nameInput.split(" ")[1]; // Fonksiyon içerisinde yapılan işlemlerler, kapsam (scope) dışına çıkmaması, etkilememesi gerekir.
// }

// convertToLastName();
// //...
// console.log(`Hoşgeldin ${nameInput}`);

function splitToFirstNameAndLastName(nameInput) {
  // nameInput = name.toUpperCase(); // Parameterleri fonksiyon içerisinde hiçbir zaman set etmememiz gerekir.
  const nameInputUpperCase = nameInput.toUpperCase(); // Yeni değişkende yeni değeri veya yeni referansı!!! tutmamız gerekir.
  return nameInputUpperCase.split(" ");
}
const [firstName, lastName] = splitToFirstNameAndLastName(nameInput);

// JavaScript üzerinde var olan örnek
const letters = ["a", "b"];

// const upperCaseLetters = [];
// for (let i = 0; i < letters.length; i++) {
//   const item = letters[i];
//   const newItem = item.toUpperCase();
//   upperCaseLetters.push(newItem);
// } // Hard code yazmak yerine built-in metotları kullanın.
const upperCaseLetters = letters.map((item) => item.toUpperCase()); // Yeni üretilen değerler her zaman yeni değişkenlerde tutulmalıdır.

console.log(letters); // ["a","b"]
console.log(upperCaseLetters); // ["A","B"]

// JS'de bulunan map fonksiyonunu kendimiz yazsaydık:
// function mapCustom(
//   array, // 0x0001
//   callBack
// ) {
//   const newArray = []; // 0x0002 // Bir referans değerinden üretilen yeni değerler her zaman yeni referans oluşturulup tutulmalıdır.
//   for (let i = 0; i < array.length; i++) {
//     const itemValue = array[i];
//     const newItemValue = callBack(itemValue);
//     newArray.push(newItemValue);
//   }
//   return newArray; // 0x0002
// }

// ====================================================================================================


//#endregion Fonksiyonlar
