(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"14c3":function(t,e,a){var n=a("c6b6"),s=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var i=a.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},5319:function(t,e,a){"use strict";var n=a("d784"),s=a("825a"),i=a("7b0b"),o=a("50c4"),r=a("a691"),l=a("1d80"),c=a("8aa5"),u=a("14c3"),d=Math.max,v=Math.min,h=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,g=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var b=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,_=b?"$":"$0";return[function(a,n){var s=l(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,s,n):e.call(String(s),a,n)},function(t,n){if(!b&&m||"string"===typeof n&&-1===n.indexOf(_)){var i=a(e,t,this,n);if(i.done)return i.value}var l=s(t),h=String(this),f="function"===typeof n;f||(n=String(n));var g=l.global;if(g){var C=l.unicode;l.lastIndex=0}var y=[];while(1){var E=u(l,h);if(null===E)break;if(y.push(E),!g)break;var k=String(E[0]);""===k&&(l.lastIndex=c(h,o(l.lastIndex),C))}for(var w="",S=0,R=0;R<y.length;R++){E=y[R];for(var I=String(E[0]),A=d(v(r(E.index),h.length),0),$=[],T=1;T<E.length;T++)$.push(p(E[T]));var U=E.groups;if(f){var P=[I].concat($,A,h);void 0!==U&&P.push(U);var M=String(n.apply(void 0,P))}else M=x(I,h,A,$,U,n);A>=S&&(w+=h.slice(S,A)+M,S=A+I.length)}return w+h.slice(S)}];function x(t,a,n,s,o,r){var l=n+t.length,c=s.length,u=g;return void 0!==o&&(o=i(o),u=f),e.call(r,u,(function(e,i){var r;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(l);case"<":r=o[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>c){var d=h(u/10);return 0===d?e:d<=c?void 0===s[d-1]?i.charAt(1):s[d-1]+i.charAt(1):e}r=s[u-1]}return void 0===r?"":r}))}}))},"5c3a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("nav",{staticClass:"topbar navbar navbar-expand-lg navbar-dark bg-darker"},[a("span",{staticClass:"navbar-brand"},[a("span",{staticClass:"sidebar-trigger h4 align-middle ml-2 mr-2 c-pointer",on:{click:function(e){t.sidebarShow=!t.sidebarShow}}},[a("i",{staticClass:"fas fa-bars"})]),t._v(" "+t._s(t.currentRouteName)+" ")]),a("div",{staticClass:"navbar-nav ml-auto mr-0 mr-md-2"},[a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"btn btn-lg btn-outline-primary"},[t._v(" Home "),a("i",{staticClass:"fas fa-angle-double-left ml-1"})])])],1)]),a("div",{staticClass:"sidebar bg-darker",class:{show:t.sidebarShow}},[a("div",{staticClass:"links",on:{click:function(e){t.sidebarShow=!1}}},[a("router-link",{staticClass:"link",attrs:{to:"/dashboard"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-rocket"})]),a("span",{staticClass:"text"},[t._v("Quick Message")])]),a("router-link",{staticClass:"link",attrs:{to:"/dashboard/messages"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-envelope-open-text"})]),a("span",{staticClass:"text"},[t._v("Messages")])]),a("router-link",{staticClass:"link",attrs:{to:"/dashboard/help"}},[a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-book"})]),a("span",{staticClass:"text"},[t._v("Help & FAQ")])]),t.api.isAuthenticated()?a("div",{staticClass:"link link-bottom c-pointer",on:{click:t.logout}},[t._m(0),a("span",{staticClass:"text"},[t._v("Logout")])]):t._e()],1)]),a("div",{staticClass:"main",on:{click:function(e){t.sidebarShow=!1}}},[a("div",{staticClass:"container-fluid pt-4 px-2 p-lg-4"},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)]),a("div",{staticClass:"modal fade",attrs:{id:"introModal",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg",staticStyle:{"max-height":"90vh"},attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(1),t._m(2),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},on:{click:t.introClose}},[t._v(" Close ")])])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon"},[a("i",{staticClass:"fas fa-sign-out-alt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h3",{staticClass:"modal-title"},[t._v("Welcome!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-body",staticStyle:{"max-height":"70vh",overflow:"auto"}},[a("p",{staticClass:"intro-text"},[t._v(" As you might have noticed, a lot has changed here. The whole site was undergoing a complete rewrite in the past weeks and this is the result. Beside a new design, the rewrite also has a lot of new features. ")]),a("h4",{staticClass:"mt-4"},[t._v("New Features")]),a("ul",{staticClass:"intro-text"},[a("li",[t._v("Complete Redesign")]),a("li",[t._v("Up to 10 embeds per message")]),a("li",[t._v("Support for files / attachments")]),a("li",[t._v("Editing existing messages")]),a("li",[t._v("Proper message preview")]),a("li",[t._v("Saving and editing messages with custom names")]),a("li",[t._v("Actually meaningful error responses")])]),a("h4",{staticClass:"mt-4"},[t._v("Quick Start")]),a("p",{staticClass:"intro-text"},[t._v(" A lot has changed so here are some tips to get you started if you are coming from the old website: ")]),a("ul",{staticClass:"intro-text"},[a("li",[t._v(" You can now add up to 10 embeds using the "),a("span",{staticClass:"btn btn-sm btn-outline-primary"},[a("i",{staticClass:"fas fa-plus"})]),t._v(" button. ")]),a("li",[t._v("You can collapse and un-collapse each embed by clicking on their name")]),a("li",[t._v(" You can save your message using the "),a("button",{staticClass:"btn btn-sm btn-outline-secondary"},[t._v(" Save Message ")]),t._v(" button ")]),a("li",[t._v('Editing a saved message is possible by clicking on "Messages" on the left side')]),a("li",[t._v(" Sending a message can be done by pasting a Webhook URL into the input and clicking the "),a("button",{staticClass:"btn btn-sm btn-outline-primary"},[t._v(" Send Message ")]),t._v(" button ")]),a("li",[t._v(" Editing a previously sent message can be done by pasting the Message URL or ID into the input below the Webhook URL and clicking on the "),a("button",{staticClass:"btn btn-sm btn-outline-secondary"},[t._v(" Edit Message ")]),t._v(" button ")]),a("li",[t._v(' Creating a webhook is no longer possible directly over the website. You need to go to the channel settings in discord and click on "Integrations" or "Webhooks" (depending on your device) '),a("br"),t._v(" If you are using the mobile app, you can also use the "),a("a",{attrs:{href:"/invite"}},[t._v("discord bot")]),t._v(" to create a webhook: "),a("code",[t._v(">webhook")])])]),a("h4",{staticClass:"mt-4"},[t._v("Migrating")]),a("p",{staticClass:"intro-text"},[t._v(" You can easily migrate your previously saved embeds from the old website to the new one until the 31th of January: ")]),a("ul",{staticClass:"intro-text"},[a("li",[t._v("Go to "),a("a",{attrs:{href:"https://old.discord.club",target:"_blank"}},[t._v("https://old.discord.club")])]),a("li",[t._v("Login with your discord account and select one of your previously saved embeds")]),a("li",[t._v("Copy the JSON-Code on the old site and paste it on the new one.")]),a("li",[t._v('Click "Save Message" on the new site and give the message a name. (You might need to login) ')])])])}],i=(a("b0c0"),a("ac1f"),a("5319"),a("1157")),o=a.n(i),r={name:"Dashboard",data:function(){return{sidebarShow:!1}},mounted:function(){var t=localStorage.getItem("intro");t||o()("#introModal").modal({backdrop:"static"})},computed:{currentRouteName:function(){return this.$route.name},api:function(){return this.$store.state.api}},methods:{logout:function(){this.api.deleteToken(),window.location.replace("/")},introClose:function(){localStorage.setItem("intro","true")}}},l=r,c=(a("b4cd"),a("2877")),u=Object(c["a"])(l,n,s,!1,null,"bad759c0",null);e["default"]=u.exports},6547:function(t,e,a){var n=a("a691"),s=a("1d80"),i=function(t){return function(e,a){var i,o,r=String(s(e)),l=n(a),c=r.length;return l<0||l>=c?t?"":void 0:(i=r.charCodeAt(l),i<55296||i>56319||l+1===c||(o=r.charCodeAt(l+1))<56320||o>57343?t?r.charAt(l):i:t?r.slice(l,l+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6bb7":function(t,e,a){},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),s=a("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,r=i,l=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=s.UNSUPPORTED_Y||s.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=l||u||c;d&&(r=function(t){var e,a,s,r,d=this,v=c&&d.sticky,h=n.call(d),f=d.source,g=0,p=t;return v&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),p=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",p=" "+p,g++),a=new RegExp("^(?:"+f+")",h)),u&&(a=new RegExp("^"+f+"$(?!\\s)",h)),l&&(e=d.lastIndex),s=i.call(v?a:d,p),v?s?(s.input=s.input.slice(g),s[0]=s[0].slice(g),s.index=d.lastIndex,d.lastIndex+=s[0].length):d.lastIndex=0:l&&s&&(d.lastIndex=d.global?s.index+s[0].length:e),u&&s&&s.length>1&&o.call(s[0],a,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(s[r]=void 0)})),s}),t.exports=r},"9f7f":function(t,e,a){"use strict";var n=a("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,a){"use strict";var n=a("23e7"),s=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b4cd:function(t,e,a){"use strict";a("6bb7")},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),s=a("d039"),i=a("b622"),o=a("9263"),r=a("9112"),l=i("species"),c=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),h=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var f=i(t),g=!s((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),p=g&&!s((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return e=!0,null},a[f](""),!e}));if(!g||!p||"replace"===t&&(!c||!u||v)||"split"===t&&!h){var b=/./[f],m=a(f,""[t],(function(t,e,a,n,s){return e.exec===o?g&&!s?{done:!0,value:b.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),_=m[0],x=m[1];n(String.prototype,t,_),n(RegExp.prototype,f,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&r(RegExp.prototype[f],"sham",!0)}}}]);