"use strict";(self.webpackChunkuniverse=self.webpackChunkuniverse||[]).push([[838],{8838:function(e,t,r){r.r(t),r.d(t,{default:function(){return Y}});var n=r(4165),i=r(5861),o=r(2791),s=r(7689),a=r(7107),u=r(4507),c=r(2666),l=r(1087),h=r(4554),d=r(4395),f=r(4663),v=r(890),p=r(909),x=r(6151),g=r(184);function m(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(l.rU,{to:"/signin",children:(0,g.jsx)(x.Z,{color:"inherit",children:"Sign in"})}),(0,g.jsx)(l.rU,{to:"/signup",children:(0,g.jsx)(x.Z,{color:"inherit",children:"Sign up"})})]})}var j=r(3013);function y(e){var t=e.email,r=(0,j.B)().logOut;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v.Z,{variant:"subtitle1",component:"div",sx:{marginRight:4},children:t}),(0,g.jsx)(l.rU,{to:"/favorites",children:(0,g.jsx)(x.Z,{color:"inherit",sx:{marginRight:4},children:"Favorites"})}),(0,g.jsx)(l.rU,{to:"/history",children:(0,g.jsx)(x.Z,{color:"inherit",sx:{marginRight:4},children:"History"})}),(0,g.jsx)(x.Z,{onClick:r,color:"inherit",sx:{marginRight:4},children:"Log out"})]})}var Z=r(7834);function w(){var e=(0,Z.a)(),t=e.isAuth,r=e.email,n=(0,s.TH)().pathname;return(0,g.jsx)(h.Z,{sx:{flexGrow:1},children:(0,g.jsx)(d.Z,{position:"static",children:(0,g.jsxs)(f.Z,{children:[(0,g.jsx)(v.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:(0,g.jsx)(l.rU,{to:"/",children:"UNIVERSE"})}),t?(0,g.jsx)(y,{email:r}):(0,g.jsx)(m,{}),"/search"!==n&&(0,g.jsx)(p.Z,{})]})})})}var b=r(6310),S=r(5758),k=r(5221);function C(e){var t=e.color,r=void 0===t?"primary":t,n=e.iconColor,i=void 0===n?"inerhit":n,o=e.showGitHubIcon,s=void 0===o||o,a=e.showLinkedInIcon,u=void 0===a||a,c=e.showTelegramIcon,l=void 0===c||c;return(0,g.jsx)(h.Z,{sx:{flexGrow:1},children:(0,g.jsx)(d.Z,{position:"relative",color:r,children:(0,g.jsxs)(f.Z,{style:{display:"flex",justifyContent:"flex-end",gap:40},children:[s&&(0,g.jsx)("a",{href:"https://github.com/Dumopolis",children:(0,g.jsx)(S.Z,{color:i})}),u&&(0,g.jsx)("a",{href:"https://www.linkedin.com/in/dumopolis/",children:(0,g.jsx)(b.Z,{color:i})}),l&&(0,g.jsx)("a",{href:"https://t.me/dumopolis",children:(0,g.jsx)(k.Z,{color:i})})]})})})}var I=r(5048),E=r(9658),H=r(3400),R=r(7317),U=r(9823),A=r(9614);function T(){var e=(0,I.I0)(),t=function(){e((0,A.JU)())},r=function(){var e=(0,I.v9)((function(e){return e.alert}));return{activeAlert:e.activeAlert,severity:e.severity,title:e.title,text:e.text}}(),n=r.activeAlert,i=r.severity,s=r.title,a=r.text;return(0,o.useEffect)((function(){var e=setTimeout((function(){return t()}),1e4);return function(){return clearTimeout(e)}}),[i,s,a]),n?(0,g.jsxs)(E.Z,{variant:"outlined",severity:i,sx:{position:"absolute",right:10,top:70,width:"30%"},action:(0,g.jsx)(H.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:t,children:(0,g.jsx)(U.Z,{fontSize:"inherit"})}),children:[(0,g.jsx)(R.Z,{children:s}),a]}):null}var F=r(5671),L=r(3144),N=r(136),O=r(7277),P=function(e){(0,N.Z)(r,e);var t=(0,O.Z)(r);function r(){var e;return(0,F.Z)(this,r),(e=t.call(this)).state={isError:!1,error:null},e}return(0,L.Z)(r,[{key:"componentDidCatch",value:function(e){this.setState({isError:!0,error:e})}},{key:"render",value:function(){return this.state.isError?this.props.errorHandler(this.state.error):this.props.children}}]),r}(o.Component),q=r(9164),B=function(e){return(0,g.jsxs)(q.Z,{children:[(0,g.jsx)(v.Z,{textAlign:"center",variant:"h2",padding:5,children:"Ooops... Somethig happend"}),(0,g.jsxs)(v.Z,{variant:"body1",children:["Error: ",e]})]})},G=(0,a.Z)({typography:{fontFamily:"Roboto Mono, monospace"},palette:{primary:{main:"#000"},secondary:{main:"rgb(90,0,10)"}}});function Y(){var e=(0,o.useContext)(c.p).setTelegramShareEnabled;return(0,o.useEffect)((function(){var t=function(){var t=(0,i.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3001/api").then((function(e){return e.json()})).then((function(e){return e.feature_flags.isTelegramShareEnabled})).then((function(t){return e(t)})).catch((function(e){return console.error(e)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,g.jsxs)(u.Z,{theme:G,children:[(0,g.jsx)(w,{}),(0,g.jsx)(T,{}),(0,g.jsx)("div",{className:"outlet",children:(0,g.jsx)(P,{errorHandler:function(e){return B(e.message)},children:(0,g.jsx)(s.j3,{})})}),(0,g.jsx)(C,{})]})}},909:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(9439),i=r(2791),o=r(7689),s=r(5403),a=r(5048),u=r(3),c=r(9614),l=r(7834),h=r(9643),d=r(4942),f=r(6934),v=r(2065),p=r(7945),x=(0,f.ZP)("div")((function(e){var t=e.theme;return(0,d.Z)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:(0,v.Fq)(t.palette.common.white,.15),"&:hover":{backgroundColor:(0,v.Fq)(t.palette.common.white,.25)},marginLeft:"auto",width:"100%"},t.breakpoints.up("sm"),{width:"auto"})})),g=(0,f.ZP)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),m=(0,f.ZP)(p.ZP)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":(0,d.Z)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),j=r(184);function y(e){var t=e.value,r=(0,i.useState)(t),d=(0,n.Z)(r,2),f=d[0],v=d[1],p=(0,l.a)().isAuth,y=(0,a.I0)(),Z=(0,o.TH)().pathname,w=(0,o.s0)(),b=(0,h.N)((function(){return y((0,u.xR)({request:f}))}),600);return(0,j.jsxs)(x,{value:f,onChange:function(e){v(e.target.value),b()},children:[(0,j.jsx)(g,{children:(0,j.jsx)(s.Z,{})}),(0,j.jsx)(m,{onKeyDown:function(e){"Enter"===e.code&&"/search"!==Z&&(p?(w("/search?request=".concat(f,"&keywords=")),b()):y((0,c.wp)({severity:"info",title:"Sorry... You can`t use search",text:"If you want use search, you need authenticate or registration"})))},placeholder:"Search",inputProps:{"aria-label":"search"}})]})}},7834:function(e,t,r){r.d(t,{a:function(){return i}});var n=r(5048);function i(){var e=(0,n.v9)((function(e){return e.user})).email;return{isAuth:Boolean(e),email:e}}},9643:function(e,t,r){r.d(t,{N:function(){return o}});var n=r(2791),i=r(763);function o(e,t){var r=function(e){var t=(0,n.useRef)();return(0,n.useLayoutEffect)((function(){t.current=e})),t}(e);return(0,n.useMemo)((function(){return(0,i.debounce)((function(){r.current.apply(r,arguments)}),t)}),[t,r])}},5628:function(e,t,r){r.d(t,{a:function(){return i}});var n=r(5048);function i(){var e=(0,n.v9)((function(e){return e.user}));return{uid:e.uid,email:e.email,favorites:e.favorites,openedCardHistory:e.openedCardHistory,searchHistory:e.searchHistory}}},3013:function(e,t,r){r.d(t,{B:function(){return h}});var n=r(5048),i=r(7689),o=r(8473),s=r(6502),a=r(1246),u=r(5802),c=r(9614),l=r(5628);function h(){var e=(0,l.a)(),t=(0,n.I0)(),r=(0,i.s0)();return{signUp:function(e,n){var i=(0,o.v0)();(0,o.Xb)(i,e,n).then((function(e){var n=e.user,i={uid:n.uid,email:n.email,favorites:[],searchHistory:[],openedCardHistory:{}};return t((0,u.av)(i)),(0,a.g)(i),r("/"),i})).then((function(){return t((0,c.wp)({severity:"success",title:"Successful registration",text:"Congratulations! You are registered"}))})).catch((function(e){return t((0,c.wp)({severity:"error",title:"An error has occurred",text:e.message}))}))},logIn:function(e,n){var i=(0,o.v0)();(0,o.e5)(i,e,n).then((function(e){var n=e.user;r("/");var i=(0,s.n)(n.uid,n.email);return t((0,u.av)(i)),(0,a.g)(i),i})).then((function(e){return t((0,c.wp)({severity:"success",title:"Successful authorization",text:"You are logged in as ".concat(e.email)}))})).catch((function(e){return t((0,c.wp)({severity:"error",title:"An error has occurred",text:e.message}))}))},logOut:function(){r("/"),t((0,c.wp)({severity:"info",title:"Logged out",text:"You are logged out of  ".concat(e.email)})),localStorage.setItem(e.uid,JSON.stringify(e)),localStorage.setItem("currentUser",null),t((0,u.kX)())}}}},1246:function(e,t,r){function n(e){localStorage.setItem(e.uid,JSON.stringify(e)),localStorage.setItem("currentUser",e.uid)}r.d(t,{g:function(){return n}})}}]);
//# sourceMappingURL=838.b8acedfc.chunk.js.map