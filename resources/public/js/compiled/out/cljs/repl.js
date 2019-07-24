// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31949){
var map__31950 = p__31949;
var map__31950__$1 = (((((!((map__31950 == null))))?(((((map__31950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31950):map__31950);
var m = map__31950__$1;
var n = cljs.core.get.call(null,map__31950__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31950__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31952_31984 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31953_31985 = null;
var count__31954_31986 = (0);
var i__31955_31987 = (0);
while(true){
if((i__31955_31987 < count__31954_31986)){
var f_31988 = cljs.core._nth.call(null,chunk__31953_31985,i__31955_31987);
cljs.core.println.call(null,"  ",f_31988);


var G__31989 = seq__31952_31984;
var G__31990 = chunk__31953_31985;
var G__31991 = count__31954_31986;
var G__31992 = (i__31955_31987 + (1));
seq__31952_31984 = G__31989;
chunk__31953_31985 = G__31990;
count__31954_31986 = G__31991;
i__31955_31987 = G__31992;
continue;
} else {
var temp__5720__auto___31993 = cljs.core.seq.call(null,seq__31952_31984);
if(temp__5720__auto___31993){
var seq__31952_31994__$1 = temp__5720__auto___31993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31952_31994__$1)){
var c__4550__auto___31995 = cljs.core.chunk_first.call(null,seq__31952_31994__$1);
var G__31996 = cljs.core.chunk_rest.call(null,seq__31952_31994__$1);
var G__31997 = c__4550__auto___31995;
var G__31998 = cljs.core.count.call(null,c__4550__auto___31995);
var G__31999 = (0);
seq__31952_31984 = G__31996;
chunk__31953_31985 = G__31997;
count__31954_31986 = G__31998;
i__31955_31987 = G__31999;
continue;
} else {
var f_32000 = cljs.core.first.call(null,seq__31952_31994__$1);
cljs.core.println.call(null,"  ",f_32000);


var G__32001 = cljs.core.next.call(null,seq__31952_31994__$1);
var G__32002 = null;
var G__32003 = (0);
var G__32004 = (0);
seq__31952_31984 = G__32001;
chunk__31953_31985 = G__32002;
count__31954_31986 = G__32003;
i__31955_31987 = G__32004;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32005 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32005);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32005)))?cljs.core.second.call(null,arglists_32005):arglists_32005));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31956_32006 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31957_32007 = null;
var count__31958_32008 = (0);
var i__31959_32009 = (0);
while(true){
if((i__31959_32009 < count__31958_32008)){
var vec__31970_32010 = cljs.core._nth.call(null,chunk__31957_32007,i__31959_32009);
var name_32011 = cljs.core.nth.call(null,vec__31970_32010,(0),null);
var map__31973_32012 = cljs.core.nth.call(null,vec__31970_32010,(1),null);
var map__31973_32013__$1 = (((((!((map__31973_32012 == null))))?(((((map__31973_32012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31973_32012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31973_32012):map__31973_32012);
var doc_32014 = cljs.core.get.call(null,map__31973_32013__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32015 = cljs.core.get.call(null,map__31973_32013__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32011);

cljs.core.println.call(null," ",arglists_32015);

if(cljs.core.truth_(doc_32014)){
cljs.core.println.call(null," ",doc_32014);
} else {
}


var G__32016 = seq__31956_32006;
var G__32017 = chunk__31957_32007;
var G__32018 = count__31958_32008;
var G__32019 = (i__31959_32009 + (1));
seq__31956_32006 = G__32016;
chunk__31957_32007 = G__32017;
count__31958_32008 = G__32018;
i__31959_32009 = G__32019;
continue;
} else {
var temp__5720__auto___32020 = cljs.core.seq.call(null,seq__31956_32006);
if(temp__5720__auto___32020){
var seq__31956_32021__$1 = temp__5720__auto___32020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31956_32021__$1)){
var c__4550__auto___32022 = cljs.core.chunk_first.call(null,seq__31956_32021__$1);
var G__32023 = cljs.core.chunk_rest.call(null,seq__31956_32021__$1);
var G__32024 = c__4550__auto___32022;
var G__32025 = cljs.core.count.call(null,c__4550__auto___32022);
var G__32026 = (0);
seq__31956_32006 = G__32023;
chunk__31957_32007 = G__32024;
count__31958_32008 = G__32025;
i__31959_32009 = G__32026;
continue;
} else {
var vec__31975_32027 = cljs.core.first.call(null,seq__31956_32021__$1);
var name_32028 = cljs.core.nth.call(null,vec__31975_32027,(0),null);
var map__31978_32029 = cljs.core.nth.call(null,vec__31975_32027,(1),null);
var map__31978_32030__$1 = (((((!((map__31978_32029 == null))))?(((((map__31978_32029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31978_32029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31978_32029):map__31978_32029);
var doc_32031 = cljs.core.get.call(null,map__31978_32030__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32032 = cljs.core.get.call(null,map__31978_32030__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32028);

cljs.core.println.call(null," ",arglists_32032);

if(cljs.core.truth_(doc_32031)){
cljs.core.println.call(null," ",doc_32031);
} else {
}


var G__32033 = cljs.core.next.call(null,seq__31956_32021__$1);
var G__32034 = null;
var G__32035 = (0);
var G__32036 = (0);
seq__31956_32006 = G__32033;
chunk__31957_32007 = G__32034;
count__31958_32008 = G__32035;
i__31959_32009 = G__32036;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__31980 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31981 = null;
var count__31982 = (0);
var i__31983 = (0);
while(true){
if((i__31983 < count__31982)){
var role = cljs.core._nth.call(null,chunk__31981,i__31983);
var temp__5720__auto___32037__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___32037__$1)){
var spec_32038 = temp__5720__auto___32037__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32038));
} else {
}


var G__32039 = seq__31980;
var G__32040 = chunk__31981;
var G__32041 = count__31982;
var G__32042 = (i__31983 + (1));
seq__31980 = G__32039;
chunk__31981 = G__32040;
count__31982 = G__32041;
i__31983 = G__32042;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__31980);
if(temp__5720__auto____$1){
var seq__31980__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31980__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31980__$1);
var G__32043 = cljs.core.chunk_rest.call(null,seq__31980__$1);
var G__32044 = c__4550__auto__;
var G__32045 = cljs.core.count.call(null,c__4550__auto__);
var G__32046 = (0);
seq__31980 = G__32043;
chunk__31981 = G__32044;
count__31982 = G__32045;
i__31983 = G__32046;
continue;
} else {
var role = cljs.core.first.call(null,seq__31980__$1);
var temp__5720__auto___32047__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___32047__$2)){
var spec_32048 = temp__5720__auto___32047__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_32048));
} else {
}


var G__32049 = cljs.core.next.call(null,seq__31980__$1);
var G__32050 = null;
var G__32051 = (0);
var G__32052 = (0);
seq__31980 = G__32049;
chunk__31981 = G__32050;
count__31982 = G__32051;
i__31983 = G__32052;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32053 = cljs.core.conj.call(null,via,t);
var G__32054 = cljs.core.ex_cause.call(null,t);
via = G__32053;
t = G__32054;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32057 = datafied_throwable;
var map__32057__$1 = (((((!((map__32057 == null))))?(((((map__32057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32057):map__32057);
var via = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__32057__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32058 = cljs.core.last.call(null,via);
var map__32058__$1 = (((((!((map__32058 == null))))?(((((map__32058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32058):map__32058);
var type = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__32058__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32059 = data;
var map__32059__$1 = (((((!((map__32059 == null))))?(((((map__32059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32059):map__32059);
var problems = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__32059__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32060 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__32060__$1 = (((((!((map__32060 == null))))?(((((map__32060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32060):map__32060);
var top_data = map__32060__$1;
var source = cljs.core.get.call(null,map__32060__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__32065 = phase;
var G__32065__$1 = (((G__32065 instanceof cljs.core.Keyword))?G__32065.fqn:null);
switch (G__32065__$1) {
case "read-source":
var map__32066 = data;
var map__32066__$1 = (((((!((map__32066 == null))))?(((((map__32066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32066):map__32066);
var line = cljs.core.get.call(null,map__32066__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32066__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32068 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__32068__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32068,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32068);
var G__32068__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32068__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32068__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32068__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32069 = top_data;
var G__32069__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__32069,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32069);
var G__32069__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__32069__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32069__$1);
var G__32069__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32069__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32069__$2);
var G__32069__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32069__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32069__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32069__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32069__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32070 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32070,(0),null);
var method = cljs.core.nth.call(null,vec__32070,(1),null);
var file = cljs.core.nth.call(null,vec__32070,(2),null);
var line = cljs.core.nth.call(null,vec__32070,(3),null);
var G__32073 = top_data;
var G__32073__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__32073,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32073);
var G__32073__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__32073__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32073__$1);
var G__32073__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__32073__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32073__$2);
var G__32073__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__32073__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32073__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__32073__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32073__$4;
}

break;
case "execution":
var vec__32074 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__32074,(0),null);
var method = cljs.core.nth.call(null,vec__32074,(1),null);
var file = cljs.core.nth.call(null,vec__32074,(2),null);
var line = cljs.core.nth.call(null,vec__32074,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__32074,source__$1,method,file,line,G__32065,G__32065__$1,map__32057,map__32057__$1,via,trace,phase,map__32058,map__32058__$1,type,message,data,map__32059,map__32059__$1,problems,fn,caller,map__32060,map__32060__$1,top_data,source){
return (function (p1__32056_SHARP_){
var or__4131__auto__ = (p1__32056_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__32056_SHARP_);
}
});})(vec__32074,source__$1,method,file,line,G__32065,G__32065__$1,map__32057,map__32057__$1,via,trace,phase,map__32058,map__32058__$1,type,message,data,map__32059,map__32059__$1,problems,fn,caller,map__32060,map__32060__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__32077 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32077__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__32077,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32077);
var G__32077__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__32077__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32077__$1);
var G__32077__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__32077__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32077__$2);
var G__32077__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__32077__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32077__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__32077__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32077__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32065__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32081){
var map__32082 = p__32081;
var map__32082__$1 = (((((!((map__32082 == null))))?(((((map__32082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32082):map__32082);
var triage_data = map__32082__$1;
var phase = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__32082__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32084 = phase;
var G__32084__$1 = (((G__32084 instanceof cljs.core.Keyword))?G__32084.fqn:null);
switch (G__32084__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32085_32094 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32086_32095 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32087_32096 = true;
var _STAR_print_fn_STAR__temp_val__32088_32097 = ((function (_STAR_print_newline_STAR__orig_val__32085_32094,_STAR_print_fn_STAR__orig_val__32086_32095,_STAR_print_newline_STAR__temp_val__32087_32096,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32085_32094,_STAR_print_fn_STAR__orig_val__32086_32095,_STAR_print_newline_STAR__temp_val__32087_32096,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32087_32096;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32088_32097;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32085_32094,_STAR_print_fn_STAR__orig_val__32086_32095,_STAR_print_newline_STAR__temp_val__32087_32096,_STAR_print_fn_STAR__temp_val__32088_32097,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__32085_32094,_STAR_print_fn_STAR__orig_val__32086_32095,_STAR_print_newline_STAR__temp_val__32087_32096,_STAR_print_fn_STAR__temp_val__32088_32097,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32079_SHARP_){
return cljs.core.dissoc.call(null,p1__32079_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32085_32094,_STAR_print_fn_STAR__orig_val__32086_32095,_STAR_print_newline_STAR__temp_val__32087_32096,_STAR_print_fn_STAR__temp_val__32088_32097,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32085_32094,_STAR_print_fn_STAR__orig_val__32086_32095,_STAR_print_newline_STAR__temp_val__32087_32096,_STAR_print_fn_STAR__temp_val__32088_32097,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32086_32095;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32085_32094;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32089_32098 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32090_32099 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32091_32100 = true;
var _STAR_print_fn_STAR__temp_val__32092_32101 = ((function (_STAR_print_newline_STAR__orig_val__32089_32098,_STAR_print_fn_STAR__orig_val__32090_32099,_STAR_print_newline_STAR__temp_val__32091_32100,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32089_32098,_STAR_print_fn_STAR__orig_val__32090_32099,_STAR_print_newline_STAR__temp_val__32091_32100,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32091_32100;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32092_32101;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32089_32098,_STAR_print_fn_STAR__orig_val__32090_32099,_STAR_print_newline_STAR__temp_val__32091_32100,_STAR_print_fn_STAR__temp_val__32092_32101,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__32089_32098,_STAR_print_fn_STAR__orig_val__32090_32099,_STAR_print_newline_STAR__temp_val__32091_32100,_STAR_print_fn_STAR__temp_val__32092_32101,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32080_SHARP_){
return cljs.core.dissoc.call(null,p1__32080_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32089_32098,_STAR_print_fn_STAR__orig_val__32090_32099,_STAR_print_newline_STAR__temp_val__32091_32100,_STAR_print_fn_STAR__temp_val__32092_32101,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32089_32098,_STAR_print_fn_STAR__orig_val__32090_32099,_STAR_print_newline_STAR__temp_val__32091_32100,_STAR_print_fn_STAR__temp_val__32092_32101,sb__4661__auto__,G__32084,G__32084__$1,loc,class_name,simple_class,cause_type,format,map__32082,map__32082__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32090_32099;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32089_32098;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32084__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1563741481792
