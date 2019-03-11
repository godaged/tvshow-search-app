import React, { Component } from 'react';
import SearchTextBox from '../Search/Search';
import noImage from '../../Images/no-image.png';
import './Pages.css';

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
                <div className="">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>

                {this.state.tvShows.map(show => {
                    return (
                        <div key={show.show.id}>
                            {/* <div><h2><span>{show.show.name}</span></h2></div> */}
                            {/* <div><img src={show.show.image.medium} alt=""></img></div> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: show.show.summary }} /> */}
                            <div ><a href={show.show.image.medium} ><h2>{show.show.name}</h2></a> </div>

                            <img onError={this.onError.bind(this)} src={show.show.image.medium} alt="" />
                            {/* <img src={show.show.image.medium} ref={img => this.img = img} onError={() => this.img.src = {noImage}}></img> */}
                            {/* <img src={show.show.image.medium} onError={(e)=>{e.target.src="https://en.wikipedia.org/wiki/File:No_image_available.svg"}}/> */}

                            {/* <div dangerouslySetInnerHTML={{__html: show.show.summary}} /> */}
                        </div>
                    )
                })}
            </div>
        )
    }

    // render() {
    //     return (
    //         <div>
    //              {this.state.tvShows.map(show => { 
    //             return (
    //             <div>
    //                 <div><a href={show.show.image.medium} ><h2>{show.show.name}</h2></a> </div>
    //                 <div><img src={show.show.image.medium} alt=""></img></div>
    //                 <div dangerouslySetInnerHTML={{__html: show.show.summary}} />
    //              </div> 
    //              )})}
    //         </div>            
    //     )
    // }
}

export default Home;