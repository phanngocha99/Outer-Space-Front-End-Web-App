import "../style/edit-page.css"
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";

export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    // const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('https://outer-space-api.vercel.app/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                });
            });
    }, []);

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        // if (files?.[0]) {
        //     data.set('file', files?.[0]);
        // }
        const response = await fetch('https://outer-space-api.vercel.app/post', {
            method: 'PUT',
            body: JSON.stringify({ title, summary, content, id }),
            headers: { 'Content-type': 'application/json' },
            credentials: 'include',
        });
        if (response.status === 200) {
            setRedirect(true);
        } else if (response.status === 413) {
            alert('Đã xảy ra lỗi: ' + response.status + '- Kích thước tệp quá lớn. Hãy thử tạo lại bài.')
        }
        else {
            alert('Đã xảy ra lỗi: ' + response.status)
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }

    return (
        <div className='edit-area'>
            <h1>CHỈNH SỬA BÀI VIẾT</h1>
            <form >
                <input type="title" id="title" maxlength="30"
                    placeholder={'Title'}
                    value={title}
                    onChange={ev => setTitle(ev.target.value)} />
                <input type="summary" id="summary" maxlength="50"
                    placeholder={'Summary'}
                    value={summary}
                    onChange={ev => setSummary(ev.target.value)} />
                {/* <input type="file"
                    onChange={ev => setFiles(ev.target.files)} /> */}
            </form>
            <div className='quill-wrap'>
                <div className='quill'>
                    <Editor value={content} onChange={setContent} />
                    <button className='edit-btn' onClick={updatePost}>CHỈNH SỬA </button>
                </div>
            </div>
        </div>

    );
}