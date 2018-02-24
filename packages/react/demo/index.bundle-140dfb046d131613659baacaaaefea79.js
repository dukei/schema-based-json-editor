webpackJsonp([2],{21:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),l=a(0),p=(a.n(l),a(7)),n=(a.n(p),a(12)),i=a(46),o=a(18),m=(a.n(o),a(19)),s=(a.n(m),a(20)),c=(a.n(s),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.locale=null,t.schema=i.c,t.value=i.a,t.isValid=!1,t.schemaSchema=i.d,t.initialValueSchema=i.b,t.editingSchema=JSON.stringify(i.c,null,"  "),t.editingInitialValue=JSON.stringify(i.a,null,"  "),t.updateSchema=function(e,a){try{t.editingSchema=e,localStorage.setItem("json-editor:schema",t.editingSchema),t.setState({editingSchema:t.editingSchema})}catch(e){console.log(e)}},t.updateInitialValue=function(e,a){try{t.editingInitialValue=e,localStorage.setItem("json-editor:initial-value",t.editingInitialValue),t.setState({editingInitialValue:t.editingInitialValue})}catch(e){console.log(e)}},t.updateValue=function(e,a){t.value=e,t.isValid=a,t.setState({value:t.value})},t}return r.b(t,e),t.prototype.componentWillMount=function(){var e=this;"zh-CN"===navigator.language&&a(235)("./"+navigator.language+".js").then(function(t){e.locale=t.locale,e.setState({locale:e.locale})})},t.prototype.render=function(){var e=s.highlight("json",JSON.stringify(this.value,null,"  ")).value;return l.createElement("div",{style:{position:"relative"}},l.createElement("a",{href:"https://github.com/plantain-00/schema-based-json-editor/tree/master/packages/react/demo",target:"_blank"},"the source code of the demo"),l.createElement("br",null),l.createElement("div",{style:{margin:"10px",width:"400px",overflowY:"scroll",position:"absolute"},className:"bootstrap3-row-container"},l.createElement(n.a,{schema:this.schemaSchema,initialValue:this.editingSchema,updateValue:this.updateSchema,theme:"bootstrap3",icon:"fontawesome4",locale:this.locale,dragula:o,markdownit:m,hljs:s,forceHttps:!1})),l.createElement("div",{style:{margin:"10px",width:"400px",overflowY:"scroll",position:"absolute",top:"300px"},className:"bootstrap3-row-container"},l.createElement(n.a,{schema:this.initialValueSchema,initialValue:this.editingInitialValue,updateValue:this.updateInitialValue,theme:"bootstrap3",icon:"fontawesome4",locale:this.locale,dragula:o,markdownit:m,hljs:s,forceHttps:!1})),l.createElement("div",{style:{width:"500px",margin:"10px",overflowY:"scroll",height:"600px",position:"absolute",left:"450px"},className:"bootstrap3-row-container"},l.createElement(n.a,{schema:this.schema,initialValue:this.value,updateValue:this.updateValue,theme:"bootstrap3",icon:"fontawesome4",locale:this.locale,dragula:o,markdownit:m,hljs:s,forceHttps:!1})),l.createElement("div",{style:{margin:"10px",width:"400px",overflowY:"scroll",height:"600px",position:"absolute",right:"10px"}},"Value:",l.createElement("pre",{style:{borderColor:this.isValid?"black":"red"}},l.createElement("code",{dangerouslySetInnerHTML:{__html:e}}))))},t}(l.Component));p.render(l.createElement(c,null),document.getElementById("container"))},235:function(e,t,a){function r(e){var t=l[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var l={"./zh-CN.js":[238,0]};r.keys=function(){return Object.keys(l)},r.id=235,e.exports=r},46:function(e,t,a){"use strict";a.d(t,"c",function(){return r}),a.d(t,"a",function(){return p}),a.d(t,"d",function(){return i}),a.d(t,"b",function(){return o});var r={type:"object",title:"GUI:",description:"a description example",properties:{stringExample:{type:"string",title:"A string example",description:"a string description example",default:"a default string example",minLength:20,maxLength:25},booleanExample:{type:"boolean",title:"A boolean example",description:"a boolean description example",default:!0},numberExample:{type:"number",title:"A number example",description:"a number description example",default:123.4,minimum:10,exclusiveMinimum:!0,maximum:1e3,exclusiveMaximum:!0},integerExample:{type:"integer",title:"A integer example",description:"a integer description example",default:124,multipleOf:2},nullExample:{type:"null",title:"A null example",description:"a null description example",default:null},objectExample:{type:"object",title:"A object example",description:"a object description example",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},default:{},required:["propertyExample1","propertyExample2"]},arrayExample:{type:"array",title:"A array example",description:"a array description example",items:{type:"string",maxLength:15},default:["default item 1","default item 2"],minItems:1,uniqueItems:!0},readOnlyExample:{type:"string",readonly:!0,default:"abc"},readOnlyAndOptionalExample:{type:"string",readonly:!0,default:"abc"},enumExample:{type:"string",enum:["enum 1","enum 2"]},optionalExample:{type:"string"},optionalAndDefaultExample:{type:"string",default:"abc"},booleanOptionalExample:{type:"boolean"},colorExample:{type:"string",format:"color",default:"#000000"},textareaExample:{type:"string",format:"textarea"},patternExample:{type:"string",pattern:"^[A-z]{3}$",default:"abc"},imagePreviewExample:{type:"string",default:"http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg"},markdownExample:{type:"string",format:"markdown",default:"###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```"},codeExample:{type:"string",format:"code",default:"function foo(bar) {\n    console.log(bar);\n}\n"},itemTitleExample:{type:"array",items:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},required:["propertyExample1","propertyExample2"],collapsed:!0},default:[{propertyExample1:"foo",propertyExample2:1},{propertyExample1:"bar",propertyExample2:2},{propertyExample1:"baz",propertyExample2:3},{propertyExample1:"abc",propertyExample2:4},{propertyExample1:"def",propertyExample2:5},{propertyExample1:"ghi",propertyExample2:6}]},optionalObjectExample:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},maxProperties:1,minProperties:0},propertyOrderExample:{type:"object",properties:{propertyExample1:{type:"string",propertyOrder:3},propertyExample2:{type:"number",propertyOrder:1},propertyExample3:{type:"number",propertyOrder:2}}},collapsedObjectExample:{type:"object",properties:{propertyExample1:{type:"string"}},collapsed:!0},emptyEnumExample:{type:"string",enum:[]},uploadFileExample:{type:"string",format:"base64"},requiredWhenExample:{type:"object",properties:{kind:{type:"string",enum:["enum 1","enum 2","enum 3"]},propertyExample1:{type:"number",requiredWhen:["kind","===","enum 1"]},propertyExample2:{type:"string",requiredWhen:["kind","===","enum 2"]},propertyExample3:{type:"number",requiredWhen:["kind","in",["enum 1","enum 2"]]},propertyExample4:{type:"string"},propertyExample5:{type:"string"}},required:["kind","propertyExample4"]}},required:["stringExample","booleanExample","numberExample","integerExample","nullExample","objectExample","arrayExample","readOnlyExample","enumExample","colorExample","textareaExample","patternExample","imagePreviewExample","markdownExample","codeExample","performanceExample","itemTitleExample","optionalObjectExample","propertyOrderExample","collapsedObjectExample","emptyEnumExample","uploadFileExample","requiredWhenExample"]},l=localStorage.getItem("json-editor:schema");if(l)try{r=JSON.parse(l)}catch(e){console.log(e)}var p={},n=localStorage.getItem("json-editor:initial-value");if(n)try{p=JSON.parse(n)}catch(e){console.log(e)}var i={title:"Schema(refresh the page to make it work when you change it):",type:"string",format:"textarea"},o={title:"Initial Value(refresh the page to make it work when you change it):",type:"string",format:"textarea"}}},[21]);