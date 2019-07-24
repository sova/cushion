// Compiled by ClojureScript 1.10.520 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__20835 = arguments.length;
switch (G__20835) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__20836 = opts;
var map__20836__$1 = (((((!((map__20836 == null))))?(((((map__20836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20836):map__20836);
var ref = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__20836__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__20838 = cljs.core.count.call(null,refs);
switch (G__20838) {
case (1):
var vec__20839 = refs;
var a = cljs.core.nth.call(null,vec__20839,(0),null);
return ((function (vec__20839,a,G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__20839,a,G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__20842 = refs;
var a = cljs.core.nth.call(null,vec__20842,(0),null);
var b = cljs.core.nth.call(null,vec__20842,(1),null);
return ((function (vec__20842,a,b,G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__20842,a,b,G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__20845 = refs;
var a = cljs.core.nth.call(null,vec__20845,(0),null);
var b = cljs.core.nth.call(null,vec__20845,(1),null);
var c = cljs.core.nth.call(null,vec__20845,(2),null);
return ((function (vec__20845,a,b,c,G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__20845,a,b,c,G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__20838,map__20836,map__20836__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__20848 = ref;
cljs.core.reset_BANG_.call(null,G__20848,recalc.call(null));

return G__20848;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__20836,map__20836__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__20836,map__20836__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__20836,map__20836__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__20836,map__20836__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__20849_20855 = cljs.core.seq.call(null,refs);
var chunk__20850_20856 = null;
var count__20851_20857 = (0);
var i__20852_20858 = (0);
while(true){
if((i__20852_20858 < count__20851_20857)){
var ref_20859__$1 = cljs.core._nth.call(null,chunk__20850_20856,i__20852_20858);
cljs.core.add_watch.call(null,ref_20859__$1,key,watch);


var G__20860 = seq__20849_20855;
var G__20861 = chunk__20850_20856;
var G__20862 = count__20851_20857;
var G__20863 = (i__20852_20858 + (1));
seq__20849_20855 = G__20860;
chunk__20850_20856 = G__20861;
count__20851_20857 = G__20862;
i__20852_20858 = G__20863;
continue;
} else {
var temp__5720__auto___20864 = cljs.core.seq.call(null,seq__20849_20855);
if(temp__5720__auto___20864){
var seq__20849_20865__$1 = temp__5720__auto___20864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20849_20865__$1)){
var c__4550__auto___20866 = cljs.core.chunk_first.call(null,seq__20849_20865__$1);
var G__20867 = cljs.core.chunk_rest.call(null,seq__20849_20865__$1);
var G__20868 = c__4550__auto___20866;
var G__20869 = cljs.core.count.call(null,c__4550__auto___20866);
var G__20870 = (0);
seq__20849_20855 = G__20867;
chunk__20850_20856 = G__20868;
count__20851_20857 = G__20869;
i__20852_20858 = G__20870;
continue;
} else {
var ref_20871__$1 = cljs.core.first.call(null,seq__20849_20865__$1);
cljs.core.add_watch.call(null,ref_20871__$1,key,watch);


var G__20872 = cljs.core.next.call(null,seq__20849_20865__$1);
var G__20873 = null;
var G__20874 = (0);
var G__20875 = (0);
seq__20849_20855 = G__20872;
chunk__20850_20856 = G__20873;
count__20851_20857 = G__20874;
i__20852_20858 = G__20875;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1563741464120
