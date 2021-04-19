"use strict";
// let starWarsAPI = fetch("https://swapi.dev/api/films")
//     .then((response)=>{return response.json()})
//     .then((jsonData)=>{
//         console.log(jsonData);
//         return jsonData.results;
//     })
//     .then((results)=>{results.forEach((film)=>console.log(`${film.title} ${film.episode_id}`))
//     });

// episode_idconsole.log(starWarsAPI);

let gitHubAPI = fetch("https://api.github.com/repos/karla-jara/codeup-web-exercises/commits",{headers: {'Authorization': GIT_TOKEN}})

    gitHubAPI.then((response)=>{return response.json()})
    .then((jsonData)=>{console.log(jsonData);
    return jsonData.results(0)});


function getLastPushDate(githubUsername){
    let url = `https://api.github.com/users/${githubUsername}`
    let githubResponse = fetch(url,{headers: {'Authorization': `token${GIT_TOKEN}`}})
}

//     return jsonData.results;
// })
//     .then ((results)=>{results.forEach((user) => console.log(`${user.username}`))
//     });

// console.log(gitHubAPI);