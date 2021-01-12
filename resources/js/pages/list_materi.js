import React,{Component} from "react";
import {Link} from "react-router-dom";
import PostData from "../data/materi.json";
import "../css/style.css";

class ListMateri extends Component{
    render(){
        return (
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center list-materi">
                    <div className="text-center-light fs-2">
                        <p>Materi Pembelajaran</p>
                    </div>
                    <div className="row">
                        {PostData.map( (postDetail,index)=>{
                            return (
                                <div className="col-md-3 item-materi" key={index}>
                                    <Link to={'/list-materi/' + postDetail.id } >
                                        <img src={postDetail.image} className="image-list" alt="" />
                                        <h1>{postDetail.name}</h1>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
        );
    }
}

export default ListMateri;