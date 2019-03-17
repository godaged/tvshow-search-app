import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SearchTextBox from '../Search/SearchShowName';
import noImage from '../../Images/no-image.png';
import mouseClick from '../../Images/mouseClick.png';

class Home extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            showsPerPage: 10,
            tvShows: [],
            images: [],
            imageLoadError: true,
        }
        this.doSearch = this.doSearch.bind(this);
        

    }

    randomShowName = function() {
        const showNameList = ["girl", "apple", "dad", "crime", "ghost",  "king", "love", "bond", "candy", "ego", "funny", "happy", "idiot", "joke", "money", "orange", "private", "queen", "respect"];
        const randNum = Math.floor(Math.random() * showNameList.length);
        console.log(showNameList);
        console.log(randNum);
        return showNameList[randNum];
    }
    
    async componentDidMount() {
        await this.doSearch();
    }

    //fetch API data
    doSearch = async (showName = this.randomShowName()) => { //, limit = 10
        let jsonData = [];
        let jsonDataSliced = [];
        const response = await fetch(`http://api.tvmaze.com/search/shows?q=${showName}`);
        jsonData = await response.json();
        jsonDataSliced = jsonData;//.slice(0, limit); //limits shows to display 10 using array slice method
        //console.log(jsonData)
        this.setState({ tvShows: jsonDataSliced });
    }
    //on error with null image
    onError() {
        this.setState({
            imageUrl: { noImage }
        })
    }

    render() {
        let showImage;
        return (
            <div>
                {/* Search for name containing show name to load */}
                <div className="search main-content">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>

                {this.state.tvShows.map(show => {
                    //{/* handle if image is null, replace default noImage image */ }
                    if (show.show.image != null) {
                        showImage = show.show.image.medium;
                    } else {
                        showImage = noImage;
                    }

                    return (
                        <div className="main-content" key={show.show.id}>
                            <div  >
                                {/* Displays Show Name and click icon */}
                                <Link to={'/Show/' + show.show.id} >
                                    <h2 className="show-name">{show.show.name}
                                        <img src={mouseClick} alt="Navigate to Show Details" width="20" height="20" />
                                    </h2>
                                </Link>
                            </div>
                            {/* Uses bootstrap media to loop shows*/}
                            <Media >
                                <div className="wrapper-img ">
                                    <img onError={this.onError.bind(this)} src={showImage} alt="" />
                                </div>
                                <Media.Body>
                                    <div  >
                                        <span className="p-text line-space" >
                                        <p></p>
                                            <p><b>Show ID:</b> {show.show.id}</p>
                                            <p><b>OfficialSite:</b>.{show.show.officialSite}</p>
                                            <p><b>Stars:</b> {show.show.rating.average}</p>
                                            <p><b>Summary:</b></p>
                                        </span>
                                        <p className="bg-summary" dangerouslySetInnerHTML={{ __html: show.show.summary }} />
                                    </div>
                                </Media.Body>
                            </Media >
                        </div>
                    )
                })}
                <br/>
            </div>
        )
    }

}

export default Home;