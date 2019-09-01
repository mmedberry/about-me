(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{59:function(e,t,a){e.exports=a(73)},64:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n,r=a(6),o=a(7),i=a(9),l=a(8),c=a(10),s=a(0),m=a.n(s),u=a(40),d=a.n(u),p=(a(64),a(74)),h=a(87),g=a(81),b=a(82),f=a(83),E=a(84),j=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,{direction:"row"},m.a.createElement(h.a,{label:"Home",icon:m.a.createElement(g.a,null),primary:!0,onClick:this.props.handleHomeClick}),m.a.createElement(h.a,{label:"About",primary:!0,icon:m.a.createElement(b.a,null),onClick:this.props.handleAboutClick}),m.a.createElement(h.a,{label:"Projects",primary:!0,icon:m.a.createElement(f.a,null),onClick:this.props.handleProjectsClick}),m.a.createElement(h.a,{label:"Contact",primary:!0,icon:m.a.createElement(E.a,null),onClick:this.props.handleContactClick}))}}]),t}(m.a.Component),v=a(88),y=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null," ","My name is Max Medberry, and I'm a senior in Computer Engineering at Iowa State University."),m.a.createElement("p",null,"This is a small personal site to present and link to some of the projects I have been working on."),m.a.createElement(p.a,{height:"small",width:"small"},m.a.createElement(v.a,{fit:"cover",src:"/suit_img_50x50.jpg"})))}}]),t}(m.a.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null," About Me"),m.a.createElement("p",null,"I'm a senior in Computer Engineering at Iowa State University. My main area of interest in in software engineering. Languages I have worked in Java, C, C#, JavaScript, and TypeScript. I also have experience in frameworks like .NET Core, Express.js, Node.js, and especially ReactJS. I have done projects in embedded design, desktop applications with internet connectivity, and web apps."),m.a.createElement("p",null," ","I am also a member of Tau Beta Pi, an engineering honor society, and currently work as a pharmacy technician part-time."))}}]),t}(m.a.Component),k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"Contact information"),m.a.createElement("p",null,"Phone: \u202a(515)-337-2496"),m.a.createElement("p",null,"Email: medberry@iastate.edu"),m.a.createElement("a",{href:"https://github.com/mmedberry"},"Github"))}}]),t}(m.a.Component),w=a(85),O=a(86),S=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",null,"Project information"),m.a.createElement(w.a,null,m.a.createElement(O.a,{label:"Mars Rover - Embedded Systems"},"This was a project I did for Cpr E 288: Embedded Systems Engineering. In this project I was on a three person team that created a prototype mars rover based on an ARM processor and an iRobot Roomba using C. We were able to connect to the rover over Wi-Fi and give it commands and receive data back. Commands given to the rover consisted of movement and surveying the surroundings. The robot was able to take IR and sonar readings of objects in its vicinity and record collisions, and send that data back to the team over Wi-Fi. We demonstrated the functionality of our rover by using it to navigate a course littered with objects into a target zone while limiting collisions.",m.a.createElement(v.a,{fit:"cover",src:"/rover.jpg",alignSelf:"start"})),m.a.createElement(O.a,{label:"ProjectX Game Engine - Software Development"},m.a.createElement(p.a,null,"This was a project I did for Com S 309: Software Development. In this project I was part of a team that created a modular game engine and desktop game application based on that game engine. The game engine was created in Java and is capable of efficiently rendering a 2-D game. The game engine supports multiplayer functionality with a dedicated server machine for hosting peer-to-peer play."),m.a.createElement(p.a,{responsive:!0,direction:"column",alignContent:"start"},m.a.createElement(p.a,{pad:"small",basis:"1/2"},m.a.createElement(v.a,{fit:"cover",src:"/gameScreen.png",alignSelf:"start"}),"Above is an in-game screen from the ProjectX game engine. Players are able to move, pick up and use objects, and attack other players or NPC's. The game can support multiple players through the use of online multiplayer via a dedicated server. ",m.a.createElement("br",null)," The grid overlay, path making diagrams, and entity borders are all game developer only tools to help create the game."),m.a.createElement(p.a,{basis:"1/2",pad:"small",overflow:"auto"},m.a.createElement(v.a,{fit:"cover",src:"/projectDesign.png",alignSelf:"start"})," ","Above is the project design overview. We designed our game engine to allow game designers to be as removed from the coding as possible when they want to design a new game.",m.a.createElement("br",null)," The modularity of the game engine means that a developer can create a full fledged game with only some 2-D sprites, a .txt file to generate the world from, and some new or modified Enum data.")))))}}]),t}(m.a.Component);!function(e){e[e.Home=0]="Home",e[e.About=1]="About",e[e.Contact=2]="Contact",e[e.Projects=3]="Projects"}(n||(n={}));var I=function(e){function t(){var e,a;Object(r.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={pageState:n.Home,page:m.a.createElement(y,null)},a.handleHomeClick=function(){a.setState({page:m.a.createElement(y,null)})},a.handleAboutClick=function(){a.setState({page:m.a.createElement(C,null)})},a.handleContactClick=function(){a.setState({page:m.a.createElement(k,null)})},a.handleProjectsClick=function(){a.setState({page:m.a.createElement(S,null)})},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(j,{handleHomeClick:this.handleHomeClick,handleAboutClick:this.handleAboutClick,handleContactClick:this.handleContactClick,handleProjectsClick:this.handleProjectsClick}),this.state.page)}}]),t}(m.a.Component);d.a.render(m.a.createElement(I,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ffaaba04.chunk.js.map