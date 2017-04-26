How to build:
1) Download the latest LTS version of Node.js
- On Windows: https://nodejs.org/en/download/
- On MAC: ‘brew install node’
2) ‘npm install -g cordova ionic’ in Party_Pass_ionic
3) ‘npm install’ in Party_Pass_ionic/partypass
4) ‘npm install’ in Party_Pass_ionic/server

How to run:
1) Download the latest version of MongoDB
- On Windows: https://www.mongodb.com/download-center?jmp=nav#community
- On MAC: ‘brew install mongodb’
2) Create directory /data/db with ‘mkdir -p /data/db’
3) Run ‘mongod.exe’ in Party_Pass_ionic
4) Run ‘node server.js’ in Party_Pass_ionic/server
5) Run ‘ionic serve’ in Party_Pass_ionic/partypass
6) Go to http://localhost:8100/ionic-lab
7) Valid Login Credentials:
- user1/pass1
- user2/pass2
- user3/pass3
- admin/adminpass (admin displays the admin view)

How to test:
1) Run ‘npm install -g karma-cli’ in Party_Pass_ionic/partypass
2) Run ‘npm install angular-cli --save-dev’ in Party_Pass_ionic/partypass
3) Run ‘npm install codecov --save-dev’ in Party_Pass_ionic/partypass
4) Run ‘npm install jasmine-core --save-dev’ in Party_Pass_ionic/partypass
5) Run ‘npm install jasmine-spec-reporter --save-dev’ in Party_Pass_ionic/partypass
6) Run ‘npm install karma --save-dev’ in Party_Pass_ionic/partypass
7) Run ‘npm install karma-chrome-launcher --save-dev’ in Party_Pass_ionic/partypass
8) Run ‘npm install karma-jasmine --save-dev’ in Party_Pass_ionic/partypass
9) Run ‘npm install karma-mocha-reporter --save-dev’ in Party_Pass_ionic/partypass
10) Run ‘npm install karma-remap-istanbul --save-dev’ in Party_Pass_ionic/partypass
11) Run ‘npm install ts-node --save-dev’ in Party_Pass_ionic/partypass
12) Run ‘npm install tslint --save-dev’ in Party_Pass_ionic/partypass
13) Run ‘npm install tslint-eslint-rules --save-dev’ in Party_Pass_ionic/partypass
14) Run ‘npm install @types/jasmine --save-dev’ in Party_Pass_ionic/partypass
15) Run ‘npm install @types/node --save-dev’ in Party_Pass_ionic/partypass
16) Run ‘npm test’ in Party_Pass_ionic
