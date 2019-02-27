db.user.find(
    {age: {$gte: 15, $lte: 20}},
    {name: true, age:true, _id: false}// true代表显示；false代表不显示
);

db.user.find(
    {age: {$in: [15, 20]}},
    {name: true, age:true, _id: false}// true代表显示；false代表不显示
);

db.user.find(
    {
        $or: [
            {age: {$gte: 15}},
            {'pc.brand': 'apple'}
        ]
    },
    {name: true, age:true, _id: false}// true代表显示；false代表不显示
);

db.user.find(
    {age: {$gte: 15, $lte: 20}},
    {name: true, age:true, _id: false}// true代表显示；false代表不显示
).limit(1).skip(0).sort(-1);