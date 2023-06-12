"use strict";(self.webpackChunkuniverse=self.webpackChunkuniverse||[]).push([[48],{5803:function(r,t,e){e.d(t,{Z:function(){return U}});var o=e(9439),n=e(2791),i=e(9012),a=e(4942),s=e(3433),u=e(3366),l=e(7462),c=e(4419),d=e(2466),p=e(7945),f=e(6934),v=e(1402),m=e(5878),g=e(1217),Z=e(5891);function h(r){return(0,g.Z)("MuiInput",r)}var b=(0,l.Z)({},Z.Z,(0,m.Z)("MuiInput",["root","underline","input"])),w=e(184),x=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],y=(0,f.ZP)(p.Ej,{shouldForwardProp:function(r){return(0,f.FO)(r)||"classes"===r},name:"MuiInput",slot:"Root",overridesResolver:function(r,t){var e=r.ownerState;return[].concat((0,s.Z)((0,p.Gx)(r,t)),[!e.disableUnderline&&t.underline])}})((function(r){var t,e=r.theme,o=r.ownerState,n="light"===e.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(n="rgba(".concat(e.vars.palette.common.onBackgroundChannel," / ").concat(e.vars.opacity.inputUnderline,")")),(0,l.Z)({position:"relative"},o.formControl&&{"label + &":{marginTop:16}},!o.disableUnderline&&(t={"&:after":{borderBottom:"2px solid ".concat((e.vars||e).palette[o.color].main),left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"}},(0,a.Z)(t,"&.".concat(b.focused,":after"),{transform:"scaleX(1) translateX(0)"}),(0,a.Z)(t,"&.".concat(b.error),{"&:before, &:after":{borderBottomColor:(e.vars||e).palette.error.main}}),(0,a.Z)(t,"&:before",{borderBottom:"1px solid ".concat(n),left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"}),(0,a.Z)(t,"&:hover:not(.".concat(b.disabled,", .").concat(b.error,"):before"),{borderBottom:"2px solid ".concat((e.vars||e).palette.text.primary),"@media (hover: none)":{borderBottom:"1px solid ".concat(n)}}),(0,a.Z)(t,"&.".concat(b.disabled,":before"),{borderBottomStyle:"dotted"}),t))})),C=(0,f.ZP)(p.rA,{name:"MuiInput",slot:"Input",overridesResolver:p._o})({}),S=n.forwardRef((function(r,t){var e,o,n,i,a=(0,v.Z)({props:r,name:"MuiInput"}),s=a.disableUnderline,f=a.components,m=void 0===f?{}:f,g=a.componentsProps,Z=a.fullWidth,b=void 0!==Z&&Z,S=a.inputComponent,I=void 0===S?"input":S,P=a.multiline,U=void 0!==P&&P,M=a.slotProps,k=a.slots,B=void 0===k?{}:k,R=a.type,j=void 0===R?"text":R,F=(0,u.Z)(a,x),H=function(r){var t=r.classes,e={root:["root",!r.disableUnderline&&"underline"],input:["input"]},o=(0,c.Z)(e,h,t);return(0,l.Z)({},t,o)}(a),N={root:{ownerState:{disableUnderline:s}}},G=(null!=M?M:g)?(0,d.Z)(null!=M?M:g,N):N,O=null!=(e=null!=(o=B.root)?o:m.Root)?e:y,X=null!=(n=null!=(i=B.input)?i:m.Input)?n:C;return(0,w.jsx)(p.ZP,(0,l.Z)({slots:{root:O,input:X},slotProps:G,fullWidth:b,inputComponent:I,multiline:U,ref:t,type:j},F,{classes:H}))}));S.muiName="Input";var I=S,P=e(6151);function U(r){var t=r.handleClick,e=r.buttonText,a=r.color,s=void 0===a?"secondary":a,u=r.firstPlaceholder,l=void 0===u?"Email":u,c=r.secondPlaceholder,d=void 0===c?"Pasword":c,p=(0,n.useState)(""),f=(0,o.Z)(p,2),v=f[0],m=f[1],g=(0,n.useState)(""),Z=(0,o.Z)(g,2),h=Z[0],b=Z[1];return(0,w.jsxs)(i.Z,{sx:{gap:"10px"},children:[(0,w.jsx)(I,{placeholder:l,margin:"dense",color:s,type:"email",value:v,onChange:function(r){return m(r.target.value)}}),(0,w.jsx)(I,{placeholder:d,margin:"dense",color:s,type:"password",value:h,onChange:function(r){return b(r.target.value)}}),(0,w.jsx)(P.Z,{color:s,onClick:function(){return t(v,h)},children:e})]})}},5628:function(r,t,e){e.d(t,{a:function(){return n}});var o=e(5048);function n(){var r=(0,o.v9)((function(r){return r.user}));return{uid:r.uid,email:r.email,favorites:r.favorites,openedCardHistory:r.openedCardHistory,searchHistory:r.searchHistory}}},3013:function(r,t,e){e.d(t,{B:function(){return d}});var o=e(5048),n=e(7689),i=e(8473),a=e(6502),s=e(1246),u=e(5802),l=e(9614),c=e(5628);function d(){var r=(0,c.a)(),t=(0,o.I0)(),e=(0,n.s0)();return{signUp:function(r,o){var n=(0,i.v0)();(0,i.Xb)(n,r,o).then((function(r){var o=r.user,n={uid:o.uid,email:o.email,favorites:[],searchHistory:[],openedCardHistory:{}};return t((0,u.av)(n)),(0,s.g)(n),e("/"),n})).then((function(){return t((0,l.wp)({severity:"success",title:"Successful registration",text:"Congratulations! You are registered"}))})).catch((function(r){return t((0,l.wp)({severity:"error",title:"An error has occurred",text:r.message}))}))},logIn:function(r,o){var n=(0,i.v0)();(0,i.e5)(n,r,o).then((function(r){var o=r.user;e("/");var n=(0,a.n)(o.uid,o.email);return t((0,u.av)(n)),(0,s.g)(n),n})).then((function(r){return t((0,l.wp)({severity:"success",title:"Successful authorization",text:"You are logged in as ".concat(r.email)}))})).catch((function(r){return t((0,l.wp)({severity:"error",title:"An error has occurred",text:r.message}))}))},logOut:function(){e("/"),t((0,l.wp)({severity:"info",title:"Logged out",text:"You are logged out of  ".concat(r.email)})),localStorage.setItem(r.uid,JSON.stringify(r)),localStorage.setItem("currentUser",null),t((0,u.kX)())}}}},1246:function(r,t,e){function o(r){localStorage.setItem(r.uid,JSON.stringify(r)),localStorage.setItem("currentUser",r.uid)}e.d(t,{g:function(){return o}})},9012:function(r,t,e){e.d(t,{Z:function(){return h}});var o=e(3366),n=e(7462),i=e(2791),a=e(8182),s=e(4419),u=e(6934),l=e(1402),c=e(5878),d=e(1217);function p(r){return(0,d.Z)("MuiFormGroup",r)}(0,c.Z)("MuiFormGroup",["root","row","error"]);var f=e(2930),v=e(6147),m=e(184),g=["className","row"],Z=(0,u.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(r,t){var e=r.ownerState;return[t.root,e.row&&t.row]}})((function(r){var t=r.ownerState;return(0,n.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),h=i.forwardRef((function(r,t){var e=(0,l.Z)({props:r,name:"MuiFormGroup"}),i=e.className,u=e.row,c=void 0!==u&&u,d=(0,o.Z)(e,g),h=(0,f.Z)(),b=(0,v.Z)({props:e,muiFormControl:h,states:["error"]}),w=(0,n.Z)({},e,{row:c,error:b.error}),x=function(r){var t=r.classes,e={root:["root",r.row&&"row",r.error&&"error"]};return(0,s.Z)(e,p,t)}(w);return(0,m.jsx)(Z,(0,n.Z)({className:(0,a.Z)(x.root,i),ownerState:w,ref:t},d))}))}}]);
//# sourceMappingURL=48.2956bcab.chunk.js.map