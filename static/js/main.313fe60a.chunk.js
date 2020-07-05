(this.webpackJsonplibrary=this.webpackJsonplibrary||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(3),o=a(4),i=a(5),s=a(2),c=a(9),r=a(8),u=a(0),h=a.n(u),d=a(14),b=a.n(d);a(20);function m(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),!0}catch(e){return!1}}function k(e){if(m){var t=Object(l.a)({},"books",e);localStorage.setItem("books",JSON.stringify(t))}else console.log("Couldn't save to storage.")}var p=a(6),f=a(7);function g(e,t,a,n){this.title=e,this.author=t,this.pages=a,this.status=n}var v=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={title:"",author:"",pages:0,status:!1,quit:!1},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){var t=e.target,a="status"===t.name?t.checked:t.value,n=t.name;this.setState(Object(l.a)({},n,a))}},{key:"handleSubmit",value:function(e){null===e?(this.props.handleBookAdd(null),this.setState({quit:!0})):""!==this.state.title&&""!==this.state.author&&void 0!==this.state.pages&&(this.props.handleBookAdd(new g(this.state.title,this.state.author,this.state.pages,this.state.status)),this.setState({quit:!0}))}},{key:"render",value:function(){return this.state.quit?null:h.a.createElement("div",{id:"input-window"},h.a.createElement("button",{id:"input-window-cancel",onClick:this.handleSubmit.bind(this,null)},h.a.createElement(p.a,{icon:f.c})),h.a.createElement("div",{className:"input"},h.a.createElement("label",null,"Title:",h.a.createElement("input",{name:"title",type:"text",placeholder:"What's the title of the book?",onChange:this.handleChange,value:this.state.title})),h.a.createElement("label",null,"Author:",h.a.createElement("input",{name:"author",type:"text",placeholder:"What's the name of the author?",onChange:this.handleChange,value:this.state.author})),h.a.createElement("label",null,"Page Count:",h.a.createElement("input",{name:"pages",type:"number",min:"1",onChange:this.handleChange,value:this.state.pages})),h.a.createElement("label",null,"Reading Status:",h.a.createElement("input",{name:"status",type:"checkbox",checked:this.state.status,onChange:this.handleChange})),h.a.createElement("button",{className:"submit-button",onClick:this.handleSubmit.bind(this,!0)},"Submit")))}}]),a}(h.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.bookObj;return h.a.createElement("div",{className:"book"},h.a.createElement("h2",null,t.title),h.a.createElement("p",null,"Author: ",t.author),h.a.createElement("p",null,"Page Count: ",t.pages),h.a.createElement("p",null,"Status: ",t.status?"Reading":"Finished"),h.a.createElement("div",{className:"book-buttons"},h.a.createElement("button",{className:"read-button",onClick:function(){return e.props.handleReadClick(t.title)}},h.a.createElement(p.a,{icon:f.a})),h.a.createElement("button",{className:"delete-button",onClick:function(){return e.props.handleDeleteClick(t.title)}},h.a.createElement(p.a,{icon:f.d}))))}}]),a}(h.a.Component),E=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var n,i;if(Object(o.a)(this,a),n=t.call(this,e),function(){if(m()){if(null===localStorage.getItem("books")){var e=Object(l.a)({},"books",null);localStorage.setItem("books",JSON.stringify(e))}return!0}return console.log("Couldn't initialize local storage,because of something blocking it or because it is already initialized"),!1}()){var c=JSON.parse(localStorage.getItem("books")).books;i=c||[]}else i=[];return n.state={books:i,addBook:!1},n.handleDeleteClick=n.handleDeleteClick.bind(Object(s.a)(n)),n.handleReadClick=n.handleReadClick.bind(Object(s.a)(n)),n.handleBookAdd=n.handleBookAdd.bind(Object(s.a)(n)),n.setBookAdd=n.setBookAdd.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleDeleteClick",value:function(e){var t=Object(n.a)(this.state.books),a=t.findIndex((function(t){return t.title===e}));-1!==a&&(t.splice(a,1),this.setState({books:t})),k(t)}},{key:"handleReadClick",value:function(e){var t=Object(n.a)(this.state.books),a=t.findIndex((function(t){return t.title===e}));-1!==a&&(t[a].status=!t[a].status,this.setState({books:t})),k(t)}},{key:"handleBookAdd",value:function(e){if(null===e)this.setState({addBook:!1});else{var t=Object(n.a)(this.state.books);t.push(e),this.setState({books:t,addBook:!1}),k(t)}}},{key:"setBookAdd",value:function(){this.setState({addBook:!0})}},{key:"render",value:function(){var e=this,t=this.state.books.slice().map((function(t){return h.a.createElement(C,{key:t.title,bookObj:t,handleDeleteClick:e.handleDeleteClick,handleReadClick:e.handleReadClick})}));return h.a.createElement("div",{className:"library"},this.state.addBook&&h.a.createElement(v,{handleBookAdd:this.handleBookAdd}),t,h.a.createElement("button",{className:"book-adder",onClick:this.setBookAdd},h.a.createElement(p.a,{icon:f.b})))}}]),a}(h.a.Component),O=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return h.a.createElement("div",{className:"main"},h.a.createElement("header",null,h.a.createElement("h1",null,"Your library")),h.a.createElement(E,null),h.a.createElement("footer",null,"Made by Rokas Simonavi\u010dius",h.a.createElement("a",{href:"https://github.com/Lycanthoss"},"(@Lycanthoss GitHub) ")," using the React framework"))}}]),a}(h.a.Component);b.a.render(h.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.313fe60a.chunk.js.map