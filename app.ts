export { }

let x = "hello from TYPESCRIPT"
console.warn(x)

class App {
    test() {
        console.log("test working fine")
    }
}

let array: (number | string)[] = [2, 4, 6, 8, 10, "ts"]
console.log(array)

interface users {
    name: string,
    age: number,
    salary: number,
    city: string,
    country: string,
    profession: string,
    getName: () => void
}

let users: users = {
    name: "Rinku",
    age: 25,
    city: "Indore",
    country: "India",
    profession: "IT engineer",
    salary: 50000,
    getName: function () {
        console.log("RINKU HASIJA")
    }
}

// delete users.salary

console.log(users?.getName())


