(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new-game"],{2871:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("Nouvelle partie")]),a("loading",{attrs:{active:t.isLoading,"is-full-page":t.fullPageLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("b-card",{staticClass:"col-12 col-md-6 mx-auto mb-1 text-left"},[a("b-form",[a("b-form-group",{attrs:{label:"Nom:","label-for":"name"}},[a("b-form-input",{attrs:{type:"text",id:"name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[a("b-form-invalid-feedback",[t._v(" Le nom est obligatoire ")])],1)],1),a("b-form-group",{attrs:{label:"Date:","label-for":"createdAt"}},[a("datetime",{attrs:{type:"datetime",id:"createdAt"},model:{value:t.form.createdAt,callback:function(e){t.$set(t.form,"createdAt",e)},expression:"form.createdAt"}},[a("b-form-invalid-feedback",[t._v(" La date est obligatoire ")])],1)],1),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isLoading||t.invalidForm},on:{click:t.onSubmit}},[t._v(" Commencer ")])],1)],1)],1)},o=[],r=(a("b0c0"),a("9062")),i=a.n(r),c={name:"NewGame",components:{Loading:i.a},data:function(){return{fullPageLoading:!0,form:{name:"",createdAt:new Date}}},created:function(){this.form.createdAt=this.getNow()},computed:{isLoading:function(){return this.$store.getters["game/isLoading"]},invalidForm:function(){return!this.form.name}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),this.$store.dispatch("game/addNewGame",this.form).then((function(){var t=e.$store.getters["game/currentGame"];e.$router.push({name:"game",params:{gameId:t.id}})}))},getNow:function(){var t=new Date;return t.toISOString()}}},m=c,s=a("2877"),l=Object(s["a"])(m,n,o,!1,null,null,null);e["default"]=l.exports},b0c0:function(t,e,a){var n=a("83ab"),o=a("9bf2").f,r=Function.prototype,i=r.toString,c=/^\s*function ([^ (]*)/,m="name";!n||m in r||o(r,m,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=new-game.bd2192f1.js.map