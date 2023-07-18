const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros.length);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],[7,8,[9,8]]]
const flatArray = anotherArray.flat(Infinity)
// console.log(flatArray);

console.log(Array.isArray("Nadeem"));
console.log(Array.from("Nadeem"));
console.log(Array.from({name : "Nadeem"})); // it will return blank array because did not define that from 
                                            //    which (either key or value) we want make array.
const socre1 = 100
const socre2 = 200 
const socre3 = 300

console.log(Array.of(socre1,socre2, socre3));