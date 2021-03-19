//import router, path /servicio donde se usara IBM cloud foundry
const router = require('express').Router()
const path = require('path')

//environment variables
require('dotenv').config();

//import Tone Analyzer from IBM Watson api
const ToneAnalyzerV3 = require('ibm-watson/tone-analyzer/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
const { json } = require('express');

const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  authenticator: new IamAuthenticator({
    apikey: process.env.KEY,
  }),
  serviceUrl: process.env.URL,
});

router.route('/').get((req, res) => {
  msg = `Hello ${req.query.name || "World"} from get request!`;
  res.json({ msg });    
})

//instancia el metodo post donde en el req.body.sendText
//recibe la cadena a evaluar
router.route('/').post((req, res)=>{
    let textAnalyze = req.body.sendText

    if(textAnalyze != null){
          //create the headers for the tone analyzer, it will be a string/text
    const toneParams = {
      toneInput: { 'text': textAnalyze },
      contentType: 'application/json',
    };
    
    //this method returns a json with the tone of the text
    toneAnalyzer.tone(toneParams)
      .then(toneAnalysis => {
          // res.send(JSON.stringify(toneAnalysis, null, 2));
          //store the json in a variable
          let jsonTone = toneAnalysis.result.document_tone;

          res.send(jsonTone);
      })
      .catch(err => {
          res.send('error:', err);
      });
    }else{
      res.send({error: 'Missing sendText tag'})
    }

})



module.exports = router 