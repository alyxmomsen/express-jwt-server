const UserModel = require("../../../database/models");


class RouterController {

    async registration (req, res , next) {
        try {

            const body = req.body ;
        
            const {username , password } = body ;
    
            if(username && password) {
    
                const newUser = new UserModel({
                    username ,
                    password ,
                });
    
                const result = await newUser.save();
    
                return res.status(200).json({message:'user saved'})
                
            }
            else {
                return res.status(401).json({message:'user no saved'})
    
            }
        }
        catch (err) {
            
            return res.status(500).json({message:'error on server'})
        }
    }

    async authorization (req, res , next) {

        const headers = req.headers ;

        res.status(200).json({message:'response' , payload:headers});


    }
}


const routerController =  new RouterController ;

module.exports = routerController ;