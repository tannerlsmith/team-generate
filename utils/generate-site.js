function setUpManager(manager) {
    console.log('This is the manager', manager)
    return `<div class="card">
        <div class="title-section">
        <h1>${manager.getName()}</h1>
        <h2>${manager.getRole()}</h2>
        </div>
        <div class="content">
        <p>id: ${manager.getId()}</p>
        <p>email: ${manager.getEmail()}</p>
        <p>office number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>`
}

function setUpEngineer(engineer) {
    console.log('This is the engineer', engineer)
    return `<div class="card">
        <div class="title-section">
        <h1>${engineer.getName()}</h1>
        <h2>${engineer.getRole()}</h2>
        </div>
        <div class="content">
        <p>id: ${engineer.getId()}</p>
        <p>email: ${engineer.getEmail()}</p>
        <p>github: ${engineer.getGithub()}</p>
        </div>
    </div>`
}

function setUpIntern(intern) {
    console.log('This is the intern', intern)
    return `<div class="card">
        <div class="title-section">
        <h1>${intern.getName()}</h1>
        <h2>${intern.getRole()}</h2>
        </div>
        <div class="content">
        <p>id: ${intern.getId()}</p>
        <p>email: ${intern.getEmail()}</p>
        <p>school: ${intern.getSchool()}</p>
        </div>
    </div>`
}

function generateSite(listOfTeamMembers) {
    var saveMembersHtmlSyntax = []
    for (var i = 0; i < listOfTeamMembers.length; i++) {
        if (listOfTeamMembers[i].getRole() === 'Manager') {
            saveMembersHtmlSyntax.push(setUpManager(listOfTeamMembers[i]))
        }

        else if (listOfTeamMembers[i].getRole() === 'Engineer') {
            saveMembersHtmlSyntax.push(setUpEngineer(listOfTeamMembers[i]))
        }

        else {
            saveMembersHtmlSyntax.push(setUpIntern(listOfTeamMembers[i]))
        }
    }

    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./styles.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    </head>
    <body>
        <nav class="navbar" class="nav">
        <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>
        <div class="section">
            ${saveMembersHtmlSyntax.join('')}
        </div>
    </body>
    </html>
    `
}

module.exports = generateSite