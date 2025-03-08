const siteData = {
    navLinks:["Home", "About", "Gallery"],
    mainContent:[
        {
            title: "Information",
            description: "Play as a crew member aborad a spaceship, doing various tasks while there is an imposter killing people and posing as one of you. Your objective as a crewmate is to either do all of your tasks or eject the imposter off the ship. As an Imposter, your objective is to kill everyone. The game is rated E10+ for Fantasy Violence and Mild Blood.",
            image: ["./Images/image.jpg", "./Images/app.jpg"],
            desc: "Poster and app image for the game respectively.",
        },{
            title: "Gameplay",
            description: "As a crewmate, do tasks like fixing wires, checking O2 levels, calibrating the reactor, and much more! As an Imposter, do your best to eliminate everyone. After someone finds a body, there will be talk, so make sure that you don't get ejected from the ship.",
            image: ["./Images/chat.png","./Images/task.jpg"],
            desc: "Images from the actual game. The first image is a discussion in the chat log. The second image is a task you do in the game."
        }
    ],
    footer: "Among Us 2025, Made by InnerSloth. All Rights Reserved."
}

// Command to create and append elements dynamically

const createAndAppend = (tag, parent, attributes = {}, content = "")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

// Header

const header = document.createElement('header');
header.innerHTML = "<h1>Among Us</h1>" 
document.body.appendChild(header)

// Made up tagline

const description = document.createElement('description')
description.innerHTML = "<h3>Trust no one, suspect everyone.</h3>"
document.body.appendChild(description)

// navbar

const nav = createAndAppend("nav", document.body,{class:"site-nav"})
const ul = createAndAppend("ul", nav)

// Links for navbar

siteData.navLinks.forEach(link=>{
    createAndAppend("li", ul, {}, `<a href="#">${link}</a>`)

})

// Main document body

const main = createAndAppend("main",document.body,{class:"site-main"})

// Layout for sections

siteData.mainContent.forEach(section =>{
    const article = createAndAppend("article", main,{class: "content-section"})
    createAndAppend("h2",article,{},section.title)
    createAndAppend("p",article,{},section.description)
    createAndAppend("img",article,{"src":section.image[0]}) // Loads Image 1
    createAndAppend("img",article,{"src":section.image[1]}) // and then Image 2
    createAndAppend("p",article,{},section.desc)
});


// Footer

const footer = createAndAppend("footer",document.body,{class:"site-footer"})
createAndAppend("h3",footer,{},siteData.footer)

// CSS

const style = `body{font-family:system-ui; text-align: center; background-color: #FFDE2A; color: red;}
 header{font-size: 25px; text-align:center;}
 nav ul {list-style:none; padding:0; margin:0; display:flex; justify-content:space-around; background-color: blue; border: 3px double red;}
 nav ul li{margin: 0 1rem; padding:5px; justify-content: spaced-between;}
 nav ul li a {color:red; text-decoration:none; font-size: 20px; font-weight: bolder;}
 a:hover{color: #8B0000; text-decoration: underline;}
 main:{padding:1rem;}
 img{max-width: 50%; max-height: 50%;}
 footer{ border: 10px solid blue; text-align: center; }`
createAndAppend("style", document.head, {}, style)
