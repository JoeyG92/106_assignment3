//object constructor
function Dog(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}

function objTest() {
    console.log("Test for creating objects");

    //object literal
    let dog = {
        name: "fido",
        age: 8,
    };
    let lola = {
        name: "lola",
        age: "3",
        color: "pink",
    };

    console.log(dog);

    //object constructor

    let alex = new Dog("alex", 2, "red");
    let sona = new Dog("Sona", 4, "green");
    console.log(alex);
    console.log(sona);
}

