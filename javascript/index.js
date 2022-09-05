function add(num1,num2){
    return (num1+num2);
};

function subtract(num1,num2){
    return(num1-num2);
}

function multiply(num1,num2){

}

function divide(num1,num2){

}

function addTest(){
    const test1 = (add(1,2)===3)?`2 Positive integer test PASSED`:`2 Positive integer test FAILED`;
    const test2 = (add(-1,-1)===-2)?`2 Negative integer test PASSED`:`2 Negative integer test FAILED`;
    const test3 = (add(-1,3)===2)?`1 Negative & 1 Positive integer test PASSED`:`1 Negative & 1 Positive integer test FAILED`;
    const test4 = (add(1.5,0.5)===2)?`2 Posiitive double test PASSED`:`2 Positive double test FAILED`;
    const test5 = (add(-0.5,-1.5)===-2)?`2 Negative double test PASSED`:`2 Negative double test FAILED`;
    const test6 = (add(-0.5,1)===0.5)?`1 Positive double & 1 Negative double test PASSED`:`1 Positive double & 1 Negative double test FAILED`;
    const result=[["test1",test1],["test2",test2],["test3",test3],["test4",test4],["test5",test5],["test6",test6]];
    console.table(result);
}

function subtractTest(){
    const test1 = (subtract(2,1)===1)?`2 Positive integer test PASSED`:`2 Positive integer test FAILED`;
    const test2 = (subtract(-1,-1)===-0)?`2 Negative integer test PASSED`:`2 Negative integer test FAILED`;
    const test3 = (subtract(-1,3)===-4)?`1 Negative & 1 Positive integer test PASSED`:`1 Negative & 1 Positive integer test FAILED`;
    const test4 = (subtract(1.5,0.5)===1)?`2 Posiitive double test PASSED`:`2 Positive double test FAILED`;
    const test5 = (subtract(-0.5,-1.5)===1)?`2 Negative double test PASSED`:`2 Negative double test FAILED`;
    const test6 = (subtract(-0.5,1)===-1.5)?`1 Positive double & 1 Negative double test PASSED`:`1 Positive double & 1 Negative double test FAILED`;
    const result=[["test1",test1],["test2",test2],["test3",test3],["test4",test4],["test5",test5],["test6",test6]];
    console.table(result);
}

function multiplyTest(){

}

function divideTest(){

}