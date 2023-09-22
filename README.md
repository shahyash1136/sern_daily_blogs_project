# Daily Blog Application

### Project Requirement
Create a **BLOG** website where **USER** can perform CURD operations with the **BLOG** and can also perform CURD operations with the **COMMENTS**. They can also add or remove the **LIKES** from the **BLOG**. **USER** can also filter the **BLOG** based on the **TAGS** present in the blog

### Database Name
Daily Blogs

### Schemas and Types for the application
1. USERS
	* user_id (PK)
	* first_name
	* last_name
	* email_id
	* password
2. BLOGS
	* blog_id (PK)
	* title
	* content
	* user_id (FK)
	* created_date
	* updated_date
3. COMMENTS
	* comment_id (PK)
	* comment
	* user_id (FK)
	* blog_id (FK)
	* created_date
	* updated_date
4. LIKES
	* like_id (PK) 
	* user_id (FK)
	* blog_id (FK)
5. Tag
	* tag_id (PK)
	* tag_name
6. BlogTag
	* blog_tag_id (PK)
	* tag_id (FK)
	* blog_id (FK)
   
### API's for the application
1. /users
	* /
		* GET - TO get all the users
	* /latest-logs
		* GET - To get user specific recent 5 blogs
	* /sign-up
		* POST - To create a new USER
	* /login
		* POST - To allow user to login and generate access token
	* /logout
		* POST - To allow user to logout and delete access token
	* /reset-password
		* POST - To allow user to initiate a password reset
	* /:id
		* GET - To get user with specific id
		* PATCH - To update user with specific id
		* Delete - To delete user with specific id
2. /blogs
	* /
		* GET - TO get all the blogs
		* POST - To create a new blog
	* /:id
		* GET - To get blog with specific id
		* PATCH - To update blog with specific id
		* Delete - To delete blog with specific id
	* /search
		* GET - To search for blogs with keywords
	* /filter
		* GET - To filter blog with criteria (eg: date,tags)
3. /comments
	* /
		* GET - TO get all the comments
		* POST - To create a new comment
	* /:id
		* GET - To get comment with specific id
		* PATCH - To update comment with specific id
		* Delete - To delete comment with specific id
	* /:blog_id
		* GET - To get comments for the specific blog
4. /likes
	* /:blog_id
		* POST - To post like with specific blog id
		* Delete - To delete like with specific blog id




