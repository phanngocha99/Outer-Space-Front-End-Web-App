import "../style/edit-page.css"
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

export default function EditNews() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('https://outer-space-api.vercel.app/news/' + id)
            .then(response => {
                response.json().then(newsInfo => {
                    setTitle(newsInfo.title);
                    setContent(newsInfo.content);
                    setSummary(newsInfo.summary);
                });
            });
    }, []);

    async function updateNews(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        const response = await fetch('https://outer-space-api.vercel.app/news', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.status === 200) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className="edit-post-page">
            <form >
                <input type="title"
                    placeholder={'Title'}
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />
                <input type="summary"
                    placeholder={'Summary'}
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)} />
                <input type="file"
                    onChange={ev => setFiles(ev.target.files)} />
                <Editor onChange={setContent} value={content} />
            </form>
            <button style={{ marginTop: '5px' }} onClick={updateNews}>Update post</button>

        </div>

    );
}