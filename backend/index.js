import app from "./src/app.js";
import envUtils from "./src/utils/envDetails.utils.js";
const port = envUtils.Port;


app.listen(port,()=>{
  console.log(`server is listening at port ${port}`);
})