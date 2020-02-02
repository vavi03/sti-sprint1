let usersContainer = document.getElementsByClassName("App-left")[0];
let filter = document.getElementsByClassName("App-filter")[0];
let btn = document.getElementsByClassName("App-btn")[0];

let data = Papa.parse('./src/data.csv', {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function (results) {
        console.log(results);
        data = results.data;

        createList(data);
    }
});

function createUser(userData) {

    let user = document.createElement("div");
    user.setAttribute("class", "User");

    let title = document.createElement("h3");
    title.innerHTML = userData.correo;

    user.appendChild(title);
    usersContainer.appendChild(user);
}

function createList(users) {

    usersContainer.innerHTML = null;
    
    for (let index = 0; index < users.length; index++) {
        const u = users[index];

        createUser(u);
    }
}

function ordenarLista() {
    let value = filter.value;

    switch (value) {
        default:
            data.sort(compareA);
            break;
        case "AA":
            data.sort(compareA);
            break;
        case "AD":
            data.sort(compareADesc);
            break;
        case "BA":
            data.sort(compareB);
            break;
        case "BD":
            data.sort(compareBDesc);
            break;
    }

    createList(data);

    console.log(data);
}

function compareA(a, b) {
    return a.A - b.A;
}

function compareB(a, b) {
    return a.B - b.B;
}


function compareADesc(a, b) {
    return b.A - a.A;
}

function compareBDesc(a, b) {
    return b.B - a.B;
}

btn.addEventListener("click", ordenarLista);