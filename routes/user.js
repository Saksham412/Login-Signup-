const {Router} = require('express')
const userMiddleware = require('../middleware/admin')
const router = Router()

router.post('/signup', (req,res) => {

})

router.get('/courses', (req,res) => {

})
 
router.post('/courses/:courseId', userMiddleware, (req,res) => {

})

router.post('/purchasedCourses', userMiddleware, (req,res) => {

})

module.exports = router