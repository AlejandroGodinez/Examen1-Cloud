//import router, path /servicio donde se usara IBM cloud foundry
const router = require('express').Router()
const path = require('path')

router.route('/').get((req, res) => {
    //debe abrir de manera estatica el html index
    res.sendFile(path.join(__dirname+'../../../src/html/index.html'));
  })

router.route('/').post((req, res)=>{

})



module.exports = router 