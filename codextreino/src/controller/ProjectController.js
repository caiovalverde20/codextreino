const Project = require('../model/Project');
const User = require('../model/User');

const ProjectController = {
    newProject(req, res) {
        const newProject = new Project;
        newProject.name = req.body.name
        newProject.members = req.body.members;

        if (!newProject.name || !newProject.members) {
            return res.status(400).json({ msg: "Inclua nome e membros participantes" });

        }

        newProject.save()
            .then((result) => {
                res.send(result)
            })
            .catch((err) => {
                console.log(err);
            })
    },
};

module.exports = ProjectController;