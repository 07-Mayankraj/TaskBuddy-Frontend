import React from 'react'

export default function NoticeCard({ id, name, title, des }) {
    async function handleclick() {
        try {

            let res = await fetch(`https://mock-11-6x55.onrender.com/notice/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            if (res.status === 200) {
                alert("data deleted successfully")
                window.location.reload()
            }
            else {
                alert('error while deleting')
            }
        } catch (error) {
            console.log(error.message);
        }

    }
    async function editclick() {
        let title = {
            title : prompt('enter title')
        }
        console.log(title);
        try {

            let res = await fetch(`https://mock-11-6x55.onrender.com/notice/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(title),
            })
            if (res.status === 200) {
                alert("data updated successfully")
                window.location.reload()
            }
            else {
                alert('error while updateing')
            }
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div style={{ width: "80%", margin: '10px auto', padding: "20px", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
            <h1>Title : {title}</h1>
            <h3>name : {name}</h3>
            <p>description : {des}</p>
            <button onClick={handleclick} button>delete </button>
            <button onClick={editclick} button>edit </button>
        </div>
    )
}
