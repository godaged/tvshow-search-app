import React, { Component } from 'react';
import SearchTextBox from '../Search/Search';
import './Pages.css';
import { Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            tvShows: "",
            showImage: "",
            cast: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        const showId = this.props.match.params.id != null ? this.props.match.params.id : 1;
        
        await this.doSearch(showId );
    }

    doSearch = async (showNumber ) => { //max show number = 41306
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
                    <div><Link to={'/Episodes/'+this.state.tvShows.id} ><h2><span>{this.state.tvShows.name}</span></h2></Link></div>
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