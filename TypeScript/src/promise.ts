const start = (callback) => {
    setTimeout(() => {
        callback("Hey in 1s");
        setTimeout(()=>{
            callback("Hey in 2s");
            setTimeout(()=>{
                callback("Hey in 3s");
            }, 1000);
        }, 1000);
    }, 1000);
};

start(console.log);