(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),l=(n(0),n(287)),c=n(291),b=n(292),i={id:"api-transaction-get-pending-txs",title:"GetPendingTxns"},o={id:"apis/api-transaction-get-pending-txs",isDocsHomePage:!1,title:"GetPendingTxns",description:"---",source:"@site/docs/apis/api-transaction-get-pending-txs.mdx",permalink:"/docs/apis/api-transaction-get-pending-txs",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/apis/api-transaction-get-pending-txs.mdx"},s=[{value:"Example Request",id:"example-request",children:[]},{value:"Example Response",id:"example-response",children:[]},{value:"HTTP Request",id:"http-request",children:[]},{value:"Arguments",id:"arguments",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("hr",null),Object(l.b)("p",null,"Returns the status (code) of all unconfirmed Transactions."),Object(l.b)("p",null,"Please refer to ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"api-transaction-get-pending-tx#api-availability"}),"GetPendingTxn")," for details on API availability and status codes."),Object(l.b)("h3",{id:"example-request"},"Example Request"),Object(l.b)(c.a,{defaultValue:"cURL",values:[{label:"cURL",value:"cURL"},{label:"node.js",value:"node.js"},{label:"java",value:"java"},{label:"python",value:"python"},{label:"go",value:"go"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"cURL",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),'curl -d \'{\n    "id": "1",\n    "jsonrpc": "2.0",\n    "method": "GetPendingTxns",\n    "params": []\n}\' -H "Content-Type: application/json" -X POST "https://api.zilliqa.com/"\n'))),Object(l.b)(b.a,{value:"node.js",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const pendingTransaction = await zilliqa.blockchain.getPendingTxns();\nconsole.log(pendingTransaction.result);\n"))),Object(l.b)(b.a,{value:"java",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'public class App {\n    public static void main(String[] args) throws IOException {\n        HttpProvider client = new HttpProvider("https://api.zilliqa.com");\n        Rep<PendingStatus> pengdingStatus = client.getPendingTxns();\n        System.out.println(new Gson().toJson(pengdingStatus));\n    }\n}\n'))),Object(l.b)(b.a,{value:"go",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-go"}),'func GetPendingTxns() {\n  provider := NewProvider("https://api.zilliqa.com/")\n  response := provider.GetPendingTxns()\n  result, _ := json.Marshal(response)\n  fmt.Println(string(result))\n}\n')))),Object(l.b)("h3",{id:"example-response"},"Example Response"),Object(l.b)("h4",{id:"since-zilliqa-v630"},"Since Zilliqa V6.3.0"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "Txns": [\n      {\n        "TxnHash": "ec5ef8110a285563d0104269081aa77820058067091a9b3f3ae70f38b94abda3",\n        "code": 1\n      },\n      {\n        "TxnHash": "cf546d80fa2e0cc0b5b8f9fbb639050fe292d1601aa5d4a7c48106c624311bf9",\n        "code": 24\n      }\n    ]\n  }\n}\n')),Object(l.b)("h4",{id:"zilliqa-v620-and-before"},"Zilliqa V6.2.0 and before"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "id": "1",\n  "jsonrpc": "2.0",\n  "result": {\n    "Txns": [\n      {\n        "Status": 1,\n        "TxnHash": "ec5ef8110a285563d0104269081aa77820058067091a9b3f3ae70f38b94abda3",\n      }\n    ]\n  }\n}\n')),Object(l.b)("h3",{id:"http-request"},"HTTP Request"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Chain(s)"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"URL(s)"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Zilliqa mainnet")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://api.zilliqa.com/"}),"https://api.zilliqa.com/"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Developer testnet")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://dev-api.zilliqa.com/"}),"https://dev-api.zilliqa.com/"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Local testnet")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"http://localhost:4201/")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"Isolated server")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://zilliqa-isolated-server.zilliqa.com/"}),"https://zilliqa-isolated-server.zilliqa.com/"))))),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"id")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"1"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"jsonrpc")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"2.0"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"method")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},'"GetPendingTxns"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"params")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"None"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))))}u.isMDXComponent=!0},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,j=p["".concat(c,".").concat(d)]||p[d]||u[d]||l;return n?r.a.createElement(j,b(b({ref:t},o),{},{components:n})):r.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=d;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var o=2;o<l;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},288:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},289:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=r},290:function(e,t,n){"use strict";var a=n(0),r=n(289);t.a=function(){return Object(a.useContext)(r.a)}},291:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(290),c=n(288),b=n(92),i=n.n(b);const o=37,s=39;t.a=function(e){const{block:t,children:n,defaultValue:b,values:p,groupId:u}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(l.a)(),[m,O]=Object(a.useState)(b);if(null!=u){const e=d[u];null!=e&&e!==m&&p.some(t=>t.value===e)&&O(e)}const g=e=>{O(e),null!=u&&j(u,e)},f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case s:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},292:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);