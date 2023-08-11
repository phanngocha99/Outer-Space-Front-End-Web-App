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
    // const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function createNewPost() {
        console.log(category)
        // data.set('file', files[0]);
        if (category === "khám phá") {
            const response = await fetch('https://outer-space-api.vercel.app/post', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title, summary, content }),
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            }
        } else if (category === "tin tức") {
            const response = await fetch('https://outer-space-api.vercel.app/news', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title, summary, content }),
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            }
        } else if (category === "sự kiện") {
            const response = await fetch('https://outer-space-api.vercel.app/event', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title, summary, content }),
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            } else {
                alert('Đã xảy ra lỗi: ' + response.status)
            }
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <div className='create-area'>
            <h1>TẠO BÀI VIẾT</h1>
            <h2> Chọn lĩnh vực muốn đăng bài:</h2>
            <div className="category">
                <button className='create-btn' onClick={() => setCategory("tin tức")} onFocus={(e) => e.target.style.backgroundColor = '#f8793e'} onBlur={(e) => e.target.style.backgroundColor = '#f2642276'}> News</button>
                <button className='create-btn' onClick={() => setCategory("khám phá")} onFocus={(e) => e.target.style.backgroundColor = '#f8793e'} onBlur={(e) => e.target.style.backgroundColor = '#f2642276'}> Discovery</button>
                <button className='create-btn' onClick={() => setCategory("sự kiện")} onFocus={(e) => e.target.style.backgroundColor = '#f8793e'} onBlur={(e) => e.target.style.backgroundColor = '#f2642276'} > Event</button>
            </div>
            <h3>Lĩnh vực đăng bài của bạn là: {category}</h3>
            <form>
                <input id='title' type="text" placeholder="Title" maxlength="30"
                    value={title} onChange={e => setTitle(e.target.value)} />
                <input id='summary' type="text" placeholder="Summary" maxlength="50"
                    value={summary} onChange={e => setSummary(e.target.value)} />
                {/* <input id='file' type="file"
                    onChange={e => setFiles(e.target.files)} /> */}
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
