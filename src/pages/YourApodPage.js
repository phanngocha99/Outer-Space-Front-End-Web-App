import { useEffect, useState } from "react";
import "../style/apod.css"

export default function YourApod() {
    const API_KEY = "pXB8NrhZ60hbidBRMvbv4iGkaXNT1uzeRy0g4rtl";

    const [apod, setApod] = useState([]);
    const [date, setDate] = useState(null);


    async function fetchImage() {
        const APOD_RESPONSE = await fetch("https://api.nasa.gov/planetary/apod?" + "api_key=" + API_KEY + "&date=" + date)
        if (APOD_RESPONSE.status == 200) {
            const APOD_DATA = APOD_RESPONSE.json();
            APOD_DATA.then(apod => {
                setApod(apod);
            });
        }
        else if (APOD_RESPONSE.status == 429) {
            alert("Đã xảy ra lỗi: Đạt giới hạn truy cập")
        }
        else {
            alert("Đã xảy ra lỗi.")

        }
    }

    if (date) {
        fetchImage();
    }

    return (
        <div className="apod-wrap">
            <div class="container">
                <h1>Astromomy Picture of Your BirthDay </h1>
                <div class="apod">
                    <div class="date">
                        <input type="date" name="date" id="date" onChange={e => setDate(e.target.value)} />
                        <button><i class='bx bx-search-alt-2'></i></button>
                    </div>

                    {
                        date
                            ? <>
                                <div class="information">
                                    <h1>{apod.title}</h1>
                                    <h2>{apod.date}</h2>

                                </div>
                                <div class="image">
                                    <img src={apod.hdurl} alt="apod img" />
                                </div>
                                <p class="explanation">
                                    {apod.explanation}
                                </p>
                            </>
                            : <div style={{ color: "#fff", fontSize: "20px", margin: "20px" }}>HÃY NHẬP NGÀY SINH CỦA BẠN</div>
                    }

                </div>
            </div>
        </div >
    )

};
