const siteData = {
    header: "Starlight Adventures: The Quest for the Lost Constellations",
    navLinks:["Home", "About", "Gallery"],
    mainContent:[
        {
            title: "Story",
            description: "In a magical world where constellations come to life, a young adventurer named Lyra is tasked with restoring the lost constellations that have disappeared from the night sky. Each constellation has a unique power that keeps the world in harmony. Lyra’s journey takes her across diverse, enchanting landscapes—forests of floating lanterns, cities built among clouds, and ancient temples hidden in starry caverns."
        },{
            title: "Gameplay",
            description: "Explore through vibrantly designed worlds, talk to animals and wise sages, solve creative puzzles, and play Co-op with your friends! "
        }
    ],
    footer: "Starlight Adventures 2025. All Rights Reserved."
}


const createAndAppend = (tag, parent, attributes = {}, content = "")=>{
    const element = document.createElement(tag);
    Object.keys(attributes).forEach(key=>element.setAttribute(key,attributes[key]));
    element.innerHTML = content;
    parent.appendChild(element);
    return element;
}

const header = createAndAppend("header",document.body,{class:"site-header"})

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
});

const footer = createAndAppend("footer",document.body,{class:"site-footer"})
createAndAppend("p",footer,{},siteData.footer)

const style = `
body{ font-family:Arial,sans-serif; margin:0; padding: 0; line-height: 1.6;}
 header{background-color: #333; color: #fff; padding: 1rem; text-align:center;}
 nav ul {list-style:none; padding:0; margin:0; display:flex; justify-content:center; background-color: #555;}
 nav ul li{margin: 0 1rem;}
 nav ul li a { color:#fff; text-decoration:none;}
 main:{padding:1rem;}
 .content-section {margin-bottom: 2rem;}
 .content-section img{width:100% height: auto;}
 footer{ background: #333; color: #fff; text-align: center; padding: 1rem; }
`
createAndAppend("style", document.head, {}, style)