class ResponseUtils{
    #res;
    constructor(res){
        this.res = res;
    }
    sendErrorResponse(error){
        return this.res.status(400).send({
            status_cd:0,
            error:error.message
        });
    }
    sendSuccessResponse(result){
        return this.res.status(400).send({
            status_cd:1,
            data:result
        });
    }
}
export default ResponseUtils;