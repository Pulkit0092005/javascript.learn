function test1(cb) {
    setTimeout( ()=> {
        console.log('test1');
        cb();
    }, 2000);
}
function test2(cb) {
    setTimeout( ()=> {
        console.log('test2');
        cb();
    }, 1000);
}
function test3(cb) {
    setTimeout( ()=> {
        console.log('test3');
        cb();
    }, 500);
}
function test4(cb) {
    setTimeout( ()=> {
        console.log('test4');
        cb();
    }, 250);
}
   
test1(() => {
    test2(() => {
        test3(() => {
            test4();
        });
    });
}); 