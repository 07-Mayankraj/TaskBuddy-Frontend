import React, { useState } from 'react'
import { useEffect } from 'react';
import NoticeCard from './NoticeCard';
function Notice() {
    let [data, setData] = useState([])
    const [show] = useState('');
    // console.log(setShow);
    async function getData() {
        try {
            let res = await fetch(`https://mock-11-6x55.onrender.com/notice`)
            let alldata = await res.json()
            setData(alldata);

        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        return () => getData();
    }, [show]);


    async function addData() {
        let obj = {
            name: prompt('enter name'),
            title: prompt('enter title'),
            description: prompt('enter dec')
        }
        console.log(obj);
        try {

            let res = await fetch(`https://mock-11-6x55.onrender.com/notice/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj),
            })
            if (res.status === 200) {
                alert("data added successfully")
                window.location.reload()
            }
            else {
                alert('error while updateing')
            }
        } catch (error) {
            console.log(error.message);
        }

    }
    console.log(data);
    return (
        <div style={{ width: "80%", margin: '10px auto', border: "1px solid red" }}>
            <button style={{ width: "100%", margin: '10px auto', backgroundColor: "black", color: "white",padding:"10px 20px" }} onClick={addData} button>add new notice </button>
            {
                data.map((ele) => {
                    return <NoticeCard key={ele.id} id={ele._id} name={ele.name} title={ele.title} des={ele.description} />
                })
            }
        </div>
    )
}

export default Notice