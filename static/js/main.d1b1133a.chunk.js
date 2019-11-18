(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Bill Dauterive","image":"./assets/images/Bill_Dauterive.png"},{"id":2,"name":"Bobby Hill","image":"./assets/images/Bobby.png"},{"id":3,"name":"Connie","image":"./assets/images/Connie.png"},{"id":4,"name":"Cotton","image":"./assets/images/Cotton.jpg"},{"id":5,"name":"Dale Gribble","image":"./assets/images/Dale_Gribble.png"},{"id":6,"name":"Didi Hill","image":"./assets/images/Didi_Hill.png"},{"id":7,"name":"Hank Hill","image":"./assets/images/Hank_Hill.png"},{"id":8,"name":"Joseph Gribble","image":"./assets/images/Joseph.jpg"},{"id":9,"name":"John Redcorn","image":"./assets/images/John-redcorn.jpg"},{"id":10,"name":"Khan","image":"./assets/images/Khan.png"},{"id":11,"name":"Mr. Strickland","image":"./assets/images/Strickland.png"},{"id":12,"name":"Luanne","image":"./assets/images/Luanne.jpg"},{"id":13,"name":"Lucky","image":"./assets/images/Lucky.jpg"},{"id":14,"name":"Minh","image":"./assets/images/Minh.jpg"},{"id":15,"name":"Peggy Hill","image":"./assets/images/Peggy-hill.jpg"}]')},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(8),c=a.n(i),r=a(6),o=a(1),l=a(2),m=a(4),u=a(3),g=a(5);a(15);var h=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},d=(a(16),function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("nav",{class:"navbar navbar-expand-lg static-top w-100"},n.a.createElement("ul",{className:"navbar-nav nav-fill w-100"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"font-weight-bold",href:"/"},"Memory Game")),n.a.createElement("li",{className:"nav-item ".concat(this.props.textClass)},this.props.children),n.a.createElement("li",{className:"nav-item"},"Score: ",this.props.score," | High Score: ",this.props.topScore)))}}]),t}(s.Component));a(17);var f=function(e){return n.a.createElement("div",{className:"card",onClick:function(){e.handleClick(e.id)},clicked:e.clicked},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))},p=a(9),v=(a(18),function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={friends:p,guessed:new Set,shuffledArr:[]},a.shuffleArr=function(e){return e.sort((function(){return Math.random()-.5}))},a.checkGuess=function(e){a.shuffle(),a.state.guessed.has(e)?a.setState({guessed:new Set},(function(){a.props.onIncorrect()})):(a.state.guessed.add(e),a.props.onCorrect())},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.shuffle()}},{key:"shuffle",value:function(){this.setState({shuffledArr:this.shuffleArr(this.state.friends)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container ".concat(this.props.shakeClass)},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm col-12"},this.state.shuffledArr.map((function(t){return n.a.createElement(f,{name:t.name,key:t.id,id:t.id,image:t.image,handleClick:e.checkGuess})})))))}}]),t}(s.Component));a(19);var b=function(e){var t={backgroundImage:"url(".concat("./assets/images/sunrise.jpg",")")};return n.a.createElement("div",{className:"container-fluid instructions text-center",style:t},n.a.createElement("h1",{className:"font-weight-bold superSized"},"Memory Game!"),n.a.createElement("h3",null,"Click on an image to score points, but don't click on any more than once!"))};a(20);var k=function(){return n.a.createElement("div",{className:"container-fluid footer-div"},n.a.createElement("footer",{className:"footer font-weight-bold"},"Memory Game ",n.a.createElement("img",{className:"tinyLogo",alt:"React logo",src:"./assets/images/react-logo.png"})))},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={score:0,topScore:0,guess:"Click an image to start!",textClass:"",shakeClass:""},a}return Object(g.a)(t,e),Object(l.a)(t,[{key:"incorrect",value:function(){this.setState({score:0,guess:"You guessed incorrectly!"}),this.setTempState("textClass","incorrect",500),this.setTempState("shakeClass","shake",500)}},{key:"correct",value:function(){var e=this.state.score+1;e>this.state.topScore?(this.setState({score:e,topScore:e,guess:"You guessed correctly!"}),this.setTempState("textClass","correct",500)):this.setState({score:e,guess:"You guessed correctly!"})}},{key:"setTempState",value:function(e,t,a){var s=this;this.setState(Object(r.a)({},e,t),(function(){setTimeout((function(){s.setState(Object(r.a)({},e,""))}),a)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(h,null,n.a.createElement(d,{score:this.state.score,topScore:this.state.topScore,textClass:this.state.textClass},this.state.guess),n.a.createElement(b,null),n.a.createElement(v,{shakeClass:this.state.shakeClass,onCorrect:function(){e.correct()},onIncorrect:function(){e.incorrect()}}),n.a.createElement(k,null))}}]),t}(s.Component);a(21);c.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.d1b1133a.chunk.js.map