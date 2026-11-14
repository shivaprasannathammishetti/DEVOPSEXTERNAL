const{Builder}=require("selenium-webdriver");
async function node1(){
    let driver=await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://localhost:8081");
        console.log("application opens");
        await new Promise(resolve =>setTimeout(resolve,100000));
    }
    finally{
        await driver.quit();
    }
}
node1();