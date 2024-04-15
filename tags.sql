CREATE TABLE public.tags(
	tag_id SERIAL PRIMARY KEY,
	tag_name VARCHAR(50) NOT NULL
);
ALTER TABLE IF EXISTS public.tags
    OWNER to postgres;