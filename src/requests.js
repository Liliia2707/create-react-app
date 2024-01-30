export const getPosts = async (setPosts) => {
    try {
        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) throw new Error('Посты не найдены')
        const postData = await response.json();
        setPosts(postData.posts);
    } catch (error) {
        console.error("Ошибка: ", error);
    }
};

export const addPost = async (post) => {
    try {
        const response = await fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post),
        });
        if (!response.ok) {
            throw new Error('Ошибка при добавлении поста');
        }
        const postData = await response.json();
        console.log(postData);
        return postData;
    } catch (error) {
        console.error('Oшибка:', error);
    }
};

export const deletePost = async (id) => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`, {
            method: 'DELETE',
        })
        if (!response.ok) {
            throw new Error('Не удалось удалить пост');
        }
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error('Oшибка:', error);
    }
}

//USERS

export const fetchUsers = async (setUserList) => {
    try {
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
            throw new Error('Не удалось получить список юзеров');
        }
        const data = await response.json();
        setUserList(data.users.slice(0, 5));
    } catch (error) {
        console.log(error);
    }
};

export const fetchSingleUser = async (id, callback) => {
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}`)
        if (!response.ok) {
            throw new Error('Не удалось получить юзера');
        }
        const data = await response.json()
        callback(data)
    } catch (error) {
        console.log(error);
    }
}

//POSTS

export const fetchSinglePost = async (id, callback) => {
    try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        if (!response.ok) {
            throw new Error('Не удалось получить пост');
        }
        const data = await response.json();
        callback(data)
    } catch (error) {
        console.log(error);
    }
};