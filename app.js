const express = require('express');
const {spawn} = require('child_process');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT | 4000;

const SCRIPT_NAME = '~/catkin_ws/src/skydrop/src/autonomous_navigation/autonomousGPSIMU_mongoDB.py'

app.use(cors())
// app.use(fileuploader({createParentPath: true}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.set('views',path.join(__dirname,'views'));
// app.use("/",routes)

app.get('/startNav', (req,res) => {
    // spawn new child process to call the python script
    const APARTMENT_NO = req.query.apartmentNo;
    var dataToSend;
    const pythonChild = spawn('python',[SCRIPT_NAME,APARTMENT_NO]);

    pythonChild.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        dataToSend = data.toString();
      });
      
    pythonChild.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
    
    pythonChild.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.send(dataToSend);
    });
});

const server = app.listen(PORT,function(){
    console.log('Server started on port 4000');
});