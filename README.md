# skydrop_dashboard_server

## **Introduction**
SkyDrop is an automated UAV delivery system designed for a specific apartment building. This system allows parcels to be delivered from the apartment gate/security room to the destination apartment balcony by a UAV. </br>
The complete system consist of an autonomous UAV system and a dashboard to send commands to the UAV. This repository contains the implementation related to the backend of the dashboard. </br>

**Technologies:** NodeJS | Express | MongoDB

<!-- Brunner et al. -->
This work is based on the work done by Brunner et al., 2019[^1][^2]. In our project, we are trying to improve their work further more by considering the suggestions mentioned by them in their research paper along with our own ideas.</br>

[^1]: **Research Paper of Brunner et al. work:** [Link to the research paper](https://arxiv.org/pdf/1809.08022.pdf)</br>
Brunner, G., Szebedy, B., Tanner, S. and Wattenhofer, R., 2019, June. The urban last mile problem: Autonomous drone delivery to your balcony. In 2019 international conference on unmanned aircraft systems (icuas) (pp. 1005-1012). IEEE.

[^2]: **GitHub Repository of Brunner et al. work:** [Link to the repository](https://github.com/szebedy/autonomous-drone)

## **Setting up the local environment**
The following tools and softwares should be installed in the local machine.
- Node.js v16.x: ([NodeJS installation instructions](https://github.com/nodesource/distributions/blob/master/README.md#:~:text=install%20%2Dy%20nodejs-,Node.js%20v16.x%3A,-%23%20Using%20Ubuntu%0Acurl))</br>
Make sure that you have successfully installed both Node and NPM by running ```node -v``` and ```npm --version```.
- MongoDB Standalone: ([MongoDB installation instructions](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/))
- MongoDB Compass ([MongoDB Compass installation instructions](https://www.mongodb.com/try/download/compass?tck=docs_compass&_ga=2.179078564.140891380.1642101478-527888271.1641978752&_gac=1.60875486.1641984136.CjwKCAiAlfqOBhAeEiwAYi43F3-4N5fhL170GyVRAZDINet_cOdonigOWI7g0o0qxZ3IpXZD8nlbIBoCF9wQAvD_BwE))

## **Instructions to setup the database on the local machine**
**Step 01:** Verify that MongoDB is started successfully
```
sudo systemctl status mongod
```
If MongoDB isn't started, start MongoDB. (Follow the MongoDB installation instructions)
```
sudo systemctl start mongod
``` 

**Step 02:** Setting up the database</br>
Open MongoDB Compass and click on ```CONNECT``` (without mentioning any connection string) to connect to the standalone DB.</br>
Create a database named ```skydrop```.</br>
Create a collection named ```apartments```.</br>
Then click on ```ADD DATA``` and import the ```apartments``` file (can be found inside ```database``` directory in this project) as a json file.

## **Instructions to clone and run the project on the local machine**
**Step 01:** Create a folder to hold the backend and the frontend projects of SkyDrop
```
mkdir ~/Skydrop
```
**Step 02:** Clone the project
```
cd ~/Skydrop
git clone git@github.com:SkydropDroneDeliveries/skydrop_dashboard_server.git
```

**NOTE:** Make sure that the ```autonomousGPSIMU_mongoDB.py``` python script is inside the mentioned path on the variable ```SCRIPT_NAME``` in ```app.js``` file.

**Step 03:** Running the project
```
cd ~/Skydrop/skydrop_dashboard_server
npm install
npx nodemon app.js
```
The server will start on port 4000 (http://localhost:4000).