# Dart

Developed by Google, Dart is an object-oriented, class-based language with C-style syntax. It can be transpiled to JavaScript and is used for building mobile and desktop web applications.

## SOLID Principles

### Single Responsibility Principle (SRP)

```dart
// Bad example: A class handling both user data management and user notifications
class User {
  void saveUserData() { /* ... */ }
  void sendNotification() { /* ... */ }
}

// Good example: Splitting responsibilities into separate classes
class UserDataManager {
  void saveUserData() { /* ... */ }
}

class UserNotification {
  void sendNotification() { /* ... */ }
}
```

### Open/Closed Principle (OCP)

```dart
// Bad example: Modifying existing code to add new functionality
class Rectangle {
  double width;
  double height;
  double computeArea() => width * height;
}

// Good example: Using abstraction to allow extension without modification
abstract class Shape {
  double computeArea();
}

class Circle extends Shape {
  double radius;
  @override
  double computeArea() => 3.14 * radius * radius;
}
```

### Liskov Substitution Principle (LSP)

```dart
// Bad example: Derived class changes the behavior of the base class
class Bird {
  void fly() { /* ... */ }
}

class Ostrich extends Bird {
  @override
  void fly() {
    throw Exception("Can't fly");
  }
}

// Good example: Derived classes maintain the behavior of the base class
class FlyingBird {
  void fly() { /* ... */ }
}

class NonFlyingBird {
  void walk() { /* ... */ }
}
```

### Interface Segregation Principle (ISP)

```dart
// Bad example: A bulky interface
abstract class Worker {
  void work();
  void eat();
}

// Good example: Segregated interfaces
abstract class Workable {
  void work();
}

abstract class Eatable {
  void eat();
}
```

### Dependency Inversion Principle (DIP)

```dart
// Bad example: High-level module depending on a low-level module
class LightBulb {
  void turnOn() { /* ... */ }
}

class Switch {
  final LightBulb bulb;
  Switch(this.bulb);
  void operate() {
    bulb.turnOn();
  }
}

// Good example: Both high-level and low-level modules depend on abstractions
abstract class Device {
  void turnOn();
}

class Fan implements Device {
  @override
  void turnOn() { /* ... */ }
}

class Switch {
  final Device device;
  Switch(this.device);
  void operate() {
    device.turnOn();
  }
}
```

## Other Principles

### DRY (Don't Repeat Yourself)

```dart
// Bad example: Repeated logic
double addTaxForFood(double price) {
  return price + (price * 0.05);
}

double addTaxForElectronics(double price) {
  return price + (price * 0.05);
}

// Good example: Single function for repeated logic
double addTax(double price, [double rate = 0.05]) {
  return price + (price * rate);
}
```

### KISS (Keep It Simple, Stupid)

```dart
// Bad example: Overcomplicated way to check even numbers
bool isEven(int num) {
  return num % num.abs() == 0;
}

// Good example: Simplified approach
bool isEven(int num) {
  return num % 2 == 0;
}
```

### YAGNI (You Aren't Gonna Need It)

```dart
// Bad example: Adding unnecessary features
class Car {
  void drive() { /* ... */ }
  void fly() { /* ... */ }  // Cars don't fly!
}

// Good example: Only implement what's needed
class Car {
  void drive() { /* ... */ }
}
```

### Law of Demeter (Principle of Least Knowledge)

```dart
// Bad example: Accessing nested structures directly
class Wallet {
  Money money = Money(100);
}

class Person {
  Wallet wallet = Wallet();
}

void purchase(Item item, Person buyer) {
  if (buyer.wallet.money.amount >= item.price) {
    // ...
  }
}

// Good example: Using encapsulation
class Wallet {
  Money _money = Money(100);
  double getAmount() => _money.amount;
}

class Person {
  Wallet wallet = Wallet();
  double getMoneyAmount() => wallet.getAmount();
}

void purchase(Item item, Person buyer) {
  if (buyer.getMoneyAmount() >= item.price) {
    // ...
  }
}
```

### Separation of Concerns

```dart
// Bad example: Mixing data retrieval and presentation
class UserComponent {
  void fetchUserData() { /* ... */ }
  void render() { /* ... */ }
  void calculateAge() { /* ... */ }
}

// Good example: Separating concerns into different modules
class UserDataService {
  void fetchUserData() { /* ... */ }
}

class UserLogic {
  void calculateAge() { /* ... */ }
}

class UserComponent {
  void render() { /* ... */ }
}
```