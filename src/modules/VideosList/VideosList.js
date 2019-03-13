import React, { Fragment } from 'react';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';

import propTypes from 'prop-types';


const VideosList = ({videosList, onClickHandler, isCentered}) => {
    if (videosList) {
        videosList = videosList.map(function (video, index) {
            const {id} = video;
            const dataId= (id.kind==="youtube#video") ? id.videoId: id.playlistId;
            const isPlaylist = (id.kind==="youtube#video") ? false: true;
            return (
                <VideoThumbnail
                    key={index}
                    imageUrl={video.snippet.thumbnails.default.url}
                    title={video.snippet.title}
                    dataId={dataId}
                    isPlaylist={isPlaylist}
                    publishedAt={video.snippet.publishedAt}
                    onClickHandler={onClickHandler}
                    isCentered={isCentered}
                />
            );
        });
    }
    return (
        <Fragment>
            {videosList}
        </Fragment>
    );
}


VideosList.propTypes = {
    videosList: propTypes.array,
    isCentered: propTypes.bool,
    onClickHandler: propTypes.func
}


export default VideosList;
