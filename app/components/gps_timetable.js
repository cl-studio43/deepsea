import React, { Component } from 'react'
import { Button } from 'antd'
import "./gps_timetable.css"


export default class GPS extends Component {
    render() {
        return (
            <div>
                <section id="gps_timetable" className="section gps">
                    <div className="section-content ">
                        <div className="GPSnTime">
                            <div className="GPSBlock">
                                <h2 style={{marginBottom:"30px"}} className="text-center">GPS</h2>
                                <iframe
                                    padding="20px"
                                    width="100%"
                                    height="75%"
                                    scrolling='no'
                                    marginHeight='0'
                                    marginWidth='0'
                                    className="maps"
                                    frameBorder="0"
                                    src="http://med.tori.narlabs.org.tw/Ship/gpsOutput/showGPStMap.php"
                                >
                                </iframe>
                            </div>
                            <div className="timeTableBlock">
                                <h2 style={{marginBottom:"30px"}} className="text-center">節目表</h2>
                                <div className="timeTable">
                                    <div className="programnews">
                                        <div style={{margin:"18px"}}>
                                            <h5 style={{ marginBottom: "unset", color: "#FFF" }}>{"即時訊息 : "}</h5>
                                            <h6 style={{ marginBottom: "unset", color:"#FFF" }}>{this.props.programNews}</h6>
                                        </div>
                                    </div>
                                    <Button type="default" onClick={() => window.open("https://docs.google.com/spreadsheets/d/1sAEsifwTcuck1DE8JCdlRXFb-VtsWTjvp6v28Mh6BXQ/edit?usp=sharing")} >
                                        節目表
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
