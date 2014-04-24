cc-tasks
========
##Api

###Request Params


| Param    |      Example                      |  Description                |
|----------|:---------------------------------:|----------------------------:|
| limit    |  (Number) 0 < n <= 200            | Liczba zwracanych elementow |
| fields   |  (String) np. id,description...   | Lista zwracanych pol        |

###Responses

**GET** /issues/:id

> Wskazane "issue"

<pre>
{
	"id": 1,
	"title": "Add new user",
	"description": "Lorem ipsum...",
	"status": "In Progress",
	"type": "Task",
	"priority": "major",
	"assignee": "Arek Zając"
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**GET** /issues/

> Lista "issue"

<pre>
{
	"data": [
		{
			"id": 1,
			"title": "Add new user",
			"description": "Lorem ipsum...",
			"status": "In Progress",
			"type": "Task",
			"priority": "major",
			"assignee": "Arek Zając",
			"updated_at": "2013-09-12T06:20:31+0000",
			"created_at": "2013-09-12T06:20:31+0000"
		},
		...
	],
	"pagging": {
		"itemsCount": 1110
	}
}
</pre>

**POST** /issues/

> Tworzenie nowego "issue"

<pre>
{
	"id": 1,
	"title": "Add new user",
	"description": "Lorem ipsum...",
	"status": "In Progress",
	"type": "Task",
	"priority": "major",
	"assignee": "Arek Zając"
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**POST** /issues/:id

> Edycja istniejącego "issue"

<pre>
{
	"id": 1,
	"title": "Add new user",
	"description": "Lorem ipsum...",
	"status": "In Progress",
	"type": "Task",
	"priority": "major",
	"assignee": "Arek Zając",
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**GET** /projects/

> Lista projektow

<pre>
{
	"data": [
		{
			"id": 1,
			"key": "PROJ",
			"name": "Project",
			"leader": {
				// User Item
			},
			"url": "project.com",
			"updated_at": "2013-09-12T06:20:31+0000",
			"created_at": "2013-09-12T06:20:31+0000"
		}
		...
	],
	"pagging": {
		"itemsCount": 1110
	}
}
</pre>

**GET** /projects/:id

> Wskazany projekt

<pre>
{
	"id": 1,
	"key": "PROJ",
	"name": "Project",
	"leader": {
		// User Item
	},
	"url": "project.com",
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**POST** /projects/

> Tworzenie nowego projektu

<pre>
{
	"id": 1,
	"key": "PROJ",
	"name": "Project",
	"leader": {
		// User Item
	},
	"url": "project.com",
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**POST** /projects/:id

> Edytuje istniejący projekt

<pre>
{
	"id": 1,
	"key": "PROJ",
	"name": "Project",
	"leader": {
		// User Item
	},
	"url": "project.com",
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**GET** /users/

> Lista userow

<pre>
{
	"data": [
		{
			"id": 1,
			"username": "ArekZc",
			"email": "a.zajac@clearcode.cc",
			"gender": "male",
			"displayName": "Arek Zając"
			"updated_at": "2013-09-12T06:20:31+0000",
			"created_at": "2013-09-12T06:20:31+0000"
		},
		...
	],
	"pagging": {
		"itemsCount": 1110
	}
}
</pre>

**GET** /users/:id

> Wskazany użytkownik

<pre>
{
	"id": 1,
	"username": "ArekZc",
	"email": "a.zajac@clearcode.cc",
	"gender": "male",
	"displayName": "Arek Zając"
	"updated_at": "2013-09-12T06:20:31+0000",
	"created_at": "2013-09-12T06:20:31+0000"
}
</pre>

**GET** /comments/

> Lista komentarzy

<pre>
{
	"data": [
		{
			"id": 1,
			"message": "Lorem ipsum",
			"issue_id": 1
			"autor": {
				// User Item
			}
			"updated_at": "2013-09-12T06:20:31+0000",
			"created_at": "2013-09-12T06:20:31+0000"
		},
		...
	],
	"pagging": {
		"itemsCount": 1110
	}
}
</pre>

Pozostałe zapytania api tworzone są przez Graph API

np. /projects/1/issues/ - List issues reply to project#1

##Zadanie

Stworzenie aplikacji do zarządzania "issues". Minimalne kryterium działania aplikacji.

- Jako użytkownik mogę wylistować projekty, zobaczyć detale projektu, stworzyć nowy projekt
- Jako użytkownik mogę wylistować "issues", zobaczyć detale "issue", stworzyć nowe "issue"
- Jako użytkownik mogę wylistować użytkownikow, zobaczyć detale użytkownika
- Jako użytkownik mogę wylistować "issues" dla konkretnego projektu
- Jako użytkownik mogę wylistować użytkownikow dla konkretnego projektu

Wymagania dodatkowe

- Formularz dodawania powinien być odpalany w modalu
- Przy ładowaniu danych przez api powinien pojawiać się "loader"
- Format daty m/d/Y

##Etapy

- Stworzenie projektu przy użyciu yeomana
- Stworzenie mockow dla zapytań do Api
- Stworzenie serwisow i kontrollerow
- Stworzenie testow jednostkowych
- Stworzenie testow funkcjonalnych
