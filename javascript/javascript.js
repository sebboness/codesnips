var globVar = "Test";
let localVar = 34;
const immutableVar = 4.5;

// maps
const map1 = {
    "a": 2,
    "b": 4,
    "c": 6,
    "d": 8,
    "e": 9,
};

// array
const arr1 = [
    {f1: 3, f2: "A", f3: 100, f4: true},
    {f1: 4, f2: "B", f3: 250, f4: true},
    {f1: 3, f2: "B", f3: 100, f4: false},
    {f1: 4, f2: "A", f3: 150, f4: false},
    {f1: 3, f2: "A", f3: 100, f4: true},
    {f1: 5, f2: "C", f3: 300, f4: false},
    {f1: 4, f2: "A", f3: 175, f4: true},
]

// array loop
console.log("\narray loop 1");
let idx = 0;
for (const x of arr1) {
    console.log(`[${idx}] = ${JSON.stringify(x)}`);
    idx++;
}

// array loop (2)
console.log("\narray loop 2");
for (let i = 0; i < arr1.length; i++)
    console.log(`[${i}] = ${JSON.stringify(arr1[i])}`);

// array loop (3)
console.log("\narray loop 3");
arr1.forEach((x, i) => {
    console.log(`[${i}] = ${JSON.stringify(arr1[i])}`);
});

// array.map
const arr1Map = arr1.map((x) => x.f1);
console.log(arr1Map);

// array.filter
const arr1Filter = arr1.filter((x) => x.f2 == "B");
console.log(arr1Filter);

// array.find
const arr1Find = arr1.find((x) => x.f4 === false);
console.log(arr1Find);

// array.reduce
const arr1Reduce = arr1.reduce((sum, x) => sum += x.f3, 0);
console.log(arr1Reduce);

// array.filter + array.reduce
const arr1FilterReduce = arr1
    .filter((x) => x.f2 == "B")
    .reduce((sum, x) => sum += x.f3, 0);
console.log(arr1FilterReduce);

// array.some (returns true if condition applies to at least one item)
console.log("\nsome (1): ", arr1.some((x) => x.f2 == "B"));
console.log("\nsome (2): ", arr1.some((x) => x.f2 == "D"));

// array.every (returns true if condition applies to all items)
console.log("\nevery (1): ", arr1.every((x) => x.f3 < 500));
console.log("\nevery (2): ", arr1.every((x) => x.f3 > 500));

// array.includes (returns true if condition applies to all items)
const arr2 = [3, 4, 5, 3, 4, 7];
console.log("\narr2:", arr2);
console.log("includes 4? (should be true): ", arr2.includes(4));
console.log("includes 8? (should be false): ", arr2.includes(8));