
import React, { Component } from 'react';
import SearchTextBox from '../Search/Search';
import noImage from '../../Images/no-image.png';
import './Pages.css';

class Episodes extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            episodes: [],
        }
        this.doSearch = this.doSearch.bind(this);
    }

    async componentDidMount() {
        await this.doSearch();
    }

    doSearch = async (showNumber = 1, limit = 10) => {
        let jsonData = [];
        const response = await fetch(`http://api.tvmaze.com/shows/${showNumber}/episodes`);
        jsonData = await response.json();
        //console.log(jsonData)
        this.setState({ episodes: jsonData });
    }

    render() {
        return (
            <div>
                <div className="">
                    <SearchTextBox onSearch={this.doSearch} />
                </div>

                {this.state.episodes.map(episode => {
                    return (
                        <div key={episode.id}>
                            <div><h2><span>{episode.name}</span></h2></div> 
                            <div dangerouslySetInnerHTML={{__html: episode.summary}} />
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Episodes;