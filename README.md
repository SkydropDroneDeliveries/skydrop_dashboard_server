# skydrop_dashboard_server

## **Introduction**
SkyDrop is an automated UAV delivery system designed for a specific apartment building. This system allows parcels to be delivered from the apartment gate/security room to the destination apartment balcony by a UAV. </br>
The complete system consist of an autonomous UAV system and a dashboard to send commands to the UAV. This repository contains the implementation related to the backend of the dashboard. </br>

**Technologies:** NodeJS | Express

<!-- Brunner et al. -->
This work is based on the work done by Brunner et al., 2019[^1][^2]. In our project, we are trying to improve their work further more by considering the suggestions mentioned by them in their research paper along with our own ideas.</br>

[^1]: **Research Paper of Brunner et al. work:** [Link to the research paper](https://arxiv.org/pdf/1809.08022.pdf)</br>
Brunner, G., Szebedy, B., Tanner, S. and Wattenhofer, R., 2019, June. The urban last mile problem: Autonomous drone delivery to your balcony. In 2019 international conference on unmanned aircraft systems (icuas) (pp. 1005-1012). IEEE.

[^2]: **GitHub Repository of Brunner et al. work:** [Link to the repository](https://github.com/szebedy/autonomous-drone)

## **Setting up the local environment**
The following tools and softwares should be installed in the local machine.
- Node.js v16.x: ([NodeJS installation instructions](https://github.com/nodesource/distributions/blob/master/README.md#:~:text=install%20%2Dy%20nodejs-,Node.js%20v16.x%3A,-%23%20Using%20Ubuntu%0Acurl))

Make sure that you have successfully installed both Node and NPM by running ```node -v``` and ```npm --version```.

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

**Step 03:** Running the project
```
cd ~/Skydrop/skydrop_dashboard_server
npm install
npx nodemon app.js
```
The server will start on port 4000 (http://localhost:4000).