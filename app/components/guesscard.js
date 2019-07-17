import React, { Component } from 'react'
import './guesscard.css'
import { Modal, Icon } from "antd"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";


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

export default class GuessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentModal: 0,
            visible: false,
        };
    }

    toggleModal = (index) => {
        this.setState({
            visible: true,
            currentModal: index,
        });
    }
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
    }
    render() {
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
        const cardAnswer = [
            <img className="modalIImg" src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" alt="" />,
            <img className="modalIImg" src="http://i.imgur.com/LZNvZJ8.png" alt="" />,
            <img className="modalIImg" src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" alt="" />,
            <img className="modalIImg" src="http://i.imgur.com/LZNvZJ8.png" alt="" />,
            <img className="modalIImg" src="http://farm4.staticflickr.com/3795/9269794168_3ac58fc15c_b.jpg" alt="" />,
            <img className="modalIImg" src="http://i.imgur.com/LZNvZJ8.png" alt="" />

        ]
        return (
            <div>
                <section id="guesscard" className="section guesscard">
                    <h2 className="text-center">猜猜我是誰</h2>
                    <div className="phone">
                        <div className="info">
                            {/* <h5 className="keyWords"> </h5> */}
                            <p className="contents">
                            為了生存，深海生物們個個具有獨特生存本事。食物稀少，得靠利齒大嘴，才能一口吞食獵物；為了適應高壓，或增加覓食優勢，演化成體型巨大；
                            暗不見光，所以眼睛特化、嗅覺敏銳；為引誘獵物、迷惑敵人，發光也能是利器。
                            </p>
                        </div>
                    </div>
                    <div className="web">
                        <div className="info">
                            {/* <h5 className="keyWords"> </h5> */}
                            <p className="contents">
                            在深海，生物要活下來，需要具備獨特的生存本事。
                            食物稀少，要靠利齒大嘴，才能快速一口咬下，吞食獵物；為增加覓食優勢，演化成體型巨大；沒有陽光黑漆漆，不能倚賴視覺，所以眼睛特化，嗅覺敏銳；要引誘獵物、迷惑敵人或找尋配偶，於是身上配置發光器。
                            深海生物們，牠們的奇特，超乎你的想像，來猜猜看，這是哪位呢？
                            </p>
                        </div>
                    </div>


                    <div className="section-content">
                        <div className="slider">
                            <Slider {...settings}>
                                <div className="card">
                                    <img
                                        src="http://i.imgur.com/LZNvZJ8.png"
                                        alt=""
                                        onClick={() => this.toggleModal(0)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src="http://i.imgur.com/LZNvZJ8.png"
                                        alt=""
                                        onClick={() => this.toggleModal(1)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src="http://i.imgur.com/LZNvZJ8.png"
                                        alt=""
                                        onClick={() => this.toggleModal(2)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src="http://i.imgur.com/LZNvZJ8.png"
                                        alt=""
                                        onClick={() => this.toggleModal(3)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src="http://i.imgur.com/LZNvZJ8.png"
                                        alt=""
                                        onClick={() => this.toggleModal(4)}
                                    />
                                </div>
                                <div className="card">
                                    <img
                                        src="http://i.imgur.com/LZNvZJ8.png"
                                        alt=""
                                        onClick={() => this.toggleModal(5)}
                                    />
                                </div>
                            </Slider>
                        </div>
                        <Modal
                            title={null}
                            visible={this.state.visible}
                            footer={null}
                            zIndex={1500}
                            onCancel={this.handleCancel}
                            bodyStyle={{ height: "100vh", width: "100%" }}
                            width="unset"
                        >
                            <div className="modalIframe" >
                                {cardAnswer[this.state.currentModal]}
                            </div>

                        </Modal>
                    </div>
                </section>
            </div>
        )
    }
}
