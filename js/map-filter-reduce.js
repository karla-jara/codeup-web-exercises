const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let langOver3 = users.filter( (person) => person.languages.length >= 3)

console.log(langOver3);

//Use .map to create an array of strings where each element is a user's email address

let usersEmail = users.map(person => person.email)

console.log(usersEmail);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let totalYears = 0;
let totalExperience = users.reduce((person, experience) => (totalYears += experience.yearsOfExperience), totalYears)

console.log(totalExperience/users.length);

//Use .reduce to get the longest email from the list of users.
//
let longestEmail = users.reduce(((longestAddress, user) => user.email.length < longestAddress ? user.email: longestAddress), "")

console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.



// let instructorsList = users.reduce((name, instructor => (instructor.name), ""))

let instructorsList = users.map(function (item){
    return `${item.name}`;
})

// let instructorsList = users.reduce(function (acc, user){
//     return `${acc} ${user.name}`;
// }, 'instructors are: ').slice(0) + '.';

let mapjoinSolution = `instructors are: ${users.map(user=>user.name).join(',')}.`;

console.log(mapjoinSolution);

console.log("instructors are: " + instructorsList.toString() + ".");

