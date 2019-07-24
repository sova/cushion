(defproject cushion "0.0.1"
  :description "electriCushion http server"
  :url "https://electriCushion.com/"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [org.clojure/tools.namespace "0.2.11"]
                 [ring/ring-devel "1.1.8"]
		             [http-kit "2.3.0"]]
  :plugins [[lein-ring "0.12.5"]]
  :main cushion.handler
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}})
