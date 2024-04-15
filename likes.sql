CREATE TABLE public.likes(
like_id SERIAL PRIMARY KEY,
user_id SERIAL NOT NULL,
blog_id SERIAL NOT NULL,
	FOREIGN KEY (user_id) REFERENCES users(user_id),
	FOREIGN KEY (blog_id) REFERENCES blogs(blog_id)
);

ALTER TABLE IF EXISTS public.likes
    OWNER to postgres;