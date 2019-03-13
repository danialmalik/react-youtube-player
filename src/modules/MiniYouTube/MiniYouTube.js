import React, { Component } from 'react';

import YouTube from 'react-youtube';

import SearchBar from '../SearchBar/SearchBar';
import VideosList from '../VideosList/VideosList';

import APICaller from '../services/APICaller';
import Button from '../shared/Button/Button';

import {YOUTUBE_API_SEARCH, YOUTUBE_API_PLAYLIST_ITEMS} from '../constants/api_constants';
import {filterOutChannels, getPlaylistResults} from './helper';

import './MiniYouTube.css';


class MiniYouTube extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuery: '',
            currentVideoId: '',
            currentVideoTitle: '',
            nextPageToken: '',
            videosList: [],
            playlistId: '',
        }
    }

    

    searchVideos = (query, isLoadMore = false) => {
        const nextPageToken = isLoadMore ? this.state.nextPageToken : null;
        APICaller(query,YOUTUBE_API_SEARCH, nextPageToken)
            .then(response => {
                const videosList = isLoadMore ? this.state.videosList.concat(response.items) : response.items;
                const nextPageToken = response.nextPageToken;
                const filtered = filterOutChannels(videosList);
                this.setState({
                    currentQuery: query,
                    videosList: filtered,
                    isPlaylistContent: false,
                    nextPageToken
                })
            });
    }

    getPlaylistVideos = (playlistId, isLoadMore = false) => {
        const nextPageToken = isLoadMore ? this.state.nextPageToken : null;
        APICaller(playlistId, YOUTUBE_API_PLAYLIST_ITEMS, nextPageToken)
            .then(response => {
                response = getPlaylistResults(response);
                const videosList = isLoadMore ? this.state.videosList.concat(response.items) : response.items;
                const nextPageToken = response.nextPageToken;
                this.setState({
                    videosList,
                    nextPageToken,
                    playlistId
                })
            });
    }

    onVideoClickHandler = (dataId, title, isPlaylist) => {
        if (!isPlaylist) {
            this.setState({
                currentVideoId: dataId,
                currentVideoTitle: title
            })
        } else {
            this.getPlaylistVideos(dataId)
        }
    }

    render() {
        const YouTubePlayer = this.state.currentVideoId ?
            (<div className="col-sm-8 video-player">
                <YouTube
                    videoId={this.state.currentVideoId}
                />
                <h3><strong>{this.state.currentVideoTitle}</strong></h3>
            </div>) : null;

        let loadMoreButton;
        if (this.state.nextPageToken) {
            const loadMoreHandler = this.state.playlistId ?
                () => this.getPlaylistVideos(this.state.playlistId, true) :
                () => this.searchVideos(this.state.currentQuery, true);
            loadMoreButton = (
                <Button text="Load More Videos" onClickHandler={loadMoreHandler} />
            )
        }
        



        return (
            <div className="container container-fluid">
                <SearchBar searchHandler={query => this.searchVideos(query)} />
                <div className="row">
                    {YouTubePlayer}
                    <div className="col">
                        <VideosList
                            isCentered={this.state.currentVideoId ? false : true}
                            videosList={this.state.videosList}
                            onClickHandler={
                                (videoId, title, isPlaylist) => this.onVideoClickHandler(
                                    videoId, title, isPlaylist
                                )}
                            loadMoreHandler={() => this.laodMoreVideos()}
                        />
                        {loadMoreButton}
                    </div>

                </div>
            </div>
        );
    }
}


export default MiniYouTube;
