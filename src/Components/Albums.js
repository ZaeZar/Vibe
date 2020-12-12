import React, {Component} from 'react';
import {Media} from 'reactstrap';

class Albums extends Component{
    render(){
        const albums = this.props.albums.map((album) => {
            return (
                <div key={album.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={album.image} alt={album.name}/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{album.name}</Media>
                        </Media>
                    </Media>
                </div>
            );

        })
        return(
            <div className="container">
            <div className="row">
                <Media list>
                    {albums}
                </Media>
            </div>
            </div>
        )
    }
}
export default Albums;