// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e32296){if((e32296 instanceof Error)){
var e = e32296;
return "Error: Unable to stringify";
} else {
throw e32296;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__32299 = arguments.length;
switch (G__32299) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__32297_SHARP_){
if(typeof p1__32297_SHARP_ === 'string'){
return p1__32297_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__32297_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32302 = arguments.length;
var i__4731__auto___32303 = (0);
while(true){
if((i__4731__auto___32303 < len__4730__auto___32302)){
args__4736__auto__.push((arguments[i__4731__auto___32303]));

var G__32304 = (i__4731__auto___32303 + (1));
i__4731__auto___32303 = G__32304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32301){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32301));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32306 = arguments.length;
var i__4731__auto___32307 = (0);
while(true){
if((i__4731__auto___32307 < len__4730__auto___32306)){
args__4736__auto__.push((arguments[i__4731__auto___32307]));

var G__32308 = (i__4731__auto___32307 + (1));
i__4731__auto___32307 = G__32308;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32305){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32305));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32309){
var map__32310 = p__32309;
var map__32310__$1 = (((((!((map__32310 == null))))?(((((map__32310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32310):map__32310);
var message = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32310__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28305__auto___32389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___32389,ch){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___32389,ch){
return (function (state_32361){
var state_val_32362 = (state_32361[(1)]);
if((state_val_32362 === (7))){
var inst_32357 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
var statearr_32363_32390 = state_32361__$1;
(statearr_32363_32390[(2)] = inst_32357);

(statearr_32363_32390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (1))){
var state_32361__$1 = state_32361;
var statearr_32364_32391 = state_32361__$1;
(statearr_32364_32391[(2)] = null);

(statearr_32364_32391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (4))){
var inst_32314 = (state_32361[(7)]);
var inst_32314__$1 = (state_32361[(2)]);
var state_32361__$1 = (function (){var statearr_32365 = state_32361;
(statearr_32365[(7)] = inst_32314__$1);

return statearr_32365;
})();
if(cljs.core.truth_(inst_32314__$1)){
var statearr_32366_32392 = state_32361__$1;
(statearr_32366_32392[(1)] = (5));

} else {
var statearr_32367_32393 = state_32361__$1;
(statearr_32367_32393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (15))){
var inst_32321 = (state_32361[(8)]);
var inst_32336 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32321);
var inst_32337 = cljs.core.first.call(null,inst_32336);
var inst_32338 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32337);
var inst_32339 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32338)].join('');
var inst_32340 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32339);
var state_32361__$1 = state_32361;
var statearr_32368_32394 = state_32361__$1;
(statearr_32368_32394[(2)] = inst_32340);

(statearr_32368_32394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (13))){
var inst_32345 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
var statearr_32369_32395 = state_32361__$1;
(statearr_32369_32395[(2)] = inst_32345);

(statearr_32369_32395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (6))){
var state_32361__$1 = state_32361;
var statearr_32370_32396 = state_32361__$1;
(statearr_32370_32396[(2)] = null);

(statearr_32370_32396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (17))){
var inst_32343 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
var statearr_32371_32397 = state_32361__$1;
(statearr_32371_32397[(2)] = inst_32343);

(statearr_32371_32397[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (3))){
var inst_32359 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32361__$1,inst_32359);
} else {
if((state_val_32362 === (12))){
var inst_32320 = (state_32361[(9)]);
var inst_32334 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32320,opts);
var state_32361__$1 = state_32361;
if(inst_32334){
var statearr_32372_32398 = state_32361__$1;
(statearr_32372_32398[(1)] = (15));

} else {
var statearr_32373_32399 = state_32361__$1;
(statearr_32373_32399[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (2))){
var state_32361__$1 = state_32361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32361__$1,(4),ch);
} else {
if((state_val_32362 === (11))){
var inst_32321 = (state_32361[(8)]);
var inst_32326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32327 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32321);
var inst_32328 = cljs.core.async.timeout.call(null,(1000));
var inst_32329 = [inst_32327,inst_32328];
var inst_32330 = (new cljs.core.PersistentVector(null,2,(5),inst_32326,inst_32329,null));
var state_32361__$1 = state_32361;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32361__$1,(14),inst_32330);
} else {
if((state_val_32362 === (9))){
var inst_32321 = (state_32361[(8)]);
var inst_32347 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32348 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32321);
var inst_32349 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32348);
var inst_32350 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32349)].join('');
var inst_32351 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32350);
var state_32361__$1 = (function (){var statearr_32374 = state_32361;
(statearr_32374[(10)] = inst_32347);

return statearr_32374;
})();
var statearr_32375_32400 = state_32361__$1;
(statearr_32375_32400[(2)] = inst_32351);

(statearr_32375_32400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (5))){
var inst_32314 = (state_32361[(7)]);
var inst_32316 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32317 = (new cljs.core.PersistentArrayMap(null,2,inst_32316,null));
var inst_32318 = (new cljs.core.PersistentHashSet(null,inst_32317,null));
var inst_32319 = figwheel.client.focus_msgs.call(null,inst_32318,inst_32314);
var inst_32320 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32319);
var inst_32321 = cljs.core.first.call(null,inst_32319);
var inst_32322 = figwheel.client.autoload_QMARK_.call(null);
var state_32361__$1 = (function (){var statearr_32376 = state_32361;
(statearr_32376[(9)] = inst_32320);

(statearr_32376[(8)] = inst_32321);

return statearr_32376;
})();
if(cljs.core.truth_(inst_32322)){
var statearr_32377_32401 = state_32361__$1;
(statearr_32377_32401[(1)] = (8));

} else {
var statearr_32378_32402 = state_32361__$1;
(statearr_32378_32402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (14))){
var inst_32332 = (state_32361[(2)]);
var state_32361__$1 = state_32361;
var statearr_32379_32403 = state_32361__$1;
(statearr_32379_32403[(2)] = inst_32332);

(statearr_32379_32403[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (16))){
var state_32361__$1 = state_32361;
var statearr_32380_32404 = state_32361__$1;
(statearr_32380_32404[(2)] = null);

(statearr_32380_32404[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (10))){
var inst_32353 = (state_32361[(2)]);
var state_32361__$1 = (function (){var statearr_32381 = state_32361;
(statearr_32381[(11)] = inst_32353);

return statearr_32381;
})();
var statearr_32382_32405 = state_32361__$1;
(statearr_32382_32405[(2)] = null);

(statearr_32382_32405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32362 === (8))){
var inst_32320 = (state_32361[(9)]);
var inst_32324 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32320,opts);
var state_32361__$1 = state_32361;
if(cljs.core.truth_(inst_32324)){
var statearr_32383_32406 = state_32361__$1;
(statearr_32383_32406[(1)] = (11));

} else {
var statearr_32384_32407 = state_32361__$1;
(statearr_32384_32407[(1)] = (12));

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
});})(c__28305__auto___32389,ch))
;
return ((function (switch__28210__auto__,c__28305__auto___32389,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28211__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28211__auto____0 = (function (){
var statearr_32385 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32385[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28211__auto__);

(statearr_32385[(1)] = (1));

return statearr_32385;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28211__auto____1 = (function (state_32361){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_32361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e32386){if((e32386 instanceof Object)){
var ex__28214__auto__ = e32386;
var statearr_32387_32408 = state_32361;
(statearr_32387_32408[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32409 = state_32361;
state_32361 = G__32409;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28211__auto__ = function(state_32361){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28211__auto____1.call(this,state_32361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28211__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28211__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___32389,ch))
})();
var state__28307__auto__ = (function (){var statearr_32388 = f__28306__auto__.call(null);
(statearr_32388[(6)] = c__28305__auto___32389);

return statearr_32388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___32389,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32410_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32410_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32416 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32416){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32412 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32413 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32414 = true;
var _STAR_print_fn_STAR__temp_val__32415 = ((function (_STAR_print_newline_STAR__orig_val__32412,_STAR_print_fn_STAR__orig_val__32413,_STAR_print_newline_STAR__temp_val__32414,sb,base_path_32416){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__32412,_STAR_print_fn_STAR__orig_val__32413,_STAR_print_newline_STAR__temp_val__32414,sb,base_path_32416))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32414;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32415;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32413;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32412;
}}catch (e32411){if((e32411 instanceof Error)){
var e = e32411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32416], null));
} else {
var e = e32411;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32416))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32417){
var map__32418 = p__32417;
var map__32418__$1 = (((((!((map__32418 == null))))?(((((map__32418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32418):map__32418);
var opts = map__32418__$1;
var build_id = cljs.core.get.call(null,map__32418__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32418,map__32418__$1,opts,build_id){
return (function (p__32420){
var vec__32421 = p__32420;
var seq__32422 = cljs.core.seq.call(null,vec__32421);
var first__32423 = cljs.core.first.call(null,seq__32422);
var seq__32422__$1 = cljs.core.next.call(null,seq__32422);
var map__32424 = first__32423;
var map__32424__$1 = (((((!((map__32424 == null))))?(((((map__32424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32424):map__32424);
var msg = map__32424__$1;
var msg_name = cljs.core.get.call(null,map__32424__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32422__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32421,seq__32422,first__32423,seq__32422__$1,map__32424,map__32424__$1,msg,msg_name,_,map__32418,map__32418__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32421,seq__32422,first__32423,seq__32422__$1,map__32424,map__32424__$1,msg,msg_name,_,map__32418,map__32418__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32418,map__32418__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32426){
var vec__32427 = p__32426;
var seq__32428 = cljs.core.seq.call(null,vec__32427);
var first__32429 = cljs.core.first.call(null,seq__32428);
var seq__32428__$1 = cljs.core.next.call(null,seq__32428);
var map__32430 = first__32429;
var map__32430__$1 = (((((!((map__32430 == null))))?(((((map__32430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32430):map__32430);
var msg = map__32430__$1;
var msg_name = cljs.core.get.call(null,map__32430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32428__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32432){
var map__32433 = p__32432;
var map__32433__$1 = (((((!((map__32433 == null))))?(((((map__32433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32433):map__32433);
var on_compile_warning = cljs.core.get.call(null,map__32433__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32433__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32433,map__32433__$1,on_compile_warning,on_compile_fail){
return (function (p__32435){
var vec__32436 = p__32435;
var seq__32437 = cljs.core.seq.call(null,vec__32436);
var first__32438 = cljs.core.first.call(null,seq__32437);
var seq__32437__$1 = cljs.core.next.call(null,seq__32437);
var map__32439 = first__32438;
var map__32439__$1 = (((((!((map__32439 == null))))?(((((map__32439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32439):map__32439);
var msg = map__32439__$1;
var msg_name = cljs.core.get.call(null,map__32439__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32437__$1;
var pred__32441 = cljs.core._EQ_;
var expr__32442 = msg_name;
if(cljs.core.truth_(pred__32441.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32442))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32441.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32442))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32433,map__32433__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__,msg_hist,msg_names,msg){
return (function (state_32531){
var state_val_32532 = (state_32531[(1)]);
if((state_val_32532 === (7))){
var inst_32451 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32451)){
var statearr_32533_32580 = state_32531__$1;
(statearr_32533_32580[(1)] = (8));

} else {
var statearr_32534_32581 = state_32531__$1;
(statearr_32534_32581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (20))){
var inst_32525 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32535_32582 = state_32531__$1;
(statearr_32535_32582[(2)] = inst_32525);

(statearr_32535_32582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (27))){
var inst_32521 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32536_32583 = state_32531__$1;
(statearr_32536_32583[(2)] = inst_32521);

(statearr_32536_32583[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (1))){
var inst_32444 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32531__$1 = state_32531;
if(cljs.core.truth_(inst_32444)){
var statearr_32537_32584 = state_32531__$1;
(statearr_32537_32584[(1)] = (2));

} else {
var statearr_32538_32585 = state_32531__$1;
(statearr_32538_32585[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (24))){
var inst_32523 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32539_32586 = state_32531__$1;
(statearr_32539_32586[(2)] = inst_32523);

(statearr_32539_32586[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (4))){
var inst_32529 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32531__$1,inst_32529);
} else {
if((state_val_32532 === (15))){
var inst_32527 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32540_32587 = state_32531__$1;
(statearr_32540_32587[(2)] = inst_32527);

(statearr_32540_32587[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (21))){
var inst_32480 = (state_32531[(2)]);
var inst_32481 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32482 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32481);
var state_32531__$1 = (function (){var statearr_32541 = state_32531;
(statearr_32541[(7)] = inst_32480);

return statearr_32541;
})();
var statearr_32542_32588 = state_32531__$1;
(statearr_32542_32588[(2)] = inst_32482);

(statearr_32542_32588[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (31))){
var inst_32510 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32531__$1 = state_32531;
if(inst_32510){
var statearr_32543_32589 = state_32531__$1;
(statearr_32543_32589[(1)] = (34));

} else {
var statearr_32544_32590 = state_32531__$1;
(statearr_32544_32590[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (32))){
var inst_32519 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32545_32591 = state_32531__$1;
(statearr_32545_32591[(2)] = inst_32519);

(statearr_32545_32591[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (33))){
var inst_32506 = (state_32531[(2)]);
var inst_32507 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32508 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32507);
var state_32531__$1 = (function (){var statearr_32546 = state_32531;
(statearr_32546[(8)] = inst_32506);

return statearr_32546;
})();
var statearr_32547_32592 = state_32531__$1;
(statearr_32547_32592[(2)] = inst_32508);

(statearr_32547_32592[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (13))){
var inst_32465 = figwheel.client.heads_up.clear.call(null);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(16),inst_32465);
} else {
if((state_val_32532 === (22))){
var inst_32486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32487 = figwheel.client.heads_up.append_warning_message.call(null,inst_32486);
var state_32531__$1 = state_32531;
var statearr_32548_32593 = state_32531__$1;
(statearr_32548_32593[(2)] = inst_32487);

(statearr_32548_32593[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (36))){
var inst_32517 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32549_32594 = state_32531__$1;
(statearr_32549_32594[(2)] = inst_32517);

(statearr_32549_32594[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (29))){
var inst_32497 = (state_32531[(2)]);
var inst_32498 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32499 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32498);
var state_32531__$1 = (function (){var statearr_32550 = state_32531;
(statearr_32550[(9)] = inst_32497);

return statearr_32550;
})();
var statearr_32551_32595 = state_32531__$1;
(statearr_32551_32595[(2)] = inst_32499);

(statearr_32551_32595[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (6))){
var inst_32446 = (state_32531[(10)]);
var state_32531__$1 = state_32531;
var statearr_32552_32596 = state_32531__$1;
(statearr_32552_32596[(2)] = inst_32446);

(statearr_32552_32596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (28))){
var inst_32493 = (state_32531[(2)]);
var inst_32494 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32495 = figwheel.client.heads_up.display_warning.call(null,inst_32494);
var state_32531__$1 = (function (){var statearr_32553 = state_32531;
(statearr_32553[(11)] = inst_32493);

return statearr_32553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(29),inst_32495);
} else {
if((state_val_32532 === (25))){
var inst_32491 = figwheel.client.heads_up.clear.call(null);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(28),inst_32491);
} else {
if((state_val_32532 === (34))){
var inst_32512 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(37),inst_32512);
} else {
if((state_val_32532 === (17))){
var inst_32471 = (state_32531[(2)]);
var inst_32472 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32473 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32472);
var state_32531__$1 = (function (){var statearr_32554 = state_32531;
(statearr_32554[(12)] = inst_32471);

return statearr_32554;
})();
var statearr_32555_32597 = state_32531__$1;
(statearr_32555_32597[(2)] = inst_32473);

(statearr_32555_32597[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (3))){
var inst_32463 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32531__$1 = state_32531;
if(inst_32463){
var statearr_32556_32598 = state_32531__$1;
(statearr_32556_32598[(1)] = (13));

} else {
var statearr_32557_32599 = state_32531__$1;
(statearr_32557_32599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (12))){
var inst_32459 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32558_32600 = state_32531__$1;
(statearr_32558_32600[(2)] = inst_32459);

(statearr_32558_32600[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (2))){
var inst_32446 = (state_32531[(10)]);
var inst_32446__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32531__$1 = (function (){var statearr_32559 = state_32531;
(statearr_32559[(10)] = inst_32446__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32446__$1)){
var statearr_32560_32601 = state_32531__$1;
(statearr_32560_32601[(1)] = (5));

} else {
var statearr_32561_32602 = state_32531__$1;
(statearr_32561_32602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (23))){
var inst_32489 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32531__$1 = state_32531;
if(inst_32489){
var statearr_32562_32603 = state_32531__$1;
(statearr_32562_32603[(1)] = (25));

} else {
var statearr_32563_32604 = state_32531__$1;
(statearr_32563_32604[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (35))){
var state_32531__$1 = state_32531;
var statearr_32564_32605 = state_32531__$1;
(statearr_32564_32605[(2)] = null);

(statearr_32564_32605[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (19))){
var inst_32484 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32531__$1 = state_32531;
if(inst_32484){
var statearr_32565_32606 = state_32531__$1;
(statearr_32565_32606[(1)] = (22));

} else {
var statearr_32566_32607 = state_32531__$1;
(statearr_32566_32607[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (11))){
var inst_32455 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32567_32608 = state_32531__$1;
(statearr_32567_32608[(2)] = inst_32455);

(statearr_32567_32608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (9))){
var inst_32457 = figwheel.client.heads_up.clear.call(null);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(12),inst_32457);
} else {
if((state_val_32532 === (5))){
var inst_32448 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32531__$1 = state_32531;
var statearr_32568_32609 = state_32531__$1;
(statearr_32568_32609[(2)] = inst_32448);

(statearr_32568_32609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (14))){
var inst_32475 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32531__$1 = state_32531;
if(inst_32475){
var statearr_32569_32610 = state_32531__$1;
(statearr_32569_32610[(1)] = (18));

} else {
var statearr_32570_32611 = state_32531__$1;
(statearr_32570_32611[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (26))){
var inst_32501 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32531__$1 = state_32531;
if(inst_32501){
var statearr_32571_32612 = state_32531__$1;
(statearr_32571_32612[(1)] = (30));

} else {
var statearr_32572_32613 = state_32531__$1;
(statearr_32572_32613[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (16))){
var inst_32467 = (state_32531[(2)]);
var inst_32468 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32469 = figwheel.client.heads_up.display_exception.call(null,inst_32468);
var state_32531__$1 = (function (){var statearr_32573 = state_32531;
(statearr_32573[(13)] = inst_32467);

return statearr_32573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(17),inst_32469);
} else {
if((state_val_32532 === (30))){
var inst_32503 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32504 = figwheel.client.heads_up.display_warning.call(null,inst_32503);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(33),inst_32504);
} else {
if((state_val_32532 === (10))){
var inst_32461 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32574_32614 = state_32531__$1;
(statearr_32574_32614[(2)] = inst_32461);

(statearr_32574_32614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (18))){
var inst_32477 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32478 = figwheel.client.heads_up.display_exception.call(null,inst_32477);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(21),inst_32478);
} else {
if((state_val_32532 === (37))){
var inst_32514 = (state_32531[(2)]);
var state_32531__$1 = state_32531;
var statearr_32575_32615 = state_32531__$1;
(statearr_32575_32615[(2)] = inst_32514);

(statearr_32575_32615[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32532 === (8))){
var inst_32453 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32531__$1 = state_32531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32531__$1,(11),inst_32453);
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
});})(c__28305__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28210__auto__,c__28305__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto____0 = (function (){
var statearr_32576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32576[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto__);

(statearr_32576[(1)] = (1));

return statearr_32576;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto____1 = (function (state_32531){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_32531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e32577){if((e32577 instanceof Object)){
var ex__28214__auto__ = e32577;
var statearr_32578_32616 = state_32531;
(statearr_32578_32616[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32617 = state_32531;
state_32531 = G__32617;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto__ = function(state_32531){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto____1.call(this,state_32531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__,msg_hist,msg_names,msg))
})();
var state__28307__auto__ = (function (){var statearr_32579 = f__28306__auto__.call(null);
(statearr_32579[(6)] = c__28305__auto__);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__,msg_hist,msg_names,msg))
);

return c__28305__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28305__auto___32646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___32646,ch){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___32646,ch){
return (function (state_32632){
var state_val_32633 = (state_32632[(1)]);
if((state_val_32633 === (1))){
var state_32632__$1 = state_32632;
var statearr_32634_32647 = state_32632__$1;
(statearr_32634_32647[(2)] = null);

(statearr_32634_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (2))){
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(4),ch);
} else {
if((state_val_32633 === (3))){
var inst_32630 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32632__$1,inst_32630);
} else {
if((state_val_32633 === (4))){
var inst_32620 = (state_32632[(7)]);
var inst_32620__$1 = (state_32632[(2)]);
var state_32632__$1 = (function (){var statearr_32635 = state_32632;
(statearr_32635[(7)] = inst_32620__$1);

return statearr_32635;
})();
if(cljs.core.truth_(inst_32620__$1)){
var statearr_32636_32648 = state_32632__$1;
(statearr_32636_32648[(1)] = (5));

} else {
var statearr_32637_32649 = state_32632__$1;
(statearr_32637_32649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (5))){
var inst_32620 = (state_32632[(7)]);
var inst_32622 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32620);
var state_32632__$1 = state_32632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32632__$1,(8),inst_32622);
} else {
if((state_val_32633 === (6))){
var state_32632__$1 = state_32632;
var statearr_32638_32650 = state_32632__$1;
(statearr_32638_32650[(2)] = null);

(statearr_32638_32650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (7))){
var inst_32628 = (state_32632[(2)]);
var state_32632__$1 = state_32632;
var statearr_32639_32651 = state_32632__$1;
(statearr_32639_32651[(2)] = inst_32628);

(statearr_32639_32651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32633 === (8))){
var inst_32624 = (state_32632[(2)]);
var state_32632__$1 = (function (){var statearr_32640 = state_32632;
(statearr_32640[(8)] = inst_32624);

return statearr_32640;
})();
var statearr_32641_32652 = state_32632__$1;
(statearr_32641_32652[(2)] = null);

(statearr_32641_32652[(1)] = (2));


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
});})(c__28305__auto___32646,ch))
;
return ((function (switch__28210__auto__,c__28305__auto___32646,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28211__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28211__auto____0 = (function (){
var statearr_32642 = [null,null,null,null,null,null,null,null,null];
(statearr_32642[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28211__auto__);

(statearr_32642[(1)] = (1));

return statearr_32642;
});
var figwheel$client$heads_up_plugin_$_state_machine__28211__auto____1 = (function (state_32632){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_32632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e32643){if((e32643 instanceof Object)){
var ex__28214__auto__ = e32643;
var statearr_32644_32653 = state_32632;
(statearr_32644_32653[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32654 = state_32632;
state_32632 = G__32654;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28211__auto__ = function(state_32632){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28211__auto____1.call(this,state_32632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28211__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28211__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___32646,ch))
})();
var state__28307__auto__ = (function (){var statearr_32645 = f__28306__auto__.call(null);
(statearr_32645[(6)] = c__28305__auto___32646);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___32646,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__){
return (function (state_32660){
var state_val_32661 = (state_32660[(1)]);
if((state_val_32661 === (1))){
var inst_32655 = cljs.core.async.timeout.call(null,(3000));
var state_32660__$1 = state_32660;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32660__$1,(2),inst_32655);
} else {
if((state_val_32661 === (2))){
var inst_32657 = (state_32660[(2)]);
var inst_32658 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32660__$1 = (function (){var statearr_32662 = state_32660;
(statearr_32662[(7)] = inst_32657);

return statearr_32662;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32660__$1,inst_32658);
} else {
return null;
}
}
});})(c__28305__auto__))
;
return ((function (switch__28210__auto__,c__28305__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28211__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28211__auto____0 = (function (){
var statearr_32663 = [null,null,null,null,null,null,null,null];
(statearr_32663[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28211__auto__);

(statearr_32663[(1)] = (1));

return statearr_32663;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28211__auto____1 = (function (state_32660){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_32660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e32664){if((e32664 instanceof Object)){
var ex__28214__auto__ = e32664;
var statearr_32665_32667 = state_32660;
(statearr_32665_32667[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32668 = state_32660;
state_32660 = G__32668;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28211__auto__ = function(state_32660){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28211__auto____1.call(this,state_32660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28211__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28211__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__))
})();
var state__28307__auto__ = (function (){var statearr_32666 = f__28306__auto__.call(null);
(statearr_32666[(6)] = c__28305__auto__);

return statearr_32666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__))
);

return c__28305__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__,figwheel_version,temp__5720__auto__){
return (function (state_32675){
var state_val_32676 = (state_32675[(1)]);
if((state_val_32676 === (1))){
var inst_32669 = cljs.core.async.timeout.call(null,(2000));
var state_32675__$1 = state_32675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32675__$1,(2),inst_32669);
} else {
if((state_val_32676 === (2))){
var inst_32671 = (state_32675[(2)]);
var inst_32672 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32673 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32672);
var state_32675__$1 = (function (){var statearr_32677 = state_32675;
(statearr_32677[(7)] = inst_32671);

return statearr_32677;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32675__$1,inst_32673);
} else {
return null;
}
}
});})(c__28305__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__28210__auto__,c__28305__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto____0 = (function (){
var statearr_32678 = [null,null,null,null,null,null,null,null];
(statearr_32678[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto__);

(statearr_32678[(1)] = (1));

return statearr_32678;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto____1 = (function (state_32675){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_32675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e32679){if((e32679 instanceof Object)){
var ex__28214__auto__ = e32679;
var statearr_32680_32682 = state_32675;
(statearr_32680_32682[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32683 = state_32675;
state_32675 = G__32683;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto__ = function(state_32675){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto____1.call(this,state_32675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__,figwheel_version,temp__5720__auto__))
})();
var state__28307__auto__ = (function (){var statearr_32681 = f__28306__auto__.call(null);
(statearr_32681[(6)] = c__28305__auto__);

return statearr_32681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__,figwheel_version,temp__5720__auto__))
);

return c__28305__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32684){
var map__32685 = p__32684;
var map__32685__$1 = (((((!((map__32685 == null))))?(((((map__32685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32685):map__32685);
var file = cljs.core.get.call(null,map__32685__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32685__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32685__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32687 = "";
var G__32687__$1 = (cljs.core.truth_(file)?[G__32687,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32687);
var G__32687__$2 = (cljs.core.truth_(line)?[G__32687__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32687__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__32687__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32687__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32688){
var map__32689 = p__32688;
var map__32689__$1 = (((((!((map__32689 == null))))?(((((map__32689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32689):map__32689);
var ed = map__32689__$1;
var exception_data = cljs.core.get.call(null,map__32689__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32689__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32692 = (function (){var G__32691 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32691)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32691;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32692);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32693){
var map__32694 = p__32693;
var map__32694__$1 = (((((!((map__32694 == null))))?(((((map__32694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32694):map__32694);
var w = map__32694__$1;
var message = cljs.core.get.call(null,map__32694__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32696 = cljs.core.seq.call(null,plugins);
var chunk__32697 = null;
var count__32698 = (0);
var i__32699 = (0);
while(true){
if((i__32699 < count__32698)){
var vec__32706 = cljs.core._nth.call(null,chunk__32697,i__32699);
var k = cljs.core.nth.call(null,vec__32706,(0),null);
var plugin = cljs.core.nth.call(null,vec__32706,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32712 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32696,chunk__32697,count__32698,i__32699,pl_32712,vec__32706,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32712.call(null,msg_hist);
});})(seq__32696,chunk__32697,count__32698,i__32699,pl_32712,vec__32706,k,plugin))
);
} else {
}


var G__32713 = seq__32696;
var G__32714 = chunk__32697;
var G__32715 = count__32698;
var G__32716 = (i__32699 + (1));
seq__32696 = G__32713;
chunk__32697 = G__32714;
count__32698 = G__32715;
i__32699 = G__32716;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__32696);
if(temp__5720__auto__){
var seq__32696__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32696__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32696__$1);
var G__32717 = cljs.core.chunk_rest.call(null,seq__32696__$1);
var G__32718 = c__4550__auto__;
var G__32719 = cljs.core.count.call(null,c__4550__auto__);
var G__32720 = (0);
seq__32696 = G__32717;
chunk__32697 = G__32718;
count__32698 = G__32719;
i__32699 = G__32720;
continue;
} else {
var vec__32709 = cljs.core.first.call(null,seq__32696__$1);
var k = cljs.core.nth.call(null,vec__32709,(0),null);
var plugin = cljs.core.nth.call(null,vec__32709,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32696,chunk__32697,count__32698,i__32699,pl_32721,vec__32709,k,plugin,seq__32696__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32721.call(null,msg_hist);
});})(seq__32696,chunk__32697,count__32698,i__32699,pl_32721,vec__32709,k,plugin,seq__32696__$1,temp__5720__auto__))
);
} else {
}


var G__32722 = cljs.core.next.call(null,seq__32696__$1);
var G__32723 = null;
var G__32724 = (0);
var G__32725 = (0);
seq__32696 = G__32722;
chunk__32697 = G__32723;
count__32698 = G__32724;
i__32699 = G__32725;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32727 = arguments.length;
switch (G__32727) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32728_32733 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32729_32734 = null;
var count__32730_32735 = (0);
var i__32731_32736 = (0);
while(true){
if((i__32731_32736 < count__32730_32735)){
var msg_32737 = cljs.core._nth.call(null,chunk__32729_32734,i__32731_32736);
figwheel.client.socket.handle_incoming_message.call(null,msg_32737);


var G__32738 = seq__32728_32733;
var G__32739 = chunk__32729_32734;
var G__32740 = count__32730_32735;
var G__32741 = (i__32731_32736 + (1));
seq__32728_32733 = G__32738;
chunk__32729_32734 = G__32739;
count__32730_32735 = G__32740;
i__32731_32736 = G__32741;
continue;
} else {
var temp__5720__auto___32742 = cljs.core.seq.call(null,seq__32728_32733);
if(temp__5720__auto___32742){
var seq__32728_32743__$1 = temp__5720__auto___32742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32728_32743__$1)){
var c__4550__auto___32744 = cljs.core.chunk_first.call(null,seq__32728_32743__$1);
var G__32745 = cljs.core.chunk_rest.call(null,seq__32728_32743__$1);
var G__32746 = c__4550__auto___32744;
var G__32747 = cljs.core.count.call(null,c__4550__auto___32744);
var G__32748 = (0);
seq__32728_32733 = G__32745;
chunk__32729_32734 = G__32746;
count__32730_32735 = G__32747;
i__32731_32736 = G__32748;
continue;
} else {
var msg_32749 = cljs.core.first.call(null,seq__32728_32743__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32749);


var G__32750 = cljs.core.next.call(null,seq__32728_32743__$1);
var G__32751 = null;
var G__32752 = (0);
var G__32753 = (0);
seq__32728_32733 = G__32750;
chunk__32729_32734 = G__32751;
count__32730_32735 = G__32752;
i__32731_32736 = G__32753;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32758 = arguments.length;
var i__4731__auto___32759 = (0);
while(true){
if((i__4731__auto___32759 < len__4730__auto___32758)){
args__4736__auto__.push((arguments[i__4731__auto___32759]));

var G__32760 = (i__4731__auto___32759 + (1));
i__4731__auto___32759 = G__32760;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32755){
var map__32756 = p__32755;
var map__32756__$1 = (((((!((map__32756 == null))))?(((((map__32756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32756):map__32756);
var opts = map__32756__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32754){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32754));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32761){if((e32761 instanceof Error)){
var e = e32761;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32761;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32762){
var map__32763 = p__32762;
var map__32763__$1 = (((((!((map__32763 == null))))?(((((map__32763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32763):map__32763);
var msg_name = cljs.core.get.call(null,map__32763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563741482971
