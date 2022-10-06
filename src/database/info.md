# Web site structure and style information

## JSON structure for the database

### Projects JSON
```json
[
  {
    "category": "Name of the category",
    "icon": "Name of the Bootstrap icon",
    "data": [
      {
        "name": "Name of the project",
        "date": "Date of the project",
        "description": "Description of the project",
        "link": "URL of the project repository, "null" if there is no public repository",
        "skills": [ "List of skills and language used in the project", ... ]
      },
      ...
    ]
  },
  ...
]
```

### Contact JSON
```json
```

## Style and colors

### General
Text style:
 - font ->

Tittle style:
 - text color -> #074196

### Header
Background style:
 - color -> #1259c1

### Section
Title style:
 - text color -> #0083e1
 - border color -> #0083e1
 - border size -> 2px

Border style:
 - color -> #0794f8
 - size -> 1px
 - radius -> 25px

Background style:
 - color -> #7ec9ff1a

### Cards
Card style:
 - background color -> Bootstrap primary with opacity 10%
 - border color -> Bootstrap primary

Badge style:
 - background color -> opacity 100%

### Footer