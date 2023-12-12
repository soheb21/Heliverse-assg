const UserModel = require("../Model/userModel")


exports.createUser = async (req, res) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json({
            success: true,
            message: "User create Successfully"
        })
    } catch (e) {
        console.log("Create user Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to Create User"
        })
    }
}

exports.AllUsers = async (req, res) => {
    try {
        let conditions = {};
        let query = UserModel.find(conditions);
        if (req.query.domain) {
            query = query.find({ domain: req.query.domain })
        }
        if (req.query.gender) {
            query = query.find({ gender: req.query.gender })
        }
        if (req.query.isAvailable) {
            query = query.find({ isAvailable: req.query.isAvailable })
        }
        if (req.query.s) {
            query = query.find({ username: req.query.s })
        }
        if (req.query._page && req.query._limit) {
            const pageSize = req.query._limit;
            const page = req.query._page;
            query = query.skip(pageSize * (page - 1)).limit(pageSize);
        }
        const users = await query.exec();
        res.status(201).json({
            success: true,
            message: "Fetching all User successfull",
            data: users
        })


    } catch (e) {
        console.log("Create user Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to Create User"
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json({
            success: true,
            message: "User updated Successfully",
            data: user
        })
    } catch (e) {
        console.log("Update user Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to update User"
        })
    }
}
exports.SingleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById({ _id: id });
        if (!user) {
            res.status(201).json({
                success: true,
                message: "User Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "User fetched Successfully",
            data: user
        })
    } catch (e) {
        console.log("single user Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to fetch single User"
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findByIdAndDelete({ _id: id });
        if (!user) {
            res.status(201).json({
                success: true,
                message: "User Not Found",
            })
        }
        res.status(201).json({
            success: true,
            message: "User deleted Successfully",
        })
    } catch (e) {
        console.log("delete user Error", e)
        res.status(401).json({
            success: false,
            message: "Failed to delete User"
        })
    }
}