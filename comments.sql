CREATE TABLE public.comments(
	comment_id SERIAL PRIMARY KEY,
	comment TEXT NOT NULL,
	user_id SERIAL NOT NULL,
	blog_id SERIAL NOT NULL,
	created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (blog_id) REFERENCES blogs(blog_id)
);

ALTER TABLE IF EXISTS public.comments
    OWNER to postgres;