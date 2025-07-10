# Lab: SOLID Principles & Creational Design Patterns

## Part 1: SOLID Principles

### 1. Single Responsibility Principle (SRP)

❌ **Bad Example:**
```js
class Report {
  constructor(data) {
    this.data = data;
  }

  generateReport() {
    // logic to generate report
  }

  saveToPDF() {
    // logic to export report to PDF
  }
}
```

✅ **Your Task:** Refactor the above example to follow SRP. Split responsibilities into separate classes.
```js
// TODO: create a Report class that handles only report generation

// TODO: create a PDFExporter class that handles exporting logic
```

---

### 2. Open/Closed Principle (OCP)

❌ **Bad Example:**
```js
class ShapeDrawer {
  draw(shape) {
    if (shape.type === 'circle') {
      // draw circle
    } else if (shape.type === 'square') {
      // draw square
    }
  }
}
```

✅ **Your Task:** Refactor using polymorphism so `ShapeDrawer` can be extended without modifying existing code.
```js
// TODO: create a Shape interface with draw method

// TODO: implement Circle and Square classes

// TODO: ShapeDrawer should call draw method of given shape
```

---

### 3. Liskov Substitution Principle (LSP)

❌ **Bad Example:**
```js
class Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}

class Bicycle extends Vehicle {}

const bike = new Bicycle();
bike.startEngine(); // ❌ Bicycles don’t have engines
```

✅ **Your Task:** Fix the violation by creating a better hierarchy.
```js
// TODO: separate classes for EngineVehicle and NonEngineVehicle
```

---

### 4. Interface Segregation Principle (ISP)

❌ **Bad Example:**
```js
class Printer {
  print() {}
  scan() {}
  fax() {}
}

class BasicPrinter extends Printer {
  fax() {
    throw new Error("Not supported");
  }
}
```

✅ **Your Task:** Refactor into smaller interfaces.
```js
// TODO: create separate interfaces for Print, Scan, Fax

// TODO: implement only what is needed in BasicPrinter
```

---

### 5. Dependency Inversion Principle (DIP)

❌ **Bad Example:**
```js
class FileLogger {
  log(msg) {
    console.log("Log to file: " + msg);
  }
}

class App {
  constructor() {
    this.logger = new FileLogger();
  }

  run() {
    this.logger.log("Running...");
  }
}
```

✅ **Your Task:** Refactor so App depends on abstraction.
```js
// TODO: create Logger interface

// TODO: App should accept Logger as constructor dependency
```

---

## Part 2: Creational Design Patterns Lab

### 1. Singleton Pattern

🧪 **Task:** Implement a singleton for configuration settings.
```js
// TODO: Create a Config class that always returns the same instance

// Usage Example:
// const config1 = Config.getInstance();
// const config2 = Config.getInstance();
// console.log(config1 === config2); // true
```

---

### 2. Factory Pattern

🧪 **Task:** Create a NotificationFactory that returns `EmailNotification`, `SMSNotification`, or `PushNotification` based on input.
```js
// TODO: Define Notification interface with send method

// TODO: Implement EmailNotification, SMSNotification, PushNotification

// TODO: Implement NotificationFactory.create(type)

// Example:
// const notification = NotificationFactory.create("email");
// notification.send("Hello!");
```

---

### 3. Builder Pattern

🧪 **Task:** Implement a simple HTMLBuilder to build a UI card.
```js
// TODO: create HTMLBuilder class with chainable methods to set title, image, description, etc.

// Usage Example:
// const card = new HTMLBuilder()
//   .setTitle("My Card")
//   .setImage("url.jpg")
//   .setDescription("This is a card.")
//   .build();

// console.log(card);
```

---

✅ **Deliverables:**
- Refactored code examples for each SOLID principle
- Working implementations of Singleton, Factory, and Builder
- Submit screenshots or code snippets of your solutions

🧠 **Tip:** Follow clean code practices — one class, one responsibility!
