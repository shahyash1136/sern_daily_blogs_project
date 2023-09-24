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
   
### APIs for the application
1. /users
	* /
		* GET - To get all the users
	* /latest-logs
		* GET - To get user-specific recent 5 blogs
	* /:id
		* GET - To get a user with a specific ID
		* PATCH - To update a user with a specific ID
		* Delete - To delete a user with a specific ID
2. /auth
   	* /sign-up
		* POST - To create a new USER
	* /login
		* POST - To allow a user to login and generate an access token
	* /logout
		* POST - To allow a user to logout and delete the access token
	* /reset-password
		* POST - To allow a user to initiate a password reset

3. /blogs
	* /
		* GET - TO get all the blogs
		* POST - To create a new blog
	* /:id
		* GET - To get a blog with a specific ID
		* PATCH - To update a blog with a specific ID
		* Delete - To delete a blog with a specific ID
	* /filter
		* GET - To filter blogs with criteria (e.g.: date, tags)
4. /comments
	* /
		* GET - TO get all the comments
		* POST - To create a new comment
	* /:id
		* GET - To get comments with specific ID
		* PATCH - To update comment with specific ID
		* Delete - To delete a comment with specific ID
	* /:blog_id
		* GET - To get comments for the specific blog
5. /likes
	* /:blog_id
		* POST - To post like with a specific blog ID
		* Delete - To delete like with a specific blog ID
6. /search
		* GET - To search for blogs, tags, and users with keywords




