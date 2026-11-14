const{Builder}=require("selenium-webdriver");
async function node2(){
    let driver=await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://localhost:8081");
        let title=await driver.getTitle();
        console.log("Title",title);
        await new Promise(resolve =>setTimeout(resolve,100));
    }
    finally{
        await driver.quit();
    }
}
node2();