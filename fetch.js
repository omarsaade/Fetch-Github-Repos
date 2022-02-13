// console.log(Date.now());

let input = document.getElementById("input");
let button = document.getElementById("button");
let spano = document.getElementById("span");

window.onload = function () {
    input.focus();
};


button.onclick = function () {

    const url = `https://api.github.com/users/${document.getElementById("input").value}/repos`;

    fetch(url)
        .then(response => response.json())
        .then(repos => {


            let spano = document.getElementById("span");

            spano.innerHTML = '<ul id ="ulo">' + repos.map(function (repo) {
                return `<li class="repo">${repo.name}<span ><a  class="visit" target="_blank" href="http://github.com/${document.getElementById("input").value}/${repo.name}" >Visit</a></span></li>`;
            }).join('') + '</ul>';



        })
        .catch(err => console.log(err));



}


input.value = "";





































// button.onclick = function () {
//     // https://github.com/omarsaade?tab=repositories
//     // let site = `"https:www.${document.getElementById("input").value}.com"`;
//     const url = `https://api.github.com/users/${document.getElementById("input").value}/repos`;
//     // const url = `https://github.com/omarsaade?tab=repositories`;

//     fetch(url)
//         .then(response => response.json())
//         .then(repos => {
//             const reposList = repos.map(repo => repo.name);
//             document.getElementById("span").innerHTML = reposList;
//         })
//         .catch(err => console.log(err))

    // let site = `https://www.${document.getElementById("input").value}.com`;
    // window.location.href = site;
    // window.open(site);
    // console.log(site);


    // var reposList = repos.map(repo => repo.name);
            // var reposList = repos.map(repo =>  repo.name);


            // document.getElementById("span").innerHTML = reposList;
            // console.log(reposList);
            // console.log(reposList);


// }









