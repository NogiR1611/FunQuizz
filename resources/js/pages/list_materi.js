import React,{Component} from "react";
import {Link} from "react-router-dom";
import PostData from "../data/materi.json";
import "../css/style.css";

class ListMateri extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage : 1,
            itemsPerPage : 8
        }
    }

    handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }

    render(){
        const {currentPage,itemsPerPage} = this.state;
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const sortData = PostData.sort((a,b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        });
        const currentItems = sortData.slice(indexOfFirstItem,indexOfLastItem);

        const renderItems = currentItems.map((postDetail,index) => {
            return (
                <div className="col-md-3 item-materi" key={index}>
                    <Link to={'/list-materi/' + postDetail.name } >
                        <img src={postDetail.image} className="image-list" alt="" />
                        <h1>{postDetail.name}</h1>
                    </Link>
                </div>
            );
        });

        const pageNumbers = [];
        for(let i=1; i<=Math.ceil(PostData.length/itemsPerPage); i++){
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map( number => {
            return (
                <li
                    className="list-pagination"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        const totalPage = PostData.length/itemsPerPage;
        return (
                <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center list-materi">
                    <div className="text-center-light title-materi">
                        <p>Materi Pembelajaran</p>
                        <p className="item-per-page">{currentPage}/{totalPage}</p>
                    </div>
                    <div className="row">
                        {renderItems}
                    </div>
                    <ul className="pagination">
                        {renderPageNumbers}
                    </ul>
                    <div className="column-button">
                        <a href="/pertanyaan" className="button-navigation" id="try-quiz">Coba kuis</a>
                        <a href="/home" className="button-navigation" id="back-menu">Kembali</a>
                    </div>
                </div>
        );
    }
}

export default ListMateri;