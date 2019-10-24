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