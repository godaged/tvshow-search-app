import React, { Component } from 'react';
import SearchTextBox from '../Search/Search';

class Body extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            showsPerPage: "",
            tvShows: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        await this.doSearch();
    }

    doSearch = async (showName = 'Loui', limit = 10) => {
        let jsonData = [];
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${showName}&limit=2`);
        jsonData = await response.json();
        this.setState({ tvShows: jsonData.slice(0, limit) });
    }

    render() {
        return (
            <div>
                <div className="">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>
                {this.state.tvShows.map(show => {
                    return (
                        <div>
                            <div><h2><span>{show.show.name}</span><span> "img"</span></h2></div>
                            {/* <div dangerouslySetInnerHTML={{ __html: show.show.summary }} /> */}
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

export default Body;