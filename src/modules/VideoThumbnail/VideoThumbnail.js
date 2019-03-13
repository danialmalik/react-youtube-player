import React from 'react';
import propTypes from 'prop-types';

import classNames from 'classnames';

import './VideoThumbnail.css';


const VideoThumbnail = ({ onClickHandler, dataId, isCentered, isPlaylist, title, publishedAt, imageUrl }) => {
    const handleClick = () => {
        onClickHandler(dataId, title, isPlaylist);
    }

    const thumbnailClassName = classNames("card thumbnail", { "centered": isCentered });
    const imageDivClassName = classNames({ "col-sm-2": isCentered }, { "col-sm-4": !isCentered });

    const playListTag = isPlaylist ? (
        <span><strong>***Playlist***</strong></span>
    ) : '';

    return (
        <span onClick={handleClick} className="list">
            <div className={thumbnailClassName} >

                <div className="card-body">
                    <div className="row">
                        <div className={imageDivClassName}>
                            <img className="thumbnail-image card-img-top img-fluid" alt="img" src={imageUrl} />
                        </div>
                        <div className="col">
                            {playListTag}
                            <p className="card-text">{title}</p>
                            <span>{publishedAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );
}


VideoThumbnail.propTypes = {
    onClickHandler: propTypes.func,
    isCentered: propTypes.bool,
    isPlaylist: propTypes.bool,
    dataId: propTypes.string,
    title: propTypes.string,
    publishedAt: propTypes.string,
    imageUrl: propTypes.string,
}


export default VideoThumbnail;
