
-- Login 
/api/artists/:username/login
{
	"username" : "#",
	
}

-- Get user info
/api/artists/:uuid 

-- Add new artist/register syntax
/api/artists/register
{
	"username" : "AnnieLebovitz",
	"firstName" : "Annie",
	"lastName" : "Lebovitz",
	"bio" : "bio text",
	"artistPhoto" : "url",
	"activated": 0
}

-- Update artist info
/api/artists/update/:uuid
{
	"username" : "#",
	"firstName" : "Annie",
	"lastName" : "Lebovitz",
	"bio" : "bio text",
	"artistPhoto" : "url",
	"activated": #
}

-- Delete account
/api/artists/delete/:uuid


{
	"artistUuid" : "provide user 1 uuid"
} 