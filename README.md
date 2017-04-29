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
Release: So this may or may not work, this was what Will said will make it work but we're not too sure. As far as our testing went without actually getting a test suite, we used console statements along the way to verify objects being passed through and we checked all of the functionality by exploratory testing.
1) Run ‘npm test’ in Party_Pass_ionic

How to use:
1) Enter a valid account in login ("user1 - pass1", "user2 - pass2", "user3 - pass3", "admin - adminpass")
2) If in admin view, you can view the parties of the area on the main page. You can also click the map to view the parties on the map. If you select a party from the list, then you can view in in order to optionally edit it or remove it.
3) If in user view, you can view your parties, select them to view them specifically in order to edit/delete them, or add another one using the button on the main page
