import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


export default function MajorInfo() {
    const { Faculty, Major } = useParams(); // read url param user id from other user item
    const [data, setData] = useState([]);

    console.log(Faculty);
    console.log(Major);

    const getData = () => {
        fetch("../../" + Faculty + ".json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            });
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="myTable">
            {data && data.length ?
                <div>
                    <span>{data[0].WhyApply}</span>
                </div>
            : ""}
        </div>
    );
}