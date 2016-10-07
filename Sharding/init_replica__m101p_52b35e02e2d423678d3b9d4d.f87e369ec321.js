

// _id m101 is the name of replica set and priority:0 is so that it can never be elecetd as primary
config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27017" , priority:0 , slaveDelay:5 },
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"} ]
};

rs.initiate(config);
rs.status();



