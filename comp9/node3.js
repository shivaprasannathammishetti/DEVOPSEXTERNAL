const {Builder}=require("selenium-webdriver");
async function node3(){
    let driver=await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://localhost:8081");
        let currentUrl=await driver.getCurrentUrl();
        if(currentUrl=="http://localhost:3000")
            console.log("yaa you find the correct url");
        else
            console.log("wrong url");
        await new Promise(resolve =>setTimeout(resolve,100000));
    }
    finally{
        await driver.quit();
    }
}