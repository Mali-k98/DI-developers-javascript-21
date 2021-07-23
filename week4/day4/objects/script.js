
class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
};


const video1 = new Video ('harry potter','john','1 hr 40min' );
video1.watch()
const Video2 = new Video ('mulan', 'kate', '1hr 30min')
Video2.watch()
