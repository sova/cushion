// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30419_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30419_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30420 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30421 = null;
var count__30422 = (0);
var i__30423 = (0);
while(true){
if((i__30423 < count__30422)){
var n = cljs.core._nth.call(null,chunk__30421,i__30423);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30424 = seq__30420;
var G__30425 = chunk__30421;
var G__30426 = count__30422;
var G__30427 = (i__30423 + (1));
seq__30420 = G__30424;
chunk__30421 = G__30425;
count__30422 = G__30426;
i__30423 = G__30427;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30420);
if(temp__5720__auto__){
var seq__30420__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30420__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30420__$1);
var G__30428 = cljs.core.chunk_rest.call(null,seq__30420__$1);
var G__30429 = c__4550__auto__;
var G__30430 = cljs.core.count.call(null,c__4550__auto__);
var G__30431 = (0);
seq__30420 = G__30428;
chunk__30421 = G__30429;
count__30422 = G__30430;
i__30423 = G__30431;
continue;
} else {
var n = cljs.core.first.call(null,seq__30420__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30432 = cljs.core.next.call(null,seq__30420__$1);
var G__30433 = null;
var G__30434 = (0);
var G__30435 = (0);
seq__30420 = G__30432;
chunk__30421 = G__30433;
count__30422 = G__30434;
i__30423 = G__30435;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30436){
var vec__30437 = p__30436;
var _ = cljs.core.nth.call(null,vec__30437,(0),null);
var v = cljs.core.nth.call(null,vec__30437,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__30440){
var vec__30441 = p__30440;
var k = cljs.core.nth.call(null,vec__30441,(0),null);
var v = cljs.core.nth.call(null,vec__30441,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30453_30461 = cljs.core.seq.call(null,deps);
var chunk__30454_30462 = null;
var count__30455_30463 = (0);
var i__30456_30464 = (0);
while(true){
if((i__30456_30464 < count__30455_30463)){
var dep_30465 = cljs.core._nth.call(null,chunk__30454_30462,i__30456_30464);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30465;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30465));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30465,(depth + (1)),state);
} else {
}


var G__30466 = seq__30453_30461;
var G__30467 = chunk__30454_30462;
var G__30468 = count__30455_30463;
var G__30469 = (i__30456_30464 + (1));
seq__30453_30461 = G__30466;
chunk__30454_30462 = G__30467;
count__30455_30463 = G__30468;
i__30456_30464 = G__30469;
continue;
} else {
var temp__5720__auto___30470 = cljs.core.seq.call(null,seq__30453_30461);
if(temp__5720__auto___30470){
var seq__30453_30471__$1 = temp__5720__auto___30470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30453_30471__$1)){
var c__4550__auto___30472 = cljs.core.chunk_first.call(null,seq__30453_30471__$1);
var G__30473 = cljs.core.chunk_rest.call(null,seq__30453_30471__$1);
var G__30474 = c__4550__auto___30472;
var G__30475 = cljs.core.count.call(null,c__4550__auto___30472);
var G__30476 = (0);
seq__30453_30461 = G__30473;
chunk__30454_30462 = G__30474;
count__30455_30463 = G__30475;
i__30456_30464 = G__30476;
continue;
} else {
var dep_30477 = cljs.core.first.call(null,seq__30453_30471__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30477;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30477));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30477,(depth + (1)),state);
} else {
}


var G__30478 = cljs.core.next.call(null,seq__30453_30471__$1);
var G__30479 = null;
var G__30480 = (0);
var G__30481 = (0);
seq__30453_30461 = G__30478;
chunk__30454_30462 = G__30479;
count__30455_30463 = G__30480;
i__30456_30464 = G__30481;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30457){
var vec__30458 = p__30457;
var seq__30459 = cljs.core.seq.call(null,vec__30458);
var first__30460 = cljs.core.first.call(null,seq__30459);
var seq__30459__$1 = cljs.core.next.call(null,seq__30459);
var x = first__30460;
var xs = seq__30459__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30458,seq__30459,first__30460,seq__30459__$1,x,xs,get_deps__$1){
return (function (p1__30444_SHARP_){
return clojure.set.difference.call(null,p1__30444_SHARP_,x);
});})(vec__30458,seq__30459,first__30460,seq__30459__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30482 = cljs.core.seq.call(null,provides);
var chunk__30483 = null;
var count__30484 = (0);
var i__30485 = (0);
while(true){
if((i__30485 < count__30484)){
var prov = cljs.core._nth.call(null,chunk__30483,i__30485);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30494_30502 = cljs.core.seq.call(null,requires);
var chunk__30495_30503 = null;
var count__30496_30504 = (0);
var i__30497_30505 = (0);
while(true){
if((i__30497_30505 < count__30496_30504)){
var req_30506 = cljs.core._nth.call(null,chunk__30495_30503,i__30497_30505);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30506,prov);


var G__30507 = seq__30494_30502;
var G__30508 = chunk__30495_30503;
var G__30509 = count__30496_30504;
var G__30510 = (i__30497_30505 + (1));
seq__30494_30502 = G__30507;
chunk__30495_30503 = G__30508;
count__30496_30504 = G__30509;
i__30497_30505 = G__30510;
continue;
} else {
var temp__5720__auto___30511 = cljs.core.seq.call(null,seq__30494_30502);
if(temp__5720__auto___30511){
var seq__30494_30512__$1 = temp__5720__auto___30511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30494_30512__$1)){
var c__4550__auto___30513 = cljs.core.chunk_first.call(null,seq__30494_30512__$1);
var G__30514 = cljs.core.chunk_rest.call(null,seq__30494_30512__$1);
var G__30515 = c__4550__auto___30513;
var G__30516 = cljs.core.count.call(null,c__4550__auto___30513);
var G__30517 = (0);
seq__30494_30502 = G__30514;
chunk__30495_30503 = G__30515;
count__30496_30504 = G__30516;
i__30497_30505 = G__30517;
continue;
} else {
var req_30518 = cljs.core.first.call(null,seq__30494_30512__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30518,prov);


var G__30519 = cljs.core.next.call(null,seq__30494_30512__$1);
var G__30520 = null;
var G__30521 = (0);
var G__30522 = (0);
seq__30494_30502 = G__30519;
chunk__30495_30503 = G__30520;
count__30496_30504 = G__30521;
i__30497_30505 = G__30522;
continue;
}
} else {
}
}
break;
}


var G__30523 = seq__30482;
var G__30524 = chunk__30483;
var G__30525 = count__30484;
var G__30526 = (i__30485 + (1));
seq__30482 = G__30523;
chunk__30483 = G__30524;
count__30484 = G__30525;
i__30485 = G__30526;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30482);
if(temp__5720__auto__){
var seq__30482__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30482__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30482__$1);
var G__30527 = cljs.core.chunk_rest.call(null,seq__30482__$1);
var G__30528 = c__4550__auto__;
var G__30529 = cljs.core.count.call(null,c__4550__auto__);
var G__30530 = (0);
seq__30482 = G__30527;
chunk__30483 = G__30528;
count__30484 = G__30529;
i__30485 = G__30530;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30482__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30498_30531 = cljs.core.seq.call(null,requires);
var chunk__30499_30532 = null;
var count__30500_30533 = (0);
var i__30501_30534 = (0);
while(true){
if((i__30501_30534 < count__30500_30533)){
var req_30535 = cljs.core._nth.call(null,chunk__30499_30532,i__30501_30534);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30535,prov);


var G__30536 = seq__30498_30531;
var G__30537 = chunk__30499_30532;
var G__30538 = count__30500_30533;
var G__30539 = (i__30501_30534 + (1));
seq__30498_30531 = G__30536;
chunk__30499_30532 = G__30537;
count__30500_30533 = G__30538;
i__30501_30534 = G__30539;
continue;
} else {
var temp__5720__auto___30540__$1 = cljs.core.seq.call(null,seq__30498_30531);
if(temp__5720__auto___30540__$1){
var seq__30498_30541__$1 = temp__5720__auto___30540__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30498_30541__$1)){
var c__4550__auto___30542 = cljs.core.chunk_first.call(null,seq__30498_30541__$1);
var G__30543 = cljs.core.chunk_rest.call(null,seq__30498_30541__$1);
var G__30544 = c__4550__auto___30542;
var G__30545 = cljs.core.count.call(null,c__4550__auto___30542);
var G__30546 = (0);
seq__30498_30531 = G__30543;
chunk__30499_30532 = G__30544;
count__30500_30533 = G__30545;
i__30501_30534 = G__30546;
continue;
} else {
var req_30547 = cljs.core.first.call(null,seq__30498_30541__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30547,prov);


var G__30548 = cljs.core.next.call(null,seq__30498_30541__$1);
var G__30549 = null;
var G__30550 = (0);
var G__30551 = (0);
seq__30498_30531 = G__30548;
chunk__30499_30532 = G__30549;
count__30500_30533 = G__30550;
i__30501_30534 = G__30551;
continue;
}
} else {
}
}
break;
}


var G__30552 = cljs.core.next.call(null,seq__30482__$1);
var G__30553 = null;
var G__30554 = (0);
var G__30555 = (0);
seq__30482 = G__30552;
chunk__30483 = G__30553;
count__30484 = G__30554;
i__30485 = G__30555;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30556_30560 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30557_30561 = null;
var count__30558_30562 = (0);
var i__30559_30563 = (0);
while(true){
if((i__30559_30563 < count__30558_30562)){
var ns_30564 = cljs.core._nth.call(null,chunk__30557_30561,i__30559_30563);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30564);


var G__30565 = seq__30556_30560;
var G__30566 = chunk__30557_30561;
var G__30567 = count__30558_30562;
var G__30568 = (i__30559_30563 + (1));
seq__30556_30560 = G__30565;
chunk__30557_30561 = G__30566;
count__30558_30562 = G__30567;
i__30559_30563 = G__30568;
continue;
} else {
var temp__5720__auto___30569 = cljs.core.seq.call(null,seq__30556_30560);
if(temp__5720__auto___30569){
var seq__30556_30570__$1 = temp__5720__auto___30569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30556_30570__$1)){
var c__4550__auto___30571 = cljs.core.chunk_first.call(null,seq__30556_30570__$1);
var G__30572 = cljs.core.chunk_rest.call(null,seq__30556_30570__$1);
var G__30573 = c__4550__auto___30571;
var G__30574 = cljs.core.count.call(null,c__4550__auto___30571);
var G__30575 = (0);
seq__30556_30560 = G__30572;
chunk__30557_30561 = G__30573;
count__30558_30562 = G__30574;
i__30559_30563 = G__30575;
continue;
} else {
var ns_30576 = cljs.core.first.call(null,seq__30556_30570__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30576);


var G__30577 = cljs.core.next.call(null,seq__30556_30570__$1);
var G__30578 = null;
var G__30579 = (0);
var G__30580 = (0);
seq__30556_30560 = G__30577;
chunk__30557_30561 = G__30578;
count__30558_30562 = G__30579;
i__30559_30563 = G__30580;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30581__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30582__i = 0, G__30582__a = new Array(arguments.length -  0);
while (G__30582__i < G__30582__a.length) {G__30582__a[G__30582__i] = arguments[G__30582__i + 0]; ++G__30582__i;}
  args = new cljs.core.IndexedSeq(G__30582__a,0,null);
} 
return G__30581__delegate.call(this,args);};
G__30581.cljs$lang$maxFixedArity = 0;
G__30581.cljs$lang$applyTo = (function (arglist__30583){
var args = cljs.core.seq(arglist__30583);
return G__30581__delegate(args);
});
G__30581.cljs$core$IFn$_invoke$arity$variadic = G__30581__delegate;
return G__30581;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30584_SHARP_,p2__30585_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30584_SHARP_)),p2__30585_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30586_SHARP_,p2__30587_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30586_SHARP_),p2__30587_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30588 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30588.addCallback(((function (G__30588){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30588))
);

G__30588.addErrback(((function (G__30588){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30588))
);

return G__30588;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30589){if((e30589 instanceof Error)){
var e = e30589;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30589;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30590){if((e30590 instanceof Error)){
var e = e30590;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30590;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30591 = cljs.core._EQ_;
var expr__30592 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30591.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30592))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30591.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30592))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30591.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30592))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30591,expr__30592){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30591,expr__30592))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30594,callback){
var map__30595 = p__30594;
var map__30595__$1 = (((((!((map__30595 == null))))?(((((map__30595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30595):map__30595);
var file_msg = map__30595__$1;
var request_url = cljs.core.get.call(null,map__30595__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30595,map__30595__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30595,map__30595__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__){
return (function (state_30633){
var state_val_30634 = (state_30633[(1)]);
if((state_val_30634 === (7))){
var inst_30629 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30635_30661 = state_30633__$1;
(statearr_30635_30661[(2)] = inst_30629);

(statearr_30635_30661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (1))){
var state_30633__$1 = state_30633;
var statearr_30636_30662 = state_30633__$1;
(statearr_30636_30662[(2)] = null);

(statearr_30636_30662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (4))){
var inst_30599 = (state_30633[(7)]);
var inst_30599__$1 = (state_30633[(2)]);
var state_30633__$1 = (function (){var statearr_30637 = state_30633;
(statearr_30637[(7)] = inst_30599__$1);

return statearr_30637;
})();
if(cljs.core.truth_(inst_30599__$1)){
var statearr_30638_30663 = state_30633__$1;
(statearr_30638_30663[(1)] = (5));

} else {
var statearr_30639_30664 = state_30633__$1;
(statearr_30639_30664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (15))){
var inst_30614 = (state_30633[(8)]);
var inst_30612 = (state_30633[(9)]);
var inst_30616 = inst_30614.call(null,inst_30612);
var state_30633__$1 = state_30633;
var statearr_30640_30665 = state_30633__$1;
(statearr_30640_30665[(2)] = inst_30616);

(statearr_30640_30665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (13))){
var inst_30623 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30641_30666 = state_30633__$1;
(statearr_30641_30666[(2)] = inst_30623);

(statearr_30641_30666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (6))){
var state_30633__$1 = state_30633;
var statearr_30642_30667 = state_30633__$1;
(statearr_30642_30667[(2)] = null);

(statearr_30642_30667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (17))){
var inst_30620 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
var statearr_30643_30668 = state_30633__$1;
(statearr_30643_30668[(2)] = inst_30620);

(statearr_30643_30668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (3))){
var inst_30631 = (state_30633[(2)]);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30633__$1,inst_30631);
} else {
if((state_val_30634 === (12))){
var state_30633__$1 = state_30633;
var statearr_30644_30669 = state_30633__$1;
(statearr_30644_30669[(2)] = null);

(statearr_30644_30669[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (2))){
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30634 === (11))){
var inst_30604 = (state_30633[(10)]);
var inst_30610 = figwheel.client.file_reloading.blocking_load.call(null,inst_30604);
var state_30633__$1 = state_30633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30633__$1,(14),inst_30610);
} else {
if((state_val_30634 === (9))){
var inst_30604 = (state_30633[(10)]);
var state_30633__$1 = state_30633;
if(cljs.core.truth_(inst_30604)){
var statearr_30645_30670 = state_30633__$1;
(statearr_30645_30670[(1)] = (11));

} else {
var statearr_30646_30671 = state_30633__$1;
(statearr_30646_30671[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (5))){
var inst_30605 = (state_30633[(11)]);
var inst_30599 = (state_30633[(7)]);
var inst_30604 = cljs.core.nth.call(null,inst_30599,(0),null);
var inst_30605__$1 = cljs.core.nth.call(null,inst_30599,(1),null);
var state_30633__$1 = (function (){var statearr_30647 = state_30633;
(statearr_30647[(11)] = inst_30605__$1);

(statearr_30647[(10)] = inst_30604);

return statearr_30647;
})();
if(cljs.core.truth_(inst_30605__$1)){
var statearr_30648_30672 = state_30633__$1;
(statearr_30648_30672[(1)] = (8));

} else {
var statearr_30649_30673 = state_30633__$1;
(statearr_30649_30673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (14))){
var inst_30614 = (state_30633[(8)]);
var inst_30604 = (state_30633[(10)]);
var inst_30612 = (state_30633[(2)]);
var inst_30613 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30614__$1 = cljs.core.get.call(null,inst_30613,inst_30604);
var state_30633__$1 = (function (){var statearr_30650 = state_30633;
(statearr_30650[(8)] = inst_30614__$1);

(statearr_30650[(9)] = inst_30612);

return statearr_30650;
})();
if(cljs.core.truth_(inst_30614__$1)){
var statearr_30651_30674 = state_30633__$1;
(statearr_30651_30674[(1)] = (15));

} else {
var statearr_30652_30675 = state_30633__$1;
(statearr_30652_30675[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (16))){
var inst_30612 = (state_30633[(9)]);
var inst_30618 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30612);
var state_30633__$1 = state_30633;
var statearr_30653_30676 = state_30633__$1;
(statearr_30653_30676[(2)] = inst_30618);

(statearr_30653_30676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (10))){
var inst_30625 = (state_30633[(2)]);
var state_30633__$1 = (function (){var statearr_30654 = state_30633;
(statearr_30654[(12)] = inst_30625);

return statearr_30654;
})();
var statearr_30655_30677 = state_30633__$1;
(statearr_30655_30677[(2)] = null);

(statearr_30655_30677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30634 === (8))){
var inst_30605 = (state_30633[(11)]);
var inst_30607 = eval(inst_30605);
var state_30633__$1 = state_30633;
var statearr_30656_30678 = state_30633__$1;
(statearr_30656_30678[(2)] = inst_30607);

(statearr_30656_30678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28305__auto__))
;
return ((function (switch__28210__auto__,c__28305__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28211__auto__ = null;
var figwheel$client$file_reloading$state_machine__28211__auto____0 = (function (){
var statearr_30657 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30657[(0)] = figwheel$client$file_reloading$state_machine__28211__auto__);

(statearr_30657[(1)] = (1));

return statearr_30657;
});
var figwheel$client$file_reloading$state_machine__28211__auto____1 = (function (state_30633){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_30633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e30658){if((e30658 instanceof Object)){
var ex__28214__auto__ = e30658;
var statearr_30659_30679 = state_30633;
(statearr_30659_30679[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30680 = state_30633;
state_30633 = G__30680;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28211__auto__ = function(state_30633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28211__auto____1.call(this,state_30633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28211__auto____0;
figwheel$client$file_reloading$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28211__auto____1;
return figwheel$client$file_reloading$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__))
})();
var state__28307__auto__ = (function (){var statearr_30660 = f__28306__auto__.call(null);
(statearr_30660[(6)] = c__28305__auto__);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__))
);

return c__28305__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30682 = arguments.length;
switch (G__30682) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30684,callback){
var map__30685 = p__30684;
var map__30685__$1 = (((((!((map__30685 == null))))?(((((map__30685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30685):map__30685);
var file_msg = map__30685__$1;
var namespace = cljs.core.get.call(null,map__30685__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30685,map__30685__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30685,map__30685__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30687){
var map__30688 = p__30687;
var map__30688__$1 = (((((!((map__30688 == null))))?(((((map__30688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30688):map__30688);
var file_msg = map__30688__$1;
var namespace = cljs.core.get.call(null,map__30688__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30690){
var map__30691 = p__30690;
var map__30691__$1 = (((((!((map__30691 == null))))?(((((map__30691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30691):map__30691);
var file_msg = map__30691__$1;
var namespace = cljs.core.get.call(null,map__30691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30693,callback){
var map__30694 = p__30693;
var map__30694__$1 = (((((!((map__30694 == null))))?(((((map__30694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30694):map__30694);
var file_msg = map__30694__$1;
var request_url = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28305__auto___30744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___30744,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___30744,out){
return (function (state_30729){
var state_val_30730 = (state_30729[(1)]);
if((state_val_30730 === (1))){
var inst_30703 = cljs.core.seq.call(null,files);
var inst_30704 = cljs.core.first.call(null,inst_30703);
var inst_30705 = cljs.core.next.call(null,inst_30703);
var inst_30706 = files;
var state_30729__$1 = (function (){var statearr_30731 = state_30729;
(statearr_30731[(7)] = inst_30706);

(statearr_30731[(8)] = inst_30704);

(statearr_30731[(9)] = inst_30705);

return statearr_30731;
})();
var statearr_30732_30745 = state_30729__$1;
(statearr_30732_30745[(2)] = null);

(statearr_30732_30745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (2))){
var inst_30706 = (state_30729[(7)]);
var inst_30712 = (state_30729[(10)]);
var inst_30711 = cljs.core.seq.call(null,inst_30706);
var inst_30712__$1 = cljs.core.first.call(null,inst_30711);
var inst_30713 = cljs.core.next.call(null,inst_30711);
var inst_30714 = (inst_30712__$1 == null);
var inst_30715 = cljs.core.not.call(null,inst_30714);
var state_30729__$1 = (function (){var statearr_30733 = state_30729;
(statearr_30733[(10)] = inst_30712__$1);

(statearr_30733[(11)] = inst_30713);

return statearr_30733;
})();
if(inst_30715){
var statearr_30734_30746 = state_30729__$1;
(statearr_30734_30746[(1)] = (4));

} else {
var statearr_30735_30747 = state_30729__$1;
(statearr_30735_30747[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (3))){
var inst_30727 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30729__$1,inst_30727);
} else {
if((state_val_30730 === (4))){
var inst_30712 = (state_30729[(10)]);
var inst_30717 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30712);
var state_30729__$1 = state_30729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30729__$1,(7),inst_30717);
} else {
if((state_val_30730 === (5))){
var inst_30723 = cljs.core.async.close_BANG_.call(null,out);
var state_30729__$1 = state_30729;
var statearr_30736_30748 = state_30729__$1;
(statearr_30736_30748[(2)] = inst_30723);

(statearr_30736_30748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (6))){
var inst_30725 = (state_30729[(2)]);
var state_30729__$1 = state_30729;
var statearr_30737_30749 = state_30729__$1;
(statearr_30737_30749[(2)] = inst_30725);

(statearr_30737_30749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30730 === (7))){
var inst_30713 = (state_30729[(11)]);
var inst_30719 = (state_30729[(2)]);
var inst_30720 = cljs.core.async.put_BANG_.call(null,out,inst_30719);
var inst_30706 = inst_30713;
var state_30729__$1 = (function (){var statearr_30738 = state_30729;
(statearr_30738[(7)] = inst_30706);

(statearr_30738[(12)] = inst_30720);

return statearr_30738;
})();
var statearr_30739_30750 = state_30729__$1;
(statearr_30739_30750[(2)] = null);

(statearr_30739_30750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28305__auto___30744,out))
;
return ((function (switch__28210__auto__,c__28305__auto___30744,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto____0 = (function (){
var statearr_30740 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30740[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto__);

(statearr_30740[(1)] = (1));

return statearr_30740;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto____1 = (function (state_30729){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_30729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e30741){if((e30741 instanceof Object)){
var ex__28214__auto__ = e30741;
var statearr_30742_30751 = state_30729;
(statearr_30742_30751[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30752 = state_30729;
state_30729 = G__30752;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto__ = function(state_30729){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto____1.call(this,state_30729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___30744,out))
})();
var state__28307__auto__ = (function (){var statearr_30743 = f__28306__auto__.call(null);
(statearr_30743[(6)] = c__28305__auto___30744);

return statearr_30743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___30744,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30753,opts){
var map__30754 = p__30753;
var map__30754__$1 = (((((!((map__30754 == null))))?(((((map__30754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30754):map__30754);
var eval_body = cljs.core.get.call(null,map__30754__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30754__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30756){var e = e30756;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30757_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30757_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30758){
var vec__30759 = p__30758;
var k = cljs.core.nth.call(null,vec__30759,(0),null);
var v = cljs.core.nth.call(null,vec__30759,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30762){
var vec__30763 = p__30762;
var k = cljs.core.nth.call(null,vec__30763,(0),null);
var v = cljs.core.nth.call(null,vec__30763,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30769,p__30770){
var map__30771 = p__30769;
var map__30771__$1 = (((((!((map__30771 == null))))?(((((map__30771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30771):map__30771);
var opts = map__30771__$1;
var before_jsload = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30771__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30772 = p__30770;
var map__30772__$1 = (((((!((map__30772 == null))))?(((((map__30772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30772):map__30772);
var msg = map__30772__$1;
var files = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30772__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30926){
var state_val_30927 = (state_30926[(1)]);
if((state_val_30927 === (7))){
var inst_30787 = (state_30926[(7)]);
var inst_30786 = (state_30926[(8)]);
var inst_30789 = (state_30926[(9)]);
var inst_30788 = (state_30926[(10)]);
var inst_30794 = cljs.core._nth.call(null,inst_30787,inst_30789);
var inst_30795 = figwheel.client.file_reloading.eval_body.call(null,inst_30794,opts);
var inst_30796 = (inst_30789 + (1));
var tmp30928 = inst_30787;
var tmp30929 = inst_30786;
var tmp30930 = inst_30788;
var inst_30786__$1 = tmp30929;
var inst_30787__$1 = tmp30928;
var inst_30788__$1 = tmp30930;
var inst_30789__$1 = inst_30796;
var state_30926__$1 = (function (){var statearr_30931 = state_30926;
(statearr_30931[(7)] = inst_30787__$1);

(statearr_30931[(8)] = inst_30786__$1);

(statearr_30931[(9)] = inst_30789__$1);

(statearr_30931[(10)] = inst_30788__$1);

(statearr_30931[(11)] = inst_30795);

return statearr_30931;
})();
var statearr_30932_31015 = state_30926__$1;
(statearr_30932_31015[(2)] = null);

(statearr_30932_31015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (20))){
var inst_30829 = (state_30926[(12)]);
var inst_30837 = figwheel.client.file_reloading.sort_files.call(null,inst_30829);
var state_30926__$1 = state_30926;
var statearr_30933_31016 = state_30926__$1;
(statearr_30933_31016[(2)] = inst_30837);

(statearr_30933_31016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (27))){
var state_30926__$1 = state_30926;
var statearr_30934_31017 = state_30926__$1;
(statearr_30934_31017[(2)] = null);

(statearr_30934_31017[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (1))){
var inst_30778 = (state_30926[(13)]);
var inst_30775 = before_jsload.call(null,files);
var inst_30776 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30777 = (function (){return ((function (inst_30778,inst_30775,inst_30776,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30766_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30766_SHARP_);
});
;})(inst_30778,inst_30775,inst_30776,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30778__$1 = cljs.core.filter.call(null,inst_30777,files);
var inst_30779 = cljs.core.not_empty.call(null,inst_30778__$1);
var state_30926__$1 = (function (){var statearr_30935 = state_30926;
(statearr_30935[(13)] = inst_30778__$1);

(statearr_30935[(14)] = inst_30775);

(statearr_30935[(15)] = inst_30776);

return statearr_30935;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30936_31018 = state_30926__$1;
(statearr_30936_31018[(1)] = (2));

} else {
var statearr_30937_31019 = state_30926__$1;
(statearr_30937_31019[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (24))){
var state_30926__$1 = state_30926;
var statearr_30938_31020 = state_30926__$1;
(statearr_30938_31020[(2)] = null);

(statearr_30938_31020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (39))){
var inst_30879 = (state_30926[(16)]);
var state_30926__$1 = state_30926;
var statearr_30939_31021 = state_30926__$1;
(statearr_30939_31021[(2)] = inst_30879);

(statearr_30939_31021[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (46))){
var inst_30921 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30940_31022 = state_30926__$1;
(statearr_30940_31022[(2)] = inst_30921);

(statearr_30940_31022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (4))){
var inst_30823 = (state_30926[(2)]);
var inst_30824 = cljs.core.List.EMPTY;
var inst_30825 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30824);
var inst_30826 = (function (){return ((function (inst_30823,inst_30824,inst_30825,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30767_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30767_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30767_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30767_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_30823,inst_30824,inst_30825,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30827 = cljs.core.filter.call(null,inst_30826,files);
var inst_30828 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30829 = cljs.core.concat.call(null,inst_30827,inst_30828);
var state_30926__$1 = (function (){var statearr_30941 = state_30926;
(statearr_30941[(17)] = inst_30825);

(statearr_30941[(12)] = inst_30829);

(statearr_30941[(18)] = inst_30823);

return statearr_30941;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30942_31023 = state_30926__$1;
(statearr_30942_31023[(1)] = (16));

} else {
var statearr_30943_31024 = state_30926__$1;
(statearr_30943_31024[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (15))){
var inst_30813 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30944_31025 = state_30926__$1;
(statearr_30944_31025[(2)] = inst_30813);

(statearr_30944_31025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (21))){
var inst_30839 = (state_30926[(19)]);
var inst_30839__$1 = (state_30926[(2)]);
var inst_30840 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30839__$1);
var state_30926__$1 = (function (){var statearr_30945 = state_30926;
(statearr_30945[(19)] = inst_30839__$1);

return statearr_30945;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30926__$1,(22),inst_30840);
} else {
if((state_val_30927 === (31))){
var inst_30924 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30926__$1,inst_30924);
} else {
if((state_val_30927 === (32))){
var inst_30879 = (state_30926[(16)]);
var inst_30884 = inst_30879.cljs$lang$protocol_mask$partition0$;
var inst_30885 = (inst_30884 & (64));
var inst_30886 = inst_30879.cljs$core$ISeq$;
var inst_30887 = (cljs.core.PROTOCOL_SENTINEL === inst_30886);
var inst_30888 = ((inst_30885) || (inst_30887));
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30888)){
var statearr_30946_31026 = state_30926__$1;
(statearr_30946_31026[(1)] = (35));

} else {
var statearr_30947_31027 = state_30926__$1;
(statearr_30947_31027[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (40))){
var inst_30901 = (state_30926[(20)]);
var inst_30900 = (state_30926[(2)]);
var inst_30901__$1 = cljs.core.get.call(null,inst_30900,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30902 = cljs.core.get.call(null,inst_30900,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30903 = cljs.core.not_empty.call(null,inst_30901__$1);
var state_30926__$1 = (function (){var statearr_30948 = state_30926;
(statearr_30948[(20)] = inst_30901__$1);

(statearr_30948[(21)] = inst_30902);

return statearr_30948;
})();
if(cljs.core.truth_(inst_30903)){
var statearr_30949_31028 = state_30926__$1;
(statearr_30949_31028[(1)] = (41));

} else {
var statearr_30950_31029 = state_30926__$1;
(statearr_30950_31029[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (33))){
var state_30926__$1 = state_30926;
var statearr_30951_31030 = state_30926__$1;
(statearr_30951_31030[(2)] = false);

(statearr_30951_31030[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (13))){
var inst_30799 = (state_30926[(22)]);
var inst_30803 = cljs.core.chunk_first.call(null,inst_30799);
var inst_30804 = cljs.core.chunk_rest.call(null,inst_30799);
var inst_30805 = cljs.core.count.call(null,inst_30803);
var inst_30786 = inst_30804;
var inst_30787 = inst_30803;
var inst_30788 = inst_30805;
var inst_30789 = (0);
var state_30926__$1 = (function (){var statearr_30952 = state_30926;
(statearr_30952[(7)] = inst_30787);

(statearr_30952[(8)] = inst_30786);

(statearr_30952[(9)] = inst_30789);

(statearr_30952[(10)] = inst_30788);

return statearr_30952;
})();
var statearr_30953_31031 = state_30926__$1;
(statearr_30953_31031[(2)] = null);

(statearr_30953_31031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (22))){
var inst_30842 = (state_30926[(23)]);
var inst_30839 = (state_30926[(19)]);
var inst_30843 = (state_30926[(24)]);
var inst_30847 = (state_30926[(25)]);
var inst_30842__$1 = (state_30926[(2)]);
var inst_30843__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30842__$1);
var inst_30844 = (function (){var all_files = inst_30839;
var res_SINGLEQUOTE_ = inst_30842__$1;
var res = inst_30843__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30842,inst_30839,inst_30843,inst_30847,inst_30842__$1,inst_30843__$1,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30768_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30768_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30842,inst_30839,inst_30843,inst_30847,inst_30842__$1,inst_30843__$1,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30845 = cljs.core.filter.call(null,inst_30844,inst_30842__$1);
var inst_30846 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30847__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30846);
var inst_30848 = cljs.core.not_empty.call(null,inst_30847__$1);
var state_30926__$1 = (function (){var statearr_30954 = state_30926;
(statearr_30954[(23)] = inst_30842__$1);

(statearr_30954[(24)] = inst_30843__$1);

(statearr_30954[(25)] = inst_30847__$1);

(statearr_30954[(26)] = inst_30845);

return statearr_30954;
})();
if(cljs.core.truth_(inst_30848)){
var statearr_30955_31032 = state_30926__$1;
(statearr_30955_31032[(1)] = (23));

} else {
var statearr_30956_31033 = state_30926__$1;
(statearr_30956_31033[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (36))){
var state_30926__$1 = state_30926;
var statearr_30957_31034 = state_30926__$1;
(statearr_30957_31034[(2)] = false);

(statearr_30957_31034[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (41))){
var inst_30901 = (state_30926[(20)]);
var inst_30905 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30906 = cljs.core.map.call(null,inst_30905,inst_30901);
var inst_30907 = cljs.core.pr_str.call(null,inst_30906);
var inst_30908 = ["figwheel-no-load meta-data: ",inst_30907].join('');
var inst_30909 = figwheel.client.utils.log.call(null,inst_30908);
var state_30926__$1 = state_30926;
var statearr_30958_31035 = state_30926__$1;
(statearr_30958_31035[(2)] = inst_30909);

(statearr_30958_31035[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (43))){
var inst_30902 = (state_30926[(21)]);
var inst_30912 = (state_30926[(2)]);
var inst_30913 = cljs.core.not_empty.call(null,inst_30902);
var state_30926__$1 = (function (){var statearr_30959 = state_30926;
(statearr_30959[(27)] = inst_30912);

return statearr_30959;
})();
if(cljs.core.truth_(inst_30913)){
var statearr_30960_31036 = state_30926__$1;
(statearr_30960_31036[(1)] = (44));

} else {
var statearr_30961_31037 = state_30926__$1;
(statearr_30961_31037[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (29))){
var inst_30879 = (state_30926[(16)]);
var inst_30842 = (state_30926[(23)]);
var inst_30839 = (state_30926[(19)]);
var inst_30843 = (state_30926[(24)]);
var inst_30847 = (state_30926[(25)]);
var inst_30845 = (state_30926[(26)]);
var inst_30875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30878 = (function (){var all_files = inst_30839;
var res_SINGLEQUOTE_ = inst_30842;
var res = inst_30843;
var files_not_loaded = inst_30845;
var dependencies_that_loaded = inst_30847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30879,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30875,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30877){
var map__30962 = p__30877;
var map__30962__$1 = (((((!((map__30962 == null))))?(((((map__30962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30962):map__30962);
var namespace = cljs.core.get.call(null,map__30962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30879,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30875,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30879__$1 = cljs.core.group_by.call(null,inst_30878,inst_30845);
var inst_30881 = (inst_30879__$1 == null);
var inst_30882 = cljs.core.not.call(null,inst_30881);
var state_30926__$1 = (function (){var statearr_30964 = state_30926;
(statearr_30964[(16)] = inst_30879__$1);

(statearr_30964[(28)] = inst_30875);

return statearr_30964;
})();
if(inst_30882){
var statearr_30965_31038 = state_30926__$1;
(statearr_30965_31038[(1)] = (32));

} else {
var statearr_30966_31039 = state_30926__$1;
(statearr_30966_31039[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (44))){
var inst_30902 = (state_30926[(21)]);
var inst_30915 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30902);
var inst_30916 = cljs.core.pr_str.call(null,inst_30915);
var inst_30917 = ["not required: ",inst_30916].join('');
var inst_30918 = figwheel.client.utils.log.call(null,inst_30917);
var state_30926__$1 = state_30926;
var statearr_30967_31040 = state_30926__$1;
(statearr_30967_31040[(2)] = inst_30918);

(statearr_30967_31040[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (6))){
var inst_30820 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30968_31041 = state_30926__$1;
(statearr_30968_31041[(2)] = inst_30820);

(statearr_30968_31041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (28))){
var inst_30845 = (state_30926[(26)]);
var inst_30872 = (state_30926[(2)]);
var inst_30873 = cljs.core.not_empty.call(null,inst_30845);
var state_30926__$1 = (function (){var statearr_30969 = state_30926;
(statearr_30969[(29)] = inst_30872);

return statearr_30969;
})();
if(cljs.core.truth_(inst_30873)){
var statearr_30970_31042 = state_30926__$1;
(statearr_30970_31042[(1)] = (29));

} else {
var statearr_30971_31043 = state_30926__$1;
(statearr_30971_31043[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (25))){
var inst_30843 = (state_30926[(24)]);
var inst_30859 = (state_30926[(2)]);
var inst_30860 = cljs.core.not_empty.call(null,inst_30843);
var state_30926__$1 = (function (){var statearr_30972 = state_30926;
(statearr_30972[(30)] = inst_30859);

return statearr_30972;
})();
if(cljs.core.truth_(inst_30860)){
var statearr_30973_31044 = state_30926__$1;
(statearr_30973_31044[(1)] = (26));

} else {
var statearr_30974_31045 = state_30926__$1;
(statearr_30974_31045[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (34))){
var inst_30895 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30895)){
var statearr_30975_31046 = state_30926__$1;
(statearr_30975_31046[(1)] = (38));

} else {
var statearr_30976_31047 = state_30926__$1;
(statearr_30976_31047[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (17))){
var state_30926__$1 = state_30926;
var statearr_30977_31048 = state_30926__$1;
(statearr_30977_31048[(2)] = recompile_dependents);

(statearr_30977_31048[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (3))){
var state_30926__$1 = state_30926;
var statearr_30978_31049 = state_30926__$1;
(statearr_30978_31049[(2)] = null);

(statearr_30978_31049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (12))){
var inst_30816 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30979_31050 = state_30926__$1;
(statearr_30979_31050[(2)] = inst_30816);

(statearr_30979_31050[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (2))){
var inst_30778 = (state_30926[(13)]);
var inst_30785 = cljs.core.seq.call(null,inst_30778);
var inst_30786 = inst_30785;
var inst_30787 = null;
var inst_30788 = (0);
var inst_30789 = (0);
var state_30926__$1 = (function (){var statearr_30980 = state_30926;
(statearr_30980[(7)] = inst_30787);

(statearr_30980[(8)] = inst_30786);

(statearr_30980[(9)] = inst_30789);

(statearr_30980[(10)] = inst_30788);

return statearr_30980;
})();
var statearr_30981_31051 = state_30926__$1;
(statearr_30981_31051[(2)] = null);

(statearr_30981_31051[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (23))){
var inst_30842 = (state_30926[(23)]);
var inst_30839 = (state_30926[(19)]);
var inst_30843 = (state_30926[(24)]);
var inst_30847 = (state_30926[(25)]);
var inst_30845 = (state_30926[(26)]);
var inst_30850 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30852 = (function (){var all_files = inst_30839;
var res_SINGLEQUOTE_ = inst_30842;
var res = inst_30843;
var files_not_loaded = inst_30845;
var dependencies_that_loaded = inst_30847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30850,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30851){
var map__30982 = p__30851;
var map__30982__$1 = (((((!((map__30982 == null))))?(((((map__30982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30982):map__30982);
var request_url = cljs.core.get.call(null,map__30982__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30850,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30853 = cljs.core.reverse.call(null,inst_30847);
var inst_30854 = cljs.core.map.call(null,inst_30852,inst_30853);
var inst_30855 = cljs.core.pr_str.call(null,inst_30854);
var inst_30856 = figwheel.client.utils.log.call(null,inst_30855);
var state_30926__$1 = (function (){var statearr_30984 = state_30926;
(statearr_30984[(31)] = inst_30850);

return statearr_30984;
})();
var statearr_30985_31052 = state_30926__$1;
(statearr_30985_31052[(2)] = inst_30856);

(statearr_30985_31052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (35))){
var state_30926__$1 = state_30926;
var statearr_30986_31053 = state_30926__$1;
(statearr_30986_31053[(2)] = true);

(statearr_30986_31053[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (19))){
var inst_30829 = (state_30926[(12)]);
var inst_30835 = figwheel.client.file_reloading.expand_files.call(null,inst_30829);
var state_30926__$1 = state_30926;
var statearr_30987_31054 = state_30926__$1;
(statearr_30987_31054[(2)] = inst_30835);

(statearr_30987_31054[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (11))){
var state_30926__$1 = state_30926;
var statearr_30988_31055 = state_30926__$1;
(statearr_30988_31055[(2)] = null);

(statearr_30988_31055[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (9))){
var inst_30818 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30989_31056 = state_30926__$1;
(statearr_30989_31056[(2)] = inst_30818);

(statearr_30989_31056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (5))){
var inst_30789 = (state_30926[(9)]);
var inst_30788 = (state_30926[(10)]);
var inst_30791 = (inst_30789 < inst_30788);
var inst_30792 = inst_30791;
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30792)){
var statearr_30990_31057 = state_30926__$1;
(statearr_30990_31057[(1)] = (7));

} else {
var statearr_30991_31058 = state_30926__$1;
(statearr_30991_31058[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (14))){
var inst_30799 = (state_30926[(22)]);
var inst_30808 = cljs.core.first.call(null,inst_30799);
var inst_30809 = figwheel.client.file_reloading.eval_body.call(null,inst_30808,opts);
var inst_30810 = cljs.core.next.call(null,inst_30799);
var inst_30786 = inst_30810;
var inst_30787 = null;
var inst_30788 = (0);
var inst_30789 = (0);
var state_30926__$1 = (function (){var statearr_30992 = state_30926;
(statearr_30992[(7)] = inst_30787);

(statearr_30992[(8)] = inst_30786);

(statearr_30992[(9)] = inst_30789);

(statearr_30992[(10)] = inst_30788);

(statearr_30992[(32)] = inst_30809);

return statearr_30992;
})();
var statearr_30993_31059 = state_30926__$1;
(statearr_30993_31059[(2)] = null);

(statearr_30993_31059[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (45))){
var state_30926__$1 = state_30926;
var statearr_30994_31060 = state_30926__$1;
(statearr_30994_31060[(2)] = null);

(statearr_30994_31060[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (26))){
var inst_30842 = (state_30926[(23)]);
var inst_30839 = (state_30926[(19)]);
var inst_30843 = (state_30926[(24)]);
var inst_30847 = (state_30926[(25)]);
var inst_30845 = (state_30926[(26)]);
var inst_30862 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30864 = (function (){var all_files = inst_30839;
var res_SINGLEQUOTE_ = inst_30842;
var res = inst_30843;
var files_not_loaded = inst_30845;
var dependencies_that_loaded = inst_30847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30862,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30863){
var map__30995 = p__30863;
var map__30995__$1 = (((((!((map__30995 == null))))?(((((map__30995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30995):map__30995);
var namespace = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30995__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30862,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30865 = cljs.core.map.call(null,inst_30864,inst_30843);
var inst_30866 = cljs.core.pr_str.call(null,inst_30865);
var inst_30867 = figwheel.client.utils.log.call(null,inst_30866);
var inst_30868 = (function (){var all_files = inst_30839;
var res_SINGLEQUOTE_ = inst_30842;
var res = inst_30843;
var files_not_loaded = inst_30845;
var dependencies_that_loaded = inst_30847;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30862,inst_30864,inst_30865,inst_30866,inst_30867,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30842,inst_30839,inst_30843,inst_30847,inst_30845,inst_30862,inst_30864,inst_30865,inst_30866,inst_30867,state_val_30927,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30869 = setTimeout(inst_30868,(10));
var state_30926__$1 = (function (){var statearr_30997 = state_30926;
(statearr_30997[(33)] = inst_30862);

(statearr_30997[(34)] = inst_30867);

return statearr_30997;
})();
var statearr_30998_31061 = state_30926__$1;
(statearr_30998_31061[(2)] = inst_30869);

(statearr_30998_31061[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (16))){
var state_30926__$1 = state_30926;
var statearr_30999_31062 = state_30926__$1;
(statearr_30999_31062[(2)] = reload_dependents);

(statearr_30999_31062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (38))){
var inst_30879 = (state_30926[(16)]);
var inst_30897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30879);
var state_30926__$1 = state_30926;
var statearr_31000_31063 = state_30926__$1;
(statearr_31000_31063[(2)] = inst_30897);

(statearr_31000_31063[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (30))){
var state_30926__$1 = state_30926;
var statearr_31001_31064 = state_30926__$1;
(statearr_31001_31064[(2)] = null);

(statearr_31001_31064[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (10))){
var inst_30799 = (state_30926[(22)]);
var inst_30801 = cljs.core.chunked_seq_QMARK_.call(null,inst_30799);
var state_30926__$1 = state_30926;
if(inst_30801){
var statearr_31002_31065 = state_30926__$1;
(statearr_31002_31065[(1)] = (13));

} else {
var statearr_31003_31066 = state_30926__$1;
(statearr_31003_31066[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (18))){
var inst_30833 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30833)){
var statearr_31004_31067 = state_30926__$1;
(statearr_31004_31067[(1)] = (19));

} else {
var statearr_31005_31068 = state_30926__$1;
(statearr_31005_31068[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (42))){
var state_30926__$1 = state_30926;
var statearr_31006_31069 = state_30926__$1;
(statearr_31006_31069[(2)] = null);

(statearr_31006_31069[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (37))){
var inst_30892 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_31007_31070 = state_30926__$1;
(statearr_31007_31070[(2)] = inst_30892);

(statearr_31007_31070[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (8))){
var inst_30799 = (state_30926[(22)]);
var inst_30786 = (state_30926[(8)]);
var inst_30799__$1 = cljs.core.seq.call(null,inst_30786);
var state_30926__$1 = (function (){var statearr_31008 = state_30926;
(statearr_31008[(22)] = inst_30799__$1);

return statearr_31008;
})();
if(inst_30799__$1){
var statearr_31009_31071 = state_30926__$1;
(statearr_31009_31071[(1)] = (10));

} else {
var statearr_31010_31072 = state_30926__$1;
(statearr_31010_31072[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28210__auto__,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto____0 = (function (){
var statearr_31011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31011[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto__);

(statearr_31011[(1)] = (1));

return statearr_31011;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto____1 = (function (state_30926){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_30926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e31012){if((e31012 instanceof Object)){
var ex__28214__auto__ = e31012;
var statearr_31013_31073 = state_30926;
(statearr_31013_31073[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31074 = state_30926;
state_30926 = G__31074;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto__ = function(state_30926){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto____1.call(this,state_30926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28307__auto__ = (function (){var statearr_31014 = f__28306__auto__.call(null);
(statearr_31014[(6)] = c__28305__auto__);

return statearr_31014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__,map__30771,map__30771__$1,opts,before_jsload,on_jsload,reload_dependents,map__30772,map__30772__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28305__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31077,link){
var map__31078 = p__31077;
var map__31078__$1 = (((((!((map__31078 == null))))?(((((map__31078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31078):map__31078);
var file = cljs.core.get.call(null,map__31078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__31078,map__31078__$1,file){
return (function (p1__31075_SHARP_,p2__31076_SHARP_){
if(cljs.core._EQ_.call(null,p1__31075_SHARP_,p2__31076_SHARP_)){
return p1__31075_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__31078,map__31078__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31081){
var map__31082 = p__31081;
var map__31082__$1 = (((((!((map__31082 == null))))?(((((map__31082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31082):map__31082);
var match_length = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31082__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31080_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31080_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31084_SHARP_,p2__31085_SHARP_){
return cljs.core.assoc.call(null,p1__31084_SHARP_,cljs.core.get.call(null,p2__31085_SHARP_,key),p2__31085_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_31086 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31086);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31086);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31087,p__31088){
var map__31089 = p__31087;
var map__31089__$1 = (((((!((map__31089 == null))))?(((((map__31089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31089):map__31089);
var on_cssload = cljs.core.get.call(null,map__31089__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31090 = p__31088;
var map__31090__$1 = (((((!((map__31090 == null))))?(((((map__31090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31090):map__31090);
var files_msg = map__31090__$1;
var files = cljs.core.get.call(null,map__31090__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563741479996
