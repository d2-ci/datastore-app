(this["webpackJsonp@dhis2/app-shell"]=this["webpackJsonp@dhis2/app-shell"]||[]).push([[135],{319:function(e,t,a){e.exports={display:"Display_display__119IV",displayArea:"Display_displayArea__3kcYB"}},460:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__1vg0s",sidebarList:"Sidebar_sidebarList__2_zox"}},757:function(e,t,a){e.exports={toolbarTitle:"DisplayToolbarTitle_toolbarTitle__1WT8S"}},772:function(e,t,a){e.exports={layoutContainer:"Layout_layoutContainer__2zB8O",wrapper:"Layout_wrapper__19VFS",pageContainer:"Layout_pageContainer__2OkiQ"}},774:function(e){e.exports=JSON.parse('{"An error has occurred.":"","Invalid JSON. Please fix all remaining issues and try again.":""}')},776:function(e,t,a){"use strict";a.r(t);var n=a(775),r=a(0),s=a.n(r),o=a(463),c=a.n(o),l=a(287),i=a(328),p=a(332),u=a(408),h=a.n(u),d=a(308),m=h()({palette:{primary1Color:p.blue700,primary2Color:p.blue900,primary3Color:p.grey200,accent1Color:p.blue700,accent2Color:p.grey100,accent3Color:p.grey500,textColor:p.darkBlack,alternateTextColor:p.white,canvasColor:p.white,borderColor:p.grey300,disabledColor:Object(d.fade)(p.darkBlack,.3),pickerHeaderColor:p.blue500,clockCircleColor:Object(d.fade)(p.darkBlack,.07),shadowColor:p.fullBlack}}),E=a(295),y=a.n(E);const g="SELECT_KEY",f="TOGGLE_NAMESPACE",b="VALUE_CHANGE",v="OPEN_DIALOG",C="CLOSE_DIALOG",N="SEARCH_VALUE_CHANGE",k="SNACKBAR_EMPTY",x="FETCH_NAMESPACES_FULFILLED",O="FETCH_NAMESPACES_PENDING",j="FETCH_NAMESPACES_REJECTED",w="FETCH_KEYS_FULFILLED",S="FETCH_KEYS_PENDING",_="FETCH_KEYS_REJECTED",T="FETCH_VALUE_FULFILLED",D="FETCH_VALUE_PENDING",L="FETCH_VALUE_REJECTED",A="UPDATE_VALUE_FULFILLED",V="UPDATE_VALUE_PENDING",I="UPDATE_VALUE_REJECTED",P="CREATE_VALUE_FULFILLED",M="CREATE_VALUE_REJECTED",K="DELETE_KEY_FULFILLED",F="DELETE_NAMESPACE_FULFILLED",U="SET_IGNORE_NEXT_CONFIRM_NAVIGATION";var R=a(421);function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class B{constructor(){this.cache=new Map}clearNamespace(e){this.cache.has(e)&&this.cache.get(e).clear()}contains(e,t){return this.cache.has(e)&&this.cache.get(e).has(t)}get(e,t){if(this.contains(e,t))return this.cache.get(e).get(t)}set(e,t,a){this.cache.has(e)||this.cache.set(e,new Map),this.cache.get(e).set(t,a)}delete(e,t){this.contains(e,t)&&this.cache.get(e).delete(t)}}var G=new class{constructor(){J(this,"getNamespaces",(async()=>(await Object(R.getInstance)()).dataStore.getAll())),J(this,"deleteNamespace",(async e=>{const t=await Object(R.getInstance)(),a=await t.dataStore.delete(e);return this.cache.clearNamespace(e),a})),J(this,"getKeys",(async e=>{const t=await Object(R.getInstance)();return(await t.dataStore.get(e)).getKeys()})),J(this,"getValue",(async(e,t)=>{if(this.cache.contains(e,t))return this.cache.get(e,t);const a=await this.getMetaData(e,t),n={length:a.value.length,value:JSON.parse(a.value)};return this.cache.set(e,t,n),n})),J(this,"getMetaData",(async(e,t)=>{const a=await Object(R.getInstance)();return(await a.dataStore.get(e,!1)).getMetaData(t)})),J(this,"createValue",(async(e,t,a)=>{const n=await Object(R.getInstance)(),r=await n.dataStore.get(e),s=await r.set(t,a,!0);return this.cache.set(e,t,{length:0,value:a}),s})),J(this,"updateValue",(async(e,t,a)=>{const n=await Object(R.getInstance)(),r=await n.dataStore.get(e),s=await r.update(t,a);return this.cache.set(e,t,{value:a}),s})),J(this,"deleteValue",(async(e,t)=>{const a=await Object(R.getInstance)(),n=await a.dataStore.get(e),r=await n.delete(t);return this.cache.delete(e,t),r})),this.cache=new B}}("https://debug.dhis2.org/dev/api");function W(){return{type:U,ignoreNextConfirm:!0}}function H(e,t){return{type:w,namespace:e,keys:t}}function z(e){return{type:S,namespace:e}}function Y(e,t,a,n){return{type:I,namespace:e,key:t,value:a,error:n}}function q(e){return{type:F,namespace:e}}function X(e,t){return{type:f,namespace:e,override:t}}function Q(e,t=!1){return a=>(a(z(e)),G.getKeys(e).then((t=>{a(H(e,t))})).then((()=>a(X(e,t)))).catch((t=>{if(404===t.httpStatusCode)return a(q(e));if(t)throw t;return null})).catch((t=>{a(function(e,t){return{type:_,namespace:e,error:t}}(e,t))})))}function Z(e,t){return a=>(a(function(e,t){return{type:D,namespace:e,key:t}}(e,t)),G.getValue(e,t).then((n=>{a(function(e,t,a){return{type:T,namespace:e,key:t,value:a}}(e,t,n)),a(function(e,t,a){return{type:g,namespace:e,key:t,value:a}}(e,t,n.value))})).catch((n=>a(function(e,t,a){return{type:L,namespace:e,key:t,error:a}}(e,t,n)))))}function $(){return e=>(e({type:O}),G.getNamespaces().then((t=>{e(function(e){return{type:x,namespaces:e}}(t))})).catch((t=>e(function(e){return{type:j,error:e}}(t)))))}function ee(e,t,a){return n=>(n(function(e,t,a){return{type:"CREATE_VALUE_PENDING",namespace:e,key:t,value:a}}(e,t,a)),G.createValue(e,t,a).then((()=>n(function(e,t,a){return{type:P,namespace:e,key:t,value:a}}(e,t,a)))))}function te(e,t){return a=>{a(ee(e,t,{})).then((()=>i.d.push("/edit/".concat(e,"/").concat(t)))).then((()=>a(Q(e,!0)))).catch((n=>a({type:M,namespace:e,key:t,value:{},error:n})))}}function ae(e,t,a){return n=>(n(function(e,t,a){return{type:V,namespace:e,key:t,value:a}}(e,t,a)),G.updateValue(e,t,a).then((()=>n(function(e,t,a){return{type:A,namespace:e,key:t,value:a}}(e,t,a)))).catch((()=>n(Y(e,t,a)))))}function ne(e,t){return(a,n)=>(a(function(e,t){return{type:"DELETE_KEY_PENDING",namespace:e,key:t}}(e,t)),G.deleteValue(e,t).then((()=>a(function(e,t){return{type:K,namespace:e,key:t}}(e,t)))).then((e=>(n().display.key==t&&(a(W()),i.d.push("/")),e))).then((()=>a(function(e){return t=>(t(z(e)),G.getKeys(e).then((a=>{if(a.length<1)return Promise.reject({status:404});t(H(e,a))})))}(e)))).catch((t=>{if(404===t.httpStatusCode)a(q(e));else{if(t)throw t;a(X(e,!0))}})).catch((n=>{a(function(e,t,a){return{type:"DELETE_KEY_REJECTED",namespace:e,key:t,error:a}}(e,t,n))})))}var re=a(448),se=a.n(re),oe=a(384),ce=a.n(oe);function le(e,t={}){return{type:v,dialogprops:t,dialogType:e}}class ie extends r.Component{static buildButton(e,t,a=!1){return s.a.createElement(ce.a,{label:t,primary:a,onClick:e})}render(){const{title:e,cancelAction:t,cancelLabel:a,approveAction:n,approveLabel:r,contentStyle:o,defaultCloseDialog:c}=this.props,l=[];return l.push(ie.buildButton(t||c,a||"Cancel")),n&&l.push(ie.buildButton((()=>{Promise.resolve(n()).then((()=>c())).catch((()=>{}))}),r||"Create",!0)),s.a.createElement(se.a,{open:!0,title:e,actions:l,modal:!1,contentStyle:o||{},onRequestClose:c},this.props.children)}}var pe=Object(l.b)(null,(e=>({defaultCloseDialog(){e({type:C})}})))(ie);function ue(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class he extends r.Component{constructor(){super(),ue(this,"handleCancel",(()=>{this.setState({...this.state,confirmed:!1,show:!1,blockNext:!0})})),ue(this,"handleConfirm",(()=>{this.setState({...this.state,confirmed:!0,show:!1,blockNext:!1},(()=>this.props.router.push(this.state.nextLocation)))})),ue(this,"routerWillLeave",(e=>this.state.confirmed?(this.setState({...this.state,confirmed:!1,blockNext:!1}),!0):!(this.state.blockNext&&!this.props.ignoreNext)||(this.setState({...this.state,show:!0,blockNext:!1,nextLocation:e}),!1))),this.state={show:!1,blockNext:!1,confirmed:!1,nextLocation:null}}componentDidMount(){this.props.router.setRouteLeaveHook(this.props.route,this.routerWillLeave)}UNSAFE_componentWillReceiveProps(e){const t=e;if(this.props.ignoreNext)return this.setState({...this.state,blockNext:!1}),void this.props.setIgnoreNext(!1);t.value!==t.editedValue?this.setState({...this.state,blockNext:!0}):this.setState({...this.state,blockNext:!1,confirmed:!1})}render(){const e=pe.buildButton(this.handleCancel,"Stay",!1),t=pe.buildButton(this.handleConfirm,"Discard",!0);return s.a.createElement(se.a,{open:this.state.show,title:"Unsaved changes",actions:[e,t],modal:!0,onRequestClose:this.props.cancelNavigation},"You have unsaved changes! Are you sure you want to discard them?")}}var de=Object(l.b)((e=>({ignoreNext:e.navigation.ignoreNextConfirm})),(e=>({setIgnoreNext(t){e(W())}})))(he),me=a(319),Ee=a.n(me),ye=a(5),ge=a(453),fe=a.n(ge),be=a(721),ve=a.n(be);const Ce={alignItems:"center",justifyContent:"center",backgroundColor:"#fff"},Ne={fill:"rgb(117, 117, 117)",display:"block",margin:"0 auto 0 auto",width:"100px",height:"auto"};class ke extends r.Component{render(){const{text:e}=this.props;return s.a.createElement("div",{className:Ee.a.displayArea,style:Ce},s.a.createElement("div",null,s.a.createElement(ve.a,{style:Ne}),s.a.createElement("p",null,e)))}}class xe extends r.Component{render(){const{text:e}=this.props;return s.a.createElement("div",{className:Ee.a.displayArea,style:Ce},s.a.createElement("div",null,s.a.createElement(fe.a,{style:Ne}),s.a.createElement("p",null,e)))}}class Oe extends r.Component{render(){return s.a.createElement(xe,{text:this.props.error||ye.a.t("An error has occurred.")})}}var je=Oe,we=a(7);const Se=({size:e="small"})=>{switch(e){case"small":return s.a.createElement(we.e,{small:!0});case"medium":return s.a.createElement(we.e,null);case"large":return s.a.createElement(we.e,{large:!0})}return null},_e={alignItems:"center",justifyContent:"center"};class Te extends r.Component{render(){return s.a.createElement(y.a,{zDepth:0,className:Ee.a.displayArea,style:_e},s.a.createElement(Se,{size:"large"}))}}var De=Te;function Le(){return(Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Ae(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var Ve=e=>{class t extends r.Component{constructor(...e){super(...e),Ae(this,"renderLoading",(()=>s.a.createElement(De,null))),Ae(this,"renderError",(()=>s.a.createElement(je,{error:this.props.errorMessage})))}render(){const{loading:t,error:a,...n}=this.props;return t?this.renderLoading():a?this.renderError():s.a.createElement(e,Le({},n,this.state))}}return Object(l.b)((e=>({loading:e.display.fetching,error:e.display.error,errorMessage:e.display.errorMessage})))(t)},Ie=a(722),Pe=a.n(Ie);const Me="SEARCH_JSON",Ke="EXPAND_JSON",Fe="COLLAPSE_JSON",Ue="REDO_JSON",Re="UNDO_JSON",Je="CHANGE_JSON_MODE",Be="FORMAT_JSON",Ge="COMPACT_JSON";function We(e){return{type:Je,mode:e}}const He="NEW_NAMESPACE",ze="NEW_KEY",Ye="CONFIRM_DELETE_NAMESPACE",qe="CONFIRM_DELETE_KEY",Xe="ERROR_DIALOG";a(723);const Qe=e=>e&&"object"===typeof e?Array.isArray(e)?e.map(Qe):Object.keys(e).sort().reduce(((t,a)=>(t[a]=Qe(e[a]),t)),{}):e;function Ze(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const $e={backgroundColor:"white",height:"100%"};class et extends r.Component{constructor(e){super(e),Ze(this,"changedEvent",(()=>{this.props.dataChanged(this.editor)})),Ze(this,"jsonEditorIsValid",(()=>{try{return this.editor.get(),!0}catch(e){return!1}})),Ze(this,"handleJsonEditor",(e=>{const{jsonSearchValue:t,collapse:a,expand:n,undo:r,redo:s,mode:o,compact:c,format:l}=e.jsonEditor;"code"!==this.editor.getMode()&&(this.editor.search(t||""),a&&this.editor.collapseAll(),n&&this.editor.expandAll(),r&&this.editor._onUndo(),s&&this.editor._onRedo()),"tree"!==this.editor.getMode()&&(c&&this.editor.compact(),l&&this.editor.format()),this.editor.getMode()!==o&&("code"===this.editor.options.mode&&(this.jsonEditorIsValid()?this.editor.setMode(o):(this.props.openErrorMessage(ye.a.t("Invalid JSON. Please fix all remaining issues and try again.")),this.props.jsonChangeMode(this.editor.getMode()))),"code"!==this.editor.options.mode&&this.editor.setMode(o)),this.removeBuiltInMenu()})),this.editor=null}componentDidMount(){this.initEditor()}componentWillUnmount(){this.editor&&this.editor.destroy()}shouldComponentUpdate(e){const{namespace:t,selectedKey:a}=this.props;return t!==e.namespace||a!==e.selectedKey}UNSAFE_componentWillReceiveProps(e){for(const[t,a]of Object.entries(this.props.jsonEditor))if(e.jsonEditor[t]!==a){this.handleJsonEditor(e);break}}updateValue(e){this.editor.set(Qe(e))}UNSAFE_componentWillUpdate(e){this.updateValue(e.value),this.handleJsonEditor(e)}removeBuiltInMenu(){this.editor&&this.editor.frame&&this.editor.frame.contains(this.editor.menu)&&this.editor.frame.removeChild(this.editor.menu)}initEditor(){if(!this.editor&&this.editorContainer){const e={modes:["tree","view","text","form"],onChange:this.changedEvent};this.editor=new Pe.a(this.editorContainer,e),this.removeBuiltInMenu(),this.updateValue(this.props.value)}}render(){return s.a.createElement("div",{id:"jsoneditor",style:$e,ref:e=>this.editorContainer=e})}}var tt=Object(l.b)((e=>({jsonEditor:e.jsonEditor})),(e=>({jsonChangeMode(t){e(We(t))},openErrorMessage(t){e(le(Xe,{message:t}))}})))(et);class at extends r.Component{constructor(...e){var t,a,n;super(...e),n=e=>{try{const t=e.get();this.props.valueChange(t)}catch(t){this.props.valueChange(t,!0)}},(a="handleDataChange")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{value:e,namespace:t,selectedKey:a}=this.props;return s.a.createElement("div",{className:Ee.a.displayArea},s.a.createElement(tt,{value:e,namespace:t,selectedKey:a,dataChanged:this.handleDataChange}))}}var nt=Ve(at),rt=a(724),st=a.n(rt),ot=a(327),ct=a.n(ot),lt=a(390),it=a.n(lt),pt=a(742),ut=a.n(pt),ht=a(743),dt=a.n(ht),mt=a(744),Et=a.n(mt),yt=a(745),gt=a.n(yt),ft=a(746),bt=a.n(ft),vt=a(458),Ct=a.n(vt),Nt=a(459),kt=a.n(Nt),xt=a(391),Ot=a(348),jt=a.n(Ot);function wt(){return(wt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class St extends s.a.Component{constructor(e){super(e),this.changeEvent=this.changeEvent.bind(this),this.handleKeys=this.handleKeys.bind(this)}handleKeys(e){27===e.keyCode&&this.searchField.blur()}changeEvent(e){const t=e.target.value;this.props.changeAction(t)}render(){const{jsonLength:e}=this.props,t={disabled:!1};return e&&e>5e5&&(t.disabled=!0,t.title="Object is too big to search"),s.a.createElement(jt.a,wt({name:"searchbar",floatingLabelText:"Search Object",floatingLabelStyle:{top:"42px"},inputStyle:{marginTop:"13px"},onChange:this.changeEvent,style:this.props.style,onKeyUp:this.handleKeys,underlineStyle:{maxWidth:"150px"},ref:e=>{this.searchField=e}},t))}}var _t=St,Tt=a(756),Dt=a.n(Tt);const Lt={button:{cursor:"default",maxWidth:"200px",textOverflow:"ellipsis"},label:{paddingLeft:0}};class At extends r.Component{render(){const{label:e}=this.props;return s.a.createElement(ce.a,{primary:!0,style:Lt.button,labelStyle:Lt.label,label:e,labelPosition:"before",disableTouchRipple:!0,hoverColor:"rgba(0,0,0,0)"})}}var Vt=At,It=a(757),Pt=a.n(It);class Mt extends r.Component{renderPath(e){const t={fill:m.palette.primary1Color,padding:"0 16px 0 16px",verticalAlign:"middle"},a=e.split("/"),n=a.length-1;return s.a.createElement("span",{className:Pt.a.toolbarTitle},a.map(((e,a)=>s.a.createElement("span",{key:a},s.a.createElement(Vt,{label:e,key:a}),a===n?null:s.a.createElement(Dt.a,{style:t})))))}renderDefault(){return s.a.createElement("span",{className:Pt.a.toolbarTitle},"Value")}render(){const{path:e}=this.props;return e?this.renderPath(e):this.renderDefault()}}var Kt=Mt;const Ft={dropDownMenuIcon:{fill:"black"},dropDownMenu:{marginBottom:"6px"},searchBar:{marginBottom:"25px",maxWidth:"150px",padding:"0 16px 0 16px"}};class Ut extends s.a.Component{constructor(e){var t,a,n;super(e),n=e=>{if(this.state.debounced)this.state.debounced(e);else{const t=function(e,t,a){var n;return function(){var r=this,s=arguments,o=function(){n=null,a||e.apply(r,s)},c=a&&!n;clearTimeout(n),n=setTimeout(o,t),c&&e.apply(r,s)}}((e=>{this.props.jsonSearchAction(e)}),250);this.setState({...this.state,debounced:t}),t(e)}},(a="handleJsonSearch")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,this.renderTreeEdit=this.renderTreeEdit.bind(this),this.renderCodeEdit=this.renderCodeEdit.bind(this),this.handleDropDownMenuChange=this.handleDropDownMenuChange.bind(this),this.state={debounced:null}}handleDropDownMenuChange(e,t,a){this.props.jsonChangeMode(a)}static renderSavingSpinner(){return s.a.createElement(Se,{style:{position:"relative"}})}renderTreeEdit(){const{path:e,saving:t}=this.props;return s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(xt.Toolbar,null,s.a.createElement(xt.ToolbarGroup,null,s.a.createElement(ct.a,{onClick:this.props.handleSave,tooltip:"Save",disabled:t},t?Ut.renderSavingSpinner():s.a.createElement(dt.a,null)),s.a.createElement(st.a,{value:this.props.mode,style:Ft.dropDownMenu,onChange:this.handleDropDownMenuChange,iconStyle:Ft.dropDownMenuIcon},s.a.createElement(it.a,{value:"tree",primaryText:"Tree"}),s.a.createElement(it.a,{value:"code",primaryText:"Code"})),s.a.createElement(ct.a,{onClick:this.props.jsonCollapse,tooltip:"Collapse"},s.a.createElement(Ct.a,null)),s.a.createElement(ct.a,{onClick:this.props.jsonExpand,tooltip:"Expand"},s.a.createElement(kt.a,null)),s.a.createElement(ct.a,{onClick:this.props.jsonUndo,tooltip:"Undo"},s.a.createElement(Et.a,null)),s.a.createElement(ct.a,{onClick:this.props.jsonRedo,tooltip:"Redo"},s.a.createElement(ut.a,null)),s.a.createElement(_t,{style:Ft.searchBar,jsonLength:this.props.jsonEditor.jsonLength,changeAction:this.handleJsonSearch})),s.a.createElement(xt.ToolbarGroup,null,s.a.createElement(Kt,{path:e}))))}renderCodeEdit(){const{path:e}=this.props;return s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(xt.Toolbar,null,s.a.createElement(xt.ToolbarGroup,null,s.a.createElement(ct.a,{onClick:this.props.handleSave,tooltip:"Save"},s.a.createElement(dt.a,null)),s.a.createElement(st.a,{value:this.props.mode,style:Ft.dropDownMenu,onChange:this.handleDropDownMenuChange,iconStyle:Ft.dropDownMenuIcon},s.a.createElement(it.a,{value:"tree",primaryText:"Tree"}),s.a.createElement(it.a,{value:"code",primaryText:"Code"})),s.a.createElement(ct.a,{onClick:this.props.jsonFormat,tooltip:"Format"},s.a.createElement(bt.a,null)),s.a.createElement(ct.a,{onClick:this.props.jsonCompact,tooltip:"Format Compact"},s.a.createElement(gt.a,null))),s.a.createElement(xt.ToolbarGroup,null,s.a.createElement(Kt,{path:e}))))}render(){const{mode:e}=this.props;return"tree"===e?this.renderTreeEdit():this.renderCodeEdit()}}var Rt=Object(l.b)((e=>({mode:e.jsonEditor.mode,jsonEditor:e.jsonEditor,saving:e.jsonEditor.saving})),(e=>({jsonSearchAction(t){e(function(e){return{type:Me,searchValue:e}}(t))},jsonCollapse(){e({type:Fe})},jsonExpand(){e({type:Ke})},jsonCompact(){e({type:Ge})},jsonFormat(){e({type:Be})},jsonUndo(){e({type:Re})},jsonRedo(){e({type:Ue})},jsonChangeMode(t){e(We(t))}})))(Ut);class Jt extends r.Component{constructor(){super(),this.state={valueError:null}}componentDidMount(){const{getValue:e,params:{namespace:t,key:a}}=this.props;"undefined"!==typeof t&&"undefined"!==typeof a&&e(t,a)}UNSAFE_componentWillReceiveProps(e){const{fetchedNamespaces:t,params:a}=e,{fetchKeysForNamespace:n,getValue:r,params:s}=this.props;(!this.props.fetchedNamespaces&&t||!t)&&n(a.namespace,!0),s.namespace===a.namespace&&s.key===a.key||r(a.namespace,a.key)}handleSaveValue(){const{editedValue:e}=this.props,{namespace:t,key:a}=this.props.params;this.state.valueError?this.props.rejectUpdateValue(t,a,e,"Failed to update value: Not valid JSON"):e&&this.props.updateValue(t,a,e)}handleChangeValue(e,t){const{valueChange:a}=this.props,{namespace:n,key:r}=this.props.params;t?this.setState({...this.state,valueError:t}):(this.setState({...this.state,valueError:!1}),a(n,r,e))}render(){const{namespace:e,selectedKey:t}=this.props;let a="";return"undefined"!==typeof e&&(a+=e),"undefined"!==typeof t&&(a+="/".concat(t)),s.a.createElement(y.a,{zDepth:0,className:Ee.a.display},s.a.createElement(de,{route:this.props.route,router:this.props.router,value:this.props.value,editedValue:this.props.editedValue}),s.a.createElement(Rt,{path:a,handleSave:this.handleSaveValue.bind(this)}),s.a.createElement(nt,{namespace:e,selectedKey:t,value:this.props.value,valueChange:this.handleChangeValue.bind(this)}))}}var Bt=Object(i.e)(Object(l.b)((e=>({value:e.display.value,selectedKey:e.display.key,namespace:e.display.namespace,editedValue:e.display.editedValue,fetchedNamespaces:e.sidebar.fetched})),(e=>({getValue(t,a){e(Z(t,a))},fetchKeysForNamespace(t,a){e(Q(t,a))},updateValue(t,a,n){e(ae(t,a,n))},valueChange(t,a,n){e(function(e,t,a){return{type:b,namespace:e,key:t,value:a}}(t,a,n))},rejectUpdateValue(t,a,n,r){e(Y(t,a,n,r))}})))(Jt));class Gt extends r.Component{render(){return s.a.createElement("div",{className:Ee.a.display},s.a.createElement(ke,{text:"Select a namespace and a key to edit."}))}}var Wt=Ve(Gt);var Ht=()=>s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(xt.Toolbar,null));class zt extends r.Component{render(){return s.a.createElement(y.a,{zDepth:0,className:Ee.a.display},s.a.createElement(Ht,null),s.a.createElement(Wt,null))}}var Yt=zt;class qt extends r.Component{constructor(...e){var t,a,n;super(...e),n=()=>{const{namespace:e,keyValue:t}=this.props;this.props.deleteKeyInNamespace(e,t)},(a="handleConfirmed")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{namespace:e,keyValue:t,namespaceStore:a}=this.props;let n=0;a&&a[e]&&(n=Object.keys(this.props.namespaceStore[e].keys).length);const r=s.a.createElement("p",null,"This will also delete the namespace ",e,".");return s.a.createElement(pe,{approveAction:this.handleConfirmed,approveLabel:"Delete",contentStyle:{maxWidth:"400px"}},s.a.createElement("p",null,"Are you sure you want to delete ","'".concat(t,"'")," in"," ",e,"?"),n<2?r:"")}}var Xt=Object(l.b)((e=>({namespace:e.dialog.namespace,keyValue:e.dialog.key,namespaceStore:e.sidebar.namespaces})),(e=>({deleteKeyInNamespace(t,a){e(ne(t,a))}})))(qt);class Qt extends r.Component{constructor(...e){var t,a,n;super(...e),n=()=>{this.props.deleteNamespace(this.props.namespace)},(a="handleConfirmed")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){return s.a.createElement(pe,{approveAction:this.handleConfirmed,approveLabel:"Delete",contentStyle:{maxWidth:"400px"}},s.a.createElement("p",null,"Are you sure you want to delete"," ","'".concat(this.props.namespace,"'"),"?"),s.a.createElement("p",null,"This will delete ",s.a.createElement("u",null,"all")," keys in this namespace."))}}var Zt=Object(l.b)((e=>({namespace:e.dialog.namespace})),(e=>({deleteNamespace(t){e(function(e){return(t,a)=>(t(function(e){return{type:"DELETE_NAMESPACE_PENDING",namespace:e}}(e)),G.deleteNamespace(e).then((n=>(t(q(e)),a().display.namespace===e&&(t(W()),i.d.push("/")),n))).catch((a=>{console.log(a),t(function(e,t){return{type:"DELETE_NAMESPACE_REJECTED",namespace:e,error:void 0}}(e))})))}(t))}})))(Qt);class $t extends r.Component{render(){const e=this.props.component;return s.a.createElement(e,null)}}var ea=$t;class ta extends r.Component{constructor(...e){var t,a,n;super(...e),n=e=>e.props.name===this.props.dialogType,(a="matchDialog")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const e=this.props.children.find(this.matchDialog);if(!e)return null;const t=e.props.component;return s.a.createElement(t,null)}}var aa=Object(l.b)((e=>({dialogType:e.dialog.dialogType})))(ta);class na extends r.Component{render(){return s.a.createElement(pe,{cancelAction:this.props.closeDialog,contentStyle:{maxWidth:"400px"}},this.props.message)}}var ra=Object(l.b)((e=>({message:e.dialog.message})))(na);function sa(e){const t={valid:!1,message:"Required Field."};if(!e)return t;let a="";["#"].forEach((t=>{e.includes(t)&&(a=t)}));const n="You cannot use this character: ".concat(a," in namespaces or keys");return t.message=n,a?t:{valid:!0,message:""}}class oa extends r.Component{constructor(e){super(e),this.state={keyValue:"",keyError:""},this.handleCreate=this.handleCreate.bind(this),this.keyRef=s.a.createRef()}componentDidMount(){setTimeout((()=>{this.keyRef.current.focus()}),1)}handleKeyInput(e){const t=e.target.value;this.setState({keyError:sa(t).message,keyValue:t})}handleCreate(){const{keyValue:e}=this.state,{namespace:t}=this.props;return new Promise(((a,n)=>{const r=sa(e);t&&r.valid?(this.props.createNamespace(t,e),a()):(this.setState({keyError:r.message}),n())}))}render(){return s.a.createElement(pe,{title:"New key for "+this.props.namespace,approveAction:this.handleCreate,contentStyle:{maxWidth:"500px"}},s.a.createElement(jt.a,{hintText:"Key name",autoFocus:!0,ref:this.keyRef,errorText:this.state.keyError,style:{display:"block",width:"100%"},onChange:this.handleKeyInput.bind(this)}))}}var ca=Object(l.b)((e=>({namespace:e.dialog.namespace})),(e=>({createNamespace(t,a){e(te(t,a))}})))(oa);function la(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class ia extends r.Component{constructor(e){super(e),la(this,"handleNamespaceInput",(e=>{const t=e.target.value;this.setState({namespaceError:sa(t).message,namespaceValue:e.target.value})})),la(this,"handleKeyInput",(e=>{const t=e.target.value;this.setState({keyError:sa(t).message,keyValue:e.target.value})})),la(this,"handleCreate",(()=>{const{namespaceValue:e,keyValue:t}=this.state;return new Promise(((a,n)=>{const r=sa(e),s=sa(t);s.valid&&r.valid?(this.props.createNamespace(e,t),a()):(this.setState({keyError:s.message,namespaceError:r.message}),n())}))})),this.state={namespaceValue:"",keyValue:"",namespaceError:"",keyError:""}}handleClose(){this.props.closeDialog()}render(){const e={display:"block",width:"100%"};return s.a.createElement(pe,{title:"New namespace",approveAction:this.handleCreate,cancelAction:this.props.closeDialog,contentStyle:{maxWidth:"500px"}},s.a.createElement(jt.a,{autoFocus:!0,hintText:"Namespace",style:e,errorText:this.state.namespaceError,onChange:this.handleNamespaceInput}),s.a.createElement(jt.a,{fullWidth:!0,hintText:"Key name",style:{fieldStyle:e},errorText:this.state.keyError,onChange:this.handleKeyInput}))}}var pa=Object(l.b)(null,(e=>({createNamespace(t,a){e(te(t,a))}})))(ia),ua=a(758),ha=a.n(ua),da=a(760),ma=a.n(da),Ea=a(460),ya=a.n(Ea);function ga(){return(ga=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function fa(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const ba={alignItems:"center",justifyContent:"center"};var va=(e,t)=>{class a extends r.Component{constructor(...e){super(...e),fa(this,"renderLoading",(()=>s.a.createElement("div",{className:ya.a.sidebarList,style:ba},s.a.createElement(Se,{size:"medium"})))),fa(this,"renderError",(()=>s.a.createElement("div",{className:ya.a.sidebarList,style:ba},s.a.createElement(ct.a,{onClick:t},s.a.createElement(ma.a,null)),s.a.createElement("p",null,"Try again"))))}render(){const{loading:t,error:a,items:n}=this.props;return t||0===n.length?this.renderLoading():a?this.renderError():s.a.createElement(e,ga({},this.props,this.state))}}return Object(l.b)((e=>({loading:e.sidebar.fetching,error:e.sidebar.error})))(a)},Ca=a(392),Na=a(762),ka=a.n(Na),xa=a(763),Oa=a.n(xa),ja=a(764),wa=a.n(ja),Sa=a(461),_a=a.n(Sa),Ta=a(462),Da=a.n(Ta),La=a(766),Aa=a.n(La);function Va(){return(Va=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}class Ia extends r.Component{render(){return s.a.createElement(ct.a,Va({},this.props,{touch:!0,tooltipPosition:"bottom-left"}),s.a.createElement(Aa.a,{color:m.palette.accent3Color}))}}var Pa=Ia;function Ma(){return(Ma=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Ka={vertical:"bottom",horizontal:"left"},Fa={vertical:"top",horizontal:"left"};class Ua extends r.Component{deleteKey(e,t){this.props.deleteKeyInNamespace(e,t)}render(){const{namespace:e,keyName:t,deleteKeyInNamespace:a,...n}=this.props;return s.a.createElement(_a.a,Ma({disableAutoFocus:!0,anchorOrigin:Ka,targetOrigin:Fa,iconButtonElement:s.a.createElement(Pa,null)},n),s.a.createElement(it.a,{leftIcon:s.a.createElement(Da.a,null),onClick:this.deleteKey.bind(this,e,t)},"Delete"))}}var Ra=Object(l.b)(null,(e=>({deleteKeyInNamespace(t,a){e(le(qe,{namespace:t,key:a}))}})))(Ua);function Ja(){return(Ja=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const Ba={primaryText:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",height:"18px"},selectedKey:{backgroundColor:"rgba(0, 0, 0, 0.2)"}};class Ga extends r.Component{render(){const{index:e,namespace:t,keyName:a,router:n,params:r,routes:o,location:c,...l}=this.props,p=r.namespace===t&&r.key===a;return s.a.createElement(Ca.ListItem,Ja({primaryText:s.a.createElement("div",{style:Ba.primaryText},a),key:e,rightIconButton:s.a.createElement(Ra,{namespace:t,keyName:a}),leftIcon:s.a.createElement(wa.a,null),onClick:()=>i.d.push("/edit/".concat(t,"/").concat(a)),style:p?Ba.selectedKey:{}},l))}}var Wa=Object(i.e)(Ga),Ha=a(767),za=a.n(Ha);function Ya(){return(Ya=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const qa={vertical:"bottom",horizontal:"left"},Xa={vertical:"top",horizontal:"left"};class Qa extends r.Component{createKey(e){this.props.newKey(e)}deleteNamespace(e){this.props.deleteNamespace(e)}render(){const{name:e,deleteNamespace:t,newKey:a,...n}=this.props;return s.a.createElement(_a.a,Ya({disableAutoFocus:!0,iconButtonElement:s.a.createElement(Pa,null),anchorOrigin:qa,targetOrigin:Xa},n),s.a.createElement(it.a,{leftIcon:s.a.createElement(za.a,null),onClick:this.createKey.bind(this,e)},"New key"),s.a.createElement(it.a,{leftIcon:s.a.createElement(Da.a,null),onClick:this.deleteNamespace.bind(this,e)},"Delete"))}}var Za=Object(l.b)(null,(e=>({deleteNamespace(t){e(le(Ye,{namespace:t}))},newKey(t){e(le(ze,{namespace:t}))}})))(Qa);const $a={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",height:"18px"};class en extends r.Component{constructor(...e){var t,a,n;super(...e),n=(e,t)=>{e?this.props.closeNamespace(t):this.props.openNamespace(t)},(a="handleToggleNamespace")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{search:e,namespace:{error:t,name:a,fetching:n,open:r}}=this.props;if(t)return s.a.createElement(Ca.ListItem,{primaryText:a,leftIcon:s.a.createElement(ka.a,null)},s.a.createElement(fe.a,null));const o=Object.keys(this.props.namespace.keys).filter((t=>!e||t.toLowerCase().includes(e))).map((e=>s.a.createElement(Wa,{namespace:a,keyName:e,key:e})));let c=s.a.createElement(Se,null);return n||(c=r?s.a.createElement(Oa.a,null):s.a.createElement(ka.a,null)),s.a.createElement(Ca.ListItem,{primaryText:s.a.createElement("div",{style:$a},a),open:r,leftIcon:c,rightIconButton:s.a.createElement(Za,{name:a}),nestedItems:o,onClick:()=>this.handleToggleNamespace(r,a)})}}var tn=Object(l.b)(null,(e=>({openNamespace(t){e(Q(t))},closeNamespace(t){e(X(t))}})))(en);function an(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const nn={overflowY:"auto",overflowX:"hidden",height:"calc(100% - 72px)",paddingTop:0,margin:"8px 5px",backgroundColor:m.palette.primary3Color};class rn extends r.Component{constructor(...e){super(...e),an(this,"filterNamespaces",(e=>{const t=this.props.search.toLowerCase()||"";if(!t)return!0;let a=t.indexOf("#");a<0&&(a=t.length);const n=t.substring(0,a);return e.toLowerCase().includes(n)})),an(this,"filterKeys",(()=>{const e=this.props.search.toLowerCase(),t=e.indexOf("#")+1,a=e.substring(t,e.length);return t>0?a:""}))}render(){const{items:e}=this.props;return s.a.createElement(Ca.List,{style:nn},Object.keys(e).filter((e=>this.filterNamespaces(e))).sort().map((t=>s.a.createElement(tn,{namespace:e[t],search:this.filterKeys(),key:t}))))}}var sn=Object(l.b)((e=>({search:e.sidebar.searchValue})))(rn);class on extends r.Component{constructor(...e){var t,a,n;super(...e),n=e=>{"Enter"===e.key&&this.searchField.blur()},(a="handleKeys")in(t=this)?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n}render(){const{searchChanged:e,searchValue:t}=this.props;return s.a.createElement(jt.a,{name:"searchbar",hintText:"Namespace#Key",floatingLabelStyle:{top:"25px"},style:{height:"auto"},inputStyle:{marginTop:"6px"},floatingLabelText:"Search",value:t,onChange:({target:{value:t}})=>e(t),onFocus:()=>e(""),onKeyUp:this.handleKeys,ref:e=>{this.searchField=e}})}}var cn=Object(l.b)((e=>({searchValue:e.sidebar.searchValue})),(e=>({searchChanged(t){e(function(e){return{type:N,searchValue:e}}(t))}})))(on);class ln extends r.Component{render(){return s.a.createElement(y.a,{style:{zIndex:5}},s.a.createElement(xt.Toolbar,null,s.a.createElement(cn,null),s.a.createElement(xt.ToolbarGroup,{lastChild:!0},this.props.children)))}}var pn=ln;class un extends r.Component{constructor(e){super(e),this.state={showDialog:!1,namespaceListImproved:va(sn,e.getNamespaces)}}componentDidMount(){this.props.getNamespaces()}showDialog(){this.props.openNamespaceDialog()}render(){const{items:e}=this.props,t=this.state.namespaceListImproved;return s.a.createElement("div",{className:ya.a.sidebar},s.a.createElement(pn,null,s.a.createElement(ha.a,{label:"New",onClick:this.showDialog.bind(this),primary:!0})),s.a.createElement(t,{items:e}))}}var hn=Object(l.b)((e=>({items:e.sidebar.namespaces})),(e=>({openNamespaceDialog(){e(le(He))},getNamespaces(){e($())}})))(un),dn=a(768),mn=a.n(dn);class En extends r.Component{render(){return s.a.createElement(mn.a,{open:"string"===typeof this.props.message,message:s.a.createElement("span",null,this.props.message),autoHideDuration:5e3,onRequestClose:this.props.emptySnackbar})}}var yn=Object(l.b)((e=>({message:e.snackbar.message})),(e=>({emptySnackbar(){e({type:k})}})))(En),gn=a(772),fn=a.n(gn);class bn extends r.Component{render(){return s.a.createElement("div",{className:fn.a.wrapper},s.a.createElement("div",{className:fn.a.layoutContainer},s.a.createElement("div",{className:fn.a.pageContainer},s.a.createElement(hn,null),this.props.children,s.a.createElement(aa,null,s.a.createElement(ea,{name:ze,component:ca}),s.a.createElement(ea,{name:He,component:pa}),s.a.createElement(ea,{name:Xe,component:ra}),s.a.createElement(ea,{name:qe,component:Xt}),s.a.createElement(ea,{name:Ye,component:Zt})))),s.a.createElement(yn,null))}}var vn=bn;class Cn extends r.Component{shouldComponentUpdate(){return!1}render(){const{store:e}=this.props;return s.a.createElement(c.a,{muiTheme:m},s.a.createElement(l.a,{store:e},s.a.createElement(i.c,{history:i.d},s.a.createElement(i.b,{path:"/",component:vn},s.a.createElement(i.a,{component:Yt}),s.a.createElement(i.b,{path:"edit/:namespace/:key",component:Bt})))))}}var Nn=Cn,kn=a(365),xn=a(773);const On={dialogType:null},jn={...On};var wn=(e=jn,t)=>{switch(t.type){case v:{const{dialogType:a,dialogprops:n}=t;return{...e,dialogType:a,...n}}case C:return{...e,...On};default:return e}};const Sn={fetching:!1,fetched:!0,error:!1},_n={fetching:!0,fetched:!1,error:!1},Tn={fetching:!1,fetched:!1,error:!0},Dn={fetching:!1,fetched:!1};var Ln=(e=Dn,t)=>{switch(t.type){case Me:return{...e,jsonSearchValue:t.searchValue};case O:case D:case"LOAD_VALUE":return{...e,..._n};case j:case L:return{...e,...Tn};case T:case x:return{...e,...Sn};case g:{const{namespace:a,key:n,value:r}=t;return{...e,...Sn,namespace:a,key:n,value:r,editedValue:r}}case b:{const{namespace:a,key:n,value:r}=t;return{...e,...Sn,namespace:a,key:n,editedValue:r}}case A:return{...e,...Sn,value:t.value};default:return e}};const An={mode:"tree",undo:!1,redo:!1,jsonSearchValue:"",saving:!1};var Vn=(e=An,t)=>{switch(t.type){case Me:return{...e,jsonSearchValue:t.searchValue};case Fe:return{...e,expand:!1,collapse:!0};case Ke:return{...e,expand:!0,collapse:!1};case Ge:return{...e,compact:!0,format:!1};case Be:return{...e,compact:!1,format:!0};case Ue:return{...e,redo:!0};case Re:return{...e,undo:!0};case Je:return{...e,mode:t.mode};case"VALUE_CHANGE":return{...e,undo:!1,redo:!1};case g:return{...e,...An};case T:{const{length:a}=t.value;return{...e,jsonLength:a}}case V:return{...e,saving:!0};case I:case A:return{...e,saving:!1};default:return{...e}}};const In={ignoreNextConfirm:!1};var Pn=(e=In,t)=>{switch(t.type){case U:return{...e,ignoreNextConfirm:t.ignoreNextConfirm}}return e};const Mn={fetching:!1,fetched:!0,error:!1},Kn={fetching:!0,fetched:!1,error:!1},Fn={fetching:!1,fetched:!1,error:!0},Un={searchValue:"",history:[],fetching:!1,fetched:!1,namespaces:{}},Rn=(e,t)=>{const a={};return e.filter((e=>"undefined"===typeof t[e])).forEach((e=>{a[e]={name:e,open:!1,keys:{}}})),a},Jn=e=>{const t={};return e.forEach((e=>{t[e]={key:e}})),t};var Bn=(e=Un,t)=>{switch(t.type){case N:return{...e,searchValue:t.searchValue};case f:{const{namespace:a}=t,n=t.override||!e.namespaces[a].open;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],open:n}}}}case x:return{...e,...Mn,namespaces:{...e.namespaces,...Rn(t.namespaces,e.namespaces)}};case O:return{...e,...Kn};case j:return{...e,...Fn};case w:{const{namespace:a}=t;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],...Mn,keys:Jn(t.keys)}}}}case S:{const{namespace:a}=t;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],...Kn}}}}case _:{const{namespace:a,error:n}=t;return{...e,namespaces:{...e.namespaces,[a]:{...e.namespaces[a],...Fn,errorMessage:n}}}}case T:case P:{const{namespace:a,key:n}=t,r=t.value.value,s={};return"undefined"!==typeof e.namespaces[a]?s[a]={...e.namespaces[a],keys:{...e.namespaces[a].keys,[n]:{key:n,value:r}}}:s[a]={name:a,open:!1,keys:{[n]:{key:n,value:{}}}},{...e,...Mn,namespaces:{...e.namespaces,...s}}}case g:{const{namespace:a,key:n,value:r}=t;return{...e,namespace:a,key:n,value:r}}case F:{const a=e.namespaces;return delete a[t.namespace],{...e,namespaces:{...a}}}case K:{const{namespace:a,key:n}=t,r=e.namespaces[a];return delete r.keys[n],{...e,namespaces:{...e.namespaces,[r.name]:r}}}default:return{...e}}};const Gn={snackbarMessage:{message:""}},Wn={};var Hn=(e=Wn,t)=>{switch(t.type){case g:return{...Gn};case A:return{...e,message:"Value saved."};case I:{let a="Failed to save.";const{error:n}=t;return n&&"string"===typeof n&&(a=t.error),{...e,message:a}}case _:return{...e,message:t.error};case K:return{...e,message:"Key deleted."};case F:return{...e,message:"Namespace deleted."};case M:{let a="Failed to create. ";return t.error&&t.error.message&&(a+=t.error.message),{...e,message:a}}case k:return{...Gn};default:return{...e}}},zn=Object(kn.c)({display:Ln,sidebar:Bn,snackbar:Hn,dialog:wn,jsonEditor:Vn,navigation:Pn}),Yn=Object(kn.d)(zn,Object(kn.a)(xn.a)),qn=a(774);ye.a.addResources("en","default",qn);ye.a;t.default=()=>{const{d2:e}=Object(n.a)();return e?s.a.createElement(Nn,{store:Yn}):null}}}]);
//# sourceMappingURL=app.6e627b2c.chunk.js.map