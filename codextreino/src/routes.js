const router = require('express').Router();
const UserController = require('@controller/UserController');
const ProjectController = require('@controller/ProjectController');


router.post('/signup', UserController.signup);
router.get('/users', UserController.listUsers);
router.get('/user/:id', UserController.listUser);
router.delete('/user/:id', UserController.deleteUser);
router.post('/findbyname', UserController.findByName);

router.post('/newproject', ProjectController.newProject);


module.exports = router;
