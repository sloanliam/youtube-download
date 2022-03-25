import fs = require('fs');
import ytdl = require('ytdl-core');
import path = require('path');

export async function getAudio(url: string, callback: any) {
    try {
        let outputDir = path.join(__dirname, '../out/video.mp3')
        await ytdl(url, {filter: "audioonly"}).pipe(fs.createWriteStream(outputDir));
    } catch(err) {
        console.log(err);
    }

    callback();
}

// expample video: https://www.youtube.com/watch?v=sFsRylCQblw

