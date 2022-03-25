import axios from "axios";

export async function getAudio(videoPath: string) {
    axios({
        url: 'http://localhost:8080/video/download',
        method: 'POST',
        responseType: 'blob', // important,
        data: {
            path: videoPath
        }
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'video.mp3');
        document.body.appendChild(link);
        link.click();
      });
}