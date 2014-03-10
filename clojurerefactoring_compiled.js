if(!lt.util.load.provided_QMARK_('lt.plugins.extract-fn')) {
goog.provide('lt.plugins.extract_fn');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('cljs.reader');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.extract_fn.extract_fn = (function extract_fn(body){return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,"fn")),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,20),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,22)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,body))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,4),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,29)))));
});
lt.plugins.extract_fn.extract_defn = (function extract_defn(name,body){if(!(cljs.core.seq_QMARK_.call(null,body)))
{throw (new lt.plugins.extract_fn.Exception("not a valid lisp form"));
} else
{return cljs.core.concat.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.symbol.call(null,"defn")),cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.with_meta.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,37),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,39)))))))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,13),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,17),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,40))))),body);
}
});
lt.plugins.extract_fn.extract_defn_from_fn = (function extract_defn_from_fn(name,body){if(!(cljs.core.seq_QMARK_.call(null,body)))
{throw (new lt.plugins.extract_fn.Exception("not a valid lisp form"));
} else
{return cljs.core.cons.call(null,new cljs.core.Symbol(null,"defn","defn",-1637452094,null),cljs.core.cons.call(null,name,cljs.core.drop.call(null,1,body)));
}
});
lt.plugins.extract_fn.extract_and_replace_defn = (function extract_and_replace_defn(name,body){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",1013907514),lt.plugins.extract_fn.extract_defn.call(null,name,body),new cljs.core.Keyword(null,"call","call",1016950224),cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name))),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",3954034376)),cljs.core._conj.call(null,cljs.core.List.EMPTY,11),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",2693041432)),cljs.core._conj.call(null,cljs.core.List.EMPTY,28),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",3799845882)),cljs.core._conj.call(null,cljs.core.List.EMPTY,18)))))], null);
});
lt.plugins.extract_fn.extract_and_replace_anonymous_fn = (function extract_and_replace_anonymous_fn(name,body){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",1013907514),lt.plugins.extract_fn.extract_defn_from_fn.call(null,name,body),new cljs.core.Keyword(null,"call","call",1016950224),cljs.core.cons.call(null,name,cljs.core.seq.call(null,cljs.core.nth.call(null,body,1)))], null);
});
lt.plugins.extract_fn.into_seq = (function into_seq(code_as_string){return cljs.reader.read_string.call(null,[cljs.core.str("("),cljs.core.str(code_as_string),cljs.core.str(")")].join(''));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.refactoring')) {
goog.provide('lt.plugins.refactoring');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.plugins.extract_fn');
goog.require('cljs.reader');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.plugins.extract_fn');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
lt.plugins.refactoring.replace_with_fn_call = (function replace_with_fn_call(cur,refactoring){lt.objs.editor.replace_selection.call(null,cur,[cljs.core.str(new cljs.core.Keyword(null,"call","call",1016950224).cljs$core$IFn$_invoke$arity$1(refactoring))].join(''));
return lt.objs.editor.set_line.call(null,cur,lt.objs.editor.last_line.call(null,cur),[cljs.core.str(new cljs.core.Keyword(null,"fn","fn",1013907514).cljs$core$IFn$_invoke$arity$1(refactoring))].join(''));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"refactoring.extract-named-function","refactoring.extract-named-function",4083539064),new cljs.core.Keyword(null,"desc","desc",1016984067),"Refactoring: Extract named function (defn)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;var temp__4090__auto__ = prompt("Function Name");if(cljs.core.truth_(temp__4090__auto__))
{var function_name = temp__4090__auto__;var refactoring = lt.plugins.extract_fn.extract_and_replace_defn.call(null,cljs.core.symbol.call(null,function_name),lt.plugins.extract_fn.into_seq.call(null,[cljs.core.str(lt.objs.editor.selection.call(null,cur))].join('')));return lt.plugins.refactoring.replace_with_fn_call.call(null,cur,refactoring);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"refactoring.extract-anonymous-function","refactoring.extract-anonymous-function",4760714436),new cljs.core.Keyword(null,"desc","desc",1016984067),"Refactoring: Extract anonymous function (fn)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;var temp__4090__auto__ = prompt("Function Name");if(cljs.core.truth_(temp__4090__auto__))
{var function_name = temp__4090__auto__;var refactoring = lt.plugins.extract_fn.extract_and_replace_defn.call(null,cljs.core.symbol.call(null,function_name),lt.plugins.extract_fn.into_seq.call(null,[cljs.core.str(lt.objs.editor.selection.call(null,cur))].join('')));return lt.plugins.refactoring.replace_with_fn_call.call(null,cur,refactoring);
} else
{return null;
}
} else
{return null;
}
})], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"refactoring.convert-fn-to-defn","refactoring.convert-fn-to-defn",2162901552),new cljs.core.Keyword(null,"desc","desc",1016984067),"Refactoring: Convert anonymous (fn) to named function (defn)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var cur = temp__4092__auto__;var temp__4090__auto__ = prompt("Function Name");if(cljs.core.truth_(temp__4090__auto__))
{var function_name = temp__4090__auto__;var refactoring = lt.plugins.extract_fn.extract_and_replace_anonymous_fn.call(null,cljs.core.symbol.call(null,function_name),cljs.reader.read_string.call(null,[cljs.core.str(lt.objs.editor.selection.call(null,cur))].join('')));return lt.plugins.refactoring.replace_with_fn_call.call(null,cur,refactoring);
} else
{return null;
}
} else
{return null;
}
})], null));
}

//# sourceMappingURL=clojurerefactoring_compiled.js.map