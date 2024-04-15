CREATE TABLE public.users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email_id VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
);

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;