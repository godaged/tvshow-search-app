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
            network: "",
            cast: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        //if null, set showId to 1
        const showId = this.props.match.params.id != null ? this.props.match.params.id : 1;
        await this.doSearch(showId);
    }

    //fetch API call
    doSearch = async (showNumber) => { //max show number = 41306
        const response = await fetch(`http://api.tvmaze.com/shows/${showNumber}?embed=cast`);
        const jsonData = await response.json();
        //console.log(jsonData._embedded.cast);
        this.setState({
            tvShows: jsonData,
            cast: jsonData._embedded.cast,
            network: jsonData.network,
        });
    }

    render() {
        //{/* handle if image is null, replace default noImage image */ }
        let showImage;
        if (this.state.tvShows.image != null) {
            showImage = this.state.tvShows.image.medium;
        } else {
            showImage = noImage;
        }
        return (

            <div className="" key={this.state.tvShows.id}>
                {/**Search Show Number */}
                <div className="main-content  search">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>
                <div >
                    <div className="main-content">
                        <div>
                            {/* This Link will Navigate to Episode List for this Show setting id property */}
                            <Link to={'/Episodes/' + this.state.tvShows.id} >
                                <h2 className="show-name">
                                    <span>{this.state.tvShows.name}
                                        <img src={mouseClick} alt="Navigate to Episodes" width="20" height="20" />
                                    </span>
                                </h2>
                            </Link>
                        </div>
                    </div>
                    <div >
                        <div className="main-content">
                            <div className="wrapper-img ">
                                <img src={showImage} alt=""></img>
                            </div>
                            <div className="wrapper-text">
                                <span className="p-text line-space" >
                                    <p></p>
                                    <p><b>Show ID:</b> {this.state.tvShows.id}</p>
                                    <p><b>  Network:</b>
                                        {this.state.network != null ? this.state.network.name : ""}, {this.state.country != null ? this.state.country.name : ""}
                                    </p>
                                    <p><b>Summary:</b></p>
                                </span>
                                <p className="bg-summary" dangerouslySetInnerHTML={{ __html: this.state.tvShows.summary }} />
                            </div>
                            <div className="clear-both"></div>
                            <div></div>
                        </div>
                    </div >

                    <div className="">
                        <div>
                            <h2 className="cast-content show-name">
                                {"Cast"}
                            </h2>
                        </div>
                        {this.state.cast.map(show => {
                            return (
                                <div className="wrapper-33" key={this.state.tvShows.externals.imdb + show.person.id + show.character.id} >
                                    <div >
                                        <img className="cast-img" src={show.person.image.medium} alt="">
                                        </img>
                                    </div>
                                    <div >
                                        <div className="name-text name-box">
                                            {show.person.name} as<br /> {show.character.name}
                                        </div>
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
}

export default Show;