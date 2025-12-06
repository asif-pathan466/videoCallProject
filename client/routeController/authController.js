import User from "../schema/userSchema";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
   try {
    
     const { fullname, username, email, password, gender, profilepic } = req.body;

    const existingUser = await User.findOne({ username })
    if (existingUser) {
        return res.status(500).json({ success: false, message: "this username is already exist" });
    }
     const existingEmail = await email.findOne({email})
     if(existingEmail){
        return res.status(500).json({success: false, message: "invalid email is already available"});
     }

     const hashPassword = await bcrypt.hashSync(password, 10);

     const boyppf = profilepic || `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlppf = profilepic || `https://avatar.iran.liara.run/public/girl?username=${username}`

     const newUser = new User({
        fullname,
        username,
        email,
        password: hashPassword,
        gender,
        profilepic:gender === "male" ? boyppf : girlppf
     })

     if(newUser){
        await newUser.save()
     } else{
        
     }

   } catch (error) {
    
   }
     

}