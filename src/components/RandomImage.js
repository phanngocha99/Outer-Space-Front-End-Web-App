import { useEffect, useState } from "react";

export default function GenerateRandomImage() {
    const API_KEY = "pXB8NrhZ60hbidBRMvbv4iGkaXNT1uzeRy0g4rtl";
    var randomDate = generateRandomDate(new Date(2023, 0, 1), new Date());

    const [apod, setApod] = useState([]);
    useEffect(() => {
        async function fetchImage() {
            await fetch("https://api.nasa.gov/planetary/apod?" + "api_key=" + API_KEY + "&date=" + randomDate)
                .then(res => {
                    res.json().then(apod => {
                        setApod(apod);
                    });
                });
        };
        fetchImage();
    }, []);

    return (
        <img src={apod.hdurl} alt="news" />
    )

};

function generateRandomDate(from, to) {
    return new Date(
        from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    ).toISOString().split('T')[0];
}
