/**
 * CertifyCode Academy - Relational Database Engineering & SQL Question Bank
 * Total Questions: 50
 */

export const sqlQuestions = [
  // EASY (20)
  {
    id: 1,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which SQL clause is used to retrieve data from a database table?",
    options: ["GET", "EXTRACT", "SELECT", "FETCH"],
    correctAnswer: 2,
    explanation: "The `SELECT` statement is the core ANSI SQL query command used to select data from database tables."
  },
  {
    id: 2,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which SQL clause is used to filter records according to specific conditions?",
    options: ["GROUP BY", "WHERE", "ORDER BY", "HAVING"],
    correctAnswer: 1,
    explanation: "The `WHERE` clause filters rows before any grouping or aggregation takes place."
  },
  {
    id: 3,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which SQL keyword eliminates duplicate rows from query results?",
    options: ["UNIQUE", "DISTINCT", "DIFFERENT", "SINGLE"],
    correctAnswer: 1,
    explanation: "`SELECT DISTINCT column_name FROM table;` suppresses duplicate values in the result set."
  },
  {
    id: 4,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which SQL clause is used to sort the result set in ascending or descending order?",
    options: ["SORT BY", "ALIGN BY", "ORDER BY", "GROUP BY"],
    correctAnswer: 2,
    explanation: "`ORDER BY column_name ASC|DESC` specifies output row ordering."
  },
  {
    id: 5,
    topic: "Aggregations & Grouping",
    difficulty: "Easy",
    question: "Which SQL aggregate function returns the total number of rows matching criteria?",
    options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"],
    correctAnswer: 2,
    explanation: "`COUNT(*)` or `COUNT(column)` returns the total row count matching specified predicates."
  },
  {
    id: 6,
    topic: "Aggregations & Grouping",
    difficulty: "Easy",
    question: "Which SQL aggregate function computes the mathematical average of a numeric column?",
    options: ["AVG()", "MEAN()", "AVERAGE()", "SUM()/COUNT()"],
    correctAnswer: 0,
    explanation: "`AVG(column)` calculates the arithmetic mean of non-null numeric values."
  },
  {
    id: 7,
    topic: "Table JOINs",
    difficulty: "Easy",
    question: "Which type of JOIN returns only rows that have matching values in both joined tables?",
    options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"],
    correctAnswer: 2,
    explanation: "`INNER JOIN` selects records that have matching values in both tables."
  },
  {
    id: 8,
    topic: "Table JOINs",
    difficulty: "Easy",
    question: "Which type of JOIN returns all records from the left table and matched records from the right table?",
    options: ["INNER JOIN", "LEFT JOIN (or LEFT OUTER JOIN)", "RIGHT JOIN", "CROSS JOIN"],
    correctAnswer: 1,
    explanation: "`LEFT JOIN` returns all rows from the left table, with NULLs for non-matching right table columns."
  },
  {
    id: 9,
    topic: "Database Schema & Modification",
    difficulty: "Easy",
    question: "Which SQL DML statement is used to insert new records into a table?",
    options: ["ADD ROW", "INSERT INTO", "CREATE ROW", "UPDATE"],
    correctAnswer: 1,
    explanation: "`INSERT INTO table_name (cols...) VALUES (vals...);` adds new records."
  },
  {
    id: 10,
    topic: "Database Schema & Modification",
    difficulty: "Easy",
    question: "Which SQL statement is used to modify existing values in a table?",
    options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
    correctAnswer: 2,
    explanation: "`UPDATE table_name SET col = val WHERE condition;` modifies existing data."
  },
  {
    id: 11,
    topic: "Database Schema & Modification",
    difficulty: "Easy",
    question: "Which SQL statement deletes records from a table?",
    options: ["REMOVE FROM", "DELETE FROM", "DROP", "TRUNCATE"],
    correctAnswer: 1,
    explanation: "`DELETE FROM table_name WHERE condition;` removes specified rows from a table."
  },
  {
    id: 12,
    topic: "Database Schema & Modification",
    difficulty: "Easy",
    question: "What is the difference between `DELETE FROM table;` and `DROP TABLE table;`?",
    options: [
      "`DELETE` removes rows while preserving table structure; `DROP` removes the entire table structure and schema",
      "`DROP` removes rows; `DELETE` removes schema",
      "They are identical commands",
      "`DELETE` cannot be rolled back"
    ],
    correctAnswer: 0,
    explanation: "`DELETE` is DML removing rows; `DROP` is DDL removing the table definition completely from the database catalog."
  },
  {
    id: 13,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which wildcard character in SQL `LIKE` operator matches zero or more characters?",
    options: ["_", "%", "*", "?"],
    correctAnswer: 1,
    explanation: "`%` matches zero, one, or multiple characters (e.g., `WHERE name LIKE 'A%'`)."
  },
  {
    id: 14,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which wildcard character in SQL `LIKE` operator matches exactly one single character?",
    options: ["%", "_", "?", "#"],
    correctAnswer: 1,
    explanation: "`_` matches a single character (e.g. `WHERE code LIKE 'A_C'`)."
  },
  {
    id: 15,
    topic: "Database Schema & Modification",
    difficulty: "Easy",
    question: "What constraint uniquely identifies each record in a database table?",
    options: ["FOREIGN KEY", "UNIQUE", "PRIMARY KEY", "CHECK"],
    correctAnswer: 2,
    explanation: "A `PRIMARY KEY` constraint uniquely identifies each row and implicitly prohibits NULL values."
  },
  {
    id: 16,
    topic: "Database Schema & Modification",
    difficulty: "Easy",
    question: "What constraint establishes a relationship between a column in one table and a Primary Key in another table?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "INDEX", "LINK KEY"],
    correctAnswer: 1,
    explanation: "A `FOREIGN KEY` enforces referential integrity between child and parent tables."
  },
  {
    id: 17,
    topic: "Aggregations & Grouping",
    difficulty: "Easy",
    question: "Which clause is used to group rows that have the same values into summary rows?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "COLLECT BY"],
    correctAnswer: 1,
    explanation: "`GROUP BY column_name` groups rows sharing identical values into aggregate summary rows."
  },
  {
    id: 18,
    topic: "Aggregations & Grouping",
    difficulty: "Easy",
    question: "Which clause filters aggregate groups created by a `GROUP BY` statement?",
    options: ["WHERE", "HAVING", "FILTER", "LIMIT"],
    correctAnswer: 1,
    explanation: "`HAVING` filters grouped aggregated summary data (unlike `WHERE` which filters individual rows before grouping)."
  },
  {
    id: 19,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "How do you test if a column value is missing or NULL in SQL?",
    options: ["WHERE col = NULL", "WHERE col IS NULL", "WHERE col == NULL", "WHERE col EQUALS NULL"],
    correctAnswer: 1,
    explanation: "ANSI SQL requires `IS NULL` or `IS NOT NULL` because comparison operators (`=`) with NULL evaluate to UNKNOWN."
  },
  {
    id: 20,
    topic: "Basic Querying & Filtering",
    difficulty: "Easy",
    question: "Which operator checks if a column value falls within an inclusive range?",
    options: ["IN", "BETWEEN ... AND ...", "WITHIN", "INSIDE"],
    correctAnswer: 1,
    explanation: "`BETWEEN val1 AND val2` tests if a value lies within an inclusive range."
  },

  // MEDIUM (20)
  {
    id: 21,
    topic: "Table JOINs",
    difficulty: "Medium",
    question: "What is a CROSS JOIN in SQL?",
    options: [
      "A Cartesian product join returning every combination of rows from the left table with every row from the right table",
      "A join on primary keys only",
      "A join combining non-matching rows",
      "A self-join"
    ],
    correctAnswer: 0,
    explanation: "`CROSS JOIN` produces the Cartesian product of two tables (Table A count × Table B count rows)."
  },
  {
    id: 22,
    topic: "Table JOINs",
    difficulty: "Medium",
    question: "What is a FULL OUTER JOIN?",
    options: [
      "Returns all matching rows, plus unmatched rows from both left and right tables with NULLs in non-matching columns",
      "Returns only matching rows",
      "Returns unmatched left rows only",
      "Returns primary keys only"
    ],
    correctAnswer: 0,
    explanation: "`FULL OUTER JOIN` combines the results of both LEFT and RIGHT outer joins."
  },
  {
    id: 23,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What is the difference between `IN` and `EXISTS` operators when evaluating subqueries?",
    options: [
      "`EXISTS` tests for row existence returning boolean early on match; `IN` evaluates the subquery result set completely",
      "`IN` is faster for large dataset subqueries",
      "`EXISTS` can only take single values",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`EXISTS` stops processing as soon as a single matching row is found (short-circuiting); `IN` gathers the entire subquery list."
  },
  {
    id: 24,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "What is the difference between `TRUNCATE TABLE` and `DELETE FROM`?",
    options: [
      "`TRUNCATE` is a DDL command that deallocates data pages quickly without logging individual row deletes; `DELETE` is DML logging each deleted row",
      "`DELETE` drops the table schema; `TRUNCATE` does not",
      "`TRUNCATE` can use a WHERE clause",
      "TRUNCATE preserves identity column seed values"
    ],
    correctAnswer: 0,
    explanation: "`TRUNCATE` is DDL (faster, resets identity seeds, non-logged row by row); `DELETE` is DML (slower, logs row modifications)."
  },
  {
    id: 25,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What is a Correlated Subquery?",
    options: [
      "A subquery that references columns from the outer query, evaluating once for each row processed by the outer query",
      "A subquery executing in parallel threads",
      "A subquery containing a JOIN clause",
      "A subquery created inside a view"
    ],
    correctAnswer: 0,
    explanation: "Correlated subqueries depend on values from outer query rows and re-evaluate for every candidate outer row."
  },
  {
    id: 26,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "What is a Database Index, and what is its primary benefit?",
    options: [
      "A data structure (e.g. B-Tree) that speeds up data retrieval (`SELECT`), though it incurs overhead on writes (`INSERT`/`UPDATE`)",
      "A tool to encrypt sensitive data",
      "A backup file copy",
      "A trigger mechanism"
    ],
    correctAnswer: 0,
    explanation: "Indexes speed up data lookup queries significantly while adding small maintenance overhead on write operations."
  },
  {
    id: 27,
    topic: "Aggregations & Grouping",
    difficulty: "Medium",
    question: "What is the result of `COUNT(column_name)` vs `COUNT(*)` when a column contains NULL values?",
    options: [
      "`COUNT(column_name)` ignores NULL values; `COUNT(*)` counts all rows regardless of NULLs",
      "`COUNT(*)` ignores NULLs; `COUNT(column_name)` counts NULLs",
      "Both count NULL values",
      "Both ignore NULL values"
    ],
    correctAnswer: 0,
    explanation: "`COUNT(col)` excludes NULL values from the total count; `COUNT(*)` includes all rows."
  },
  {
    id: 28,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What is a Common Table Expression (CTE) in SQL?",
    options: [
      "A temporary named result set defined using a `WITH` clause `WITH CTE_Name AS (SELECT ...)`",
      "A permanent view saved on disk",
      "A stored procedure parameter",
      "A database configuration setting"
    ],
    correctAnswer: 0,
    explanation: "CTEs (`WITH cte AS (...)`) construct named temporary result sets that simplify complex joins and recursive queries."
  },
  {
    id: 29,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "Which SQL DDL command modifies an existing table structure (e.g. adding a new column)?",
    options: ["UPDATE TABLE", "ALTER TABLE", "CHANGE TABLE", "MODIFY TABLE"],
    correctAnswer: 1,
    explanation: "`ALTER TABLE table_name ADD column_name datatype;` modifies table definitions."
  },
  {
    id: 30,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "What is a Database View?",
    options: [
      "A virtual table based on the result-set of an SQL statement stored as a query definition in the database catalog",
      "A physical table stored in RAM",
      "A database backup snapshot",
      "A graphical chart display"
    ],
    correctAnswer: 0,
    explanation: "A View is a virtual table presenting data from underlying base tables defined by a stored SELECT query."
  },
  {
    id: 31,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What is the `COALESCE()` function in SQL?",
    options: [
      "Evaluates arguments in order and returns the first non-null value",
      "Concatenates strings",
      "Calculates compound interest",
      "Converts strings to lower case"
    ],
    correctAnswer: 0,
    explanation: "`COALESCE(val1, val2, ...)` returns the first non-null argument in its parameter list."
  },
  {
    id: 32,
    topic: "Table JOINs",
    difficulty: "Medium",
    question: "What is a Self-Join in SQL?",
    options: [
      "A regular join in which a table is joined with itself using table aliases",
      "A join on identical foreign keys",
      "An automated database index repair join",
      "A join with no condition"
    ],
    correctAnswer: 0,
    explanation: "A self-join joins a table to itself (e.g. `FROM Employees e1 JOIN Employees e2 ON e1.manager_id = e2.id`)."
  },
  {
    id: 33,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "What is ACID in the context of Database Transactions?",
    options: [
      "Atomicity, Consistency, Isolation, Durability",
      "Array, Column, Index, Data",
      "Access, Control, Identity, Domain",
      "Authentication, Cipher, Integrity, Defense"
    ],
    correctAnswer: 0,
    explanation: "ACID principles guarantee reliable database transaction processing."
  },
  {
    id: 34,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "Which statement finalizes all changes made in the current database transaction?",
    options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "END"],
    correctAnswer: 1,
    explanation: "`COMMIT` permanently saves all modifications made during the transaction."
  },
  {
    id: 35,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "Which statement undoes modifications made during the current uncommitted transaction?",
    options: ["COMMIT", "ROLLBACK", "RESET", "UNDO"],
    correctAnswer: 1,
    explanation: "`ROLLBACK` cancels all modifications back to the transaction start or savepoint."
  },
  {
    id: 36,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What is a Window Function in SQL (e.g. `ROW_NUMBER() OVER (...)`)?",
    options: [
      "A function that performs calculations across a set of table rows related to the current row without collapsing rows like GROUP BY",
      "A function opening database UI windows",
      "A function limiting SELECT output to 10 rows",
      "A backup utility"
    ],
    correctAnswer: 0,
    explanation: "Window functions (`OVER (PARTITION BY ... ORDER BY ...)`) compute analytical rankings/aggregates while preserving individual row details."
  },
  {
    id: 37,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What does `UNION` vs `UNION ALL` do when combining query results?",
    options: [
      "`UNION` removes duplicate rows from the combined result set; `UNION ALL` preserves all duplicates",
      "`UNION ALL` removes duplicates; `UNION` preserves duplicates",
      "`UNION` works across different databases; `UNION ALL` within one database",
      "There is no difference"
    ],
    correctAnswer: 0,
    explanation: "`UNION` performs distinct sorting to strip duplicates (slower); `UNION ALL` appends datasets directly (faster)."
  },
  {
    id: 38,
    topic: "Database Schema & Modification",
    difficulty: "Medium",
    question: "What is a Database Trigger?",
    options: [
      "A procedural code block automatically executed in response to DML events (INSERT, UPDATE, DELETE) on a table",
      "A scheduled cron job",
      "A foreign key constraint",
      "An automated database index rebuild tool"
    ],
    correctAnswer: 0,
    explanation: "Triggers automatically run before or after specified table modification events occur."
  },
  {
    id: 39,
    topic: "Basic Querying & Filtering",
    difficulty: "Medium",
    question: "What is the function of `LIMIT` / `TOP` / `FETCH FIRST n ROWS ONLY` in SQL?",
    options: [
      "Restricts the maximum number of rows returned in the result set",
      "Restricts column width",
      "Filters NULL values",
      "Limits CPU usage"
    ],
    correctAnswer: 0,
    explanation: "Limits the total output row count returned by queries."
  },
  {
    id: 40,
    topic: "Subqueries & Nested Logic",
    difficulty: "Medium",
    question: "What does `CASE WHEN ... THEN ... ELSE ... END` accomplish in SQL queries?",
    options: [
      "Provides conditional if-else branching logic inside SELECT statements",
      "Switches database instances",
      "Validates table syntax",
      "Creates temporary views"
    ],
    correctAnswer: 0,
    explanation: "The `CASE` expression evaluates conditions and returns values dynamically inside SQL queries."
  },

  // MODERATE (10)
  {
    id: 41,
    topic: "Database Schema & Modification",
    difficulty: "Moderate",
    question: "What is Database Normalization (e.g. 1NF, 2NF, 3NF)?",
    options: [
      "The process of structuring relational schema to reduce data redundancy and improve data integrity",
      "Compressing tables on disk",
      "Converting SQL queries to C code",
      "Encrypting database tables"
    ],
    correctAnswer: 0,
    explanation: "Normalization organizes fields and tables to eliminate duplicate redundant data and insert/update anomalies."
  },
  {
    id: 42,
    topic: "Subqueries & Nested Logic",
    difficulty: "Moderate",
    question: "What does `DENSE_RANK()` do compared to `RANK()` window functions?",
    options: [
      "`DENSE_RANK()` leaves no gaps in ranking values when ties occur; `RANK()` leaves rank number gaps",
      "`RANK()` does not allow ties",
      "`DENSE_RANK()` sorts strings only",
      "They behave identically"
    ],
    correctAnswer: 0,
    explanation: "If two items tie for 1st, `RANK()` assigns 1, 1, 3. `DENSE_RANK()` assigns 1, 1, 2."
  },
  {
    id: 43,
    topic: "Database Schema & Modification",
    difficulty: "Moderate",
    question: "What is the difference between a Clustered Index and a Non-Clustered Index?",
    options: [
      "A Clustered Index alters the actual physical order of data rows on disk (only 1 per table); a Non-Clustered Index stores logical structure with pointers to data (multiple per table)",
      "A Non-Clustered Index alters physical disk order",
      "Clustered indexes are slower than non-clustered indexes",
      "Non-clustered indexes can only be created on Primary Keys"
    ],
    correctAnswer: 0,
    explanation: "A table can have only 1 Clustered Index because data rows themselves are physically sorted on disk by the clustered index key."
  },
  {
    id: 44,
    topic: "Database Schema & Modification",
    difficulty: "Moderate",
    question: "What is a Phantom Read anomaly in transaction isolation levels?",
    options: [
      "When transaction T1 reads a set of rows, T2 inserts new matching rows, and T1 re-reads seeing new 'phantom' rows",
      "Reading uncommitted data from another transaction",
      "Reading corrupt data from disk",
      "Failing to commit a transaction"
    ],
    correctAnswer: 0,
    explanation: "Phantom Reads occur when new records added by committed transactions appear in secondary reads within an active transaction."
  },
  {
    id: 45,
    topic: "Database Schema & Modification",
    difficulty: "Moderate",
    question: "Which isolation level prevents Dirty Reads, Non-Repeatable Reads, and Phantom Reads completely?",
    options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
    correctAnswer: 3,
    explanation: "`SERIALIZABLE` is the highest isolation level, completely isolating transactions against all read anomalies."
  },
  {
    id: 46,
    topic: "Subqueries & Nested Logic",
    difficulty: "Moderate",
    question: "What does the `LATERAL` keyword (or `CROSS APPLY` in SQL Server) enable?",
    options: [
      "Allows inline subqueries/table-valued functions to reference columns provided by preceding FROM table items on a row-by-row basis",
      "Performs parallel cross joins",
      "Sorts data sideways",
      "Converts columns into rows"
    ],
    correctAnswer: 0,
    explanation: "`LATERAL` (or `CROSS APPLY`) acts like a correlated join, evaluating subqueries for every row of the outer table."
  },
  {
    id: 47,
    topic: "Subqueries & Nested Logic",
    difficulty: "Moderate",
    question: "What is the purpose of `PIVOT` and `UNPIVOT` operators?",
    options: [
      "`PIVOT` rotates column values into distinct heading columns; `UNPIVOT` transforms columns back into rows",
      "`PIVOT` creates database indexes",
      "`PIVOT` merges database tables",
      "PIVOT handles NULL values"
    ],
    correctAnswer: 0,
    explanation: "`PIVOT` transforms unique row values into multiple output report columns."
  },
  {
    id: 48,
    topic: "Database Schema & Modification",
    difficulty: "Moderate",
    question: "What is a Stored Procedure?",
    options: [
      "A compiled collection of SQL statements and control logic saved in the database server catalog that accepts parameters",
      "A backup file on disk",
      "A system table storing log entries",
      "A database driver"
    ],
    correctAnswer: 0,
    explanation: "Stored procedures encapsulate server-side database logic, reducing network roundtrips."
  },
  {
    id: 49,
    topic: "Database Schema & Modification",
    difficulty: "Moderate",
    question: "What is a Deadlock in relational databases?",
    options: [
      "A situation where two or more transactions hold locks on resources the other needs, locking each other indefinitely until the engine terminates one",
      "A corrupted database file",
      "A query running for more than 5 seconds",
      "An invalid foreign key reference"
    ],
    correctAnswer: 0,
    explanation: "Deadlocks occur when transaction dependencies create a circular wait for locks."
  },
  {
    id: 50,
    topic: "Subqueries & Nested Logic",
    difficulty: "Moderate",
    question: "What does the `GROUPING SETS` extension to `GROUP BY` perform?",
    options: [
      "Allows defining multiple custom GROUP BY aggregations in a single query pass",
      "Sorts grouping results alphabetically",
      "Filters NULL groups",
      "Groups data into 10 partitions"
    ],
    correctAnswer: 0,
    explanation: "`GROUP BY GROUPING SETS ((colA), (colB), ())` computes multiple group aggregates in one single query execution."
  }
];
