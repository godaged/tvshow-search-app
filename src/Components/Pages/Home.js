import React, { Component } from 'react';
import SearchTextBox from '../Search/SearchShowName';
import noImage from '../../Images/no-image.png';
import mouseClick from '../../Images/mouseClick.png';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            showsPerPage: 10,
            tvShows: [],
            imageLoadError: true,
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        await this.doSearch();
    }

    doSearch = async (showName = 'girls', limit = 10) => {
        let jsonData = [];
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${showName}`);
        jsonData = await response.json();
        console.log(jsonData)
        this.setState({ tvShows: jsonData.slice(0, limit) });
    }

    onError() {
        this.setState({
            imageUrl: { noImage }
        })
    }
    render() {
        return (
            <div>
                <div className="search main-content">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>

                {this.state.tvShows.map(show => {
                    return (
                        <div className="main-content" key={show.show.id}>

                            {/* <div><h2><span>{show.show.name}</span></h2></div> */}
                            {/* <div><img src={show.show.image.medium} alt=""></img></div> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: show.show.summary }} /> */}
                            <div  >
                                <Link to={'/Show/' + show.show.id} activeStyle={{background: 'green'}}><h2 className="show-name">{show.show.name} <img src={mouseClick} alt="" width="20" height="20"/> </h2></Link>
                            </div>
                            <Media >
                                <div className="wrapper-img "> 
                                    <img  onError={this.onError.bind(this)} src={show.show.image.medium} alt="" />
                                    {/* <img src={show.show.image.medium} ref={img => this.img = img} onError={() => this.img.src = {noImage}}></img> */}
                                    {/* <img src={show.show.image.medium} onError={(e)=>{e.target.src="https://en.wikipedia.org/wiki/File:No_image_available.svg"}}/> */}
                                </div>
                                <Media.Body>
                                    <div  >
                                    <span className="p-text " ><b>Show ID:</b> {show.show.id }
                                    <br/><b>Official Site: </b>{show.show.officialSite}</span>
                                    <br />
                                    <span className="p-text "><b>  Stars:</b> {show.show.rating.average }</span>
                                    <br/>
                                    <span className="p-text line-space"><b>Summary:</b></span>
                                    <p className="bg-summary" dangerouslySetInnerHTML={{ __html: show.show.summary }} />
                                    </div>
                                    
                                </Media.Body>
                            </Media >
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Home;