(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/Truncate.stories.tsx":"./src/stories/Truncate.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/Truncate.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react);__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.string.split.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.splice.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var hooks_useStateWithCallbackLazy=function useStateWithCallbackLazy(initialValue){var callbackRef=react_default.a.useRef(null),_React$useState2=_slicedToArray(react_default.a.useState(initialValue),2),value=_React$useState2[0],setValue=_React$useState2[1];react_default.a.useEffect((function(){callbackRef.current&&(callbackRef.current(value),callbackRef.current=null)}),[value]);var setValueWithCallback=react_default.a.useCallback((function(newValue,callback){return callbackRef.current=callback||null,setValue(newValue)}),[]);return[value,setValueWithCallback]},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","ellipsis","lines","trimWhitespace","onTruncate","width"];function Truncate_slicedToArray(arr,i){return function Truncate_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Truncate_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function Truncate_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Truncate_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Truncate_arrayLikeToArray(o,minLen)}(arr,i)||function Truncate_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Truncate_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var trimRight=function trimRight(text){return text.replace(/\s+$/,"")},Truncate_Truncate=function Truncate(_ref){var children=_ref.children,_ref$ellipsis=_ref.ellipsis,ellipsis=void 0===_ref$ellipsis?"...":_ref$ellipsis,_ref$lines=_ref.lines,numLines=void 0===_ref$lines?1:_ref$lines,_ref$trimWhitespace=_ref.trimWhitespace,trimWhitespace=void 0!==_ref$trimWhitespace&&_ref$trimWhitespace,onTruncate=_ref.onTruncate,width=_ref.width,spanProps=_objectWithoutProperties(_ref,_excluded),targetRef=Object(react.useRef)(null),textRef=Object(react.useRef)(null),ellipsisRef=Object(react.useRef)(null),timoutIdRef=Object(react.useRef)(null),canvasContext=Object(react.useRef)(null),_useStateWithCallback2=Truncate_slicedToArray(hooks_useStateWithCallbackLazy(0),2),targetWidth=_useStateWithCallback2[0],setTargetWidth=_useStateWithCallback2[1];Object(react.useEffect)((function(){var canvas=document.createElement("canvas");canvasContext.current=canvas.getContext("2d");var ellipsis=ellipsisRef.current;return function(){var _ellipsis$parentNode;(timoutIdRef.current&&cancelAnimationFrame(timoutIdRef.current),ellipsis)&&(null===(_ellipsis$parentNode=ellipsis.parentNode)||void 0===_ellipsis$parentNode||_ellipsis$parentNode.removeChild(ellipsis))}}),[]);var calcualteLayout=Object(react.useCallback)((function(callback){if(targetRef.current){var _targetRef$current$pa,result=width;if(!result)if(targetRef.current.parentNode instanceof HTMLElement)result=Math.floor(null===(_targetRef$current$pa=targetRef.current.parentNode)||void 0===_targetRef$current$pa?void 0:_targetRef$current$pa.getBoundingClientRect().width);else result=0;if(!result)return window.requestAnimationFrame((function(){return calcualteLayout(callback)}));var style=window.getComputedStyle(targetRef.current),font=[style.fontWeight,style.fontStyle,style.fontSize,style.fontFamily].join(" ");canvasContext.current&&(canvasContext.current.font=font),setTargetWidth(result,callback)}}),[setTargetWidth,width]);Object(react.useEffect)((function(){var onResize=function onResize(){calcualteLayout()};return calcualteLayout((function(){var _textRef$current$pare;textRef.current&&(null===(_textRef$current$pare=textRef.current.parentNode)||void 0===_textRef$current$pare||_textRef$current$pare.removeChild(textRef.current))})),window.addEventListener("resize",onResize),function(){return window.removeEventListener("resize",onResize)}}),[width,calcualteLayout]);var handleTruncate=Object(react.useCallback)((function(didTruncate){"function"==typeof onTruncate&&(timoutIdRef.current=window.requestAnimationFrame((function(){onTruncate(didTruncate)})))}),[onTruncate]),renderLine=Object(react.useCallback)((function(line,i,arr){if(i===arr.length-1)return Object(jsx_runtime.jsxs)("span",{children:[line,ellipsis]},i);var br=Object(jsx_runtime.jsx)("br",{},i+"br");return line?[Object(jsx_runtime.jsx)("span",{children:line},i),br]:br}),[ellipsis]),measureWidth=function measureWidth(text){var _canvasContext$curren;return(null===(_canvasContext$curren=canvasContext.current)||void 0===_canvasContext$curren?void 0:_canvasContext$curren.measureText(text).width)||0},renderContent=Object(react.useMemo)((function(){if(!!(!targetRef.current||!targetWidth))return null;return numLines>0?function getLines(){for(var _ellipsisRef$current,lines=[],text=function getElementInnerText(node){var _test$contentKey,fallback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!node)return fallback;var div=document.createElement("div"),contentKey="innerText"in node?"innerText":"textContent";div.innerHTML=node.innerHTML.replace(/\r\n|\r|\n/g," ");var text=div[contentKey],test=document.createElement("div");return test.innerHTML="foo<br/>bar","foo\nbar"!==(null===(_test$contentKey=test[contentKey])||void 0===_test$contentKey?void 0:_test$contentKey.replace(/\r\n|\r/g,"\n"))&&(div.innerHTML=div.innerHTML.replace(/<br.*?[\/]?>/gi,"\n"),text=div[contentKey]),text||fallback}(textRef.current),textLines=text.split("\n").map((function(line){return line.split(" ")})),didTruncate=!0,ellipsisWidth=(null===(_ellipsisRef$current=ellipsisRef.current)||void 0===_ellipsisRef$current?void 0:_ellipsisRef$current.offsetWidth)||0,line=1;line<=numLines;line++){var textWords=textLines[0];if(0!==textWords.length){var resultLine=textWords.join(" ");if(measureWidth(resultLine)<=targetWidth&&1===textLines.length){didTruncate=!1,lines.push(resultLine);break}if(line===numLines){for(var textRest=textWords.join(" "),lower=0,upper=textRest.length-1;lower<=upper;){var middle=Math.floor((lower+upper)/2),testLine=textRest.slice(0,middle+1);measureWidth(testLine)+ellipsisWidth<=targetWidth?lower=middle+1:upper=middle-1}var lastLineText=textRest.slice(0,lower);if(trimWhitespace)for(lastLineText=trimRight(lastLineText);!lastLineText.length&&lines.length;){var prevLine=lines.pop();lastLineText=trimRight(prevLine||"")}lines.push(lastLineText)}else{for(var _lower=0,_upper=textWords.length-1;_lower<=_upper;){var _middle=Math.floor((_lower+_upper)/2),_testLine=textWords.slice(0,_middle+1).join(" ");measureWidth(_testLine)<=targetWidth?_lower=_middle+1:_upper=_middle-1}if(0===_lower){line=numLines-1;continue}resultLine=textWords.slice(0,_lower).join(" "),textLines[0].splice(0,_lower),lines.push(resultLine)}}else lines.push(),textLines.shift(),line--}return handleTruncate(didTruncate),lines}().map(renderLine):children}),[children,handleTruncate,numLines,renderLine,targetWidth,trimWhitespace]);return Object(jsx_runtime.jsxs)("span",Object.assign({},spanProps,{ref:targetRef,children:[Object(jsx_runtime.jsx)("span",{children:renderContent}),Object(jsx_runtime.jsx)("span",{ref:textRef,children:children}),Object(jsx_runtime.jsx)("span",{ref:ellipsisRef,style:{position:"fixed",visibility:"hidden",top:0,left:0},children:ellipsis})]}))};Truncate_Truncate.displayName="Truncate";var src_Truncate=Truncate_Truncate;try{Truncate_Truncate.displayName="Truncate",Truncate_Truncate.__docgenInfo={description:"",displayName:"Truncate",props:{lines:{defaultValue:null,description:"",name:"lines",required:!1,type:{name:"number"}},ellipsis:{defaultValue:{value:"..."},description:"",name:"ellipsis",required:!1,type:{name:"ReactNode"}},trimWhitespace:{defaultValue:{value:"false"},description:"",name:"trimWhitespace",required:!1,type:{name:"boolean"}},onTruncate:{defaultValue:null,description:"",name:"onTruncate",required:!1,type:{name:"((isTruncated: boolean) => void)"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Truncate.tsx#Truncate"]={docgenInfo:Truncate_Truncate.__docgenInfo,name:"Truncate",path:"src/Truncate.tsx#Truncate"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Example/Truncate",component:src_Truncate,argTypes:{}};var Truncate_stories_Template=function Template(args){return Object(jsx_runtime.jsx)("div",{style:{width:400,padding:16,border:"1px solid #ccc"},children:Object(jsx_runtime.jsx)(src_Truncate,Object.assign({},args))})};Truncate_stories_Template.displayName="Template";var Truncate_stories_SampleContent=function SampleContent(){return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h4",{children:"Where does it come from?"}),Object(jsx_runtime.jsx)("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'}),Object(jsx_runtime.jsx)("p",{children:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'})]})};Truncate_stories_SampleContent.displayName="SampleContent";var Primary=Truncate_stories_Template.bind({});Primary.args={lines:0,children:Object(jsx_runtime.jsx)(Truncate_stories_SampleContent,{})},Primary.parameters=Object.assign({storySource:{source:'(args) => (\n    <div style={{ width: 400, padding: 16, border: "1px solid #ccc" }}>\n        <Truncate {...args} />\n    </div>\n)'}},Primary.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);