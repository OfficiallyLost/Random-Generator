## **Random Generator** ___**yes another generator**___
#### A random generator which generates random things. 

# Instillation
```
npm install <idk man this isnt a package yet>
```
# Examples
```js
const RandomGenerator = require('im not sure');

// const random = new RandomGenerator({
//    gender: ?String - 'male' 'female' 'any'
//    first: ?Boolean - Whether to include the first name or not
//    middle: ?Boolean - Whether to include the middle name or not
//    last: ?Boolean - Whether to include the last name or not
// });

const random = new RandomGenerator({
    gender: 'male',
    first: true,
    middle: false,
    last: true
});

console.log(random.name) // Logs: Bob Marley

```
# Documentation
| Method | Returns | Params | Optional | 
| - | - |-| - 
| name | a random name (see client options) | None | N/A
|number | Returns a random number | (highest, lowest) | False

| Property | Returns |
|-|-|
