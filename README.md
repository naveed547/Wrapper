# How to run Wrapper
-----

This example demos a basic host application loading from different remote component.

- UIComponents standalone application which exposes baisc UI Button component.
- DomainComponents standalone application which exposes enhanced UI Button component.
- Page1 standalone application which exposes Page1 module built using shared remote UIComponents and DomainComponents.
- Page2 standalone application which exposes Page2 module built using shared remote UIComponents and DomainComponents.
- LibApp holds all the node_modules, store and context used across the remote

## Running Demo
1. Clone LibApp Remote as a sibling folder to Wrapper
  Under LibApp
    * npm install
    * npm start
2. Clone UIComponents Remote as a sibling folder to Wrapper
  Under UIComponents
    * npm install
    * npm start
3. Clone DomainComponnents Remote as a sibling folder to Wrapper
  Under DomainComponnents
    * npm install
    * npm start
4. Clone Page1 Remote as a sibling folder to Wrapper
  Under Page1
    * npm install
    * npm start
5. Clone Page2 Remote as a sibling folder to Wrapper
  Under Page2
    * npm install
    * npm start
6. Under Wrapper Remote
  * npm install
  * npm start


* localhost:8085 (STANDALONE REMOTE LibApp holds all lib, store and context)
* localhost:8082 (STANDALONE REMOTE DomainComponents)
* localhost:8083 (STANDALONE REMOTE UIComponents)
* localhost:8084 (STANDALONE REMOTE Page1)
* localhost:8085 (STANDALONE REMOTE Page2)
* localhost:8086 (HOST Wrapper act as a shell)
