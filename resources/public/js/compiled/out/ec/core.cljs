(ns ec.core
    (:require [rum.core :as rum]))

(enable-console-print!)

(println "This text is printed from src/ec/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:made-by "Vaso Vukotic"
                          :aka "sova"
                          :twitter "_vaso"
                          :app-name "electriCushion online magazine"
                          :current-view "reviews"}))


(rum/defc main-cush []
  [:div#maincush
   "electriCushion is made possible by generous readers like you."])

(rum/mount (main-cush)
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
