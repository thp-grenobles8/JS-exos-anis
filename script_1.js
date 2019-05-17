console.log("Bonjour, monde !")

let prénom = prompt("Cest quoi ton ptit prénom? :)");

while (!prénom) {
	prénom = prompt("Tape quelque chose merde")
}
console.log(`Bonjour, ${prénom} !`)