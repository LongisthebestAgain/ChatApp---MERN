import User from "../models/user.model.js";
export const getUsersForSidebar = async (req, res) => {
    try {
        // const loggedInUserId = req.user._id; // get the login user id from the request object

        const allUsers = await User.find().select("-password") // find all the users except the login user

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUsersForSidebar controller: ", error.message);
        res.status(500).json({ error: "internal server error" });
    }

}