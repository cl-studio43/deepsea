import React, { Component } from "react"
import LandingPage from "../components/landingpage"
import About from "../components/about"
import GPS from "../components/gps_timetable"
import LiveStream from "../components/livestream"
import VideoList from "../components/videolist"
import OceanWiki from "../components/oceanwiki"
import GuessCard from "../components/guesscard"
import Navigation from '../components/navigation'
import Footer from "../components/footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.min.css"
import "./index.css"
import 'antd/dist/antd.css'
import { Spin } from 'antd'
import axios from 'axios'

const YouTube = require('simple-youtube-api');
// const youtube = new YouTube('AIzaSyCYgKk9u-PIz9MJ437BFu__WLILqo6KfT4');
const youtube = new YouTube('AIzaSyB4dHFtxCkqAgsVsWb6LjKKlq2GKul6gws');
// const playlist = 'https://www.youtube.com/playlist?list=PLSpgkTTKsDcQ3dghnor08-2ldjzHwXgRU'
const playlist = 'https://www.youtube.com/playlist?list=PLXlYJoW7xXRsjho3_-_qT4-9GdtyF1LSv'


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      programNews:"",
      spinning: true
    };
  }

  componentWillMount() {

    youtube.getPlaylist(playlist)
      .then(playlist => {
        playlist.getVideos()
          .then(videos => {
            this.setState({ videos: videos, spinning: false })
          })
          .catch(console.log);
      })
      .catch(console.log);

      axios.get('https://spreadsheets.google.com/feeds/cells/1NKWSVKaFVnlRgDXNjQnMeZJcRcb3R32fJF5q0kRfsLI/1/public/values?alt=json')
      .then(res => res.data.feed.entry[0].content.$t)
      .then(res => this.setState({ programNews: res }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Spin
          size="large"
          spinning={this.state.spinning}
          style={{ margin: "auto" }}
        >
          <LandingPage programNews={this.state.programNews}/>
          {/* <div className="container-fluid main">
            <Navigation className="navigation" />
            <About />
            <GPS programNews={this.state.programNews}/>
            <LiveStream />
            <VideoList videos={this.state.videos} />
            <OceanWiki />
            <GuessCard />
            <Footer />
          </div> */}
        </Spin>
      </div>
    )
  }
}

export default IndexPage
