const {Builder,By}=require("selenium-webdriver");
async function testapplication(){
    let driver=await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("http://www.google.com");
        let searchBox=await driver.findElement(By.name("q"));
        await searchBox.sendKeys("selenium testing");
        await searchBox.sendKeys("\n");
        console.log("testing completed");
        await new Promise(resolve =>setTimeout(resolve,10000));
    }
    catch(error){
        console.log("find error:",error);
    }
    finally{
        await driver.quit();
    }
}
testapplication();