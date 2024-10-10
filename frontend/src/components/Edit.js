import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
    const [data, setData] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const [msg, setMsg] = useState(false);
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch existing user data based on NumberID
        fetch(`http://localhost:3010/userdata/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch user data");
                }
                return res.json();
            })
            .then((userData) => {
                setData(userData); // Set the fetched user data into the state
            })
            .catch(err => {
                console.error("Error fetching user data:", err);
            });
    }, [id]);

    function handleUpdate(e) {
        e.preventDefault();

        setIsDisabled(true);
        fetch(`http://localhost:3010/userdata/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to update user data");
            }
            return res.json();
        })
        .then((res) => {
            setIsDisabled(false);
            setMsg(true);
            console.log(res);
            navigate('/Numberlist'); // Redirect to the list page after editing
        })
        .catch((err) => {
            setIsDisabled(false);
            console.error("Error updating user:", err);
        });
    }

    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-md-6 col-lg-4 bg-dark text-white p-5 rounded">
                    <h1 className="mb-3">Edit User</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <label className="form-label">NumberID</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.NumberID || ''}
                                onChange={(e) => setData({ ...data, NumberID: e.target.value })}
                                disabled // Disable ID field during editing
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.Name || ''}
                                onChange={(e) => setData({ ...data, Name: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Number</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.MobileNumber || ''}
                                onChange={(e) => setData({ ...data, MobileNumber: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.Address || ''}
                                onChange={(e) => setData({ ...data, Address: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Relation</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.Relation || ''}
                                onChange={(e) => setData({ ...data, Relation: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.Image || ''}
                                onChange={(e) => setData({ ...data, Image: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="btn btn-light" disabled={isDisabled}>
                            Update
                        </button>
                        <br />
                        {msg ? <label className="m-2 text-success">Update Successful!</label> : <></>}
                    </form>
                </div>
            </div>
        </>
    );
}
