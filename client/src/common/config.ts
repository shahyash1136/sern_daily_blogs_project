interface Config {
    API_BASE_URL: string;
    API_NAME: {
        [key: string]: string;
    };
    API_URL: {
        [key: string]: string;
    };
}

const config: Config = {} as Config;

config.API_BASE_URL = 'http://localhost:8080/api/v1/';
config.API_NAME = {
    users: 'user',
    blogs: 'blog',
    tags: 'tags',
    auth: 'auth',
};
config.API_URL = {
    //Auth apis
    register: `${config.API_BASE_URL}${config.API_NAME.auth}/register`,
    login: `${config.API_BASE_URL}${config.API_NAME.auth}/login`,

    //User apis
    allUser: `${config.API_BASE_URL}${config.API_NAME.users}`,
    user: `${config.API_BASE_URL}${config.API_NAME.users}/{{user_id}}`,

    //Tags Api
    tags: `${config.API_BASE_URL}${config.API_NAME.tags}`,

    //Blogs Api
    allBlogs: `${config.API_BASE_URL}${config.API_NAME.blogs}`,
    blog: `${config.API_BASE_URL}${config.API_NAME.blogs}/{{blog_id}}`,
};

export { config };