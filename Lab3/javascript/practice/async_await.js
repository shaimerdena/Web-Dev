// promise + then
const wait = new Promise( (resolve, reject) =>{
    setTimeout(() => {
        resolve("Hello, Ayau!");
    }, 2000);
});

wait.then(result => console.log(result));


// promise + async/await
function waitOneSecond(){
    return new Promise(resolve => setTimeout(() => resolve("Hello, Ayau!"), 1000));
}

async function run(){
    const result = await waitOneSecond();
    console.log(result);
}

run();


// catch + manual reject
const promiseWithError = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong 😬");
    }, 2000);
});

async function runWithCatch() {
    try {
        const result = await promiseWithError;
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

runWithCatch();