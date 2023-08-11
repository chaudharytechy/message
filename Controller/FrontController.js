const UserModel = require("../model/user")
const nodemailer=require("nodemailer")

// const userData = {
//     username: 'JohnDoe',
//     email: 'john.doe@example.com',
//     // Add other user data as needed
//   };

class FrontController {

    static home = (req, res) => {
        res.render("home")
    }

                    

    // View userData
    static user_dataget = async (req, res) => {
        // console.log("hello view")
        try {
            const user = await UserModel.find()
            // console.log(user)

            res.status(201).json({
                message: "data get",
                userdata: user
            })

        } catch (error) {
            console.log(error)
        }
    }

//delete userDate
    static user_datadelete = async (req, res) => {
        
    try {
        const user=await UserModel.findByIdAndDelete(req.params.id)
        res.status(201).json({
            message: "data delete",
        })

    } catch (error) {
        console.log(error)
    }
    }

      
}
module.exports = FrontController