// #1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣ 🧪 Adapter Pattern Lab - Document Viewer

class PDFViewer {
    viewPDF(filename) {
        console.log(`Viewing PDF document: ${filename}`);
    }
}

class WordViewer {
    viewDOCX(filename) {
        console.log(`Viewing Word document: ${filename}`);
    }
}

class TextViewer {
    viewTXT(filename) {
        console.log(`Viewing Text document: ${filename}`);
    }
}

class DocumentAdapter {
    constructor() {
        this.pdfViewer = new PDFViewer();
        this.wordViewer = new WordViewer();
        this.textViewer = new TextViewer();
    }

    view(filename) {
        if (filename.endsWith(".pdf")) {
            this.pdfViewer.viewPDF(filename);
        }
        else if (filename.endsWith(".docx")) {
            this.wordViewer.viewDOCX(filename);
        }
        else if (filename.endsWith(".txt")) {
            this.textViewer.viewTXT(filename);
        }
        else {
            console.log("Enter a valid document type");
        }
    }
}

const viewer = new DocumentAdapter();
viewer.view("file.docx");
viewer.view("file.pdf");
viewer.view("file.txt");

console.log("=====================================");
console.log("=====================================");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// #2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣ 🚀 Bridge Pattern Lab – Vehicle Control System

class ControlMethod {
    drive() {
    }
}

class ManualControl extends ControlMethod {
    drive() {
        console.log("it's a manual vehicle");
    }
}

class AutomaticControl extends ControlMethod {
    drive() {
        console.log("it's an automatic vehicle");
    }
}

class Vehicle {
    constructor(controlMethod) {
        this.controlMethod = controlMethod;
    }

    drive() {
        this.controlMethod.drive();
    }
}

class Car extends Vehicle {

}

class Bike extends Vehicle {
}

const car1 = new Car(new ManualControl());
car1.drive();


const bike1 = new Bike(new AutomaticControl());
bike1.drive();

console.log("=====================================");
console.log("=====================================");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// # 3️⃣3️⃣3️⃣3️⃣3️⃣3️⃣ Lab: Build a Customizable Pizza Ordering System (Decorator Pattern)

class Pizza {
    getDescription() {
        return `description`;
    }

    cost() {
        return 0;
    }
}

class Margherita extends Pizza {
    getDescription() {
        return "Margherita Pizza";
    }

    cost() {
        return 8;
    }
}

class PizzaDecorator extends Pizza {
    constructor(pizza) {
        super();
        this.pizza = pizza;
    }

    getDescription() {
        return this.pizza.getDescription();
    }

    cost() {
        return this.pizza.cost();
    }
}

class Cheese extends PizzaDecorator {
    getDescription() {
        return this.pizza.getDescription() + ", Cheese";
    }

    cost() {
        return this.pizza.cost() + 2;
    }
}

class Olives extends PizzaDecorator {
    getDescription() {
        return this.pizza.getDescription() + ", Olives";
    }

    cost() {
        return this.pizza.cost() + 1.5;
    }
}

class Mushrooms extends PizzaDecorator {
    getDescription() {
        return this.pizza.getDescription() + ", Mushrooms";
    }

    cost() {
        return this.pizza.cost() + 1;
    }
}

let myPizza = new Margherita();
myPizza = new Cheese(myPizza);
myPizza = new Olives(myPizza);
myPizza = new Mushrooms(myPizza);

console.log(myPizza.getDescription());
console.log(myPizza.cost());

console.log("=====================================");
console.log("=====================================");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// #4️⃣4️⃣4️⃣4️⃣4️⃣ 🧪 Lab: Implementing an Online Shopping Checkout System Using the **Facade Pattern**

class PaymentService {
    processPayment(order) {
        console.log(`Processing payment for ${order.id}`);
        return true;
    }
}

class InventoryService {
    updateInventory(order) {
        console.log(`Updating inventory for ${order.items.length} items`);
    }
}

class NotificationService {
    sendNotification(user, message) {
        console.log(`Notify ${user}: ${message}`);
    }
}

class LoggingService {
    logTransaction(order) {
        console.log(`Logging order ${order.id}`);
    }
}

class CheckoutService {
    constructor() {
        this.payment = new PaymentService();
        this.inventory = new InventoryService();
        this.notification = new NotificationService();
        this.logger = new LoggingService();
    }

    checkout(order) {
        if (!order || !order.user || !order.items.length) {
            console.log("Invalid order");
            return;
        }
        else if (this.payment.processPayment(order)) {
            this.inventory.updateInventory(order);
            this.notification.sendNotification(order.user, "Your order is ready");
            this.logger.logTransaction(order);
        }
    }
}


const checkoutService = new CheckoutService();
const order = { id: "123", user: "Shahenda", items: ["item1", "item2"] };
checkoutService.checkout(order);

console.log("=====================================");
console.log("=====================================");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// # 5️⃣5️⃣5️⃣5️⃣5️⃣5️⃣ Observer Pattern Lab

class Device {
    constructor(name) {
        this.name = name;
    }
    update(temp, humidity) {
        console.log(`${this.name}: Temperature is ${temp}°C, Humidity is ${humidity}%`);
    }
}

class WeatherStation {
    constructor() {
        this.devices = [];
    }
    subscribe(device) {
        this.devices.push(device);
    }
    unsubscribe(device) {
        this.devices = this.devices.filter(d => d !== device);
    }
    notify(temp, humidity) {
        console.log("Weather Station: New weather data received!");
        this.devices.forEach(d => d.update(temp, humidity));
    }
}


const station = new WeatherStation();
const phone = new Device("Phone");
const tablet = new Device("Tablet");
const home = new Device("SmartHome");

station.subscribe(phone);
station.subscribe(tablet);
station.subscribe(home);

station.notify(30, 60);

console.log("=====================================");
console.log("=====================================");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// # 6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣ State Pattern Lab: Traffic Light

class TrafficLight {
    constructor() {
        this.state = new RedState(this);
    }

    setState(state) {
        this.state = state;
    }

    change() {
        this.state.handle();
    }
}

class RedState {
    constructor(light) {
        this.light = light;
    }
    handle() {
        console.log("Red > Green");
        this.light.setState(new GreenState(this.light));
    }
}

class GreenState {
    constructor(light) {
        this.light = light;
    }
    handle() {
        console.log("Green > Yellow");
        this.light.setState(new YellowState(this.light));
    }
}

class YellowState {
    constructor(light) {
        this.light = light;
    }
    handle() {
        console.log("Yellow > Red");
        this.light.setState(new RedState(this.light));
    }
}

const trafficLight = new TrafficLight();

trafficLight.change();
trafficLight.change();
trafficLight.change();
trafficLight.change();


console.log("=====================================");
console.log("=====================================");
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// # 7️⃣7️⃣7️⃣7️⃣7️⃣7️⃣7️⃣7️⃣ Strategy Pattern Lab: Sorting Algorithm Selection

class SortingStrategy {
    sort(arr) {
    }
}

class BubbleSort extends SortingStrategy {
    sort(arr) {
        const a = [...arr];
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < a.length - i - 1; j++) {
                if (a[j] > a[j + 1]) {
                    [a[j], a[j + 1]] = [a[j + 1], a[j]];
                }
            }
        }
        console.log("Bubble Sort:", a);
        return a;
    }
}

class QuickSort extends SortingStrategy {
    sort(arr) {
        if (arr.length < 2) return arr;
        const [pivot, ...rest] = arr;
        const left = rest.filter(x => x < pivot);
        const right = rest.filter(x => x >= pivot);
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}

class MergeSort extends SortingStrategy {
    sort(arr) {
        if (arr.length < 2) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = this.sort(arr.slice(0, mid));
        const right = this.sort(arr.slice(mid));
        const merged = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) merged.push(left[i++]);
            else merged.push(right[j++]);
        }
        return [...merged, ...left.slice(i), ...right.slice(j)];
    }
}

class Sorter {
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    sort(arr) {
        return this.strategy.sort(arr);
    }
}

const sorter = new Sorter();
sorter.setStrategy(new BubbleSort());
sorter.sort([5, 3, 8, 1, 2]);
sorter.setStrategy(new QuickSort());
console.log("Quick Sort:", sorter.sort([5, 3, 8, 1, 2]));
sorter.setStrategy(new MergeSort());
console.log("Merge Sort:", sorter.sort([5, 3, 8, 1, 2]));
