class Video {
    constructor(title, description, duration, uploadDate, viewCount, likes, dislikes, thumbnailUrl) {
        this.title = title;
        this.description = description;
        this.duration = duration;
        this.uploadDate = uploadDate;
        this.viewCount = viewCount;
        this.likes = likes;
        this.dislikes = dislikes;
        this.thumbnailUrl = thumbnailUrl;
    }

    play() {
        console.log(`Playing video: ${this.title}`);
    }

    like() {
        this.likes++;
    }

    dislike() {
        this.dislikes++;
    }
}

// Example usage
const video = new Video(
    "Example Video",
    "This is an example video description",
    "00:05:30",
    "2023-05-16",
    1000,
    50,
    5,
    "https://example.com/thumbnail.jpg"
);

video.play(); 
video.like();
console.log(video.likes); 
video.dislike();
console.log(video.dislikes);
