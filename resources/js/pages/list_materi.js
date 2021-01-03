import React,{Component} from "react";
import PostData from "../data/materi.json";
import "../css/style.css";

class ListMateri extends Component{
    render(){
        return (
            <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                    <div className="text-center fs-2">
                        <p>Materi Pembelajaran</p>
                    </div>
                    <div className="row list-materi">
                        {PostData.map( (postDetail,index)=>{
                            return (
                                <div className="col-md-3 item-materi">
                                    <a href={'/list-materi/' + postDetail.id} >
                                        <img src={postDetail.image} className="image-list" alt="" />
                                        <h1>{postDetail.name}</h1>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
            </div>
        );
    }
}

export default ListMateri;