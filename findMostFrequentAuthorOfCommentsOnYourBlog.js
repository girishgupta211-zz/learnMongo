db.posts.aggregate([{ $unwind : '$comments'  } , { $group : { _id: '$comments.author' , count : { $sum: 1 } } } , {
    $sort : { count: -1 } }  ])
{ "_id" : "Elizabet Kleine", "count" : 503 }
{ "_id" : "Carli Belvins", "count" : 480 }
{ "_id" : "Mariette Batdorf", "count" : 478 }
{ "_id" : "Gwyneth Garling", "count" : 477 }
{ "_id" : "Eugene Magdaleno", "count" : 475 }
{ "_id" : "Corliss Zuk", "count" : 472 }
{ "_id" : "Leonida Lafond", "count" : 472 }
{ "_id" : "Milan Mcgavock", "count" : 472 }
{ "_id" : "Dusti Lemmond", "count" : 471 }
{ "_id" : "Sadie Jernigan", "count" : 471 }
{ "_id" : "Cassi Heal", "count" : 467 }
{ "_id" : "Devorah Smartt", "count" : 466 }
{ "_id" : "Tambra Mercure", "count" : 465 }
{ "_id" : "Tressa Schwing", "count" : 465 }
{ "_id" : "Lady Lefevers", "count" : 464 }
{ "_id" : "Grady Zemke", "count" : 464 }
{ "_id" : "Malisa Jeanes", "count" : 464 }
{ "_id" : "Sanda Ryba", "count" : 461 }
{ "_id" : "Lucinda Vanderburg", "count" : 460 }
{ "_id" : "Jenise Mcguffie", "count" : 459 }

> db.posts.aggregate([{ $unwind : '$comments'  } , { $group : { _id: '$comments.author' , count : { $sum: 1 } } } , {
> $sort : { count:1 } } ])
{ "_id" : "Mariela Sherer", "count" : 387 }
{ "_id" : "Tawana Oberg", "count" : 396 }
{ "_id" : "Kayce Kenyon", "count" : 400 }
{ "_id" : "Maren Scheider", "count" : 401 }
{ "_id" : "Tamika Schildgen", "count" : 404 }
{ "_id" : "Jessika Dagenais", "count" : 406 }
{ "_id" : "Zachary Langlais", "count" : 406 }
{ "_id" : "Kaila Deibler", "count" : 406 }
{ "_id" : "Marcus Blohm", "count" : 408 }
{ "_id" : "Tandra Meadows", "count" : 410 }
{ "_id" : "Fleta Duplantis", "count" : 411 }
{ "_id" : "Joaquina Arbuckle", "count" : 413 }
{ "_id" : "Shin Allbright", "count" : 413 }
{ "_id" : "Salena Olmos", "count" : 415 }
{ "_id" : "Merissa Mann", "count" : 415 }
{ "_id" : "Edgar Sarkis", "count" : 416 }
{ "_id" : "Carli Ector", "count" : 417 }
{ "_id" : "Tonisha Games", "count" : 418 }
{ "_id" : "Synthia Labelle", "count" : 418 }
{ "_id" : "Jesusa Rickenbacker", "count" : 418 }

