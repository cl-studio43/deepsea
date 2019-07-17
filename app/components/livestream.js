import React, { Component } from 'react'
import "./livestream.css"

export default class LiveStream extends Component {
    render() {
        return (
            <div>
                <section id="livestream" className="section" style={{paddingTop:"30px"}}>
                <h2 className="textTitle">深海研究直播</h2>
                    <div className="section-content liveStream">
                         <iframe
                             title="Livestream" 
                             src="https://www.youtube.com/embed/videoseries?list=PLXlYJoW7xXRsjho3_-_qT4-9GdtyF1LSv" 
                             frameBorder="0" 
                             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen>
                         </iframe>
                    </div>
                </section>
            </div>
        )
    }
}
