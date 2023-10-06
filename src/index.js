//#region Değişkenler

// const ddmmyy = moment() // Date type'lar üzerinde ekstra özellikler getiren bir kütüphane. Bu ders için önemli değil.
//             .format('DD/MM/YYYY') // Tarih formatı

const DD_MM_YYYY = "DD/MM/YYYY";
const currentDate = moment() // Date type'lar üzerinde ekstra özellikler getiren bir kütüphane. Bu ders için önemli değil.
  .format(DD_MM_YYYY); // Tarih formatı

// ====================================================================================================

// const user = { name: "mehmet" };

// // a.js
// // getUserName(user);
// // b.js
// // getClientName(user);

// // a.js b.js
// getUserName(user);

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

// class User {
//   constructor(userId, email, active, lastLoggedIn) {
//     this.userId = userId;
//     this.email = email;
//     this.active = active;
//     this.lastLoggedIn = lastLoggedIn;
//   }
// }
// class Customer extends User {
//   constructor(customerId, userId, email, active) {
//     super(userId, email, active);
//     this.customerId = customerId;
//   }
// }
// class Manager extends User {
//   constructor(managerId, userId, email, active) {
//     super(userId, email, active);
//     this.managerId = managerId;
//   }
// }
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

function isUserActive(user) {
  // Her zaman pozitif ifade içeren ve yaklaşımı sergileyen fonksiyonlar hazırlayın.
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

function isUserActive(user) {
  // Her zaman pozitif ifade içeren ve yaklaşımı sergileyen fonksiyonlar hazırlayın.
  return user.active || user.lastLoggedIn > moment().subtract(5, "years");
}

if (isUserActive(user)) {
}
if (!isUserActive(user)) {
}

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

//#region Nesneler ve Veri Yapıları

class User {
  constructor(userId, email) {
    this.__userId = userId;
    this.__email = email;
  }

  // get userId() {
  //   return this.__userId;
  // }
  getUserId() {
    return this.__userId;
  }

  // set userId(value) {
  //   this.__userId = value;
  // }
  // setUserId(value) {
  //   this.__userId = value;
  // }

  getEmail() {
    // Ek işlemler yapılabilir. Logging, Caching vb.
    return this.__email;
  }

  setEmail(value) {
    // Validation ve ek işlemler yapılabilir. Logging, Caching vb.
    if (!value) throw new Error("Email boş olamaz.");
    if (isEmailValid(value)) throw new Error("Email geçerli değil.");

    this.__email = value;
  }
}

function isEmailValid(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

const userId = 1;
const email = "example@email.com";
const user = new User(userId, email);
user.setEmail("example2email.com");

// user.userId = 2;
// user.getUserId();
console.log(user.getUserId());
console.log(user.getEmail());
// user.setUserId(2);

// ====================================================================================================

// Fluent
// "String".toLowerCase().replace("s", "S").toUpperCase().trim();

class Car {
  constructor(){
  }

  constructor(brand, model, color){
    this.__brand = brand;
    this.__model = model;
    this.__color = color;
  }

  getBrand(){
    return this.__brand;
  }
  setBrand(value){
    this.__brand = value;

    return this;
  }

  getModel(){
    return this.__model;
  }
  setModel(value){
    this.__model = value;

    return this;
  }

  getColor(){
    return this.__color;
  }
  setColor(value){
    this.__color = value;
    
    return this;
  }
  
  save() {
    console.log("Saved.", this.__brand, this.__model, this.__color);

    return { delete: this.delete, cache: this.cache };
  }

  cache(){
    console.log("Cached.", this.__brand, this.__model, this.__color);

    return this;
  }

  delete(){
    console.log("Deleted.", this.__brand, this.__model, this.__color);

    return { revert: this.revert };
  }

  revert(){
    console.log("Reverted.", this.__brand, this.__model, this.__color);

    return this;
  }
}

// const carBrand = "BMW",
//   carModel = "3.20i",
//   carColor = "Blue";
// const car = new Car(carBrand, carModel, carColor);

const car = new Car();
const cacheFunction = car.setBrand("BMW")
                         .setModel("3.20i")
                         .setColor("Blue")
                         .save()
                         .cache();

//#endregion Nesneler ve Veri Yapıları



//#region SOLID

//# Tek Sorumluluk Prensibi - Single Responsibility Principle
// 402. satırdaki "sendEmailToUsers" fonksiyonu ve beraberinde üretilen fonkisyonlar buna örnek gösterilebilir.

//# Açık Kapalı Prensibi - Open Closed Principle
// class Adapter {
//   constructor(){}
// }

// class AjaxAdapter extends Adapter {
//   constructor() {
//     super();
//     this.__name = "Ajax Adapter";
//   }

//   getName(){
//     return this.__name;
//   }
// }

// class NodeAdapter extends Adapter {
//   constructor() {
//     super();
//     this.__name = "Node Adapter";
//   }

//   getName(){
//     return this.__name;
//   }
// }

// class AxiosAdapter extends Adapter { // Yeni bir adapter eklemek istediğimizde, mevcut kodlara dokunmamamız gerekir.
//   constructor() {
//     super();
//     this.__name = "Axios Adapter";
//   }

//   getName(){
//     return this.__name;
//   }
// }

// class HttpClient {
//   constructor(adapter){
//     this.__adapter = adapter;
//   }
  
//   fetch(url){
//     if(this.__adapter.getName() == "Ajax Adapter"){
//       console.log("Ajax ile istek atıldı.");
//     } else if(this.__adapter.getName() == "Node Adapter"){
//       console.log("Node ile istek atıldı.");
//     } else if(this.__adapter.getName() == "Axios Adapter"){ // Bu noktada değişiklik yapmamız gerekiyor.
//       console.log("Axios ile istek atıldı.");
//     }
//   }
// }

class HttpAdapter {
  constructor(name){
    this.__name = name;
    establishConnection();
  }

  getName(){
    return this.__name;
  }

  establishConnection(){
    console.log("Connection established.");
  }

  sendGetRequest(url) {
    throw new Error("Not implemented.");
  }
}

class AjaxAdapter extends HttpAdapter {
  constructor() {
    const name = "Ajax Adapter";
    super(name);
  }

  sendGetRequest(url){ // Overriding
    console.log("Ajax ile istek atıldı.", url);
  }
}

class NodeAdapter extends HttpAdapter {
  constructor() {
    const name = "Node Adapter";
    super(name);
  }

  sendGetRequest(url){ // Overriding
    console.log("Node ile istek atıldı.", url);
  }
}

class AxiosAdapter extends HttpAdapter {
  constructor() {
    const name = "Axios Adapter";
    super(name);
  }

  sendGetRequest(url){ // Overriding
    console.log("Axios ile istek atıldı.", url);
  }
}

class HttpClient {
  constructor(httpAdapter){
    this.__httpAdapter = httpAdapter;
  }
  
  fetch(url){
    return this.__httpAdapter.sendGetRequest(url);
  }
}

// inversionOfControl.js
const httpAdapter = new AxiosAdapter();

// a.js
const httpClient = new HttpClient(httpAdapter);
httpClient.fetch("https://www.google.com");

//# Liskov Ayrım Prensibi - Liskov Substitution Principle
class User {
  constructor(userId, email, active, lastLoggedIn) {
    this.__userId = userId;
    this.__email = email;
    this.__active = active;
    this.__lastLoggedIn = lastLoggedIn;
  }
}

class Customer extends User {
  constructor(userId, email, active, customerId) {
    super(userId, email, active);
    this.__customerId = customerId;
  }
}

class IndividualCustomer extends Customer {
  constructor(userId, email, active, customerId, firstName, lastName, nationalIdentityNumber) {
    super(userId, email, active, customerId);
    this.__firstName = firstName;
    this.__lastName = lastName;
    this.__nationalIdentityNumber = nationalIdentityNumber;
  }
}

class CorparateCustomer extends Customer {
  constructor(userId, email, active, customerId, companyName, taxNumber) {
    super(userId, email, active, customerId);
    this.__companyName = companyName;
    this.__taxNumber = taxNumber;
  }
}

class Manager extends User {
  constructor(managerId, userId, email, active) {
    super(userId, email, active);
    this.managerId = managerId;
  }
}

// Arayüzlerin Ayrımı Prensibi - Interface Segratation Principle
// Angular üzerinde örnek
interface OnInit {
  ngOnInit(): void;
}
interface OnChanges {
  ngOnChanges(): void;
}
interface OnDestroy {
  isDestroyed: boolean; // Daha sonra eklenen bir özellik.

  ngOnDestroy(): void;
}
class SideBarMenuComponent implements OnInit, OnChanges, OnDestroy {
  isDestroyed: boolean;

  ngOnInit(){
  }

  ngOnChanges(){
  }

  ngOnDestroy(){
  }
}

class NavigationBarMenuComponent implements OnInit, OnChanges, OnDestroy {
  isDestroyed: boolean;

  ngOnInit(){
  }

  ngOnChanges(){
  }

  ngOnDestroy(){
  }
}

function checkIfComponentsIsDestroyed(requestedToDestoryComponents: OnDestroy[]){
  requestedToDestoryComponents.forEach(component => {
    if(!component.isDestroyed)
      component.ngOnDestroy();
  });
}

const requestedToDestoryComponent1 : OnDestroy = new SideBarMenuComponent();
const requestedToDestoryComponent2 : OnDestroy = new NavigationBarMenuComponent();

const requestedToDestoryComponents : OnDestroy[] = [requestedToDestoryComponent1, requestedToDestoryComponent2];
checkIfComponentsIsDestroyed(requestedToDestoryComponents);

// Bağlılığı Tersine Çevirme Pensibi - Dependency Inversion Principle
// 754. satırda consturtor üzerinden farklı tip referansları enejkte edebiliriz, bakınız: 767. satır.

//#endregion SOLID