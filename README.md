The application is running on Heroku server in the cloud.
DB - postgres cloud based, managed by heroku.
Framework - Express.
Endpoints - five endpoints, for every one of the requests specified
1. post - use the endpoint 'https://qlik-messages-app-akiva.herokuapp.com/message'
 with the body : {
     "messages": "<message content>"
 }

2. put - use the endpoint 'https://qlik-messages-app-akiva.herokuapp.com/message/<message_id>'
 with the body : {
     "messages": "<message content>"
 }
    the <message_id> must be an id that already exists in the database.
    to find such an ID, there is the getList endpoint that retrieves all the existing messages with full details.

3. delete - use the endpoint 'https://qlik-messages-app-akiva.herokuapp.com/message/<message_id>'
    the <message_id> must be an id that already exists in the database.
    to find such an ID, there is the getList endpoint that retrieves all the existing messages with full details.

4. get - for single message retrieval, use the endpoint 'https://qlik-messages-app-akiva.herokuapp.com/message/<message_id>'
    the <message_id> must be an id that already exists in the database.
    to find such an ID, there is the getList endpoint that retrieves all the existing messages with full details.

5. get - for all messages , use the endpoint 'https://qlik-messages-app-akiva.herokuapp.com/messages'

additional information:
requirements folder contains the testing evidence (print screen) and a diagram of the system architecture