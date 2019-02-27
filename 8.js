function getTel () {
    var prefixArr = ['131','132','134','135','136','137','183','188','186','185'];
    var tel = prefixArr[parseInt(Math.random() * 10)];
    for (var i = 0; i<=8; i++) {
        tel += Math.floor(Math.random() * 10);
    }
    return tel;
}

var startTime = (new Date()).getTime();// 1970年后
var db = connect('aa');

var result = db.tel.find({tel: '131889146358'});//查询这条电话号
result.forEach(res => printjson(res));

var runTime = new Date().getTime() - startTime;
print('run time is' + runTime + 'ms');// 查询时间11ms

db.tel.ensureIndex({tel: 1})// 建立完索引后查询7ms