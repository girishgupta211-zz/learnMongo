# What is MongoDB:
* MongoDB is an open source database that uses a document-oriented data model.

* MongoDB is one of several database types to arise in the mid-2000s under the NoSQL banner. Instead of using tables and rows as in relational databases, MongoDB is built on an architecture of collections and documents. Documents comprise sets of key-value pairs and are the basic unit of data in MongoDB. Collections contain sets of documents and function as the equivalent of relational database tables

* Like other NoSQL databases, MongoDB supports dynamic schema design, allowing the documents in a collection to have different fields and structures. The database uses a document storage and data interchange format called BSON, which provides a binary representation of JSON-like documents. Automatic sharding enables data in a collection to be distributed across multiple systems for horizontal scalability as data volumes increase.

# Course Duration:
 this is 7 weeks course
 
# Prerquisites:
  Basic python and relational database

# Course Structure:
```javascript

Chapter 1: Introduction
    What is MongoDB?
    Overview of Building an App with MongoDB
    Installing MongoDB (mac)
    Installing MongoDB (windows)
    Installing MongoDB (Linux)     
    the Mongo Shell, 
    JSON 
    BSON
     Intro to Creating and Reading Documents
    Application Architecture Overview
    Installing Python and basics of python:    
    Python Lists, Working with Dicts,  Dicts and Lists Together , for Loops with Lists,  for Loops with Dicts , while Loops, Function Calls, Exception Handling
     overview of blog project
    Blog in Relational Tables    

Chapter 2: CRUD
     CRUD (Creating, Reading and Updating Data) - Mongo shell
     query operators
     update operators and a few commands
    Creating Documents
    The _id Field
    Reading Documents
    Comparison Operators
    Element Operators
    Logical Operators
    Regex Operator
    Array Operators
    Updating Documents
    PyMongo: find, find_one and Cursors    
    PyMongo: Projecting Results from Find
    PyMongo: Using $gt and $lt
    PyMongo: Using a regex
    PyMongo: Sort, Skip and Limit
    PyMongo: Sort, Final Thoughts
    PyMongo: Insert_one
    PyMongo: Insert_many
    PyMongo: Updating
    PyMongo: Updating Data using Replace
    PyMongo: Upserts
    PyMongo: Removing Data
    PyMongo: find_and_modify
    Blog: User Interface
    Blog: Session Management
    Blog, Internals
    


Chapter 3: Schema Design    
    MongoDB Schema Design
    Relational Normalization
    Mongo Design for Blog
    Alternative Schema for Blog
    Living Without Constraints
    Living Without Transactions
    One to One Relations
    One to Many Relations
    Many to Many Relations
    Benefits of Embedding
    Trees
    When to Denormalize    


Chapter 4: Performance
    Storage Engines: Introduction
    Storage Engines: MMAPv1
    Storage Engines: WiredTiger
    Indexes
    Creating Indexes
    Discovering (and Deleting) Indexes
    Multikey Indexes
    Dot Notation and Multikey
    Index Creation Option, Unique
    Index Creation, Sparse
    Index Creation, Background
    Using Explain
    Explain: Verbosity
    Covered Queries
    When is an Index Used?
    How Large is Your Index?
    Number of Index Entries
    Geospatial Indexes
    Geospatial Spherical
    Text Indexes
    Efficiency of Index Use
    Efficiency of Index Use Example
    Logging Slow Queries
    Profiling
    Mongotop
    Mongostat
    Sharding Overview
    

Chapter 5: Aggregation Framework
    Simple Aggregation Example
    The Aggregation Pipeline    
    Compound Grouping
    Using a document for _id
    Aggregation Expressions
    Using $sum
    Using $avg
    Using $addToSet
    Using $push
    Using $max and $min
    Double $group stages
    Using $project
    Using $match
    Using $text
    Using $sort
    Using $limit and $skip
    Revisiting $first and $last
    Using $unwind
    $unwind example
    Double $unwind
    Using $out
    Aggregation Options
    Python and Aggregation Results
    Mapping between SQL and Aggregation
    Some Common SQL examples
    Limitations of the Aggregation Framework    


Chapter 6: Application Engineering
    Introduction to Week 6
    Write Concern
    Network Errors
    Introduction to Replication
    Replica Set Elections
    Write Consistency
    Creating a Replica Set
    Replica Set Internals
    Failover and Rollback
    Connecting to a Replica Set from Pymongo
    What Happens When Failover Occurs
    Detecting Failover
    Proper Handling of Failover for Inserts
    Proper Handling of Failover for Reads
    Proper Handling of Failover for Updates
    Write Concern Revisited
    Read Preferences
    Review of Implications of Replication
    Introduction to Sharding
    Building a Sharded Environment
    Implications of Sharding
    Sharding + Replication
    Choosing a Shard Key

```
