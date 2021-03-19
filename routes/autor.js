const router = require('express').Router()

// Contiene un path "/autor" que retorna un JSON con un tag "alumno":<iniciales-alumno> otro tag "servicio":"Cloud Foundry en IBM Cloud"
router.route('/').get((req, res) => {
  res.send(
      {
          alumno: 'AGR',
          servicio: 'Cloud Foundry en IBM Cloud'
      }
  );
})

module.exports = router