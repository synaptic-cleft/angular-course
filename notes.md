#Typescript
npm i -g typescript
make ts file aan
tsc bla.ts --watch


tslint for best practices

protactor browser headless
chromeOptions in protractor conf meegeven


/Users/maja/gitRepo/ex1/node_modules/protractor/bin
./webdriver-manager update --versions.chrome 77.0.3865.40
in protractor.conf.js, add:
  chromeDriver: '../node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_77.0.3865.40',
ng e2e --webdriverUpdate=false



#components

implements OnInit, OnDestroy
resources opruimen, zoals clearInterval(...)
- intervals (clearInterval(...))
- key-value pair store
HTML5 APIs:
- indexed databases
- web sockets "realtime communicatie met de server"
- web workers (en service workers)
- geolocation, watchPosition
- camera API

generate compoenent:
ng g c components/contact-form


npm i -g json-server
maak databestand in json (je kunt evtl json pipe gebruiken)
json-server people.json --watch
localhost:3000/bla


#web sockets
possibility for homework (or not)

new folder chatserver

npm i --init
(makes package.json)

expresjs.com
expres-ws
npm install express express-ws

paste code from THE internet

node .\index.js

additional: abstract the connectivity to your websocket chat to a service which is an observable

#integration test
