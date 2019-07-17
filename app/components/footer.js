import React, { Component } from 'react'
import './footer.css'
import logoN from '../images/logo_n.png'
import logoO from '../images/logo_o.png'
import logoT from '../images/logo_t.png'
import logoP from '../images/logo_p.png'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section id="about" className="section footerBG">
                    <div className="section-content">
                        <div className="footerBlock phone">
                            <div className="sectionArea seperateLine">
                                <h4 style={{ color: "#12436a" }} className="footerTitle">公視新聞部</h4>
                                <div className="logoArea">
                                    <div className="iconRow">
                                        <div className="imgFrameN">
                                            <img src={logoN} alt="公視" />
                                        </div>
                                        <div className="imgFrame">
                                            <img src={logoO} alt="我們的島" />
                                        </div>
                                    </div>
                                    <div className="iconRow">
                                    <div className="imgFrame">
                                        <img src={logoT} alt="有話好說" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoP} alt="新聞實驗室" />
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dataProvider">
                                <div className="sectionArea">
                                    <h4 style={{ textAlign: "unset", color: "#12436a", margin: "20px 0 30px 0" }} className="footerTitle">資料及影像提供</h4>
                                    <div style={{ display: "flex" }} className="department">
                                        <div style={{ paddingRight: "20px" }}>
                                            <p>國家實驗研究院 台灣海洋科技研究中心</p>
                                            <p>經濟部中央地質調查所</p>
                                        </div>
                                        <div>
                                            <p>中山大學海下所 水下機電實驗室</p>
                                            <p>國立海洋科技博物館 廖運志</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sectionArea">
                                    <h4 style={{ color: "#12436a", margin: "20px 0 30px 0" }} className="footerTitle">網頁設計</h4>
                                    <p>通點設計有限公司</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="section-content">
                        <div className="footerBlock web">
                            <div className="sectionArea seperateLine">
                                <h4 style={{ color: "#12436a" }} className="footerTitle">公視新聞部</h4>
                                <div className="logoArea">
                                    <div className="imgFrameN">
                                        <img src={logoN} alt="公視" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoO} alt="我們的島" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoT} alt="有話好說" />
                                    </div>
                                    <div className="imgFrame">
                                        <img src={logoP} alt="新聞實驗室" />
                                    </div>
                                </div>
                            </div>
                            <div className="dataProvider">
                                <div className="sectionArea">
                                    <h4 style={{ textAlign: "unset", color: "#12436a", margin: "20px 0 30px 0" }} className="footerTitle">資料及影像提供</h4>
                                    <div style={{ display: "flex" }}>
                                        <div style={{ paddingRight: "20px" }}>
                                            <p>國家實驗研究院 台灣海洋科技研究中心</p>
                                            <p>經濟部中央地質調查所</p>
                                        </div>
                                        <div>
                                            <p>中山大學海下所 水下機電實驗室</p>
                                            <p>國立海洋科技博物館 廖運志</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="sectionArea">
                                    <h4 style={{ color: "#12436a", margin: "20px 0 30px 0" }} className="footerTitle">網頁設計</h4>
                                    <p>通點設計有限公司</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
