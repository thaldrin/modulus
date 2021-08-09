import modulus from "../src/index"

let Modulus = new modulus("http://localhost")


// Modulus.server("828978320279863306")

// Modulus.toggle("828978320279863306", "shortlinks")

// Modulus.add("828978320279863306", "wah")
// Modulus.remove("828978320279863306", "wah")

// Modulus.message(621).then(console.log)

// Modulus.command("help", 1)

Modulus.count(300).then(console.log)
