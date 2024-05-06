(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),l=a.n(r),c=(a(15),a(16),a(3)),s=a(2);function i(){const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(!1),[l,c]=Object(n.useState)(!0);return o.a.createElement("div",{className:"container",style:{backgroundColor:e?"black":"white",color:e?"white":"black",border:e?"1px solid white":"none"}},o.a.createElement("h1",{className:"my-3 text-center"},"About Our Text Utils"),o.a.createElement("div",{className:"accordion",id:"accordionExample"},o.a.createElement("div",{className:"accordion-item"},o.a.createElement("h2",{className:"accordion-header"},o.a.createElement("button",{className:"accordion-button",style:{backgroundColor:e?"#0003ffb5":"white",color:e?"white":"black",border:e?"1px solid white":"none"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":l?"true":"false","aria-controls":"collapseOne",onClick:()=>{c(!l)}},l?"Open Accordion":"Closed Accordion"," ")),o.a.createElement("div",{id:"collapseOne",className:"accordion-collapse ".concat(l?"show":""),"data-bs-parent":"#accordionExample"},o.a.createElement("div",{className:"accordion-body",style:{backgroundColor:e?"black":"white",color:e?"white":"black",border:e?"1px solid white":"none"}},"Our Text Util Word Counter is a versatile tool designed to streamline your text manipulation needs. With features like Convert to Uppercase and Convert to Lowercase, transforming text to your desired case is effortless. Whether you're formatting headings or normalizing input, these functions ensure consistency and clarity. The Copy All Text feature simplifies sharing and editing by swiftly transferring your entire text content with a single click. No more tedious manual selection \u2013 just copy and paste wherever needed. For a clean slate, the Reset option clears the text area, offering a fresh canvas for your next task. It's perfect for starting anew or tidying up after completing a task. With the Speak function, our tool goes beyond text display, giving a voice to your words. Whether you prefer auditory learning or need assistance with pronunciation, this feature is invaluable. Additionally, our Text Util Word Counter offers a customizable interface with Dark Mode support, enhancing readability and reducing eye strain, especially in low-light environments. Toggle between light and dark themes effortlessly to suit your preferences and surroundings. Whether you're a student, professional, or casual user, our tool caters to your diverse text manipulation needs with efficiency and convenience. Experience the power of seamless text editing and formatting with our feature-rich Text Util Word Counter.")))),o.a.createElement("br",null))}function m(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),id:"backgroundcolor"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(c.b,{className:"navbar-brand",to:"/"},e.title)," ",o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(c.b,{className:"nav-link",to:"/TextForm"},e.name," ")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.b,{className:"nav-link",to:"/about"},e.about)))),o.a.createElement("div",{className:"form-check form-switch trext-".concat("light"===e.mode?"dark":"light")},o.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togleMode,id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",onClick:e.togleMode},"Enable Dark Mode"))))}function d(e){const[t,a]=Object(n.useState)("");return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"red":"black"}},o.a.createElement("h1",null,e.heading," "),o.a.createElement("div",{className:"form-group"},o.a.createElement("textarea",{placeholder:"Start typing, or copy and paste your document here..... ",className:"form-control",value:t,onChange:e=>{a(e.target.value)},style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),o.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:()=>{let n=t.toUpperCase();a(n),e.showAlert("Converted to Upper Case","success")}},"Covert To UpperCase"),o.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:()=>{let n=t.toLowerCase();a(n),e.showAlert("Converted to Lower Case","success")}},"Covert To LowerCase"),o.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:()=>{document.getElementById("myBox").select(),document.execCommand("copy"),e.showAlert("All Text Copied","success")}},"Copy All Text "),o.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:()=>{const n=t.replace(t,"");a(n),e.showAlert("Text Cleared","success")}},"Reset "),o.a.createElement("button",{type:"submit",onClick:()=>{let e=new SpeechSynthesisUtterance;e.text=t;let a=window.speechSynthesis.getVoices();e.voice=a[0],window.speechSynthesis.speak(e)},className:"btn btn-warning mx-2 my-2"},"Speak")),o.a.createElement("div",{className:"contain",style:{color:"dark"===e.mode?"red":"black"}},o.a.createElement("h2",null,"Your Text Summary"),o.a.createElement("p",null,""===t.trim()?"No text entered":"".concat(t.match(/\S+/g).length," words and ").concat(t.replace(/\s+/g,"").length," characters")),o.a.createElement("p",{style:{color:"dark"===e.mode?"white":"black"}},t.length>0?.08*t.split(" ").length:"0.0"," Minuts For Read"),o.a.createElement("h2",null,"Preview"),o.a.createElement("p",{style:{color:"dark"===e.mode?"white":"black"}},t.length>0?t:"Before Preview Enter Somethig Above in Text Area")))}m.defaultProps={title:"Set Title Here",about:"About Text Here",name:"Home"};var u=function(e){return e.alert&&o.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},o.a.createElement("strong",null,(e=>{const t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)})(e.alert.type)),":",e.alert.msg)};var h=function(){const[e,t]=Object(n.useState)("light"),[a,r]=Object(n.useState)(null),l=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null," ",o.a.createElement(m,{title:"TextUtiles",mode:e,togleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",document.body.style.color="white",l("Dark Mode Has Been Enabled","success"),document.title="Text Util - Dark Mode"):(t("light"),document.body.style.backgroundColor="white",document.body.style.color="black",l("Light Mode Has Been Enabled","success"),document.title="Text Util - Light Mode")}}),o.a.createElement(u,{alert:a}),o.a.createElement("div",{className:"container my-3"},o.a.createElement(s.d,null," ",o.a.createElement(s.b,{path:"/",element:o.a.createElement(s.a,{to:"/TextForm"})}),o.a.createElement(s.b,{exact:!0,path:"/TextForm",element:o.a.createElement(d,{showAlert:l,heading:"Enter Your Text For Analyze",mode:e})}),o.a.createElement(s.b,{exact:!0,path:"/about",element:o.a.createElement(i,null)})))))};var b=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:n,getFCP:o,getLCP:r,getTTFB:l}=t;a(e),n(e),o(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null))),b()},7:function(e,t,a){e.exports=a(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.49a7575b.chunk.js.map