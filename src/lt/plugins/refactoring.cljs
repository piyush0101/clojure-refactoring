(ns lt.plugins.refactoring
  (:require [lt.object :refer [object* behavior*] :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor.pool :as pool]
            [lt.objs.editor :as editor]
            [cljs.reader :as reader]
            [clojure.string :as string]
            [lt.plugins.extract-fn :as extract]))

(defn- replace-with-fn-call
  [cur refactoring]
  (editor/replace-selection cur (str (:call refactoring)))
  (editor/set-line cur (editor/last-line cur) (str (:fn refactoring))))

(cmd/command {:command :refactoring.extract-named-function
              :desc "Refactoring: Extract named function (defn)"
              :exec (fn []
                      (when-let [cur (pool/last-active)]
                        (if-let [function-name (js/prompt "Function Name")]
                          (let [refactoring (extract/extract-and-replace-defn
                                             (symbol function-name)
                                             (extract/into-seq (str (editor/selection cur))))]
                            (replace-with-fn-call cur refactoring)))))})

(cmd/command {:command :refactoring.extract-anonymous-function
              :desc "Refactoring: Extract anonymous function (fn)"
              :exec (fn []
                      (when-let [cur (pool/last-active)]
                        (if-let [function-name (js/prompt "Function Name")]
                          (let [refactoring (extract/extract-and-replace-defn
                                             (symbol function-name)
                                             (extract/into-seq (str (editor/selection cur))))]
                            (replace-with-fn-call cur refactoring)))))})


(cmd/command {:command :refactoring.convert-fn-to-defn
              :desc "Refactoring: Convert anonymous (fn) to named function (defn)"
              :exec (fn []
                      (when-let [cur (pool/last-active)]
                        (if-let [function-name (js/prompt "Function Name")]
                          (let [refactoring (extract/extract-and-replace-anonymous-fn
                                             (symbol function-name)
                                             (reader/read-string (str (editor/selection cur))))]
                            (replace-with-fn-call cur refactoring)))))})
