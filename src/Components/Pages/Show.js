import React, { Component } from 'react';
import SearchTextBox from '../Search/SearchShowNumber';
import noImage from '../../Images/no-image.png';
import mouseClick from '../../Images/mouseClick.png';
import { Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            tvShows: "",
            showImage: "",
            network: "",
            country: "",
            cast: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        const showId = this.props.match.params.id != null ? this.props.match.params.id : 1;

        await this.doSearch(showId);
    }

    doSearch = async (showNumber) => { //max show number = 41306
        const response = await fetch(`http://api.tvmaze.com/shows/${showNumber}?embed=cast`);
        const jsonData = await response.json();
        console.log(jsonData._embedded.cast);
        this.setState({
            tvShows: jsonData,
            showImage: jsonData.image.medium,
            cast: jsonData._embedded.cast,
            network: jsonData.network,
            country: jsonData.network.country,
        });
    }

    render() {
        return (
            <div className="" key={this.state.tvShows.id}>
                <div className="main-content  search">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>
                <div >
                    <div className="main-content">
                        <div>
                            <Link to={'/Episodes/' + this.state.tvShows.id} activeStyle={{ background: 'green' }}>
                                <h2 className="show-name"><span>{this.state.tvShows.name}<img src={mouseClick} alt="" width="20" height="20"/></span></h2>
                            </Link>
                        </div>
                    </div>
                    <div >
                        <div className="main-content">
                            <div className="wrapper-img ">
                                <img src={this.state.showImage} alt=""></img>
                            </div>
                            <div className="wrapper-text">
                                <span className="p-text " ><b>Show ID:</b> {this.state.tvShows.id},</span>
                                <br />
                                <span className="p-text "><b>  Network:</b> {this.state.network.name}, {this.state.country.name}</span>
                                <br />
                                <span className="p-text line-space"><b>Summary:</b></span>
                                <p className="bg-summary" dangerouslySetInnerHTML={{ __html: this.state.tvShows.summary }} />
                            </div>
                            <div className="clear-both"></div>
                            <div><br></br></div>
                        </div>
                    </div >

                    <div className="">
                        <div><h2 className="cast-content show-name">Cast</h2></div>
                        {this.state.cast.map(show => {
                            return (
                                <div className="wrapper-33" key={this.state.tvShows.externals.imdb + show.person.id + show.character.id} >
                                    <div ><img className="cast-img" src={show.person.image.medium} alt=""></img></div>
                                    <div >
                                        <div className="name-text name-box">{show.person.name} as<br /> {show.character.name} </div>
                                    </div>
                                    <br></br>
                                </div>

                            )
                        })}
                    </div>
                </div>
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