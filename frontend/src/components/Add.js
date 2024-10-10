import { useEffect, useState } from "react"

export default function Add() {
    
    const [data,setData] = useState({});    
    const [isDisabled,setIsDisabled]=useState(false);
    const [msg, setMsg] = useState(false);
    function send(e){
            e.preventDefault();

            setIsDisabled(true);
            fetch('http://localhost:3010/data',{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json'
                }
                
            }).then((res)=>{
                res.json();
            }).then((res)=>{
                setIsDisabled(false)
                setMsg(true);
                console.log(res);
            })
    }
    
    return (
        <>
            <div className="row justify-content-center my-5">
                <div className="col-md-6 col-lg-4  bg-dark text-white p-5 rounded">

                    <h1 className="mb-3">Add Number</h1>
                <form>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">NumberID</label>
                        <input type="text" class="form-control" name="name" aria-describedby="emailHelp" placeholder="Enter id" onChange={(e)=>{
                            setData({
                                ...data,NumberID:e.target.value
                            });
                            console.log(data);
                            
                        }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" name="name" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=>{
                            setData({
                                ...data,Name:e.target.value
                            });
                            console.log(data);
                            
                        }} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Number</label>
                        <input type="text" class="form-control" placeholder="Enter Number" onChange={
                            (e)=>{
                                setData({
                                    ...data,MobileNumber:e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <div class="mb-3 ">
                        <label class="form-label" for="exampleCheck1">Adderss</label>
                        <input type="text" class="form-control" placeholder="Enter Address" onChange={
                            (e)=>{
                                setData({
                                    ...data,Address:e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <div class="mb-3 ">
                        <label class="form-label" for="exampleCheck1">Relation</label>
                        <input type="text" class="form-control" placeholder="Enter Relation" onChange={
                            (e)=>{
                                setData({
                                    ...data,Relation:e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <div class="mb-3 ">
                        <label class="form-label" for="exampleCheck1">Image</label>
                        <input type="text" class="form-control" placeholder="Enter Image path if you have" onChange={
                            (e)=>{
                                setData({
                                    ...data,Image:e.target.value
                                });
                                console.log(data);
                                
                            }
                        }/>
                    </div>
                    <button onClick={send} class="btn btn-light" disabled={isDisabled}>Add</button>
                    <br />
                    {msg?<label className="m-2 text-success "> Added Successful ! </label>:<></>}
                </form>
                </div>
            </div>
        </>
    )
}