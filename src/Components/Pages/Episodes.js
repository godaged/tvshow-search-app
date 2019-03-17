
import React, { Component } from 'react';
import SearchTextBox from '../Search/SearchShowNumber';
import noImage from '../../Images/no-image.png';


class Episodes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: "",
            tvShows: "",
            episodes: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        const showId = this.props.match.params.id != null ? this.props.match.params.id : 1;
        await this.doSearch(showId);
    }

    doSearch = async (showNumber = 1, limit = 10) => {
        let jsonEpisodeData = [];
        const responseEpisode = await fetch(`http://api.tvmaze.com/shows/${showNumber}/episodes`);
        jsonEpisodeData = await responseEpisode.json();
        const responseShow = await fetch(`http://api.tvmaze.com/shows/${showNumber}`);
        const jsonShowData = await responseShow.json();
        //console.log(jsonData)
        this.setState({ episodes: jsonEpisodeData, tvShows: jsonShowData });
    }

    render() {
        return (
            <div className="main-content">
                <div className="search">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>
                <div>
                    <h2 className="show-name">{this.state.tvShows.name}</h2>
                    <h3>Episode List</h3>
                </div>

                {this.state.episodes.map(episode => {
                    return (
                        <div key={episode.id}>
                            <div><h3 className="episode-name"><span>{episode.name}</span></h3></div>
                            <div className="bg-summary episode-summary-bg" dangerouslySetInnerHTML={{ __html: episode.summary }} />
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Episodes;