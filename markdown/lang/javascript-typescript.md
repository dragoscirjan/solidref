# TypeScript

Developed by Microsoft, TypeScript is a superset of JavaScript that adds optional static typing. It can catch type-related errors at compile-time, making it a favorite for large-scale applications.

## SOLID Principles

### Single Responsibility Principle (SRP)

```ts
// Bad example: A class handling both user data management and user notifications
class User {
    saveUserData() { /* ... */ }
    sendNotification() { /* ... */ }
}

// Good example: Splitting responsibilities into separate classes
class UserDataManager {
    saveUserData() { /* ... */ }
}

class UserNotification {
    sendNotification() { /* ... */ }
}
```

### Open/Closed Principle (OCP)

```ts
// Bad example: Modifying existing code to add new functionality
class Rectangle {
    width: number;
    height: number;
}

class AreaCalculator {
    computeArea(rectangle: Rectangle) {
        return rectangle.width * rectangle.height;
    }
}

// Good example: Using abstraction to allow extension without modification
interface Shape {
    computeArea(): number;
}

class Circle implements Shape {
    radius: number;
    computeArea() {
        return 3.14 * this.radius * this.radius;
    }
}
```

### Liskov Substitution Principle (LSP)

```ts
// Bad example: Derived class changes the behavior of the base class
class Bird {
    fly() { /* ... */ }
}

class Ostrich extends Bird {
    fly() {
        throw new Error("Can't fly");
    }
}

// Good example: Derived classes maintain the behavior of the base class
class FlyingBird {
    fly() { /* ... */ }
}

class NonFlyingBird {
    walk() { /* ... */ }
}

```

### Interface Segregation Principle (ISP)

```ts
// Bad example: A bulky interface
interface Worker {
    work(): void;
    eat(): void;
}

// Good example: Segregated interfaces
interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

```

### Dependency Inversion Principle (DIP)

```ts
// Bad example: High-level module depending on a low-level module
class LightBulb {
    turnOn() { /* ... */ }
}

class Switch {
    constructor(private bulb: LightBulb) {}
    operate() {
        this.bulb.turnOn();
    }
}

// Good example: Both high-level and low-level modules depend on abstractions
interface Device {
    turnOn(): void;
}

class Fan implements Device {
    turnOn() { /* ... */ }
}

class Switch {
    constructor(private device: Device) {}
    operate() {
        this.device.turnOn();
    }
}
```

## Other Principles

### DRY (Don't Repeat Yourself)

```ts
// Bad example: Repeated logic
function addTaxForFood(price: number) {
    return price + (price * 0.05);
}

function addTaxForElectronics(price: number) {
    return price + (price * 0.05);
}

// Good example: Single function for repeated logic
function addTax(price: number, rate: number = 0.05) {
    return price + (price * rate);
}
```

### KISS (Keep It Simple, Stupid)

```ts
// Bad example: Overcomplicated way to check even numbers
function isEven(num: number): boolean {
    return num % Math.abs(2) === 0;
}

// Good example: Simplified approach
function isEven(num: number): boolean {
    return num % 2 === 0;
}
```

### YAGNI (You Aren't Gonna Need It)

```ts
// Bad example: Adding unnecessary features
class Car {
    drive() { /* ... */ }
    fly() { /* ... */ }  // Cars don't fly!
}

// Good example: Only implement what's needed
class Car {
    drive() { /* ... */ }
}
```

### Law of Demeter (Principle of Least Knowledge)

```ts
// Bad example: Accessing nested structures directly
class Wallet {
    money: { amount: number };
}

class Person {
    wallet: Wallet;
}

function purchase(item: any, buyer: Person) {
    if (buyer.wallet.money.amount >= item.price) { /* ... */ }
}

// Good example: Using encapsulation
class Wallet {
    private money: number;
    getAmount() { return this.money; }
}

class Person {
    wallet: Wallet;
    getMoneyAmount() { return this.wallet.getAmount(); }
}

function purchase(item: any, buyer: Person) {
    if (buyer.getMoneyAmount() >= item.price) { /* ... */ }
}
```

### Separation of Concerns

```ts
// Bad example: Mixing data retrieval and presentation
class UserComponent {
    fetchUserData() { /* ... */ }
    render() { /* ... */ }
    calculateAge() { /* ... */ }
}

// Good example: Separating concerns into different modules
class UserDataService {
    fetchUserData() { /* ... */ }
}

class UserLogic {
    calculateAge() { /* ... */ }
}

class UserComponent {
    render() { /* ... */ }
}
```