import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Numberlist() {

    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const apiUrl = "http://localhost:3010/userdata";

    useEffect(() => {
        fetch(apiUrl, { method: "GET" })
            .then(res => res.json())
            .then(res => setData(res))
    }, []);

    const FormattedDoc = data.map((c) => {
        return (
            <div className="card" style={{ width: '18rem' }} key={c.NumberID}>
            <img src={c.Image} className="card-img-top" alt={c.Name} />
            <div className="card-body">
                <h5 className="card-title">{c.Name}</h5>
                <h6 className="card-subtitle my-1">Number: {c.MobileNumber}</h6>
                <h6 className="card-subtitle my-1">Address: {c.Address}</h6>
                <h6 className="card-subtitle my-1 ">Relation: {c.Relation}</h6>
                <button className="btn btn-danger mx-3 my-1" onClick={()=>{
                const apiUrl = "http://localhost:3010/user/delete/"+c.NumberID;

                fetch(apiUrl, {method:"DELETE"})
                .then(res=>res.json())
                .then(res=>{
                    navigate('/Numberlist');
                })
            }}>Delete</button>
                <Link to={`/Edit/${c.NumberID}`}>
    <button className="btn btn-info">Edit</button>
</Link>
            </div>
        </div>
            
        );
    });

    return (
        <>
            <div className="row">
                <div className="col-3">
                   {FormattedDoc}
                </div>
            </div>
        </>
    );
}

export default Numberlist;