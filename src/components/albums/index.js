import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import TopMenu from '../shared/TopMenu';
import Album from './Album';

import { FetchAlbums } from '../../actions'

class Albums extends Component {

    componentDidMount(){
        this.props.FetchAlbums();
    }

    render(){
        return (
            <div>
                <TopMenu page="ALBUMS" />
                <div className={{flexGrow: "1"}}>
                    <Grid container spacing={3}>
                        {this.props.Photo_albums && this.props.Photo_albums.map(album => {
                            return <Album key={album.id} album={album} />
                        })}
                    </Grid>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        Photo_albums: state.photo_albums
    }
}

export default connect(mapStateToProps, { FetchAlbums })(Albums);