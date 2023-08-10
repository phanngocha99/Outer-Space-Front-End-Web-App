import '../style/create-page.css';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Editor from '../components/Editor';


export default function CreatePost() {
    const [category, setCategory] = useState("news");
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function createNewPost() {
        console.log(category)
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        if (category === "discovery") {
            const response = await fetch('https://outer-space-api.vercel.app/post', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            }
        } else if (category === "news") {
            const response = await fetch('https://outer-space-api.vercel.app/news', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            }
        } else if (category === "event") {
            const response = await fetch('https://outer-space-api.vercel.app/event', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            }
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='create-area'>
            <label htmlFor="category">Choose:</label>

            <button className='create-btn' onClick={() => setCategory("news")}> News</button>
            <button className='create-btn' onClick={() => setCategory("discovery")}> Discovery</button>
            <button className='create-btn' onClick={() => setCategory("event")} > Event</button>

            <form>
                <input id='title' type="title" placeholder="Title"
                    value={title} onChange={e => setTitle(e.target.value)} />
                <input id='summary' type="summary" placeholder="Summary"
                    value={summary} onChange={e => setSummary(e.target.value)} />
                <input id='file' type="file"
                    onChange={e => setFiles(e.target.files)} />
            </form>
            <div className='quill-wrap'>
                <div className='quill'>
                    <Editor value={content} onChange={setContent} />
                    <button className='create-btn' onClick={createNewPost}> Create Post</button>
                </div>
            </div>


        </div>

    )
}
