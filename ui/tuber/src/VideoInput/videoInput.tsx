import { Button, TextField } from "@mui/material";
import React from "react";
import { getAudio } from "./getAudio";

export function VideoInput() {
    const [url, setUrl] = React.useState('');

    const handleSubmit = (e: any) => {
        console.log(url);
        e.preventDefault();
        getAudio(url);
    }

    return (
        <div className="video-input">
            <TextField id="outlined-basic" onChange={event => {setUrl(event.target.value)}} label="Video Url" variant="outlined" />
            <Button onClick={handleSubmit} variant="contained">Contained</Button>
        </div>
    )
}
