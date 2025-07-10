// ## Part 1: SOLID Principles

// ### 1. Single Responsibility Principle (SRP)

// TODO: create a Report class that handles only report generation
// TODO: create a PDFExporter class that handles exporting logic

class GenerateReport {
    constructor(data) {
        this.data = data;
    }

    generateReport() {
        console.log(`The data of the report is: ${this.data}`);
    }
}

class PDFExporter {
    constructor(data) {
        this.data = data;
    }

    exportToPDF() {
        console.log(`Exporting the report to PDF with data: ${data}`);
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ### 2. Open/Closed Principle (OCP)


// // TODO: create a Shape interface with draw method
// // TODO: implement Circle and Square classes
// // TODO: ShapeDrawer should call draw method of given shape

class Shape {
    draw() {
    }
}

class ShapeDrawer {
    draw(shape) {
        shape.draw();
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ### 3. Liskov Substitution Principle (LSP)

// TODO: separate classes for EngineVehicle and NonEngineVehicle

class Vehicle {
    Vehicle() {
        console.log("it's a vehicle");
    }
}

class EngineVehicle extends Vehicle {
    startEngine() {
        console.log("Engine started");
    }
}

class NonEngineVehicle extends Vehicle {
    notEngine() {
        console.log("it doesn't have an engine");
    }
}

const car = new EngineVehicle();
const bike = new NonEngineVehicle();


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ### 4. Interface Segregation Principle (ISP)

// TODO: create separate interfaces for Print, Scan, Fax
// TODO: implement only what is needed in BasicPrinter

class Print {
    print() {
    }
}

class Scan {
    scan() {
    }
}

class Fax {
    fax() {
    }
}

class BasicPrinter extends Print {

}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ### 5. Dependency Inversion Principle (DIP)

// TODO: create Logger interface
// TODO: App should accept Logger as constructor dependency

class Logger {
    log(msg) {
    }
}

class FileLogger extends Logger {
    log(msg) {
        console.log("");
    }
}

class App {
    constructor(logger) {
        this.logger = logger;
    }

    run() {
        this.logger.log("");
    }
}

const logger = new FileLogger();
const app = new App(logger);
app.run();

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// ## Part 2: Creational Design Patterns Lab

// ### 1. Singleton Pattern

// Usage Example:
// // const config1 = Config.getInstance();
// // const config2 = Config.getInstance();
// // console.log(config1 === config2); // true

class Config {
    constructor() {
        if (Config.instance) {
            return Config.instance;
        }
        this.settings = [];
        Config.instance = this;
    }

    static getInstance() {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }
}

const config1 = Config.getInstance();
const config2 = Config.getInstance();

console.log(config1 === config2);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ### 2. Factory Pattern

// 🧪 **Task:** Create a NotificationFactory that returns `EmailNotification`, `SMSNotification`, or `PushNotification` based on input.

// TODO: Define Notification interface with send method

// TODO: Implement EmailNotification, SMSNotification, PushNotification

// TODO: Implement NotificationFactory.create(type)

// Example:
// const notification = NotificationFactory.create("email");
// notification.send("Hello!");


class Notification {
    send(msg) {

    }
}

class EmailNotification extends Notification {
    send(msg) {
        console.log("Sending Email:", msg);
    }
}

class SMSNotification extends Notification {
    send(msg) {
        console.log("Sending SMS:", msg);
    }
}

class PushNotification extends Notification {
    send(msg) {
        console.log("Sending Push Notification:", msg);
    }
}

function NotificationFactory(type) {
    switch (type) {
        case "email":
            return new EmailNotification();
        case "sms":
            return new SMSNotification();
        case "push":
            return new PushNotification();
        default:
            throw new Error("Invalid notification type");
    }
}

const notification = NotificationFactory("email");
notification.send("Hello!");

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ### 3. Builder Pattern

// 🧪 **Task:** Implement a simple HTMLBuilder to build a UI card.

// TODO: create HTMLBuilder class with chainable methods to set title, image, description, etc.

// Usage Example:
// const card = new HTMLBuilder()
//   .setTitle("My Card")
//   .setImage("url.jpg")
//   .setDescription("This is a card.")
//   .build();

// console.log(card);

class HTMLBuilder {

    setTitle(title) {
        this.title = title;
        return this;
    }

    setImage(image) {
        this.image = image;
        return this;
    }

    setDescription(description) {
        this.description = description;
        return this;
    }

    build() {
        return `
        <div >
          <h1>${this.title}</h1>
          <img src="${this.image}" alt="${this.title}">
          <p>${this.description}</p>
        </div>
      `;
    }
}

const card = new HTMLBuilder()
    .setTitle("My Card")
    .setImage("A_cartoon_style_image_of_four_diverse_students_standing_together_They_are_smiling_and_dressed_in_casual_clothing_The_first_student_is_wearing_a_green_shirt_and_holding_a_laptop_The_second_student_has_glasses_a_black_shirt_and_is_holding_boo.png")
    .setDescription("This is a card.")
    .build();

console.log(card);
document.body.innerHTML += card;

