let postId = 1;

function createPost() {
    const postInput = document.getElementById('postInput').value;
    
    if (postInput.trim() !== '') {
        const postContainer = document.querySelector('.posts');
        
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `
            <p>${postInput}</p>
            <button onclick="likePost(${postId})">Like</button>
            <span id="likesCount_${postId}">0</span>
        `;
        
        postContainer.appendChild(post);
        postId++;
        
        // Clear the input field after posting
        document.getElementById('postInput').value = '';
    }
}

function likePost(postId) {
    const likesCount = document.getElementById(`likesCount_${postId}`);
    let currentLikes = parseInt(likesCount.textContent);
    currentLikes++;
    likesCount.textContent = currentLikes;
}
