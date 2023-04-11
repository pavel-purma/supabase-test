# Main ideas


## Database schema ideas

### VocabularySet
id [int]
name [string]
owner [link to auth user]

### VocabularySetAssignment
user [link to auth user]
set_id [int]

### Vocabulary
set_id [int]
id [int]
word [string]
translation [string] - main translation in native language plus an array of alternatives

### ResponseStats
id [int]
word_id [int]
correct_count [int]
incorrect_count [int]
trend [decimal]
probability_rank [decimal]
recent_answers_success_rate [decimal]

### ResponseLog
id [int]
timestamp
word_id [int]
response [int]
correct [bool]

### Phrases
id [int]
word_id [int]
phrase [string]
