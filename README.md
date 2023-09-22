# Daily Blog Application

### Project Requirement
Create a **BLOG** website where **USER** can perform CURD operations with the **BLOG**. Also can perform CURD operations with the **COMMENTS**. They can also add or remove the **LIKES** from the **BLOG**

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
   * user_id (PK)
   * blog_id (PK)







