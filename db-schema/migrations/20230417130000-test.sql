CREATE TABLE vocabulary_set_test (
    "id" uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" varchar(200) NOT NULL,
    "document" json NOT NULL
);