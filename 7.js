function getTel () {
    var prefixArr = ['131','132','134','135','136','137','183','188','186','185'];
    var tel = prefixArr[parseInt(Math.random() * 10)];
    for (var i = 0; i<=8; i++) {
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}
// console.log(getTel());// node 7.js

var startTime = (new Date()).getTime();// 1970年后
var db = connect('aa');
var tempInfo = [];
for (var i=0; i<10000; i++) {
    tempInfo.push({
        longTime: new Date(),
        tel: getTel()
    });
}
db.tel.insert(tempInfo);
var runTime = new Date().getTime() - startTime;
print('run time is' + runTime + 'ms');
