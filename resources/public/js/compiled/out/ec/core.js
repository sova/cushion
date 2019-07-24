// Compiled by ClojureScript 1.10.520 {}
goog.provide('ec.core');
goog.require('cljs.core');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/ec/core.cljs. Go ahead and edit it and see reloading in action.");
if((typeof ec !== 'undefined') && (typeof ec.core !== 'undefined') && (typeof ec.core.app_state !== 'undefined')){
} else {
ec.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"made-by","made-by",-229306310),"Vaso Vukotic",new cljs.core.Keyword(null,"aka","aka",553516647),"sova",new cljs.core.Keyword(null,"twitter","twitter",-589267671),"_vaso",new cljs.core.Keyword(null,"app-name","app-name",-268811251),"electriCushion online magazine",new cljs.core.Keyword(null,"current-view","current-view",-1037279042),"reviews"], null));
}
ec.core.main_cush = rum.core.build_defc.call(null,(function (){
return React.createElement("div",({"id": "maincush"}),"electriCushion is made possible by generous readers like you.");
}),null,"main-cush");
rum.core.mount.call(null,ec.core.main_cush.call(null),document.getElementById("app"));
ec.core.on_js_reload = (function ec$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1563771974679
