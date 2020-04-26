import React from 'react'
import '../../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';
import './AudioWave.css'
class AudioWave extends React.Component{
    constructor(props){
        super(props)
        //this.points = Array.from(Array(400).keys())
        //this.points = [0,0.1,0.2,0.3]
        this.points = []
        for(let i = 0; i <= 1; i+=0.01){
            this.points.push(i)
        }
        this.Amplitude = this.props.Amplitude
        this.f = this.props.f
        this.gridStyle = {strokeWidth: 0.2, stroke: "#389ccada"}
        console.log(this.props)
    }
    makeWave(a,f,fi){
        let w = this.points.map((point) => {
            return (a * (Math.sin((2*Math.PI*0.5*f*point)+fi)))
        })
        
        return w
    }
    makeChart(x,y){
        let data = x.map((point, key)=>{
            return({x: point, y: y[key]})
        })
        console.log(data)
        return(data)
    }
    sumWave(w1,w2){

    }
    render(){
        return(
            <div className="graph">
                <XYPlot height={930} width={1900} className="xy" >
                    <LineSeries data={this.makeChart(this.points,this.makeWave(this.Amplitude,this.f,0))} color={this.props.color} style={{strokeWidth: 0.2}}/>
                    <LineSeries data={this.makeChart(this.points,this.makeWave(this.Amplitude/2,this.f,0))} color={this.props.color} style={{strokeWidth: 0.2}}/>
                    <XAxis style={this.gridStyle} />
                    <YAxis style={this.gridStyle}/>
                    <VerticalGridLines  style={this.gridStyle}/>
                    <HorizontalGridLines  style={this.gridStyle} />
                </XYPlot>
            </div>
        )
    }
}

export default AudioWave