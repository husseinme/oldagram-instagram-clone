const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
].forEach((post) => {
    console.log(post.avatar)
document.getElementById("post-section").innerHTML += `
    <div class="post-card">
            <section class="author-section">
                <img class="author-img" src=${post.avatar}>
                <div class="author-text-container">
                    <h1>${post.name}</h1>
                    <h2>${post.location}</h2>
                </div>
            </section>
            <section class="img-section">
                <img class="img-post" src=${post.post}>
            </section>
            <section class="action-section">
                <section class="action-btn">
                    <img src="images/icon-heart.png">
                    <img src="images/icon-comment.png">
                    <img src="images/icon-dm.png">
                </section>
                <h3>${post.likes} likes</h3>
            </section>
            <section class="comment-section">
                <p><b>${post.username}</b> ${post.comment}</p>
            </section>


        </div>

`


})
