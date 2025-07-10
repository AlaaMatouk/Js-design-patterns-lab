#1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣1️⃣ 🧪 Adapter Pattern Lab - Document Viewer

## 🎯 Objective

In this lab, you'll implement the **Adapter Design Pattern** to allow viewing different document types (`.pdf`, `.docx`) using a unified interface.

## 📚 Scenario

You have an application that currently only supports viewing PDF files. Now, users want to also view Word (`.docx`) documents. However, you don't want to change the original PDF viewer code.

You'll solve this by using the Adapter Pattern!

## 🧱 Provided Classes

```javascript
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
```

## 🛠️ Your Task

1. Create a class `DocumentAdapter`.
2. Inside it, create instances of `PDFViewer` and `WordViewer`.
3. Implement a method `view(filename)` that:
   - Calls `viewPDF()` if the file ends with `.pdf`.
   - Calls `viewDOCX()` if the file ends with `.docx`.

## 🔍 Example Usage

```javascript
const viewer = new DocumentAdapter();
viewer.view("report.pdf"); // Output: Viewing PDF document: report.pdf
viewer.view("resume.docx"); // Output: Viewing Word document: resume.docx
```

## 🧠 Think About

- What happens if an unsupported file type is passed?
- How can you extend this later for `.txt`, `.pptx`, or `.xlsx`?

## 📐 Design Pattern

**Adapter Pattern** — allows incompatible interfaces to work together via an intermediary (`DocumentAdapter`).

## ✅ SOLID Principles Demonstrated

- **SRP**: Each viewer handles one format.
- **OCP**: Add more formats without modifying old code.
- **DIP**: The adapter depends on abstract behavior (viewing), not implementations.

## 🚀 Bonus Challenge

Add support for `.txt` files by creating a new class `TextViewer` and updating your adapter.

---

#2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣2️⃣ 🚀 Bridge Pattern Lab – Vehicle Control System

## 🎯 **Objective:**

Reinforce your understanding of the **Bridge Design Pattern** by building a simple vehicle control system that can work with different vehicle types (Car, Bike) and different driving methods (Manual, Automatic). The goal is to avoid creating separate classes for every possible combination of vehicle and driving method.

---

## 🧠 **Scenario:**

You are building a vehicle control system. The system should allow controlling vehicles with different types (e.g., **Car** and **Bike**) and different driving methods (e.g., **Manual** and **Automatic**).

Without using the Bridge Pattern, you might end up creating classes like:

- `CarManualControl`
- `CarAutomaticControl`
- `BikeManualControl`
- `BikeAutomaticControl`

Instead, by using the **Bridge Pattern**, we can avoid creating many classes and allow the system to be flexible.

---

## 🧱 **Challenge:**

1. **Control Method Layer**: Create a `ControlMethod` class to handle the control of the vehicle (e.g., **ManualControl**, **AutomaticControl**).
2. **Vehicle Layer**: Create a `Vehicle` class to define different types of vehicles (e.g., **Car**, **Bike**) that will use the control methods.
3. **Vehicle Control**: The vehicle should be able to drive with the selected control method.

---

## 🛠 **Requirements:**

1. Create a `ControlMethod` class with a `drive()` method. This should be implemented by subclasses like **ManualControl** and **AutomaticControl**.
2. Create a `Vehicle` class with a `drive()` method that uses the `ControlMethod` to control the vehicle.
3. You should be able to drive a vehicle using both **Manual** and **Automatic** control methods.

---

## ⚡️ **Guidelines:**

### 1. **Control Method Layer:**

Create a `ControlMethod` class with a `drive()` method. This method will be implemented in subclasses like **ManualControl** and **AutomaticControl**.

### 2. **Vehicle Layer:**

Create a `Vehicle` class that will have a `controlMethod` property to allow different types of control methods.

### 3. **Testing:**

Create instances of `Vehicle` and `ControlMethod` classes, and test driving a vehicle using **Manual** or **Automatic** control.

---

## 💡 **Notes:**

- Use the **Bridge Pattern** to separate the control method from the vehicle type, avoiding class explosion.
- Try to keep the system flexible for adding new control methods or vehicles in the future without modifying existing code.

---

## 🔧 **Concepts Used:**

- **Bridge Pattern**: Separates the abstraction (Vehicle) from the implementation (ControlMethod) so they can vary independently.
- **SOLID Principles**:
  - **SRP**: Each class has one responsibility (either vehicle or control method).
  - **OCP**: You can add new vehicles or control methods without modifying existing code.
  - **LSP**: You can replace any control method (ManualControl, AutomaticControl) without breaking functionality.
  - **DIP**: The high-level module (Vehicle) depends on the abstraction (ControlMethod), not on the concrete implementation (ManualControl, AutomaticControl).

---

# 3️⃣3️⃣3️⃣3️⃣3️⃣3️⃣ Lab: Build a Customizable Pizza Ordering System (Decorator Pattern)

## 🧱 Description

In this lab, you'll implement a pizza ordering system where customers can customize their pizza by adding extra toppings like Cheese, Olives, and Mushrooms.

This exercise demonstrates the **Decorator Design Pattern**, which allows behavior to be added to individual objects, dynamically, without modifying the original class.

---

## 🎯 Objective

- Understand how to implement and use the Decorator Pattern.
- Learn how to extend object behavior dynamically.
- Apply SOLID principles in practice.

---

## 📦 Step 1: Create the Base Component

- Create a `Pizza` class with the following methods:
  - `getDescription()`: Returns the description of the pizza.
  - `cost()`: Returns the base cost of the pizza.

---

## 🍕 Step 2: Create a Concrete Component

- Create a `Margherita` class that extends the `Pizza` class.
- Override the methods to return the description `"Margherita"` and the cost `8`.

---

## 🧩 Step 3: Create the Base Decorator

- Create a `PizzaDecorator` class that extends the `Pizza` class. It should:
  - Have a constructor that accepts a `Pizza` object and assigns it to a property.
  - The `getDescription()` and `cost()` methods should delegate to the wrapped `Pizza` object.

---

## 🧀 Step 4: Create Concrete Decorators

- Create decorators for each topping (e.g., `Cheese`, `Olives`, `Mushrooms`) that extend the `PizzaDecorator` class.
- Each decorator should:
  - Modify the `getDescription()` method to add the respective topping.
  - Modify the `cost()` method to add the cost of the topping:
    - Cheese: $2
    - Olives: $1.5
    - Mushrooms: $1

---

## 👨‍🍳 Step 5: Simulate a Client Order

- Create a `Margherita` pizza.
- Add multiple toppings in any combination: Cheese, Olives, Mushrooms.
- Print the final description and cost of the pizza.

---

## ✅ Design Pattern Used

### **Decorator Pattern**

> It allows dynamic addition of behavior to objects by wrapping them in decorator classes.

---

## 🔍 Applied SOLID Principles

| Principle | Application                                                                |
| --------- | -------------------------------------------------------------------------- |
| **SRP**   | Each class has a single responsibility (Pizza, Cheese, etc.)               |
| **OCP**   | You can add new toppings without modifying existing code                   |
| **LSP**   | Any topping can replace a `Pizza` object without breaking the code         |
| **DIP**   | Decorators depend on the `Pizza` abstraction, not specific implementations |

---

## 📝 Optional Challenge for Students

- Add a new topping decorator like `Pepperoni` or `ExtraSauce`.
- Create a new pizza base type like `PepperoniPizza` and test with different combinations.

---

#4️⃣4️⃣4️⃣4️⃣4️⃣ 🧪 Lab: Implementing an Online Shopping Checkout System Using the **Facade Pattern**

## 🧱 Description

In this lab, you will design a payment system for an e-commerce site using the **Facade Design Pattern**. The goal is to simplify the checkout process and integrate several services (such as payment verification, order processing, notifications, and inventory updates) using a unified interface that allows for completing all required tasks in one step.

### 🎯 Task

In this lab, you will create a single interface (`CheckoutService`) to coordinate the different operations that take place during the checkout process:

1. **Data Validation**
2. **Payment Processing**
3. **Inventory Update**
4. **Send Notification to User**
5. **Log Transaction**

---

## 📦 Step 1: Create the Subsystems

### 1.1 **Payment Service**

- This service will handle the payment processing by checking if the payment is valid and processing it.

### 1.2 **Inventory Service**

- This service will handle updating the inventory after an order is completed.

### 1.3 **Notification Service**

- This service will send notifications to the user after their order is processed.

### 1.4 **Logging Service**

- This service will log the transaction details for future reference.

---

## 🏗️ Step 2: Create the Facade

Create a unified facade (`CheckoutService`) that will simplify the interaction with all the above services.

---

## 🛍️ Step 3: Simulate the Checkout Process

Create an order and use the `CheckoutService` facade to process the order.

---

## ✅ Design Pattern Used

### **Facade Pattern**

- The **Facade Pattern** provides a unified interface to a set of interfaces in a subsystem. It defines a higher-level interface that makes the subsystem easier to use.

---

## 🔍 SOLID Principles Applied

| Principle | How It's Applied                                                                                          |
| --------- | --------------------------------------------------------------------------------------------------------- |
| **SRP**   | Each service (payment, inventory, notification) handles one responsibility.                               |
| **OCP**   | You can add new services (e.g., shipping service) without changing existing code.                         |
| **DIP**   | The facade depends on abstractions (e.g., `PaymentService`, `InventoryService`), not on concrete classes. |
| **LSP**   | You can replace any service (e.g., `NotificationService`) without affecting the facade.                   |

---

---

# 5️⃣5️⃣5️⃣5️⃣5️⃣5️⃣ Observer Pattern Lab

### 🎯 Problem:

You are building a weather tracking system, and you want to notify different devices (observers) when the weather changes (temperature, humidity, etc.).

Your system consists of a **WeatherStation** that reports data like temperature and humidity, and multiple **Devices** (e.g., mobile apps, smart home systems) that need to be notified whenever the weather changes.

You don't want the devices to be tightly coupled with the weather station, and you need an easy way to add/remove devices that should receive updates.

### ✅ Solution:

Use the **Observer Pattern** to decouple the weather station from the devices. The weather station (subject) will notify all registered devices (observers) whenever new weather data is available.

---

### ✨ Tasks:

1. **Create a `Device` class** that will act as the observer. Each device should have a name and an `update` method that accepts a temperature and humidity update from the weather station.

2. **Create a `WeatherStation` class** that acts as the subject. The weather station should:

   - Keep track of its list of devices (observers).
   - Provide methods to allow devices to `subscribe` and `unsubscribe`.
   - Have a method `notify` to inform all subscribed devices when there is a weather update.
   - Have a method `setWeatherData` to simulate a change in weather (e.g., new temperature and humidity), which will trigger the `notify` method.

3. **Client Code:**
   - Instantiate the weather station and several devices (observers).
   - Subscribe the devices to the weather station.
   - Simulate a weather update and see how all subscribed devices are notified.

---

### 📝 Expected Output:

If you subscribe three devices (e.g., a `Phone`, `Tablet`, and `SmartHome`) to the weather station and then simulate a weather update, the output should look something like:
Weather Station: New weather data received!
Phone: Temperature is 30°C, Humidity is 60%
Tablet: Temperature is 30°C, Humidity is 60%
SmartHome: Temperature is 30°C, Humidity is 60%

---

### 🔍 Design Pattern:

**Observer Pattern**: Allows an object (WeatherStation) to notify all dependent objects (Devices) when there is a change in the weather data.

---

### ✅ SOLID Principles Applied:

| Principle | How It's Applied                                                                                                                           |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **SRP**   | Each class has a single responsibility: `WeatherStation` manages the weather data and notifications, while `Device` handles notifications. |
| **OCP**   | You can add new types of devices (observers) without modifying the `WeatherStation` class.                                                 |
| **DIP**   | The `WeatherStation` depends on an abstraction of the `Device` (observer), not concrete implementations.                                   |
| **LSP**   | Any subclass of `Device` can be used without breaking the functionality of the `WeatherStation` class.                                     |

---

# 6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣ State Pattern Lab: Traffic Light

### 🎯 Problem:

You are tasked with implementing a **Traffic Light** system for a simple intersection. The traffic light has 3 states:

- **Red**: The traffic light is red, cars must stop.
- **Green**: The traffic light is green, cars can go.
- **Yellow**: The traffic light is yellow, warning cars to slow down.

The light should automatically switch between these states, but it should only allow transitions that make sense (i.e., Red -> Green, Green -> Yellow, Yellow -> Red).

You don’t want to use complex conditional statements to handle this logic. Instead, you will apply the **State Pattern** to manage the light's behavior depending on its current state.

### ✅ Solution:

Use the **State Pattern** to model the different states of the traffic light. Each state will have its own behavior for switching to the next state.

---

### ✨ Tasks:

1. **Create a `TrafficLight` class** that acts as the context, holding the current state and allowing transitions between states.
2. **Create a `LightState` interface** with methods for actions like `change()`. Each state (Red, Green, Yellow) will implement this interface.

3. **Create concrete state classes** for:

   - `RedState`: Represents the red light. When in this state, the light should transition to Green.
   - `GreenState`: Represents the green light. When in this state, the light should transition to Yellow.
   - `YellowState`: Represents the yellow light. When in this state, the light should transition to Red.

4. **Client Code**:
   - Instantiate the `TrafficLight` class and call the `change()` method to transition between states (Red -> Green -> Yellow -> Red).

---

### 📝 Expected Output:

If you run the following simulation:
Traffic light is Red.
Changing state...
Traffic light is Green.
Changing state...
Traffic light is Yellow.
Changing state...
Traffic light is Red.

The output should look like:

Traffic light is Red.
Changing state...
Traffic light is now Green.
Changing state...
Traffic light is now Yellow.
Changing state...
Traffic light is now Red

---

### 🔍 Design Pattern:

**State Pattern**: This pattern allows an object (in this case, the traffic light) to change its behavior when its internal state changes. The traffic light behaves differently depending on whether it's Red, Green, or Yellow.

---

### ✅ SOLID Principles Applied:

| Principle | How It's Applied                                                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------ |
| **SRP**   | Each state class (Red, Green, Yellow) has one responsibility: managing the behavior for that specific light. |
| **OCP**   | You can easily add more states in the future without changing existing code.                                 |
| **DIP**   | The `TrafficLight` depends on abstractions (states) rather than concrete classes.                            |
| **LSP**   | Each state can be substituted with another state without breaking the functionality.                         |

---

# 7️⃣7️⃣7️⃣7️⃣7️⃣7️⃣7️⃣7️⃣ Strategy Pattern Lab: Sorting Algorithm Selection

### 🎯 Problem:

You are developing an application that allows users to sort an array of numbers. The application should support multiple sorting algorithms, such as:

- Bubble Sort
- Quick Sort
- Merge Sort

The user should be able to select the sorting algorithm they want to use. However, the application should not use a lot of conditional statements or switch cases for selecting the algorithm.

You want to create a flexible design where the sorting algorithms can be changed or added without modifying the client code.

### ✅ Solution:

Use the **Strategy Pattern** to encapsulate the sorting algorithms. The user can select the sorting algorithm they want to use, and the application will perform the sorting using the selected strategy.

---

### ✨ Tasks:

1. **Create a `SortingStrategy` interface** with a method `sort(arr)` that takes an array and sorts it.
2. **Create concrete strategy classes** for:

   - `BubbleSort`: Sorts the array using the bubble sort algorithm.
   - `QuickSort`: Sorts the array using the quicksort algorithm.
   - `MergeSort`: Sorts the array using the merge sort algorithm.

3. **Create a `Sorter` context** that uses the selected sorting strategy to perform the sorting.

4. **Client Code**:
   - Instantiate the `Sorter` class and call the `sort()` method, selecting different sorting strategies as needed.

---

### 📝 Expected Output:

If you run the following simulation:

```js
const sorter = new Sorter();

sorter.setSortingStrategy(new BubbleSort());
sorter.sort([5, 3, 8, 1, 2]); // Bubble Sort: [1, 2, 3, 5, 8]

sorter.setSortingStrategy(new QuickSort());
sorter.sort([5, 3, 8, 1, 2]); // Quick Sort: [1, 2, 3, 5, 8]

sorter.setSortingStrategy(new MergeSort());
sorter.sort([5, 3, 8, 1, 2]); // Merge Sort: [1, 2, 3, 5, 8]

The output should look like:

Bubble Sort: [1, 2, 3, 5, 8]
Quick Sort: [1, 2, 3, 5, 8]
Merge Sort: [1, 2, 3, 5, 8]


Happy coding! 🎉
```
