(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(60)},33:function(e,t,n){},35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),s=n.n(o),i=(n(33),n(8)),c=n(9),u=n(12),l=n(10),h=n(11),m=n(2),S=n(5),b=n(14),p=n(15),v=(n(35),n(24)),d=n.n(v),f=n(6),y=n(25),O=n(26),E=n(7),j=n(27),T=n.n(j),g="redux",k={width:"40%"},w={width:"30%"},K={width:"10%"};f.b.add(O.a);var N={NONE:function(e){return e},TITLE:function(e){return Object(E.sortBy)(e,"title")},AUTHOR:function(e){return Object(E.sortBy)(e,"author")},COMMENTS:function(e){return Object(E.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(E.sortBy)(e,"points").reverse()}},C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e)))._isMounted=!1,n.state={results:null,searchKey:"",searchTerm:g,error:null,isLoading:!1},n.onDismiss=n.onDismiss.bind(Object(m.a)(Object(m.a)(n))),n.onSearchChange=n.onSearchChange.bind(Object(m.a)(Object(m.a)(n))),n.setSearchTopStories=n.setSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.onSearchSubmit=n.onSearchSubmit.bind(Object(m.a)(Object(m.a)(n))),n.fetchSearchTopStories=n.fetchSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n.needsToSearchTopStories=n.needsToSearchTopStories.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"needsToSearchTopStories",value:function(e){return!this.state.results[e]}},{key:"onDismiss",value:function(e){var t=this.state,n=t.searchKey,a=t.results,r=a[n],o=r.hits,s=r.page,i=o.filter(function(t){return t.objectID!==e});this.setState({results:Object(b.a)({},a,Object(S.a)({},n,{hits:i,page:s}))})}},{key:"fetchSearchTopStories",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.setState({isLoading:!0}),d()("".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(n,"&").concat("hitsPerPage=").concat("100")).then(function(e){return t._isMounted&&t.setSearchTopStories(e.data)}).catch(function(e){return t._isMounted&&t.setState({error:e})})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopStories(t)&&this.fetchSearchTopStories(t),e.preventDefault()}},{key:"setSearchTopStories",value:function(e){var t=e.hits,n=e.page;this.setState(function(e,t){return function(n){var a=n.searchKey,r=n.results,o=r&&r[a]?r[a].hits:[],s=[].concat(Object(p.a)(o),Object(p.a)(e));return{results:Object(b.a)({},r,Object(S.a)({},a,{hits:s,page:t})),isLoading:!1}}}(t,n))}},{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTerm,a=t.results,o=t.searchKey,s=t.error,i=t.isLoading,c=a&&a[o]&&a[o].page||0,u=a&&a[o]&&a[o].hits||[];return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"interactions"},r.a.createElement(M,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit})),s?r.a.createElement("div",{className:"interactions"},r.a.createElement("p",null,"Something went wrong.")):r.a.createElement(L,{list:u,onDismiss:this.onDismiss}),r.a.createElement("div",{className:"interactions"},r.a.createElement(P,{isLoading:i,onClick:function(){return e.fetchSearchTopStories(o,c+1)}},"More")))}}]),t}(a.Component),D=function(){return r.a.createElement(y.a,{icon:"igloo"})},M=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.value,a=t.onChange,o=t.onSubmit,s=t.children;return r.a.createElement("form",{onSubmit:o},s,r.a.createElement("input",{type:"text",value:n,onChange:a,ref:function(t){return e.input=t}}),r.a.createElement("button",{type:"submit"},"Search"))}}]),t}(a.Component),I=function(e){var t=e.sortKey,n=e.activeSortKey,a=e.onSort,o=e.children,s=T()("button-inline",{"button-active":t===n});return r.a.createElement(_,{onClick:function(){return a(t)},className:s},o)},L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.onDismiss,a=this.state,o=a.sortKey,s=a.isSortReverse,i=N[o](t),c=s?i.reverse():i;return r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table-header"},r.a.createElement("span",{style:{width:"40%"}},r.a.createElement(I,{sortKey:"TITLE",onSort:this.onSort,activeSortKey:o},"Title")),r.a.createElement("span",{style:{width:"30%"}},r.a.createElement(I,{sortKey:"AUTHOR",onSort:this.onSort,activeSortKey:o},"Author")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(I,{sortKey:"COMMENTS",onSort:this.onSort,activeSortKey:o},"Comments")),r.a.createElement("span",{style:{width:"10%"}},r.a.createElement(I,{sortKey:"POINTS",onSort:this.onSort,activeSortKey:o},"Points")),r.a.createElement("span",{style:{width:"10%"}},"Archive")),c.map(function(e){return r.a.createElement("div",{key:e.objectID,className:"table-row"},r.a.createElement("span",{style:k},r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("span",{style:w},e.author),r.a.createElement("span",{style:K},e.num_comments),r.a.createElement("span",{style:K},e.points),r.a.createElement("span",{style:K},r.a.createElement(_,{onClick:function(){return n(e.objectID)},className:"button-inline"},"Dismiss")))}))}}]),t}(a.Component),_=function(e){var t=e.onClick,n=e.className,a=e.children;return r.a.createElement("button",{onClick:t,className:n,type:"button"},a)};_.defaultProps={className:""};var B,P=(B=_,function(e){return e.isLoading?r.a.createElement(D,null):r.a.createElement(B,e)}),R=C;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.e6769bcd.chunk.js.map