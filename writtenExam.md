## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples, explanations, and potential use cases. Write your answer below and use markdown to format your text.

**.forEach**

We would like to use .forEach when we want to run a function on each element of an array,does not change current array

```
var array = [1,2,3];
array.forEach(function(i){
  console.log(i);
});
```

**.map**

We would like to use .map when we want to transform elements of an array and create a new one,does not change current array
We could use it render HTML items in react, We can create a html table using every information of an object element of an array

```
let people = [
  { id: 20, name: 'Ali' },
  { id: 24, name: 'Osman' },
  { id: 56, name: 'Erkan' },
  { id: 88, name: 'Emre' } ]

# we d like to get id's in a array

let personIDs = people.map(function (person) {
  return people.id
});
```

**.filter**

We would like to use filter when we want to select a subset of multiple elements from an array, it does not change current array
When we want to limit size of an array according to our restrictions, maybe we are not interested in very high or low number results and we want to trim it down

```
let numbers = [1,2,3,4,5,6]

let filtered = numbers.filter((number)=> {return number>2})
```

**.find**

We would like to use find, when we want to select a single element from an array(It will return the first match there are possible matches)
We can use it to toggle element into arrays, we can check if it is there remove it, if it is not there put in the array

```
let cities = [
  "Stockholm",
  "Malmo",
  "Goteborg",
  "Lund"
];

let result = cities.find(city=>city.startsWith("S"))
```
