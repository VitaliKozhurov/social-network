"use strict";(self.webpackChunkway_of_samurai=self.webpackChunkway_of_samurai||[]).push([[25],{8025:function(s,e,r){r.r(e),r.d(e,{default:function(){return R}});var t=r(5671),a=r(3144),o=r(136),n=r(7277),i=r(1413),l=r(2791),p="Profile_bgBody__hL99k",u="Profile_bg__L9GlH",h="UserProfile_userInfo__1CjOc",c="UserProfile_avaBody__Fz7CZ",A="UserProfile_avatar__jMA86",d="UserProfile_descr__yW6Dj",f="UserProfile_listTitle__9-IdB";var x=r.p+"static/media/ninja.0699565bdaab8acf46dd1186775f4073.svg",m=r(9439),v="ProfileStatus_body__AIWsO",g="ProfileStatus_title__AFUFw",j="ProfileStatus_statusInput__HYJyv",P="ProfileStatus_statusSpan__lBQUW",S=r(184),C=function(s){var e=s.status,r=s.updateUserStatus,t=(0,l.useState)(!1),a=(0,m.Z)(t,2),o=a[0],n=a[1],i=(0,l.useState)(e),p=(0,m.Z)(i,2),u=p[0],h=p[1];(0,l.useEffect)((function(){h(e)}),[e]);return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:v,children:[(0,S.jsx)("p",{className:g,children:"My status"})," : ",o?(0,S.jsx)("input",{className:j,onBlur:function(){n(!1),r(u)},value:u,onChange:function(s){h(s.currentTarget.value)},autoFocus:!0}):(0,S.jsx)("span",{className:P,onDoubleClick:function(){n(!0)},children:e||"No status"})]})})},N=function(s){var e=s.profile,r=s.profileStatus,t=s.updateUserStatus;return(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)("div",{className:c,children:(0,S.jsx)("img",{className:A,src:e.photos&&e.photos.small?e.photos.small:x,alt:"User Avatar"})}),(0,S.jsxs)("div",{className:d,children:[(0,S.jsxs)("h2",{children:[e.fullName," (samurai)"]}),(0,S.jsx)(C,{status:r,updateUserStatus:t}),(0,S.jsxs)("p",{children:[(0,S.jsx)("span",{className:f,children:"Looking for a job"})," :",e.lookingForAJob?" Yes I am want to find new job on junior position ;)":" No I am work now :)"]}),(0,S.jsx)("p",{children:(0,S.jsx)("span",{className:f,children:"Date of birth :"})}),(0,S.jsx)("p",{children:(0,S.jsx)("span",{className:f,children:"Date of birth :"})}),(0,S.jsx)("p",{children:(0,S.jsx)("span",{className:f,children:"City :"})}),(0,S.jsx)("p",{children:(0,S.jsx)("span",{className:f,children:"Education :"})})]})]})},D=r(703),I="PostCreator_myPostBody__6QeEO",B="PostCreator_title__RIQco",U=r(2177),Q=r(6407),w=(0,U.$j)((function(s){return{title:"Create new post",placeholder:"Write something here..."}}),(0,i.Z)({},Q.ef))((function(s){var e=s.title,r=s.placeholder,t=s.addPost;return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)("div",{className:I,children:[(0,S.jsx)("h2",{className:B,children:e}),(0,S.jsx)(D.Q,{title:"Add post",placeholder:r,addText:t})]})})})),H={postBody:"Post_postBody__0UAQh",header:"Post_header__kO87U",userinfo:"Post_userinfo__1kD7m",avaUser:"Post_avaUser__spuG2",followBtn:"Post_followBtn__Z0CrE",text:"Post_text__Vr1J-",like:"Post_like__3D5Ym",count:"Post_count__V3eKs"},M=function(s){var e=s.message,r=s.name,t=s.likeCount,a=r.split(" ").map((function(s){return s[0]})).reverse().join(""),o=r.split(" ").reverse().join("");return(0,S.jsxs)("div",{className:H.postBody,children:[(0,S.jsxs)("div",{className:H.header,children:[(0,S.jsxs)("div",{className:H.userinfo,children:[(0,S.jsx)("div",{className:H.avaUser,children:a}),(0,S.jsxs)("div",{children:[(0,S.jsx)("h3",{className:H.name,children:o}),(0,S.jsx)("p",{children:"@"+o})]})]}),(0,S.jsx)("button",{className:H.followBtn,children:"Follow"})]}),(0,S.jsx)("p",{className:H.text,children:e}),(0,S.jsxs)("div",{children:[(0,S.jsxs)("div",{className:H.like,children:[(0,S.jsx)("img",{src:"data:image/png;base64,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",alt:"Like logo"}),0===t?null:(0,S.jsx)("span",{className:H.count,children:t})]}),(0,S.jsxs)("div",{className:H.like,children:[(0,S.jsx)("img",{src:"data:image/png;base64,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",alt:"Comment"}),(0,S.jsx)("span",{className:H.count,children:"Comment"})]})]})]})},k="Posts_postsBody__hJheD",G="Posts_title__v84hD",E=(0,U.$j)((function(s){return{posts:s.profilePage.posts}}))((function(s){var e=s.posts.map((function(s){return(0,S.jsx)(M,{name:"Kozhurou Vitali",message:s.message,likeCount:s.likeCount},s.id)}));return(0,S.jsxs)("div",{className:k,children:[(0,S.jsx)("h3",{className:G,children:"My stories"}),e]})})),y=function(s){var e=s.profile,r=s.profileStatus,t=s.updateUserStatus;return(0,S.jsxs)("div",{children:[(0,S.jsx)("div",{className:p,children:(0,S.jsx)("div",{className:u})}),(0,S.jsx)(N,{profile:e,profileStatus:r,updateUserStatus:t}),(0,S.jsx)(w,{}),(0,S.jsx)(E,{})]})},W=r(7689),K=r(7781),q=r(2932),V=function(s){(0,o.Z)(r,s);var e=(0,n.Z)(r);function r(){return(0,t.Z)(this,r),e.apply(this,arguments)}return(0,a.Z)(r,[{key:"componentDidMount",value:function(){this.props.setUserProfile(this.props.paramsID,this.props.userID),this.props.getUserStatus(this.props.paramsID,this.props.userID)}},{key:"componentDidUpdate",value:function(s){s.paramsID!==this.props.paramsID&&(this.props.setUserProfile(this.props.paramsID,this.props.userID),this.props.getUserStatus(this.props.paramsID,this.props.userID))}},{key:"render",value:function(){return(0,S.jsx)(S.Fragment,{children:(0,S.jsx)(y,{profile:this.props.profile,profileStatus:this.props.profileStatus,updateUserStatus:this.props.updateUserStatus})})}}]),r}(l.Component),R=(0,K.qC)(q.D,(0,U.$j)((function(s){return{profile:s.profilePage.profile,profileStatus:s.profilePage.profileStatus,userID:s.auth.userID}}),{setUserProfile:Q.bq,getUserStatus:Q.Qw,updateUserStatus:Q.wM}),(function(s){return function(e){var r=(0,W.UO)().id;return(0,S.jsx)(s,(0,i.Z)((0,i.Z)({},e),{},{paramsID:r}))}}))(V)}}]);
//# sourceMappingURL=25.11364d69.chunk.js.map