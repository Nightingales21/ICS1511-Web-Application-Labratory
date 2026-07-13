console.log("🛑 2. Blocking Script: HTML Parser just hit me. The Green box is in memory, but the screen is frozen blank!");
console.log("🛑 2. Blocking Script: Locking the CPU for 10 seconds right NOW...");

const delayTime = 10000; // 10 seconds
const startTime = Date.now();
let lastLogTime = startTime;
let secondsPassed = 0;

// The raw CPU-hogging while loop
while (Date.now() - startTime < delayTime) {
    const currentTime = Date.now();
    if (currentTime - lastLogTime >= 2000) {
        secondsPassed += 2;
        console.log(`⏱️  ${secondsPassed} seconds blocked... (CPU is hostage, nothing can render)`);
        lastLogTime = currentTime;
    }
}

console.log("🛑 2. Blocking Script: 10 seconds up! CPU released. Browser will now parse the Red/Blue boxes and paint the whole screen at once.");