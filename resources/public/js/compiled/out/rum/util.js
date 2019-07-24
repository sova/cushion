// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (m){
return cljs.core.get.call(null,m,key);
}),mixins));
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (m){
return cljs.core.map.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
}),mixins));
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22849 = arguments.length;
var i__4731__auto___22850 = (0);
while(true){
if((i__4731__auto___22850 < len__4730__auto___22849)){
args__4736__auto__.push((arguments[i__4731__auto___22850]));

var G__22851 = (i__4731__auto___22850 + (1));
i__4731__auto___22850 = G__22851;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq22846){
var G__22847 = cljs.core.first.call(null,seq22846);
var seq22846__$1 = cljs.core.next.call(null,seq22846);
var G__22848 = cljs.core.first.call(null,seq22846__$1);
var seq22846__$2 = cljs.core.next.call(null,seq22846__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22847,G__22848,seq22846__$2);
});


//# sourceMappingURL=util.js.map?rel=1563741466756
