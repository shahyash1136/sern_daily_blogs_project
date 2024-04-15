CREATE TABLE public.blog_tags(
	blog_tag_id SERIAL PRIMARY KEY,
	tag_id SERIAL NOT NULL,
	blog_id SERIAL NOT NULL,
	FOREIGN KEY (tag_id) REFERENCES tags(tag_id),
	FOREIGN KEY (blog_id) REFERENCES blogs(blog_id)
);
ALTER TABLE IF EXISTS public.blog_tags
    OWNER to postgres;