// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('goog.object');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it.
 */
rum.core.state = (function rum$core$state(comp){
return goog.object.get(comp.state,":rum/state");
});
rum.core.extend_BANG_ = (function rum$core$extend_BANG_(obj,props){
var seq__23255 = cljs.core.seq.call(null,props);
var chunk__23257 = null;
var count__23258 = (0);
var i__23259 = (0);
while(true){
if((i__23259 < count__23258)){
var vec__23267 = cljs.core._nth.call(null,chunk__23257,i__23259);
var k = cljs.core.nth.call(null,vec__23267,(0),null);
var v = cljs.core.nth.call(null,vec__23267,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__23273 = seq__23255;
var G__23274 = chunk__23257;
var G__23275 = count__23258;
var G__23276 = (i__23259 + (1));
seq__23255 = G__23273;
chunk__23257 = G__23274;
count__23258 = G__23275;
i__23259 = G__23276;
continue;
} else {
var G__23277 = seq__23255;
var G__23278 = chunk__23257;
var G__23279 = count__23258;
var G__23280 = (i__23259 + (1));
seq__23255 = G__23277;
chunk__23257 = G__23278;
count__23258 = G__23279;
i__23259 = G__23280;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23255);
if(temp__5720__auto__){
var seq__23255__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23255__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23255__$1);
var G__23281 = cljs.core.chunk_rest.call(null,seq__23255__$1);
var G__23282 = c__4550__auto__;
var G__23283 = cljs.core.count.call(null,c__4550__auto__);
var G__23284 = (0);
seq__23255 = G__23281;
chunk__23257 = G__23282;
count__23258 = G__23283;
i__23259 = G__23284;
continue;
} else {
var vec__23270 = cljs.core.first.call(null,seq__23255__$1);
var k = cljs.core.nth.call(null,vec__23270,(0),null);
var v = cljs.core.nth.call(null,vec__23270,(1),null);
if((!((v == null)))){
goog.object.set(obj,cljs.core.name.call(null,k),cljs.core.clj__GT_js.call(null,v));


var G__23285 = cljs.core.next.call(null,seq__23255__$1);
var G__23286 = null;
var G__23287 = (0);
var G__23288 = (0);
seq__23255 = G__23285;
chunk__23257 = G__23286;
count__23258 = G__23287;
i__23259 = G__23288;
continue;
} else {
var G__23289 = cljs.core.next.call(null,seq__23255__$1);
var G__23290 = null;
var G__23291 = (0);
var G__23292 = (0);
seq__23255 = G__23289;
chunk__23257 = G__23290;
count__23258 = G__23291;
i__23259 = G__23292;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__23294_SHARP_,p2__23293_SHARP_){
return p2__23293_SHARP_.call(null,p1__23294_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_catch = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-catch","did-catch",2139522313),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
var static_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"static-properties","static-properties",-577838503),mixins));
var ctor = ((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props){
return (function (props){
var this$ = this;
goog.object.set(this$,"state",({":rum/state": cljs.core.volatile_BANG_.call(null,rum.util.call_all.call(null,cljs.core.assoc.call(null,goog.object.get(props,":rum/initial-state"),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props))}));

return React.Component.call(this$,props);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props))
;
var _ = goog.inherits(ctor,React.Component);
var prototype = goog.object.get(ctor,"prototype");
if(cljs.core.empty_QMARK_.call(null,will_mount)){
} else {
goog.object.set(prototype,"componentWillMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_mount)){
} else {
goog.object.set(prototype,"componentDidMount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillReceiveProps",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,goog.object.get(next_props,":rum/initial-state"));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__23296_SHARP_,p2__23295_SHARP_){
return p2__23295_SHARP_.call(null,old_state,p1__23296_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,should_update)){
} else {
goog.object.set(prototype,"shouldComponentUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,goog.object.get(next_state,":rum/state"));
var or__4131__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__23297_SHARP_){
return p1__23297_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
,should_update);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,will_update)){
} else {
goog.object.set(prototype,"componentWillUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,next_state){
var this$ = this;
var new_state = goog.object.get(next_state,":rum/state");
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"render",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__23299 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__23299,(0),null);
var next_state = cljs.core.nth.call(null,vec__23299,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,did_update)){
} else {
goog.object.set(prototype,"componentDidUpdate",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (___$1,___$2){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

if(cljs.core.empty_QMARK_.call(null,did_catch)){
} else {
goog.object.set(prototype,"componentDidCatch",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (error,info){
var this$ = this;
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_catch,error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","component-stack","rum/component-stack",2037541138),goog.object.get(info,"componentStack")], null)));

return this$.forceUpdate();
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

goog.object.set(prototype,"componentWillUnmount",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,will_unmount)){
} else {
cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
}

return goog.object.set(this$,":rum/unmounted?",true);
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);

if(cljs.core.empty_QMARK_.call(null,child_context)){
} else {
goog.object.set(prototype,"getChildContext",((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype){
return (function (p1__23298_SHARP_){
return p1__23298_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,did_catch,will_unmount,child_context,class_props,static_props,ctor,_,prototype))
);
}

rum.core.extend_BANG_.call(null,prototype,class_props);

goog.object.set(ctor,"displayName",display_name);

rum.core.extend_BANG_.call(null,ctor,static_props);

return ctor;
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = (((!((key_fn == null))))?((function (class$,key_fn){
return (function() { 
var G__23302__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__23302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23303__i = 0, G__23303__a = new Array(arguments.length -  0);
while (G__23303__i < G__23303__a.length) {G__23303__a[G__23303__i] = arguments[G__23303__i + 0]; ++G__23303__i;}
  args = new cljs.core.IndexedSeq(G__23303__a,0,null);
} 
return G__23302__delegate.call(this,args);};
G__23302.cljs$lang$maxFixedArity = 0;
G__23302.cljs$lang$applyTo = (function (arglist__23304){
var args = cljs.core.seq(arglist__23304);
return G__23302__delegate(args);
});
G__23302.cljs$core$IFn$_invoke$arity$variadic = G__23302__delegate;
return G__23302;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__23305__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__23305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23306__i = 0, G__23306__a = new Array(arguments.length -  0);
while (G__23306__i < G__23306__a.length) {G__23306__a[G__23306__i] = arguments[G__23306__i + 0]; ++G__23306__i;}
  args = new cljs.core.IndexedSeq(G__23306__a,0,null);
} 
return G__23305__delegate.call(this,args);};
G__23305.cljs$lang$maxFixedArity = 0;
G__23305.cljs$lang$applyTo = (function (arglist__23307){
var args = cljs.core.seq(arglist__23307);
return G__23305__delegate(args);
});
G__23305.cljs$core$IFn$_invoke$arity$variadic = G__23305__delegate;
return G__23305;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__23308__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__23308 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23309__i = 0, G__23309__a = new Array(arguments.length -  0);
while (G__23309__i < G__23309__a.length) {G__23309__a[G__23309__i] = arguments[G__23309__i + 0]; ++G__23309__i;}
  args = new cljs.core.IndexedSeq(G__23309__a,0,null);
} 
return G__23308__delegate.call(this,args);};
G__23308.cljs$lang$maxFixedArity = 0;
G__23308.cljs$lang$applyTo = (function (arglist__23310){
var args = cljs.core.seq(arglist__23310);
return G__23308__delegate(args);
});
G__23308.cljs$core$IFn$_invoke$arity$variadic = G__23308__delegate;
return G__23308;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__4131__auto__ = (function (){var and__4120__auto__ = (typeof window !== 'undefined');
if(and__4120__auto__){
var or__4131__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__){
return (function (p1__23311_SHARP_){
return setTimeout(p1__23311_SHARP_,(16));
});
;})(or__4131__auto__))
}
})();
rum.core.batch = (function (){var or__4131__auto__ = (((typeof ReactNative !== 'undefined'))?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (((typeof ReactDOM !== 'undefined'))?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((function (or__4131__auto____$1,or__4131__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__4131__auto____$1,or__4131__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__23312 = cljs.core.seq.call(null,queue);
var chunk__23314 = null;
var count__23315 = (0);
var i__23316 = (0);
while(true){
if((i__23316 < count__23315)){
var comp = cljs.core._nth.call(null,chunk__23314,i__23316);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__23318 = seq__23312;
var G__23319 = chunk__23314;
var G__23320 = count__23315;
var G__23321 = (i__23316 + (1));
seq__23312 = G__23318;
chunk__23314 = G__23319;
count__23315 = G__23320;
i__23316 = G__23321;
continue;
} else {
var G__23322 = seq__23312;
var G__23323 = chunk__23314;
var G__23324 = count__23315;
var G__23325 = (i__23316 + (1));
seq__23312 = G__23322;
chunk__23314 = G__23323;
count__23315 = G__23324;
i__23316 = G__23325;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__23312);
if(temp__5720__auto__){
var seq__23312__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23312__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23312__$1);
var G__23326 = cljs.core.chunk_rest.call(null,seq__23312__$1);
var G__23327 = c__4550__auto__;
var G__23328 = cljs.core.count.call(null,c__4550__auto__);
var G__23329 = (0);
seq__23312 = G__23326;
chunk__23314 = G__23327;
count__23315 = G__23328;
i__23316 = G__23329;
continue;
} else {
var comp = cljs.core.first.call(null,seq__23312__$1);
if(cljs.core.not.call(null,goog.object.get(comp,":rum/unmounted?"))){
comp.forceUpdate();


var G__23330 = cljs.core.next.call(null,seq__23312__$1);
var G__23331 = null;
var G__23332 = (0);
var G__23333 = (0);
seq__23312 = G__23330;
chunk__23314 = G__23331;
count__23315 = G__23332;
i__23316 = G__23333;
continue;
} else {
var G__23334 = cljs.core.next.call(null,seq__23312__$1);
var G__23335 = null;
var G__23336 = (0);
var G__23337 = (0);
seq__23312 = G__23334;
chunk__23314 = G__23335;
count__23315 = G__23336;
i__23316 = G__23337;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame.
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add element to the DOM tree. Idempotent. Subsequent mounts will just update element.
 */
rum.core.mount = (function rum$core$mount(element,node){
ReactDOM.render(element,node);

return null;
});
/**
 * Removes component from the DOM tree.
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Same as [[mount]] but must be called on DOM tree already rendered by a server via [[render-html]].
 */
rum.core.hydrate = (function rum$core$hydrate(element,node){
return ReactDOM.hydrate(element,node);
});
/**
 * Render `element` in a DOM `node` that is ouside of current DOM hierarchy.
 */
rum.core.portal = (function rum$core$portal(element,node){
return ReactDOM.createPortal(element,node);
});
/**
 * Adds React key to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-key "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to element.
 * 
 * ```
 * (rum/defc label [text] [:div text])
 * 
 * (-> (label)
 *     (rum/with-ref "abc")
 *     (rum/mount js/document.body))
 * ```
 */
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node of component. Call it during lifecycle callbacks. Can’t be called during render.
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component.
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref.
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed. Does equality check (`=`) on all arguments.
 *   
 * ```
 * (rum/defc label < rum/static
 *   [text]
 *   [:div text])
 *   
 * (rum/mount (label "abc") js/document.body)
 * 
 * ;; def != abc, will re-render
 * (rum/mount (label "def") js/document.body)
 * 
 * ;; def == def, won’t re-render
 * (rum/mount (label "def") js/document.body)
 * ```
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff during component’s lifecycle. Component will be re-rendered if atom’s value changes. Atom is stored under user-provided key or under `:rum/local` by default.
 *   
 * ```
 * (rum/defcs counter < (rum/local 0 :cnt)
 *   [state label]
 *   (let [*cnt (:cnt state)]
 *     [:div {:on-click (fn [_] (swap! *cnt inc))}
 *       label @*cnt]))
 * 
 * (rum/mount (counter "Click count: "))
 * ```
 */
rum.core.local = (function rum$core$local(var_args){
var G__23339 = arguments.length;
switch (G__23339) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with [[react]].
 *   
 * ```
 * (rum/defc comp < rum/reactive
 *   [*counter]
 *   [:div (rum/react counter)])
 * 
 * (def *counter (atom 0))
 * (rum/mount (comp *counter) js/document.body)
 * (swap! *counter inc) ;; will force comp to re-render
 * ```
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR__orig_val__23341 = rum.core._STAR_reactions_STAR_;
var _STAR_reactions_STAR__temp_val__23342 = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__temp_val__23342;

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__23343 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__23343,(0),null);
var next_state = cljs.core.nth.call(null,vec__23343,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__23346_23358 = cljs.core.seq.call(null,old_reactions);
var chunk__23347_23359 = null;
var count__23348_23360 = (0);
var i__23349_23361 = (0);
while(true){
if((i__23349_23361 < count__23348_23360)){
var ref_23362 = cljs.core._nth.call(null,chunk__23347_23359,i__23349_23361);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_23362)){
} else {
cljs.core.remove_watch.call(null,ref_23362,key);
}


var G__23363 = seq__23346_23358;
var G__23364 = chunk__23347_23359;
var G__23365 = count__23348_23360;
var G__23366 = (i__23349_23361 + (1));
seq__23346_23358 = G__23363;
chunk__23347_23359 = G__23364;
count__23348_23360 = G__23365;
i__23349_23361 = G__23366;
continue;
} else {
var temp__5720__auto___23367 = cljs.core.seq.call(null,seq__23346_23358);
if(temp__5720__auto___23367){
var seq__23346_23368__$1 = temp__5720__auto___23367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23346_23368__$1)){
var c__4550__auto___23369 = cljs.core.chunk_first.call(null,seq__23346_23368__$1);
var G__23370 = cljs.core.chunk_rest.call(null,seq__23346_23368__$1);
var G__23371 = c__4550__auto___23369;
var G__23372 = cljs.core.count.call(null,c__4550__auto___23369);
var G__23373 = (0);
seq__23346_23358 = G__23370;
chunk__23347_23359 = G__23371;
count__23348_23360 = G__23372;
i__23349_23361 = G__23373;
continue;
} else {
var ref_23374 = cljs.core.first.call(null,seq__23346_23368__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_23374)){
} else {
cljs.core.remove_watch.call(null,ref_23374,key);
}


var G__23375 = cljs.core.next.call(null,seq__23346_23368__$1);
var G__23376 = null;
var G__23377 = (0);
var G__23378 = (0);
seq__23346_23358 = G__23375;
chunk__23347_23359 = G__23376;
count__23348_23360 = G__23377;
i__23349_23361 = G__23378;
continue;
}
} else {
}
}
break;
}

var seq__23350_23379 = cljs.core.seq.call(null,new_reactions);
var chunk__23351_23380 = null;
var count__23352_23381 = (0);
var i__23353_23382 = (0);
while(true){
if((i__23353_23382 < count__23352_23381)){
var ref_23383 = cljs.core._nth.call(null,chunk__23351_23380,i__23353_23382);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_23383)){
} else {
cljs.core.add_watch.call(null,ref_23383,key,((function (seq__23350_23379,chunk__23351_23380,count__23352_23381,i__23353_23382,ref_23383,comp,old_reactions,vec__23343,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__23341,_STAR_reactions_STAR__temp_val__23342){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__23350_23379,chunk__23351_23380,count__23352_23381,i__23353_23382,ref_23383,comp,old_reactions,vec__23343,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__23341,_STAR_reactions_STAR__temp_val__23342))
);
}


var G__23384 = seq__23350_23379;
var G__23385 = chunk__23351_23380;
var G__23386 = count__23352_23381;
var G__23387 = (i__23353_23382 + (1));
seq__23350_23379 = G__23384;
chunk__23351_23380 = G__23385;
count__23352_23381 = G__23386;
i__23353_23382 = G__23387;
continue;
} else {
var temp__5720__auto___23388 = cljs.core.seq.call(null,seq__23350_23379);
if(temp__5720__auto___23388){
var seq__23350_23389__$1 = temp__5720__auto___23388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23350_23389__$1)){
var c__4550__auto___23390 = cljs.core.chunk_first.call(null,seq__23350_23389__$1);
var G__23391 = cljs.core.chunk_rest.call(null,seq__23350_23389__$1);
var G__23392 = c__4550__auto___23390;
var G__23393 = cljs.core.count.call(null,c__4550__auto___23390);
var G__23394 = (0);
seq__23350_23379 = G__23391;
chunk__23351_23380 = G__23392;
count__23352_23381 = G__23393;
i__23353_23382 = G__23394;
continue;
} else {
var ref_23395 = cljs.core.first.call(null,seq__23350_23389__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_23395)){
} else {
cljs.core.add_watch.call(null,ref_23395,key,((function (seq__23350_23379,chunk__23351_23380,count__23352_23381,i__23353_23382,ref_23395,seq__23350_23389__$1,temp__5720__auto___23388,comp,old_reactions,vec__23343,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__23341,_STAR_reactions_STAR__temp_val__23342){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__23350_23379,chunk__23351_23380,count__23352_23381,i__23353_23382,ref_23395,seq__23350_23389__$1,temp__5720__auto___23388,comp,old_reactions,vec__23343,dom,next_state,new_reactions,key,_STAR_reactions_STAR__orig_val__23341,_STAR_reactions_STAR__temp_val__23342))
);
}


var G__23396 = cljs.core.next.call(null,seq__23350_23389__$1);
var G__23397 = null;
var G__23398 = (0);
var G__23399 = (0);
seq__23350_23379 = G__23396;
chunk__23351_23380 = G__23397;
count__23352_23381 = G__23398;
i__23353_23382 = G__23399;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR__orig_val__23341;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_23400 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__23354_23401 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__23355_23402 = null;
var count__23356_23403 = (0);
var i__23357_23404 = (0);
while(true){
if((i__23357_23404 < count__23356_23403)){
var ref_23405 = cljs.core._nth.call(null,chunk__23355_23402,i__23357_23404);
cljs.core.remove_watch.call(null,ref_23405,key_23400);


var G__23406 = seq__23354_23401;
var G__23407 = chunk__23355_23402;
var G__23408 = count__23356_23403;
var G__23409 = (i__23357_23404 + (1));
seq__23354_23401 = G__23406;
chunk__23355_23402 = G__23407;
count__23356_23403 = G__23408;
i__23357_23404 = G__23409;
continue;
} else {
var temp__5720__auto___23410 = cljs.core.seq.call(null,seq__23354_23401);
if(temp__5720__auto___23410){
var seq__23354_23411__$1 = temp__5720__auto___23410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23354_23411__$1)){
var c__4550__auto___23412 = cljs.core.chunk_first.call(null,seq__23354_23411__$1);
var G__23413 = cljs.core.chunk_rest.call(null,seq__23354_23411__$1);
var G__23414 = c__4550__auto___23412;
var G__23415 = cljs.core.count.call(null,c__4550__auto___23412);
var G__23416 = (0);
seq__23354_23401 = G__23413;
chunk__23355_23402 = G__23414;
count__23356_23403 = G__23415;
i__23357_23404 = G__23416;
continue;
} else {
var ref_23417 = cljs.core.first.call(null,seq__23354_23411__$1);
cljs.core.remove_watch.call(null,ref_23417,key_23400);


var G__23418 = cljs.core.next.call(null,seq__23354_23411__$1);
var G__23419 = null;
var G__23420 = (0);
var G__23421 = (0);
seq__23354_23401 = G__23418;
chunk__23355_23402 = G__23419;
count__23356_23403 = G__23420;
i__23357_23404 = G__23421;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with [[reactive]] mixin. Use this function instead of `deref` inside render, and your component will subscribe to changes happening to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error(["Assert failed: ","rum.core/react is only supported in conjunction with rum.core/reactive","\n","*reactions*"].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * 
 *           [[derived-atom]] will:
 *        
 *           - Take N “source” refs.
 *           - Set up a watch on each of them.
 *           - Create “sink” atom.
 *           - When any of source refs changes:
 *              - re-run function `f`, passing N dereferenced values of source refs.
 *              - `reset!` result of `f` to the sink atom.
 *           - Return sink atom.
 * 
 *           Example:
 * 
 *           ```
 *           (def *a (atom 0))
 *           (def *b (atom 1))
 *           (def *x (derived-atom [*a *b] ::key
 *                     (fn [a b]
 *                       (str a ":" b))))
 *           
 *           (type *x) ;; => clojure.lang.Atom
 *           (deref *x) ;; => "0:1"
 *           
 *           (swap! *a inc)
 *           (deref *x) ;; => "1:1"
 *           
 *           (reset! *b 7)
 *           (deref *x) ;; => "1:7"
 *           ```
 * 
 *           Arguments:
 *        
 *           - `refs` - sequence of source refs,
 *           - `key`  - unique key to register watcher, same as in `clojure.core/add-watch`,
 *           - `f`    - function that must accept N arguments (same as number of source refs) and return a value to be written to the sink ref. Note: `f` will be called with already dereferenced values,
 *           - `opts` - optional. Map of:
 *             - `:ref` - use this as sink ref. By default creates new atom,
 *             - `:check-equals?` - Defaults to `true`. If equality check should be run on each source update: `(= @sink (f new-vals))`. When result of recalculating `f` equals to the old value, `reset!` won’t be called. Set to `false` if checking for equality can be expensive.
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 * ```
 * (def db (atom { :users { "Ivan" { :age 30 }}}))
 * 
 * (def ivan (rum/cursor db [:users "Ivan"]))
 * (deref ivan) ;; => { :age 30 }
 * 
 * (swap! ivan update :age inc) ;; => { :age 31 }
 * (deref db) ;; => { :users { "Ivan" { :age 31 }}}
 * 
 * (swap! db update-in [:users "Ivan" :age] inc)
 * ;; => { :users { "Ivan" { :age 32 }}}
 * 
 * (deref ivan) ;; => { :age 32 }
 * ```
 *   
 * Returned value supports `deref`, `swap!`, `reset!`, watches and metadata.
 *   
 * The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23428 = arguments.length;
var i__4731__auto___23429 = (0);
while(true){
if((i__4731__auto___23429 < len__4730__auto___23428)){
args__4736__auto__.push((arguments[i__4731__auto___23429]));

var G__23430 = (i__4731__auto___23429 + (1));
i__4731__auto___23429 = G__23430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__23425){
var map__23426 = p__23425;
var map__23426__$1 = (((((!((map__23426 == null))))?(((((map__23426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23426):map__23426);
var options = map__23426__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor_in.cljs$lang$applyTo = (function (seq23422){
var G__23423 = cljs.core.first.call(null,seq23422);
var seq23422__$1 = cljs.core.next.call(null,seq23422);
var G__23424 = cljs.core.first.call(null,seq23422__$1);
var seq23422__$2 = cljs.core.next.call(null,seq23422__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23423,G__23424,seq23422__$2);
});

/**
 * Same as [[cursor-in]] but accepts single key instead of path vector.
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23434 = arguments.length;
var i__4731__auto___23435 = (0);
while(true){
if((i__4731__auto___23435 < len__4730__auto___23434)){
args__4736__auto__.push((arguments[i__4731__auto___23435]));

var G__23436 = (i__4731__auto___23435 + (1));
i__4731__auto___23435 = G__23436;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.core.cursor.cljs$lang$applyTo = (function (seq23431){
var G__23432 = cljs.core.first.call(null,seq23431);
var seq23431__$1 = cljs.core.next.call(null,seq23431);
var G__23433 = cljs.core.first.call(null,seq23431__$1);
var seq23431__$2 = cljs.core.next.call(null,seq23431__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23432,G__23433,seq23431__$2);
});


//# sourceMappingURL=core.js.map?rel=1563741467386
