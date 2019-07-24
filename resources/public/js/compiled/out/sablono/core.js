// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22679__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22676 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__22677 = cljs.core.seq.call(null,vec__22676);
var first__22678 = cljs.core.first.call(null,seq__22677);
var seq__22677__$1 = cljs.core.next.call(null,seq__22677);
var tag = first__22678;
var body = seq__22677__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22680__i = 0, G__22680__a = new Array(arguments.length -  0);
while (G__22680__i < G__22680__a.length) {G__22680__a[G__22680__i] = arguments[G__22680__i + 0]; ++G__22680__i;}
  args = new cljs.core.IndexedSeq(G__22680__a,0,null);
} 
return G__22679__delegate.call(this,args);};
G__22679.cljs$lang$maxFixedArity = 0;
G__22679.cljs$lang$applyTo = (function (arglist__22681){
var args = cljs.core.seq(arglist__22681);
return G__22679__delegate(args);
});
G__22679.cljs$core$IFn$_invoke$arity$variadic = G__22679__delegate;
return G__22679;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__22682(s__22683){
return (new cljs.core.LazySeq(null,(function (){
var s__22683__$1 = s__22683;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22683__$1);
if(temp__5720__auto__){
var s__22683__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22683__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22683__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22685 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22684 = (0);
while(true){
if((i__22684 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__22684);
cljs.core.chunk_append.call(null,b__22685,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22686 = (i__22684 + (1));
i__22684 = G__22686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22685),sablono$core$update_arglists_$_iter__22682.call(null,cljs.core.chunk_rest.call(null,s__22683__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22685),null);
}
} else {
var args = cljs.core.first.call(null,s__22683__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22682.call(null,cljs.core.rest.call(null,s__22683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22692 = arguments.length;
var i__4731__auto___22693 = (0);
while(true){
if((i__4731__auto___22693 < len__4730__auto___22692)){
args__4736__auto__.push((arguments[i__4731__auto___22693]));

var G__22694 = (i__4731__auto___22693 + (1));
i__4731__auto___22693 = G__22694;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__22688(s__22689){
return (new cljs.core.LazySeq(null,(function (){
var s__22689__$1 = s__22689;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22689__$1);
if(temp__5720__auto__){
var s__22689__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22689__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22689__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22691 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22690 = (0);
while(true){
if((i__22690 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__22690);
cljs.core.chunk_append.call(null,b__22691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22695 = (i__22690 + (1));
i__22690 = G__22695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22691),sablono$core$iter__22688.call(null,cljs.core.chunk_rest.call(null,s__22689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22691),null);
}
} else {
var style = cljs.core.first.call(null,s__22689__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22688.call(null,cljs.core.rest.call(null,s__22689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq22687){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22687));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22696 = (function sablono$core$link_to22696(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22699 = arguments.length;
var i__4731__auto___22700 = (0);
while(true){
if((i__4731__auto___22700 < len__4730__auto___22699)){
args__4736__auto__.push((arguments[i__4731__auto___22700]));

var G__22701 = (i__4731__auto___22700 + (1));
i__4731__auto___22700 = G__22701;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to22696.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to22696.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22696.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to22696.cljs$lang$applyTo = (function (seq22697){
var G__22698 = cljs.core.first.call(null,seq22697);
var seq22697__$1 = cljs.core.next.call(null,seq22697);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22698,seq22697__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22696);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22702 = (function sablono$core$mail_to22702(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22709 = arguments.length;
var i__4731__auto___22710 = (0);
while(true){
if((i__4731__auto___22710 < len__4730__auto___22709)){
args__4736__auto__.push((arguments[i__4731__auto___22710]));

var G__22711 = (i__4731__auto___22710 + (1));
i__4731__auto___22710 = G__22711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to22702.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to22702.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22705){
var vec__22706 = p__22705;
var content = cljs.core.nth.call(null,vec__22706,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22702.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to22702.cljs$lang$applyTo = (function (seq22703){
var G__22704 = cljs.core.first.call(null,seq22703);
var seq22703__$1 = cljs.core.next.call(null,seq22703);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22704,seq22703__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22702);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22712 = (function sablono$core$unordered_list22712(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list22712_$_iter__22713(s__22714){
return (new cljs.core.LazySeq(null,(function (){
var s__22714__$1 = s__22714;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22714__$1);
if(temp__5720__auto__){
var s__22714__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22714__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22714__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22716 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22715 = (0);
while(true){
if((i__22715 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__22715);
cljs.core.chunk_append.call(null,b__22716,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22717 = (i__22715 + (1));
i__22715 = G__22717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22716),sablono$core$unordered_list22712_$_iter__22713.call(null,cljs.core.chunk_rest.call(null,s__22714__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22716),null);
}
} else {
var x = cljs.core.first.call(null,s__22714__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22712_$_iter__22713.call(null,cljs.core.rest.call(null,s__22714__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22712);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22718 = (function sablono$core$ordered_list22718(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list22718_$_iter__22719(s__22720){
return (new cljs.core.LazySeq(null,(function (){
var s__22720__$1 = s__22720;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22720__$1);
if(temp__5720__auto__){
var s__22720__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22720__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22720__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22722 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22721 = (0);
while(true){
if((i__22721 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__22721);
cljs.core.chunk_append.call(null,b__22722,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22723 = (i__22721 + (1));
i__22721 = G__22723;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22722),sablono$core$ordered_list22718_$_iter__22719.call(null,cljs.core.chunk_rest.call(null,s__22720__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22722),null);
}
} else {
var x = cljs.core.first.call(null,s__22720__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22718_$_iter__22719.call(null,cljs.core.rest.call(null,s__22720__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22718);
/**
 * Create an image element.
 */
sablono.core.image22724 = (function sablono$core$image22724(var_args){
var G__22726 = arguments.length;
switch (G__22726) {
case 1:
return sablono.core.image22724.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22724.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image22724.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22724.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22724.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22724);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22728_SHARP_,p2__22729_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22728_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22729_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22730_SHARP_,p2__22731_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22730_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__22731_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__22733 = arguments.length;
switch (G__22733) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field22735 = (function sablono$core$color_field22735(var_args){
var G__22737 = arguments.length;
switch (G__22737) {
case 1:
return sablono.core.color_field22735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field22735.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__22666__auto__);
});

sablono.core.color_field22735.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.color_field22735.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22735);

/**
 * Creates a date input field.
 */
sablono.core.date_field22738 = (function sablono$core$date_field22738(var_args){
var G__22740 = arguments.length;
switch (G__22740) {
case 1:
return sablono.core.date_field22738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field22738.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__22666__auto__);
});

sablono.core.date_field22738.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.date_field22738.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22738);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22741 = (function sablono$core$datetime_field22741(var_args){
var G__22743 = arguments.length;
switch (G__22743) {
case 1:
return sablono.core.datetime_field22741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field22741.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__22666__auto__);
});

sablono.core.datetime_field22741.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.datetime_field22741.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22741);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22744 = (function sablono$core$datetime_local_field22744(var_args){
var G__22746 = arguments.length;
switch (G__22746) {
case 1:
return sablono.core.datetime_local_field22744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field22744.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__22666__auto__);
});

sablono.core.datetime_local_field22744.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.datetime_local_field22744.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22744);

/**
 * Creates a email input field.
 */
sablono.core.email_field22747 = (function sablono$core$email_field22747(var_args){
var G__22749 = arguments.length;
switch (G__22749) {
case 1:
return sablono.core.email_field22747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field22747.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__22666__auto__);
});

sablono.core.email_field22747.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.email_field22747.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22747);

/**
 * Creates a file input field.
 */
sablono.core.file_field22750 = (function sablono$core$file_field22750(var_args){
var G__22752 = arguments.length;
switch (G__22752) {
case 1:
return sablono.core.file_field22750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field22750.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__22666__auto__);
});

sablono.core.file_field22750.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.file_field22750.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22750);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22753 = (function sablono$core$hidden_field22753(var_args){
var G__22755 = arguments.length;
switch (G__22755) {
case 1:
return sablono.core.hidden_field22753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field22753.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__22666__auto__);
});

sablono.core.hidden_field22753.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.hidden_field22753.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22753);

/**
 * Creates a month input field.
 */
sablono.core.month_field22756 = (function sablono$core$month_field22756(var_args){
var G__22758 = arguments.length;
switch (G__22758) {
case 1:
return sablono.core.month_field22756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field22756.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__22666__auto__);
});

sablono.core.month_field22756.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.month_field22756.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22756);

/**
 * Creates a number input field.
 */
sablono.core.number_field22759 = (function sablono$core$number_field22759(var_args){
var G__22761 = arguments.length;
switch (G__22761) {
case 1:
return sablono.core.number_field22759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field22759.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__22666__auto__);
});

sablono.core.number_field22759.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.number_field22759.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22759);

/**
 * Creates a password input field.
 */
sablono.core.password_field22762 = (function sablono$core$password_field22762(var_args){
var G__22764 = arguments.length;
switch (G__22764) {
case 1:
return sablono.core.password_field22762.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22762.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field22762.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__22666__auto__);
});

sablono.core.password_field22762.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.password_field22762.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22762);

/**
 * Creates a range input field.
 */
sablono.core.range_field22765 = (function sablono$core$range_field22765(var_args){
var G__22767 = arguments.length;
switch (G__22767) {
case 1:
return sablono.core.range_field22765.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22765.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field22765.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__22666__auto__);
});

sablono.core.range_field22765.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.range_field22765.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22765);

/**
 * Creates a search input field.
 */
sablono.core.search_field22768 = (function sablono$core$search_field22768(var_args){
var G__22770 = arguments.length;
switch (G__22770) {
case 1:
return sablono.core.search_field22768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field22768.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__22666__auto__);
});

sablono.core.search_field22768.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.search_field22768.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22768);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22771 = (function sablono$core$tel_field22771(var_args){
var G__22773 = arguments.length;
switch (G__22773) {
case 1:
return sablono.core.tel_field22771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field22771.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__22666__auto__);
});

sablono.core.tel_field22771.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.tel_field22771.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22771);

/**
 * Creates a text input field.
 */
sablono.core.text_field22774 = (function sablono$core$text_field22774(var_args){
var G__22776 = arguments.length;
switch (G__22776) {
case 1:
return sablono.core.text_field22774.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22774.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field22774.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__22666__auto__);
});

sablono.core.text_field22774.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.text_field22774.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22774);

/**
 * Creates a time input field.
 */
sablono.core.time_field22777 = (function sablono$core$time_field22777(var_args){
var G__22779 = arguments.length;
switch (G__22779) {
case 1:
return sablono.core.time_field22777.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22777.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field22777.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__22666__auto__);
});

sablono.core.time_field22777.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.time_field22777.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22777);

/**
 * Creates a url input field.
 */
sablono.core.url_field22780 = (function sablono$core$url_field22780(var_args){
var G__22782 = arguments.length;
switch (G__22782) {
case 1:
return sablono.core.url_field22780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field22780.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__22666__auto__);
});

sablono.core.url_field22780.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.url_field22780.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22780);

/**
 * Creates a week input field.
 */
sablono.core.week_field22783 = (function sablono$core$week_field22783(var_args){
var G__22785 = arguments.length;
switch (G__22785) {
case 1:
return sablono.core.week_field22783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field22783.cljs$core$IFn$_invoke$arity$1 = (function (name__22666__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__22666__auto__);
});

sablono.core.week_field22783.cljs$core$IFn$_invoke$arity$2 = (function (name__22666__auto__,value__22667__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__22666__auto__,value__22667__auto__);
});

sablono.core.week_field22783.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22783);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22803 = (function sablono$core$check_box22803(var_args){
var G__22805 = arguments.length;
switch (G__22805) {
case 1:
return sablono.core.check_box22803.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22803.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22803.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box22803.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box22803.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22803.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22803.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22803);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22807 = (function sablono$core$radio_button22807(var_args){
var G__22809 = arguments.length;
switch (G__22809) {
case 1:
return sablono.core.radio_button22807.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22807.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22807.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button22807.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button22807.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22807.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22807.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22807);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22811 = (function sablono$core$select_options22811(coll){
var iter__4523__auto__ = (function sablono$core$select_options22811_$_iter__22812(s__22813){
return (new cljs.core.LazySeq(null,(function (){
var s__22813__$1 = s__22813;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__22813__$1);
if(temp__5720__auto__){
var s__22813__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22813__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__22813__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__22815 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__22814 = (0);
while(true){
if((i__22814 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__22814);
cljs.core.chunk_append.call(null,b__22815,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22816 = x;
var text = cljs.core.nth.call(null,vec__22816,(0),null);
var val = cljs.core.nth.call(null,vec__22816,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22816,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22811.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22822 = (i__22814 + (1));
i__22814 = G__22822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22815),sablono$core$select_options22811_$_iter__22812.call(null,cljs.core.chunk_rest.call(null,s__22813__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22815),null);
}
} else {
var x = cljs.core.first.call(null,s__22813__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22819 = x;
var text = cljs.core.nth.call(null,vec__22819,(0),null);
var val = cljs.core.nth.call(null,vec__22819,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22819,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options22811.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22811_$_iter__22812.call(null,cljs.core.rest.call(null,s__22813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22811);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22823 = (function sablono$core$drop_down22823(var_args){
var G__22825 = arguments.length;
switch (G__22825) {
case 2:
return sablono.core.drop_down22823.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22823.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down22823.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22823.call(null,name,options,null);
});

sablono.core.drop_down22823.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22823.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22823);
/**
 * Creates a text area element.
 */
sablono.core.text_area22827 = (function sablono$core$text_area22827(var_args){
var G__22829 = arguments.length;
switch (G__22829) {
case 1:
return sablono.core.text_area22827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area22827.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area22827.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area22827.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22827);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22831 = (function sablono$core$label22831(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22831);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22832 = (function sablono$core$submit_button22832(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22832);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22833 = (function sablono$core$reset_button22833(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22833);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22834 = (function sablono$core$form_to22834(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22841 = arguments.length;
var i__4731__auto___22842 = (0);
while(true){
if((i__4731__auto___22842 < len__4730__auto___22841)){
args__4736__auto__.push((arguments[i__4731__auto___22842]));

var G__22843 = (i__4731__auto___22842 + (1));
i__4731__auto___22842 = G__22843;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to22834.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to22834.cljs$core$IFn$_invoke$arity$variadic = (function (p__22837,body){
var vec__22838 = p__22837;
var method = cljs.core.nth.call(null,vec__22838,(0),null);
var action = cljs.core.nth.call(null,vec__22838,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22834.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to22834.cljs$lang$applyTo = (function (seq22835){
var G__22836 = cljs.core.first.call(null,seq22835);
var seq22835__$1 = cljs.core.next.call(null,seq22835);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22836,seq22835__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22834);

//# sourceMappingURL=core.js.map?rel=1563741466624
