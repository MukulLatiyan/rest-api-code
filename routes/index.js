var express = require('express');
var router = express.Router();
const lead = require('../controllers/leads.controller')

router.post('/api/leads',lead.create)

router.get('/api/leads/:lead_id',lead.getById)

router.put('/api/leads/:lead_id',lead.update)

router.delete('/api/leads/:lead_id',lead.delete)

router.put('/api/mark_lead/:lead_id',lead.special)

module.exports = router;
