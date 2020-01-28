import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import TopMenu from '../shared/TopMenu';
import { FetchPhotos } from '../../actions';

// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'space-around',
//       overflow: 'hidden',
//       backgroundColor: theme.palette.background.paper,
//     },
//     gridList: {
//       width: 500,
//       height: 450,
//     },
//     icon: {
//       color: 'rgba(255, 255, 255, 0.54)',
//     },
//   }));

// const classes = useStyles();
    
const root = {
    display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#ccc'
}
const gridList = {
    width: 300,
    height: 450,
}
const icon = {
    color: 'rgba(255, 255, 255, 0.54)'
}


class Photos extends Component {

    componentDidMount(){
        console.log("%%%% ", this.props.match.params.id)
        this.props.FetchPhotos(this.props.match.params.id);
    }

    render(){
        
        return(
            <div>
                <TopMenu page="ALBUMS" />
                <div className={root}>
                <GridList cellHeight={180} className={gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div"><h3>Album Title: {this.props.album.title}</h3></ListSubheader>
                    </GridListTile>
                    {this.props.photos && this.props.photos.map(tile => (
                    <GridListTile key={tile.id}>
                        <img src={tile.url} alt={tile.title} />
                        <GridListTileBar
                        title={tile.title}
                        subtitle={""}
                        actionIcon={
                            <IconButton aria-label={`info about ${tile.title}`} className={icon}>
                            <InfoIcon />
                            </IconButton>
                        }
                        />
                    </GridListTile>
                    ))}
                </GridList>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        photos: state.photos,
        album: state.album
    }
}

export default connect(
    mapStateToProps, { FetchPhotos }
)(Photos)