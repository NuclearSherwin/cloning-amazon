# Array interation
// forEach()
// some()
// every()
// find()
// filter()
// map()
// reduce()

```js
const courses = [{
        id: 1,
        name: 'Javascript',
        price: 40,
    },
    {
        id: 2,
        name: 'React',
        price: 200,
    },
    {
        id: 3,
        name: 'Golang',
        price: 300,
    },
    {
        id: 4,
        name: 'PHP',
        price: 20,
    },
    {
        id: 5,
        name: 'Python',
        price: 330,
    }
]
```

```js
courses.forEach(function(course, index) {
    console.log(course)
})

const result = courses.every(function(course, index) {
    return course.price > 0
})

// console.log(result)

// const result = courses.some(function(course, index) {
//     return course.price < 0
// })

// console.log(result)

// const result = courses.find(function(course, index) {
//     return course.name === 'PHP'
// })

// console.log(result)

// const result = courses.filter(function(course, index) {
//     return course.name === 'PHP'
// })

// console.log(result)

// const newArray = courses.map(function(course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         price: `Gia: ${course.price}`
//     }
// })

// console.log(newArray)

// const prices = [300, 200, 400, 700, 100]

// const total = prices.reduce(function(total, price) {
//     return total + price;
// }, 0)

// console.log(total)

// const depthArray = [1, [2, 3], 3, [4, 5, 6], 7]

// const flatArray = depthArray.reduce(function(result, depthItem) {
//     return result.concat(depthItem)
// }, [])

// console.log(flatArray)
// forEach()
// some()
// every()
// find()
// filter()
// map()
// reduce()

const courses = [{
        id: 1,
        name: 'Javascript',
        price: 40,
    },
    {
        id: 2,
        name: 'React',
        price: 200,
    },
    {
        id: 3,
        name: 'Golang',
        price: 300,
    },
    {
        id: 4,
        name: 'PHP',
        price: 20,
    },
    {
        id: 5,
        name: 'Python',
        price: 330,
    }
]


courses.forEach(function(course, index) {
    console.log(course)
})

const result = courses.every(function(course, index) {
    return course.price > 0
})

console.log(result)

const result = courses.some(function(course, index) {
    return course.price < 0
})

console.log(result)

const result = courses.find(function(course, index) {
    return course.name === 'PHP'
})

console.log(result)

const result = courses.filter(function(course, index) {
    return course.name === 'PHP'
})

console.log(result)

const newArray = courses.map(function(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        price: `Gia: ${course.price}`
    }
})

console.log(newArray)

const prices = [300, 200, 400, 700, 100]

const total = prices.reduce(function(total, price) {
    return total + price;
}, 0)

console.log(total)

const depthArray = [1, [2, 3], 3, [4, 5, 6], 7]

const flatArray = depthArray.reduce(function(result, depthItem) {
    return result.concat(depthItem)
}, [])

console.log(flatArray)
```

```js
const result = a < 0 || b < 0
if (result) {
    console.log('Ket qua dung')
} else {
    console.log('Ket qua sai')
}
``` 