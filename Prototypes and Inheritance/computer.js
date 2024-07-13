function createComputerHierarchy() {
    class Common {
        constructor(manufacturer) {
            this.manufacturer = manufacturer
        }
    }

    class Keyboard extends Common {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime
        }
    }

    class Monitor extends Common{
        constructor(manufacturer,width,height){
            super(manufacturer);
            this.width = width;
            this.height = height
        }
    }

    class Battery extends Common{
        constructor(manufacturer,expectedLife){
            super(manufacturer);
            this.expectedLife = expectedLife
        }
    }

    class Computer extends Common{
        constructor(manufacturer,processorSpeed, ram, hardDiskSpace){
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed, ram, hardDiskSpace, weight,color,battery){
            super(manufacturer,processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery
        }
    }

    class Desktop extends Computer{
        
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);