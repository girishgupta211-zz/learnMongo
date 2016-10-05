The documents look like this:

{
    "_id" : ObjectId("50b59cd75bed76f46522c392"),
        "student_id" : 10,
        "class_id" : 5,
        "scores" : [
        {
            "type" : "exam",
            "score" : 69.17634380939022
        },
        {
            "type" : "quiz",
            "score" :
                61.20182926719762
        },
        {
            "type"
                :
                "homework",
            "score"
                :
                73.3293624199466
        },
        {
            "type"
                :
                "homework",
            "score"
                :
                15.206314042622903
        },
        {
            "type"
                :
                "homework",
            "score"
                :
                36.75297723087603
        },
        {
            "type"
                :
                "homework",
            "score"
                :
                64.42913107330241
        }
    ]
}

There are documents for each student (student_id) across a variety of classes (class_id). Note that not all students in
the same class have the same exact number of assessments. Some students have three homework assignments, etc.
Your task is to calculate the class with the best average student performance. This involves calculating an average for
each student in each class of all non-quiz assessments and then averaging those numbers to get a class average. To be
clear, each student's average includes only exams and homework grades. Don't include their quiz scores in the
calculation.
What is the class_id which has the highest average student performance?
Hint/Strategy: You need to group twice to solve this problem. You must figure out the GPA that each student has achieved
in a class and then average those numbers to get a class average. After that, you just need to sort. The class with the
lowest average is the class with class_id=2. Those students achieved a class average of 37.6
You can download the handout and perform your analysis on your machine with

mongoimport --drop -d test -c grades grades.json


Below, choose the class_id with the highest average student average.

Please use the Aggregation pipeline to solve this problem.


> db.grades.aggregate([ { '$unwind' : '$scores' } ,{ $match : { 'scores.type' : { $nin : ['quiz'] } } } , { $group : {
> _id : { class_id : '$class_id', student_id : '$student_id' } , score : { $avg :  '$scores.score' } , type : {
> $addToSet : '$scores.type' }  } } , { $group : { _id: '$_id.class_id' , avg: { $avg : '$score' } } } , {  $sort : {
> avg: 1  } } , { $project : { _id : 0, class_id : '$_id' , grade : '$avg' } } ])
{ "class_id" : 2, "grade" : 37.61742117387635 }
{ "class_id" : 12, "grade" : 40.62345969481145 }
{ "class_id" : 8, "grade" : 41.30388381000019 }
{ "class_id" : 28, "grade" : 41.59824801397288 }
{ "class_id" : 30, "grade" : 42.71200726236121 }
{ "class_id" : 18, "grade" : 43.40692681712815 }
{ "class_id" : 22, "grade" : 43.477605420896786 }
{ "class_id" : 25, "grade" : 43.998820032401284 }
{ "class_id" : 21, "grade" : 45.41539323359457 }
{ "class_id" : 15, "grade" : 47.2200946663058 }
{ "class_id" : 10, "grade" : 47.663462173280614 }
{ "class_id" : 6, "grade" : 48.41485242956823 }
{ "class_id" : 7, "grade" : 48.87708798013475 }
{ "class_id" : 29, "grade" : 49.30544060269724 }
{ "class_id" : 11, "grade" : 49.952812365344215 }
{ "class_id" : 27, "grade" : 50.58111308566053 }
{ "class_id" : 19, "grade" : 50.59071928635092 }
{ "class_id" : 0, "grade" : 50.64317695848949 }
{ "class_id" : 3, "grade" : 51.7742498662982 }
{ "class_id" : 23, "grade" : 51.932848307630394 }


> db.grades.aggregate([ { '$unwind' : '$scores' } ,{ $match : { 'scores.type' : { $nin : ['quiz'] } } } , { $group : {
> _id : { class_id : '$class_id', student_id : '$student_id' } , score : { $avg :  '$scores.score' } , type : {
> $addToSet : '$scores.type' }  } } , { $group : { _id: '$_id.class_id' , avg: { $avg : '$score' } } } , {  $sort : {
> avg: -1  } } , { $project : { _id : 0, class_id : '$_id' , grade : '$avg' } } ])
{ "class_id" : 1, "grade" : 64.50642324269174 }
{ "class_id" : 5, "grade" : 58.084487676135495 }
{ "class_id" : 20, "grade" : 57.63098345489891 }
{ "class_id" : 26, "grade" : 56.06918278769094 }
{ "class_id" : 9, "grade" : 55.56861693456624 }
{ "class_id" : 14, "grade" : 55.36017373346245 }
{ "class_id" : 24, "grade" : 53.6103459780166 }
{ "class_id" : 16, "grade" : 53.458335393624246 }
{ "class_id" : 13, "grade" : 52.738286239952366 }
{ "class_id" : 4, "grade" : 52.65541561065859 }
{ "class_id" : 17, "grade" : 52.42469177746091 }
{ "class_id" : 23, "grade" : 51.932848307630394 }
{ "class_id" : 3, "grade" : 51.7742498662982 }
{ "class_id" : 0, "grade" : 50.64317695848949 }
{ "class_id" : 19, "grade" : 50.59071928635092 }
{ "class_id" : 27, "grade" : 50.58111308566053 }
{ "class_id" : 11, "grade" : 49.952812365344215 }
{ "class_id" : 29, "grade" : 49.30544060269724 }
{ "class_id" : 7, "grade" : 48.87708798013475 }
{ "class_id" : 6, "grade" : 48.41485242956823 }


Here is a possible answer using the Aggregation Framework:

db.grades.aggregate( [
{ $unwind : "$scores" },
{ $match : { "scores.type" : { $ne : "quiz" } } },
{ $group : { _id : { student_id : "$student_id", class_id : "$class_id" }, avg : { $avg : "$scores.score" } } },
{ $group : { _id : "$_id.class_id", avg : { $avg : "$avg" } } },
{ $sort : { "avg" : -1 } },
{ $limit : 5 } ] )

Here's an explanation of what's happening in each stage of the pipleline:

    We use $unwind to deconstruct the scores array into separate documents.
    We use $match to filter out documents that aren't quizzes, leaving us with homeworks and exams.
    We use $group to calculate the GPA for each student in the class.
    We process this result with another $group to compute the class average.
    We sort the results by highest average descending.
    Finally, we limit our results to classes with the top 5 averages.

