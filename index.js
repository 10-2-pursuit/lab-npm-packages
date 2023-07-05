const _ = require("lodash");
const simpleArray = require("./data/simple-array.json");
const yogaClasses = require("./data/yoga.json");
const members = require("./data/members.json");
const newMember = require("./data/new-member");

/**
 * Return the number of keys in an object
 * @param {Object} obj -
 * @return {number} The number of keys in the object
 */
function numberOfKeys(obj) {
  return _.keys(obj).length;
}

/**
 * Remove the falsy values in a numbers array and return the sum
 * @param {numbers[]} array - An array of numbers that can also contain some falsy values
 * @return {number} The sum of the numbers in an array
 */

function sumNumbers(array) {
  return _.sum(_.compact(array))
}

/**
 * Convert a two-dimensional array of new member data (each inner array having two values: the first being the key, the second being the value) into an object
 * @param {Array[]} member -
 * @return {number} The sum of the numbers in an array
 */
function newMemberArrayToObject(member) {
  const  obj = {};

  for (var i = 0; i < member.length; i++) {
    const key = member[i][0];
    const value = member[i][1];
    obj[key] = value;
  }

  return obj;
}


/**
 * Return an array of objects that grouped by instructors from the classes array of objects
 * @param {Object[]} collection - an array of yoga class objects
 * @return {Object[]} - the reshaped collection where the classes are grouped by instructor name
 */
function groupClassByInstructor(collection) {
  const classesByInstructor = {};

  for (let item of collection) {
    const { instructor } = item;

    if (!classesByInstructor[instructor]) {
      classesByInstructor[instructor] = [];
    }

    classesByInstructor[instructor].push(item);
  }

  return classesByInstructor;
}


/**
 * Remove the age key from the members array of object
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects, each one without the age field
 */
function omitAgeFromMembers(collection) {
  return collection.map(member => {
    const { age, ...rest } = member;
    return rest;
  });
}


/**
 * Return the count of the number of classes a particular instructor teaches
 * @param {Object[]} collection - An array of yoga class objects
 * @param {String} instructorName - The name of the instructor
 * @return {number} The sum of the numbers in an array
 */
function countClassesByInstructor(collection, instructorName) {
  let count = 0;

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].instructor === instructorName) {
      count++;
    }
  }

  if (count === 0) {
    return "There is no instructor by that name.";
  }

  return count;
}

/**
 * Remove inactive members from the members array
 * @param {Object} collection - an array of member objects
 * @return {number} The array of member objects with only active members
 */
function removeInactiveMembers(collection) {
  const activeMembers = collection.filter(member => member.currentMember);
  return activeMembers;
}


/**
 * Get a list of unique class titles and their price
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that have a unique title and a price
 */
function getUniqueClasses(collection) {
  const uniqueClasses = {};

  for (let i = 0; i < collection.length; i++) {
    const classObj = collection[i];
    const className = classObj.title;
    const classPrice = classObj.priceInCents;

    if (!uniqueClasses[className]) {
      uniqueClasses[className] = classPrice;
    }
  }

  const uniqueClassArray = [];

  for (const className in uniqueClasses) {
    uniqueClassArray.push({ title: className, priceInCents: uniqueClasses[className] });
  }

  return uniqueClassArray;
}





/**
 * Get a list of classes organized by title, then by level.
 * The titles should be in ascending order, the levels should be in descending order
 * @param {Object} collection - an array of yoga class objects
 * @return {number} An array of objects that are organized by title then by level. The array should only have the title, instructor, and level fields
 */
function orderClassesByTitleAndLevel(collection) {
  const orderedByTitleAndLevel = _.orderBy(collection, ['title', 'level'], ['asc', 'desc']);
  const filteredTitleAndLevel = _.map(orderedByTitleAndLevel, classobj => _.pick(classobj, ['title', 'instructor', 'level']));
  return filteredTitleAndLevel;
}

module.exports = {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
};
