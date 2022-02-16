/**
 * @Title : Return Statement
 */

function name(firstName, lastName, gender) {
  let output;
  if (gender === "male") {
    output = `Mr. ${firstName}  ${lastName}`;
  } else if (gender === "female") {
    output = `Mst. ${firstName}  ${lastName}`;
  }

  return output;
}

const fullname = name("Ariful Islam", "Raju", "male");
// console.log(fullname);

function example() {
  return {
    name: "Ariful Islam",
    skill: ["Javascript", "Node", "React"],
    print: function () {
      console.log(this.name, this.skill);
    },
  };
}

example().print();;
