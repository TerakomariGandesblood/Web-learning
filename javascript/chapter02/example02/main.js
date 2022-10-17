let people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

let admitted = "Admit: ";
let refused = "Refuse: ";

for (let i = 0; i < people.length; ++i) {
  if (people[i] == "Phil" || people[i] == "Lola") {
    refused += people[i] + ", ";
  } else {
    admitted += people[i] + ", ";
  }
}

refused = refused.slice(0, refused.length - 2) + ".";
admitted = admitted.slice(0, admitted.length - 2) + ".";

console.log(admitted);
console.log(refused);
