(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,t,a){e.exports=a(84)},75:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n,r,i,l=a(5),o=a(6),c=a(9),s=a(8),m=a(10),u=a(0),h=a.n(u),d=a(17),p=a.n(d),f=(a(75),a(109)),g=a(41),b=a(113),E=a(94),v=a(95),y=a(96),C=a(97),k=a(98),w=a(99);!function(e){e[e.Home=0]="Home",e[e.About=1]="About",e[e.Contact=2]="Contact",e[e.Projects=3]="Projects",e[e.EtchASketch=4]="EtchASketch",e[e.Reflections=5]="Reflections",e[e.CombatManager=6]="CombatManager"}(n||(n={})),function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right",e[e.None=4]="None"}(r||(r={})),function(e){e.Ally="Ally",e.Enemy="Enemy",e.Neutral="Neutral",e.NULL=""}(i||(i={}));var j=function(){function e(t){Object(l.a)(this,e),this.name=void 0,this.hp=void 0,this.initiative=void 0,this.affiliation=void 0,this.dex=void 0,this.id=void 0,t?(this.name=t.name,this.hp=t.hp,this.initiative=t.initiative,this.affiliation=t.affiliation,this.dex=t.dex,this.id=t.id):(this.name="",this.hp=0,this.initiative=0,this.affiliation=i.Neutral,this.dex=0,this.id=0)}return Object(o.a)(e,[{key:"isFull",value:function(){return!(!this.name||!this.initiative)}}]),e}(),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(f.a,null,h.a.createElement(g.a,{direction:"row",background:"brand",round:!0},h.a.createElement(b.a,{margin:"small",label:"Home",icon:h.a.createElement(E.a,null),primary:this.props.pageState===n.Home,onClick:this.props.handleHomeClick}),h.a.createElement(b.a,{margin:"small",label:"About",primary:this.props.pageState===n.About,icon:h.a.createElement(v.a,null),onClick:this.props.handleAboutClick}),h.a.createElement(b.a,{margin:"small",primary:this.props.pageState===n.Projects,label:"Projects",icon:h.a.createElement(y.a,null),onClick:this.props.handleProjectsClick}),h.a.createElement(b.a,{margin:"small",primary:this.props.pageState===n.Reflections,label:"Reflections",icon:h.a.createElement(C.a,null),onClick:this.props.handleReflectionsClick}),h.a.createElement(b.a,{margin:"small",primary:this.props.pageState===n.Contact,label:"Contact",icon:h.a.createElement(k.a,null),onClick:this.props.handleContactClick}),h.a.createElement(b.a,{margin:"small",primary:this.props.pageState===n.CombatManager,label:"Combat Manager",icon:h.a.createElement(w.a,null),onClick:this.props.handleCombatManagerClick})))}}]),t}(h.a.Component),O=a(114),A=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("h1",null," ","My name is Max Medberry, and I'm a senior in Computer Engineering at Iowa State University."),h.a.createElement(O.a,{size:"large"},"This is a small personal site to present and link to some of my personal information and projects. Click on a button at the top to learn more about me or what I've been working on!"))}}]),t}(h.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("h1",null," About Me"),h.a.createElement(O.a,null,"I'm a senior in Computer Engineering at Iowa State University. My main area of interest in in software engineering. Languages I have worked in Java, C, C#, JavaScript, and TypeScript. I also have experience in frameworks like .NET Core, Express.js, Node.js, and especially ReactJS. I have done projects in embedded design, desktop applications with internet connectivity, and web apps."),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(O.a,null," ","I am also a member of Tau Beta Pi, an engineering honor society, and currently work as a pharmacy technician part-time."))}}]),t}(h.a.Component),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("h1",null,"Contact information"),h.a.createElement("br",null),h.a.createElement(O.a,null,"Phone: \u202a(515)-337-2496"),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(O.a,null,"Email: medberry@iastate.edu"),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(O.a,null,h.a.createElement("a",{href:"https://github.com/mmedberry"},"Github")))}}]),t}(h.a.Component),R=a(100),T=a(110),M=a(115),D=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("h1",null,"Project information"),h.a.createElement(R.a,{animate:!1},h.a.createElement(T.a,{label:"Mars Rover - Embedded Systems"},h.a.createElement(O.a,null,"This was a project I did for Cpr E 288: Embedded Systems Engineering. In this project I was on a three person team that created a prototype mars rover based on an ARM processor and an iRobot Roomba using C. We were able to connect to the rover over Wi-Fi and give it commands and receive data back. Commands given to the rover consisted of movement and surveying the surroundings. The robot was able to take IR and sonar readings of objects in its vicinity and record collisions, and send that data back to the team over Wi-Fi. We demonstrated the functionality of our rover by using it to navigate a course littered with objects into a target zone while limiting collisions."),h.a.createElement(M.a,{fit:"cover",src:"./rover.jpg",alignSelf:"start"})),h.a.createElement(T.a,{label:"ProjectX Engine - Software Dev Practices"},h.a.createElement(g.a,null,h.a.createElement(O.a,null,"This was a project I did for Com S 309: Software Development Practices. In this project I was part of a team that created a modular game engine and desktop game application based on that game engine. The game engine was created in Java and is capable of efficiently rendering a 2-D game. The game engine supports multiplayer functionality with a dedicated server machine for hosting peer-to-peer play.")),h.a.createElement(g.a,{responsive:!0,direction:"column",alignContent:"start"},h.a.createElement(g.a,{pad:"small",basis:"1/2"},h.a.createElement(M.a,{fit:"cover",src:"./gameScreen.png",alignSelf:"start"}),h.a.createElement(O.a,null,"Above is an in-game screen from the ProjectX game engine. Players are able to move, pick up and use objects, and attack other players or NPC's. The game can support multiple players through the use of online multiplayer via a dedicated server."),h.a.createElement("br",null),h.a.createElement(O.a,null,"The grid overlay, path making diagrams, and entity borders are all game developer only tools to help create the game.")),h.a.createElement(g.a,{basis:"1/2",pad:"small",overflow:"auto"},h.a.createElement(M.a,{fit:"cover",src:"./projectDesign.png",alignSelf:"start"})," ",h.a.createElement(O.a,null,"Above is the project design overview. We designed our game engine to allow game designers to be as removed from the coding as possible when they want to design a new game."),h.a.createElement("br",null),h.a.createElement(O.a,null,"The modularity of the game engine means that a developer can create a full fledged game with only some 2-D sprites, a .txt file to generate the world from, and some new or modified Enum data.")))),h.a.createElement(T.a,{label:"Drawme.io - Construction of User Interfaces"},h.a.createElement(O.a,null,"We created an online multiplayer game where players submit an image, and other players try to be the best to redraw that image. I was project leader on this team and divised the core idea and architure of the project, and led the team meetings and communication. We decided a web application was the best way to develop the game, and this was my first exposure to many web technologies. I also gained some experience in leading a team. We used some common industry tools like JavaScript, HTML/HTML generator engines, and Express.js framework server."," ")),h.a.createElement(T.a,{label:"Realtime Volumetric Analysis - Senior Design"},h.a.createElement(O.a,null,"My senior design team is currently working on creating a UAV capable of using AI to do volumetric analysis of objects, and fly autonomously. My position on the team was chief backend engineer, and I created programs to interface the hardware of the drone with external software programs. This project has taught me about software architecture, project planning, and team work and communication. Some specific technical skills I learned was ROS framework, Linux operating system, and the C++ programming language. I also contributed to the team by reading up on ROS framework and quickly became the team's go to for references and direction within ROS.")),h.a.createElement(T.a,{label:"Software Development Internship - Buildertrend"},h.a.createElement(O.a,null,"During the summer of 2019 I had the opportunity to intern at Buildertrend in Omaha, Nebraska. I learned a lot about organizational structure at technology companies, and the modern Microsoft web app tech stack. As part of a team working on converting existing webpages into React (a JavaScript/TypeScript frontend framework), I learned how to work as part of a team in an agile work environment, with peers, managers, and project planning. Some specific skills I worked on over the summer were C# (specifically .NET Core and Entity framework), TypeScript, and SQL. Buildertrend was a great company to work with and they gave me a lot of opportunity to learn and grow, especially in the area of web development."))))}}]),t}(h.a.Component),P=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={keys:"",direction:r.None},a.componentDidMount=function(){document.addEventListener("keydown",a.logKey)},a.componentWillUnmount=function(){document.removeEventListener("keydown",a.logKey)},a.turnRight=function(){console.log("right")},a.turnLeft=function(){console.log("left")},a.turnBack=function(){console.log("back")},a.turnUp=function(){console.log("up")},a.logKey=function(e){var t=a.state.keys+e.key;a.setState({keys:t}),"ArrowLeft"===e.key||"a"===e.key?a.turnLeft():"ArrowRight"===e.key||"d"===e.key?a.turnRight():"ArrowDown"===e.key||"s"===e.key?a.turnBack():"ArrowUp"!==e.key&&"w"!==e.key||a.turnUp()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(O.a,null,this.state.keys))}}]),t}(h.a.Component),N=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement("h1",null," Reflections"),h.a.createElement("a",{href:"genEdReflection.pdf"},h.a.createElement(O.a,{size:"large"},"General Education Reflection")),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("a",{href:"cumulativeReflection.pdf"},h.a.createElement(O.a,{size:"large"},"Cumulative Reflection")),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("a",{href:"engineering_ethics.pdf"},h.a.createElement(O.a,{size:"large"},"Engineering Ethics")))}}]),t}(h.a.Component),F=a(22),L=a(106),H=a(107),U=a(102),B=a(112),W=a(108),J=a(101),z=a(104),q=a(105),K=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:a.props.character?a.props.character.name:"",initiative:a.props.character?a.props.character.initiative:0,dex:a.props.character?a.props.character.dex:0,hp:a.props.character?a.props.character.hp:0,affiliation:a.props.character?a.props.character.affiliation:i.Neutral,submitted:!1},a.handleOnSubmit=function(){var e={name:a.state.name,initiative:a.state.initiative,dex:a.state.dex,hp:a.state.hp,id:a.props.id,affiliation:i.Ally,isFull:j.prototype.isFull};a.setState({submitted:!0}),a.props.handleSubmitCharacterClick(e)},a.handleEditClick=function(){a.setState({submitted:!1})},a.handleChange=function(e){var t=e.currentTarget.name,n=e.currentTarget.value;if("name"===t)a.setState({name:n});else if("initiative"===t){var r=+n;a.setState({initiative:r})}else if("dex"===t){var i=+n;a.setState({dex:i})}else if("hp"===t){var l=+n;a.setState({hp:l})}},a.handleAffiliationChange=function(e){var t=e.value,n=a.state.affiliation;"Ally"===t?n=i.Ally:"Enemy"===t?n=i.Enemy:"Neutral"===t&&(n=i.Neutral),a.setState({affiliation:n})},a.handleIsSubmitted=function(){var e=a.props.id+1;return a.state.submitted?h.a.createElement(h.a.Fragment,null,h.a.createElement(g.a,{border:"all",margin:"small",round:!0,overflow:"hidden",pad:"small",alignSelf:"start",width:"medium"},h.a.createElement("h1",null,"Character "+e+": "+a.state.name),h.a.createElement(b.a,{label:"Edit",icon:h.a.createElement(J.a,null),onClick:a.handleEditClick}))):h.a.createElement(g.a,{border:"all",margin:"small",round:!0,overflow:"hidden",pad:"small",alignSelf:"start",width:"medium"},h.a.createElement(U.a,{name:"form",onSubmit:a.handleOnSubmit},h.a.createElement("h2",null,"Character "+e),h.a.createElement(B.a,{type:"text",value:a.state.name,name:"name",label:"Name",required:!0,onChange:a.handleChange}),h.a.createElement(B.a,{name:"initiative",value:a.state.initiative||void 0,label:"Initiative",required:!0,onChange:a.handleChange,type:"number"}),h.a.createElement(B.a,{name:"dex",value:a.state.dex||void 0,label:"Dexterity Modifier",type:"number",onChange:a.handleChange}),h.a.createElement(B.a,{name:"hp",value:a.state.hp||void 0,label:"HP",type:"number",required:!0,onChange:a.handleChange}),h.a.createElement(B.a,{label:"Affiliation",name:"affiliation"},h.a.createElement(W.a,{options:[i.Ally,i.Enemy,i.Neutral],value:a.state.affiliation,onChange:a.handleAffiliationChange})),h.a.createElement(b.a,{label:"Submit",type:"submit",icon:h.a.createElement(z.a,null)}),h.a.createElement(b.a,{label:"Delete",icon:h.a.createElement(q.a,null),onClick:a.props.handleDeleteClick,color:"red",hoverIndicator:"red"})))},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,this.handleIsSubmitted())}}]),t}(h.a.Component),G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={inCombat:!1,characters:[],currentTurn:0},a.handleDeleteClick=function(e){var t=a.state.characters,n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({characters:t})},a.handleAddCharacterClick=function(){var e=new j,t=a.state.characters;t.push(e),a.setState({characters:t})},a.handleSubmitCharacterClick=function(e){for(var t=a.state.characters,n=!1,r=0;r<t.length;r++){var i=t[r];e.id===i.id&&(t[r]=e,n=!0)}n||t.push(e),a.setState({characters:t}),console.log(a.state.characters)},a.handleIncreaseTurn=function(){var e=a.state.currentTurn+1;e>=a.state.characters.length&&(e=0),a.setState({currentTurn:e})},a.handleBeginCombatClick=function(){var e=a.state.characters.filter(function(e){return e.isFull()}).sort(function(e,t){return e.initiative===t.initiative?e.dex<t.dex?1:-1:e.initiative<t.initiative?1:-1});a.setState({characters:e,inCombat:!0}),console.log(a.state.characters)},a.handleSubmitCharacterClick=a.handleSubmitCharacterClick.bind(Object(F.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=[];if(this.state.inCombat){var a=0,n=!0,r=!1,i=void 0;try{for(var l,o=this.state.characters[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var c=l.value;t.push(h.a.createElement(g.a,{key:c.id,border:"all",margin:"small",round:!0,overflow:"hidden",pad:"small",alignSelf:"start",width:a===this.state.currentTurn?"medium":"small"},h.a.createElement(O.a,null,c.name),h.a.createElement(b.a,{label:"Next",onClick:this.handleIncreaseTurn}))),a++}}catch(s){r=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}else!function(){var a=0,n=!0,r=!1,i=void 0;try{for(var l,o=e.state.characters[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){l.value;t.push(h.a.createElement(K,{key:a,id:a,handleDeleteClick:function(){return e.handleDeleteClick(a)},handleSubmitCharacterClick:e.handleSubmitCharacterClick})),a++}}catch(s){r=!0,i=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}t.push(h.a.createElement(g.a,{margin:"small",key:a},h.a.createElement(b.a,{icon:h.a.createElement(L.a,null),label:"Add Character",onClick:e.handleAddCharacterClick,hidden:!e.state.inCombat}),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement(b.a,{icon:h.a.createElement(H.a,null),label:"Begin Combat",onClick:e.handleBeginCombatClick,hidden:!e.state.inCombat})))}();return h.a.createElement(h.a.Fragment,null,h.a.createElement(f.a,null,t))}}]),t}(h.a.Component),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={page:h.a.createElement(A,null)},a.handleHomeClick=function(){a.setState({page:h.a.createElement(A,null),pageState:n.Home}),console.log(a.props.pageState)},a.handleAboutClick=function(){a.setState({page:h.a.createElement(I,null),pageState:n.About})},a.handleContactClick=function(){a.setState({page:h.a.createElement(x,null),pageState:n.Contact})},a.handleProjectsClick=function(){a.setState({page:h.a.createElement(D,null),pageState:n.Projects})},a.handleEtchASketchClick=function(){a.setState({page:h.a.createElement(P,null),pageState:n.EtchASketch})},a.handleReflectionsClick=function(){a.setState({page:h.a.createElement(N,null),pageState:n.Reflections})},a.handleCombatManagerClick=function(){a.setState({page:h.a.createElement(G,null),pageState:n.CombatManager})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return h.a.createElement(h.a.Fragment,null,h.a.createElement(S,{handleHomeClick:this.handleHomeClick,handleAboutClick:this.handleAboutClick,handleContactClick:this.handleContactClick,handleProjectsClick:this.handleProjectsClick,handleEtchASketchClick:this.handleEtchASketchClick,handleReflectionsClick:this.handleReflectionsClick,handleCombatManagerClick:this.handleCombatManagerClick,pageState:this.state.pageState}),this.state.page)}}]),t}(h.a.Component);p.a.render(h.a.createElement(V,null),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.32973201.chunk.js.map