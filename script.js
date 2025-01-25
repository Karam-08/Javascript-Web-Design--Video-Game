const siteData = {
    navLinks:["Home", "About", "Gallery"],
    mainContent:[
        {
            title: "Information",
            description: "Play as a crew member aborad a spaceship, doing various tasks while there is an imposter killing people and posing as one of you. Your objective as a crewmate is to either do all of your tasks or eject the imposter off the ship. As an Imposter, your objective is to kill everyone.",
            image: ["./Images/image.jpg"],
        },{
            title: "Gameplay",
            description: "DFDFD",
            image: ["./Images/.jpg"],
        },{
            title: "Gameplay Images",
            description: "These images are taken from actual gameplay.",
            image: ["./Images/chat.png","./Images/task.jpg"],
        }
    ],
    footer: "Among Us 2025. All Rights Reserved."
}



const createAndAppend = (tag, parent, attributes = {}, content = "")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

const header = document.createElement('header');
header.innerHTML = "<h1>Among Us</h1>" 
document.body.appendChild(header)

const description = document.createElement('description')
description.innerHTML = "<h3>Trust no one, suspect everyone.</h3>"
document.body.appendChild(description)

const nav = createAndAppend("nav", document.body,{class:"site-nav"})
const ul = createAndAppend("ul", nav)

siteData.navLinks.forEach(link=>{
    createAndAppend("li", ul, {}, `<a href="#">${link}</a>`)

})

const main = createAndAppend("main",document.body,{class:"site-main"})

siteData.mainContent.forEach(section =>{
    const article = createAndAppend("article", main,{class: "content-section"})
    createAndAppend("h2",article,{},section.title)
    createAndAppend("p",article,{},section.description)
    createAndAppend("img",article,{"src":section.image[0]})
    createAndAppend("img",article,{"src":section.image[1]})
});



const footer = createAndAppend("footer",document.body,{class:"site-footer"})
createAndAppend("p",footer,{},siteData.footer)

const style = ``
createAndAppend("style", document.head, {}, style)