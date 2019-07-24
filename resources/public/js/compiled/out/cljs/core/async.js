// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28365 = arguments.length;
switch (G__28365) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28366 = (function (f,blockable,meta28367){
this.f = f;
this.blockable = blockable;
this.meta28367 = meta28367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28368,meta28367__$1){
var self__ = this;
var _28368__$1 = this;
return (new cljs.core.async.t_cljs$core$async28366(self__.f,self__.blockable,meta28367__$1));
});

cljs.core.async.t_cljs$core$async28366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28368){
var self__ = this;
var _28368__$1 = this;
return self__.meta28367;
});

cljs.core.async.t_cljs$core$async28366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28367","meta28367",-411620907,null)], null);
});

cljs.core.async.t_cljs$core$async28366.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28366";

cljs.core.async.t_cljs$core$async28366.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28366");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28366.
 */
cljs.core.async.__GT_t_cljs$core$async28366 = (function cljs$core$async$__GT_t_cljs$core$async28366(f__$1,blockable__$1,meta28367){
return (new cljs.core.async.t_cljs$core$async28366(f__$1,blockable__$1,meta28367));
});

}

return (new cljs.core.async.t_cljs$core$async28366(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28372 = arguments.length;
switch (G__28372) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28375 = arguments.length;
switch (G__28375) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28378 = arguments.length;
switch (G__28378) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28380 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28380);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28380,ret){
return (function (){
return fn1.call(null,val_28380);
});})(val_28380,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28382 = arguments.length;
switch (G__28382) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___28384 = n;
var x_28385 = (0);
while(true){
if((x_28385 < n__4607__auto___28384)){
(a[x_28385] = x_28385);

var G__28386 = (x_28385 + (1));
x_28385 = G__28386;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28387 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28387 = (function (flag,meta28388){
this.flag = flag;
this.meta28388 = meta28388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28389,meta28388__$1){
var self__ = this;
var _28389__$1 = this;
return (new cljs.core.async.t_cljs$core$async28387(self__.flag,meta28388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28389){
var self__ = this;
var _28389__$1 = this;
return self__.meta28388;
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28388","meta28388",-1052404652,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28387";

cljs.core.async.t_cljs$core$async28387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28387");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28387.
 */
cljs.core.async.__GT_t_cljs$core$async28387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28387(flag__$1,meta28388){
return (new cljs.core.async.t_cljs$core$async28387(flag__$1,meta28388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28390 = (function (flag,cb,meta28391){
this.flag = flag;
this.cb = cb;
this.meta28391 = meta28391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28392,meta28391__$1){
var self__ = this;
var _28392__$1 = this;
return (new cljs.core.async.t_cljs$core$async28390(self__.flag,self__.cb,meta28391__$1));
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28392){
var self__ = this;
var _28392__$1 = this;
return self__.meta28391;
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28391","meta28391",-1266027561,null)], null);
});

cljs.core.async.t_cljs$core$async28390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28390";

cljs.core.async.t_cljs$core$async28390.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28390.
 */
cljs.core.async.__GT_t_cljs$core$async28390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28390(flag__$1,cb__$1,meta28391){
return (new cljs.core.async.t_cljs$core$async28390(flag__$1,cb__$1,meta28391));
});

}

return (new cljs.core.async.t_cljs$core$async28390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28394_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28395 = (i + (1));
i = G__28395;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28401 = arguments.length;
var i__4731__auto___28402 = (0);
while(true){
if((i__4731__auto___28402 < len__4730__auto___28401)){
args__4736__auto__.push((arguments[i__4731__auto___28402]));

var G__28403 = (i__4731__auto___28402 + (1));
i__4731__auto___28402 = G__28403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28398){
var map__28399 = p__28398;
var map__28399__$1 = (((((!((map__28399 == null))))?(((((map__28399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28399):map__28399);
var opts = map__28399__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28396){
var G__28397 = cljs.core.first.call(null,seq28396);
var seq28396__$1 = cljs.core.next.call(null,seq28396);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28397,seq28396__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28405 = arguments.length;
switch (G__28405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28305__auto___28451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___28451){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___28451){
return (function (state_28429){
var state_val_28430 = (state_28429[(1)]);
if((state_val_28430 === (7))){
var inst_28425 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28431_28452 = state_28429__$1;
(statearr_28431_28452[(2)] = inst_28425);

(statearr_28431_28452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (1))){
var state_28429__$1 = state_28429;
var statearr_28432_28453 = state_28429__$1;
(statearr_28432_28453[(2)] = null);

(statearr_28432_28453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (4))){
var inst_28408 = (state_28429[(7)]);
var inst_28408__$1 = (state_28429[(2)]);
var inst_28409 = (inst_28408__$1 == null);
var state_28429__$1 = (function (){var statearr_28433 = state_28429;
(statearr_28433[(7)] = inst_28408__$1);

return statearr_28433;
})();
if(cljs.core.truth_(inst_28409)){
var statearr_28434_28454 = state_28429__$1;
(statearr_28434_28454[(1)] = (5));

} else {
var statearr_28435_28455 = state_28429__$1;
(statearr_28435_28455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (13))){
var state_28429__$1 = state_28429;
var statearr_28436_28456 = state_28429__$1;
(statearr_28436_28456[(2)] = null);

(statearr_28436_28456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (6))){
var inst_28408 = (state_28429[(7)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28429__$1,(11),to,inst_28408);
} else {
if((state_val_28430 === (3))){
var inst_28427 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28429__$1,inst_28427);
} else {
if((state_val_28430 === (12))){
var state_28429__$1 = state_28429;
var statearr_28437_28457 = state_28429__$1;
(statearr_28437_28457[(2)] = null);

(statearr_28437_28457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (2))){
var state_28429__$1 = state_28429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28429__$1,(4),from);
} else {
if((state_val_28430 === (11))){
var inst_28418 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
if(cljs.core.truth_(inst_28418)){
var statearr_28438_28458 = state_28429__$1;
(statearr_28438_28458[(1)] = (12));

} else {
var statearr_28439_28459 = state_28429__$1;
(statearr_28439_28459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (9))){
var state_28429__$1 = state_28429;
var statearr_28440_28460 = state_28429__$1;
(statearr_28440_28460[(2)] = null);

(statearr_28440_28460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (5))){
var state_28429__$1 = state_28429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28441_28461 = state_28429__$1;
(statearr_28441_28461[(1)] = (8));

} else {
var statearr_28442_28462 = state_28429__$1;
(statearr_28442_28462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (14))){
var inst_28423 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28443_28463 = state_28429__$1;
(statearr_28443_28463[(2)] = inst_28423);

(statearr_28443_28463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (10))){
var inst_28415 = (state_28429[(2)]);
var state_28429__$1 = state_28429;
var statearr_28444_28464 = state_28429__$1;
(statearr_28444_28464[(2)] = inst_28415);

(statearr_28444_28464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28430 === (8))){
var inst_28412 = cljs.core.async.close_BANG_.call(null,to);
var state_28429__$1 = state_28429;
var statearr_28445_28465 = state_28429__$1;
(statearr_28445_28465[(2)] = inst_28412);

(statearr_28445_28465[(1)] = (10));


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
});})(c__28305__auto___28451))
;
return ((function (switch__28210__auto__,c__28305__auto___28451){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_28446 = [null,null,null,null,null,null,null,null];
(statearr_28446[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_28446[(1)] = (1));

return statearr_28446;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_28429){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28447){if((e28447 instanceof Object)){
var ex__28214__auto__ = e28447;
var statearr_28448_28466 = state_28429;
(statearr_28448_28466[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28467 = state_28429;
state_28429 = G__28467;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_28429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_28429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___28451))
})();
var state__28307__auto__ = (function (){var statearr_28449 = f__28306__auto__.call(null);
(statearr_28449[(6)] = c__28305__auto___28451);

return statearr_28449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___28451))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28468){
var vec__28469 = p__28468;
var v = cljs.core.nth.call(null,vec__28469,(0),null);
var p = cljs.core.nth.call(null,vec__28469,(1),null);
var job = vec__28469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28305__auto___28640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___28640,res,vec__28469,v,p,job,jobs,results){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___28640,res,vec__28469,v,p,job,jobs,results){
return (function (state_28476){
var state_val_28477 = (state_28476[(1)]);
if((state_val_28477 === (1))){
var state_28476__$1 = state_28476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28476__$1,(2),res,v);
} else {
if((state_val_28477 === (2))){
var inst_28473 = (state_28476[(2)]);
var inst_28474 = cljs.core.async.close_BANG_.call(null,res);
var state_28476__$1 = (function (){var statearr_28478 = state_28476;
(statearr_28478[(7)] = inst_28473);

return statearr_28478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28476__$1,inst_28474);
} else {
return null;
}
}
});})(c__28305__auto___28640,res,vec__28469,v,p,job,jobs,results))
;
return ((function (switch__28210__auto__,c__28305__auto___28640,res,vec__28469,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0 = (function (){
var statearr_28479 = [null,null,null,null,null,null,null,null];
(statearr_28479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__);

(statearr_28479[(1)] = (1));

return statearr_28479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1 = (function (state_28476){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28480){if((e28480 instanceof Object)){
var ex__28214__auto__ = e28480;
var statearr_28481_28641 = state_28476;
(statearr_28481_28641[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28476;
state_28476 = G__28642;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = function(state_28476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1.call(this,state_28476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___28640,res,vec__28469,v,p,job,jobs,results))
})();
var state__28307__auto__ = (function (){var statearr_28482 = f__28306__auto__.call(null);
(statearr_28482[(6)] = c__28305__auto___28640);

return statearr_28482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___28640,res,vec__28469,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28483){
var vec__28484 = p__28483;
var v = cljs.core.nth.call(null,vec__28484,(0),null);
var p = cljs.core.nth.call(null,vec__28484,(1),null);
var job = vec__28484;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___28643 = n;
var __28644 = (0);
while(true){
if((__28644 < n__4607__auto___28643)){
var G__28487_28645 = type;
var G__28487_28646__$1 = (((G__28487_28645 instanceof cljs.core.Keyword))?G__28487_28645.fqn:null);
switch (G__28487_28646__$1) {
case "compute":
var c__28305__auto___28648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28644,c__28305__auto___28648,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (__28644,c__28305__auto___28648,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async){
return (function (state_28500){
var state_val_28501 = (state_28500[(1)]);
if((state_val_28501 === (1))){
var state_28500__$1 = state_28500;
var statearr_28502_28649 = state_28500__$1;
(statearr_28502_28649[(2)] = null);

(statearr_28502_28649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (2))){
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28500__$1,(4),jobs);
} else {
if((state_val_28501 === (3))){
var inst_28498 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28500__$1,inst_28498);
} else {
if((state_val_28501 === (4))){
var inst_28490 = (state_28500[(2)]);
var inst_28491 = process.call(null,inst_28490);
var state_28500__$1 = state_28500;
if(cljs.core.truth_(inst_28491)){
var statearr_28503_28650 = state_28500__$1;
(statearr_28503_28650[(1)] = (5));

} else {
var statearr_28504_28651 = state_28500__$1;
(statearr_28504_28651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (5))){
var state_28500__$1 = state_28500;
var statearr_28505_28652 = state_28500__$1;
(statearr_28505_28652[(2)] = null);

(statearr_28505_28652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (6))){
var state_28500__$1 = state_28500;
var statearr_28506_28653 = state_28500__$1;
(statearr_28506_28653[(2)] = null);

(statearr_28506_28653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28501 === (7))){
var inst_28496 = (state_28500[(2)]);
var state_28500__$1 = state_28500;
var statearr_28507_28654 = state_28500__$1;
(statearr_28507_28654[(2)] = inst_28496);

(statearr_28507_28654[(1)] = (3));


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
});})(__28644,c__28305__auto___28648,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async))
;
return ((function (__28644,switch__28210__auto__,c__28305__auto___28648,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0 = (function (){
var statearr_28508 = [null,null,null,null,null,null,null];
(statearr_28508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__);

(statearr_28508[(1)] = (1));

return statearr_28508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1 = (function (state_28500){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object)){
var ex__28214__auto__ = e28509;
var statearr_28510_28655 = state_28500;
(statearr_28510_28655[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28656 = state_28500;
state_28500 = G__28656;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = function(state_28500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1.call(this,state_28500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__;
})()
;})(__28644,switch__28210__auto__,c__28305__auto___28648,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async))
})();
var state__28307__auto__ = (function (){var statearr_28511 = f__28306__auto__.call(null);
(statearr_28511[(6)] = c__28305__auto___28648);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(__28644,c__28305__auto___28648,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async))
);


break;
case "async":
var c__28305__auto___28657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28644,c__28305__auto___28657,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (__28644,c__28305__auto___28657,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async){
return (function (state_28524){
var state_val_28525 = (state_28524[(1)]);
if((state_val_28525 === (1))){
var state_28524__$1 = state_28524;
var statearr_28526_28658 = state_28524__$1;
(statearr_28526_28658[(2)] = null);

(statearr_28526_28658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (2))){
var state_28524__$1 = state_28524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28524__$1,(4),jobs);
} else {
if((state_val_28525 === (3))){
var inst_28522 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28524__$1,inst_28522);
} else {
if((state_val_28525 === (4))){
var inst_28514 = (state_28524[(2)]);
var inst_28515 = async.call(null,inst_28514);
var state_28524__$1 = state_28524;
if(cljs.core.truth_(inst_28515)){
var statearr_28527_28659 = state_28524__$1;
(statearr_28527_28659[(1)] = (5));

} else {
var statearr_28528_28660 = state_28524__$1;
(statearr_28528_28660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (5))){
var state_28524__$1 = state_28524;
var statearr_28529_28661 = state_28524__$1;
(statearr_28529_28661[(2)] = null);

(statearr_28529_28661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (6))){
var state_28524__$1 = state_28524;
var statearr_28530_28662 = state_28524__$1;
(statearr_28530_28662[(2)] = null);

(statearr_28530_28662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28525 === (7))){
var inst_28520 = (state_28524[(2)]);
var state_28524__$1 = state_28524;
var statearr_28531_28663 = state_28524__$1;
(statearr_28531_28663[(2)] = inst_28520);

(statearr_28531_28663[(1)] = (3));


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
});})(__28644,c__28305__auto___28657,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async))
;
return ((function (__28644,switch__28210__auto__,c__28305__auto___28657,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0 = (function (){
var statearr_28532 = [null,null,null,null,null,null,null];
(statearr_28532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__);

(statearr_28532[(1)] = (1));

return statearr_28532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1 = (function (state_28524){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28533){if((e28533 instanceof Object)){
var ex__28214__auto__ = e28533;
var statearr_28534_28664 = state_28524;
(statearr_28534_28664[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28665 = state_28524;
state_28524 = G__28665;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = function(state_28524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1.call(this,state_28524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__;
})()
;})(__28644,switch__28210__auto__,c__28305__auto___28657,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async))
})();
var state__28307__auto__ = (function (){var statearr_28535 = f__28306__auto__.call(null);
(statearr_28535[(6)] = c__28305__auto___28657);

return statearr_28535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(__28644,c__28305__auto___28657,G__28487_28645,G__28487_28646__$1,n__4607__auto___28643,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28487_28646__$1)].join('')));

}

var G__28666 = (__28644 + (1));
__28644 = G__28666;
continue;
} else {
}
break;
}

var c__28305__auto___28667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___28667,jobs,results,process,async){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___28667,jobs,results,process,async){
return (function (state_28557){
var state_val_28558 = (state_28557[(1)]);
if((state_val_28558 === (7))){
var inst_28553 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28559_28668 = state_28557__$1;
(statearr_28559_28668[(2)] = inst_28553);

(statearr_28559_28668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (1))){
var state_28557__$1 = state_28557;
var statearr_28560_28669 = state_28557__$1;
(statearr_28560_28669[(2)] = null);

(statearr_28560_28669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (4))){
var inst_28538 = (state_28557[(7)]);
var inst_28538__$1 = (state_28557[(2)]);
var inst_28539 = (inst_28538__$1 == null);
var state_28557__$1 = (function (){var statearr_28561 = state_28557;
(statearr_28561[(7)] = inst_28538__$1);

return statearr_28561;
})();
if(cljs.core.truth_(inst_28539)){
var statearr_28562_28670 = state_28557__$1;
(statearr_28562_28670[(1)] = (5));

} else {
var statearr_28563_28671 = state_28557__$1;
(statearr_28563_28671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (6))){
var inst_28538 = (state_28557[(7)]);
var inst_28543 = (state_28557[(8)]);
var inst_28543__$1 = cljs.core.async.chan.call(null,(1));
var inst_28544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28545 = [inst_28538,inst_28543__$1];
var inst_28546 = (new cljs.core.PersistentVector(null,2,(5),inst_28544,inst_28545,null));
var state_28557__$1 = (function (){var statearr_28564 = state_28557;
(statearr_28564[(8)] = inst_28543__$1);

return statearr_28564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(8),jobs,inst_28546);
} else {
if((state_val_28558 === (3))){
var inst_28555 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28557__$1,inst_28555);
} else {
if((state_val_28558 === (2))){
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(4),from);
} else {
if((state_val_28558 === (9))){
var inst_28550 = (state_28557[(2)]);
var state_28557__$1 = (function (){var statearr_28565 = state_28557;
(statearr_28565[(9)] = inst_28550);

return statearr_28565;
})();
var statearr_28566_28672 = state_28557__$1;
(statearr_28566_28672[(2)] = null);

(statearr_28566_28672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (5))){
var inst_28541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28557__$1 = state_28557;
var statearr_28567_28673 = state_28557__$1;
(statearr_28567_28673[(2)] = inst_28541);

(statearr_28567_28673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (8))){
var inst_28543 = (state_28557[(8)]);
var inst_28548 = (state_28557[(2)]);
var state_28557__$1 = (function (){var statearr_28568 = state_28557;
(statearr_28568[(10)] = inst_28548);

return statearr_28568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28557__$1,(9),results,inst_28543);
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
});})(c__28305__auto___28667,jobs,results,process,async))
;
return ((function (switch__28210__auto__,c__28305__auto___28667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0 = (function (){
var statearr_28569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__);

(statearr_28569[(1)] = (1));

return statearr_28569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1 = (function (state_28557){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28570){if((e28570 instanceof Object)){
var ex__28214__auto__ = e28570;
var statearr_28571_28674 = state_28557;
(statearr_28571_28674[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28675 = state_28557;
state_28557 = G__28675;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = function(state_28557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1.call(this,state_28557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___28667,jobs,results,process,async))
})();
var state__28307__auto__ = (function (){var statearr_28572 = f__28306__auto__.call(null);
(statearr_28572[(6)] = c__28305__auto___28667);

return statearr_28572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___28667,jobs,results,process,async))
);


var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__,jobs,results,process,async){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__,jobs,results,process,async){
return (function (state_28610){
var state_val_28611 = (state_28610[(1)]);
if((state_val_28611 === (7))){
var inst_28606 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28612_28676 = state_28610__$1;
(statearr_28612_28676[(2)] = inst_28606);

(statearr_28612_28676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (20))){
var state_28610__$1 = state_28610;
var statearr_28613_28677 = state_28610__$1;
(statearr_28613_28677[(2)] = null);

(statearr_28613_28677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (1))){
var state_28610__$1 = state_28610;
var statearr_28614_28678 = state_28610__$1;
(statearr_28614_28678[(2)] = null);

(statearr_28614_28678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (4))){
var inst_28575 = (state_28610[(7)]);
var inst_28575__$1 = (state_28610[(2)]);
var inst_28576 = (inst_28575__$1 == null);
var state_28610__$1 = (function (){var statearr_28615 = state_28610;
(statearr_28615[(7)] = inst_28575__$1);

return statearr_28615;
})();
if(cljs.core.truth_(inst_28576)){
var statearr_28616_28679 = state_28610__$1;
(statearr_28616_28679[(1)] = (5));

} else {
var statearr_28617_28680 = state_28610__$1;
(statearr_28617_28680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (15))){
var inst_28588 = (state_28610[(8)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28610__$1,(18),to,inst_28588);
} else {
if((state_val_28611 === (21))){
var inst_28601 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28618_28681 = state_28610__$1;
(statearr_28618_28681[(2)] = inst_28601);

(statearr_28618_28681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (13))){
var inst_28603 = (state_28610[(2)]);
var state_28610__$1 = (function (){var statearr_28619 = state_28610;
(statearr_28619[(9)] = inst_28603);

return statearr_28619;
})();
var statearr_28620_28682 = state_28610__$1;
(statearr_28620_28682[(2)] = null);

(statearr_28620_28682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (6))){
var inst_28575 = (state_28610[(7)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(11),inst_28575);
} else {
if((state_val_28611 === (17))){
var inst_28596 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
if(cljs.core.truth_(inst_28596)){
var statearr_28621_28683 = state_28610__$1;
(statearr_28621_28683[(1)] = (19));

} else {
var statearr_28622_28684 = state_28610__$1;
(statearr_28622_28684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (3))){
var inst_28608 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28610__$1,inst_28608);
} else {
if((state_val_28611 === (12))){
var inst_28585 = (state_28610[(10)]);
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(14),inst_28585);
} else {
if((state_val_28611 === (2))){
var state_28610__$1 = state_28610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28610__$1,(4),results);
} else {
if((state_val_28611 === (19))){
var state_28610__$1 = state_28610;
var statearr_28623_28685 = state_28610__$1;
(statearr_28623_28685[(2)] = null);

(statearr_28623_28685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (11))){
var inst_28585 = (state_28610[(2)]);
var state_28610__$1 = (function (){var statearr_28624 = state_28610;
(statearr_28624[(10)] = inst_28585);

return statearr_28624;
})();
var statearr_28625_28686 = state_28610__$1;
(statearr_28625_28686[(2)] = null);

(statearr_28625_28686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (9))){
var state_28610__$1 = state_28610;
var statearr_28626_28687 = state_28610__$1;
(statearr_28626_28687[(2)] = null);

(statearr_28626_28687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (5))){
var state_28610__$1 = state_28610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28627_28688 = state_28610__$1;
(statearr_28627_28688[(1)] = (8));

} else {
var statearr_28628_28689 = state_28610__$1;
(statearr_28628_28689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (14))){
var inst_28588 = (state_28610[(8)]);
var inst_28590 = (state_28610[(11)]);
var inst_28588__$1 = (state_28610[(2)]);
var inst_28589 = (inst_28588__$1 == null);
var inst_28590__$1 = cljs.core.not.call(null,inst_28589);
var state_28610__$1 = (function (){var statearr_28629 = state_28610;
(statearr_28629[(8)] = inst_28588__$1);

(statearr_28629[(11)] = inst_28590__$1);

return statearr_28629;
})();
if(inst_28590__$1){
var statearr_28630_28690 = state_28610__$1;
(statearr_28630_28690[(1)] = (15));

} else {
var statearr_28631_28691 = state_28610__$1;
(statearr_28631_28691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (16))){
var inst_28590 = (state_28610[(11)]);
var state_28610__$1 = state_28610;
var statearr_28632_28692 = state_28610__$1;
(statearr_28632_28692[(2)] = inst_28590);

(statearr_28632_28692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (10))){
var inst_28582 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28633_28693 = state_28610__$1;
(statearr_28633_28693[(2)] = inst_28582);

(statearr_28633_28693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (18))){
var inst_28593 = (state_28610[(2)]);
var state_28610__$1 = state_28610;
var statearr_28634_28694 = state_28610__$1;
(statearr_28634_28694[(2)] = inst_28593);

(statearr_28634_28694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28611 === (8))){
var inst_28579 = cljs.core.async.close_BANG_.call(null,to);
var state_28610__$1 = state_28610;
var statearr_28635_28695 = state_28610__$1;
(statearr_28635_28695[(2)] = inst_28579);

(statearr_28635_28695[(1)] = (10));


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
});})(c__28305__auto__,jobs,results,process,async))
;
return ((function (switch__28210__auto__,c__28305__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0 = (function (){
var statearr_28636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__);

(statearr_28636[(1)] = (1));

return statearr_28636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1 = (function (state_28610){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28637){if((e28637 instanceof Object)){
var ex__28214__auto__ = e28637;
var statearr_28638_28696 = state_28610;
(statearr_28638_28696[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28697 = state_28610;
state_28610 = G__28697;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__ = function(state_28610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1.call(this,state_28610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28211__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__,jobs,results,process,async))
})();
var state__28307__auto__ = (function (){var statearr_28639 = f__28306__auto__.call(null);
(statearr_28639[(6)] = c__28305__auto__);

return statearr_28639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__,jobs,results,process,async))
);

return c__28305__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28699 = arguments.length;
switch (G__28699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28702 = arguments.length;
switch (G__28702) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28705 = arguments.length;
switch (G__28705) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28305__auto___28754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___28754,tc,fc){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___28754,tc,fc){
return (function (state_28731){
var state_val_28732 = (state_28731[(1)]);
if((state_val_28732 === (7))){
var inst_28727 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28733_28755 = state_28731__$1;
(statearr_28733_28755[(2)] = inst_28727);

(statearr_28733_28755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (1))){
var state_28731__$1 = state_28731;
var statearr_28734_28756 = state_28731__$1;
(statearr_28734_28756[(2)] = null);

(statearr_28734_28756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (4))){
var inst_28708 = (state_28731[(7)]);
var inst_28708__$1 = (state_28731[(2)]);
var inst_28709 = (inst_28708__$1 == null);
var state_28731__$1 = (function (){var statearr_28735 = state_28731;
(statearr_28735[(7)] = inst_28708__$1);

return statearr_28735;
})();
if(cljs.core.truth_(inst_28709)){
var statearr_28736_28757 = state_28731__$1;
(statearr_28736_28757[(1)] = (5));

} else {
var statearr_28737_28758 = state_28731__$1;
(statearr_28737_28758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (13))){
var state_28731__$1 = state_28731;
var statearr_28738_28759 = state_28731__$1;
(statearr_28738_28759[(2)] = null);

(statearr_28738_28759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (6))){
var inst_28708 = (state_28731[(7)]);
var inst_28714 = p.call(null,inst_28708);
var state_28731__$1 = state_28731;
if(cljs.core.truth_(inst_28714)){
var statearr_28739_28760 = state_28731__$1;
(statearr_28739_28760[(1)] = (9));

} else {
var statearr_28740_28761 = state_28731__$1;
(statearr_28740_28761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (3))){
var inst_28729 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28731__$1,inst_28729);
} else {
if((state_val_28732 === (12))){
var state_28731__$1 = state_28731;
var statearr_28741_28762 = state_28731__$1;
(statearr_28741_28762[(2)] = null);

(statearr_28741_28762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (2))){
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28731__$1,(4),ch);
} else {
if((state_val_28732 === (11))){
var inst_28708 = (state_28731[(7)]);
var inst_28718 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28731__$1,(8),inst_28718,inst_28708);
} else {
if((state_val_28732 === (9))){
var state_28731__$1 = state_28731;
var statearr_28742_28763 = state_28731__$1;
(statearr_28742_28763[(2)] = tc);

(statearr_28742_28763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (5))){
var inst_28711 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28712 = cljs.core.async.close_BANG_.call(null,fc);
var state_28731__$1 = (function (){var statearr_28743 = state_28731;
(statearr_28743[(8)] = inst_28711);

return statearr_28743;
})();
var statearr_28744_28764 = state_28731__$1;
(statearr_28744_28764[(2)] = inst_28712);

(statearr_28744_28764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (14))){
var inst_28725 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
var statearr_28745_28765 = state_28731__$1;
(statearr_28745_28765[(2)] = inst_28725);

(statearr_28745_28765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (10))){
var state_28731__$1 = state_28731;
var statearr_28746_28766 = state_28731__$1;
(statearr_28746_28766[(2)] = fc);

(statearr_28746_28766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28732 === (8))){
var inst_28720 = (state_28731[(2)]);
var state_28731__$1 = state_28731;
if(cljs.core.truth_(inst_28720)){
var statearr_28747_28767 = state_28731__$1;
(statearr_28747_28767[(1)] = (12));

} else {
var statearr_28748_28768 = state_28731__$1;
(statearr_28748_28768[(1)] = (13));

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
});})(c__28305__auto___28754,tc,fc))
;
return ((function (switch__28210__auto__,c__28305__auto___28754,tc,fc){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_28749 = [null,null,null,null,null,null,null,null,null];
(statearr_28749[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_28749[(1)] = (1));

return statearr_28749;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_28731){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28750){if((e28750 instanceof Object)){
var ex__28214__auto__ = e28750;
var statearr_28751_28769 = state_28731;
(statearr_28751_28769[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28770 = state_28731;
state_28731 = G__28770;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_28731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_28731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___28754,tc,fc))
})();
var state__28307__auto__ = (function (){var statearr_28752 = f__28306__auto__.call(null);
(statearr_28752[(6)] = c__28305__auto___28754);

return statearr_28752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___28754,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__){
return (function (state_28791){
var state_val_28792 = (state_28791[(1)]);
if((state_val_28792 === (7))){
var inst_28787 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28793_28811 = state_28791__$1;
(statearr_28793_28811[(2)] = inst_28787);

(statearr_28793_28811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (1))){
var inst_28771 = init;
var state_28791__$1 = (function (){var statearr_28794 = state_28791;
(statearr_28794[(7)] = inst_28771);

return statearr_28794;
})();
var statearr_28795_28812 = state_28791__$1;
(statearr_28795_28812[(2)] = null);

(statearr_28795_28812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (4))){
var inst_28774 = (state_28791[(8)]);
var inst_28774__$1 = (state_28791[(2)]);
var inst_28775 = (inst_28774__$1 == null);
var state_28791__$1 = (function (){var statearr_28796 = state_28791;
(statearr_28796[(8)] = inst_28774__$1);

return statearr_28796;
})();
if(cljs.core.truth_(inst_28775)){
var statearr_28797_28813 = state_28791__$1;
(statearr_28797_28813[(1)] = (5));

} else {
var statearr_28798_28814 = state_28791__$1;
(statearr_28798_28814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (6))){
var inst_28771 = (state_28791[(7)]);
var inst_28774 = (state_28791[(8)]);
var inst_28778 = (state_28791[(9)]);
var inst_28778__$1 = f.call(null,inst_28771,inst_28774);
var inst_28779 = cljs.core.reduced_QMARK_.call(null,inst_28778__$1);
var state_28791__$1 = (function (){var statearr_28799 = state_28791;
(statearr_28799[(9)] = inst_28778__$1);

return statearr_28799;
})();
if(inst_28779){
var statearr_28800_28815 = state_28791__$1;
(statearr_28800_28815[(1)] = (8));

} else {
var statearr_28801_28816 = state_28791__$1;
(statearr_28801_28816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (3))){
var inst_28789 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28791__$1,inst_28789);
} else {
if((state_val_28792 === (2))){
var state_28791__$1 = state_28791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28791__$1,(4),ch);
} else {
if((state_val_28792 === (9))){
var inst_28778 = (state_28791[(9)]);
var inst_28771 = inst_28778;
var state_28791__$1 = (function (){var statearr_28802 = state_28791;
(statearr_28802[(7)] = inst_28771);

return statearr_28802;
})();
var statearr_28803_28817 = state_28791__$1;
(statearr_28803_28817[(2)] = null);

(statearr_28803_28817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (5))){
var inst_28771 = (state_28791[(7)]);
var state_28791__$1 = state_28791;
var statearr_28804_28818 = state_28791__$1;
(statearr_28804_28818[(2)] = inst_28771);

(statearr_28804_28818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (10))){
var inst_28785 = (state_28791[(2)]);
var state_28791__$1 = state_28791;
var statearr_28805_28819 = state_28791__$1;
(statearr_28805_28819[(2)] = inst_28785);

(statearr_28805_28819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28792 === (8))){
var inst_28778 = (state_28791[(9)]);
var inst_28781 = cljs.core.deref.call(null,inst_28778);
var state_28791__$1 = state_28791;
var statearr_28806_28820 = state_28791__$1;
(statearr_28806_28820[(2)] = inst_28781);

(statearr_28806_28820[(1)] = (10));


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
});})(c__28305__auto__))
;
return ((function (switch__28210__auto__,c__28305__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28211__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28211__auto____0 = (function (){
var statearr_28807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28807[(0)] = cljs$core$async$reduce_$_state_machine__28211__auto__);

(statearr_28807[(1)] = (1));

return statearr_28807;
});
var cljs$core$async$reduce_$_state_machine__28211__auto____1 = (function (state_28791){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28808){if((e28808 instanceof Object)){
var ex__28214__auto__ = e28808;
var statearr_28809_28821 = state_28791;
(statearr_28809_28821[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28822 = state_28791;
state_28791 = G__28822;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28211__auto__ = function(state_28791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28211__auto____1.call(this,state_28791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28211__auto____0;
cljs$core$async$reduce_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28211__auto____1;
return cljs$core$async$reduce_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__))
})();
var state__28307__auto__ = (function (){var statearr_28810 = f__28306__auto__.call(null);
(statearr_28810[(6)] = c__28305__auto__);

return statearr_28810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__))
);

return c__28305__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__,f__$1){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__,f__$1){
return (function (state_28828){
var state_val_28829 = (state_28828[(1)]);
if((state_val_28829 === (1))){
var inst_28823 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28828__$1,(2),inst_28823);
} else {
if((state_val_28829 === (2))){
var inst_28825 = (state_28828[(2)]);
var inst_28826 = f__$1.call(null,inst_28825);
var state_28828__$1 = state_28828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28828__$1,inst_28826);
} else {
return null;
}
}
});})(c__28305__auto__,f__$1))
;
return ((function (switch__28210__auto__,c__28305__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28211__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28211__auto____0 = (function (){
var statearr_28830 = [null,null,null,null,null,null,null];
(statearr_28830[(0)] = cljs$core$async$transduce_$_state_machine__28211__auto__);

(statearr_28830[(1)] = (1));

return statearr_28830;
});
var cljs$core$async$transduce_$_state_machine__28211__auto____1 = (function (state_28828){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28831){if((e28831 instanceof Object)){
var ex__28214__auto__ = e28831;
var statearr_28832_28834 = state_28828;
(statearr_28832_28834[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28835 = state_28828;
state_28828 = G__28835;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28211__auto__ = function(state_28828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28211__auto____1.call(this,state_28828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28211__auto____0;
cljs$core$async$transduce_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28211__auto____1;
return cljs$core$async$transduce_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__,f__$1))
})();
var state__28307__auto__ = (function (){var statearr_28833 = f__28306__auto__.call(null);
(statearr_28833[(6)] = c__28305__auto__);

return statearr_28833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__,f__$1))
);

return c__28305__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28837 = arguments.length;
switch (G__28837) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__){
return (function (state_28862){
var state_val_28863 = (state_28862[(1)]);
if((state_val_28863 === (7))){
var inst_28844 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28864_28885 = state_28862__$1;
(statearr_28864_28885[(2)] = inst_28844);

(statearr_28864_28885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (1))){
var inst_28838 = cljs.core.seq.call(null,coll);
var inst_28839 = inst_28838;
var state_28862__$1 = (function (){var statearr_28865 = state_28862;
(statearr_28865[(7)] = inst_28839);

return statearr_28865;
})();
var statearr_28866_28886 = state_28862__$1;
(statearr_28866_28886[(2)] = null);

(statearr_28866_28886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (4))){
var inst_28839 = (state_28862[(7)]);
var inst_28842 = cljs.core.first.call(null,inst_28839);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28862__$1,(7),ch,inst_28842);
} else {
if((state_val_28863 === (13))){
var inst_28856 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28867_28887 = state_28862__$1;
(statearr_28867_28887[(2)] = inst_28856);

(statearr_28867_28887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (6))){
var inst_28847 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28847)){
var statearr_28868_28888 = state_28862__$1;
(statearr_28868_28888[(1)] = (8));

} else {
var statearr_28869_28889 = state_28862__$1;
(statearr_28869_28889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (3))){
var inst_28860 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28862__$1,inst_28860);
} else {
if((state_val_28863 === (12))){
var state_28862__$1 = state_28862;
var statearr_28870_28890 = state_28862__$1;
(statearr_28870_28890[(2)] = null);

(statearr_28870_28890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (2))){
var inst_28839 = (state_28862[(7)]);
var state_28862__$1 = state_28862;
if(cljs.core.truth_(inst_28839)){
var statearr_28871_28891 = state_28862__$1;
(statearr_28871_28891[(1)] = (4));

} else {
var statearr_28872_28892 = state_28862__$1;
(statearr_28872_28892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (11))){
var inst_28853 = cljs.core.async.close_BANG_.call(null,ch);
var state_28862__$1 = state_28862;
var statearr_28873_28893 = state_28862__$1;
(statearr_28873_28893[(2)] = inst_28853);

(statearr_28873_28893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (9))){
var state_28862__$1 = state_28862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28874_28894 = state_28862__$1;
(statearr_28874_28894[(1)] = (11));

} else {
var statearr_28875_28895 = state_28862__$1;
(statearr_28875_28895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (5))){
var inst_28839 = (state_28862[(7)]);
var state_28862__$1 = state_28862;
var statearr_28876_28896 = state_28862__$1;
(statearr_28876_28896[(2)] = inst_28839);

(statearr_28876_28896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (10))){
var inst_28858 = (state_28862[(2)]);
var state_28862__$1 = state_28862;
var statearr_28877_28897 = state_28862__$1;
(statearr_28877_28897[(2)] = inst_28858);

(statearr_28877_28897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28863 === (8))){
var inst_28839 = (state_28862[(7)]);
var inst_28849 = cljs.core.next.call(null,inst_28839);
var inst_28839__$1 = inst_28849;
var state_28862__$1 = (function (){var statearr_28878 = state_28862;
(statearr_28878[(7)] = inst_28839__$1);

return statearr_28878;
})();
var statearr_28879_28898 = state_28862__$1;
(statearr_28879_28898[(2)] = null);

(statearr_28879_28898[(1)] = (2));


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
});})(c__28305__auto__))
;
return ((function (switch__28210__auto__,c__28305__auto__){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_28880 = [null,null,null,null,null,null,null,null];
(statearr_28880[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_28880[(1)] = (1));

return statearr_28880;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_28862){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_28862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e28881){if((e28881 instanceof Object)){
var ex__28214__auto__ = e28881;
var statearr_28882_28899 = state_28862;
(statearr_28882_28899[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28900 = state_28862;
state_28862 = G__28900;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_28862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_28862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__))
})();
var state__28307__auto__ = (function (){var statearr_28883 = f__28306__auto__.call(null);
(statearr_28883[(6)] = c__28305__auto__);

return statearr_28883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__))
);

return c__28305__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28901 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28901 = (function (ch,cs,meta28902){
this.ch = ch;
this.cs = cs;
this.meta28902 = meta28902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28903,meta28902__$1){
var self__ = this;
var _28903__$1 = this;
return (new cljs.core.async.t_cljs$core$async28901(self__.ch,self__.cs,meta28902__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28903){
var self__ = this;
var _28903__$1 = this;
return self__.meta28902;
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28902","meta28902",1699365473,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28901";

cljs.core.async.t_cljs$core$async28901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28901");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28901.
 */
cljs.core.async.__GT_t_cljs$core$async28901 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28901(ch__$1,cs__$1,meta28902){
return (new cljs.core.async.t_cljs$core$async28901(ch__$1,cs__$1,meta28902));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28901(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28305__auto___29123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29123,cs,m,dchan,dctr,done){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29123,cs,m,dchan,dctr,done){
return (function (state_29038){
var state_val_29039 = (state_29038[(1)]);
if((state_val_29039 === (7))){
var inst_29034 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29040_29124 = state_29038__$1;
(statearr_29040_29124[(2)] = inst_29034);

(statearr_29040_29124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (20))){
var inst_28937 = (state_29038[(7)]);
var inst_28949 = cljs.core.first.call(null,inst_28937);
var inst_28950 = cljs.core.nth.call(null,inst_28949,(0),null);
var inst_28951 = cljs.core.nth.call(null,inst_28949,(1),null);
var state_29038__$1 = (function (){var statearr_29041 = state_29038;
(statearr_29041[(8)] = inst_28950);

return statearr_29041;
})();
if(cljs.core.truth_(inst_28951)){
var statearr_29042_29125 = state_29038__$1;
(statearr_29042_29125[(1)] = (22));

} else {
var statearr_29043_29126 = state_29038__$1;
(statearr_29043_29126[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (27))){
var inst_28986 = (state_29038[(9)]);
var inst_28979 = (state_29038[(10)]);
var inst_28906 = (state_29038[(11)]);
var inst_28981 = (state_29038[(12)]);
var inst_28986__$1 = cljs.core._nth.call(null,inst_28979,inst_28981);
var inst_28987 = cljs.core.async.put_BANG_.call(null,inst_28986__$1,inst_28906,done);
var state_29038__$1 = (function (){var statearr_29044 = state_29038;
(statearr_29044[(9)] = inst_28986__$1);

return statearr_29044;
})();
if(cljs.core.truth_(inst_28987)){
var statearr_29045_29127 = state_29038__$1;
(statearr_29045_29127[(1)] = (30));

} else {
var statearr_29046_29128 = state_29038__$1;
(statearr_29046_29128[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (1))){
var state_29038__$1 = state_29038;
var statearr_29047_29129 = state_29038__$1;
(statearr_29047_29129[(2)] = null);

(statearr_29047_29129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (24))){
var inst_28937 = (state_29038[(7)]);
var inst_28956 = (state_29038[(2)]);
var inst_28957 = cljs.core.next.call(null,inst_28937);
var inst_28915 = inst_28957;
var inst_28916 = null;
var inst_28917 = (0);
var inst_28918 = (0);
var state_29038__$1 = (function (){var statearr_29048 = state_29038;
(statearr_29048[(13)] = inst_28915);

(statearr_29048[(14)] = inst_28918);

(statearr_29048[(15)] = inst_28916);

(statearr_29048[(16)] = inst_28917);

(statearr_29048[(17)] = inst_28956);

return statearr_29048;
})();
var statearr_29049_29130 = state_29038__$1;
(statearr_29049_29130[(2)] = null);

(statearr_29049_29130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (39))){
var state_29038__$1 = state_29038;
var statearr_29053_29131 = state_29038__$1;
(statearr_29053_29131[(2)] = null);

(statearr_29053_29131[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (4))){
var inst_28906 = (state_29038[(11)]);
var inst_28906__$1 = (state_29038[(2)]);
var inst_28907 = (inst_28906__$1 == null);
var state_29038__$1 = (function (){var statearr_29054 = state_29038;
(statearr_29054[(11)] = inst_28906__$1);

return statearr_29054;
})();
if(cljs.core.truth_(inst_28907)){
var statearr_29055_29132 = state_29038__$1;
(statearr_29055_29132[(1)] = (5));

} else {
var statearr_29056_29133 = state_29038__$1;
(statearr_29056_29133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (15))){
var inst_28915 = (state_29038[(13)]);
var inst_28918 = (state_29038[(14)]);
var inst_28916 = (state_29038[(15)]);
var inst_28917 = (state_29038[(16)]);
var inst_28933 = (state_29038[(2)]);
var inst_28934 = (inst_28918 + (1));
var tmp29050 = inst_28915;
var tmp29051 = inst_28916;
var tmp29052 = inst_28917;
var inst_28915__$1 = tmp29050;
var inst_28916__$1 = tmp29051;
var inst_28917__$1 = tmp29052;
var inst_28918__$1 = inst_28934;
var state_29038__$1 = (function (){var statearr_29057 = state_29038;
(statearr_29057[(13)] = inst_28915__$1);

(statearr_29057[(14)] = inst_28918__$1);

(statearr_29057[(15)] = inst_28916__$1);

(statearr_29057[(18)] = inst_28933);

(statearr_29057[(16)] = inst_28917__$1);

return statearr_29057;
})();
var statearr_29058_29134 = state_29038__$1;
(statearr_29058_29134[(2)] = null);

(statearr_29058_29134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (21))){
var inst_28960 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29062_29135 = state_29038__$1;
(statearr_29062_29135[(2)] = inst_28960);

(statearr_29062_29135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (31))){
var inst_28986 = (state_29038[(9)]);
var inst_28990 = done.call(null,null);
var inst_28991 = cljs.core.async.untap_STAR_.call(null,m,inst_28986);
var state_29038__$1 = (function (){var statearr_29063 = state_29038;
(statearr_29063[(19)] = inst_28990);

return statearr_29063;
})();
var statearr_29064_29136 = state_29038__$1;
(statearr_29064_29136[(2)] = inst_28991);

(statearr_29064_29136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (32))){
var inst_28978 = (state_29038[(20)]);
var inst_28980 = (state_29038[(21)]);
var inst_28979 = (state_29038[(10)]);
var inst_28981 = (state_29038[(12)]);
var inst_28993 = (state_29038[(2)]);
var inst_28994 = (inst_28981 + (1));
var tmp29059 = inst_28978;
var tmp29060 = inst_28980;
var tmp29061 = inst_28979;
var inst_28978__$1 = tmp29059;
var inst_28979__$1 = tmp29061;
var inst_28980__$1 = tmp29060;
var inst_28981__$1 = inst_28994;
var state_29038__$1 = (function (){var statearr_29065 = state_29038;
(statearr_29065[(20)] = inst_28978__$1);

(statearr_29065[(22)] = inst_28993);

(statearr_29065[(21)] = inst_28980__$1);

(statearr_29065[(10)] = inst_28979__$1);

(statearr_29065[(12)] = inst_28981__$1);

return statearr_29065;
})();
var statearr_29066_29137 = state_29038__$1;
(statearr_29066_29137[(2)] = null);

(statearr_29066_29137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (40))){
var inst_29006 = (state_29038[(23)]);
var inst_29010 = done.call(null,null);
var inst_29011 = cljs.core.async.untap_STAR_.call(null,m,inst_29006);
var state_29038__$1 = (function (){var statearr_29067 = state_29038;
(statearr_29067[(24)] = inst_29010);

return statearr_29067;
})();
var statearr_29068_29138 = state_29038__$1;
(statearr_29068_29138[(2)] = inst_29011);

(statearr_29068_29138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (33))){
var inst_28997 = (state_29038[(25)]);
var inst_28999 = cljs.core.chunked_seq_QMARK_.call(null,inst_28997);
var state_29038__$1 = state_29038;
if(inst_28999){
var statearr_29069_29139 = state_29038__$1;
(statearr_29069_29139[(1)] = (36));

} else {
var statearr_29070_29140 = state_29038__$1;
(statearr_29070_29140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (13))){
var inst_28927 = (state_29038[(26)]);
var inst_28930 = cljs.core.async.close_BANG_.call(null,inst_28927);
var state_29038__$1 = state_29038;
var statearr_29071_29141 = state_29038__$1;
(statearr_29071_29141[(2)] = inst_28930);

(statearr_29071_29141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (22))){
var inst_28950 = (state_29038[(8)]);
var inst_28953 = cljs.core.async.close_BANG_.call(null,inst_28950);
var state_29038__$1 = state_29038;
var statearr_29072_29142 = state_29038__$1;
(statearr_29072_29142[(2)] = inst_28953);

(statearr_29072_29142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (36))){
var inst_28997 = (state_29038[(25)]);
var inst_29001 = cljs.core.chunk_first.call(null,inst_28997);
var inst_29002 = cljs.core.chunk_rest.call(null,inst_28997);
var inst_29003 = cljs.core.count.call(null,inst_29001);
var inst_28978 = inst_29002;
var inst_28979 = inst_29001;
var inst_28980 = inst_29003;
var inst_28981 = (0);
var state_29038__$1 = (function (){var statearr_29073 = state_29038;
(statearr_29073[(20)] = inst_28978);

(statearr_29073[(21)] = inst_28980);

(statearr_29073[(10)] = inst_28979);

(statearr_29073[(12)] = inst_28981);

return statearr_29073;
})();
var statearr_29074_29143 = state_29038__$1;
(statearr_29074_29143[(2)] = null);

(statearr_29074_29143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (41))){
var inst_28997 = (state_29038[(25)]);
var inst_29013 = (state_29038[(2)]);
var inst_29014 = cljs.core.next.call(null,inst_28997);
var inst_28978 = inst_29014;
var inst_28979 = null;
var inst_28980 = (0);
var inst_28981 = (0);
var state_29038__$1 = (function (){var statearr_29075 = state_29038;
(statearr_29075[(20)] = inst_28978);

(statearr_29075[(21)] = inst_28980);

(statearr_29075[(27)] = inst_29013);

(statearr_29075[(10)] = inst_28979);

(statearr_29075[(12)] = inst_28981);

return statearr_29075;
})();
var statearr_29076_29144 = state_29038__$1;
(statearr_29076_29144[(2)] = null);

(statearr_29076_29144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (43))){
var state_29038__$1 = state_29038;
var statearr_29077_29145 = state_29038__$1;
(statearr_29077_29145[(2)] = null);

(statearr_29077_29145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (29))){
var inst_29022 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29078_29146 = state_29038__$1;
(statearr_29078_29146[(2)] = inst_29022);

(statearr_29078_29146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (44))){
var inst_29031 = (state_29038[(2)]);
var state_29038__$1 = (function (){var statearr_29079 = state_29038;
(statearr_29079[(28)] = inst_29031);

return statearr_29079;
})();
var statearr_29080_29147 = state_29038__$1;
(statearr_29080_29147[(2)] = null);

(statearr_29080_29147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (6))){
var inst_28970 = (state_29038[(29)]);
var inst_28969 = cljs.core.deref.call(null,cs);
var inst_28970__$1 = cljs.core.keys.call(null,inst_28969);
var inst_28971 = cljs.core.count.call(null,inst_28970__$1);
var inst_28972 = cljs.core.reset_BANG_.call(null,dctr,inst_28971);
var inst_28977 = cljs.core.seq.call(null,inst_28970__$1);
var inst_28978 = inst_28977;
var inst_28979 = null;
var inst_28980 = (0);
var inst_28981 = (0);
var state_29038__$1 = (function (){var statearr_29081 = state_29038;
(statearr_29081[(20)] = inst_28978);

(statearr_29081[(29)] = inst_28970__$1);

(statearr_29081[(30)] = inst_28972);

(statearr_29081[(21)] = inst_28980);

(statearr_29081[(10)] = inst_28979);

(statearr_29081[(12)] = inst_28981);

return statearr_29081;
})();
var statearr_29082_29148 = state_29038__$1;
(statearr_29082_29148[(2)] = null);

(statearr_29082_29148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (28))){
var inst_28978 = (state_29038[(20)]);
var inst_28997 = (state_29038[(25)]);
var inst_28997__$1 = cljs.core.seq.call(null,inst_28978);
var state_29038__$1 = (function (){var statearr_29083 = state_29038;
(statearr_29083[(25)] = inst_28997__$1);

return statearr_29083;
})();
if(inst_28997__$1){
var statearr_29084_29149 = state_29038__$1;
(statearr_29084_29149[(1)] = (33));

} else {
var statearr_29085_29150 = state_29038__$1;
(statearr_29085_29150[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (25))){
var inst_28980 = (state_29038[(21)]);
var inst_28981 = (state_29038[(12)]);
var inst_28983 = (inst_28981 < inst_28980);
var inst_28984 = inst_28983;
var state_29038__$1 = state_29038;
if(cljs.core.truth_(inst_28984)){
var statearr_29086_29151 = state_29038__$1;
(statearr_29086_29151[(1)] = (27));

} else {
var statearr_29087_29152 = state_29038__$1;
(statearr_29087_29152[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (34))){
var state_29038__$1 = state_29038;
var statearr_29088_29153 = state_29038__$1;
(statearr_29088_29153[(2)] = null);

(statearr_29088_29153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (17))){
var state_29038__$1 = state_29038;
var statearr_29089_29154 = state_29038__$1;
(statearr_29089_29154[(2)] = null);

(statearr_29089_29154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (3))){
var inst_29036 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29038__$1,inst_29036);
} else {
if((state_val_29039 === (12))){
var inst_28965 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29090_29155 = state_29038__$1;
(statearr_29090_29155[(2)] = inst_28965);

(statearr_29090_29155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (2))){
var state_29038__$1 = state_29038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29038__$1,(4),ch);
} else {
if((state_val_29039 === (23))){
var state_29038__$1 = state_29038;
var statearr_29091_29156 = state_29038__$1;
(statearr_29091_29156[(2)] = null);

(statearr_29091_29156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (35))){
var inst_29020 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29092_29157 = state_29038__$1;
(statearr_29092_29157[(2)] = inst_29020);

(statearr_29092_29157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (19))){
var inst_28937 = (state_29038[(7)]);
var inst_28941 = cljs.core.chunk_first.call(null,inst_28937);
var inst_28942 = cljs.core.chunk_rest.call(null,inst_28937);
var inst_28943 = cljs.core.count.call(null,inst_28941);
var inst_28915 = inst_28942;
var inst_28916 = inst_28941;
var inst_28917 = inst_28943;
var inst_28918 = (0);
var state_29038__$1 = (function (){var statearr_29093 = state_29038;
(statearr_29093[(13)] = inst_28915);

(statearr_29093[(14)] = inst_28918);

(statearr_29093[(15)] = inst_28916);

(statearr_29093[(16)] = inst_28917);

return statearr_29093;
})();
var statearr_29094_29158 = state_29038__$1;
(statearr_29094_29158[(2)] = null);

(statearr_29094_29158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (11))){
var inst_28915 = (state_29038[(13)]);
var inst_28937 = (state_29038[(7)]);
var inst_28937__$1 = cljs.core.seq.call(null,inst_28915);
var state_29038__$1 = (function (){var statearr_29095 = state_29038;
(statearr_29095[(7)] = inst_28937__$1);

return statearr_29095;
})();
if(inst_28937__$1){
var statearr_29096_29159 = state_29038__$1;
(statearr_29096_29159[(1)] = (16));

} else {
var statearr_29097_29160 = state_29038__$1;
(statearr_29097_29160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (9))){
var inst_28967 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29098_29161 = state_29038__$1;
(statearr_29098_29161[(2)] = inst_28967);

(statearr_29098_29161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (5))){
var inst_28913 = cljs.core.deref.call(null,cs);
var inst_28914 = cljs.core.seq.call(null,inst_28913);
var inst_28915 = inst_28914;
var inst_28916 = null;
var inst_28917 = (0);
var inst_28918 = (0);
var state_29038__$1 = (function (){var statearr_29099 = state_29038;
(statearr_29099[(13)] = inst_28915);

(statearr_29099[(14)] = inst_28918);

(statearr_29099[(15)] = inst_28916);

(statearr_29099[(16)] = inst_28917);

return statearr_29099;
})();
var statearr_29100_29162 = state_29038__$1;
(statearr_29100_29162[(2)] = null);

(statearr_29100_29162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (14))){
var state_29038__$1 = state_29038;
var statearr_29101_29163 = state_29038__$1;
(statearr_29101_29163[(2)] = null);

(statearr_29101_29163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (45))){
var inst_29028 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29102_29164 = state_29038__$1;
(statearr_29102_29164[(2)] = inst_29028);

(statearr_29102_29164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (26))){
var inst_28970 = (state_29038[(29)]);
var inst_29024 = (state_29038[(2)]);
var inst_29025 = cljs.core.seq.call(null,inst_28970);
var state_29038__$1 = (function (){var statearr_29103 = state_29038;
(statearr_29103[(31)] = inst_29024);

return statearr_29103;
})();
if(inst_29025){
var statearr_29104_29165 = state_29038__$1;
(statearr_29104_29165[(1)] = (42));

} else {
var statearr_29105_29166 = state_29038__$1;
(statearr_29105_29166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (16))){
var inst_28937 = (state_29038[(7)]);
var inst_28939 = cljs.core.chunked_seq_QMARK_.call(null,inst_28937);
var state_29038__$1 = state_29038;
if(inst_28939){
var statearr_29106_29167 = state_29038__$1;
(statearr_29106_29167[(1)] = (19));

} else {
var statearr_29107_29168 = state_29038__$1;
(statearr_29107_29168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (38))){
var inst_29017 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29108_29169 = state_29038__$1;
(statearr_29108_29169[(2)] = inst_29017);

(statearr_29108_29169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (30))){
var state_29038__$1 = state_29038;
var statearr_29109_29170 = state_29038__$1;
(statearr_29109_29170[(2)] = null);

(statearr_29109_29170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (10))){
var inst_28918 = (state_29038[(14)]);
var inst_28916 = (state_29038[(15)]);
var inst_28926 = cljs.core._nth.call(null,inst_28916,inst_28918);
var inst_28927 = cljs.core.nth.call(null,inst_28926,(0),null);
var inst_28928 = cljs.core.nth.call(null,inst_28926,(1),null);
var state_29038__$1 = (function (){var statearr_29110 = state_29038;
(statearr_29110[(26)] = inst_28927);

return statearr_29110;
})();
if(cljs.core.truth_(inst_28928)){
var statearr_29111_29171 = state_29038__$1;
(statearr_29111_29171[(1)] = (13));

} else {
var statearr_29112_29172 = state_29038__$1;
(statearr_29112_29172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (18))){
var inst_28963 = (state_29038[(2)]);
var state_29038__$1 = state_29038;
var statearr_29113_29173 = state_29038__$1;
(statearr_29113_29173[(2)] = inst_28963);

(statearr_29113_29173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (42))){
var state_29038__$1 = state_29038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29038__$1,(45),dchan);
} else {
if((state_val_29039 === (37))){
var inst_28997 = (state_29038[(25)]);
var inst_28906 = (state_29038[(11)]);
var inst_29006 = (state_29038[(23)]);
var inst_29006__$1 = cljs.core.first.call(null,inst_28997);
var inst_29007 = cljs.core.async.put_BANG_.call(null,inst_29006__$1,inst_28906,done);
var state_29038__$1 = (function (){var statearr_29114 = state_29038;
(statearr_29114[(23)] = inst_29006__$1);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29007)){
var statearr_29115_29174 = state_29038__$1;
(statearr_29115_29174[(1)] = (39));

} else {
var statearr_29116_29175 = state_29038__$1;
(statearr_29116_29175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29039 === (8))){
var inst_28918 = (state_29038[(14)]);
var inst_28917 = (state_29038[(16)]);
var inst_28920 = (inst_28918 < inst_28917);
var inst_28921 = inst_28920;
var state_29038__$1 = state_29038;
if(cljs.core.truth_(inst_28921)){
var statearr_29117_29176 = state_29038__$1;
(statearr_29117_29176[(1)] = (10));

} else {
var statearr_29118_29177 = state_29038__$1;
(statearr_29118_29177[(1)] = (11));

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
});})(c__28305__auto___29123,cs,m,dchan,dctr,done))
;
return ((function (switch__28210__auto__,c__28305__auto___29123,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28211__auto__ = null;
var cljs$core$async$mult_$_state_machine__28211__auto____0 = (function (){
var statearr_29119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29119[(0)] = cljs$core$async$mult_$_state_machine__28211__auto__);

(statearr_29119[(1)] = (1));

return statearr_29119;
});
var cljs$core$async$mult_$_state_machine__28211__auto____1 = (function (state_29038){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29120){if((e29120 instanceof Object)){
var ex__28214__auto__ = e29120;
var statearr_29121_29178 = state_29038;
(statearr_29121_29178[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29179 = state_29038;
state_29038 = G__29179;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28211__auto__ = function(state_29038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28211__auto____1.call(this,state_29038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28211__auto____0;
cljs$core$async$mult_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28211__auto____1;
return cljs$core$async$mult_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29123,cs,m,dchan,dctr,done))
})();
var state__28307__auto__ = (function (){var statearr_29122 = f__28306__auto__.call(null);
(statearr_29122[(6)] = c__28305__auto___29123);

return statearr_29122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29123,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__29181 = arguments.length;
switch (G__29181) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29193 = arguments.length;
var i__4731__auto___29194 = (0);
while(true){
if((i__4731__auto___29194 < len__4730__auto___29193)){
args__4736__auto__.push((arguments[i__4731__auto___29194]));

var G__29195 = (i__4731__auto___29194 + (1));
i__4731__auto___29194 = G__29195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29187){
var map__29188 = p__29187;
var map__29188__$1 = (((((!((map__29188 == null))))?(((((map__29188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29188):map__29188);
var opts = map__29188__$1;
var statearr_29190_29196 = state;
(statearr_29190_29196[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__29188,map__29188__$1,opts){
return (function (val){
var statearr_29191_29197 = state;
(statearr_29191_29197[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29188,map__29188__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_29192_29198 = state;
(statearr_29192_29198[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29183){
var G__29184 = cljs.core.first.call(null,seq29183);
var seq29183__$1 = cljs.core.next.call(null,seq29183);
var G__29185 = cljs.core.first.call(null,seq29183__$1);
var seq29183__$2 = cljs.core.next.call(null,seq29183__$1);
var G__29186 = cljs.core.first.call(null,seq29183__$2);
var seq29183__$3 = cljs.core.next.call(null,seq29183__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29184,G__29185,G__29186,seq29183__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29199 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29199 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29200){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29200 = meta29200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29201,meta29200__$1){
var self__ = this;
var _29201__$1 = this;
return (new cljs.core.async.t_cljs$core$async29199(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29201){
var self__ = this;
var _29201__$1 = this;
return self__.meta29200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29200","meta29200",1607594844,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29199";

cljs.core.async.t_cljs$core$async29199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29199.
 */
cljs.core.async.__GT_t_cljs$core$async29199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29199(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29200){
return (new cljs.core.async.t_cljs$core$async29199(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29199(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28305__auto___29363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29303){
var state_val_29304 = (state_29303[(1)]);
if((state_val_29304 === (7))){
var inst_29218 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29305_29364 = state_29303__$1;
(statearr_29305_29364[(2)] = inst_29218);

(statearr_29305_29364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (20))){
var inst_29230 = (state_29303[(7)]);
var state_29303__$1 = state_29303;
var statearr_29306_29365 = state_29303__$1;
(statearr_29306_29365[(2)] = inst_29230);

(statearr_29306_29365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (27))){
var state_29303__$1 = state_29303;
var statearr_29307_29366 = state_29303__$1;
(statearr_29307_29366[(2)] = null);

(statearr_29307_29366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (1))){
var inst_29205 = (state_29303[(8)]);
var inst_29205__$1 = calc_state.call(null);
var inst_29207 = (inst_29205__$1 == null);
var inst_29208 = cljs.core.not.call(null,inst_29207);
var state_29303__$1 = (function (){var statearr_29308 = state_29303;
(statearr_29308[(8)] = inst_29205__$1);

return statearr_29308;
})();
if(inst_29208){
var statearr_29309_29367 = state_29303__$1;
(statearr_29309_29367[(1)] = (2));

} else {
var statearr_29310_29368 = state_29303__$1;
(statearr_29310_29368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (24))){
var inst_29254 = (state_29303[(9)]);
var inst_29263 = (state_29303[(10)]);
var inst_29277 = (state_29303[(11)]);
var inst_29277__$1 = inst_29254.call(null,inst_29263);
var state_29303__$1 = (function (){var statearr_29311 = state_29303;
(statearr_29311[(11)] = inst_29277__$1);

return statearr_29311;
})();
if(cljs.core.truth_(inst_29277__$1)){
var statearr_29312_29369 = state_29303__$1;
(statearr_29312_29369[(1)] = (29));

} else {
var statearr_29313_29370 = state_29303__$1;
(statearr_29313_29370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (4))){
var inst_29221 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29221)){
var statearr_29314_29371 = state_29303__$1;
(statearr_29314_29371[(1)] = (8));

} else {
var statearr_29315_29372 = state_29303__$1;
(statearr_29315_29372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (15))){
var inst_29248 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29248)){
var statearr_29316_29373 = state_29303__$1;
(statearr_29316_29373[(1)] = (19));

} else {
var statearr_29317_29374 = state_29303__$1;
(statearr_29317_29374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (21))){
var inst_29253 = (state_29303[(12)]);
var inst_29253__$1 = (state_29303[(2)]);
var inst_29254 = cljs.core.get.call(null,inst_29253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29255 = cljs.core.get.call(null,inst_29253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29256 = cljs.core.get.call(null,inst_29253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29303__$1 = (function (){var statearr_29318 = state_29303;
(statearr_29318[(9)] = inst_29254);

(statearr_29318[(13)] = inst_29255);

(statearr_29318[(12)] = inst_29253__$1);

return statearr_29318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29303__$1,(22),inst_29256);
} else {
if((state_val_29304 === (31))){
var inst_29285 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29285)){
var statearr_29319_29375 = state_29303__$1;
(statearr_29319_29375[(1)] = (32));

} else {
var statearr_29320_29376 = state_29303__$1;
(statearr_29320_29376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (32))){
var inst_29262 = (state_29303[(14)]);
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29303__$1,(35),out,inst_29262);
} else {
if((state_val_29304 === (33))){
var inst_29253 = (state_29303[(12)]);
var inst_29230 = inst_29253;
var state_29303__$1 = (function (){var statearr_29321 = state_29303;
(statearr_29321[(7)] = inst_29230);

return statearr_29321;
})();
var statearr_29322_29377 = state_29303__$1;
(statearr_29322_29377[(2)] = null);

(statearr_29322_29377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (13))){
var inst_29230 = (state_29303[(7)]);
var inst_29237 = inst_29230.cljs$lang$protocol_mask$partition0$;
var inst_29238 = (inst_29237 & (64));
var inst_29239 = inst_29230.cljs$core$ISeq$;
var inst_29240 = (cljs.core.PROTOCOL_SENTINEL === inst_29239);
var inst_29241 = ((inst_29238) || (inst_29240));
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29241)){
var statearr_29323_29378 = state_29303__$1;
(statearr_29323_29378[(1)] = (16));

} else {
var statearr_29324_29379 = state_29303__$1;
(statearr_29324_29379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (22))){
var inst_29262 = (state_29303[(14)]);
var inst_29263 = (state_29303[(10)]);
var inst_29261 = (state_29303[(2)]);
var inst_29262__$1 = cljs.core.nth.call(null,inst_29261,(0),null);
var inst_29263__$1 = cljs.core.nth.call(null,inst_29261,(1),null);
var inst_29264 = (inst_29262__$1 == null);
var inst_29265 = cljs.core._EQ_.call(null,inst_29263__$1,change);
var inst_29266 = ((inst_29264) || (inst_29265));
var state_29303__$1 = (function (){var statearr_29325 = state_29303;
(statearr_29325[(14)] = inst_29262__$1);

(statearr_29325[(10)] = inst_29263__$1);

return statearr_29325;
})();
if(cljs.core.truth_(inst_29266)){
var statearr_29326_29380 = state_29303__$1;
(statearr_29326_29380[(1)] = (23));

} else {
var statearr_29327_29381 = state_29303__$1;
(statearr_29327_29381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (36))){
var inst_29253 = (state_29303[(12)]);
var inst_29230 = inst_29253;
var state_29303__$1 = (function (){var statearr_29328 = state_29303;
(statearr_29328[(7)] = inst_29230);

return statearr_29328;
})();
var statearr_29329_29382 = state_29303__$1;
(statearr_29329_29382[(2)] = null);

(statearr_29329_29382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (29))){
var inst_29277 = (state_29303[(11)]);
var state_29303__$1 = state_29303;
var statearr_29330_29383 = state_29303__$1;
(statearr_29330_29383[(2)] = inst_29277);

(statearr_29330_29383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (6))){
var state_29303__$1 = state_29303;
var statearr_29331_29384 = state_29303__$1;
(statearr_29331_29384[(2)] = false);

(statearr_29331_29384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (28))){
var inst_29273 = (state_29303[(2)]);
var inst_29274 = calc_state.call(null);
var inst_29230 = inst_29274;
var state_29303__$1 = (function (){var statearr_29332 = state_29303;
(statearr_29332[(7)] = inst_29230);

(statearr_29332[(15)] = inst_29273);

return statearr_29332;
})();
var statearr_29333_29385 = state_29303__$1;
(statearr_29333_29385[(2)] = null);

(statearr_29333_29385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (25))){
var inst_29299 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29334_29386 = state_29303__$1;
(statearr_29334_29386[(2)] = inst_29299);

(statearr_29334_29386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (34))){
var inst_29297 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29335_29387 = state_29303__$1;
(statearr_29335_29387[(2)] = inst_29297);

(statearr_29335_29387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (17))){
var state_29303__$1 = state_29303;
var statearr_29336_29388 = state_29303__$1;
(statearr_29336_29388[(2)] = false);

(statearr_29336_29388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (3))){
var state_29303__$1 = state_29303;
var statearr_29337_29389 = state_29303__$1;
(statearr_29337_29389[(2)] = false);

(statearr_29337_29389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (12))){
var inst_29301 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29303__$1,inst_29301);
} else {
if((state_val_29304 === (2))){
var inst_29205 = (state_29303[(8)]);
var inst_29210 = inst_29205.cljs$lang$protocol_mask$partition0$;
var inst_29211 = (inst_29210 & (64));
var inst_29212 = inst_29205.cljs$core$ISeq$;
var inst_29213 = (cljs.core.PROTOCOL_SENTINEL === inst_29212);
var inst_29214 = ((inst_29211) || (inst_29213));
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29214)){
var statearr_29338_29390 = state_29303__$1;
(statearr_29338_29390[(1)] = (5));

} else {
var statearr_29339_29391 = state_29303__$1;
(statearr_29339_29391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (23))){
var inst_29262 = (state_29303[(14)]);
var inst_29268 = (inst_29262 == null);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29268)){
var statearr_29340_29392 = state_29303__$1;
(statearr_29340_29392[(1)] = (26));

} else {
var statearr_29341_29393 = state_29303__$1;
(statearr_29341_29393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (35))){
var inst_29288 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29288)){
var statearr_29342_29394 = state_29303__$1;
(statearr_29342_29394[(1)] = (36));

} else {
var statearr_29343_29395 = state_29303__$1;
(statearr_29343_29395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (19))){
var inst_29230 = (state_29303[(7)]);
var inst_29250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29230);
var state_29303__$1 = state_29303;
var statearr_29344_29396 = state_29303__$1;
(statearr_29344_29396[(2)] = inst_29250);

(statearr_29344_29396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (11))){
var inst_29230 = (state_29303[(7)]);
var inst_29234 = (inst_29230 == null);
var inst_29235 = cljs.core.not.call(null,inst_29234);
var state_29303__$1 = state_29303;
if(inst_29235){
var statearr_29345_29397 = state_29303__$1;
(statearr_29345_29397[(1)] = (13));

} else {
var statearr_29346_29398 = state_29303__$1;
(statearr_29346_29398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (9))){
var inst_29205 = (state_29303[(8)]);
var state_29303__$1 = state_29303;
var statearr_29347_29399 = state_29303__$1;
(statearr_29347_29399[(2)] = inst_29205);

(statearr_29347_29399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (5))){
var state_29303__$1 = state_29303;
var statearr_29348_29400 = state_29303__$1;
(statearr_29348_29400[(2)] = true);

(statearr_29348_29400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (14))){
var state_29303__$1 = state_29303;
var statearr_29349_29401 = state_29303__$1;
(statearr_29349_29401[(2)] = false);

(statearr_29349_29401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (26))){
var inst_29263 = (state_29303[(10)]);
var inst_29270 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29263);
var state_29303__$1 = state_29303;
var statearr_29350_29402 = state_29303__$1;
(statearr_29350_29402[(2)] = inst_29270);

(statearr_29350_29402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (16))){
var state_29303__$1 = state_29303;
var statearr_29351_29403 = state_29303__$1;
(statearr_29351_29403[(2)] = true);

(statearr_29351_29403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (38))){
var inst_29293 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29352_29404 = state_29303__$1;
(statearr_29352_29404[(2)] = inst_29293);

(statearr_29352_29404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (30))){
var inst_29254 = (state_29303[(9)]);
var inst_29263 = (state_29303[(10)]);
var inst_29255 = (state_29303[(13)]);
var inst_29280 = cljs.core.empty_QMARK_.call(null,inst_29254);
var inst_29281 = inst_29255.call(null,inst_29263);
var inst_29282 = cljs.core.not.call(null,inst_29281);
var inst_29283 = ((inst_29280) && (inst_29282));
var state_29303__$1 = state_29303;
var statearr_29353_29405 = state_29303__$1;
(statearr_29353_29405[(2)] = inst_29283);

(statearr_29353_29405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (10))){
var inst_29205 = (state_29303[(8)]);
var inst_29226 = (state_29303[(2)]);
var inst_29227 = cljs.core.get.call(null,inst_29226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29228 = cljs.core.get.call(null,inst_29226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29229 = cljs.core.get.call(null,inst_29226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29230 = inst_29205;
var state_29303__$1 = (function (){var statearr_29354 = state_29303;
(statearr_29354[(16)] = inst_29227);

(statearr_29354[(7)] = inst_29230);

(statearr_29354[(17)] = inst_29229);

(statearr_29354[(18)] = inst_29228);

return statearr_29354;
})();
var statearr_29355_29406 = state_29303__$1;
(statearr_29355_29406[(2)] = null);

(statearr_29355_29406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (18))){
var inst_29245 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29356_29407 = state_29303__$1;
(statearr_29356_29407[(2)] = inst_29245);

(statearr_29356_29407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (37))){
var state_29303__$1 = state_29303;
var statearr_29357_29408 = state_29303__$1;
(statearr_29357_29408[(2)] = null);

(statearr_29357_29408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (8))){
var inst_29205 = (state_29303[(8)]);
var inst_29223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29205);
var state_29303__$1 = state_29303;
var statearr_29358_29409 = state_29303__$1;
(statearr_29358_29409[(2)] = inst_29223);

(statearr_29358_29409[(1)] = (10));


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
});})(c__28305__auto___29363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28210__auto__,c__28305__auto___29363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28211__auto__ = null;
var cljs$core$async$mix_$_state_machine__28211__auto____0 = (function (){
var statearr_29359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29359[(0)] = cljs$core$async$mix_$_state_machine__28211__auto__);

(statearr_29359[(1)] = (1));

return statearr_29359;
});
var cljs$core$async$mix_$_state_machine__28211__auto____1 = (function (state_29303){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29360){if((e29360 instanceof Object)){
var ex__28214__auto__ = e29360;
var statearr_29361_29410 = state_29303;
(statearr_29361_29410[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29411 = state_29303;
state_29303 = G__29411;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28211__auto__ = function(state_29303){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28211__auto____1.call(this,state_29303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28211__auto____0;
cljs$core$async$mix_$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28211__auto____1;
return cljs$core$async$mix_$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28307__auto__ = (function (){var statearr_29362 = f__28306__auto__.call(null);
(statearr_29362[(6)] = c__28305__auto___29363);

return statearr_29362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29413 = arguments.length;
switch (G__29413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29417 = arguments.length;
switch (G__29417) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__29415_SHARP_){
if(cljs.core.truth_(p1__29415_SHARP_.call(null,topic))){
return p1__29415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29419 = meta29419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29420,meta29419__$1){
var self__ = this;
var _29420__$1 = this;
return (new cljs.core.async.t_cljs$core$async29418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29419__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29420){
var self__ = this;
var _29420__$1 = this;
return self__.meta29419;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29419","meta29419",-965696403,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29418";

cljs.core.async.t_cljs$core$async29418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29418");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29418.
 */
cljs.core.async.__GT_t_cljs$core$async29418 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29419){
return (new cljs.core.async.t_cljs$core$async29418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29419));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28305__auto___29538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29538,mults,ensure_mult,p){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29538,mults,ensure_mult,p){
return (function (state_29492){
var state_val_29493 = (state_29492[(1)]);
if((state_val_29493 === (7))){
var inst_29488 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29494_29539 = state_29492__$1;
(statearr_29494_29539[(2)] = inst_29488);

(statearr_29494_29539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (20))){
var state_29492__$1 = state_29492;
var statearr_29495_29540 = state_29492__$1;
(statearr_29495_29540[(2)] = null);

(statearr_29495_29540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (1))){
var state_29492__$1 = state_29492;
var statearr_29496_29541 = state_29492__$1;
(statearr_29496_29541[(2)] = null);

(statearr_29496_29541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (24))){
var inst_29471 = (state_29492[(7)]);
var inst_29480 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29471);
var state_29492__$1 = state_29492;
var statearr_29497_29542 = state_29492__$1;
(statearr_29497_29542[(2)] = inst_29480);

(statearr_29497_29542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (4))){
var inst_29423 = (state_29492[(8)]);
var inst_29423__$1 = (state_29492[(2)]);
var inst_29424 = (inst_29423__$1 == null);
var state_29492__$1 = (function (){var statearr_29498 = state_29492;
(statearr_29498[(8)] = inst_29423__$1);

return statearr_29498;
})();
if(cljs.core.truth_(inst_29424)){
var statearr_29499_29543 = state_29492__$1;
(statearr_29499_29543[(1)] = (5));

} else {
var statearr_29500_29544 = state_29492__$1;
(statearr_29500_29544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (15))){
var inst_29465 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29501_29545 = state_29492__$1;
(statearr_29501_29545[(2)] = inst_29465);

(statearr_29501_29545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (21))){
var inst_29485 = (state_29492[(2)]);
var state_29492__$1 = (function (){var statearr_29502 = state_29492;
(statearr_29502[(9)] = inst_29485);

return statearr_29502;
})();
var statearr_29503_29546 = state_29492__$1;
(statearr_29503_29546[(2)] = null);

(statearr_29503_29546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (13))){
var inst_29447 = (state_29492[(10)]);
var inst_29449 = cljs.core.chunked_seq_QMARK_.call(null,inst_29447);
var state_29492__$1 = state_29492;
if(inst_29449){
var statearr_29504_29547 = state_29492__$1;
(statearr_29504_29547[(1)] = (16));

} else {
var statearr_29505_29548 = state_29492__$1;
(statearr_29505_29548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (22))){
var inst_29477 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
if(cljs.core.truth_(inst_29477)){
var statearr_29506_29549 = state_29492__$1;
(statearr_29506_29549[(1)] = (23));

} else {
var statearr_29507_29550 = state_29492__$1;
(statearr_29507_29550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (6))){
var inst_29473 = (state_29492[(11)]);
var inst_29423 = (state_29492[(8)]);
var inst_29471 = (state_29492[(7)]);
var inst_29471__$1 = topic_fn.call(null,inst_29423);
var inst_29472 = cljs.core.deref.call(null,mults);
var inst_29473__$1 = cljs.core.get.call(null,inst_29472,inst_29471__$1);
var state_29492__$1 = (function (){var statearr_29508 = state_29492;
(statearr_29508[(11)] = inst_29473__$1);

(statearr_29508[(7)] = inst_29471__$1);

return statearr_29508;
})();
if(cljs.core.truth_(inst_29473__$1)){
var statearr_29509_29551 = state_29492__$1;
(statearr_29509_29551[(1)] = (19));

} else {
var statearr_29510_29552 = state_29492__$1;
(statearr_29510_29552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (25))){
var inst_29482 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29511_29553 = state_29492__$1;
(statearr_29511_29553[(2)] = inst_29482);

(statearr_29511_29553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (17))){
var inst_29447 = (state_29492[(10)]);
var inst_29456 = cljs.core.first.call(null,inst_29447);
var inst_29457 = cljs.core.async.muxch_STAR_.call(null,inst_29456);
var inst_29458 = cljs.core.async.close_BANG_.call(null,inst_29457);
var inst_29459 = cljs.core.next.call(null,inst_29447);
var inst_29433 = inst_29459;
var inst_29434 = null;
var inst_29435 = (0);
var inst_29436 = (0);
var state_29492__$1 = (function (){var statearr_29512 = state_29492;
(statearr_29512[(12)] = inst_29436);

(statearr_29512[(13)] = inst_29433);

(statearr_29512[(14)] = inst_29434);

(statearr_29512[(15)] = inst_29458);

(statearr_29512[(16)] = inst_29435);

return statearr_29512;
})();
var statearr_29513_29554 = state_29492__$1;
(statearr_29513_29554[(2)] = null);

(statearr_29513_29554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (3))){
var inst_29490 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29492__$1,inst_29490);
} else {
if((state_val_29493 === (12))){
var inst_29467 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29514_29555 = state_29492__$1;
(statearr_29514_29555[(2)] = inst_29467);

(statearr_29514_29555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (2))){
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29492__$1,(4),ch);
} else {
if((state_val_29493 === (23))){
var state_29492__$1 = state_29492;
var statearr_29515_29556 = state_29492__$1;
(statearr_29515_29556[(2)] = null);

(statearr_29515_29556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (19))){
var inst_29473 = (state_29492[(11)]);
var inst_29423 = (state_29492[(8)]);
var inst_29475 = cljs.core.async.muxch_STAR_.call(null,inst_29473);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29492__$1,(22),inst_29475,inst_29423);
} else {
if((state_val_29493 === (11))){
var inst_29433 = (state_29492[(13)]);
var inst_29447 = (state_29492[(10)]);
var inst_29447__$1 = cljs.core.seq.call(null,inst_29433);
var state_29492__$1 = (function (){var statearr_29516 = state_29492;
(statearr_29516[(10)] = inst_29447__$1);

return statearr_29516;
})();
if(inst_29447__$1){
var statearr_29517_29557 = state_29492__$1;
(statearr_29517_29557[(1)] = (13));

} else {
var statearr_29518_29558 = state_29492__$1;
(statearr_29518_29558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (9))){
var inst_29469 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29519_29559 = state_29492__$1;
(statearr_29519_29559[(2)] = inst_29469);

(statearr_29519_29559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (5))){
var inst_29430 = cljs.core.deref.call(null,mults);
var inst_29431 = cljs.core.vals.call(null,inst_29430);
var inst_29432 = cljs.core.seq.call(null,inst_29431);
var inst_29433 = inst_29432;
var inst_29434 = null;
var inst_29435 = (0);
var inst_29436 = (0);
var state_29492__$1 = (function (){var statearr_29520 = state_29492;
(statearr_29520[(12)] = inst_29436);

(statearr_29520[(13)] = inst_29433);

(statearr_29520[(14)] = inst_29434);

(statearr_29520[(16)] = inst_29435);

return statearr_29520;
})();
var statearr_29521_29560 = state_29492__$1;
(statearr_29521_29560[(2)] = null);

(statearr_29521_29560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (14))){
var state_29492__$1 = state_29492;
var statearr_29525_29561 = state_29492__$1;
(statearr_29525_29561[(2)] = null);

(statearr_29525_29561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (16))){
var inst_29447 = (state_29492[(10)]);
var inst_29451 = cljs.core.chunk_first.call(null,inst_29447);
var inst_29452 = cljs.core.chunk_rest.call(null,inst_29447);
var inst_29453 = cljs.core.count.call(null,inst_29451);
var inst_29433 = inst_29452;
var inst_29434 = inst_29451;
var inst_29435 = inst_29453;
var inst_29436 = (0);
var state_29492__$1 = (function (){var statearr_29526 = state_29492;
(statearr_29526[(12)] = inst_29436);

(statearr_29526[(13)] = inst_29433);

(statearr_29526[(14)] = inst_29434);

(statearr_29526[(16)] = inst_29435);

return statearr_29526;
})();
var statearr_29527_29562 = state_29492__$1;
(statearr_29527_29562[(2)] = null);

(statearr_29527_29562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (10))){
var inst_29436 = (state_29492[(12)]);
var inst_29433 = (state_29492[(13)]);
var inst_29434 = (state_29492[(14)]);
var inst_29435 = (state_29492[(16)]);
var inst_29441 = cljs.core._nth.call(null,inst_29434,inst_29436);
var inst_29442 = cljs.core.async.muxch_STAR_.call(null,inst_29441);
var inst_29443 = cljs.core.async.close_BANG_.call(null,inst_29442);
var inst_29444 = (inst_29436 + (1));
var tmp29522 = inst_29433;
var tmp29523 = inst_29434;
var tmp29524 = inst_29435;
var inst_29433__$1 = tmp29522;
var inst_29434__$1 = tmp29523;
var inst_29435__$1 = tmp29524;
var inst_29436__$1 = inst_29444;
var state_29492__$1 = (function (){var statearr_29528 = state_29492;
(statearr_29528[(12)] = inst_29436__$1);

(statearr_29528[(13)] = inst_29433__$1);

(statearr_29528[(14)] = inst_29434__$1);

(statearr_29528[(17)] = inst_29443);

(statearr_29528[(16)] = inst_29435__$1);

return statearr_29528;
})();
var statearr_29529_29563 = state_29492__$1;
(statearr_29529_29563[(2)] = null);

(statearr_29529_29563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (18))){
var inst_29462 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29530_29564 = state_29492__$1;
(statearr_29530_29564[(2)] = inst_29462);

(statearr_29530_29564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (8))){
var inst_29436 = (state_29492[(12)]);
var inst_29435 = (state_29492[(16)]);
var inst_29438 = (inst_29436 < inst_29435);
var inst_29439 = inst_29438;
var state_29492__$1 = state_29492;
if(cljs.core.truth_(inst_29439)){
var statearr_29531_29565 = state_29492__$1;
(statearr_29531_29565[(1)] = (10));

} else {
var statearr_29532_29566 = state_29492__$1;
(statearr_29532_29566[(1)] = (11));

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
});})(c__28305__auto___29538,mults,ensure_mult,p))
;
return ((function (switch__28210__auto__,c__28305__auto___29538,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_29533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29533[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_29533[(1)] = (1));

return statearr_29533;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_29492){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29534){if((e29534 instanceof Object)){
var ex__28214__auto__ = e29534;
var statearr_29535_29567 = state_29492;
(statearr_29535_29567[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29568 = state_29492;
state_29492 = G__29568;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29538,mults,ensure_mult,p))
})();
var state__28307__auto__ = (function (){var statearr_29536 = f__28306__auto__.call(null);
(statearr_29536[(6)] = c__28305__auto___29538);

return statearr_29536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29538,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29570 = arguments.length;
switch (G__29570) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29573 = arguments.length;
switch (G__29573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29576 = arguments.length;
switch (G__29576) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28305__auto___29643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29615){
var state_val_29616 = (state_29615[(1)]);
if((state_val_29616 === (7))){
var state_29615__$1 = state_29615;
var statearr_29617_29644 = state_29615__$1;
(statearr_29617_29644[(2)] = null);

(statearr_29617_29644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (1))){
var state_29615__$1 = state_29615;
var statearr_29618_29645 = state_29615__$1;
(statearr_29618_29645[(2)] = null);

(statearr_29618_29645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (4))){
var inst_29579 = (state_29615[(7)]);
var inst_29581 = (inst_29579 < cnt);
var state_29615__$1 = state_29615;
if(cljs.core.truth_(inst_29581)){
var statearr_29619_29646 = state_29615__$1;
(statearr_29619_29646[(1)] = (6));

} else {
var statearr_29620_29647 = state_29615__$1;
(statearr_29620_29647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (15))){
var inst_29611 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29621_29648 = state_29615__$1;
(statearr_29621_29648[(2)] = inst_29611);

(statearr_29621_29648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (13))){
var inst_29604 = cljs.core.async.close_BANG_.call(null,out);
var state_29615__$1 = state_29615;
var statearr_29622_29649 = state_29615__$1;
(statearr_29622_29649[(2)] = inst_29604);

(statearr_29622_29649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (6))){
var state_29615__$1 = state_29615;
var statearr_29623_29650 = state_29615__$1;
(statearr_29623_29650[(2)] = null);

(statearr_29623_29650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (3))){
var inst_29613 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29615__$1,inst_29613);
} else {
if((state_val_29616 === (12))){
var inst_29601 = (state_29615[(8)]);
var inst_29601__$1 = (state_29615[(2)]);
var inst_29602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29601__$1);
var state_29615__$1 = (function (){var statearr_29624 = state_29615;
(statearr_29624[(8)] = inst_29601__$1);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29602)){
var statearr_29625_29651 = state_29615__$1;
(statearr_29625_29651[(1)] = (13));

} else {
var statearr_29626_29652 = state_29615__$1;
(statearr_29626_29652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (2))){
var inst_29578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29579 = (0);
var state_29615__$1 = (function (){var statearr_29627 = state_29615;
(statearr_29627[(9)] = inst_29578);

(statearr_29627[(7)] = inst_29579);

return statearr_29627;
})();
var statearr_29628_29653 = state_29615__$1;
(statearr_29628_29653[(2)] = null);

(statearr_29628_29653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (11))){
var inst_29579 = (state_29615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29615,(10),Object,null,(9));
var inst_29588 = chs__$1.call(null,inst_29579);
var inst_29589 = done.call(null,inst_29579);
var inst_29590 = cljs.core.async.take_BANG_.call(null,inst_29588,inst_29589);
var state_29615__$1 = state_29615;
var statearr_29629_29654 = state_29615__$1;
(statearr_29629_29654[(2)] = inst_29590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (9))){
var inst_29579 = (state_29615[(7)]);
var inst_29592 = (state_29615[(2)]);
var inst_29593 = (inst_29579 + (1));
var inst_29579__$1 = inst_29593;
var state_29615__$1 = (function (){var statearr_29630 = state_29615;
(statearr_29630[(10)] = inst_29592);

(statearr_29630[(7)] = inst_29579__$1);

return statearr_29630;
})();
var statearr_29631_29655 = state_29615__$1;
(statearr_29631_29655[(2)] = null);

(statearr_29631_29655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (5))){
var inst_29599 = (state_29615[(2)]);
var state_29615__$1 = (function (){var statearr_29632 = state_29615;
(statearr_29632[(11)] = inst_29599);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29615__$1,(12),dchan);
} else {
if((state_val_29616 === (14))){
var inst_29601 = (state_29615[(8)]);
var inst_29606 = cljs.core.apply.call(null,f,inst_29601);
var state_29615__$1 = state_29615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29615__$1,(16),out,inst_29606);
} else {
if((state_val_29616 === (16))){
var inst_29608 = (state_29615[(2)]);
var state_29615__$1 = (function (){var statearr_29633 = state_29615;
(statearr_29633[(12)] = inst_29608);

return statearr_29633;
})();
var statearr_29634_29656 = state_29615__$1;
(statearr_29634_29656[(2)] = null);

(statearr_29634_29656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (10))){
var inst_29583 = (state_29615[(2)]);
var inst_29584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29615__$1 = (function (){var statearr_29635 = state_29615;
(statearr_29635[(13)] = inst_29583);

return statearr_29635;
})();
var statearr_29636_29657 = state_29615__$1;
(statearr_29636_29657[(2)] = inst_29584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29616 === (8))){
var inst_29597 = (state_29615[(2)]);
var state_29615__$1 = state_29615;
var statearr_29637_29658 = state_29615__$1;
(statearr_29637_29658[(2)] = inst_29597);

(statearr_29637_29658[(1)] = (5));


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
});})(c__28305__auto___29643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28210__auto__,c__28305__auto___29643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_29638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29638[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_29638[(1)] = (1));

return statearr_29638;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_29615){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29639){if((e29639 instanceof Object)){
var ex__28214__auto__ = e29639;
var statearr_29640_29659 = state_29615;
(statearr_29640_29659[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29660 = state_29615;
state_29615 = G__29660;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_29615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_29615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28307__auto__ = (function (){var statearr_29641 = f__28306__auto__.call(null);
(statearr_29641[(6)] = c__28305__auto___29643);

return statearr_29641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29643,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28305__auto___29717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29717,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29717,out){
return (function (state_29695){
var state_val_29696 = (state_29695[(1)]);
if((state_val_29696 === (7))){
var inst_29675 = (state_29695[(7)]);
var inst_29674 = (state_29695[(8)]);
var inst_29674__$1 = (state_29695[(2)]);
var inst_29675__$1 = cljs.core.nth.call(null,inst_29674__$1,(0),null);
var inst_29676 = cljs.core.nth.call(null,inst_29674__$1,(1),null);
var inst_29677 = (inst_29675__$1 == null);
var state_29695__$1 = (function (){var statearr_29697 = state_29695;
(statearr_29697[(9)] = inst_29676);

(statearr_29697[(7)] = inst_29675__$1);

(statearr_29697[(8)] = inst_29674__$1);

return statearr_29697;
})();
if(cljs.core.truth_(inst_29677)){
var statearr_29698_29718 = state_29695__$1;
(statearr_29698_29718[(1)] = (8));

} else {
var statearr_29699_29719 = state_29695__$1;
(statearr_29699_29719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (1))){
var inst_29664 = cljs.core.vec.call(null,chs);
var inst_29665 = inst_29664;
var state_29695__$1 = (function (){var statearr_29700 = state_29695;
(statearr_29700[(10)] = inst_29665);

return statearr_29700;
})();
var statearr_29701_29720 = state_29695__$1;
(statearr_29701_29720[(2)] = null);

(statearr_29701_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (4))){
var inst_29665 = (state_29695[(10)]);
var state_29695__$1 = state_29695;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29695__$1,(7),inst_29665);
} else {
if((state_val_29696 === (6))){
var inst_29691 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
var statearr_29702_29721 = state_29695__$1;
(statearr_29702_29721[(2)] = inst_29691);

(statearr_29702_29721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (3))){
var inst_29693 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29695__$1,inst_29693);
} else {
if((state_val_29696 === (2))){
var inst_29665 = (state_29695[(10)]);
var inst_29667 = cljs.core.count.call(null,inst_29665);
var inst_29668 = (inst_29667 > (0));
var state_29695__$1 = state_29695;
if(cljs.core.truth_(inst_29668)){
var statearr_29704_29722 = state_29695__$1;
(statearr_29704_29722[(1)] = (4));

} else {
var statearr_29705_29723 = state_29695__$1;
(statearr_29705_29723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (11))){
var inst_29665 = (state_29695[(10)]);
var inst_29684 = (state_29695[(2)]);
var tmp29703 = inst_29665;
var inst_29665__$1 = tmp29703;
var state_29695__$1 = (function (){var statearr_29706 = state_29695;
(statearr_29706[(11)] = inst_29684);

(statearr_29706[(10)] = inst_29665__$1);

return statearr_29706;
})();
var statearr_29707_29724 = state_29695__$1;
(statearr_29707_29724[(2)] = null);

(statearr_29707_29724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (9))){
var inst_29675 = (state_29695[(7)]);
var state_29695__$1 = state_29695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29695__$1,(11),out,inst_29675);
} else {
if((state_val_29696 === (5))){
var inst_29689 = cljs.core.async.close_BANG_.call(null,out);
var state_29695__$1 = state_29695;
var statearr_29708_29725 = state_29695__$1;
(statearr_29708_29725[(2)] = inst_29689);

(statearr_29708_29725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (10))){
var inst_29687 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
var statearr_29709_29726 = state_29695__$1;
(statearr_29709_29726[(2)] = inst_29687);

(statearr_29709_29726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (8))){
var inst_29676 = (state_29695[(9)]);
var inst_29675 = (state_29695[(7)]);
var inst_29674 = (state_29695[(8)]);
var inst_29665 = (state_29695[(10)]);
var inst_29679 = (function (){var cs = inst_29665;
var vec__29670 = inst_29674;
var v = inst_29675;
var c = inst_29676;
return ((function (cs,vec__29670,v,c,inst_29676,inst_29675,inst_29674,inst_29665,state_val_29696,c__28305__auto___29717,out){
return (function (p1__29661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29661_SHARP_);
});
;})(cs,vec__29670,v,c,inst_29676,inst_29675,inst_29674,inst_29665,state_val_29696,c__28305__auto___29717,out))
})();
var inst_29680 = cljs.core.filterv.call(null,inst_29679,inst_29665);
var inst_29665__$1 = inst_29680;
var state_29695__$1 = (function (){var statearr_29710 = state_29695;
(statearr_29710[(10)] = inst_29665__$1);

return statearr_29710;
})();
var statearr_29711_29727 = state_29695__$1;
(statearr_29711_29727[(2)] = null);

(statearr_29711_29727[(1)] = (2));


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
});})(c__28305__auto___29717,out))
;
return ((function (switch__28210__auto__,c__28305__auto___29717,out){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_29712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29712[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_29712[(1)] = (1));

return statearr_29712;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_29695){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29713){if((e29713 instanceof Object)){
var ex__28214__auto__ = e29713;
var statearr_29714_29728 = state_29695;
(statearr_29714_29728[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29729 = state_29695;
state_29695 = G__29729;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_29695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_29695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29717,out))
})();
var state__28307__auto__ = (function (){var statearr_29715 = f__28306__auto__.call(null);
(statearr_29715[(6)] = c__28305__auto___29717);

return statearr_29715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29717,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29731 = arguments.length;
switch (G__29731) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28305__auto___29776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29776,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29776,out){
return (function (state_29755){
var state_val_29756 = (state_29755[(1)]);
if((state_val_29756 === (7))){
var inst_29737 = (state_29755[(7)]);
var inst_29737__$1 = (state_29755[(2)]);
var inst_29738 = (inst_29737__$1 == null);
var inst_29739 = cljs.core.not.call(null,inst_29738);
var state_29755__$1 = (function (){var statearr_29757 = state_29755;
(statearr_29757[(7)] = inst_29737__$1);

return statearr_29757;
})();
if(inst_29739){
var statearr_29758_29777 = state_29755__$1;
(statearr_29758_29777[(1)] = (8));

} else {
var statearr_29759_29778 = state_29755__$1;
(statearr_29759_29778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (1))){
var inst_29732 = (0);
var state_29755__$1 = (function (){var statearr_29760 = state_29755;
(statearr_29760[(8)] = inst_29732);

return statearr_29760;
})();
var statearr_29761_29779 = state_29755__$1;
(statearr_29761_29779[(2)] = null);

(statearr_29761_29779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (4))){
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29755__$1,(7),ch);
} else {
if((state_val_29756 === (6))){
var inst_29750 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29762_29780 = state_29755__$1;
(statearr_29762_29780[(2)] = inst_29750);

(statearr_29762_29780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (3))){
var inst_29752 = (state_29755[(2)]);
var inst_29753 = cljs.core.async.close_BANG_.call(null,out);
var state_29755__$1 = (function (){var statearr_29763 = state_29755;
(statearr_29763[(9)] = inst_29752);

return statearr_29763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29755__$1,inst_29753);
} else {
if((state_val_29756 === (2))){
var inst_29732 = (state_29755[(8)]);
var inst_29734 = (inst_29732 < n);
var state_29755__$1 = state_29755;
if(cljs.core.truth_(inst_29734)){
var statearr_29764_29781 = state_29755__$1;
(statearr_29764_29781[(1)] = (4));

} else {
var statearr_29765_29782 = state_29755__$1;
(statearr_29765_29782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (11))){
var inst_29732 = (state_29755[(8)]);
var inst_29742 = (state_29755[(2)]);
var inst_29743 = (inst_29732 + (1));
var inst_29732__$1 = inst_29743;
var state_29755__$1 = (function (){var statearr_29766 = state_29755;
(statearr_29766[(8)] = inst_29732__$1);

(statearr_29766[(10)] = inst_29742);

return statearr_29766;
})();
var statearr_29767_29783 = state_29755__$1;
(statearr_29767_29783[(2)] = null);

(statearr_29767_29783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (9))){
var state_29755__$1 = state_29755;
var statearr_29768_29784 = state_29755__$1;
(statearr_29768_29784[(2)] = null);

(statearr_29768_29784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (5))){
var state_29755__$1 = state_29755;
var statearr_29769_29785 = state_29755__$1;
(statearr_29769_29785[(2)] = null);

(statearr_29769_29785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (10))){
var inst_29747 = (state_29755[(2)]);
var state_29755__$1 = state_29755;
var statearr_29770_29786 = state_29755__$1;
(statearr_29770_29786[(2)] = inst_29747);

(statearr_29770_29786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29756 === (8))){
var inst_29737 = (state_29755[(7)]);
var state_29755__$1 = state_29755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29755__$1,(11),out,inst_29737);
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
});})(c__28305__auto___29776,out))
;
return ((function (switch__28210__auto__,c__28305__auto___29776,out){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_29771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29771[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_29771[(1)] = (1));

return statearr_29771;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_29755){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29772){if((e29772 instanceof Object)){
var ex__28214__auto__ = e29772;
var statearr_29773_29787 = state_29755;
(statearr_29773_29787[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29788 = state_29755;
state_29755 = G__29788;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_29755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_29755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29776,out))
})();
var state__28307__auto__ = (function (){var statearr_29774 = f__28306__auto__.call(null);
(statearr_29774[(6)] = c__28305__auto___29776);

return statearr_29774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29776,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29790 = (function (f,ch,meta29791){
this.f = f;
this.ch = ch;
this.meta29791 = meta29791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29792,meta29791__$1){
var self__ = this;
var _29792__$1 = this;
return (new cljs.core.async.t_cljs$core$async29790(self__.f,self__.ch,meta29791__$1));
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29792){
var self__ = this;
var _29792__$1 = this;
return self__.meta29791;
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29793 = (function (f,ch,meta29791,_,fn1,meta29794){
this.f = f;
this.ch = ch;
this.meta29791 = meta29791;
this._ = _;
this.fn1 = fn1;
this.meta29794 = meta29794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29795,meta29794__$1){
var self__ = this;
var _29795__$1 = this;
return (new cljs.core.async.t_cljs$core$async29793(self__.f,self__.ch,self__.meta29791,self__._,self__.fn1,meta29794__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29795){
var self__ = this;
var _29795__$1 = this;
return self__.meta29794;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29789_SHARP_){
return f1.call(null,(((p1__29789_SHARP_ == null))?null:self__.f.call(null,p1__29789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29793.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29791","meta29791",-1328897608,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29790","cljs.core.async/t_cljs$core$async29790",1080146122,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29794","meta29794",-1558328607,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29793";

cljs.core.async.t_cljs$core$async29793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29793");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29793.
 */
cljs.core.async.__GT_t_cljs$core$async29793 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29793(f__$1,ch__$1,meta29791__$1,___$2,fn1__$1,meta29794){
return (new cljs.core.async.t_cljs$core$async29793(f__$1,ch__$1,meta29791__$1,___$2,fn1__$1,meta29794));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29793(self__.f,self__.ch,self__.meta29791,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29791","meta29791",-1328897608,null)], null);
});

cljs.core.async.t_cljs$core$async29790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29790";

cljs.core.async.t_cljs$core$async29790.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29790");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29790.
 */
cljs.core.async.__GT_t_cljs$core$async29790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29790(f__$1,ch__$1,meta29791){
return (new cljs.core.async.t_cljs$core$async29790(f__$1,ch__$1,meta29791));
});

}

return (new cljs.core.async.t_cljs$core$async29790(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29796 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29796 = (function (f,ch,meta29797){
this.f = f;
this.ch = ch;
this.meta29797 = meta29797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29798,meta29797__$1){
var self__ = this;
var _29798__$1 = this;
return (new cljs.core.async.t_cljs$core$async29796(self__.f,self__.ch,meta29797__$1));
});

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29798){
var self__ = this;
var _29798__$1 = this;
return self__.meta29797;
});

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29797","meta29797",-485301337,null)], null);
});

cljs.core.async.t_cljs$core$async29796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29796";

cljs.core.async.t_cljs$core$async29796.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29796");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29796.
 */
cljs.core.async.__GT_t_cljs$core$async29796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29796(f__$1,ch__$1,meta29797){
return (new cljs.core.async.t_cljs$core$async29796(f__$1,ch__$1,meta29797));
});

}

return (new cljs.core.async.t_cljs$core$async29796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29799 = (function (p,ch,meta29800){
this.p = p;
this.ch = ch;
this.meta29800 = meta29800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29801,meta29800__$1){
var self__ = this;
var _29801__$1 = this;
return (new cljs.core.async.t_cljs$core$async29799(self__.p,self__.ch,meta29800__$1));
});

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29801){
var self__ = this;
var _29801__$1 = this;
return self__.meta29800;
});

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29800","meta29800",734077687,null)], null);
});

cljs.core.async.t_cljs$core$async29799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29799";

cljs.core.async.t_cljs$core$async29799.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29799.
 */
cljs.core.async.__GT_t_cljs$core$async29799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29799(p__$1,ch__$1,meta29800){
return (new cljs.core.async.t_cljs$core$async29799(p__$1,ch__$1,meta29800));
});

}

return (new cljs.core.async.t_cljs$core$async29799(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29803 = arguments.length;
switch (G__29803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28305__auto___29843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___29843,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___29843,out){
return (function (state_29824){
var state_val_29825 = (state_29824[(1)]);
if((state_val_29825 === (7))){
var inst_29820 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29826_29844 = state_29824__$1;
(statearr_29826_29844[(2)] = inst_29820);

(statearr_29826_29844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (1))){
var state_29824__$1 = state_29824;
var statearr_29827_29845 = state_29824__$1;
(statearr_29827_29845[(2)] = null);

(statearr_29827_29845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (4))){
var inst_29806 = (state_29824[(7)]);
var inst_29806__$1 = (state_29824[(2)]);
var inst_29807 = (inst_29806__$1 == null);
var state_29824__$1 = (function (){var statearr_29828 = state_29824;
(statearr_29828[(7)] = inst_29806__$1);

return statearr_29828;
})();
if(cljs.core.truth_(inst_29807)){
var statearr_29829_29846 = state_29824__$1;
(statearr_29829_29846[(1)] = (5));

} else {
var statearr_29830_29847 = state_29824__$1;
(statearr_29830_29847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (6))){
var inst_29806 = (state_29824[(7)]);
var inst_29811 = p.call(null,inst_29806);
var state_29824__$1 = state_29824;
if(cljs.core.truth_(inst_29811)){
var statearr_29831_29848 = state_29824__$1;
(statearr_29831_29848[(1)] = (8));

} else {
var statearr_29832_29849 = state_29824__$1;
(statearr_29832_29849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (3))){
var inst_29822 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29824__$1,inst_29822);
} else {
if((state_val_29825 === (2))){
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29824__$1,(4),ch);
} else {
if((state_val_29825 === (11))){
var inst_29814 = (state_29824[(2)]);
var state_29824__$1 = state_29824;
var statearr_29833_29850 = state_29824__$1;
(statearr_29833_29850[(2)] = inst_29814);

(statearr_29833_29850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (9))){
var state_29824__$1 = state_29824;
var statearr_29834_29851 = state_29824__$1;
(statearr_29834_29851[(2)] = null);

(statearr_29834_29851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (5))){
var inst_29809 = cljs.core.async.close_BANG_.call(null,out);
var state_29824__$1 = state_29824;
var statearr_29835_29852 = state_29824__$1;
(statearr_29835_29852[(2)] = inst_29809);

(statearr_29835_29852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (10))){
var inst_29817 = (state_29824[(2)]);
var state_29824__$1 = (function (){var statearr_29836 = state_29824;
(statearr_29836[(8)] = inst_29817);

return statearr_29836;
})();
var statearr_29837_29853 = state_29824__$1;
(statearr_29837_29853[(2)] = null);

(statearr_29837_29853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29825 === (8))){
var inst_29806 = (state_29824[(7)]);
var state_29824__$1 = state_29824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29824__$1,(11),out,inst_29806);
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
});})(c__28305__auto___29843,out))
;
return ((function (switch__28210__auto__,c__28305__auto___29843,out){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_29838 = [null,null,null,null,null,null,null,null,null];
(statearr_29838[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_29838[(1)] = (1));

return statearr_29838;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_29824){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29839){if((e29839 instanceof Object)){
var ex__28214__auto__ = e29839;
var statearr_29840_29854 = state_29824;
(statearr_29840_29854[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29855 = state_29824;
state_29824 = G__29855;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_29824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_29824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___29843,out))
})();
var state__28307__auto__ = (function (){var statearr_29841 = f__28306__auto__.call(null);
(statearr_29841[(6)] = c__28305__auto___29843);

return statearr_29841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___29843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29857 = arguments.length;
switch (G__29857) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28305__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto__){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto__){
return (function (state_29920){
var state_val_29921 = (state_29920[(1)]);
if((state_val_29921 === (7))){
var inst_29916 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29922_29960 = state_29920__$1;
(statearr_29922_29960[(2)] = inst_29916);

(statearr_29922_29960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (20))){
var inst_29886 = (state_29920[(7)]);
var inst_29897 = (state_29920[(2)]);
var inst_29898 = cljs.core.next.call(null,inst_29886);
var inst_29872 = inst_29898;
var inst_29873 = null;
var inst_29874 = (0);
var inst_29875 = (0);
var state_29920__$1 = (function (){var statearr_29923 = state_29920;
(statearr_29923[(8)] = inst_29875);

(statearr_29923[(9)] = inst_29897);

(statearr_29923[(10)] = inst_29874);

(statearr_29923[(11)] = inst_29873);

(statearr_29923[(12)] = inst_29872);

return statearr_29923;
})();
var statearr_29924_29961 = state_29920__$1;
(statearr_29924_29961[(2)] = null);

(statearr_29924_29961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (1))){
var state_29920__$1 = state_29920;
var statearr_29925_29962 = state_29920__$1;
(statearr_29925_29962[(2)] = null);

(statearr_29925_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (4))){
var inst_29861 = (state_29920[(13)]);
var inst_29861__$1 = (state_29920[(2)]);
var inst_29862 = (inst_29861__$1 == null);
var state_29920__$1 = (function (){var statearr_29926 = state_29920;
(statearr_29926[(13)] = inst_29861__$1);

return statearr_29926;
})();
if(cljs.core.truth_(inst_29862)){
var statearr_29927_29963 = state_29920__$1;
(statearr_29927_29963[(1)] = (5));

} else {
var statearr_29928_29964 = state_29920__$1;
(statearr_29928_29964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (15))){
var state_29920__$1 = state_29920;
var statearr_29932_29965 = state_29920__$1;
(statearr_29932_29965[(2)] = null);

(statearr_29932_29965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (21))){
var state_29920__$1 = state_29920;
var statearr_29933_29966 = state_29920__$1;
(statearr_29933_29966[(2)] = null);

(statearr_29933_29966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (13))){
var inst_29875 = (state_29920[(8)]);
var inst_29874 = (state_29920[(10)]);
var inst_29873 = (state_29920[(11)]);
var inst_29872 = (state_29920[(12)]);
var inst_29882 = (state_29920[(2)]);
var inst_29883 = (inst_29875 + (1));
var tmp29929 = inst_29874;
var tmp29930 = inst_29873;
var tmp29931 = inst_29872;
var inst_29872__$1 = tmp29931;
var inst_29873__$1 = tmp29930;
var inst_29874__$1 = tmp29929;
var inst_29875__$1 = inst_29883;
var state_29920__$1 = (function (){var statearr_29934 = state_29920;
(statearr_29934[(8)] = inst_29875__$1);

(statearr_29934[(10)] = inst_29874__$1);

(statearr_29934[(14)] = inst_29882);

(statearr_29934[(11)] = inst_29873__$1);

(statearr_29934[(12)] = inst_29872__$1);

return statearr_29934;
})();
var statearr_29935_29967 = state_29920__$1;
(statearr_29935_29967[(2)] = null);

(statearr_29935_29967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (22))){
var state_29920__$1 = state_29920;
var statearr_29936_29968 = state_29920__$1;
(statearr_29936_29968[(2)] = null);

(statearr_29936_29968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (6))){
var inst_29861 = (state_29920[(13)]);
var inst_29870 = f.call(null,inst_29861);
var inst_29871 = cljs.core.seq.call(null,inst_29870);
var inst_29872 = inst_29871;
var inst_29873 = null;
var inst_29874 = (0);
var inst_29875 = (0);
var state_29920__$1 = (function (){var statearr_29937 = state_29920;
(statearr_29937[(8)] = inst_29875);

(statearr_29937[(10)] = inst_29874);

(statearr_29937[(11)] = inst_29873);

(statearr_29937[(12)] = inst_29872);

return statearr_29937;
})();
var statearr_29938_29969 = state_29920__$1;
(statearr_29938_29969[(2)] = null);

(statearr_29938_29969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (17))){
var inst_29886 = (state_29920[(7)]);
var inst_29890 = cljs.core.chunk_first.call(null,inst_29886);
var inst_29891 = cljs.core.chunk_rest.call(null,inst_29886);
var inst_29892 = cljs.core.count.call(null,inst_29890);
var inst_29872 = inst_29891;
var inst_29873 = inst_29890;
var inst_29874 = inst_29892;
var inst_29875 = (0);
var state_29920__$1 = (function (){var statearr_29939 = state_29920;
(statearr_29939[(8)] = inst_29875);

(statearr_29939[(10)] = inst_29874);

(statearr_29939[(11)] = inst_29873);

(statearr_29939[(12)] = inst_29872);

return statearr_29939;
})();
var statearr_29940_29970 = state_29920__$1;
(statearr_29940_29970[(2)] = null);

(statearr_29940_29970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (3))){
var inst_29918 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29920__$1,inst_29918);
} else {
if((state_val_29921 === (12))){
var inst_29906 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29941_29971 = state_29920__$1;
(statearr_29941_29971[(2)] = inst_29906);

(statearr_29941_29971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (2))){
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29920__$1,(4),in$);
} else {
if((state_val_29921 === (23))){
var inst_29914 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29942_29972 = state_29920__$1;
(statearr_29942_29972[(2)] = inst_29914);

(statearr_29942_29972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (19))){
var inst_29901 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29943_29973 = state_29920__$1;
(statearr_29943_29973[(2)] = inst_29901);

(statearr_29943_29973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (11))){
var inst_29872 = (state_29920[(12)]);
var inst_29886 = (state_29920[(7)]);
var inst_29886__$1 = cljs.core.seq.call(null,inst_29872);
var state_29920__$1 = (function (){var statearr_29944 = state_29920;
(statearr_29944[(7)] = inst_29886__$1);

return statearr_29944;
})();
if(inst_29886__$1){
var statearr_29945_29974 = state_29920__$1;
(statearr_29945_29974[(1)] = (14));

} else {
var statearr_29946_29975 = state_29920__$1;
(statearr_29946_29975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (9))){
var inst_29908 = (state_29920[(2)]);
var inst_29909 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29920__$1 = (function (){var statearr_29947 = state_29920;
(statearr_29947[(15)] = inst_29908);

return statearr_29947;
})();
if(cljs.core.truth_(inst_29909)){
var statearr_29948_29976 = state_29920__$1;
(statearr_29948_29976[(1)] = (21));

} else {
var statearr_29949_29977 = state_29920__$1;
(statearr_29949_29977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (5))){
var inst_29864 = cljs.core.async.close_BANG_.call(null,out);
var state_29920__$1 = state_29920;
var statearr_29950_29978 = state_29920__$1;
(statearr_29950_29978[(2)] = inst_29864);

(statearr_29950_29978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (14))){
var inst_29886 = (state_29920[(7)]);
var inst_29888 = cljs.core.chunked_seq_QMARK_.call(null,inst_29886);
var state_29920__$1 = state_29920;
if(inst_29888){
var statearr_29951_29979 = state_29920__$1;
(statearr_29951_29979[(1)] = (17));

} else {
var statearr_29952_29980 = state_29920__$1;
(statearr_29952_29980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (16))){
var inst_29904 = (state_29920[(2)]);
var state_29920__$1 = state_29920;
var statearr_29953_29981 = state_29920__$1;
(statearr_29953_29981[(2)] = inst_29904);

(statearr_29953_29981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29921 === (10))){
var inst_29875 = (state_29920[(8)]);
var inst_29873 = (state_29920[(11)]);
var inst_29880 = cljs.core._nth.call(null,inst_29873,inst_29875);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29920__$1,(13),out,inst_29880);
} else {
if((state_val_29921 === (18))){
var inst_29886 = (state_29920[(7)]);
var inst_29895 = cljs.core.first.call(null,inst_29886);
var state_29920__$1 = state_29920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29920__$1,(20),out,inst_29895);
} else {
if((state_val_29921 === (8))){
var inst_29875 = (state_29920[(8)]);
var inst_29874 = (state_29920[(10)]);
var inst_29877 = (inst_29875 < inst_29874);
var inst_29878 = inst_29877;
var state_29920__$1 = state_29920;
if(cljs.core.truth_(inst_29878)){
var statearr_29954_29982 = state_29920__$1;
(statearr_29954_29982[(1)] = (10));

} else {
var statearr_29955_29983 = state_29920__$1;
(statearr_29955_29983[(1)] = (11));

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
});})(c__28305__auto__))
;
return ((function (switch__28210__auto__,c__28305__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28211__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28211__auto____0 = (function (){
var statearr_29956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29956[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28211__auto__);

(statearr_29956[(1)] = (1));

return statearr_29956;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28211__auto____1 = (function (state_29920){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_29920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e29957){if((e29957 instanceof Object)){
var ex__28214__auto__ = e29957;
var statearr_29958_29984 = state_29920;
(statearr_29958_29984[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29985 = state_29920;
state_29920 = G__29985;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28211__auto__ = function(state_29920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28211__auto____1.call(this,state_29920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28211__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28211__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto__))
})();
var state__28307__auto__ = (function (){var statearr_29959 = f__28306__auto__.call(null);
(statearr_29959[(6)] = c__28305__auto__);

return statearr_29959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto__))
);

return c__28305__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29987 = arguments.length;
switch (G__29987) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29990 = arguments.length;
switch (G__29990) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29993 = arguments.length;
switch (G__29993) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28305__auto___30040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___30040,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___30040,out){
return (function (state_30017){
var state_val_30018 = (state_30017[(1)]);
if((state_val_30018 === (7))){
var inst_30012 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30019_30041 = state_30017__$1;
(statearr_30019_30041[(2)] = inst_30012);

(statearr_30019_30041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (1))){
var inst_29994 = null;
var state_30017__$1 = (function (){var statearr_30020 = state_30017;
(statearr_30020[(7)] = inst_29994);

return statearr_30020;
})();
var statearr_30021_30042 = state_30017__$1;
(statearr_30021_30042[(2)] = null);

(statearr_30021_30042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (4))){
var inst_29997 = (state_30017[(8)]);
var inst_29997__$1 = (state_30017[(2)]);
var inst_29998 = (inst_29997__$1 == null);
var inst_29999 = cljs.core.not.call(null,inst_29998);
var state_30017__$1 = (function (){var statearr_30022 = state_30017;
(statearr_30022[(8)] = inst_29997__$1);

return statearr_30022;
})();
if(inst_29999){
var statearr_30023_30043 = state_30017__$1;
(statearr_30023_30043[(1)] = (5));

} else {
var statearr_30024_30044 = state_30017__$1;
(statearr_30024_30044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (6))){
var state_30017__$1 = state_30017;
var statearr_30025_30045 = state_30017__$1;
(statearr_30025_30045[(2)] = null);

(statearr_30025_30045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (3))){
var inst_30014 = (state_30017[(2)]);
var inst_30015 = cljs.core.async.close_BANG_.call(null,out);
var state_30017__$1 = (function (){var statearr_30026 = state_30017;
(statearr_30026[(9)] = inst_30014);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30017__$1,inst_30015);
} else {
if((state_val_30018 === (2))){
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30017__$1,(4),ch);
} else {
if((state_val_30018 === (11))){
var inst_29997 = (state_30017[(8)]);
var inst_30006 = (state_30017[(2)]);
var inst_29994 = inst_29997;
var state_30017__$1 = (function (){var statearr_30027 = state_30017;
(statearr_30027[(7)] = inst_29994);

(statearr_30027[(10)] = inst_30006);

return statearr_30027;
})();
var statearr_30028_30046 = state_30017__$1;
(statearr_30028_30046[(2)] = null);

(statearr_30028_30046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (9))){
var inst_29997 = (state_30017[(8)]);
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30017__$1,(11),out,inst_29997);
} else {
if((state_val_30018 === (5))){
var inst_29994 = (state_30017[(7)]);
var inst_29997 = (state_30017[(8)]);
var inst_30001 = cljs.core._EQ_.call(null,inst_29997,inst_29994);
var state_30017__$1 = state_30017;
if(inst_30001){
var statearr_30030_30047 = state_30017__$1;
(statearr_30030_30047[(1)] = (8));

} else {
var statearr_30031_30048 = state_30017__$1;
(statearr_30031_30048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (10))){
var inst_30009 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30032_30049 = state_30017__$1;
(statearr_30032_30049[(2)] = inst_30009);

(statearr_30032_30049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (8))){
var inst_29994 = (state_30017[(7)]);
var tmp30029 = inst_29994;
var inst_29994__$1 = tmp30029;
var state_30017__$1 = (function (){var statearr_30033 = state_30017;
(statearr_30033[(7)] = inst_29994__$1);

return statearr_30033;
})();
var statearr_30034_30050 = state_30017__$1;
(statearr_30034_30050[(2)] = null);

(statearr_30034_30050[(1)] = (2));


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
});})(c__28305__auto___30040,out))
;
return ((function (switch__28210__auto__,c__28305__auto___30040,out){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_30035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30035[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_30035[(1)] = (1));

return statearr_30035;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_30017){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_30017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e30036){if((e30036 instanceof Object)){
var ex__28214__auto__ = e30036;
var statearr_30037_30051 = state_30017;
(statearr_30037_30051[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30052 = state_30017;
state_30017 = G__30052;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_30017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_30017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___30040,out))
})();
var state__28307__auto__ = (function (){var statearr_30038 = f__28306__auto__.call(null);
(statearr_30038[(6)] = c__28305__auto___30040);

return statearr_30038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___30040,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__30054 = arguments.length;
switch (G__30054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28305__auto___30120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___30120,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___30120,out){
return (function (state_30092){
var state_val_30093 = (state_30092[(1)]);
if((state_val_30093 === (7))){
var inst_30088 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30094_30121 = state_30092__$1;
(statearr_30094_30121[(2)] = inst_30088);

(statearr_30094_30121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (1))){
var inst_30055 = (new Array(n));
var inst_30056 = inst_30055;
var inst_30057 = (0);
var state_30092__$1 = (function (){var statearr_30095 = state_30092;
(statearr_30095[(7)] = inst_30056);

(statearr_30095[(8)] = inst_30057);

return statearr_30095;
})();
var statearr_30096_30122 = state_30092__$1;
(statearr_30096_30122[(2)] = null);

(statearr_30096_30122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (4))){
var inst_30060 = (state_30092[(9)]);
var inst_30060__$1 = (state_30092[(2)]);
var inst_30061 = (inst_30060__$1 == null);
var inst_30062 = cljs.core.not.call(null,inst_30061);
var state_30092__$1 = (function (){var statearr_30097 = state_30092;
(statearr_30097[(9)] = inst_30060__$1);

return statearr_30097;
})();
if(inst_30062){
var statearr_30098_30123 = state_30092__$1;
(statearr_30098_30123[(1)] = (5));

} else {
var statearr_30099_30124 = state_30092__$1;
(statearr_30099_30124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (15))){
var inst_30082 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30100_30125 = state_30092__$1;
(statearr_30100_30125[(2)] = inst_30082);

(statearr_30100_30125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (13))){
var state_30092__$1 = state_30092;
var statearr_30101_30126 = state_30092__$1;
(statearr_30101_30126[(2)] = null);

(statearr_30101_30126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (6))){
var inst_30057 = (state_30092[(8)]);
var inst_30078 = (inst_30057 > (0));
var state_30092__$1 = state_30092;
if(cljs.core.truth_(inst_30078)){
var statearr_30102_30127 = state_30092__$1;
(statearr_30102_30127[(1)] = (12));

} else {
var statearr_30103_30128 = state_30092__$1;
(statearr_30103_30128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (3))){
var inst_30090 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30092__$1,inst_30090);
} else {
if((state_val_30093 === (12))){
var inst_30056 = (state_30092[(7)]);
var inst_30080 = cljs.core.vec.call(null,inst_30056);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30092__$1,(15),out,inst_30080);
} else {
if((state_val_30093 === (2))){
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30092__$1,(4),ch);
} else {
if((state_val_30093 === (11))){
var inst_30072 = (state_30092[(2)]);
var inst_30073 = (new Array(n));
var inst_30056 = inst_30073;
var inst_30057 = (0);
var state_30092__$1 = (function (){var statearr_30104 = state_30092;
(statearr_30104[(7)] = inst_30056);

(statearr_30104[(10)] = inst_30072);

(statearr_30104[(8)] = inst_30057);

return statearr_30104;
})();
var statearr_30105_30129 = state_30092__$1;
(statearr_30105_30129[(2)] = null);

(statearr_30105_30129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (9))){
var inst_30056 = (state_30092[(7)]);
var inst_30070 = cljs.core.vec.call(null,inst_30056);
var state_30092__$1 = state_30092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30092__$1,(11),out,inst_30070);
} else {
if((state_val_30093 === (5))){
var inst_30060 = (state_30092[(9)]);
var inst_30056 = (state_30092[(7)]);
var inst_30065 = (state_30092[(11)]);
var inst_30057 = (state_30092[(8)]);
var inst_30064 = (inst_30056[inst_30057] = inst_30060);
var inst_30065__$1 = (inst_30057 + (1));
var inst_30066 = (inst_30065__$1 < n);
var state_30092__$1 = (function (){var statearr_30106 = state_30092;
(statearr_30106[(11)] = inst_30065__$1);

(statearr_30106[(12)] = inst_30064);

return statearr_30106;
})();
if(cljs.core.truth_(inst_30066)){
var statearr_30107_30130 = state_30092__$1;
(statearr_30107_30130[(1)] = (8));

} else {
var statearr_30108_30131 = state_30092__$1;
(statearr_30108_30131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (14))){
var inst_30085 = (state_30092[(2)]);
var inst_30086 = cljs.core.async.close_BANG_.call(null,out);
var state_30092__$1 = (function (){var statearr_30110 = state_30092;
(statearr_30110[(13)] = inst_30085);

return statearr_30110;
})();
var statearr_30111_30132 = state_30092__$1;
(statearr_30111_30132[(2)] = inst_30086);

(statearr_30111_30132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (10))){
var inst_30076 = (state_30092[(2)]);
var state_30092__$1 = state_30092;
var statearr_30112_30133 = state_30092__$1;
(statearr_30112_30133[(2)] = inst_30076);

(statearr_30112_30133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30093 === (8))){
var inst_30056 = (state_30092[(7)]);
var inst_30065 = (state_30092[(11)]);
var tmp30109 = inst_30056;
var inst_30056__$1 = tmp30109;
var inst_30057 = inst_30065;
var state_30092__$1 = (function (){var statearr_30113 = state_30092;
(statearr_30113[(7)] = inst_30056__$1);

(statearr_30113[(8)] = inst_30057);

return statearr_30113;
})();
var statearr_30114_30134 = state_30092__$1;
(statearr_30114_30134[(2)] = null);

(statearr_30114_30134[(1)] = (2));


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
});})(c__28305__auto___30120,out))
;
return ((function (switch__28210__auto__,c__28305__auto___30120,out){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_30115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30115[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_30115[(1)] = (1));

return statearr_30115;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_30092){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_30092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e30116){if((e30116 instanceof Object)){
var ex__28214__auto__ = e30116;
var statearr_30117_30135 = state_30092;
(statearr_30117_30135[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30136 = state_30092;
state_30092 = G__30136;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_30092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_30092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___30120,out))
})();
var state__28307__auto__ = (function (){var statearr_30118 = f__28306__auto__.call(null);
(statearr_30118[(6)] = c__28305__auto___30120);

return statearr_30118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___30120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__30138 = arguments.length;
switch (G__30138) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28305__auto___30208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28305__auto___30208,out){
return (function (){
var f__28306__auto__ = (function (){var switch__28210__auto__ = ((function (c__28305__auto___30208,out){
return (function (state_30180){
var state_val_30181 = (state_30180[(1)]);
if((state_val_30181 === (7))){
var inst_30176 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30182_30209 = state_30180__$1;
(statearr_30182_30209[(2)] = inst_30176);

(statearr_30182_30209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (1))){
var inst_30139 = [];
var inst_30140 = inst_30139;
var inst_30141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30180__$1 = (function (){var statearr_30183 = state_30180;
(statearr_30183[(7)] = inst_30141);

(statearr_30183[(8)] = inst_30140);

return statearr_30183;
})();
var statearr_30184_30210 = state_30180__$1;
(statearr_30184_30210[(2)] = null);

(statearr_30184_30210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (4))){
var inst_30144 = (state_30180[(9)]);
var inst_30144__$1 = (state_30180[(2)]);
var inst_30145 = (inst_30144__$1 == null);
var inst_30146 = cljs.core.not.call(null,inst_30145);
var state_30180__$1 = (function (){var statearr_30185 = state_30180;
(statearr_30185[(9)] = inst_30144__$1);

return statearr_30185;
})();
if(inst_30146){
var statearr_30186_30211 = state_30180__$1;
(statearr_30186_30211[(1)] = (5));

} else {
var statearr_30187_30212 = state_30180__$1;
(statearr_30187_30212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (15))){
var inst_30170 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30188_30213 = state_30180__$1;
(statearr_30188_30213[(2)] = inst_30170);

(statearr_30188_30213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (13))){
var state_30180__$1 = state_30180;
var statearr_30189_30214 = state_30180__$1;
(statearr_30189_30214[(2)] = null);

(statearr_30189_30214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (6))){
var inst_30140 = (state_30180[(8)]);
var inst_30165 = inst_30140.length;
var inst_30166 = (inst_30165 > (0));
var state_30180__$1 = state_30180;
if(cljs.core.truth_(inst_30166)){
var statearr_30190_30215 = state_30180__$1;
(statearr_30190_30215[(1)] = (12));

} else {
var statearr_30191_30216 = state_30180__$1;
(statearr_30191_30216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (3))){
var inst_30178 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30180__$1,inst_30178);
} else {
if((state_val_30181 === (12))){
var inst_30140 = (state_30180[(8)]);
var inst_30168 = cljs.core.vec.call(null,inst_30140);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30180__$1,(15),out,inst_30168);
} else {
if((state_val_30181 === (2))){
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30180__$1,(4),ch);
} else {
if((state_val_30181 === (11))){
var inst_30144 = (state_30180[(9)]);
var inst_30148 = (state_30180[(10)]);
var inst_30158 = (state_30180[(2)]);
var inst_30159 = [];
var inst_30160 = inst_30159.push(inst_30144);
var inst_30140 = inst_30159;
var inst_30141 = inst_30148;
var state_30180__$1 = (function (){var statearr_30192 = state_30180;
(statearr_30192[(11)] = inst_30158);

(statearr_30192[(7)] = inst_30141);

(statearr_30192[(12)] = inst_30160);

(statearr_30192[(8)] = inst_30140);

return statearr_30192;
})();
var statearr_30193_30217 = state_30180__$1;
(statearr_30193_30217[(2)] = null);

(statearr_30193_30217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (9))){
var inst_30140 = (state_30180[(8)]);
var inst_30156 = cljs.core.vec.call(null,inst_30140);
var state_30180__$1 = state_30180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30180__$1,(11),out,inst_30156);
} else {
if((state_val_30181 === (5))){
var inst_30144 = (state_30180[(9)]);
var inst_30141 = (state_30180[(7)]);
var inst_30148 = (state_30180[(10)]);
var inst_30148__$1 = f.call(null,inst_30144);
var inst_30149 = cljs.core._EQ_.call(null,inst_30148__$1,inst_30141);
var inst_30150 = cljs.core.keyword_identical_QMARK_.call(null,inst_30141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30151 = ((inst_30149) || (inst_30150));
var state_30180__$1 = (function (){var statearr_30194 = state_30180;
(statearr_30194[(10)] = inst_30148__$1);

return statearr_30194;
})();
if(cljs.core.truth_(inst_30151)){
var statearr_30195_30218 = state_30180__$1;
(statearr_30195_30218[(1)] = (8));

} else {
var statearr_30196_30219 = state_30180__$1;
(statearr_30196_30219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (14))){
var inst_30173 = (state_30180[(2)]);
var inst_30174 = cljs.core.async.close_BANG_.call(null,out);
var state_30180__$1 = (function (){var statearr_30198 = state_30180;
(statearr_30198[(13)] = inst_30173);

return statearr_30198;
})();
var statearr_30199_30220 = state_30180__$1;
(statearr_30199_30220[(2)] = inst_30174);

(statearr_30199_30220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (10))){
var inst_30163 = (state_30180[(2)]);
var state_30180__$1 = state_30180;
var statearr_30200_30221 = state_30180__$1;
(statearr_30200_30221[(2)] = inst_30163);

(statearr_30200_30221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30181 === (8))){
var inst_30144 = (state_30180[(9)]);
var inst_30148 = (state_30180[(10)]);
var inst_30140 = (state_30180[(8)]);
var inst_30153 = inst_30140.push(inst_30144);
var tmp30197 = inst_30140;
var inst_30140__$1 = tmp30197;
var inst_30141 = inst_30148;
var state_30180__$1 = (function (){var statearr_30201 = state_30180;
(statearr_30201[(7)] = inst_30141);

(statearr_30201[(14)] = inst_30153);

(statearr_30201[(8)] = inst_30140__$1);

return statearr_30201;
})();
var statearr_30202_30222 = state_30180__$1;
(statearr_30202_30222[(2)] = null);

(statearr_30202_30222[(1)] = (2));


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
});})(c__28305__auto___30208,out))
;
return ((function (switch__28210__auto__,c__28305__auto___30208,out){
return (function() {
var cljs$core$async$state_machine__28211__auto__ = null;
var cljs$core$async$state_machine__28211__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30203[(0)] = cljs$core$async$state_machine__28211__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var cljs$core$async$state_machine__28211__auto____1 = (function (state_30180){
while(true){
var ret_value__28212__auto__ = (function (){try{while(true){
var result__28213__auto__ = switch__28210__auto__.call(null,state_30180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28213__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__28214__auto__ = e30204;
var statearr_30205_30223 = state_30180;
(statearr_30205_30223[(5)] = ex__28214__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28212__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30224 = state_30180;
state_30180 = G__30224;
continue;
} else {
return ret_value__28212__auto__;
}
break;
}
});
cljs$core$async$state_machine__28211__auto__ = function(state_30180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28211__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28211__auto____1.call(this,state_30180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28211__auto____0;
cljs$core$async$state_machine__28211__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28211__auto____1;
return cljs$core$async$state_machine__28211__auto__;
})()
;})(switch__28210__auto__,c__28305__auto___30208,out))
})();
var state__28307__auto__ = (function (){var statearr_30206 = f__28306__auto__.call(null);
(statearr_30206[(6)] = c__28305__auto___30208);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28307__auto__);
});})(c__28305__auto___30208,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563741478904
