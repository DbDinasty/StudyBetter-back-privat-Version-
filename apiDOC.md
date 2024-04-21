# Api documentation

## For answers

### To get _**all contents**_ collection of answers    

``http://localhost:1337/api/answers``

**Respons:**

```

        {
            "id": 2,
            "attributes": {
                "text": "Квадратною",
                "createdAt": "2024-04-17T20:14:26.144Z",
                "updatedAt": "2024-04-19T16:30:23.030Z",
                "publishedAt": "2024-04-17T20:14:30.117Z",
                "question_id": "1"
            }
        },
        {
            "id": 3,
            "attributes": {
                "text": "Прямокутною",
                "createdAt": "2024-04-17T20:14:50.147Z",
                "updatedAt": "2024-04-19T16:01:19.816Z",
                "publishedAt": "2024-04-17T20:14:53.258Z",
                "question_id": null
            }
        },
        {
            "id": 4,
            "attributes": {
                "text": "Діагональною",
                "createdAt": "2024-04-17T20:15:11.818Z",
                "updatedAt": "2024-04-19T16:01:24.535Z",
                "publishedAt": "2024-04-17T20:15:19.104Z",
                "question_id": null
            }
        },
        ...
```
### To get answer _**by ID**_ 

``http://localhost:1337/api/answers/2`` (here instead of 2 should be ID of answer you need )

**Respons:**

```
 {
"id": 2,
        "attributes": {
            "text": "Квадратною",
            "createdAt": "2024-04-17T20:14:26.144Z",
            "updatedAt": "2024-04-19T16:30:23.030Z",
            "publishedAt": "2024-04-17T20:14:30.117Z",
            "question_id": "1"
        }
    },
```

### To get  _**specific field**_  of answer

``http://localhost:1337/api/answers/2?fields[0] = question_id ``

**Respons:**

```
{
        "id": 2,
        "attributes": {
            "question_id": "1"
        }
    },
```

## For question

### To get _**all**_ questions

``http://localhost:1337/api/test-pages/1?populate[testBody][populate]=*`` (id 1 is for math for discrete id 2 )

**Respons:**
```
 {
  "id": 1,
   "__component": "question-elem.answer",
  "question_text": "Матриця, в якої кількість рядків дорівнює кількості стовпців, називається:\nВаріанти відповіді:",
  "question_num": 1,
   "answer_id": [
         {
        "id": 44,
         answer_id": "2"
         },
         {
         "id": 45,
         "answer_id": "3"
          },
          {
         "id": 46,
        "answer_id": "4"
          }
    ]
 },
 {
   "id": 2,
  "__component": "question-elem.answer",
  "question_text": "Матриця, в якої всі елементи дорівнюють нулю, називається:\nВаріанти відповіді:\n",
  "question_num": 2,
  "answer_id": [
        {
       "id": 47,
       "answer_id": "2"
        },
        {
       "id": 48,
       "answer_id": "5"
        },
        {
       "id": 49,
       "answer_id": "6"
        }
    ]
 },
 ...
 ```
### To get question _**by ID**_


