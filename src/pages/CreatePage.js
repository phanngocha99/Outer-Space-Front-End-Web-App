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
        if (category === "hãy chọn lĩnh vực muốn đăng bài") {
            alert("Hãy chọn lĩnh vực muốn đăng bài")
        }
        if (category === "khám phá") {
            const response = await fetch('https://outer-space-api.vercel.app/post', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            } else if (response.status === 413) {
                alert('Đã xảy ra lỗi: ' + response.status + '- Kích thước tệp quá lớn. Hãy thử tạo lại bài.')
            } else {
                alert('Đã xảy ra lỗi: ' + response.status)
            }

        } else if (category === "tin tức") {
            const response = await fetch('https://outer-space-api.vercel.app/news', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            } else if (response.status === 413) {
                alert('Đã xảy ra lỗi: ' + response.status + '- Kích thước tệp quá lớn. Hãy thử tạo lại bài.')
            } else {
                alert('Đã xảy ra lỗi: ' + response.status)
            }
        } else if (category === "sự kiện") {
            const response = await fetch('https://outer-space-api.vercel.app/event', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
            if (response.status === 200) {
                setRedirect(true);
            } else if (response.status === 413) {
                alert('Đã xảy ra lỗi: ' + response.status + '- Kích thước tệp quá lớn. Hãy thử tạo lại bài.')
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
                <button className='create-btn' onClick={() => setCategory("tin tức")} onFocus={(e) => e.target.style.backgroundColor = '#f8793e'} onBlur={(e) => e.target.style.backgroundColor = '#f2642276'}> Tin Tức</button>
                <button className='create-btn' onClick={() => setCategory("khám phá")} onFocus={(e) => e.target.style.backgroundColor = '#f8793e'} onBlur={(e) => e.target.style.backgroundColor = '#f2642276'}> Khám Phá</button>
                <button className='create-btn' onClick={() => setCategory("sự kiện")} onFocus={(e) => e.target.style.backgroundColor = '#f8793e'} onBlur={(e) => e.target.style.backgroundColor = '#f2642276'} > Sự Kiện</button>
            </div>
            <h3>Lĩnh vực đăng bài của bạn là: <p style={{ color: "#F26522", display: "inline", textTransform: "uppercase" }}>{category}</p></h3>
            <form>
                <input id='title' type="text" placeholder="Title" maxlength="30"
                    value={title} onChange={e => setTitle(e.target.value)} />
                <input id='summary' type="text" placeholder="Summary" maxlength="50"
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
