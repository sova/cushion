(ns cushion.handler
  (:require [ring.middleware.reload :as reload]
            [compojure.handler :refer [site]]
            [compojure.route :as route]
            [compojure.core :refer :all]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [org.httpkit.server :refer [run-server]]))

(defn in-dev? [_] true)

;(defroutes app-routes
;  (GET "/" [] "Hello World")
;  (route/not-found "Not Found"))

;(def app
;  (wrap-defaults app-routes site-defaults))




(defroutes all-routes
  (GET "/" [] (slurp "resources/public/index.html"))
  (route/resources "/")

  (route/not-found "<p>Page not found.</p>")) ;; all other, return 404;;


(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [port 7778
	handler (if (in-dev? args)
                  (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
                  (site all-routes))]
    (println "running server on localhost:" port)
    (run-server handler {:port port})))
