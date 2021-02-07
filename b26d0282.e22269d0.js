(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(99)),s={id:"specs_and_deps",title:"Specifications and Dependencies",hide_title:!0,sidebar_label:"Specifications & Dependencies"},o={unversionedId:"didkit/specs_and_deps",id:"didkit/specs_and_deps",isDocsHomePage:!1,title:"Specifications and Dependencies",description:"Specifications and Dependencies",source:"@site/docs/didkit/specifications_and_dependencies.md",slug:"/didkit/specs_and_deps",permalink:"/docs/didkit/specs_and_deps",editUrl:"https://github.com/spruceid/docs/didkit/specifications_and_dependencies.md",version:"current",sidebar_label:"Specifications & Dependencies",sidebar:"docs",previous:{title:"Core Concepts",permalink:"/docs/didkit/concepts"},next:{title:"Rust Crate",permalink:"/docs/didkit/rust"}},c=[{value:"Specifications and Test Suites",id:"specifications-and-test-suites",children:[]},{value:"Cryptography Backends",id:"cryptography-backends",children:[]}],p={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"specifications-and-dependencies"},"Specifications and Dependencies"),Object(i.b)("p",null,"At Spruce, we consider it essential to be very explicit and up-front about\nour definition of standards compliance, our evidence to back that up, and\nthe open-source dependencies and libraries which power our security and\ntrust guarantees.  To this end, we maintain both lists here, and think that\nboth are as important as our changelogs."),Object(i.b)("h2",{id:"specifications-and-test-suites"},"Specifications and Test Suites"),Object(i.b)("p",null,"To demonstrate our commitment to standards and interoperability, we have\nensured that our implementation conforms to the following specifications and\naspire to pass their test suites where applicable:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials"),Object(i.b)("a",{parentName:"li",href:"https://github.com/w3c/vc-test-suite"},"Test Suite")," (passing,\n",Object(i.b)("a",{parentName:"li",href:"https://github.com/spruceid/ssi/tree/main/vc-test"},"instructions"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"W3C Decentralized Identifiers"),"\n(test suite pending CR, ",Object(i.b)("a",{parentName:"li",href:"https://github.com/spruceid/ssi/blob/main/src/did.pest"},"syntax support"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/w3c-ccg/vc-http-api/tree/master/packages/plugfest-2020"},"VC HTTP API Test Suite v0.0.1"),"\n(passing, ",Object(i.b)("a",{parentName:"li",href:"https://github.com/spruceid/vc-http-api/tree/spruce/packages/plugfest-2020/vendors/spruce"},"instructions"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://json-ld.github.io/normalization/tests/"},"RDF Dataset Normalization Test Cases")," (passing, ",Object(i.b)("a",{parentName:"li",href:"#"},"instructions"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://w3c.github.io/json-ld-api/tests/toRdf-manifest.html"},"JSON-LD to RDF Transformation Test Cases"),"\n(440/450 passing, ",Object(i.b)("a",{parentName:"li",href:"#"},"instructions"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/ld-proofs/"},"Linked Data Proofs 1.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/did-resolution/"},"DID Resolution")),Object(i.b)("li",{parentName:"ul"},"IETF: ",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7519"},"JWT"),",\n",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7515"},"JWS"),",\n",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7517"},"JWK"),",\n",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc7518"},"JWA"),",\n",Object(i.b)("a",{parentName:"li",href:"https://tools.ietf.org/html/rfc8037"},"CFRG ECDH and Signatures in JOSE")," ")),Object(i.b)("h2",{id:"cryptography-backends"},"Cryptography Backends"),Object(i.b)("p",null,"We strongly prefer tried and tested implementations of cryptographic functions\nand believe that it's most responsible to list them out in a forthcoming manner\nto any potential users. DIDKit is engineered so that the target platform and\ncompile-time flags may be used to specify different cryptographic backends,\nsuch as to leverage native hardware capabilities, cross-compile to e.g. WASM,\nor to give advanced users the option to only use libraries that they trust."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.rs/ring/0.16.19/ring/"},Object(i.b)("inlineCode",{parentName:"a"},"ring"),", v0.16"),": default for hashes, ed25519\nfunctions, RSA, and randomness. The ed25519 functions here cannot currently\ncompile to WASM."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.rs/rsa/0.3.0/rsa/"},Object(i.b)("inlineCode",{parentName:"a"},"rsa"),", v0.3"),": optionally for RSA."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.rs/ed25519-dalek/1.0.1/ed25519_dalek"},Object(i.b)("inlineCode",{parentName:"a"},"ed25519-dalek"),", v1"),":\noptionally for ed25519. Compiles to WASM."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.rs/rand/0.7.3/rand/"},Object(i.b)("inlineCode",{parentName:"a"},"rand"),", v0.7"),": optionally for randomness."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.rs/sha2/0.9.2/sha2/"},Object(i.b)("inlineCode",{parentName:"a"},"sha2"),", v0.9"),": optionally for sha256\nhashes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://docs.rs/native-tls/0.2.7/native_tls/"},Object(i.b)("inlineCode",{parentName:"a"},"native-tls"))," (",Object(i.b)("a",{parentName:"li",href:"https://docs.rs/openssl/0.10.32/openssl/"},Object(i.b)("inlineCode",{parentName:"a"},"openssl")),", ",Object(i.b)("a",{parentName:"li",href:"https://docs.rs/security-framework/2.0.0/security_framework/"},Object(i.b)("inlineCode",{parentName:"a"},"security_framework")),", or ",Object(i.b)("a",{parentName:"li",href:"https://docs.rs/schannel/0.1.19/schannel/"},Object(i.b)("inlineCode",{parentName:"a"},"schannel")),"; via ",Object(i.b)("a",{parentName:"li",href:"https://docs.rs/hyper-tls/0.5.0/hyper_tls/"},Object(i.b)("inlineCode",{parentName:"a"},"hyper-tls")),"): optionally for HTTPS.")),Object(i.b)("p",null,"If you have constructive opinions about the set of cryptographic libraries that\nshould be supported, please ",Object(i.b)("a",{parentName:"p",href:"https://github.com/spruceid/ssi"},"open an issue"),"."))}l.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(h,o(o({ref:t},p),{},{components:n})):r.a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);