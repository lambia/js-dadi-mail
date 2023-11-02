console.log("Numeri da 1 a 10");

for (let i = 1; i <= 10; i++) {
    
    console.log(i);
    
}

console.log("Numeri da 1 a 10, ma ci fermiamo al 3");

for (let i = 1; i <= 10; i++) {
    
    console.log(i);
    
    if(i==3) {
        break;
    }
    
}

console.log("Numeri da 1 a 10, ma saltiamo 3, 4 e 5");

for (let i = 1; i <= 10; i++) {
    
    if(i==3 || i==4 || i==5) {
        continue;
    }
    
    console.log(i);
}