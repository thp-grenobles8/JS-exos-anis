let stairs = prompt("Combien d'étages veux-tu?");
let rocks = 1;
for (stairs; stairs > 0; stairs--) {
console.log(' '.repeat(stairs-1) + '#'.repeat(rocks));
rocks++;
}