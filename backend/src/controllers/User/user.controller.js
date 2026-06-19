import ResponseUtils from "../../utils/response.utils";

class UserController {
    #responseUtils;
    response(res){
        this.responseUtils = new ResponseUtils(res);
    }
    async addUser(req,res){
        try{
            
        }
        catch(e){
            return this.response(res).sendErrorResponse(e);
        }
    }
}
export default UserController;