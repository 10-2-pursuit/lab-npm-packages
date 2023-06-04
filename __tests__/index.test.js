const simpleArray = require("../data/simple-array.json");
const yogaClasses = require("../data/yoga.json");
const members = require("../data/members.json");
const newMember = require("../data/new-member");
const classesByInstructor = require("../data/classes-by-instructor");
const membersWithoutAges = require("../data/members-without-ages");
const onlyActiveMembers = require("../data/only-active-members.json");

// console.log(members.length, membersWithoutAges.length);
const {
  numberOfKeys,
  sumNumbers,
  newMemberArrayToObject,
  groupClassByInstructor,
  omitAgeFromMembers,
  countClassesByInstructor,
  removeInactiveMembers,
  getUniqueClasses,
  orderClassesByTitleAndLevel,
} = require("../index.js");

describe("numberOfKeys()", () => {
  test("it returns the number of keys in an object", () => {
    const actual = numberOfKeys(yogaClasses[0]);
    const expected = 8;
    expect(actual).toBe(expected);
  });
});

describe("sumNumbers()", () => {
  test("it returns the sum in a numbers array", () => {
    const actual = sumNumbers(simpleArray);
    const expected = 60;
    expect(actual).toBe(expected);
  });
});

describe("newMemberArrayToObject()", () => {
  test("it converts a 2d array into an object", () => {
    const actual = newMemberArrayToObject(newMember);
    const expected = {
      firstName: "Andi",
      lastName: "Anderson",
      email: "aaanderson@mnet.com",
      age: 58,
      currentMember: true,
      phone: "914-867-5309",
      skillLevel: 1,
    };
    expect(actual).toStrictEqual(expected);
  });
});

describe("groupClassByInstructor()", () => {
  test("it groups classes by instructor", () => {
    const actual = groupClassByInstructor(yogaClasses);
    const expected = classesByInstructor;
    expect(actual).toStrictEqual(expected);
  });
});

describe("omitAgeFromMembers()", () => {
  test("it returns the members without their ages", () => {
    const actual = omitAgeFromMembers(members);
    const expected = membersWithoutAges;
    expect(actual).toStrictEqual(expected);
  });
});

describe("countClassesByInstructor()", () => {
  test("it returns the number of keys in an object", () => {
    const actual = countClassesByInstructor(yogaClasses, "Lazuli Moon");
    const expected = 5;
    expect(actual).toBe(expected);
  });
  test("it returns the string 'There is no instructor by that name.' if the instructor is not found", () => {
    const actual = countClassesByInstructor(yogaClasses, "Rococo Palisade");
    const expected = "There is no instructor by that name.";
    expect(actual).toBe(expected);
  });
});

describe("removeInactiveMembers()", () => {
  test("it returns the number of keys in an object", () => {
    const actual = removeInactiveMembers(members);
    const expected = onlyActiveMembers;
    expect(actual).toStrictEqual(expected);
  });
});

describe("getUniqueClasses()", () => {
  test("it returns the an array of objects with unique class titles and a priceInCents", () => {
    const actual = getUniqueClasses(yogaClasses);
    const expected = [
      { title: "Vinyasa Flow", priceInCents: 2000 },
      { title: "Yin Yoga", priceInCents: 1500 },
      { title: "Power Yoga", priceInCents: 2500 },
      { title: "Hatha Yoga", priceInCents: 1800 },
    ];
    expect(actual).toStrictEqual(expected);
  });
});

describe("orderClassesByTitleAndLevel()", () => {
  test("it returns the number of keys in an object", () => {
    const actual = orderClassesByTitleAndLevel(yogaClasses);
    const expected = [
      {
        title: "Hatha Yoga",
        level: "Beginner",
        instructor: "Zephyr Woods",
      },
      { title: "Hatha Yoga", level: "Beginner", instructor: "Lazuli Moon" },
      { title: "Hatha Yoga", level: "Beginner", instructor: "Lazuli Moon" },
      {
        title: "Hatha Yoga",
        level: "All Levels",
        instructor: "Kairos Snow",
      },
      {
        title: "Hatha Yoga",
        level: "Advanced",
        instructor: "Zephyr Woods",
      },
      {
        title: "Power Yoga",
        level: "Intermediate",
        instructor: "Zephyr Woods",
      },
      { title: "Power Yoga", level: "Beginner", instructor: "Kairos Snow" },
      { title: "Power Yoga", level: "Beginner", instructor: "Bodhi Ocean" },
      { title: "Power Yoga", level: "Advanced", instructor: "Bodhi Ocean" },
      {
        title: "Vinyasa Flow",
        level: "Intermediate/Advanced",
        instructor: "Zephyr Woods",
      },
      {
        title: "Vinyasa Flow",
        level: "Intermediate/Advanced",
        instructor: "Zephyr Woods",
      },
      {
        title: "Vinyasa Flow",
        level: "Beginner",
        instructor: "Lazuli Moon",
      },
      {
        title: "Vinyasa Flow",
        level: "Advanced",
        instructor: "Kairos Snow",
      },
      {
        title: "Yin Yoga",
        level: "Intermediate",
        instructor: "Kairos Snow",
      },
      { title: "Yin Yoga", level: "Beginner", instructor: "Lazuli Moon" },
      { title: "Yin Yoga", level: "Beginner", instructor: "Zephyr Woods" },
      { title: "Yin Yoga", level: "Beginner", instructor: "Lazuli Moon" },
    ];
    expect(actual).toStrictEqual(expected);
  });
});
