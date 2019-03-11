import React, { Component } from 'react';
import SearchTextBox from '../Search/Search';
import './Pages.css';

class Show extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            tvShows: "",
            showImage: "",
            cast: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        await this.doSearch();
    }

    doSearch = async (showNumber = 2) => { //max show number = 41306
        const response = await fetch(`http://api.tvmaze.com/shows/${showNumber}?embed=cast`);
        const jsonData = await response.json();
        console.log(jsonData._embedded.cast);
        this.setState({ tvShows: jsonData, showImage: jsonData.image.medium, cast: jsonData._embedded.cast });
    }

    render() {
        return (
            <div key={this.state.tvShows.id}>
                <div className="">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>

                <div>
                    <div><h2><span>{this.state.tvShows.name}</span></h2></div>
                    <div><img src={this.state.showImage} alt=""></img></div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.tvShows.summary }} />
                </div>                
                <div><h2>Cast</h2></div>
                {this.state.cast.map(show => {
                    return (
                        <div className="show-list" key={this.state.tvShows.externals.imdb + show.person.id + show.character.id} >
                            <div  className="img-wrap"><p>{show.person.name} as {show.character.name} </p></div>
                            <div  className="img-wrap"><img src={show.person.image.medium} alt=""></img></div>
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

export default Show;