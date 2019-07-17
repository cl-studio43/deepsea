import React, { Component } from 'react'
// import Carousel, { Modal, ModalGateway } from 'react-images';
import { Modal, Icon } from "antd"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "./videolist.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><Icon type="right" /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        ><Icon type="left" /></div>
    );
}

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            currentModal: 0,
            spinning: true
        };
    }

    toggleModal = (index) => {
        this.setState({
            visible: true,
            currentModal: index,
        });
    };
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const videos = this.props.videos;
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        if (videos.length == 0) {
            return (
                <div>
                    <section id="videolist" className="section">
                        <h2 className="text-center">航海筆記</h2>
                        <div className="section-content">無法擷取影片列表，請重新整理試試</div>

                    </section>
                </div>
            )
        }
        return (
            <div>
                <section id="videolist" style={{ paddingTop: "30px" }} className="section videolistBG">
                    <h2 className="text-center" style={{ marginBottom: "20px" }}>航海筆記</h2>
                    <div className="section-content">
                        <div className="slider">
                            <Slider {...settings}>
                                {videos.map((video, index) => {
                                    return (
                                        <div index={index} key={index} style={{ padding: "3px 6px" }} >
                                            <li style={{ listStyleType: "none" }}>
                                                <div>
                                                    <img
                                                        width="100%"
                                                        src={video.thumbnails.default.url}
                                                        alt={video.title}
                                                        onClick={() => this.toggleModal(index)}
                                                    />
                                                </div>
                                            </li>
                                        </div>
                                    )

                                })
                                }
                            </Slider>
                        </div>
                         <Modal
                             title={null}
                             visible={this.state.visible}
                             footer={null}
                             zIndex={1500}
                             onCancel={this.handleCancel}
                             width="unset"
                             bodyStyle={{ height: "100vh", width: "100%" }}
                         >
                             <div className="videolistContainer" >
                                 <iframe
                                     title={videos[this.state.currentModal].title}
                                     src={`https://www.youtube.com/embed/${videos[this.state.currentModal].id}`}
                                     frameborder="0"
                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                     allowFullScreen
                                 />
                             </div>
                         </Modal>
                    </div>
                </section>
            </div>
        )
    }
}
