# NPM Packages Lab

You will be working with a new package, `lodash`. Lodash is a modern JavaScript utility library: in other words, it provides a good number of helper functions to assist you in building out your functions.

This goal of this lab is to use the Lodash documentation to assist in building out each function.

Reading documentation and figuring things out on your own can feel uncomfortable and challenging, but it is a critical skill for a developer to gain proficiency with.

## Getting Started

1. Fork and clone this repository.
1. Navigate to the cloned repository's directory on your command line.
1. `npm install` to install the packages for Jest
1. `npm install lodash@4`
1. Open up the repository in VSCode.
1. Write your answers in `index.js`
1. Test your code with `npm test`

## Instructions

You will be building functions for a Yoga Studio to assist with maintaining their records for classes and members.

Each function should use a Lodash method to assist in completing the needed functionality.

Here is an example class object:

```js
const yogaClass = {
  id: "69b0e5d5-df73-4837-94e8-f7a7e4ba2fc5",
  title: "Ashtanga Yoga",
  instructor: "Saffron Sage",
  description:
    "Join Saffron Sage for a dynamic and challenging Ashtanga yoga class. This class is perfect for advanced students and focuses on a set series of poses with breath and movement.",
  durationInMinutes: 90,
  level: "Advanced",
  style: "Ashtanga",
  priceInCents: 2000,
};
```

The function to write is one that returns just the `title` and the `level`. Go to the [documentation for Lodash](://lodahttpssh.com/docs/4.17.15) and find the `Object` section since you are working with an object. Click on various methods until you find one with a description that makes sense for the task.

In this case, `_.pick()` is a good choice.

```js
function pickTitleAndLevel(classObj) {
  return _.pick(classObj, ["title", "level"]);
}
```

For this lab, you can combine other methods native to JavaScript or use multiple Lodash methods to build the required functionality. In this next example, the goal is to return an array of objects with the instructor name, class title, and level:

```js
function pickTitlesLevelsAndInstructors(collection) {
  return collection.map((classObj) =>
    _.pick(classObj, ["title", "level", "instructor"])
  );
}
```

Note that you have some sample data in the `data` folder. Be sure to reference this data for the shape of the data and you can also use it to try your functions outside of using Jest.
