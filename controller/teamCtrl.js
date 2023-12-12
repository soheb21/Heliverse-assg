const TeamModel = require("../Model/teamModel");

exports.createTeam = async (req, res) => {
    try {
        const newTeam = new TeamModel(req.body)
        if (newTeam.isAvailable === true) {
            await newTeam.save();
            res.status(201).json({
                success: true,
                message: "New Team create Successfully"
            })
        }
        res.status(201).json({
            success: true,
            message: "Member is not available"
        })

    } catch (e) {
        console.log("Create Team Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to Create Team"
        })
    }
}

exports.getTeam = async (req, res) => {
    try {
        const { id } = req.params;
        const oneteam = await TeamModel.findById({ _id: id }).populate("members");
        res.status(201).json({
            success: true,
            message: "Fetching Single Team successfull",
            data: oneteam
        })

    } catch (e) {
        console.log("Create user Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to fetch single Team"
        })
    }
}

exports.AllTeam = async (req, res) => {
    try {
        const teams = await TeamModel.find({}).populate("members");
        res.status(201).json({
            success: true,
            message: "Fetching All Teams successfull",
            data: teams
        })

    } catch (e) {
        console.log("Create All Teams Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to Fetch All Teams"
        })
    }
}