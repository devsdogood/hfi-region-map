import React from 'react'
import {animateScroll} from "react-scroll"
import "./heatmap.css"

import {stats} from "../utils/stats.js"
	
const HeatMap = () => {

    const [headerText, changeHeaderText] = React.useState("Click on a county")
	const [populationText, changePopulationText] = React.useState(null as string | null)
	const [statOption, changeStatOption] = React.useState("womenHomeless" as 'totalHomeless' | 'womenHomeless' | 'childrenHomeless')
	const headerRef = React.useRef(null)
	const strokeCol = "white";
	const strokeWidth = 0.7;

	const shadeBlue = (regionInput: keyof typeof stats) => {
		let regionName: keyof typeof stats;
		let max = 0;
		for (regionName in stats) {
			if (stats[regionName][statOption] > max) {
				max = stats[regionName][statOption]
			}
		}
		
		let shadeOfRed = 0;
		let shadeOfGreen = 0;
		let shadeOfBlue = 0;

		let initRed = 0;
		let initGreen = 0;
		let initBlue = 94;
		
		let maxRed = 150;
		let maxGreen = 150;
		let maxBlue = 230

		let ratio = stats[regionInput].totalHomeless/max;
		
		shadeOfRed = ratio * maxRed + initRed;
		shadeOfGreen = ratio * maxGreen + initGreen;
		shadeOfBlue = ratio * maxBlue + initBlue;


			if (stats[regionInput][statOption] >= max * .9) {
				shadeOfRed = 0;
				shadeOfGreen = 0
				shadeOfBlue = 94;
			} else if (stats[regionInput][statOption] >= max * .8) {
				shadeOfRed = 18;
				shadeOfGreen = 18;
				shadeOfBlue = 120;
			} else if (stats[regionInput][statOption] >= max * .7) {
				shadeOfRed = 38;
				shadeOfGreen = 38;
				shadeOfBlue = 160;
			} else if (stats[regionInput][statOption] >= max * .6) {
				shadeOfRed = 62;
				shadeOfGreen = 62;
				shadeOfBlue = 148;
			} else if (stats[regionInput][statOption] >= max * .5) {
				shadeOfRed = 90;
				shadeOfGreen = 90;
				shadeOfBlue = 176;
			} else if (stats[regionInput][statOption] >= max * .4) {
				shadeOfRed = 117;
				shadeOfGreen = 117;
				shadeOfBlue = 199;
			} else {
				shadeOfRed = 150;
				shadeOfGreen = 150;
				shadeOfBlue = 230;
			}
			
		console.log(regionInput, shadeOfBlue)
		return({shadeOfRed, shadeOfGreen, shadeOfBlue})
	}

    const northwestIowa = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('northwestIowa')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    }    
    const upperDesMoines = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('upperDesMoines')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    }
    const northCentralIowa = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('northCentralIowa')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const northEast = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('northEast')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const woodburyDakota = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('woodburyDakota')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
		
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const twoRivers = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('twoRivers')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const blackhawkGrundyTama = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('blackhawkGrundyTama')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const linnBentonJones = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('linnBentonJones')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const easternIowa = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('easternIowa')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const omahaCouncilBluffs = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('omahaCouncilBluffs')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const balanceOfCounties = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('balanceOfCounties')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({

            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    }
    const southCentralWest = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('southCentralWest')		
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    }  
   const rollingHills = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('rollingHills')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const johnsonWashington = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('johnsonWashington')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
	const polk = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('polk')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
		    fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const southeastIowa = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('southeastIowa')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 
    const quadCitiesBiState = () => {
		const {shadeOfRed, shadeOfGreen, shadeOfBlue} = shadeBlue('quadCitiesBiState')
		const rgbString = `rgb(${shadeOfRed},${shadeOfGreen},${shadeOfBlue})`
        return({
            fill: rgbString,
			stroke: strokeCol,
			strokeWidth: strokeWidth,
        })
    } 

	const scrollingFunc = () => {
		if(headerRef.current){
            const {offsetTop} = headerRef.current
            animateScroll.scrollTo(offsetTop)
        }	
	}

    const northwestIowaClick = () => {
        changeHeaderText("Northwest Iowa Region")
        changePopulationText("Population :158,577   Approximate Homelessness: 378")
		scrollingFunc()
    }


	const woodburyDakotaClick = () => {
        changeHeaderText("Woodbury Dakota Region")
        changePopulationText("Population: 104,291   Approximate Homelessness: 288")
		scrollingFunc()
    }

	const rollingHillsClick = () => {
		changeHeaderText("Rolling Hills")
		changePopulationText("Population: 293,615   Approximate Homelessness: 587")
		scrollingFunc()
	}
	
	const upperDesMoinesClick = () => {
        changeHeaderText("Upper Des Moines")
		changePopulationText("Population: 174,691   Approximate Homelessness: 349")
		scrollingFunc()
    }

	const polkClick = () => {
        changeHeaderText("Polk")
		changePopulationText("Population: 492,400   Approximate Homelessness: 681")
		scrollingFunc()
    }

	const twoRiversClick = () => {
		changeHeaderText("Two Rivers ")
		changePopulationText("Population: 191,006   Approximate Homelessness: 382")
		scrollingFunc()
	}
	
	const northEastClick = () => {
        changeHeaderText("North East")
		changePopulationText("Population: 152,051   Approximate Homelessness: 304")
		scrollingFunc()
    }
	
	const southEastIowaClick = () => {
        changeHeaderText('South East Iowa')
		changePopulationText("Population: 165,524   Approximate Homelessness: 331")
		scrollingFunc()
    }
	
	const northCentralIowaClick = () => {
        changeHeaderText('North Central Iowa')
		changePopulationText("Population: 123,083   Approximate Homelessness: 246")
		scrollingFunc()
    }
	
	const johnsonWashingtonClick = () => {
		changeHeaderText('Johnson/Washington')
		changePopulationText("Population: 175,419   Approximate Homelessness: 350")
		scrollingFunc()
	}

	const linnBentonJonesClick = () => {
		changeHeaderText('Linn/Benton/Jones')
		changePopulationText("Population: 276,520   Approximate Homlessness: 553")
		scrollingFunc()
	}
	
	const balanceOfCountiesClick = () => {
		changeHeaderText('Balance of Counties')
		changePopulationText("Population: 91,759   Approximate Homelessness: 184")
		scrollingFunc()
	}
	
	const omahaCouncilBluffsClick = () => {
		changeHeaderText('Omaha/Council Bluffs')
		changePopulationText("Population: 93,667   Approximate Homelessness: 187")
		scrollingFunc()
	}

	const southCentralWestClick = () => {
		changeHeaderText('South Central West')
		changePopulationText("Population: 178,139   Approximate Homelessness: 356")
		scrollingFunc()
	}
	
	const quadCitiesClick = () => {
		changeHeaderText("Quad Cities")
		changePopulationText("Population: 174,669   Approximate Homlessness: 349")
		scrollingFunc()
		
	}

	const blackHawkGrundyTamaClick = () => {
		changeHeaderText("Black Hawk Grundy Tama")
		changePopulationText("Population: 160,608   Approximate Homlessness: 349")
		scrollingFunc()
	}
	
	const easternIowaClick = () => {
		changeHeaderText('Eastern Iowa')
		changePopulationText("Popluation: 182,669   Approximate Homelessness: 365")
		scrollingFunc()
	}

	//console.log(shadeBlue('northwestIowa'))

    return(
<>
<h1 ref = {headerRef}>{
    headerText
}
</h1>
{(populationText !== null) && 
	(<h1>
		{populationText}
	</h1>)

}
<div style = {{verticalAlign: 'left'}}>
	<label style = {{paddingRight: '10px'}}>	
	<input
		type = "radio"
		value = "total"
		checked = {statOption === 'totalHomeless'}
		onChange = {() => {changeStatOption('totalHomeless')}}
	/>
	Total
	</label>

	<label style = {{paddingRight: '10px'}}>
	<input 
		type = 'radio'
		value = 'womenHomeless'
		checked = {statOption === 'womenHomeless'}
		onChange = {() => {changeStatOption('womenHomeless')}}
	/>
	Women
	</label>
			

	<label style = {{paddingRight: '10px'}}>
	<input
		type = 'radio'
		value = "childrenHomeless"
		checked = {statOption === "childrenHomeless"}
		onChange = {() => {changeStatOption("childrenHomeless")}}
	/>
	Children
	</label>
</div>
<svg version="1.1" id="iowa-map" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 762 502" vectorEffect="non-scaling-stroke">

	<g className="county-group " onClick={()=>{northwestIowaClick()}}  style = {northwestIowa()} id="lyon-group">
		<path id="lyon-county" className="map-path " d="M54.4,52.2c0.1-0.2,0.1-0.3,0.1-0.5v-0.5v-0.5v-0.5H55h0.5c2.3,0,4.5,0.2,6.8,0.4
			c4,0.3,8,0.5,11.9,0.7c2.3,0.1,4.5,0.2,6.8,0.3c1.7,0.1,3.4,0.1,5,0.2c6.8,0,13.7,0.5,20.6,0.7s13.8,0.5,20.8,0.7
			c0.3,0,0.7-0.1,1.2-0.1l0.5-9.8l0.5-12l0.5-12v-1c-0.8-0.1-1.9,0.1-2.4,0.1c-1.1,0-2.3,0-3.5,0c-0.6,0-1.2,0-1.8,0
			c-1.8,0-3.7-0.1-5.5-0.1c-4.7-0.1-9.4-0.3-14.1-0.4c-0.3,0-0.5,0-0.7-0.2c-4.2-0.2-8.3-0.3-12.5-0.4c-0.7,0-1.5,0-2.2-0.1
			c-6.4-0.2-12.7-0.4-19-0.7C63.2,16.2,57.9,16,52.7,16c-0.1,0-1-0.4-1.5-0.4c-0.2,0-0.4,0-0.5,0.1c0,0.1,0.2,0.4,0.6,0.7
			c0.4,0.3,0.8,0.6,0.9,0.6c-0.1,0.5-0.1,1.2,0.3,1.5c0.1,0.1,0.3,0.2,0.2,0.3c-0.1,0.2-0.4,0.1-0.5,0.2c-0.1,0-0.1,0.1-0.1,0.2
			c0,0.2,0,0.5,0,0.7c0,0.1,0,0.3,0.1,0.4s-0.6,0.5-1.1,0.9c-0.2,0.2-0.4,0.3-0.5,0.3c-0.4,0.6,0,0.5-0.1,1.1
			c-0.1,0.2-0.3,0.5-0.5,0.5c0.2,0,0.4,0.1,0.5,0.3c0.1,0.2-0.1,0.4-0.3,0.3c0.2,0,0.3,0.3,0.4,0.5c0.1,0.4,0.4,0.8,0.7,1.1
			c0.5,0.4,1.1,0.6,1.7,0.5c-0.1,0.2,0.2,0.4,0.4,0.6c0.3,0.4,0,1-0.5,1c0.4,0.4,0.7,0.8,1.1,1.2c0.2,0.2,0.3,0.4,0.4,0.6
			c0,0.1,0,0.1,0,0.2c0,0.2,0,0.3,0.1,0.4s0.2,0,0.3,0.1s0,0.3,0.1,0.4s0.2,0,0.3,0s0.1,0,0.2,0c0.5-0.1,0.6,0.6,0.5,1
			c0.2-0.2,0.6,0,0.9,0.2c0-0.2,1-0.2,1-0.2c0.2,0,0.4,0,1.1,0.2c0,0,0,3,0,3.3c0-0.2-0.4-0.3-0.5-0.1c-0.2,0.1-0.1,0.3-0.1,0.5
			c-0.1-0.1-0.3-0.1-0.4,0c-0.2,0.2-0.1,0.5-0.1,0.7s0,0.4,0.2,0.5s0.4,0.1,0.4-0.1v0.1c0,0.6,0.2,2.4-0.2,2.7
			c-0.2,0.1-0.4,0.2-0.4,0.4c-0.1-0.1-0.2-0.1-0.3-0.2c-0.4,1.1-0.2,2.3,0.3,3.2l0,0l0,0c-0.1,0-0.1,0.2-0.1,0.5
			c0,0.6,0.3,1.6,0.2,1.7c-0.1,0.8-0.3,1.6-0.7,2.3c-0.6,0.3-1.2,0.7-1.8,0.6c-0.1,0.1-0.1,0.3-0.1,0.5c-0.2,0-0.3,0-0.5,0
			c0-0.2,0-0.3,0-0.5c-0.7,0-1.3,0-2,0c0-0.2,0-0.3,0-0.5c-0.7,0-1.3,0-2,0c0,0.3,0,0.7,0,1h0.1H51c0.1,0,0.2,0,0.3,0
			c0-0.1,0-0.2,0-0.3s0-0.1,0-0.2c0.2,0,0.3,0,0.5,0c0,1,0,2,0,3c-0.2,0-0.3,0-0.5,0c-0.1,0-0.2,0-0.3,0s-0.1,0-0.2,0
			c0,0.2,0,0.3,0,0.5s0,0.3,0,0.5c0.5,0,1,0,1.5,0c0,0.1,0,0.2,0,0.4v0.1c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1
			c0.1,0.1,0.1,0.2,0.1,0.4c0.2,0,0.3,0,0.4,0c0,0,0,0,0.1,0c0,0.1,0,0.1,0,0.2c0.1,0,0.1,0,0.2,0C53.6,52.7,53.9,52.1,54.4,52.2z"/>
		<g id="lyon-label" className="county-label" >
			<path d="M86.2,40.3v-7.6h0.7v7h3.8v0.6H86.2z"/>
			<path d="M91.1,35l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2L90.3,35H91.1z"/>
			<path d="M100.7,37.7c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C99.9,34.9,100.7,36.3,100.7,37.7z
				 M98.2,35.5c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C100,36.7,99.5,35.5,98.2,35.5z"/>
			<path d="M102.6,40.3H102v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V40.3z"/>
		</g>
	</g>


	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="osceola-group">
		<path id="osceola-county" className="map-path " d="M130.1,19.3l-0.5,12l-0.5,12l-0.5,9.8c0.9-0.1,1.9-0.2,2.2,0.1c0,0,0.1,0.1,0.1,0.2h0.7
			l28.4,0.9v0.2l0.5,1.8l19.6,0.5v-0.1l0,0l0,0h0.8v-1.5h0.2l0.5-23l0.5-13l0,0l-2.6-0.3l-2.4-0.2l-19.8-0.5l0,0h-0.6l-26.5-0.5v0.4
			v0.1L130.1,19.3L130.1,19.3z"/>
		<g id="osceola-label" className="county-label" >
			<path d="M140.3,40.5c-2.2,0-3.4-1.6-3.4-4c0-2.4,1.2-4,3.4-4c2.2,0,3.4,1.6,3.4,4C143.7,38.9,142.5,40.5,140.3,40.5z M140.3,39.9
				c1.9,0,2.7-1.7,2.7-3.3c0-1.7-0.8-3.3-2.7-3.3c-1.9,0-2.7,1.7-2.7,3.3C137.7,38.2,138.4,39.9,140.3,39.9z"/>
			<path d="M147,34.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C145.1,35.3,146.1,34.9,147,34.9z"/>
			<path d="M153.9,36.7c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H153.9z"/>
			<path d="M156.2,37.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H156.2z M159.6,37.3c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H159.6z"/>
			<path d="M166.2,37.7c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S166.2,36.3,166.2,37.7z M163.8,35.5
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C165.5,36.7,165,35.5,163.8,35.5z"/>
			<path d="M168.2,40.3h-0.6v-7.6h0.6V40.3z"/>
			<path d="M172.9,36.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V36.6z M171.3,39.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C170.1,39.6,170.7,39.9,171.3,39.9z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="dickinson-group">
		<path id="dickinson-country" className="map-path " d="M181.5,32.3 181.1,55.2 181.1,55.3 181,56.7 181.9,56.7 231.5,58.1 232.5,58.1 
			233.5,58.2 233.5,57.5 233.6,56.2 234,20.3 232,20.2 228.8,20.2 190.9,19.5 182,19.3z 	"/>
		<g id="dickinson-label" className="county-label" >
			<path d="M187.7,32.7c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8h-2.1v-7.6H187.7z M187.9,39.7c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H187.9z"/>
			<path d="M193.9,33.5h-0.7v-0.8h0.7V33.5z M193.8,35v5.3h-0.6V35H193.8z"/>
			<path d="M198.9,36.7c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H198.9z"/>
			<path d="M201,37.2l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V37.2z"/>
			<path d="M206.2,33.5h-0.7v-0.8h0.7V33.5z M206.2,35v5.3h-0.6V35H206.2z"/>
			<path d="M208.5,40.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V40.3z"/>
			<path d="M215.5,34.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C213.6,35.3,214.6,34.9,215.5,34.9z"/>
			<path d="M223.6,37.7c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C222.8,34.9,223.6,36.3,223.6,37.7z
				 M221.1,35.5c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C222.9,36.7,222.4,35.5,221.1,35.5z"/>
			<path d="M225.5,40.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V40.3z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="emmet-group">
		<path id="emmet-county" className="map-path " d="M234,20.3 233.6,56.2 233.5,57.5 282.1,58.5 282.1,57.5 282.1,55.2 282.6,43.2 
			282.6,21 245.3,20 232,19.7 232,20.1 232,20.2z 	"/>
		<g id="emmet-label" className="county-label" >
			<path d="M240.8,40.3v-7.6h4.5v0.6h-3.8v2.7h3.7v0.6h-3.7v3h4v0.6H240.8z"/>
			<path d="M247.7,35.8L247.7,35.8c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3H247v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L247.7,35.8z"/>
			<path d="M257,35.8L257,35.8c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6
				v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3H260v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L257,35.8z"/>
			<path d="M266.2,37.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H266.2z M269.6,37.3c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H269.6z"/>
			<path d="M272.1,35.6h-1.1V35h1.1v-1.1l0.6-0.3V35h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V35.6z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="kossuth-group">
		<path id="kossuth-county" className="map-path " d="M281.6,79.2 281.6,91.2 281.2,108.7 281.1,111 281.5,111 281.5,111.5 283,111.5 
			332.6,112.4 334.2,112.5 334.6,112.5 334.6,112.1 334.7,109.8 335.2,58.1 335.2,57.8 335.6,22.1 335.6,22.1 289.1,21.6 282.6,21 
			282.6,21 282.6,43.2 282.1,55.2 282.1,57.5 282.1,58.5 282.1,67.2z 	"/>
		<g id="kossuth-label" className="county-label" >
			<path d="M292,68.7v-7.6h0.7l0,3.4l3.4-3.4h0.9l-3.5,3.4l3.8,4.2h-0.9l-3.6-4l0,4H292z"/>
			<path d="M302.5,66c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C301.7,63.2,302.5,64.7,302.5,66z
				 M300.1,63.8c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S301.3,63.8,300.1,63.8z"/>
			<path d="M305.6,63.2c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C303.7,63.6,304.7,63.2,305.6,63.2z"/>
			<path d="M310.9,63.2c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C308.9,63.6,309.9,63.2,310.9,63.2z"/>
			<path d="M317.9,63.4h0.6v4.1c0,0.4,0,0.8,0.1,1.2H318l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V63.4z"/>
			<path d="M320.7,64h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2V64h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V64z"/>
			<path d="M324.4,64.2L324.4,64.2c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V64.2z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="winnebago-group">
		<path id="winnebago-county" className="map-path " d="M335.2,58.1 371.7,58.6 384.6,59.7 384.6,59.5 385.2,59.5 385.2,59.8 
			386.2,59.9 386.2,59.5 386.2,58.2 386.7,22.6 385.1,22.6 335.6,22.1 335.2,57.8z 	"/>
		<g id="winnebago-label" className="county-label" >
			<path d="M347.4,39h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L347.4,39z"/>
			<path d="M356.6,32.2h-0.7v-0.8h0.7V32.2z M356.6,33.7V39h-0.6v-5.3H356.6z"/>
			<path d="M358.9,39h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1V39h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V39z"/>
			<path d="M364.7,39h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1V39h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V39z"/>
			<path d="M370.4,36.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H370.4z M373.8,35.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H373.8z"/>
			<path d="M375.1,35.9h2.7v0.6h-2.7V35.9z"/>
			<path d="M345.6,51.7H345c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L345.6,51.7z M345.7,48.9c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C346.1,46.8,345.7,47.9,345.7,48.9z"/>
			<path d="M354,47.9c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H354l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V47.9z M352.4,51.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C351.2,50.9,351.8,51.3,352.4,51.3z"/>
			<path d="M360,46.4h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L360,46.4z M358.2,46.8c-1.1,0-1.6,1.2-1.6,2.1c0,1,0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C359.9,47.9,359.4,46.8,358.2,46.8z"/>
			<path d="M366.7,49c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C365.9,46.2,366.7,47.6,366.7,49z
				 M364.2,46.8c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C366,48.1,365.5,46.8,364.2,46.8z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="worth-group">
		<path id="worth-county" className="map-path " d="M386.2,58.2 386.2,59.5 436,60 438,60 438,60 438,58.7 438,22.2 436,22.2 
			385.1,22.2 385.1,22.6 386.7,22.6z 	"/>
		<g id="worth-label" className="county-label" >
			<path d="M398.8,45.6h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L398.8,45.6z"/>
			<path d="M411.3,43c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S411.3,41.6,411.3,43z M408.8,40.7
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C410.6,42,410.1,40.7,408.8,40.7z"/>
			<path d="M413.2,45.6h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V45.6z"/>
			<path d="M416.5,40.9h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V40.9z"/>
			<path d="M420.2,41.1L420.2,41.1c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6V38h0.6V41.1z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="mitchell-group">
		<path id="mitchell-county" className="map-path " d="M438,58.7 438,60 438,60 438,65.3 443.2,65.3 486.5,64.8 486.9,64.8 486.4,33.1 
			486.4,33.1 489,33.1 489,28.6 489,22.4 489,22.2 489,22.2 468.5,22.2 438,22.2z 	"/>
		<g id="mitchell-label" className="county-label" >
			<path d="M444.2,45.6V38h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H444.2z"/>
			<path d="M454.7,38.8H454V38h0.7V38.8z M454.7,40.3v5.3H454v-5.3H454.7z"/>
			<path d="M456.8,40.9h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V40.9z"/>
			<path d="M463.2,41.9c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H463.2z"/>
			<path d="M465.3,41.1L465.3,41.1c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6V38h0.6V41.1z"/>
			<path d="M470.9,43.1c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H470.9z M474.3,42.5c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H474.3z"/>
			<path d="M477,45.6h-0.6V38h0.6V45.6z"/>
			<path d="M479.3,45.6h-0.6V38h0.6V45.6z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northEastClick()}} style = {northEast()} id="howard-group">
		<path id="howard-county" className="map-path " d="M489,28.6 489,33.1 486.4,33.1 486.4,33.1 486.9,64.8 486.9,64.8 486.9,64.7 
			538,64.7 539.6,64.7 539.6,21.9 537.7,21.9 509.5,22.2 489,22.4z	"/>
		<g id="howard-label" className="county-label" >
			<path d="M496.7,45.6V38h0.7v3.3h4.2V38h0.7v7.6h-0.7V42h-4.2v3.6H496.7z"/>
			<path d="M508.7,43c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S508.7,41.6,508.7,43z M506.2,40.7
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C508,42,507.5,40.7,506.2,40.7z"/>
			<path d="M511.4,44.8L511.4,44.8l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3H515l-1.6-4.6h0l-1.7,4.6H511l-1.9-5.3h0.7L511.4,44.8z"
				/>
			<path d="M521.4,41.9c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V41.9z M519.8,45.2c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C518.6,44.9,519.1,45.2,519.8,45.2z"/>
			<path d="M524.3,45.6h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V45.6z"/>
			<path d="M530.8,44.8L530.8,44.8c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1l0,0
				V38h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L530.8,44.8z M529.1,40.7c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3c1.4,0,1.8-1.1,1.8-2.4
				C530.8,41.8,530.3,40.7,529.1,40.7z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northEastClick()}} style = {northEast()} id="winneshiek-group">
		<path id="winneshiek-county" className="map-path " d="M539.6,64.7h0.3l0.5,2.5V84l49-0.5h0.1c0-0.1,0-0.1,0-0.1c0.1-0.2,0.4-0.4,0.7-0.5
			l-1.5-61.8l0,0l0,0c-0.4,0-0.7,0.1-0.9,0.5h-18.9H566l-28.4,0.1v0.2h1.9v42.8H539.6z"/>
		<g id="winneshiek-label" className="county-label" >
			<path d="M551.1,52.2h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L551.1,52.2z"/>
			<path d="M560.4,45.4h-0.7v-0.8h0.7V45.4z M560.3,46.9v5.3h-0.6v-5.3H560.3z"/>
			<path d="M562.7,52.2H562v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V52.2z"/>
			<path d="M568.5,52.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V52.2z"/>
			<path d="M574.1,49.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H574.1z M577.5,49.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H577.5z"/>
			<path d="M578.9,49.1h2.7v0.6h-2.7V49.1z"/>
			<path d="M550.7,59.4c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C548.7,59.8,549.8,59.4,550.7,59.4z"/>
			<path d="M554.8,60.4L554.8,60.4c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V60.4z"/>
			<path d="M560.8,58H560v-0.8h0.7V58z M560.7,59.6v5.3h-0.6v-5.3H560.7z"/>
			<path d="M562.8,62.4c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H562.8z M566.2,61.8c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H566.2z"/>
			<path d="M569,61.7l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8L569,62v2.9h-0.6v-7.6h0.6V61.7z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northEastClick()}} style = {northEast()} id="alamakee-group">
		<path id="allamakee-county" className="map-path " d="M590.3,82.9c1-0.3,2.6,0,3.3,0c0.8,0,1.5,0,2.3,0c0.5,0,1,0,1.4,0
			c11.3-0.1,22.7-0.2,34-0.3c0-0.1,0-0.3,0-0.4c1.6,0,3.3-0.1,5-0.1c0-1.4,0-2.9,0-4.3c0-0.7,0.1-1.5,0.6-2c0.4-0.4,1-0.4,1.5-0.5
			c0-0.2,0-0.3,0-0.5c0.1,0,0.1,0,0.2,0c0.5-0.1,0.8-0.5,1-1c0.3-0.7,0.6-1.5,0.7-2.3c0-0.2,0.1-0.3,0.1-0.5c0.1-0.3,0.1-0.6,0.2-0.8
			c0.1-0.3,0.4-0.5,0.6-0.7c0.5-0.5,0.6-1.2,0.8-1.9c0.1-0.6,0.3-1.1,0.4-1.7c0.1,0,0.3,0,0.5,0c0-0.1,0-0.3,0-0.4c0.9-0.2,1.7-1,2-2
			c0,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.9-2.3,3.9-3.4,4.1-5.8c0.1-0.4-0.1-0.9-0.5-0.8c-0.1-0.7-0.3-0.3-0.7-0.5
			c-0.1,0-0.9-0.5-0.9-0.5c0.1,0,0.3,0,0.5,0c0-0.7-0.2-1.4-0.6-2c0,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2,0c0-0.1,0-0.3,0-0.5s0-0.4,0-0.5
			c-0.1,0-0.2,0-0.3,0s-0.2,0-0.2-0.1s0-0.2,0-0.3c0-0.2,0-0.4,0-0.6c-0.1-0.1-0.3-0.1-0.4-0.1c-0.7-1.1-1.5-2.2-2.2-3.3
			c-0.6-0.4-1.2-0.8-1.8-1.2c0-0.1-0.1-0.2-0.1-0.3c-2.2-1-4.3-2.1-6.5-3.1c0-0.2,0-0.3,0-0.5c-0.8,0-1.7,0-2.5,0
			c0.1-0.3-0.1-0.5-0.4-0.5h-0.1c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0-0.3h-0.1c-0.1,0-0.2,0-0.4,0c0.2-0.5,0-1.1-0.4-1.5
			c-0.1-0.3,0.3-0.6,0.3-0.4c0-0.1,0-0.1,0-0.1c0-0.3,0.2-0.5,0.5-0.4c0-0.1,0-0.3,0-0.5c0-0.7,0.5-1.1,0.5-1.8c0-1.4,0-2.8,0-4.2
			c-0.2,0-0.3,0-0.5,0c0.5,0-0.5-1.1-0.5-1.1c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.3-0.1-0.6-0.2-0.7c-0.1-0.1-0.4-0.3-0.6-0.2
			c0.1-0.2,0-0.4,0-0.5c-0.1-0.1-0.1-0.2-0.3-0.3c-0.3-0.2-0.6-0.3-0.8-0.5c-0.4-0.3-0.5-0.8-0.4-1.2c-0.2,0-0.3,0-0.5,0
			c0-0.8-0.3-1.7,0.4-2c0.3-0.1,0.9,0,1.3,0h0.1l0.5-0.5v-0.5l0.5-0.5c0.4-0.4,0.7-2,0.4-2.5c0-0.1-0.1-0.2-0.2-0.3
			c-0.3-0.4,0-1.1-0.1-1.6c-0.8,0-1.7,0-2.5,0c-4.2,0-8.5,0-12.8,0c-0.2,0-0.5,0-0.7,0.1c-0.3,0.2-18.1,0.4-26.7,0.4c0,0,0,0-0.1,0
			h-0.1L590.3,82.9z"/>
		<g id="alamakee-label" className="county-label" >
			<path d="M594.3,58.8l3-7.6h0.8l3,7.6h-0.7l-0.8-2.1h-3.8l-0.8,2.1H594.3z M599.4,56.1l-1.6-4.3l-1.7,4.3H599.4z"/>
			<path d="M602.7,58.8h-0.6v-7.6h0.6V58.8z"/>
			<path d="M607.4,55.1c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V55.1z M605.9,58.4c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C604.7,58,605.2,58.4,605.9,58.4z"/>
			<path d="M610.3,54.3L610.3,54.3c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L610.3,54.3z"/>
			<path d="M622.1,55.1c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V55.1z M620.5,58.4c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C619.3,58,619.9,58.4,620.5,58.4z"/>
			<path d="M625.1,55.7l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V55.7z"/>
			<path d="M629.8,56.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H629.8z M633.2,55.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H633.2z"/>
			<path d="M635.7,56.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H635.7z M639.1,55.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H639.1z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="sioux-group">
		<path id="sioux-county" className="map-path " d="M54,103.3h0.5v0.5l0,0c5.3,0,10.7,0.5,16,0.7c6,0.3,11.9,0.5,17.9,0.7
			c6.9,0.3,13.9,0.5,20.8,0.8c3.5,0.1,6.9,0.3,10.4,0.4c2.4,0.1,5,0.3,7.5,0.4v-0.4l0,0l0,0v-1.1v-0.6h0.1l0.2-1.9l1-35.5l0.5-11.3
			v-0.7v-2h-0.3v-0.2c-0.5,0.1-1,0.1-1.2,0.1c-7-0.2-13.9-0.5-20.8-0.7S92.8,51.8,86,51.8c-1.6-0.1-3.3-0.1-5-0.2
			c-2.3-0.1-4.5-0.2-6.8-0.3c-3.9-0.2-7.9-0.4-11.9-0.7c-2.3-0.2-4.5-0.4-6.8-0.4H55h-0.5v0.5v0.5v0.5c0,0.2,0,0.3-0.1,0.5
			c-0.5-0.1-0.8,0.5-0.9,0.5c-0.1,0-0.1,0-0.2,0c-0.3,0-0.6,0-0.8,0l0,0c0,0.2,0,0.4-0.2,0.5c-0.1,0.1-0.2,0.1-0.3,0
			c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.1,0.1,0.1,0.1,0.2c0.1,0.3,0.3,0.5,1.3,0.3c0,0.3-0.1,0.6-0.1,0.9c0.4-0.5,1.3-0.6,1.9-0.3
			c0.1,0,0.1,0.1,0.1,0.2c0.4-0.4,1-0.5,1.5-0.3c0.2,0.3,0.4,0.6,0.6,0.9c0.5,0.3,1.2,0.2,1.6-0.3c0.3-0.3,0.7-0.1,0.8,0.2
			c0.1-0.1,0.4-0.3,0.6-0.3c0.3,0,0.7,0,1.1,0c0.3,0,0.6,0,0.8,0c0,0,0,0,0,0.1c0,0.2,0.2,0.5,0.4,0.5h0.1c0,0.1,0,0.1,0,0.2
			c0,0.3,0,0.7-0.2,0.8c0.1,0,0.1,0.1,0.2,0.2c0.1,0.2,0,0.4,0,0.6c0,0.1,0.1,0.3,0.3,0.3c0-0.1,0-0.1,0-0.2h0.1c0.1,0,0.1,0.1,0,0.1
			l0,0c0,0.1-0.1,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2l0,0c0.1,0,0.1,0.1,0.2,0.2c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.3,0-0.4,0
			c0,0.9,0,1.9,0,2.9h0.1c0.1,0.1,0.2,0.1,0.3,0.1c0-0.1,0-0.1,0.1-0.2c-0.1,0.1-0.2-0.2,0-0.2s0.2,0.3,0,0.4c0,0,0,0-0.1,0
			c-0.1,0.2-0.2,0.5-0.2,0.7c0-0.1-0.1-0.2-0.2-0.1c-0.1,0-0.3,0.2-0.2,0.3c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.2,0.2,0.3
			c0.1,0.1,0,0.2-0.2,0.3c-0.1,0.1-0.2,0.1-0.2,0c0.1,0.4,0.3,0.7,0.4,1c0,0.1,0.1,0.2,0.1,0.2c0,0.1,0.1,0.2,0.1,0.3
			c0,0.1,0,0.2,0,0.3c-0.1,0.2-0.4,0.4-0.6,0.2c0.2,0.1,0.6,0.3,0.6,0.5s-0.2,0.6-0.5,0.5c0.3,0.2,0.5,0.5,0.7,0.7
			c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2-0.1,0.2-0.2c-0.1-0.1-0.1-0.1-0.1-0.2c0.1,0,0.1,0.1,0.1,0.2l0.1,0.1
			c0.4,0.4,0.9,0.8,1.3,1.2c-0.4,1.1,0.8,2.3,0.5,3.4c-0.4,0.2-0.7,0.4-1,0.6c0,0.3,0,0.6,0,0.9c-0.3,0.2-0.6,0.4-0.9,0.7
			c-0.4,0.4-0.8,0.7-1.2,1.2c0.3,0.2,0.6,0.4,0.9,0.6c0.1,0,0.1,0.1,0.2,0.1c-0.2,0.6-0.3,1.2-0.5,1.8c-0.1,0.3-0.2,0.6-0.5,0.6h-0.1
			c0,0.1,0,0.1,0,0.2s0.1,0.2,0.1,0.2c-0.1,0-0.2,0.1-0.4,0.2c-0.2,0.2-0.4,0.4-0.7,0.5c0.2-0.5-0.5-0.9-0.8-0.5
			c-0.4,0.3-0.7,0.6-1.1,0.9c-0.1,0.3-0.1,0.6-0.1,0.9c-1,0-2,0-3,0c0,0.5,0,1,0,1.5l0,0c-0.2,0-0.5,0-0.8,0c-0.1,0-0.2,0-0.2,0
			c-0.2,0.2,0.2,0.6,0.4,0.4c0,0,0.1-0.1,0.1-0.2l0,0c0.1-0.2,0.5-0.2,0.7,0s0.3,0.4,0.3,0.7c-0.1,0-0.3,0.1-0.3,0.2
			c-0.3,0.3-0.3,1-0.2,1.4c0.2-0.1,0.6,0.3,0.4,0.5c0.3,0,0.7,0,1,0l0,0v0.1c0,0.3,0,0.5,0,0.7c0.2,0,0.3,0,0.4,0.1h0.1
			c0,0,0,0,0.1,0c0,0.7,0,1.3,0,2c-0.3-0.1-0.7,0.2-0.5,0.5c-0.2,0-0.3,0-0.5,0.1c-0.1,0-0.3,0-0.4,0c-0.4,0.4-0.7,0.7-1.1,1
			c0.1-0.1,0.2,0,0.3,0s0.2,0.1,0.2,0.2c0.1,0.1,0,0.2-0.2,0.3c0.1,0.1,0.2,0.3,0.2,0.4c-0.1,0.2-0.4,0.2-0.7,0.1s-0.6-0.2-0.8,0
			c0.1,0.2,0.2,0.3,0.3,0.5c0.2,0.3,0.4,0.7,0.2,1c0.5,0,1,0,1.5,0c-0.2,0.8,0,1.7,0.5,2.3c-0.4,0.3-0.7,0.5-1,0.8c0,0.4,0,0.7,0,1
			c-0.1-0.1-0.4,0-0.5,0.2c-0.1-0.1-0.2-0.2-0.3-0.2c-0.1,0.1-0.1,0.3-0.2,0.4l0,0c-0.1,0.1-0.4,0.1-0.4,0c-0.2,0.4-0.1,0.9,0.2,1.1
			c0.1,0,0.1,0,0.2,0c0.2,0.2-0.2,0.5-0.4,0.4l0,0c0-0.1,0-0.2-0.1-0.3c-0.2-0.3-0.6-0.2-0.9-0.1c-0.4,0.5-0.6,1.2-0.6,1.8
			c0,0.1,0,0.1,0,0.2c-0.3-0.2-0.6-0.4-0.9-0.6c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.1,0,0.2,0,0.3c0.1,0.2,0.4,0.4,0.6,0.3
			c-0.1,0-0.1,0.1-0.2,0.2c-0.1,0.1-0.3,0.9-0.4,1.6c0,0.1,0,0.2,0,0.3H53v0.5h0.2h0.3h0.1h0.1L54,103.3L54,103.3z"/>
		<g id="sioux-label" className="county-label" >
			<path d="M86.7,83.4c-1.2,0-2.2-0.9-2.3-2.1h0.7c0,1.2,0.9,1.5,1.9,1.5c0.9,0,1.8-0.5,1.8-1.5c0-0.8-0.5-1.1-1.2-1.3
				c-1.2-0.4-3.1-0.8-3.1-2.4c0-1.3,1.2-2.1,2.4-2.1c1,0,2.3,0.3,2.5,1.8h-0.7c0-0.9-0.9-1.2-1.7-1.2c-0.8,0-1.8,0.4-1.8,1.3
				c0,2.2,4.3,1.2,4.3,3.8C89.7,82.9,88.2,83.4,86.7,83.4z"/>
			<path d="M91.8,76.4h-0.7v-0.8h0.7V76.4z M91.8,77.9v5.3h-0.6v-5.3H91.8z"/>
			<path d="M98,80.6c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C97.2,77.7,98,79.2,98,80.6z M95.6,78.3
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S96.8,78.3,95.6,78.3z"/>
			<path d="M102.9,77.9h0.6V82c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V77.9z"/>
			<path d="M108.6,77.9h0.7l-1.9,2.6l2.1,2.7h-0.8l-1.7-2.3l-1.7,2.3h-0.7l0,0l2-2.7l-2-2.6h0.8L107,80L108.6,77.9z"/>
		</g>
	</g>

	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="obrien-group">
		<path id="obrien-county" className="map-path " d="M129.6,106.4l49.2,1.4v-1.3h-0.1v-0.4h1.7l-0.1,0.2h0.2l1.4-49.7H181h-0.2H180l0,0v0.1
			l-19.6-0.5l-0.5-1.8v-0.2l-28.4-0.9h-0.7c0-0.1-0.1-0.1-0.1-0.2c-0.3-0.3-1.3-0.2-2.2-0.1v0.2h0.3v2v0.7l-0.5,11.3l-1,35.5
			l-0.2,1.9H127v0.6v1.1l0,0l2.2,0.1L129.6,106.4z"/>
		<g id="obrien-label" className="county-label" >
			<path d="M141.6,83.4c-2.2,0-3.4-1.6-3.4-4c0-2.4,1.2-4,3.4-4c2.2,0,3.4,1.6,3.4,4C145,81.8,143.8,83.4,141.6,83.4z M141.6,82.7
				c1.9,0,2.7-1.7,2.7-3.3c0-1.7-0.8-3.3-2.7-3.3c-1.9,0-2.7,1.7-2.7,3.3C139,81.1,139.8,82.7,141.6,82.7z"/>
			<path d="M147.7,75.6l-0.8,2.2h-0.5l0.5-2.2H147.7z"/>
			<path d="M149.5,83.2v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H149.5z
				 M151.8,78.9c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3h-1.6v2.7H151.8z M150.2,82.6h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5h-1.3V82.6z"/>
			<path d="M156.9,83.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V83.2z"/>
			<path d="M160.5,76.4h-0.7v-0.8h0.7V76.4z M160.5,77.9v5.3h-0.6v-5.3H160.5z"/>
			<path d="M162.5,80.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H162.5z M165.9,80.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H165.9z"/>
			<path d="M168.7,83.2H168v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V83.2z"/>
		</g>
	</g>


	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="clay-group">
		<path id="clay-county" className="map-path " d="M180.5,106.6 181.1,106.6 208,109.1 207.9,109.1 230.5,109.6 230.6,107.3 
			230.7,105.8 232.5,58.1 231.5,58.1 181.9,56.7 180.5,106.4z 	"/>
		<g id="clay-label" className="county-label" >
			<path d="M201.3,77.4c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H201.3z"/>
			<path d="M204.1,83.2h-0.6v-7.6h0.6V83.2z"/>
			<path d="M208.8,79.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8V82
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V79.5z M207.2,82.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C206,82.4,206.6,82.8,207.2,82.8z"/>
			<path d="M210.9,77.9l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H210.9z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="paloalto-group">
		<path id="paloalto-county" className="map-path " d="M230.6,107.3 230.6,107.3 230.7,107.3 230.6,109.6 232.2,109.6 281.1,111 
			281.2,108.7 281.6,91.2 281.6,79.2 282.1,67.2 282.1,58.5 233.5,57.5 233.5,58.2 232.5,58.1 230.7,105.8 	"/>
		<g id="paloalto-label" className="county-label" >
			<path d="M247.7,83.2v-7.6h1.9c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H247.7z M248.4,79.3h1.7c1,0,1.9-0.3,1.9-1.5
				c0-1.2-0.9-1.5-1.9-1.5h-1.7V79.3z"/>
			<path d="M256.7,79.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8V82
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V79.5z M255.1,82.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C253.9,82.4,254.4,82.8,255.1,82.8z"/>
			<path d="M259.6,83.2h-0.6v-7.6h0.6V83.2z"/>
			<path d="M265.8,80.6c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C265.1,77.7,265.8,79.2,265.8,80.6z
				 M263.4,78.3c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S264.6,78.3,263.4,78.3z"/>
			<path d="M246.8,95.9l3-7.6h0.8l3,7.6h-0.7l-0.8-2.1h-3.8l-0.8,2.1H246.8z M251.8,93.2l-1.6-4.3l-1.7,4.3H251.8z"/>
			<path d="M255.2,95.9h-0.6v-7.6h0.6V95.9z"/>
			<path d="M257.4,91.1h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6H258v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V91.1z"/>
			<path d="M265,93.2c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S265,91.8,265,93.2z M262.5,91
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S263.8,91,262.5,91z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="hancock-group">
		<path id="hancock-county" className="map-path " d="M384.1,109.9 384.1,109.8 384.1,109.8 384.1,109.8 384.7,109.8 385.2,59.8 
			385.2,59.5 384.6,59.5 384.6,59.7 371.7,58.6 335.2,58.1 334.7,109.8 334.6,112.1 384.1,112.1z 	"/>
		<g id="hancock-label" className="county-label" >
			<path d="M341.4,88.5v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6h-4.2v3.6H341.4z"/>
			<path d="M351.8,84.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V84.7z M350.2,88.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C349,87.7,349.6,88.1,350.2,88.1z"/>
			<path d="M354.7,88.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V88.5z"/>
			<path d="M363.3,84.8c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H363.3z"/>
			<path d="M369.8,85.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S369.8,84.4,369.8,85.8z M367.3,83.6
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S368.6,83.6,367.3,83.6z"/>
			<path d="M374.4,84.8c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H374.4z"/>
			<path d="M376.5,85.3l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V85.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="cerrogordo-group">
		<path id="cerrogordo-county" className="map-path " d="M386.2,59.5 386.2,59.9 385.2,59.8 384.7,109.8 385.7,109.8 385.7,109.9 
			385.7,110.3 386,111.7 435.5,112.2 435.5,111.7 437.3,111.7 437.3,112.2 437.5,112.2 437.5,111.7 437.5,110.2 438,66.6 438,65.3 
			438,60 436,60z	"/>
		<g id="cerrogordo-label" className="county-label" >
			<path d="M402.8,76.1c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H402.8z"/>
			<path d="M405.3,79.4c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H405.3z M408.7,78.8c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H408.7z"/>
			<path d="M411.4,81.9h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V81.9z"/>
			<path d="M414.8,81.9h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V81.9z"/>
			<path d="M422.3,79.2c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C421.5,76.4,422.3,77.8,422.3,79.2z
				 M419.8,77c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S421.1,77,419.8,77z"/>
			<path d="M403.7,90.7v3.6c-0.9,0.4-1.8,0.5-2.7,0.5c-2.1,0-3.2-1.6-3.2-4c0-2,1-4,3.2-4c1.3,0,2.6,0.7,2.7,2h-0.8
				c-0.1-1-1-1.4-1.9-1.4c-1.8,0-2.5,1.8-2.5,3.3c0,1.9,0.8,3.3,2.9,3.3c0.6,0,1.1-0.2,1.7-0.3v-2.5h-1.9v-0.6H403.7z"/>
			<path d="M410.1,91.9c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S410.1,90.5,410.1,91.9z M407.6,89.7
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S408.9,89.7,407.6,89.7z"/>
			<path d="M412,94.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V94.5z"/>
			<path d="M418.5,93.8L418.5,93.8c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1l0,0
				v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L418.5,93.8z M416.8,89.7c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C418.5,90.7,418,89.7,416.8,89.7z"/>
			<path d="M425.3,91.9c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S425.3,90.5,425.3,91.9z M422.8,89.7
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S424.1,89.7,422.8,89.7z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="floyd-group">
		<path id="floyd-county" className="map-path " d="M437.5,110.2 437.5,111.7 486.5,111.7 486.5,110.2 486.5,110 486.6,110 486.9,85.4 
			486.9,66.2 486.5,66.2 486.5,66.1 486.5,64.8 443.2,65.3 438,65.3 438,66.6z 	"/>
		<g id="floyd-label" className="county-label" >
			<path d="M450.1,91.1v-7.6h4.3v0.6h-3.6v2.7h3.5v0.6h-3.5v3.7H450.1z"/>
			<path d="M456.5,91.1h-0.6v-7.6h0.6V91.1z"/>
			<path d="M462.8,88.5c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S462.8,87.1,462.8,88.5z M460.3,86.2
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2S461.6,86.2,460.3,86.2z"/>
			<path d="M463.9,85.8l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H463.9z"/>
			<path d="M472.6,90.3L472.6,90.3c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1l0,0
				v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L472.6,90.3z M470.8,86.2c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C472.5,87.3,472.1,86.2,470.8,86.2z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northEastClick()}} style = {northEast()} id="chickasaw-group">
		<path id="chickasaw-county" className="map-path " d="M486.5,66.2 486.9,66.2 486.9,85.4 486.6,110 486.5,110 486.5,110.2 
			486.6,110.2 486.6,111.6 488.3,111.6 488.4,111.6 538.4,111.1 539.4,111.1 540.4,111.1 540.4,85.1 540.4,83.9 540.4,67.2 
			539.9,64.7 539.6,64.7 538,64.7 486.9,64.7 486.9,64.8 486.9,64.8 486.5,64.8 486.5,66.1z 	"/>
		<g id="chickasaw-label" className="county-label" >
			<path d="M504.3,80c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H504.3z"/>
			<path d="M507.1,81.3L507.1,81.3c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H510v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V81.3z"/>
			<path d="M513,79h-0.7v-0.8h0.7V79z M513,80.5v5.3h-0.6v-5.3H513z"/>
			<path d="M518,82.2c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H518z"/>
			<path d="M520.1,82.7l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V82.7z"/>
			<path d="M524,82.7h2.7v0.6H524V82.7z"/>
			<path d="M502.4,94.8c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V94.8z M500.9,98.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C499.7,97.7,500.2,98.1,500.9,98.1z"/>
			<path d="M506.5,93c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C504.5,93.4,505.6,93,506.5,93z"/>
			<path d="M513,94.8c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H513l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V94.8z M511.4,98.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C510.2,97.7,510.8,98.1,511.4,98.1z"/>
			<path d="M516.7,97.7L516.7,97.7l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3h-0.6l-1.6-4.6h0l-1.7,4.6h-0.6l-1.9-5.3h0.7L516.7,97.7
				z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northEastClick()}} style = {northEast()} id="fayette-group">
		<path id="fayette-county" className="map-path " d="M540.4,111.1h-1l-0.7,5.5h-0.3v1h0.3l-0.3,1.8v1.6h0.2v28.2h1.2v0.1l1.7,0.1l48.8-1h0.1
			v-0.1h0.1v-15.4l0.1-47.5v-1.9h-0.4v-0.6c-0.3,0.1-0.5,0.2-0.7,0.5v0.1h-0.1l-49,0.5v1.2L540.4,111.1L540.4,111.1z"/>
		<g id="fayette-label" className="county-label" >
			<path d="M549.1,119.5v-7.6h4.3v0.6h-3.6v2.7h3.5v0.6h-3.5v3.7H549.1z"/>
			<path d="M557.6,115.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V115.7z M556,119c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C554.8,118.7,555.3,119,556,119z"/>
			<path d="M559.7,114.2l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H559.7z"/>
			<path d="M565.1,117c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H565.1z M568.5,116.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H568.5z"/>
			<path d="M571,114.8H570v-0.6h1.1V113l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V114.8z"/>
			<path d="M574,114.8H573v-0.6h1.1V113l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V114.8z"/>
			<path d="M577.4,117c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H577.4z M580.8,116.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H580.8z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northEastClick()}} style = {northEast()} id="clayton-group">
		<path id="clayton-county" className="map-path " d="M631.3,82.2c0,0.1,0,0.3,0,0.4c-11.3,0.1-22.7,0.2-34,0.3c-0.4,0-0.9,0-1.4,0
			c-0.8,0-1.5,0-2.3,0s-2.4-0.3-3.3,0v0.6h0.4v1.9l-0.1,47.5v15.4l23-0.4l28.4-1l0,0c2.7-0.4,5.7-0.2,8.4-0.2c0.7,0,1.4,0,2.1,0
			c5.4-0.1,10.9-0.2,16.3-0.4c0.2-1.2-0.4-2.3-0.4-3.4c-0.2,0-0.5,0-0.7,0c-2,0.2-4.1-0.4-5.7-1.7c-0.4-0.4-0.8-0.8-1.2-1.2
			c0,0,0,0-0.1-0.1c-0.8-0.9-1.7-1.7-2.5-2.6c-0.3-0.1-0.6,0.2-0.6,0.5c-0.2,0-0.4-0.1-0.6-0.2c-0.4-0.2-0.7-0.4-0.9-0.8
			c-0.4-0.6-0.7-1.4-0.9-2.2c-0.3,0.1-0.6,0.1-1,0.2c-0.3,0.1-0.6,0.2-0.9,0.3c-0.5-0.5-0.7-1.2-0.5-1.9c-0.9,0-1.3-1.4-0.6-1.8
			c0,0,0,0,0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c-1.2-0.8-1.5-2.4-1.6-3.9c-0.3-2.2-0.6-4.4-0.9-6.6c-0.7,0.1-1.5-0.1-1.9-0.7
			c0.6-0.5,0.6-1.6,0.4-2.4v-0.1c-0.2-0.9-0.7-1.5-0.8-2.4c-0.1-1,0.1-2.1-0.5-2.9c-0.2-0.3-0.6-0.5-0.9-0.8
			c-0.3-0.3-0.6-0.6-0.9-0.9c-0.5-0.5-1.3-0.6-2-0.9c-0.7-0.2-1.4-0.9-1.3-1.6c0-0.3,0.2-0.6,0.3-0.9V107c0.4-1.4-0.9-2.7-0.7-4.1
			c0.1-0.5,0.4-1,0.5-1.5c0.1-0.7-0.3-1.4-0.6-2c-0.7-1.4-1-3-1.4-4.5c-0.5-2.3-1.1-4.7-1.6-7c-0.2-1.1-0.5-2.2-0.5-3.3
			c0-0.9,0.2-1.7,0.1-2.5c-0.1,0-0.1,0-0.2,0c-0.4,0-0.8-0.1-1.2-0.1C634.7,82.1,633,82.2,631.3,82.2z"/>
		<g id="clayton-label" className="county-label" >
			<path d="M605.2,113.6c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H605.2z"/>
			<path d="M608,119.5h-0.6v-7.6h0.6V119.5z"/>
			<path d="M612.7,115.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V115.7z M611.1,119c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C609.9,118.7,610.5,119,611.1,119z"/>
			<path d="M614.8,114.2l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H614.8z"/>
			<path d="M620.5,114.8h-1.1v-0.6h1.1V113l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V114.8z"/>
			<path d="M628.1,116.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S628.1,115.4,628.1,116.8z M625.7,114.6
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S626.9,114.6,625.7,114.6z"/>
			<path d="M630.1,119.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H633v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V119.5z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="plymouth-group">
		<path id="plymouth-county" className="map-path " d="M59,156.3h0.5H60h0.5H61h0.5H62h0.5H63h0.5h1H65h0.1h0.5h0.5h0.5h0.5h0.5h0.5h0.5l1,0.5
			h0.5h1.4H72h1h0.5H74h0.5H75h0.5H76h0.5H77h1h0.5H79l1,0.5h0.5H81h1h0.5H83h0.5H84h0.5H85h0.5H86h0.5H87h0.5H88h1h1h1h0.5H92
			l0.5,0.5H93h0.5H94h0.5H95h0.5H96h0.5H97h0.5H98h0.5H99h0.5h0.5h0.5h0.5h0.2h0.5h0.5h1.4h0.5h0.5l1.9,0.5h1h0.5h0.5h0.5h0.5h0.5
			h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h1h0.5h0.5l0.5,0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h0.5h2.3h0.5
			v-0.3l-2.2-0.1l0.1-2.3l0.4-16.9l0.5-12l0.5-13v-7.4c-2.5-0.1-5.1-0.3-7.5-0.4c-3.5-0.1-6.9-0.3-10.4-0.4
			c-6.9-0.3-13.9-0.5-20.8-0.8c-6-0.2-11.9-0.4-17.9-0.7c-5.3-0.2-10.7-0.7-16-0.7v0.5H55v0.5h-0.5H54h-0.5v0.5v0.5H53l0.4,0.4
			l0.1,0.1v0.5H53v0.5h-0.2h-0.3v0.5v0.4v0.1v0.5h-0.1H52v0.5h0.3h0.2v0.5H53v0.5v0.5h-0.5h-0.3H52v0.5h-0.5v0.5v0.5H52v0.5v0.5h-0.5
			v-0.2v-0.3H51h-0.5v0.5v0.1v0.4H50v-0.2v-0.3v-0.5h-0.5H49h-0.5v0.5v0.5h0.1H49v0.5h-0.5v0.5H48v0.5h-0.5v0.5H47v-0.5h-0.5v0.5v0.5
			h0.2H47v0.5v0.5v0.5v0.5h-0.5v0.5v0.5H46l-0.5-0.5v0.5v0.5v0.5H45h-0.5H44l0,0h-0.5v0.5l0,0v0.5h-0.4H43v0.2v0.3v0.5h-0.4h-0.1H42
			v0.5v0.5v0.5h0.3h0.2v0.5v0.5h0.2H43l0,0v0.5h-0.4h-0.1v0.2v0.3h-0.3H42v0.3v0.2v0.5h-0.5H41l0.5,0.5v0.1v0.4h0.3H42v0.3v0.2
			l-0.5,0.5H42h0.4h0.1v0.3v0.2h0.1H43l-0.3,0.3l-0.2,0.2v0.5h0.3H43v0.5h-0.2h-0.3v0.5h0.4H43v0.5v0.5v0.5h0.5H44v-0.5h0.5H45v0.5
			v0.5l0,0l0,0h0.5H46v0.5l0,0v0.5v0.5h0.5v-0.5h0.1H47v0.3v0.2v0.5h0.5h0.3H48v0.2v0.3v0.5h0.5v0.5H49v0.5h0.3h0.2v0.3v0.2h0.1H50
			v0.5h0.5v0.5H50v0.5h0.4h0.1H51v-0.5h0.5l0.5,0.5v0.2h0.5v0.5v0.5h-0.2H52v0.5h0.5v0.5H53l0,0l0.5,0.5v0.5v0.1v0.4h0.2H54l0.5,0.5
			v0.5v0.5v0.5l-0.1,0.1l-0.4,0.4h-0.1v0.3h0.5v0.5h0.2h0.2v0.5v0.5l0.5,0.5v1v0.5v0.5h0.5h0.5v0.5l-0.5,0.5v0.5h0.5v2.5
			c-0.2,0-0.5,0-0.7,0c-0.2,0.2,0.2,0.5,0.5,0.5l0,0c0.2,0,0.5,0,0.7,0v0.1v0.1l-1.4,1.8H56h1h0.5H58h0.3h0.2H59z"/>
		<g id="plymouth-label" className="county-label" >
			<path d="M67.1,134v-7.6H69c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H67.1z M67.8,130h1.7c1,0,1.9-0.3,1.9-1.5
				c0-1.2-0.9-1.5-1.9-1.5h-1.7V130z"/>
			<path d="M73.9,134h-0.6v-7.6h0.6V134z"/>
			<path d="M75.7,128.7l1.8,4.4l1.8-4.4h0.7L77,136h-0.7l0.8-2l-2.2-5.3H75.7z"/>
			<path d="M81.5,129.5L81.5,129.5c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3H88
				v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L81.5,129.5z"/>
			<path d="M94.9,131.3c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S94.9,129.9,94.9,131.3z M92.4,129.1
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S93.7,129.1,92.4,129.1z"/>
			<path d="M99.7,128.7h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V128.7z"/>
			<path d="M102.5,129.3h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V129.3z"/>
			<path d="M106.2,129.5L106.2,129.5c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V129.5z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="cherokee-group">
		<path id="cherokee-county" className="map-path " d="M177,159.8 177,157.8 177,157.3 177.1,157.3 177.5,139.2 178,127.2 178.5,115.2 
			178.7,110.9 178.7,107.8 129.6,106.4 129.3,106.4 127.1,106.4 127.1,106.8 127.1,114.2 126.6,127.2 126.1,139.2 125.7,156.1 
			125.6,158.4 127.8,158.4 138.6,158.7 140.7,158.8 177,159.9z 	"/>
		<g id="cherokee-label" className="county-label" >
			<path d="M135.7,128.1c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H135.7z"/>
			<path d="M138.5,129.5L138.5,129.5c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V129.5z"/>
			<path d="M144.1,131.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H144.1z M147.5,130.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H147.5z"/>
			<path d="M150.2,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V134z"/>
			<path d="M157.6,131.3c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S157.6,129.9,157.6,131.3z M155.2,129.1
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S156.4,129.1,155.2,129.1z"/>
			<path d="M159.6,130.8l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9H159v-7.6h0.6V130.8z"/>
			<path d="M164.4,131.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H164.4z M167.8,130.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H167.8z"/>
			<path d="M170.2,131.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H170.2z M173.7,130.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H173.7z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="buenavista-group">
		<path id="buenavista-county" className="map-path " d="M200,160.8 228.9,161.2 229,159.2 229,159.2 229,158.7 229,143.7 229.5,143.7 
			229.5,139.2 230.1,122.4 230.6,107.3 230.6,107.3 230.5,109.6 207.9,109.1 208,109.1 181.1,106.6 180.5,106.6 180.5,106.4 
			180.2,106.4 180.3,106.2 178.6,106.1 178.6,106.6 178.7,106.6 178.7,107.8 178.7,110.9 178.5,115.2 178,127.2 177.5,139.2 
			177.1,157.3 177,157.3 177,157.8 177,159.8 177.2,159.8 178.1,159.8 200,160.3z 	"/>
		<g id="buenavista-label" className="county-label" >
			<path d="M191.4,128.7v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H191.4z
				 M193.7,124.4c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3H192v2.7H193.7z M192,128.1h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5H192V128.1z"/>
			<path d="M201.7,123.4h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V123.4z"/>
			<path d="M204.4,126.2c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H204.4z M207.8,125.6c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H207.8z"/>
			<path d="M210.5,128.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V128.7z"/>
			<path d="M218.8,125c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V125z M217.2,128.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C216,127.9,216.5,128.3,217.2,128.3z"/>
			<path d="M193.6,140.7L193.6,140.7l2.4-6.9h0.7l-2.8,7.6h-0.8l-2.8-7.6h0.7L193.6,140.7z"/>
			<path d="M198.3,134.5h-0.7v-0.8h0.7V134.5z M198.2,136.1v5.3h-0.6v-5.3H198.2z"/>
			<path d="M201.7,135.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C199.8,136.3,200.8,135.9,201.7,135.9z"/>
			<path d="M205.7,136.6h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V136.6z"/>
			<path d="M211.9,137.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H212l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V137.6z M210.3,140.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C209.2,140.6,209.7,140.9,210.3,140.9
				z"/>
		</g>
	</g>



	<g className="county-group "onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="pocahontas-group">
		<path id="pocahontas-county" className="map-path " d="M229.5,139.2 229.5,143.7 229,143.7 229,158.7 229,159.2 229,159.2 
			228.9,161.2 230.6,161.3 230.7,160.3 230.7,160.3 280.8,161.7 280.8,160.6 281,149.1 281,147.7 281,147.7 281.5,111.5 281.1,111.5 
			281.1,111 232.2,109.6 230.6,109.6 230.7,107.3 230.6,107.3 230.1,122.4z 	"/>
		<g id="pocahontas-label" className="county-label" >
			<path d="M241.2,128.7v-7.6h1.9c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H241.2z M241.8,124.8h1.7
				c1,0,1.9-0.3,1.9-1.5c0-1.2-0.9-1.5-1.9-1.5h-1.7V124.8z"/>
			<path d="M251.4,126.1c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C250.6,123.2,251.4,124.7,251.4,126.1z
				 M248.9,123.8c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S250.2,123.8,248.9,123.8z"/>
			<path d="M256,125c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H256z"/>
			<path d="M260.9,125c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H261l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V125z M259.4,128.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C258.2,127.9,258.7,128.3,259.4,128.3z"
				/>
			<path d="M262.5,125.6h2.7v0.6h-2.7V125.6z"/>
			<path d="M241.6,136.9L241.6,136.9c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V136.9z"/>
			<path d="M251.4,138.7c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C250.6,135.9,251.4,137.3,251.4,138.7z
				 M248.9,136.5c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S250.2,136.5,248.9,136.5z"/>
			<path d="M253.3,141.4h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V141.4z"/>
			<path d="M259,136.6h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V136.6z"/>
			<path d="M265.3,137.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9H262c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V137.6z M263.7,140.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C262.5,140.6,263,140.9,263.7,140.9z"
				/>
			<path d="M269.3,135.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C267.4,136.3,268.4,135.9,269.3,135.9z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="humboldt-group">
		<path id="humboldt-county" className="map-path " d="M282.6,147.7 332.3,148.6 332.3,148.6 332.8,131 334.2,131 334.2,112.5 
			332.6,112.4 283,111.5 281.5,111.5 281,147.7z 	"/>
		<g id="humboldt-label" className="county-label" >
			<path d="M294,128.7v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6h-4.2v3.6H294z"/>
			<path d="M305,123.4h0.6v4.1c0,0.4,0,0.8,0.1,1.2H305l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V123.4z"/>
			<path d="M307.9,124.2L307.9,124.2c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L307.9,124.2z"/>
			<path d="M316,125.6h2.7v0.6H316V125.6z"/>
			<path d="M294.3,141.4h-0.7c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L294.3,141.4z M294.4,138.6c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C294.8,136.5,294.4,137.5,294.4,138.6z"/>
			<path d="M304.3,138.7c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S304.3,137.3,304.3,138.7z M301.8,136.5
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S303.1,136.5,301.8,136.5z"/>
			<path d="M306.2,141.4h-0.6v-7.6h0.6V141.4z"/>
			<path d="M311.6,140.6L311.6,140.6c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L311.6,140.6z M309.8,136.5c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C311.5,137.5,311.1,136.5,309.8,136.5z"/>
			<path d="M314.2,136.6h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V136.6z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="wright-group">
		<path id="wright-county" className="map-path " d="M332.8,131 332.3,148.6 332.3,149.3 332.3,149.3 332.1,161.3 332.1,161.3 
			333.5,161.3 383.5,161.8 383.5,161.7 383.6,161.7 383.6,154.2 384.1,154.2 384.1,127.2 384.1,112.1 334.6,112.1 334.6,112.5 
			334.2,112.5 334.2,131z 	"/>
		<g id="wright-label" className="county-label" >
			<path d="M346.4,134h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L346.4,134z"/>
			<path d="M354.9,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V134z"/>
			<path d="M358.5,127.2h-0.7v-0.8h0.7V127.2z M358.4,128.7v5.3h-0.6v-5.3H358.4z"/>
			<path d="M363.8,128.7h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L363.8,128.7z M362.1,129.1c-1.1,0-1.6,1.2-1.6,2.1c0,1,0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C363.8,130.2,363.2,129.1,362.1,129.1z"/>
			<path d="M366.6,129.5L366.6,129.5c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3H366v-7.6h0.6V129.5z"/>
			<path d="M372.3,129.3h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V129.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northCentralIowaClick()}} style = {northCentralIowa()} id="franklin-group">
		<path id="franklin-county" className="map-path " d="M384.1,109.8 384.1,109.8 384.1,109.9 384.1,112.1 384.1,127.2 384.1,154.2 
			383.6,154.2 383.6,161.7 385.2,161.7 390.4,161.7 435.2,162.1 435.2,162.1 435.5,162.1 437.3,162.1 437.3,112.2 437.3,111.7 
			435.5,111.7 435.5,112.2 386,111.7 385.7,110.3 385.7,109.9 385.7,109.8 384.7,109.8z 	"/>
		<g id="franklin-label" className="county-label" >
			<path d="M394.4,134v-7.6h4.3v0.6h-3.6v2.7h3.5v0.6h-3.5v3.7H394.4z"/>
			<path d="M400.2,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V134z"/>
			<path d="M406.1,130.2c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V130.2z M404.5,133.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C403.3,133.2,403.9,133.6,404.5,133.6
				z"/>
			<path d="M409,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V134z"/>
			<path d="M414.9,130.8l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V130.8z"/>
			<path d="M420.1,134h-0.6v-7.6h0.6V134z"/>
			<path d="M422.5,127.2h-0.7v-0.8h0.7V127.2z M422.5,128.7v5.3h-0.6v-5.3H422.5z"/>
			<path d="M424.8,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V134z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {northEastClick()}} style = {northEast()} id="butler-group">
		<path id="bulter-county" className="map-path " d="M487.1,162.1 487.1,151.2 487.1,150.7 487.1,150.3 487,150.3 487,144 486.5,144 
			486.5,111.7 437.5,111.7 437.5,112.2 437.3,112.2 437.3,162.1z 	"/>
		<g id="butler-label" className="county-label" >
			<path d="M448.2,134v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H448.2z
				 M450.6,129.7c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3h-1.6v2.7H450.6z M448.9,133.3h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5h-1.3V133.3z"/>
			<path d="M458.6,128.7h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V128.7z"/>
			<path d="M461.4,129.3h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6H462v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V129.3z"/>
			<path d="M465.1,134h-0.6v-7.6h0.6V134z"/>
			<path d="M467.1,131.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H467.1z M470.5,130.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H470.5z"/>
			<path d="M473.3,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V134z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {northEastClick()}} style = {northEast()} id="bremer-group">
		<path id="bremer-county" className="map-path " d="M487,144 487,150.3 487.1,150.3 487.1,149.2 488.8,149.2 538.7,149.2 538.7,149.2 
			538.7,121 538.5,121 538.5,119.3 538.7,117.6 538.5,117.6 538.4,116.6 538.7,116.6 539.4,111.1 538.4,111.1 488.4,111.6 
			488.3,111.6 486.6,111.6 486.6,110.2 486.5,110.2 486.5,111.7 486.5,144z 	"/>
		<g id="bremer-label" className="county-label" >
			<path d="M497,134v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H497z
				 M499.4,129.7c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3h-1.6v2.7H499.4z M497.7,133.3h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5h-1.3V133.3z"/>
			<path d="M504.5,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V134z"/>
			<path d="M507.7,131.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H507.7z M511.1,130.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H511.1z"/>
			<path d="M513.8,129.5L513.8,129.5c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L513.8,129.5z"/>
			<path d="M523,131.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H523z M526.4,130.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H526.4z"/>
			<path d="M529.1,134h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V134z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {woodburyDakotaClick()}} style = {woodburyDakota()} id="woodbury-group">
		<path id="woodbury-county" className="map-path " d="M72.3,199.8c0.1,0.5-0.1,1.2,0.4,1.5c-0.5,0.5-0.6,1.3-0.3,1.9c0.1,0.1,0.3,0.3,0.4,0.2
			c0,0.4,0,0.9,0,1.4c-0.6,0.1-0.8,0.4-0.9,0.9c1.4,0.1,2.8,0.1,4.1,0.1c3.5,0.2,6.9,0.3,10.4,0.5c6.9,0.3,13.8,0.6,20.8,0.9
			c4,0.2,8,0.3,12,0.5c4.9,0.2,9.8,0.4,14.7,0.6c2.4,0.1,4.8,0.2,7.3,0.3c1.1,0.1,2.3,0.1,3.4,0.2v-0.1h0.5l2.3,0.1
			c0-3.8,0-7.5,0-11.3c0-1,0-2.1,0.1-3.1c0.1-0.7,0.2-1.4,0.3-2.1c0.1-1.1,0.1-2.2,0.1-3.3c0-2.1,0-4.3,0-6.4c0-0.3,0-0.6,0.1-0.8
			s0.2-0.4,0.3-0.6c0.1-0.3,0.1-0.7,0.1-1c0-3.3,0-6.7,0-10c0.1-1.2-6.5-0.2-6.5-0.5c0-0.2,0-0.3,0-0.5c-0.5,0-1,0-1.5,0
			c-0.3-2.5,0-5.3,0-7.8c0-0.7,0-1.5,0.2-2.2c0-0.1,0.1-0.2,0.1-0.4l-2.2-0.1l-10.7-0.3v0.3h-0.5H125h-0.5H124h-0.5H123h-0.5H122
			h-0.5H121h-0.5H120h-0.5H119h-0.5H118l-0.5-0.5H117h-0.5h-1H115h-0.5H114h-0.5H113h-0.5H112h-0.5H111h-0.5H110h-0.5H109h-0.5H108
			h-0.5h-1l-1.9-0.5h-0.5h-0.5h-1.4h-0.5h-0.5H101h-0.5H100h-0.5H99h-0.5H98h-0.5H97h-0.5H96h-0.5H95h-0.5H94h-0.5H93h-0.5l-0.5-0.5
			h-0.5H91h-1h-1h-1h-0.5H87h-0.5H86h-0.5H85h-0.5H84h-0.5H83h-0.5H82h-1h-0.5H80l-1-0.5h-0.5H78h-1h-0.5H76h-0.5H75h-0.5H74h-0.5H73
			h-1h-0.5h-1.4h-0.5l-1-0.5h-0.5h-0.5h-0.5h-0.5h-0.5h-0.5h-0.5H65h-0.5h-1H63h-0.5H62h-0.5H61h-0.5H60h-0.5H59h-0.5h-0.2
			c0,0.2,0,0.4-0.1,0.6c0,0.5-0.1,1-0.2,1.5c-0.1,0.4-0.2,0.9-0.5,1.2c-0.2,0.2-0.5,0.3-0.8,0.3c-0.1,0-0.2,0-0.4-0.1
			c0,0.5,0,1,0,1.5c0.5,0,1,0,1.5,0c0,0.1,0,0.1,0,0.2c0,0.2,0.2,0.3,0.3,0.3s0.1,0,0.2,0c0,0.5,0,1,0,1.5c-0.3,0-0.6,0.1-0.7,0.4
			l-0.1,0.1c0,0.1,0,0.1,0,0.3c0.1,0,0.2,0.1,0.3,0.1s0.3,0,0.4,0c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1-0.1-0.2-0.1-0.3
			c0.1,0.1,0.1,0.2,0.1,0.3c0.1,0.2,0.2,0.3,0.4,0.3c0.3,0,0.6-0.2,0.6-0.5c0.3-0.2,0.9,0,1,0.4c0.5,0,0.9,0.1,1.4,0.1
			c1.7,0.2,3.4,0.5,5,1.1c0.9,1.2,1.5,2.8,1.6,4.3c0.1,1.2-0.2,2.3-0.9,3.3c-0.1,0.1-0.2,0.3-0.3,0.4c-0.9,1-2.1,1.7-2.8,2.9
			c-0.7,1.2-0.7,2.6-0.6,4c0,0.4,0.3,1,0.7,0.8c-0.4,0.5-0.7,1-1,1.5c-0.5,1-0.8,2.2-0.8,3.3c0.3-0.2,0.5,0.3,0.6,0.6
			c0.2,0.7,0.6,1.3,1.2,1.8c0.2,0.2,0.5,0.4,0.7,0.5c0.5,0.2,1.1,0.4,1.5,0.7c0.5,0.3,0.8,0.9,0.6,1.4c0.4,0.1,0.6,0.4,0.8,0.8
			c0.3,0.6,0.3,1.3,0.2,1.9c-0.1,0.8-0.2,1.6,0.1,2.4c0.4,1.2,1.6,1.8,2.6,2.5c0.2,0.1,0.4,0.3,0.5,0.4
			C72,199.1,72.3,199.4,72.3,199.8z"/>
		<g id="woodbury-label" className="county-label" >
			<path d="M85.9,186.1h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L85.9,186.1z"/>
			<path d="M98.3,183.4c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S98.3,182,98.3,183.4z M95.9,181.2
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S97.2,181.2,95.9,181.2z"/>
			<path d="M104.2,183.4c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C103.4,180.6,104.2,182,104.2,183.4z
				 M101.7,181.2c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S103,181.2,101.7,181.2z"/>
			<path d="M109.2,185.3L109.2,185.3c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L109.2,185.3z M107.4,181.2c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C109.1,182.2,108.7,181.2,107.4,181.2z"/>
			<path d="M111.9,186.1h-0.7c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L111.9,186.1z M111.9,183.3c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C112.4,181.2,111.9,182.2,111.9,183.3z"/>
			<path d="M120.8,180.8h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V180.8z"/>
			<path d="M123.8,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V186.1z"/>
			<path d="M127.1,180.8l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H127.1z"/>
		</g>
	</g>




	<g className="county-group " onClick = {() => {northwestIowaClick()}} style = {northwestIowa()} id="ida-group">
		<path id="ida-county" className="map-path " d="M183.5,193.5l0.5-22.3h-5.9v-0.6v-10.8h-0.9v0.1H177l-36.3-1.1c0,0.1-0.1,0.2-0.1,0.4
			c-0.2,0.7-0.2,1.5-0.2,2.2c0,2.5-0.3,5.3,0,7.8c0.5,0,1,0,1.5,0c0,0.2,0,0.3,0,0.5c0,0.3,6.6-0.7,6.5,0.5c0,3.3,0,6.7,0,10
			c0,0.3,0,0.7-0.1,1c-0.1,0.2-0.2,0.4-0.3,0.6c-0.1,0.2-0.1,0.5-0.1,0.8c0,2.1,0,4.3,0,6.4c0,1.1,0,2.2-0.1,3.3
			c-0.1,0.7-0.2,1.4-0.3,2.1c-0.1,1-0.1,2.1-0.1,3.1c0,3.7,0,7.5,0,11.3l35.6,0.9L183.5,193.5z"/>
		<g id="ida-label" className="county-label" >
			<path d="M160.1,186.1v-7.6h0.7v7.6H160.1z"/>
			<path d="M166.4,185.3L166.4,185.3c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L166.4,185.3z M164.7,181.2c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C166.4,182.2,165.9,181.2,164.7,181.2z"/>
			<path d="M171.6,182.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V182.3z M170,185.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C168.9,185.3,169.4,185.6,170,185.6z"/>
		</g>
	</g>



	<g className="county-group " onClick = { () => {upperDesMoinesClick()}} style = {upperDesMoines()} id="sac-group">
		<path id="sac-county" className="map-path " d="M234.4,201.1 234.9,187.2 235.4,172.3 228.5,172.3 228.9,161.2 200,160.8 200,160.3 
			178.1,159.8 178.1,170.6 178.1,171.2 184,171.2 183.5,193.5 183.1,209.6 184.2,209.7 184.2,209.7 210.6,210.7 210.6,210.7 
			233.6,211.4z 	"/>
		<g id="sac-label" className="county-label" >
			<path d="M202.1,186.2c-1.2,0-2.2-0.9-2.3-2.1h0.7c0,1.2,0.9,1.5,1.9,1.5c0.9,0,1.8-0.5,1.8-1.5c0-0.8-0.5-1.1-1.2-1.3
				c-1.2-0.4-3.1-0.8-3.1-2.4c0-1.3,1.2-2.1,2.4-2.1c1,0,2.3,0.3,2.5,1.8h-0.7c0-0.9-0.9-1.2-1.7-1.2c-0.8,0-1.8,0.4-1.8,1.3
				c0,2.2,4.3,1.2,4.3,3.8C205,185.7,203.6,186.2,202.1,186.2z"/>
			<path d="M209.5,182.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V182.3z M207.9,185.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C206.7,185.3,207.2,185.6,207.9,185.6
				z"/>
			<path d="M215.1,182.4c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H215.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="calhoun-group">
		<path id="calhoun-county" className="map-path " d="M284.5,212.1 285,198.2 285,173.6 282.5,173.6 282.5,172.4 280.5,172.4 
			280.8,161.7 230.7,160.3 230.7,160.3 230.6,161.3 228.9,161.2 228.5,172.3 235.4,172.3 234.9,187.2 234.4,201.1 233.6,211.4 
			236.1,211.5 259,212.1 259,211.7z 	"/>
		<g id="calhoun-label" className="county-label" >
			<path d="M246.5,180.2c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H246.5z"/>
			<path d="M251.6,182.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V182.3z M250,185.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C248.9,185.3,249.4,185.6,250,185.6z"/>
			<path d="M254.6,186.1h-0.6v-7.6h0.6V186.1z"/>
			<path d="M256.9,181.6L256.9,181.6c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V181.6z"/>
			<path d="M266.7,183.4c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S266.7,182,266.7,183.4z M264.2,181.2
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S265.5,181.2,264.2,181.2z"/>
			<path d="M271.5,180.8h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V180.8z"/>
			<path d="M274.5,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V186.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="webster-group">
		<path id="webster-county" className="map-path " d="M282.5,172.4 282.5,173.6 285,173.6 285,198.2 284.5,212.1 287.1,212.2 
			310.3,212.6 310.3,212.2 336,212.4 336,199.2 336,177.7 336.5,177.7 336.5,174.8 333.5,174.8 333.5,173.7 332,173.7 332,163.2 
			332,162.7 332,161.3 332.1,161.3 332.1,161.3 332.3,149.3 332.3,148.6 282.6,147.7 281,147.7 281,147.7 281,149.1 280.8,160.6 
			280.8,161.7 280.5,172.4z 	"/>
		<g id="webster-label" className="county-label" >
			<path d="M293.9,186.1h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L293.9,186.1z"/>
			<path d="M302.2,183.6c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H302.2z M305.6,183c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H305.6z"/>
			<path d="M308.2,186.1h-0.7c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L308.2,186.1z M308.2,183.3c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C308.7,181.2,308.2,182.2,308.2,183.3z"/>
			<path d="M315.3,180.6c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C313.4,181,314.4,180.6,315.3,180.6z"/>
			<path d="M319.3,181.4h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V181.4z"/>
			<path d="M322.7,183.6c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H322.7z M326.1,183c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H326.1z"/>
			<path d="M328.9,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V186.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {upperDesMoinesClick()}} style = {upperDesMoines()} id="hamilton-group">
		<path id="hamilton-county" className="map-path " d="M332,162.7 332,163.2 332,173.7 333.5,173.7 333.5,174.8 336.5,174.8 
			336.5,177.7 336,177.7 336,199.2 336,212.4 337.6,212.4 363.3,212.7 363.3,212.7 387.5,212.9 387.5,199.2 387.5,187.2 388,178.6 
			388,178.1 388,175.3 385.1,175.3 385.1,174.7 383.5,174.7 383.5,163.4 383.5,163.2 383.5,161.8 333.5,161.3 332.1,161.3 332,161.3z 
				"/>
		<g id="hamilton-label" className="county-label" >
			<path d="M342.4,186.1v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6h-4.2v3.6H342.4z"/>
			<path d="M352.8,182.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V182.3z M351.2,185.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C350,185.3,350.6,185.6,351.2,185.6z"
				/>
			<path d="M355.7,181.6L355.7,181.6c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6V182
				c0-0.4,0-0.8-0.1-1.2h0.7L355.7,181.6z"/>
			<path d="M365.1,179.2h-0.7v-0.8h0.7V179.2z M365.1,180.8v5.3h-0.6v-5.3H365.1z"/>
			<path d="M367.4,186.1h-0.6v-7.6h0.6V186.1z"/>
			<path d="M369.6,181.4h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V181.4z"/>
			<path d="M377.2,183.4c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C376.4,180.6,377.2,182,377.2,183.4z
				 M374.7,181.2c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S376,181.2,374.7,181.2z"/>
			<path d="M379.1,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H382v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V186.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {twoRiversClick()}} style = {twoRivers()} id="hardin-group">
		<path id="hardin-county" className="map-path " d="M383.5,163.4 383.5,174.7 385.1,174.7 385.1,175.3 388,175.3 388,178.1 388,178.6 
			387.5,187.2 387.5,199.2 387.5,212.9 387.6,212.9 413,213.2 413,212.8 438.2,212.8 440.4,212.8 440.4,175.3 438.2,175.3 
			437.4,175.3 437.4,175.2 437.4,163.3 437.3,163.3 437.3,162.2 437.3,162.1 435.5,162.1 435.2,162.1 435.2,162.1 390.4,161.7 
			385.2,161.7 383.6,161.7 383.5,161.7 383.5,161.8 383.5,163.2z 	"/>
		<g id="hardin-label" className="county-label" >
			<path d="M398.8,186.1v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6h-4.2v3.6H398.8z"/>
			<path d="M409.2,182.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V182.3z M407.6,185.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C406.4,185.3,406.9,185.6,407.6,185.6
				z"/>
			<path d="M412.1,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V186.1z"/>
			<path d="M418.6,185.3L418.6,185.3c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L418.6,185.3z M416.9,181.2c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C418.6,182.2,418.1,181.2,416.9,181.2z"/>
			<path d="M421.5,179.2h-0.7v-0.8h0.7V179.2z M421.5,180.8v5.3h-0.6v-5.3H421.5z"/>
			<path d="M423.8,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V186.1z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {blackHawkGrundyTamaClick()}} style = {blackhawkGrundyTama()} id="grundy-group">
		<path id="grundy-county" className="map-path " d="M437.4,162.2 437.4,163.3 437.4,175.2 437.4,175.3 438.2,175.3 440.4,175.3 
			440.4,212.8 463.7,212.8 463.7,200.6 463.8,200.6 463.8,200.2 489.6,199.9 489.6,187.2 489.6,175.6 488.5,175.6 488.5,175.2 
			487.1,175.2 487.1,163.3 487.1,162.1 437.3,162.1 437.3,162.2z 	"/>
		<g id="grundy-label" className="county-label" >
			<path d="M452.5,182.2v3.6c-0.9,0.4-1.8,0.5-2.7,0.5c-2.1,0-3.2-1.6-3.2-4c0-2,1-4,3.2-4c1.3,0,2.6,0.7,2.7,2h-0.8
				c-0.1-1-1-1.4-1.9-1.4c-1.8,0-2.5,1.8-2.5,3.3c0,1.9,0.8,3.3,2.9,3.3c0.6,0,1.1-0.2,1.7-0.3v-2.5h-1.9v-0.6H452.5z"/>
			<path d="M454.9,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V186.1z"/>
			<path d="M461.1,180.8h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V180.8z"/>
			<path d="M464.1,186.1h-0.6V182c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H467v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V186.1z"/>
			<path d="M472.9,185.3L472.9,185.3c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2H473L472.9,185.3z M471.2,181.2c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C472.9,182.2,472.4,181.2,471.2,181.2z"/>
			<path d="M475.2,180.8l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H475.2z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {blackHawkGrundyTamaClick()}}style = {blackhawkGrundyTama()} id="blackhawk-group">
		<path id="blackhawk-county" className="map-path " d="M540.8,183.7 538.6,150.3 538.5,149.3 538.7,149.3 538.7,149.2 488.8,149.2 
			487.1,149.2 487.1,150.3 487.1,150.7 487.1,151.2 487.1,162.1 487.1,163.3 487.1,175.2 488.5,175.2 488.5,175.6 489.6,175.6 
			489.6,187.2 489.6,199.9 491,199.8 504.2,199.7 516.7,199.7 516.7,199.9 541,199.5 541.2,199.5 541,193z 	"/>
		<g id="blackhawk-label" className="county-label" >
			<path d="M502.3,171.6v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H502.3z
				 M504.6,167.3c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3H503v2.7H504.6z M503,170.9h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5H503V170.9z"/>
			<path d="M509.8,171.6h-0.6v-7.6h0.6V171.6z"/>
			<path d="M514.5,167.8c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V167.8z M512.9,171.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C511.7,170.8,512.2,171.1,512.9,171.1
				z"/>
			<path d="M520.1,167.9c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H520.1z"/>
			<path d="M522.2,168.4l2.6-2.2h0.8l-2.7,2.3l2.9,3H525l-2.8-2.9v2.9h-0.6v-7.6h0.6V168.4z"/>
			<path d="M502.3,184.2v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6H503v3.6H502.3z"/>
			<path d="M512.7,180.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V180.5z M511.1,183.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C509.9,183.5,510.5,183.8,511.1,183.8
				z"/>
			<path d="M516.4,183.4L516.4,183.4l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3H520l-1.6-4.6h0l-1.7,4.6H516l-1.9-5.3h0.7
				L516.4,183.4z"/>
			<path d="M524.2,181.1l2.6-2.2h0.8l-2.7,2.3l2.9,3H527l-2.8-2.9v2.9h-0.6v-7.6h0.6V181.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {northEastClick()}} style = {northEast()} id="buchanan-group">
		<path id="buchanan-county" className="map-path " d="M538.7,149.3h-0.2l0.1,1l2.2,33.5l0.2,9.3l0.2,6.5l12.6-0.2H567v-0.2l25.3-0.2l-0.5-23.7
			l-0.8-1.5l-0.5-10.5v-12v-0.9c-0.2-0.3-0.2-0.9-0.1-1.6c0-0.1,0-0.2,0-0.4l-48.8,1l-1.7-0.1v-0.1L538.7,149.3L538.7,149.3
			L538.7,149.3z"/>
		<g id="buchanan-label" className="county-label" >
			<path d="M553.4,171.6v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H553.4z
				 M555.7,167.3c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3h-1.6v2.7H555.7z M554.1,170.9h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5h-1.3V170.9z"/>
			<path d="M563.8,166.3h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V166.3z"/>
			<path d="M569.4,167.9c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H569.4z"/>
			<path d="M571.5,167.1L571.5,167.1c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V167.1z"/>
			<path d="M576,168.4h2.7v0.6H576V168.4z"/>
			<path d="M556.2,180.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V180.5z M554.6,183.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C553.4,183.5,553.9,183.8,554.6,183.8
				z"/>
			<path d="M559.1,184.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H562v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V184.2z"/>
			<path d="M567.3,180.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V180.5z M565.7,183.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C564.5,183.5,565.1,183.8,565.7,183.8
				z"/>
			<path d="M570.2,184.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V184.2z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {easternIowaClick()}} style = {easternIowa()} id="delaware-group">
		<path id="delaware-county" className="map-path " d="M590.5,148.4L590.5,148.4c-0.1,0.1-0.1,0.2-0.1,0.4c-0.1,0.6-0.1,1.3,0.1,1.6v0.9v12
			l0.5,10.5l0.8,1.5l0.5,23.7h2.1l25.2-0.2v0.6l23.9-0.5c0-0.8,0-8.1,0-8.8c-0.2,0-1.2-21.5-1.2-23.3c0-1-0.1-4.4-0.1-5.1
			c-0.1-4,0-8-0.1-12.1c0-0.8,0-1.6-0.1-2.4l-28.4,1l-23,0.4h-0.1L590.5,148.4L590.5,148.4z"/>
		<g id="delaware-label" className="county-label" >
			<path d="M597.2,169.2c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8h-2.1v-7.6H597.2z M597.4,176.2c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H597.4z"/>
			<path d="M603,174.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H603z M606.5,173.8c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H606.5z"/>
			<path d="M609.2,176.8h-0.6v-7.6h0.6V176.8z"/>
			<path d="M613.9,173.1c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V173.1z M612.3,176.4c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C611.1,176.1,611.7,176.4,612.3,176.4
				z"/>
			<path d="M617.6,176L617.6,176l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3h-0.6l-1.6-4.6h0l-1.7,4.6h-0.6l-1.9-5.3h0.7L617.6,176z"
				/>
			<path d="M627.5,173.1c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V173.1z M625.9,176.4c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C624.7,176.1,625.3,176.4,625.9,176.4
				z"/>
			<path d="M630.4,176.8h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V176.8z"/>
			<path d="M633.7,174.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H633.7z M637.1,173.8c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H637.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {easternIowaClick()}} style = {easternIowa()} id="dubuque-group">
		<path id="dubuque-county" className="map-path " d="M668.4,142.8c0.1,1.1,0.6,2.2,0.4,3.4c-5.4,0.2-10.9,0.3-16.3,0.4c-0.7,0-1.4,0-2.1,0
			c-2.7,0-5.7-0.2-8.4,0.2l0,0c0,0.8,0,1.6,0.1,2.4c0.1,4.1,0,8.1,0.1,12.1c0,0.7,0.1,4.1,0.1,5.1c0,1.8,1,23.3,1.2,23.3
			c0,0.8,0,8,0,8.8v0.1c0.5,0,0.9,0,1.4,0v-0.1l7.4-0.2c0.2,0,0.3,0,0.5,0c0.9-0.1,9.1-0.8,9.4-0.2h7.1c0,0,0-0.1,0.1-0.1
			c0.5-0.3,8.2-0.3,8.2-0.5c5.9,0,15.7-0.9,15.7-1.3c0-3.9,0.6-7.5,0.3-11.4c0.5-0.1,4.7-0.5,5.3-0.7c0.5-0.1,0.9-0.1,1.4-0.1
			c4.9,0,9.8,0,14.7,0c-0.4-0.4-1-0.7-1.4-0.9c-1.8-0.9-3.6-1.7-5.4-2.3c-0.1-0.5-0.2-1-0.3-1.6s-0.3-1.2-0.4-1.8
			c-1.7-1.3-3.9-1.4-5.8-2.3c-1.5-0.7-2.8-1.9-4-3c-0.4-0.3-0.7-0.7-0.9-1.1c-0.2-0.6-0.1-1.2,0.1-1.9c0.1-0.2,0.2-0.4,0.3-0.6
			c0.4-0.8,1-1.5,1.3-2.3c0.5-1.5-0.1-3.1-0.8-4.5c-0.4-0.9-0.9-1.7-1.4-2.6l-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3c0-0.2,0-0.5,0-0.7
			s0-0.5,0-0.7c-0.2-0.1-0.3-0.2-0.5-0.4c-1.3-1-2.2-2.2-2.7-3.7c-0.2-0.5-0.3-1.1-0.5-1.7c-0.1-0.2-0.1-0.4-0.2-0.6
			c-0.4-1.4-1.1-2.7-2-4c-0.8-0.3-1.7-0.6-2.5-0.9c-1.3-0.3-2.5-0.5-3.6-0.8c-0.1,0-0.2-0.1-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.1
			c-0.3-0.1-0.6-0.2-1-0.3c-2.4-0.4-4.7-0.9-7.1-1.4H675c-2.1-0.5-4.3-1.5-6.5-1.6c0,0.1,0,0.3,0,0.4
			C668.4,142.5,668.4,142.7,668.4,142.8z"/>
		<g id="dubuque-label" className="county-label" >
			<path d="M652,169.2c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8h-2.1v-7.6H652z M652.2,176.2c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H652.2z"/>
			<path d="M661,171.5h0.6v4.1c0,0.4,0,0.8,0.1,1.2H661l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V171.5z"/>
			<path d="M663.8,176.8h-0.7c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L663.8,176.8z M663.8,174.1c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C664.3,172,663.8,173,663.8,174.1z"/>
			<path d="M672.7,171.5h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V171.5z"/>
			<path d="M678.7,171.5h0.7c0,0.4-0.1,0.8-0.1,1.2v6.1h-0.6V176h0c-0.4,0.6-1.1,1-1.8,1c-1.5,0-2.1-1.5-2.1-2.8
				c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,0.9v0h0v0L678.7,171.5z M677,172c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C678.7,173,678.2,172,677,172z"/>
			<path d="M684.4,171.5h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V171.5z"/>
			<path d="M687.1,174.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H687.1z M690.5,173.8c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H690.5z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="monona-group">
		<path id="monona-county" className="map-path " d="M91.5,258.5c0-0.1,0-0.3,0-0.4c2.1-0.2,4.1,0.3,6.2,0.3c1.5,0.1,29,1.1,45.6,1.8
			c0.7,0,1.5,0.1,2.2,0.1c0-2.4,0.1-7,0.1-7.5c0.1-1.2,0.2-2.3,0.3-3.5s0.2-2.5,0.2-3.8c0.1-2.2,0.1-4.5,0.2-6.7
			c0.1-0.6,0.1-1.2,0.1-1.8c0.1-0.8,0.1-1.5,0.1-2.3s0-1.5,0-2.3c0.1-3.4,0.1-6.8,0.2-10.2c0.1,0,0.3,0,0.4,0c0-4.1,0-8.1,0-12.2
			h-0.2c0.1-0.1,0.1-0.2,0.2-0.3l0,0c0.3-1.1-1.1-0.9-1.9-0.9v-0.1h-0.5v0.1c-1.1-0.1-2.3-0.1-3.4-0.2c-2.5-0.1-4.9-0.2-7.3-0.3
			c-4.9-0.2-9.8-0.4-14.7-0.6c-4-0.2-8-0.3-12-0.5c-7-0.3-13.9-0.6-20.8-0.9c-3.5-0.2-6.9-0.3-10.4-0.5c-1.3,0-2.7-0.1-4.1-0.1
			c-0.4,0-0.7,0-1.1-0.1c-0.7,0-1.3-0.2-1.7,0.4c-0.2,0.2-0.1,0.7,0,1c0.1,0.2,0.9,0.7,0.9,0.7c0,1,0,1.9,0,2.8c0,0.4-0.3,1-0.6,0.8
			c0.3,0.3,0.5,0.6,0.6,1c0.1,0.3,0.1,0.6,0,0.9c0.6,0.3,1.2,0.8,1.5,1.5c0.4,0.1,0.6,0.1,0.9,0.1h0.1v0.1c0,0.1,0.2,0.3,0.4,0.3h0.1
			c0,0.1,0,0.1,0,0.2c0.1,0.7,0.4,1.4,0.9,1.9c0,0.2,0.1,0.5,0.1,0.8c0.8,0.3,1.6,0.5,2.4,0.6c0.1,0.4,0.5,0.6,0.8,0.5
			c0.2,0.2,0.4,0.4,0.6,0.7c0.2,0.2,0.3,0.4,0.5,0.5c-0.2,0.3,0.2,0.9,0.6,0.8c0,0.5,0,1-0.1,1.5s-0.3,1,0,1.5
			c-0.3-0.1-0.5,0.2-0.6,0.5c-0.3,1.1-0.5,2.2-0.7,3.3c0,0.2,0,0.4-0.1,0.6c-0.1,0.7-0.1,1.5,0.3,2.1c0.3,0.6,0.7,1,1.3,1.3
			c0.1,0.3,0.5,0.3,0.7,0.1c0.1-0.1,0.2-0.2,0.2-0.4c1-0.2,2,0,2.9,0.6c-0.1,0.2,0.2,0.5,0.5,0.4c0,0.7,0,1.3,0,2
			c-0.3-0.1-0.6,0.2-0.5,0.5c-0.3,0,2.7,0.9,3.5,1c-0.2,0.5,0.5,0.6,0.9,0.5h0.1c-0.2,0.2,0.2,0.6,0.5,0.5c-0.2,0.2-0.3,0.3-0.5,0.5
			c0.2-0.2,0.6,0.3,0.4,0.5c-0.2-0.3-0.5,0.2-0.5,0.5s-0.2,0.7-0.4,0.6c0,0-0.1,0-0.1-0.1c0,0.7,0,1.3,0,2c0.2,0.2,0.5,0.4,0.8,0.4
			c0.5,0.1,1.1-0.2,1.7-0.3c1.2-0.3,2.5-0.1,3.5,0.5c-0.1,0.2,0.2,0.5,0.4,0.4c0.3,0.5,0.1,1.2-0.4,1.5c0,0.5,0,0.9,0,1.4
			c-0.1,0.1-0.2,0.1-0.3,0.2c-0.4,0.3-0.8,0.6-1.1,0.9c-0.5,1.2,0,2.4,0.5,3.6c0.2,0.5,0.4,0.9,0.5,1.4c-0.2-0.2-0.5,0.1-0.7,0.4
			c-0.4,0.6-1.3,0.8-1.9,0.5c0.1,0.3-0.2,0.7-0.5,0.6c-0.4,1.3,0.2,2.7,1.3,3.4c0,0,0.1,0,0.1,0.1c0,0,0,0.3,0,0.6c0,0.7,0,1.9,0,1.9
			c0.1,0,0.5,0,0.5,0v0.5v0.5c0.5,0,0.9,0,1.3,0s0.9,0,1.3,0C93.1,259.3,92.3,258.9,91.5,258.5z"/>
		<g id="monona-label" className="county-label" >
			<path d="M99.7,239.5v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H99.7z"/>
			<path d="M114,236.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S114,235.4,114,236.8z M111.5,234.6
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S112.8,234.6,111.5,234.6z"/>
			<path d="M115.9,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
			<path d="M125.7,236.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S125.7,235.4,125.7,236.8z M123.3,234.6
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S124.5,234.6,123.3,234.6z"/>
			<path d="M127.7,239.5H127v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
			<path d="M135.9,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M134.3,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C133.1,238.7,133.7,239.1,134.3,239.1
				z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="crawford-group">
		<path id="crawford-county" className="map-path " d="M207,261.8L207,261.8L207,261.8h2.2l1.4-50.4v-0.7v-0.1l-26.4-1h-0.1H183l-35.6-0.9
			l-2.3-0.1v0.1c0.8,0,2.2-0.2,1.9,0.9l0,0c-0.1,0.1-0.2,0.2-0.2,0.3h0.2c0,4.1,0,8.1,0,12.2c-0.1,0-0.3,0-0.4,0
			c-0.1,3.4-0.1,6.8-0.2,10.2c0,0.8,0,1.5,0,2.3s0,1.5-0.1,2.3c0,0.6,0,1.2-0.1,1.8c-0.1,2.2-0.1,4.5-0.2,6.7c0,1.3-0.1,2.6-0.2,3.8
			c-0.1,1.2-0.2,2.3-0.3,3.5c0,0.5-0.1,5.1-0.1,7.5c5.3,0.2,9.1,0.4,10.1,0.4v-0.3L207,261.8z"/>
		<g id="crawford-label" className="county-label" >
			<path d="M162.4,233.6c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H162.4z"/>
			<path d="M165.2,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M171.1,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M169.5,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C168.3,238.7,168.9,239.1,169.5,239.1
				z"/>
			<path d="M174.8,238.6L174.8,238.6l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3h-0.6l-1.6-4.6h0l-1.7,4.6h-0.6l-1.9-5.3h0.7
				L174.8,238.6z"/>
			<path d="M182.4,239.5v-4.7h-1.1v-0.6h1.1v-1.1c0-0.9,0.4-1.3,1.3-1.3c0.2,0,0.4,0.1,0.6,0.1v0.5c-0.1,0-0.3,0-0.4,0
				c-0.9,0-0.9,0.4-0.9,1.2v0.7h1.2v0.6H183v4.7H182.4z"/>
			<path d="M189.8,236.8c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C189,234,189.8,235.4,189.8,236.8z
				 M187.3,234.6c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S188.6,234.6,187.3,234.6z"/>
			<path d="M191.7,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M198.3,238.7L198.3,238.7c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L198.3,238.7z M196.5,234.6c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C198.2,235.6,197.8,234.6,196.5,234.6z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {northwestIowaClick()}} style = {northwestIowa()} id="carroll-group">
		<path id="carroll-county" className="map-path " d="M246.4,262.8 246.4,262.8 258,263 258,249.2 258.5,247.2 258.5,235.2 258.5,225.2 
			259,223.2 259,213.6 259,212.1 236.1,211.5 233.6,211.4 210.6,210.7 210.6,211.4 209.2,261.8 238.5,262.8z 	"/>
		<g id="carroll-label" className="county-label" >
			<path d="M226.7,233.6c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H226.7z"/>
			<path d="M231.9,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M230.3,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C229.1,238.7,229.6,239.1,230.3,239.1
				z"/>
			<path d="M234.8,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M238.2,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M245.6,236.8c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C244.8,234,245.6,235.4,245.6,236.8z
				 M243.2,234.6c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S244.4,234.6,243.2,234.6z"/>
			<path d="M247.6,239.5h-0.6v-7.6h0.6V239.5z"/>
			<path d="M249.9,239.5h-0.6v-7.6h0.6V239.5z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {twoRiversClick()}} style = {twoRivers()} id="greene-group">
		<path id="greene-county" className="map-path " d="M298.8,263.8 309.8,263.8 310.3,235.2 310.3,214.8 310.3,212.6 287.1,212.2 
			284.5,212.1 259,211.7 259,212.1 259,213.6 259,223.2 258.5,225.2 258.5,235.2 258.5,247.2 258,249.2 258,263 258.4,263z 	"/>
		<g id="greene-label" className="county-label" >
			<path d="M274.4,235.6v3.6c-0.9,0.4-1.8,0.5-2.7,0.5c-2.1,0-3.2-1.6-3.2-4c0-2,1-4,3.2-4c1.3,0,2.6,0.7,2.7,2h-0.8
				c-0.1-1-1-1.4-1.9-1.4c-1.8,0-2.5,1.8-2.5,3.3c0,1.9,0.8,3.3,2.9,3.3c0.6,0,1.1-0.2,1.7-0.3v-2.5h-1.9v-0.6H274.4z"/>
			<path d="M276.9,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M280.1,237c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H280.1z M283.5,236.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H283.5z"/>
			<path d="M286,237c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H286z M289.4,236.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H289.4z"/>
			<path d="M292.1,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H295v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
			<path d="M297.7,237c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H297.7z M301.1,236.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H301.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {twoRiversClick()}} style = {twoRivers()} id="boone-group">
		<path id="boone-county" className="map-path " d="M361.6,247.2 361.6,235.2 361.6,222.2 361.6,214.8 361.6,212.7 363.3,212.7 
			363.3,212.7 337.6,212.4 336,212.4 310.3,212.2 310.3,212.6 310.3,214.8 310.3,235.2 309.8,263.8 310.4,263.8 331.7,263.8 
			348.7,264.3 348.7,264.3 361.1,264.3 361.1,259.5z 	"/>
		<g id="boone-label" className="county-label" >
			<path d="M321.3,239.5v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H321.3z
				 M323.6,235.2c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3H322v2.7H323.6z M322,238.8h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5H322V238.8z"/>
			<path d="M332.4,236.8c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C331.7,234,332.4,235.4,332.4,236.8z
				 M330,234.6c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S331.3,234.6,330,234.6z"/>
			<path d="M338.3,236.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S338.3,235.4,338.3,236.8z M335.8,234.6
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S337.1,234.6,335.8,234.6z"/>
			<path d="M340.3,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
			<path d="M345.9,237c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H345.9z M349.3,236.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H349.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {twoRiversClick()}} style = {twoRivers()} id="story-group">
		<path id="story-county" className="map-path " d="M413,213.2 387.6,212.9 387.5,212.9 363.3,212.7 361.6,212.7 361.6,214.8 
			361.6,222.2 361.6,235.2 361.6,247.2 361.1,259.5 361.1,264.3 363,264.3 393,264.3 402,264.8 402,264.9 413,264.9 413,214.3z 	"/>
		<g id="story-label" className="county-label" >
			<path d="M376.2,239.6c-1.2,0-2.2-0.9-2.3-2.1h0.7c0,1.2,0.9,1.5,1.9,1.5c0.9,0,1.8-0.5,1.8-1.5c0-0.8-0.5-1.1-1.2-1.3
				c-1.2-0.4-3.1-0.8-3.1-2.4c0-1.3,1.2-2.1,2.4-2.1c1,0,2.3,0.3,2.5,1.8h-0.7c0-0.9-0.9-1.2-1.7-1.2c-0.8,0-1.8,0.4-1.8,1.3
				c0,2.2,4.3,1.2,4.3,3.8C379.1,239.1,377.7,239.6,376.2,239.6z"/>
			<path d="M381,234.8H380v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V234.8z"/>
			<path d="M388.7,236.8c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C387.9,234,388.7,235.4,388.7,236.8z
				 M386.2,234.6c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S387.5,234.6,386.2,234.6z"/>
			<path d="M390.6,239.5H390v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M393.9,234.2l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H393.9z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {twoRiversClick()}} style = {twoRivers()} id="marshall-group">
		<path id="marshall-county" className="map-path " d="M438.2,212.8 413,212.8 413,213.2 413,214.3 413,264.9 414.8,264.9 464,264.9 
			464,247.3 464.3,223.3 464.1,212.8 463.7,212.8 440.4,212.8z 	"/>
		<g id="marshall-label" className="county-label" >
			<path d="M420.2,239.5v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H420.2z"/>
			<path d="M433,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H433l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M431.4,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C430.2,238.7,430.7,239.1,431.4,239.1
				z"/>
			<path d="M435.9,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V239.5z"/>
			<path d="M440.5,234c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C438.6,234.4,439.6,234,440.5,234z"/>
			<path d="M444.7,235L444.7,235c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8
				v3H444v-7.6h0.6V235z"/>
			<path d="M452.9,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M451.3,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C450.1,238.7,450.7,239.1,451.3,239.1
				z"/>
			<path d="M455.8,239.5h-0.6v-7.6h0.6V239.5z"/>
			<path d="M458.1,239.5h-0.6v-7.6h0.6V239.5z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {blackHawkGrundyTamaClick()}} style = {blackhawkGrundyTama()} id="tama-group">
		<path id="tama-county" className="map-path " d="M504.2,199.7 491,199.8 489.6,199.9 463.8,200.2 463.8,200.6 463.7,200.6 
			463.7,212.8 464.1,212.8 464.3,223.3 464,247.3 464,264.9 464,264.9 464,264.8 464.3,264.8 479.2,265 502.7,264.5 515.8,264.5 
			516.2,264.5 516.2,264.3 517.2,264.3 516.7,243.7 516.7,201 516.7,199.9 516.7,199.7z 	"/>
		<g id="tama-label" className="county-label" >
			<path d="M480.1,232.5h-2.5v-0.6h5.6v0.6h-2.4l0,7h-0.7L480.1,232.5z"/>
			<path d="M486.2,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9H483c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M484.6,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C483.4,238.7,484,239.1,484.6,239.1z"
				/>
			<path d="M489.1,235L489.1,235c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6
				v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3H492v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L489.1,235z"/>
			<path d="M500.9,235.7c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V235.7z M499.3,239.1c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C498.1,238.7,498.6,239.1,499.3,239.1
				z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {linnBentonJonesClick()}} style = {linnBentonJones()} id="benton-group">
		<path id="benton-county" className="map-path " d="M568.8,199.4 567,199.4 553.8,199.4 541.2,199.5 541,199.5 516.7,199.9 516.7,201 
			516.7,243.7 517.2,264.3 565.2,263.8 567.5,263.8 569.1,263.8 569.1,263.8 569.3,263.8 568.8,201.9z 	"/>
		<g id="benton-label" className="county-label" >
			<path d="M526.4,239.5v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H526.4z
				 M528.7,235.2c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3h-1.6v2.7H528.7z M527.1,238.8h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5h-1.3V238.8z"/>
			<path d="M533.4,237c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H533.4z M536.8,236.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H536.8z"/>
			<path d="M539.5,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
			<path d="M545.2,234.8h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V234.8z"/>
			<path d="M552.8,236.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S552.8,235.4,552.8,236.8z M550.3,234.6
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S551.6,234.6,550.3,234.6z"/>
			<path d="M554.7,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
		</g>
	</g>



	<g className="county-group " style = {linnBentonJones()} id="linn-group">
		<path id="linn-county" className="map-path " d="M594.4,198.9 592.3,198.9 567,199.2 567,199.4 568.8,199.4 568.8,201.9 569.3,263.8 
			585.8,264 618.7,263.5 618.5,250.4 618.6,250.4 618.1,200.8 618.1,199.3 619.6,199.2 619.6,198.7z 	"/>
		<g id="linn-label" className="county-label" >
			<path d="M584.4,239.5v-7.6h0.7v7h3.8v0.6H584.4z"/>
			<path d="M590.8,232.7H590v-0.8h0.7V232.7z M590.7,234.2v5.3h-0.6v-5.3H590.7z"/>
			<path d="M593.1,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H596v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
			<path d="M598.9,239.5h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V239.5z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {linnBentonJonesClick()}} style = {linnBentonJones()} id="jones-group">
		<path id="jones-county" className="map-path " d="M670.2,236.5l-0.7-36v-2.2h-0.2h-7.1c-0.3-0.6-8.5,0.1-9.4,0.2c-0.2,0-0.3,0-0.5,0l-7.4,0.2
			v0.1c-0.5,0-0.9,0-1.4,0c0,0,0,0,0-0.1l-23.9,0.5h-1.5v1.5l0.5,49.6h1.4l50-0.9c-0.1-4.5-0.2-8.3-0.2-9.4c0-1.4-0.3-2.7,0.3-3.4
			C670.2,236.6,670.2,236.5,670.2,236.5L670.2,236.5z"/>
		<g id="jones-label" className="county-label" >
			<path d="M630,226.4c0.1,0.8,0.6,1.4,1.4,1.4c1,0,1.3-1,1.3-1.9v-5.2h0.7v5.1c0,0.6,0,1.3-0.5,1.9c-0.4,0.5-1.1,0.7-1.7,0.7
				c-1.2,0-1.8-0.9-2-2H630z"/>
			<path d="M639.6,225.6c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S639.6,224.2,639.6,225.6z M637.2,223.4
				c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S638.4,223.4,637.2,223.4z"/>
			<path d="M641.6,228.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V228.3z"/>
			<path d="M647.2,225.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H647.2z M650.6,225.2c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H650.6z"/>
			<path d="M654.4,222.8c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C652.5,223.2,653.5,222.8,654.4,222.8z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {easternIowaClick()}} style = {easternIowa()} id="jackson-group">
		<path id="jackson-county" className="map-path " d="M700.2,184.2c-0.5,0-0.9,0-1.4,0.1c-0.6,0.2-4.8,0.6-5.3,0.7c0.3,3.9-0.3,7.5-0.3,11.4
			c0,0.4-9.8,1.3-15.7,1.3c0,0.2-7.7,0.2-8.2,0.5c0,0,0,0.1-0.1,0.1h0.2v2.2l0.7,36c0,0,0,0,0.1,0c0.3-0.3,0.8-0.4,1.5-0.4
			c2.1,0,4.3,0,6.4,0c4.3,0,23.6-0.6,28.2-0.7c2.9-0.1,5.8-0.2,8.8-0.3c6.7-0.2,13.5-0.4,20.2-0.6c3.4-0.1,6.8-0.2,10.2-0.3
			c1.7-0.1,3.3-0.1,5-0.2c1,0,2-0.1,3-0.1c0-0.7,0-1.4,0-2.1c0-0.2,0-0.5,0-0.7c-0.1,0-0.2,0-0.2,0h-0.2c0-0.4,0-0.8,0-1.2
			c0-0.3,0-0.5,0-0.8c0.2,0,0.3,0,0.5,0c0-2,0-4,0-6c-0.2,0-0.3,0-0.5,0c0-0.4-0.1-0.5-0.5-0.5c0.1-0.7-0.7-0.4-1.4-0.1
			c-0.3,0.1-0.5,0.2-0.6,0.2c0-0.2,0-0.4,0-0.6c-0.3,0.1-0.6,0.1-0.9,0c-0.3-0.1-0.6-0.3-0.6-0.6c0-0.1,0-0.2,0-0.3
			c0-0.2-0.2-0.3-0.3-0.4c-0.3-0.3-0.2-0.7-0.1-1.2c0-0.2,0-0.3-0.1-0.4c-0.1-0.2-0.3-0.3-0.4-0.5s-0.2-0.4-0.1-0.6
			c-0.6,0.1-0.6-0.3-1-0.5s-3-1.5-3-1.6s0-0.3,0-0.4c-0.7,0.1-1.4-0.1-2.1-0.3c-0.3-0.1-0.6-0.2-1-0.3c-0.6-0.2-1.1-0.4-1.6-0.7
			c-0.3-0.1-0.5-0.3-0.8-0.5c-1-0.6-1.9-1.3-2.9-1.3h-0.1l0,0c0-0.2,0-0.3,0-0.5c-0.5,0.2-0.9-0.4-1.3-0.7c-0.3-0.3-0.7-0.3-1.1-0.4
			c-0.5-0.1-1-0.2-1.5-0.4c-1.1-0.3-2.2-0.8-3-1.5c-0.3-0.3-0.6-0.6-1-0.9c-0.2-0.2-0.4-0.4-0.7-0.5c-0.1-0.1-0.2-0.2-0.4-0.2
			c0-0.1-0.1-0.1-0.1-0.2c-0.3-0.7-0.7-1.5-1-2.2c-0.1,0-0.3,0-0.4,0c0.1-0.6-0.4-1.1-1-1c0.2-0.3-0.1-0.6-0.4-0.5c0-0.2,0-0.3,0-0.5
			c-0.2,0-0.3,0-0.5,0c0-0.7,0-1.3,0-2c-0.2,0-0.3,0-0.5,0c0.1-0.2,0-0.3-0.1-0.5s-0.2-0.3-0.3-0.5c-0.3-0.6,0-1.3,0.3-2
			c0.1-0.3,0.2-0.7,0.1-1c0.2,0,0.3,0,0.5,0c-0.1-1.2-0.1-2.5,0.2-3.7c0.1-0.5,0.3-0.3,0.1-0.9c0,0-0.6-0.8-0.3-0.8
			c-0.2,0-0.3,0-0.5,0c0-0.2,0-0.3,0-0.5c-0.2,0-0.3,0-0.4,0c0,0,0,0-0.1,0c0-0.1,0-0.2,0-0.2c0-0.1,0-0.2,0-0.2h-0.1
			c-0.1,0-0.2,0-0.3,0c-0.3-0.8-0.7-1.5-1.1-2.3v-0.1l0,0c-0.1,0-0.3,0-0.4,0c0-0.1,0-0.3,0-0.4c-1.2-0.6-2.3-1.8-2.8-3.1
			c-0.1-0.2-0.1-0.3-0.1-0.5c-0.8,0-1.6,0-2.5,0C710.1,184.2,705.1,184.2,700.2,184.2z"/>
		<g id="jackson-label" className="county-label" >
			<path d="M682.8,216.8c0.1,0.8,0.6,1.4,1.4,1.4c1,0,1.3-1,1.3-1.9v-5.2h0.7v5.1c0,0.6,0,1.3-0.5,1.9c-0.4,0.5-1.1,0.7-1.7,0.7
				c-1.2,0-1.8-0.9-2-2H682.8z"/>
			<path d="M690.8,214.9c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V214.9z M689.2,218.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C688,217.9,688.6,218.3,689.2,218.3z"
				/>
			<path d="M696.4,215c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H696.4z"/>
			<path d="M698.5,215.5l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V215.5z"/>
			<path d="M704.9,213.2c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C702.9,213.6,704,213.2,704.9,213.2z"/>
			<path d="M713,216c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C712.2,213.2,713,214.6,713,216z
				 M710.5,213.8c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S711.8,213.8,710.5,213.8z"/>
			<path d="M714.9,218.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V218.7z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="harrison-group">
		<path id="harrison-county" className="map-path " d="M106.6,311.8c3.3,0,6.6,0,10,0c0.3,0,0.7,0,0.9,0.3c4.7,0.2,28.6,0.3,29.2,1
			c1.6,0,3.2,0.1,4.9,0.1c3.1,0.1,6.3,0.1,9.4,0.2v-11.6l0.5-2.5H156l-1.5-0.5v-2.5l0.5-22.9l0.4-10.5l0.1-2.2
			c-0.9,0-4.8-0.2-10.1-0.4c-0.7,0-1.4-0.1-2.2-0.1c-16.6-0.7-44-1.7-45.6-1.8c-2.1,0-4.1-0.5-6.2-0.3c0,0.1,0,0.3,0,0.4
			c0.8,0.4,1.6,0.8,2.3,1.3c0.2,0.1,0.4,0.3,0.6,0.4c0.1,0.7,0.1,1.4,0.1,2.1c0,0.1,0,0.2,0,0.2c0,0.4-0.3,0.9-0.5,0.6
			c0.1,0.3,0.2,0.6,0.3,0.9c0.2,0.6,0.4,1.2,1,1.5c0.3,0.1,0.8,0.4,0.6,0.7c0.6-0.3,1.3-0.1,1.6,0.4c0.2,0,0.4,0,0.6,0
			c0.1,0,0.2,0,0.3,0c0.2,0.4,0.3,0.8,0.5,1.1c0,0.1,0.1,0.2,0.1,0.4c0.3,0,0.5,0,0.8,0c0,0.5,0,1,0,1.5c-0.3,0.3-0.6,0.5-1,0.8
			c-0.2,0.1-0.4,0.3-0.5,0.4c0.2,0.4-0.1,0.9-0.5,0.9c0,0.3,0,0.6,0,0.9c0,0.5,0,1,0,1.5c-0.4,0.3-0.7,0.7-1.1,1c-0.1,0-0.3,0-0.4,0
			c-0.3,0-0.7,0.1-1,0.1c0.1,0.3-0.2,0.6-0.5,0.5c0,1,0,2,0,3c0.3,0.2,0.6,0.3,1,0.4c0.3,0.1,0.6,0.2,0.9,0.3c0.5,0.5,1,1,1.5,1.5
			c0.1,0.5,0.1,0.9,0.1,1.4c-0.3-0.1-0.6,0.2-0.5,0.5c-0.4,0-0.8,0-1.1,0c-0.4,0-0.8,0-1.3,0c-0.3,0-0.6-0.3-0.5-0.5l0,0
			c-0.9,0-1.8,0.4-2.2,1.1c-0.4,0.6-0.4,1.5-0.1,2.1c0,0-0.1,0-0.1,0.1c-0.1,0.2,0.1,0.4,0.2,0.5c0.2,0.1,0.3,0.3,0.2,0.5
			c0.2,0.2,0.4,0.3,0.6,0.5c0.3,0.3,0.7,0.6,1,0.9c0.2,0.1,0.4,0.3,0.5,0.5c0.6,0.8,0.4,1.9,0,2.9c-0.1,0.3-0.2,0.5-0.3,0.8
			c-1,0.7-1.7,1.8-2,3c-0.1,0-0.3,0-0.4,0s-0.2,0-0.1,0.2c0.2,1,0.7,1.9,1.3,2.7c0,0.1,0,0.2,0.1,0.3l0,0l0.1,0.1
			c0.3,0.2,0.9,0.3,1.3,0.5c0.9,0.3,1.2,1.3,1.5,2.2c-0.4,0.6-0.7,1.2-1.1,1.8c-0.3,0.6-0.7,1.2-0.8,1.9s0,1.5,0.2,2.2
			c0.2,0.8,0.7,1.8,1.5,1.8c0.1,0,0.2,0,0.2,0c0.8,0.8,1.5,1.6,2.3,2.5c0.1,0.1,0.3,0.3,0.4,0.4c0.6,0,1.3,0,1.9,0
			c0.2-1.9,0.5-3.7,1.1-5.5c0.8,0,1.6,0,2.4,0c0,0.4,0,0.8,0,1.2c0,0.3,0,0.5,0,0.8c0.3,0.2,0.6,0.8,0.7,1.4s0.2,1.4,0.3,2.1
			C105.9,311.7,106.3,311.8,106.6,311.8z"/>
		<g id="harrison-label" className="county-label" >
			<path d="M106.9,290.3v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6h-4.2v3.6H106.9z"/>
			<path d="M117.3,286.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V286.5z M115.7,289.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C114.6,289.5,115.1,289.8,115.7,289.8
				z"/>
			<path d="M120.2,290.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V290.3z"/>
			<path d="M123.7,290.3H123v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V290.3z"/>
			<path d="M127.2,283.4h-0.7v-0.8h0.7V283.4z M127.2,285v5.3h-0.6V285H127.2z"/>
			<path d="M130.6,284.8c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C128.7,285.2,129.7,284.8,130.6,284.8z"/>
			<path d="M138.7,287.6c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S138.7,286.2,138.7,287.6z M136.2,285.4
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C138,286.6,137.5,285.4,136.2,285.4z"/>
			<path d="M140.6,290.3H140v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V290.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="shelby-group">
		<path id="shelby-county" className="map-path " d="M211.9,315.2l1.5-8.9v-4l-0.9-2.5l-4.6-0.5l0.5-35.2v-0.5h0.7l0.1-1.8l-2.1-0.1H207v0.1
			l-51.5-1.5v0.3l-0.1,2.2l-0.4,10.5l-0.5,22.9v2.5l1.5,0.5h5.5l-0.5,2.5v11.6h0.1c6.1,0.1,12.2,0.3,18.3,0.3c0,0.2,21.1,0.6,22,1
			c0.1,0.1,0.2,0.2,0.3,0.3l10,0.3L211.9,315.2z"/>
		<g id="shelby-label" className="county-label" >
			<path d="M169.8,290.4c-1.2,0-2.2-0.9-2.3-2.1h0.7c0,1.2,0.9,1.5,1.9,1.5c0.9,0,1.8-0.5,1.8-1.5c0-0.8-0.5-1.1-1.2-1.3
				c-1.2-0.4-3.1-0.8-3.1-2.4c0-1.3,1.2-2.1,2.4-2.1c1,0,2.3,0.3,2.5,1.8h-0.7c0-0.9-0.9-1.2-1.7-1.2c-0.8,0-1.8,0.4-1.8,1.3
				c0,2.2,4.3,1.2,4.3,3.8C172.8,289.9,171.3,290.4,169.8,290.4z"/>
			<path d="M174.8,285.8L174.8,285.8c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V285.8z"/>
			<path d="M180.4,287.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H180.4z M183.9,287.2c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H183.9z"/>
			<path d="M186.6,290.3H186v-7.6h0.6V290.3z"/>
			<path d="M188.8,290.3h-0.7c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L188.8,290.3z M188.8,287.5c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C189.3,285.4,188.8,286.4,188.8,287.5z"/>
			<path d="M194,285l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H194z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="audubon-group">
		<path id="audubon-county" className="map-path " d="M250.9,314.4 250.9,300.3 245.9,300.2 246.4,264.6 246.4,262.8 246.4,262.8 
			238.5,262.8 209.2,261.8 209.1,263.6 208.4,263.6 208.4,264.2 207.9,299.4 212.5,299.9 213.4,302.4 213.4,306.4 211.9,315.2 
			216.1,315.4 218.1,315.4 219.4,315.5 249.3,316.3 249.3,315.7 250.4,315.7 250.7,315.7z 	"/>
		<g id="audubon-label" className="county-label" >
			<path d="M214.8,283.7l3-7.6h0.8l3,7.6h-0.7l-0.8-2.1h-3.8l-0.8,2.1H214.8z M219.9,281l-1.6-4.3l-1.7,4.3H219.9z"/>
			<path d="M225.9,278.4h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V278.4z"/>
			<path d="M231.9,282.9L231.9,282.9c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0V276h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L231.9,282.9z M230.1,278.8c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C231.8,279.8,231.4,278.8,230.1,278.8z"/>
			<path d="M237.6,278.4h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V278.4z"/>
			<path d="M239.2,280.5h2.7v0.6h-2.7V280.5z"/>
			<path d="M216.1,296.3h-0.7c0-0.4,0.1-0.8,0.1-1.2v-6.4h0.6v3.1l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1l0,0L216.1,296.3z M216.1,293.6c0,1.2,0.4,2.3,1.8,2.3c1.2,0,1.5-1.3,1.5-2.3
				c0-1-0.4-2.2-1.6-2.2C216.6,291.4,216.1,292.5,216.1,293.6z"/>
			<path d="M226,293.7c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C225.2,290.9,226,292.3,226,293.7z
				 M223.5,291.4c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C225.3,292.7,224.8,291.4,223.5,291.4z"/>
			<path d="M227.9,296.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V296.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="guthrie-group">
		<path id="guthrie-county" className="map-path" d="M298.4,301.3 298.8,290.4 298.8,265.1 298.8,263.8 298.8,263.8 258.4,263 258,263 
			246.4,262.8 246.4,264.6 245.9,300.2 250.9,300.3 250.9,314.4 250.7,315.7 300.5,316.6 302.5,316.7 302.5,316.8 302.7,316.8 
			302.7,301.2z 	"/>
		<g id="guthrie-label" className="county-label" >
			<path d="M262.6,286.4v3.6c-0.9,0.4-1.8,0.5-2.7,0.5c-2.1,0-3.2-1.6-3.2-4c0-2,1-4,3.2-4c1.3,0,2.6,0.7,2.7,2h-0.8
				c-0.1-1-1-1.4-1.9-1.4c-1.8,0-2.5,1.8-2.5,3.3c0,1.9,0.8,3.3,2.9,3.3c0.6,0,1.1-0.2,1.7-0.3V287H260v-0.6H262.6z"/>
			<path d="M267.9,285h0.6v4.1c0,0.4,0,0.8,0.1,1.2H268l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1V285h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V285z"/>
			<path d="M270.7,285.5h-1.1V285h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V285.5z"/>
			<path d="M274.4,285.8L274.4,285.8c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V285.8z"/>
			<path d="M280.3,290.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V290.3z"/>
			<path d="M283.9,283.4h-0.7v-0.8h0.7V283.4z M283.8,285v5.3h-0.6V285H283.8z"/>
			<path d="M285.9,287.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H285.9z M289.3,287.2c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H289.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="dallas-group">
		<path id="dallas-county" className="map-path " d="M348.2,302 348.7,266.2 348.7,264.3 348.7,264.3 331.7,263.8 310.4,263.8 
			309.8,263.8 298.8,263.8 298.8,263.8 298.8,265.1 298.8,290.4 298.4,301.3 302.7,301.2 302.7,316.8 329,317.3 329,317.4 
			350.1,316.4 350.1,316.3 350.5,316.3 350.7,316.3 350.9,302.3z 	"/>
		<g id="dallas-label" className="county-label" >
			<path d="M313,282.6c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8H311v-7.6H313z M313.2,289.6c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H313.2z"/>
			<path d="M321.5,286.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V286.5z M319.9,289.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C318.7,289.5,319.2,289.8,319.9,289.8
				z"/>
			<path d="M324.4,290.3h-0.6v-7.6h0.6V290.3z"/>
			<path d="M326.7,290.3h-0.6v-7.6h0.6V290.3z"/>
			<path d="M331.4,286.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V286.5z M329.8,289.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C328.7,289.5,329.2,289.8,329.8,289.8
				z"/>
			<path d="M335.5,284.8c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C333.5,285.2,334.5,284.8,335.5,284.8z"/>
		</g>
	</g>



	<g className="county-group" onClick = {() => {polkClick()}} style = {polk()} id="polk-group">
		<path id="polk-county" className="map-path" d="M404,304.4 402,304.4 402,265.8 402,264.9 402,264.8 393,264.3 363,264.3 
			361.1,264.3 348.7,264.3 348.7,266.2 348.2,302 350.9,302.3 350.7,316.3 350.7,316.4 350.8,316.4 350.9,316.4 350.9,316.4 
			372,316.9 378.9,316.9 391,317.8 392.5,317.8 393,318.3 394.5,319.3 397.5,320.8 399.5,321.6 401.5,321.6 402.8,321.6 404,321.6 
			404,317.4 404,317.3z 	"/>
		<g id="polk-label" className="county-label" >
			<path d="M365.8,290.3v-7.6h1.9c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H365.8z M366.5,286.3h1.7
				c1,0,1.9-0.3,1.9-1.5c0-1.2-0.9-1.5-1.9-1.5h-1.7V286.3z"/>
			<path d="M376,287.6c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C375.2,284.8,376,286.2,376,287.6z
				 M373.5,285.4c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C375.3,286.6,374.8,285.4,373.5,285.4z"/>
			<path d="M378,290.3h-0.6v-7.6h0.6V290.3z"/>
			<path d="M380.4,287.1l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V287.1z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="jasper-group">
		<path id="jasper-county" className="map-path " d="M464,303.3 464,295.3 464,270.9 464,267.1 464,267.1 464,265.9 464,264.9 
			414.8,264.9 413,264.9 402,264.9 402,265.8 402,304.4 404,304.4 404,317.3 404,317.4 426.4,317.4 452.8,317.4 452.8,317.2 
			465.5,317.1 465,303.3z 	"/>
		<g id="jasper-label" className="county-label" >
			<path d="M419.7,288.4c0.1,0.8,0.6,1.4,1.4,1.4c1,0,1.3-1,1.3-1.9v-5.2h0.7v5.1c0,0.6,0,1.3-0.5,1.9c-0.4,0.5-1.1,0.7-1.7,0.7
				c-1.2,0-1.8-0.9-2-2H419.7z"/>
			<path d="M427.7,286.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V286.5z M426.1,289.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C424.9,289.5,425.5,289.8,426.1,289.8
				z"/>
			<path d="M431.8,284.8c1,0,1.8,0.3,1.9,1.5H433c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C429.8,285.2,430.8,284.8,431.8,284.8z"/>
			<path d="M435.8,292.3h-0.6v-6.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1h0V292.3z M437.6,289.8c1.2,0,1.5-1.3,1.5-2.3c0-1-0.4-2.1-1.6-2.1
				c-1.2,0-1.7,1-1.7,2.1C435.8,288.7,436.2,289.8,437.6,289.8z"/>
			<path d="M441.5,287.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H441.5z M444.9,287.2c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H444.9z"/>
			<path d="M447.6,290.3H447v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V290.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="poweshiek-group">
		<path id="poweshiek-group" className="map-path" d="M516.2,264.5 515.8,264.5 502.7,264.5 479.2,265 464.3,264.8 464,264.8 
			464,264.9 464,264.9 464,265.9 464,267.1 464,267.1 464,270.9 464,295.3 464,303.3 465,303.3 465.5,317.1 468.2,317 503.5,316.7 
			503.5,316.7 516.5,316.5 518,316.5 518,304.8 517.5,265.7 517.2,265.7 517.2,264.5 517.2,264.3 516.2,264.3z 	"/>
		<g id="poweshiek-label" className="county-label" >
			<path d="M477.2,283.7V276h1.9c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H477.2z M477.9,279.7h1.7c1,0,1.9-0.3,1.9-1.5
				s-0.9-1.5-1.9-1.5h-1.7V279.7z"/>
			<path d="M487.4,281c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8s0.8-2.8,2.5-2.8S487.4,279.6,487.4,281z M485,278.8
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C486.8,280,486.3,278.8,485,278.8z"/>
			<path d="M490.2,282.8L490.2,282.8l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3h-0.6l-1.6-4.6h0l-1.7,4.6h-0.6l-1.9-5.3h0.7
				L490.2,282.8z"/>
			<path d="M497.5,281.2c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H497.5z M500.9,280.6c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H500.9z"/>
			<path d="M502.3,280.5h2.7v0.6h-2.7V280.5z"/>
			<path d="M478.8,290.9c1,0,1.8,0.3,1.9,1.5H480c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C476.8,291.2,477.9,290.9,478.8,290.9z"/>
			<path d="M482.9,291.8L482.9,291.8c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V291.8z"/>
			<path d="M488.9,289.5h-0.7v-0.8h0.7V289.5z M488.8,291v5.3h-0.6V291H488.8z"/>
			<path d="M490.9,293.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H490.9z M494.3,293.2c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H494.3z"/>
			<path d="M497.1,293.2l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V293.2z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="iowa-group">
		<path id="iowa-county" className="map-path " d="M567.5,263.8 565.2,263.8 517.2,264.3 517.2,264.5 517.2,265.7 517.5,265.7 
			518,304.8 518,316.5 557,316.2 557,316.3 570.1,316.1 570.1,315.7 569.1,268.7 569.1,265.2 569.1,264 569.1,263.8 569.1,263.8z 	"/>
		<g id="iowa-label" className="county-label" >
			<path d="M530.7,290.3v-7.6h0.7v7.6H530.7z"/>
			<path d="M537.9,287.6c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C537.1,284.8,537.9,286.2,537.9,287.6z
				 M535.5,285.4c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C537.2,286.6,536.7,285.4,535.5,285.4z"/>
			<path d="M540.6,289.4L540.6,289.4l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3h-0.6l-1.6-4.6h0l-1.7,4.6h-0.6l-1.9-5.3h0.7
				L540.6,289.4z"/>
			<path d="M550.6,286.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V286.5z M549,289.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C547.8,289.5,548.4,289.8,549,289.8z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {johnsonWashingtonClick()}} style = {johnsonWashington()} id="johnson-group">
		<path id="johnson-county" className="map-path " d="M619,284.3l-0.3-19.8v-1l-32.9,0.5l-16.5-0.2h-0.2v0.2v1.2v3.5l1,47H598l0.3,0.1h1.4
			l4.8,1l-0.6,2.5l0.7,3.3h-0.3l0.7,1.7l0.2,2.8l7.7,1.7c1.6,0,3,0,4.6,0c0.5,0,1.5-0.3,2,0.2c0.2,0.2,0.3,0.8,0.3,1.3h0.2
			c-0.1-5.4-0.3-11.2-0.3-13.7s0-5,0-7.5c0-2.1-0.2-4.5,0-6.6h-0.2L619,284.3z"/>
		<g id="johnson-label" className="county-label" >
			<path d="M575.3,288.4c0.1,0.8,0.6,1.4,1.4,1.4c1,0,1.3-1,1.3-1.9v-5.2h0.7v5.1c0,0.6,0,1.3-0.5,1.9c-0.4,0.5-1.1,0.7-1.7,0.7
				c-1.2,0-1.8-0.9-2-2H575.3z"/>
			<path d="M584.9,287.6c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S584.9,286.2,584.9,287.6z M582.5,285.4
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C584.2,286.6,583.7,285.4,582.5,285.4z"/>
			<path d="M586.9,285.8L586.9,285.8c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V285.8z"/>
			<path d="M592.7,290.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V290.3z"/>
			<path d="M599.7,284.8c1,0,1.8,0.3,1.9,1.5H601c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C597.8,285.2,598.8,284.8,599.7,284.8z"/>
			<path d="M607.8,287.6c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S607.8,286.2,607.8,287.6z M605.3,285.4
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C607.1,286.6,606.6,285.4,605.3,285.4z"/>
			<path d="M609.7,290.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V290.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southEastIowaClick()}} style = {southeastIowa()} id="cedar-group">
		<path id="cedar-county" className="map-path " d="M618.6,250.4L618.6,250.4l0.1,13.1v1l0.3,19.8l0.5,18.2h0.2c0-0.1,0-0.1,0-0.2
			c0.5,0,1,0,1.5,0c2.3-0.1,4.7-0.2,7-0.3c3.2-0.1,6.3-0.2,9.5-0.2c5.1-0.1,24.3-0.4,35.1-0.5v-0.2c-0.8-0.1-1.4-0.4-1.4-1.4
			c-0.1-2.2,0-4.5,0-6.7c-0.2,0-0.5-11.6-0.5-17.4c-0.1,0-0.1,0-0.1,0c0-0.1,0-0.4,0-0.5c0-1.9-0.3-5.8-0.5-5.8
			c0-3.9-0.2-12.2-0.3-19c0-0.3,0-0.7,0-1l-50,0.9L618.6,250.4z"/>
		<g id="cedar-label" className="county-label" >
			<path d="M636.2,271.2c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H636.2z"/>
			<path d="M638.8,274.6c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H638.8z M642.2,274c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H642.2z"/>
			<path d="M647.9,276.3L647.9,276.3c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L647.9,276.3z M646.2,272.2c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C647.9,273.2,647.4,272.2,646.2,272.2z"/>
			<path d="M653.1,273.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V273.3z M651.5,276.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C650.3,276.3,650.9,276.6,651.5,276.6
				z"/>
			<path d="M656,277.1h-0.6V273c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V277.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {easternIowaClick()}} style = {easternIowa()} id="clinton-group">
		<path id="clinton-county" className="map-path " d="M754.6,247.4c-0.2,0-0.3,0-0.5,0c-0.4-1.1,0.4-2.3,0.5-3.5c0.2,0,0.3,0,0.5,0
			c-0.3-0.6,0.3-1.5,1-1.5c-0.2-0.7,0-1.4,0.1-2.1c0.1-0.6,0.3-1.1,0.4-1.7c0.1-0.8-0.1-1.6-0.4-2.3c-0.1-0.1-0.1-0.2-0.2-0.3
			c-0.1,0-0.3,0-0.4,0c0-0.1,0-0.2,0-0.3c0-0.4,0-0.8,0-1.2c-0.2,0-0.3,0-0.5,0c-0.1-0.2-0.1-0.3-0.1-0.5c-0.2,0-0.3,0-0.5-0.1
			c-0.3,0-0.7-0.1-1-0.1c-1,0-2,0.1-3,0.1c-1.7,0.1-3.3,0.1-5,0.2c-3.4,0.1-6.8,0.2-10.2,0.3c-6.7,0.2-13.5,0.4-20.2,0.6
			c-3,0.1-5.9,0.2-8.8,0.3c-4.6,0.1-23.9,0.7-28.2,0.7c-2.1,0-4.3,0-6.4,0c-0.7,0-1.2,0.2-1.5,0.4c0,0-0.1,0-0.1,0.1
			c-0.6,0.7-0.3,2-0.3,3.4c0,1.2,0.1,4.9,0.2,9.4c0,0.3,0,0.6,0,1c0.1,6.8,0.3,15,0.3,19c0.2,0,0.5,3.9,0.5,5.8c0,0.1,0,0.4,0,0.5
			c0,0,0,0,0.1,0c0,0,0-0.4,0-0.5c0,0,0.5,0,1.4,0c3.2,0,10.8,0,11.6,0c0,0.2,1.6,0.5,1.8,0.6c1.6,0.5,2.1,1.7,2.3,3.3
			c0.8,0.2,1.5,0.6,2.2,1.1c0.2-0.3,0.4-0.7,0.6-1c0.1,0.6,0.9,1,1.5,0.8c0.3-0.2,1.2-0.4,1.6-0.5c0.1-0.5,0.2-1.2,0.5-1.3V278l0,0
			c0.1-0.4,0.6-0.4,1-0.5c-0.2-0.7,0.5-1.4,1.3-1.4c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.3,1.5-0.1c0.4,0.2,0.6,0.6,0.8,0.9
			c0.2,0,0.4,0,0.6,0c0.1-0.2,0.2-0.3,0.3-0.4s0.3-0.1,0.5-0.1c0.1-0.2,0.2-0.3,0.3-0.4c0.1,0.1,0.2,0.2,0.3,0.3
			c0.3-0.2,0.5-0.4,0.6-0.8c0.7,0.4,2.1,0.6,2.5,0.5l0,0c0.1-0.2,0.3-0.5,0.5-0.6c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0,0.2-0.1,0.3-0.1
			c0.2-0.2,0.3-0.5,0.6-0.6c0.4-0.2,0.9,0.6,0.5,0.9c0.4,0,0.8,0,1.2,0h0.1c0.1,0,0.1,0,0.2,0c0.5-0.2,1-0.3,1.5-0.4
			c0-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.2,0.1h0.1c0.1-0.1,0.2-0.2,0.4-0.2c0.1,0,0.2,0,0.3,0.1c0.2-0.4,0.3-0.7,0.6-0.9
			c0.2-0.1,0.6,0,1.2,0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.6-0.4,1.5-0.6,2.1-0.1c0,0.3,0.1,0.6,0.1,0.8c1.2-0.4,3.7-1,3.9-1.1
			c0.5-0.2,1-0.3,1.4-0.4c0.2,0.6,0.2,1.3,0.1,1.9c0.3,0.1,0.6,0.4,0.7,0.7c0.4-1,1.8-1.2,2.8-0.7s1.7,1.6,1.8,2.8
			c-0.1,0.2-0.2,0.5-0.3,0.7c0.6,0,1.2-0.3,1.5-0.8c0.1,0.5,0.5,0.9,1,0.9c-0.2,0.2-0.4,0.6-0.4,0.9c0.4,0.5,1-0.7,1.6-0.5
			c0.3,0.1,0.5,0.6,0.8,0.5c0.1-0.3,0-0.7-0.3-0.9c0.5-0.5,1.3-0.1,1.9,0.3c0.3,0.2,0.5,0.4,0.8,0.5c0.1-0.3,0.3-0.6,0.4-0.9
			c0.1-0.1,0.1-0.2,0.2-0.2c0.1-0.1,0.3,0.1,0.4,0.2c0,0,0.3,0.1,0.6,0.2c0.4-0.4,1-0.9,1.2-1.2c0.2,0.1,0.3,0.2,0.5,0.4
			c0.1,0.1,0.4,0,0.4-0.1l0.1,0.1c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.1,0.3-0.1,0.4-0.1c0-0.7,0.7-1.4,1.5-1.5c-0.2-0.2,0.2-0.5,0.4-0.4
			c0-0.2,0-0.3,0-0.5c0.2,0,0.3,0,0.4,0h0.1v-0.1c-0.1-0.5,0.6-0.9,1.1-1.1l0,0c0.5-0.1,0.9-0.3,1.4-0.4c0-0.1,0-0.3,0-0.4
			c0.3,0.1,0.6-0.1,0.8-0.4c0.2-0.2,0.2-0.4,0.2-0.6c0.3,0,0.7,0,1,0c-0.2-0.3,0.1-0.6,0.4-0.8c1.1-0.7,2.3-1.4,3.5-1.1
			c0-0.2,0-0.3,0-0.5c1.2,0,2.4,0,3.5,0c0,0,0,0,0.1,0l0.5-0.5h0.5c0.1-0.1,1-0.6,1-0.5c0.2-0.9,0.1-1.8-0.2-2.6
			c-0.1-0.1-0.1-0.3-0.2-0.4c0.1,0,0.2,0.1,0.3,0.1l0,0c0,0,0,0,0-0.1c-0.5-0.9-0.6-2-0.4-2.9c0.1,0,0.3,0,0.4,0
			c0-0.3,0.1-0.6,0.2-0.9c0.3-1,0.5-2.1,0.3-3.1c0.1,0,0.3,0,0.5,0c-0.3-1,0.5-2,0.9-3.1c0.2-0.5,0.3-1,0.1-1.4c0.2,0,0.3,0,0.5,0
			c0-1.6,0-3.1,0-4.7c0-0.2,0-0.3,0-0.5c0-0.1,0-0.2-0.1-0.3C755.2,248.3,754.4,247.9,754.6,247.4z"/>
		<g id="clinton-label" className="county-label" >
			<path d="M687.1,251.5c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3s0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H687.1z"/>
			<path d="M689.9,257.3h-0.6v-7.6h0.6V257.3z"/>
			<path d="M692.3,250.5h-0.7v-0.8h0.7V250.5z M692.3,252v5.3h-0.6V252H692.3z"/>
			<path d="M694.6,257.3H694v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V257.3z"/>
			<path d="M700.3,252.6h-1.1V252h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V252.6z"/>
			<path d="M707.9,254.6c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C707.1,251.8,707.9,253.2,707.9,254.6z
				 M705.4,252.4c-1.3,0-1.8,1.2-1.8,2.2s0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2S706.7,252.4,705.4,252.4z"/>
			<path d="M709.9,257.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V257.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southEastIowaClick()}} style = {southeastIowa()} id="muscatine-group">
		<path id="muscatine-county" className="map-path " d="M674.8,324.5c0-0.1,0.1-0.3,0.1-0.4c1-0.5,2.2-0.7,3.3-0.5c0-0.1,0-0.3,0-0.5
			c0.3,0,0.7,0,1,0c0-0.2,0-0.3,0-0.5c1.8,0,3.5,0,5.2,0c0-7.3,0.3-14.6,0-21.8c-1.9,0.1-4,0.5-5.9,0.5c-1.3,0-3.3,0-5.7,0
			c-10.7,0.1-29.9,0.4-35.1,0.5c-3.2,0-6.3,0.1-9.5,0.2c-2.3,0.1-4.7,0.2-7,0.3c-0.5,0-1,0-1.5,0c0,0.1,0,0.1,0,0.2
			c-0.2,2.1,0,4.5,0,6.6c0,2.5,0,5,0,7.5c0,2.6,0.1,8.3,0.3,13.7c0,0.5,0,1,0,1.5c0.1,0,0.1,0,0.2,0c0,0,0,8.1,0,9
			c0.1-0.5,22.3,0.1,32.9,0.1c0.3-1.2,0.8-3.2,1.2-4.7c0.3-1.1,0.5-1.9,0.5-1.9c0-0.8,0-1.5,0-2.3c0-0.4,0-0.8,0-1.2
			c0.1,0,0.3,0,0.5,0c-0.1-0.4-0.1-0.9,0-1.3s0.6-0.8,1-0.7c0-0.2,0-0.3,0-0.5c0.5-0.1,1-0.3,1.5-0.4c0.6-0.2,1.2-0.3,1.8-0.5
			c0.5-0.2,1.1-0.4,1.6-0.7c0.4-0.3,1-0.6,1.5-0.4c0-0.2,0-0.3,0-0.5c0.6-0.1,1.1,0.5,1,1c0.5,0,1,0,1.5,0c0,0.2,0,0.3,0,0.5
			c1.2,0.1,2.6,1.1,3.6,0.4l0.1-0.1c0.3-0.2,0.5-0.4,0.8-0.2c0-0.1,0-0.3,0-0.4c0.6-0.1,1.2-0.3,1.8-0.6c0.4-0.2,0.8-0.4,1.1-0.6
			v-0.1c0-0.1,0.1-0.1,0.1-0.2c0.2-0.1,0.4-0.2,0.6-0.2c0.3-0.1,0.6-0.2,0.9-0.4v-0.1C674.4,324.6,674.7,324.4,674.8,324.5z"/>
		<g id="muscatine-label" className="county-label" >
			<path d="M626.6,317v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H626.6z"/>
			<path d="M639.9,311.7h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V311.7z"/>
			<path d="M644,311.5c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C642,311.9,643.1,311.5,644,311.5z"/>
			<path d="M650.8,313.3c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H650.8z"/>
			<path d="M655.8,313.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V313.3z M654.2,316.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C653,316.2,653.5,316.6,654.2,316.6z"
				/>
			<path d="M658.5,312.3h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V312.3z"/>
			<path d="M662.3,310.2h-0.7v-0.8h0.7V310.2z M662.2,311.7v5.3h-0.6v-5.3H662.2z"/>
			<path d="M664.5,317h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V317z"/>
			<path d="M670.1,314.5c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H670.1z M673.5,313.9c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H673.5z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {quadCitiesClick()}} style = {quadCitiesBiState()} id="scott-group">
		<path id="scott-county" className="map-path " d="M736.5,278.9c-0.1-0.3-0.2-0.5-0.4-0.7l-0.1-0.1c0,0.1-0.2,0.3-0.4,0.1
			c-0.2-0.2-0.3-0.3-0.5-0.4c-0.2,0.3-0.8,0.8-1.2,1.2c-0.3-0.1-0.6-0.3-0.6-0.2c-0.1-0.1-0.3-0.3-0.4-0.2c-0.1,0-0.1,0.1-0.2,0.2
			c-0.1,0.3-0.3,0.6-0.4,0.9c-0.3-0.1-0.6-0.3-0.8-0.5c-0.6-0.4-1.4-0.8-1.9-0.3c0.3,0.2,0.4,0.6,0.3,0.9c-0.3,0.1-0.5-0.4-0.8-0.5
			c-0.6-0.2-1.2,1-1.6,0.5c0-0.3,0.2-0.7,0.4-0.9c-0.5,0-0.9-0.4-1-0.9c-0.3,0.5-0.9,0.8-1.5,0.8c0.1-0.2,0.2-0.5,0.3-0.7
			c-0.1-1.2-0.8-2.3-1.8-2.8s-2.4-0.3-2.8,0.7c-0.1-0.3-0.4-0.6-0.7-0.7c0.1-0.6,0.1-1.3-0.1-1.9c-0.4,0.1-0.9,0.2-1.4,0.4
			c-0.2,0.1-2.7,0.7-3.9,1.1c0-0.2-0.1-0.5-0.1-0.8c-0.6-0.5-1.5-0.3-2.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.2c-0.5-0.2-1-0.3-1.2-0.2
			c-0.4,0.2-0.5,0.5-0.6,0.9c-0.1,0-0.2-0.1-0.3-0.1c-0.2,0-0.3,0.1-0.4,0.2h-0.1c-0.1-0.1-0.2-0.1-0.2-0.1c-0.1,0-0.1,0.1-0.2,0.1
			c-0.5,0.1-1,0.2-1.5,0.4c-0.1,0-0.1,0-0.2,0h-0.1c-0.4,0-0.8,0-1.2,0c0.4-0.3-0.1-1.1-0.5-0.9c-0.3,0.1-0.4,0.4-0.6,0.6
			c-0.1,0.1-0.2,0.1-0.3,0.1c0-0.2-0.1-0.3-0.2-0.4c-0.2,0.1-0.4,0.4-0.5,0.6l0,0c-0.4,0.1-1.8-0.1-2.5-0.5c-0.1,0.3-0.3,0.6-0.6,0.8
			c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.1-0.3,0.2-0.3,0.4c-0.2,0-0.3,0-0.5,0.1c-0.1,0.1-0.2,0.3-0.3,0.4c-0.2,0-0.4,0-0.6,0
			c-0.2-0.3-0.5-0.7-0.8-0.9c-0.5-0.2-1.1-0.3-1.5,0.1c-0.1,0.1-0.2,0.2-0.2,0.3c-0.7,0-1.4,0.7-1.3,1.4c-0.4,0.1-0.9,0.2-1,0.5l0,0
			v0.1c-0.3,0.1-0.4,0.8-0.5,1.3c-0.4,0.1-1.3,0.4-1.6,0.5c-0.6,0.2-1.4-0.2-1.5-0.8c-0.2,0.3-0.4,0.7-0.6,1
			c-0.7-0.5-1.4-0.9-2.2-1.1c-0.2-1.6-0.7-2.8-2.3-3.3c-0.2-0.1-1.8-0.4-1.8-0.6c-0.9,0-8.5,0-11.6,0c-0.8,0-1.4,0-1.4,0
			c0,0.1,0,0.5,0,0.5c0,5.8,0.3,17.4,0.5,17.4c0,2.2-0.1,4.5,0,6.7c0,1,0.6,1.3,1.4,1.4v0.2c2.4,0,4.4,0,5.7,0c1.9,0,4-0.4,5.9-0.5
			c0.3,7.3,0,14.6,0,21.8c0,0.1,0,0.1,0,0.2v0.5h0.5h0.5c1.1,0,2.1,0,3.1,0c0.8,0.3,1.7-0.1,2.5-0.3c0.8-0.3,1.7-0.3,2.5-0.2
			c0-0.2,0-0.3,0-0.5c0.5,0,1,0,1.5,0c0-0.2,0-0.3,0-0.5c0.8,0,1.7,0,2.5,0c0-0.2,0-0.3,0-0.5c0.8,0,1.7-0.2,2.2-0.8
			c0.3-0.3,0.4-0.7,0.7-1.1s0.7-0.7,1.1-0.6c0-0.1,0-0.3,0-0.4c0.5-0.3,1-0.5,1.5-0.7c-0.2-0.2,0.1-0.6,0.4-0.7
			c0.3-0.1,0.6-0.3,0.6-0.6c0.2,0,0.3,0,0.5,0c0-0.6,1.2-2.3,1.8-2.9c0.1-0.1,0.2-0.1,0.2-0.1c0-0.2,0-0.3,0-0.5c0.4,0,0.7,0,1.1,0
			c0.3,0,0.6,0,0.9,0c0-0.1,0-0.3,0-0.4c0.5-0.2,1-0.4,1.5-0.6c0-0.1,0-0.3,0-0.4c1-0.3,1.9-0.2,2.9,0c0.5,0.1,1,0.3,1.5,0.5
			c0.9,0.3,2,0.5,2.9,0.3c0.3-0.1,3.2-1,3.2-1c0-0.2,0-0.3,0-0.5c0.5,0.1,1.3-1,1.5-1c0-0.1,0.1-0.2,0.1-0.3c0.1-0.1,0.3-0.2,0.4-0.2
			c0-0.3,0-0.7,0-1c0.2,0,0.3,0,0.5,0c-0.3-0.8,1.3-1.2,1.1-2c0.1,0,0.3,0,0.4,0c0.2-0.5,0.4-1,0.6-1.5c0.1,0,0.3,0,0.4,0
			c0-0.1,0.1-0.3,0.1-0.4c0.5-0.2,0.9-0.4,1.4-0.6c0-0.1,0-0.3,0-0.4c0.2,0,0.3,0,0.5,0s0.3,0,0.5,0c0.1-0.1,0.1-0.3,0.1-0.4l0,0
			c0,0,0,0,0.1,0c1,0,1.9-0.2,2.7-0.6c0.2-0.1,0.5-0.2,0.7-0.4c0.3-0.2,0.7-0.4,1-0.5c0,0.1,0,0.1,0.1,0.1c0.1,0.2,0.2,0.4,0.5,0.3
			c0.4-0.2,0.5-0.7,0.6-1.1c0-0.5-0.1-1-0.1-1.4c0-1.1,0-2.3,0-3.4c-0.2,0-0.3,0-0.5,0c0-1.5,0-3,0-4.5c0.2,0,0.3,0,0.5,0
			c0-0.8,0-1.7,0-2.5c0.2,0,0.3,0,0.5,0l0,0v-0.1c0-0.7,0-1.2,0-1.9c0.3,0.1,0.6-0.2,0.5-0.5c0.2-0.1,0.3-0.1,0.5-0.1
			c-0.2-0.3,0.1-0.6,0.4-0.5c0-0.2,0-0.3,0-0.5c0.2,0,0.3,0,0.5,0c0-0.5,0-1,0-1.5c0.5,0,2.3,0.3,2.8,0c0.3-0.2,0.2-0.3,0-0.3
			c-0.1,0-0.2-0.1-0.2-0.2c-0.2-0.5-0.3-1-0.4-1.5c-0.1-0.4-0.2-0.9-0.3-1.3s-0.1-0.8,0-1.2c-0.1,0-0.2,0-0.4,0h-0.1
			c0-0.2,0-0.3,0-0.5C737.5,279,736.6,278.9,736.5,278.9z"/>
		<g id="scott-label" className="county-label" >
			<path d="M693.1,296.7c-1.2,0-2.2-0.9-2.3-2.1h0.7c0,1.2,0.9,1.5,1.9,1.5c0.9,0,1.8-0.5,1.8-1.5c0-0.8-0.5-1.1-1.2-1.3
				c-1.2-0.4-3.1-0.8-3.1-2.4c0-1.3,1.2-2.1,2.4-2.1c1,0,2.3,0.3,2.5,1.8h-0.7c0-0.9-0.9-1.2-1.7-1.2c-0.8,0-1.8,0.4-1.8,1.3
				c0,2.2,4.3,1.2,4.3,3.8C696,296.2,694.6,296.7,693.1,296.7z"/>
			<path d="M700.8,292.9c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H700.8z"/>
			<path d="M707.3,293.9c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8s0.8-2.8,2.5-2.8S707.3,292.5,707.3,293.9z M704.8,291.7
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C706.6,292.9,706.1,291.7,704.8,291.7z"/>
			<path d="M709.1,291.8H708v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V291.8z"/>
			<path d="M712.1,291.8H711v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V291.8z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {omahaCouncilBluffsClick()}} style = {omahaCouncilBluffs()} id="pottawattamie-group">
		<path id="pottawattamie-county" className="map-path " d="M121,364c0,0.2,42.4,1.5,48.4,1.7c0.9,0,1.7,0.1,2.6,0.1h0.1c0.6,0,1.2,0,1.8,0
			c3,0.1,6.1,0.2,9.1,0.3c0,0.2,8,0.3,14,0.4v-0.2l1-29.2l0.9-21.6v-0.6l2.8,0.1c-0.1-0.1-0.2-0.2-0.3-0.3c-0.9-0.4-22-0.8-22-1
			c-6.1,0-12.2-0.1-18.3-0.3H161c-3.1-0.1-6.3-0.2-9.4-0.2c-1.7,0-3.3-0.1-4.9-0.1c-0.6-0.7-24.5-0.8-29.2-1
			c-0.2-0.3-0.6-0.3-0.9-0.3c-3.4,0-6.7,0-10,0c-0.4,0-0.7,0-1,0s-0.5,0.1-0.7,0.2s-0.5,0.5-0.8,0.7c-0.2,0.1-0.6,0.2-0.9,0.4
			c-0.4,0.2-0.7,0.4-0.7,0.7c0,0.5,0,1,0,1.5c0.2,0,0.3,0,0.5,0c0.2,0.5,0.4,1,0.6,1.5c1-0.4,2.1,0.1,3.1,0.6
			c0.2,0.1,0.4,0.2,0.6,0.3c0.7,0.4,1.4,0.7,2.2,0.7c0.6,0,1.2-0.3,1.8-0.6c0.1,0,0.2-0.1,0.2-0.1c0,0.1,0,0.2,0,0.3
			c0,0.1,0,0.2,0,0.3c0.1,0,0.4,0.1,0.6,0.3c0.4,0.3,0.9,0.6,0.9,0.7c0.2,0,0.3,0,0.5,0c0,0.3,0.3,1,0.5,1c0,0.3-0.5,1.5-0.5,1.8
			c-0.5-0.1-1.1,0.5-1,1c-0.2,0-0.3,0-0.5,0l0,0c0,0.4,0,0.8,0.1,1l0,0c0.2,0,0.3,0,0.5,0c0,0.8,0,1.7,0,2.5c-0.1,0-0.1,0-0.2,0
			s-0.2,0-0.3,0c0,0.1,0,0.6,0.1,1.2c0.1,1.3,0.4,3.3,0.5,3.3c-0.3,0.6-0.5,1.2-0.6,1.9c-0.7,0.2-1.4,0.5-2.2,0.7
			c-0.2,0.1-0.5,0.2-0.7,0.3c0,0.7,0,1.3,0,2c0.1,0,0.3,0,0.4,0c0.3,0.8,0.9,1.4,1.6,1.9c0.3,0.2,0.6,0.4,0.9,0.6c0,0.1,0,0.3,0,0.4
			c0.3,0,0.7,0,1,0c0,0.2,0,0.3,0,0.5c0.4,0,0.8,0,1.2-0.1c0.4-0.1,0.9-0.3,1.2-0.5c0,0.2,0,0.4,0,0.6c0.1,0,0.1,0,0.2,0h0.1
			c0.5,0.1,1.2,0.3,1.2,0.5c0.2,0,1.1,0.7,1,1c0.2,0-0.5,4.3-0.5,4.5c-0.4,0-0.7,0-1,0v0.1c-0.2,0.2-0.7,0.4-1,0.4v0.1
			c0,0.1,0,0.2,0,0.4c-0.3,0-0.7,0-1,0c0,0,0,0,0-0.1c0-0.2,0-0.3,0-0.4c-0.2,0-0.3,0-0.5,0c0-0.4-0.7,0-0.5,0c0.1,0.3-0.5,0.8-0.5,1
			c-0.2,0-0.3,0-0.5,0c0,0.1,0,0.3,0,0.4c0.1,0.8,0.5,2.1,0.5,2.1c0,0.1,0.5,2,1,2.5c-0.1,0-0.2,0-0.3,0c0,0,0,0-0.1,0h-0.1
			c0,0.1,0,0.2,0,0.2c0,0.8-0.1,1.6-0.6,2.3c-0.3,0-0.5,0.3-0.4,0.5c-0.1,0-0.2,0-0.2,0c-0.1,0-0.2,0.1-0.3,0.1
			c-0.5,1.1-0.7,2.3-0.5,3.4c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0,0.3,0,0.7,0,1c0.2,0,0.3,0,0.5,0c0,0.2,0,0.3,0,0.4v0.1
			c0.1,0,0.1,0,0.2,0s0.2,0,0.3,0c0,0.1,0,0.1,0,0.1c0.1,0.7,0.7,0.3,1.4,0.1h0.1c0.7-0.2,1.4-0.3,2.1-0.3c0.1,0,0.4,0,0.7,0
			c0.6,0,1.3,0.1,2,0.1c0.7,0.1,1.2,0.2,1.2,0.3c0,0.2,0,0.3,0,0.5c0.5,0.1,0.7,0.7,0.6,1.1c0,0,0,0,0,0.1c-0.1,0.3-0.4,0.7-0.6,1
			c0,0,0,0-0.1,0.1s-0.1,0.1-0.2,0.2c-0.4,0-0.8,0-1.3,0v-0.1l0,0c-0.5-0.3-1.2-0.2-1.7,0.1c-0.1,0-0.3,0-0.4,0v0.3v0.1l-0.1,0.1
			c-0.1,0.1-0.1,0.2-0.2,0.3C118,364,119.5,364,121,364z"/>
		<g id="pottawattamie-label" className="county-label" >
			<path d="M124.4,342.3v-7.6h1.9c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H124.4z M125.1,338.4h1.7
				c1,0,1.9-0.3,1.9-1.5c0-1.2-0.9-1.5-1.9-1.5h-1.7V338.4z"/>
			<path d="M134.6,339.7c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C133.9,336.9,134.6,338.3,134.6,339.7z
				 M132.2,337.5c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C134,338.7,133.5,337.5,132.2,337.5z"/>
			<path d="M136.4,337.6h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6H137v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V337.6z"/>
			<path d="M139.4,337.6h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6H140v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V337.6z"/>
			<path d="M145.7,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M144.1,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C142.9,341.6,143.4,341.9,144.1,341.9
				z"/>
			<path d="M149.3,341.5L149.3,341.5l1.6-4.5h0.7l1.6,4.4h0l1.5-4.4h0.7l-2,5.3h-0.6l-1.6-4.6h0l-1.7,4.6H149l-1.9-5.3h0.7
				L149.3,341.5z"/>
			<path d="M159.3,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M157.7,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C156.5,341.6,157.1,341.9,157.7,341.9
				z"/>
			<path d="M162,337.6H161v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V337.6z"/>
			<path d="M165,337.6H164v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V337.6z"/>
			<path d="M171.3,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M169.7,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C168.5,341.6,169.1,341.9,169.7,341.9
				z"/>
			<path d="M174.2,337.8L174.2,337.8c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L174.2,337.8z"/>
			<path d="M183.6,335.5h-0.7v-0.8h0.7V335.5z M183.6,337.1v5.3H183v-5.3H183.6z"/>
			<path d="M185.7,339.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H185.7z M189.1,339.3c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H189.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="cass-group">
		<path id="cass-county" className="map-path " d="M200.3,366.4 222.6,366.8 222.6,366.3 248,367 249.7,367 249.9,365.4 250.4,317.9 
			250.4,316.4 250.4,316.3 250.4,315.7 249.3,315.7 249.3,316.3 219.4,315.5 218.1,315.4 216.1,315.4 211.9,315.2 211.7,315.2 
			201.7,315 198.9,314.9 198.9,315.5 198,337.1 197.1,366.2 199.7,366.4z 	"/>
		<g id="cass-label" className="county-label" >
			<path d="M217.8,336.5c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H217.8z"/>
			<path d="M222.9,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H223l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M221.4,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C220.2,341.6,220.7,341.9,221.4,341.9
				z"/>
			<path d="M227,336.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C225,337.3,226,336.9,227,336.9z"/>
			<path d="M232.3,336.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C230.3,337.3,231.3,336.9,232.3,336.9z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="adair-group">
		<path id="adair-county" className="map-path " d="M302.3,318 302.5,318 302.5,316.8 302.5,316.7 300.5,316.6 250.7,315.7 250.4,315.7 
			250.4,316.3 250.4,316.4 250.4,317.9 249.9,365.4 249.7,367 254.8,367.2 257,367.2 257,367.2 258.4,367.3 265.6,367.8 274.6,367.8 
			274.6,367.8 299.7,368.3 301.5,368.3 302.5,318z 	"/>
		<g id="adair-label" className="county-label" >
			<path d="M263.3,342.3l3-7.6h0.8l3,7.6h-0.7l-0.8-2.1h-3.8l-0.8,2.1H263.3z M268.3,339.7l-1.6-4.3l-1.7,4.3H268.3z"/>
			<path d="M274.5,341.6L274.5,341.6c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L274.5,341.6z M272.8,337.5c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C274.5,338.5,274,337.5,272.8,337.5z"/>
			<path d="M279.7,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M278.1,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C277,341.6,277.5,341.9,278.1,341.9z"
				/>
			<path d="M282.7,335.5H282v-0.8h0.7V335.5z M282.7,337.1v5.3H282v-5.3H282.7z"/>
			<path d="M285,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V342.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="madison-group">
		<path id="madison-county" className="map-path " d="M350.9,316.4 350.8,316.4 350.7,316.4 350.7,316.3 350.5,316.3 350.1,316.3 
			350.1,316.4 329,317.4 329,317.3 302.7,316.8 302.5,316.8 302.5,318 302.3,318 302.5,318 301.5,368.3 325,368.7 325,368.3 
			349.7,368.5 350.4,368.5z 	"/>
		<g id="madison-label" className="county-label" >
			<path d="M307.7,342.3v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6H315v-7h0l-2.9,7h-0.7l-2.9-7h0v7H307.7z"/>
			<path d="M320.5,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M318.9,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C317.7,341.6,318.3,341.9,318.9,341.9
				z"/>
			<path d="M326.4,341.6L326.4,341.6c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L326.4,341.6z M324.7,337.5c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C326.4,338.5,325.9,337.5,324.7,337.5z"/>
			<path d="M329.4,335.5h-0.7v-0.8h0.7V335.5z M329.3,337.1v5.3h-0.6v-5.3H329.3z"/>
			<path d="M332.8,336.9c1,0,1.8,0.3,1.9,1.5H334c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C330.8,337.3,331.8,336.9,332.8,336.9z"/>
			<path d="M340.8,339.7c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S340.8,338.3,340.8,339.7z M338.4,337.5
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C340.1,338.7,339.6,337.5,338.4,337.5z"/>
			<path d="M342.8,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V342.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="warren-group">
		<path id="warren-county" className="map-path " d="M401.5,321.6 399.5,321.6 397.5,320.8 394.5,319.3 393,318.3 392.5,317.8 
			391,317.8 378.9,316.9 372,316.9 350.9,316.4 350.4,368.5 375.5,368.7 375.5,369.7 376,369.7 376,368.3 401.5,368.3 402.8,368.3 
			402.8,321.6z 	"/>
		<g id="warren-label" className="county-label" >
			<path d="M363.2,342.3h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L363.2,342.3z"/>
			<path d="M374.1,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M372.5,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C371.3,341.6,371.9,341.9,372.5,341.9
				z"/>
			<path d="M377,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V342.3z"/>
			<path d="M380.4,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V342.3z"/>
			<path d="M383.7,339.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H383.7z M387.1,339.3c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H387.1z"/>
			<path d="M389.8,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V342.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="marion-group">
		<path id="marion-county" className="map-path " d="M453.7,317.4 452.8,317.4 426.4,317.4 404,317.4 404,321.6 402.8,321.6 
			402.8,368.3 427.4,368.3 427.4,368.2 453,368.2 454.2,368.2 453.7,319.1z 	"/>
		<g id="marion-label" className="county-label" >
			<path d="M412.6,342.3v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H412.6z"/>
			<path d="M425.4,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M423.8,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C422.6,341.6,423.1,341.9,423.8,341.9
				z"/>
			<path d="M428.3,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V342.3z"/>
			<path d="M431.8,335.5h-0.7v-0.8h0.7V335.5z M431.8,337.1v5.3h-0.6v-5.3H431.8z"/>
			<path d="M438.1,339.7c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S438.1,338.3,438.1,339.7z M435.6,337.5
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C437.4,338.7,436.9,337.5,435.6,337.5z"/>
			<path d="M440,342.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V342.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="mahaska-group">
		<path id="mahaska-county" className="map-path " d="M505.7,316.7 503.5,316.7 468.2,317 465.5,317.1 452.8,317.2 452.8,317.4 
			453.7,317.4 453.7,319.1 454.2,368.2 478.2,368.2 480.8,368.2 480.8,368.6 504,368.3 506.2,368.3 505.7,319z 	"/>
		<g id="mahaska-label" className="county-label" >
			<path d="M458.7,342.3v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6H466v-7h0l-2.9,7h-0.7l-2.9-7h0v7H458.7z"/>
			<path d="M471.5,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M469.9,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C468.7,341.6,469.3,341.9,469.9,341.9
				z"/>
			<path d="M474.4,337.9L474.4,337.9c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5
				c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-7.6h0.6V337.9z"/>
			<path d="M482.7,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M481.1,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C479.9,341.6,480.4,341.9,481.1,341.9
				z"/>
			<path d="M486.7,336.9c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C484.8,337.3,485.8,336.9,486.7,336.9z"/>
			<path d="M490.9,339.2l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V339.2z"/>
			<path d="M498.5,338.6c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V338.6z M496.9,341.9c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C495.7,341.6,496.3,341.9,496.9,341.9
				z"/>
		</g>
	</g>



	<g className="county-group "onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="keokuk-group">
		<path id="keokuk-county" className="map-path " d="M518,316.5 516.5,316.5 503.5,316.7 503.5,316.7 505.7,316.7 505.7,319 
			506.2,368.3 532.1,368.1 532.1,368.2 554.2,367.8 556,367.8 555.5,354.3 555.5,343.3 556,335.6 555.5,330.8 555.5,320.3 
			555.5,317.6 555.5,316.3 557,316.3 557,316.2z 	"/>
		<g id="keokuk-label" className="county-label" >
			<path d="M513.6,342.3v-7.6h0.7l0,3.4l3.4-3.4h0.9l-3.5,3.4l3.8,4.2h-0.9l-3.6-4l0,4H513.6z"/>
			<path d="M519.9,339.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H519.9z M523.3,339.3c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H523.3z"/>
			<path d="M529.9,339.7c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S529.9,338.3,529.9,339.7z M527.5,337.5
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C529.3,338.7,528.8,337.5,527.5,337.5z"/>
			<path d="M532,339.2l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V339.2z"/>
			<path d="M540.1,337.1h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V337.1z"/>
			<path d="M543.1,339.2l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V339.2z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {johnsonWashingtonClick()}} style = {johnsonWashington()} id="washington-group">
		<path id="washington-county" className="map-path " d="M604.3,322.6h0.3l-0.7-3.3l0.6-2.5l-4.8-1h-1.4l-0.3-0.1h-27.9v0.4l-13.1,0.1h-1.5v1.3
			v2.7v10.5l0.5,4.8l-0.5,7.7v11l0.4,13.5h0.6h23.6l1.4-0.2v-0.3h1.6h7.9l16.6-0.3c-0.1-1.2-0.4-3.4-0.5-3.6
			c-0.1-0.7-0.1-1.4-0.1-2.1c0-2.4,0-4.8,0-7.1l-1.8-27l-0.2-2.8L604.3,322.6z"/>
		<g id="washington-label" className="county-label" >
			<path d="M568.9,337.1h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L568.9,337.1z"/>
			<path d="M579.8,333.3c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V333.3z M578.2,336.6c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C577.1,336.3,577.6,336.6,578.2,336.6
				z"/>
			<path d="M583.9,331.6c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C581.9,332,582.9,331.6,583.9,331.6z"/>
			<path d="M588,332.6L588,332.6c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8
				v3h-0.6v-7.6h0.6V332.6z"/>
			<path d="M592.5,333.9h2.7v0.6h-2.7V333.9z"/>
			<path d="M567.4,342.9h-0.7v-0.8h0.7V342.9z M567.3,344.4v5.3h-0.6v-5.3H567.3z"/>
			<path d="M569.7,349.7H569v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V349.7z"/>
			<path d="M578.6,344.4h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L578.6,344.4z M576.9,344.9c-1.1,0-1.6,1.2-1.6,2.1c0,1,0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C578.6,346,578,344.9,576.9,344.9z"/>
			<path d="M581.2,345h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V345z"/>
			<path d="M588.8,347.1c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S588.8,345.7,588.8,347.1z M586.4,344.9
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C588.2,346.1,587.7,344.9,586.4,344.9z"/>
			<path d="M590.8,349.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V349.7z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southEastIowaClick()}} style = {southeastIowa()} id="louisa-group">
		<path id="louisa-county" className="map-path " d="M653.2,340.9c-10.6,0-32.8-0.6-32.9-0.1c0-0.9,0-9,0-9c-0.1,0-0.1,0-0.2,0c0-0.5,0-1,0-1.5
			h-0.2c0-0.5,0-1.1-0.3-1.3c-0.5-0.5-1.5-0.2-2-0.2c-1.6,0-3,0-4.6,0l-7.7-1.7l1.8,27c0,2.4,0,4.7,0,7.1c0,0.7,0,1.4,0.1,2.1
			c0.1,0.2,0.4,2.5,0.5,3.6h0.3l13.5-0.2v13c3.3,0,27.1-0.4,27.1-0.5c3.8,0,7.6,0,11.4,0c1.9,0,3.9,0,5.8,0c0.2,0,1.7-0.1,2.8-0.1
			c0-0.4,0.1-0.7,0.2-1c0.1-0.3,0.2-0.6,0.4-0.8c-0.2,0-0.4,0-0.6,0c0-0.3,0-0.7,0-1c-0.1,0-0.3,0-0.4,0c-0.2-0.5-0.4-1-0.6-1.5h-0.1
			c-0.2-0.1-0.4-0.3-0.3-0.5c-0.2-0.1-0.3-0.1-0.5-0.1c0-0.3,0-0.6,0-0.8c0-0.1,0-0.1,0-0.2h-0.1c-0.1,0-0.2,0-0.4,0
			c0-0.2,0-0.4-0.1-0.6c-0.1-0.5-0.3-1-0.5-1.4c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2-0.5-0.4-1-0.6-1.5c-0.1,0-0.3,0-0.4,0
			c0-1.1-0.9-2.2-2-2.5c0-0.2,0-0.3,0-0.5c-0.5,0-1,0-1.5,0c0,0.1,0,0.3,0,0.4c-0.3,0-0.6,0.1-0.9,0.1c-0.4,0-0.8,0-1.2-0.1
			c-0.7-0.2-1.4-0.8-1.4-1.5c-0.2,0-0.3,0-0.5,0c0-0.3,0-0.5-0.1-0.8c-0.3-0.9-1.2-1.8-1.5-2.7c-0.1,0-0.2-0.1-0.3-0.1
			c-0.4-0.6-0.8-1.3-1.2-1.9c-0.1-0.1-0.3-0.1-0.4-0.1c0.2-0.3-0.1-0.6-0.4-0.5c-0.1-0.2-0.1-0.3-0.1-0.5c-0.6,0.1-1.1-0.5-1-1
			c-0.2,0-0.3,0-0.5,0c-0.2-0.9-0.8-1.6-1.6-1.9c-0.1,0-0.2-0.1-0.4-0.1c0-0.5,0-1,0-1.5s0-1,0-1.5c0.2,0,0.3-0.1,0.4-0.1
			c1-1.4,1.6-3.1,1.7-4.9c0.1,0,0.3,0,0.4,0c0-0.3,0-0.7,0-1c0.2,0,0.3,0,0.5,0c0-0.2,0-0.3,0-0.5c0.4,0,0.7,0,1.1,0
			c0-0.2,0-0.3,0-0.5c0.2,0,0.3,0,0.5,0c0-0.3,0-0.7,0-1c0.2,0,0.3,0,0.5,0c0-0.1,0-1.9,0-3c0-0.6,0-1,0-1
			C653.8,340.9,653.5,340.9,653.2,340.9z"/>
		<g id="loiusa-label" className="county-label" >
			<path d="M614.4,357.9v-7.6h0.7v7h3.8v0.6H614.4z"/>
			<path d="M624.4,355.2c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8s0.8-2.8,2.5-2.8S624.4,353.8,624.4,355.2z M621.9,353
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C623.7,354.2,623.2,353,621.9,353z"/>
			<path d="M629.3,352.6h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V352.6z"/>
			<path d="M632.3,351.1h-0.7v-0.8h0.7V351.1z M632.2,352.6v5.3h-0.6v-5.3H632.2z"/>
			<path d="M635.7,352.4c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C633.8,352.8,634.8,352.4,635.7,352.4z"/>
			<path d="M642.2,354.1c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9H639c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V354.1z M640.6,357.5c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C639.4,357.1,640,357.5,640.6,357.5z"
				/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="mills-group">
		<path id="mills-county" className="map-path " d="M123.7,401.7c1.2,0.2,2.2,0.5,3.4,0.5c1.4,0,2.9,0,4.3,0c0.7,0,8.6,0,8.6,0
			c0,0.1,1.6,0.3,3.9,0.5c10.5,0.2,22.9,0.6,27.1,0.6v-0.6l0,0l1.9,0.1c0-1.8,0-5.4,0.1-7.3c0.1-1,0.7-19,0.9-19c0-3.6,0-7.2,0-10.8
			c-0.6,0-1.2,0-1.8,0H172c-0.9,0-1.7-0.1-2.6-0.1c-6-0.2-48.4-1.5-48.4-1.7c-1.5,0-3,0-4.5,0c0-0.1,0.1-0.2,0.2-0.3h-0.4
			c0,0.8,0,1.7,0,2.5c0.2,0,0.3,0,0.5,0c0,0.3,0,0.7,0,1c0.2,0,0.4,0,0.5,0.1c0,0.3,0,0.6,0,0.9c0.1,0,0.3,0,0.4,0l0,0v0.1
			c0,0.1,0,0.2,0.1,0.5c-0.1,0.2-0.1,0.5-0.2,0.7c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0,0.3-0.1,0.5-0.3,0.8c-0.2,0.3-0.4,0.7-0.2,1
			c0.1,0.1,0.2,0.2,0.3,0.3c0,0.1,0.1,0.1,0.1,0.2c0.1,0.3,0.1,0.5,0.1,0.8c0,0.9,0,1.9,0,2.8c-0.1,0-0.1,0-0.2,0
			c-0.5,0-0.9,0.6-0.8,1c-0.2-0.1,0.2,4,0.5,4c0,0.2,0.2,0.4,0.4,0.5c0,0,0,0,0.1,0c0,0.6,0,1.3,0,1.9c0,0.4,0,0.7,0,1.1
			c-0.2,0-0.3,0-0.5,0c0,0.3,0,0.7,0,1c-0.2,0-0.3,0-0.5,0c0,0.8,0,1.7,0,2.5c0.2,0,0.3,0,0.5,0c-0.1,0.3,0.2,0.6,0.5,0.5
			c0,0.2,0,0.3,0,0.5c0.2,0,0.3,0,0.5,0s0.4,0,0.5,0c0,0.1,0,0.3,0,0.4c0,0,0,0.1,0.1,0.1s0.2,0,0.3,0c0.2,0,0.4,0,0.6,0
			c0,0.1,0,0.2,0,0.3c0,0.1,0,0.1,0,0.2c0.1,0,0.1-0.1,0.2-0.1c0.2,0,0.4,0.2,0.3,0.5c0.1,0,0.3,0.1,0.4,0.1c0.3,0.6,0.7,1.3,0.6,2
			c-0.1,0.6-0.6,1.2-0.9,1.8c-0.1,0.2-0.2,0.3-0.3,0.5c-0.6,1.3-0.7,2.9-0.1,4.3c0.3,0.7,0.8,1.4,1.3,2l0.1,0.1
			C122.3,401.1,123,401.6,123.7,401.7z"/>
		<g id="mills-label" className="county-label" >
			<path d="M135.9,387.5v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H135.9z"/>
			<path d="M146.4,380.7h-0.7v-0.8h0.7V380.7z M146.4,382.3v5.3h-0.6v-5.3H146.4z"/>
			<path d="M148.7,387.5h-0.6v-7.6h0.6V387.5z"/>
			<path d="M151,387.5h-0.6v-7.6h0.6V387.5z"/>
			<path d="M154.5,382.1c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C152.6,382.5,153.6,382.1,154.5,382.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="montgomery-group">
		<path id="montogomery-county" className="map-path " d="M222.6,366.8l-22.3-0.5h-0.6l-2.7-0.1v0.2c-6-0.1-14-0.2-14-0.4
			c-3-0.1-6.1-0.2-9.1-0.3c0,3.6,0,7.2,0,10.8c-0.2,0-0.8,18-0.9,19c-0.1,1.9-0.1,5.5-0.1,7.3l49.2,1.9l0.5-36.6L222.6,366.8z"/>
		<g id="montgomery-label" className="county-label" >
			<path d="M181.8,381.6V374h1.1l2.9,6.6l2.9-6.6h1v7.6H189v-7h0l-2.9,7h-0.7l-2.9-7h0v7H181.8z"/>
			<path d="M196.1,378.9c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8s0.8-2.8,2.5-2.8C195.3,376.1,196.1,377.6,196.1,378.9z
				 M193.6,376.7c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C195.4,378,194.9,376.7,193.6,376.7z"/>
			<path d="M198,381.6h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V381.6z"/>
			<path d="M203.7,376.9h-1.1v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V376.9z"/>
			<path d="M206.1,378.5h2.7v0.6h-2.7V378.5z"/>
			<path d="M185.3,389h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L185.3,389z M183.5,389.4c-1.1,0-1.6,1.2-1.6,2.1c0,1,0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C185.2,390.5,184.7,389.4,183.5,389.4z"/>
			<path d="M192,391.6c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C191.2,388.8,192,390.2,192,391.6z
				 M189.5,389.4c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C191.3,390.6,190.8,389.4,189.5,389.4z"/>
			<path d="M193.9,389.7L193.9,389.7c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L193.9,389.7z"/>
			<path d="M203.1,391.8c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H203.1z M206.5,391.2c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H206.5z"/>
			<path d="M209.2,394.3h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V394.3z"/>
			<path d="M212.5,389l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H212.5z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="adams-group">
		<path id="adams-county" className="map-path " d="M273.8,380.3 274.3,369.2 274.3,367.8 274.6,367.8 274.6,367.8 265.6,367.8 
			258.4,367.3 257,367.2 257,367.2 254.8,367.2 249.7,367 248,367 222.6,366.3 222.6,366.8 222.6,368.1 222.1,404.7 223.5,404.8 
			223.5,404.8 227.3,404.8 246.6,404.8 273.1,405.7 273.8,394.7z 	"/>
		<g id="adams-label" className="county-label" >
			<path d="M231.6,390.2l3-7.6h0.8l3,7.6h-0.7l-0.8-2.1h-3.8l-0.8,2.1H231.6z M236.6,387.5l-1.6-4.3l-1.7,4.3H236.6z"/>
			<path d="M242.8,389.4L242.8,389.4c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1
				l0,0v-3.1h0.6v6.4c0,0.4,0,0.8,0.1,1.2h-0.7L242.8,389.4z M241.1,385.3c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3
				c1.4,0,1.8-1.1,1.8-2.4C242.8,386.3,242.3,385.3,241.1,385.3z"/>
			<path d="M248,386.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V386.5z M246.5,389.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C245.3,389.4,245.8,389.8,246.5,389.8
				z"/>
			<path d="M250.9,385.7L250.9,385.7c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-3.4c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L250.9,385.7z"/>
			<path d="M261.5,384.7c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C259.5,385.1,260.5,384.7,261.5,384.7z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="union-group">
upperDesMoines		<path id="union-county" className="map-path " d="M325,370.4 325,368.7 301.5,368.3 299.7,368.3 274.6,367.8 274.3,367.8 274.3,369.2 
			273.8,380.3 273.8,394.7 273.1,405.7 274.1,405.7 275.1,405.8 275.1,405.8 324.5,406.7 324.5,388.9z 	"/>
		<g id="union-label" className="county-label" >
			<path d="M286.6,382.6v4.9c0.1,1.4,0.8,2.2,2.1,2.2c1.3,0,2-0.8,2.1-2.2v-4.9h0.7v4.9c0,1.6-0.9,2.8-2.8,2.8
				c-1.8,0-2.8-1.2-2.8-2.8v-4.9H286.6z"/>
			<path d="M294,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V390.2z"/>
			<path d="M300,383.4h-0.7v-0.8h0.7V383.4z M299.9,384.9v5.3h-0.6v-5.3H299.9z"/>
			<path d="M306.2,387.5c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C305.4,384.7,306.2,386.1,306.2,387.5z
				 M303.7,385.3c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C305.5,386.6,305,385.3,303.7,385.3z"/>
			<path d="M308.1,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H311v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V390.2z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="clarke-group">
		<path id="clarke-county" className="map-path " d="M375.5,368.7 350.4,368.5 349.7,368.5 325,368.3 325,368.7 325,370.4 324.5,388.9 
			324.5,406.7 324.6,406.7 324.6,406.5 326.5,406.5 376,407 375.5,369.7z 	"/>
		<g id="clarke-label" className="county-label" >
			<path d="M341.4,384.4c-0.1-0.9-0.9-1.3-1.8-1.3c-2,0-2.5,1.8-2.5,3.3c0,1.6,0.6,3.3,2.5,3.3c0.8,0,1.7-0.4,1.9-1.4h0.7
				c-0.2,1.3-1.4,2-2.6,2c-2.3,0-3.3-1.9-3.3-4c0-2.1,1-4,3.3-4c1.2,0,2.4,0.6,2.5,1.9H341.4z"/>
			<path d="M344.2,390.2h-0.6v-7.6h0.6V390.2z"/>
			<path d="M348.9,386.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2H349l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V386.5z M347.3,389.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C346.2,389.4,346.7,389.8,347.3,389.8
				z"/>
			<path d="M351.8,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V390.2z"/>
			<path d="M355.4,387.1l2.6-2.2h0.8l-2.7,2.3l2.9,3h-0.8l-2.8-2.9v2.9h-0.6v-7.6h0.6V387.1z"/>
			<path d="M360.2,387.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H360.2z M363.6,387.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H363.6z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="lucas-group">
		<path id="lucas-county" className="map-path " d="M427.4,370.7 427.4,368.3 402.8,368.3 401.5,368.3 376,368.3 376,369.7 375.5,369.7 
			376,407 376,407 377.5,407 377.5,407.2 427.1,407.2 427.4,400.8 427.4,380.2z 	"/>
		<g id="lucas-label" className="county-label" >
			<path d="M388.9,390.2v-7.6h0.7v7h3.8v0.6H388.9z"/>
			<path d="M398.1,384.9h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V384.9z"/>
			<path d="M403.7,386.5c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H403.7z"/>
			<path d="M408.6,386.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V386.5z M407.1,389.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C405.9,389.4,406.4,389.8,407.1,389.8
				z"/>
			<path d="M412.7,384.7c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C410.7,385.1,411.8,384.7,412.7,384.7z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="monroe-group">
		<path id="monroe-county" className="map-path " d="M480.8,406.6 480.8,370.3 480.8,368.6 480.8,368.2 478.2,368.2 454.2,368.2 
			453,368.2 427.4,368.2 427.4,368.3 427.4,370.7 427.4,380.2 427.4,400.8 427.4,407.2 428.8,407.2 428.8,407.3 478.4,407.3 
			478.6,407.3 481.3,407.1 481.3,406.6z 	"/>
		<g id="monroe-label" className="county-label" >
			<path d="M436.3,390.2v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H436.3z"/>
			<path d="M450.7,387.5c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C449.9,384.7,450.7,386.1,450.7,387.5z
				 M448.2,385.3c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C450,386.6,449.5,385.3,448.2,385.3z"/>
			<path d="M452.6,390.2H452v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V390.2z"/>
			<path d="M458.5,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V390.2z"/>
			<path d="M465.9,387.5c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C465.1,384.7,465.9,386.1,465.9,387.5z
				 M463.4,385.3c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C465.2,386.6,464.7,385.3,463.4,385.3z"/>
			<path d="M467.6,387.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H467.6z M471,387.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H471z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="wapello-group">
		<path id="wapello-county" className="map-path " d="M530,369.2 530,368.3 532.1,368.2 532.1,368.1 506.2,368.3 504,368.3 480.8,368.6 
			480.8,370.3 480.8,406.6 481.3,406.6 481.3,407.1 485.6,406.8 530.5,406.8 530.5,390.3z 	"/>
		<g id="wapello-label" className="county-label" >
			<path d="M489.5,390.2h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L489.5,390.2z"/>
			<path d="M500.4,386.5c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V386.5z M498.8,389.8c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C497.6,389.4,498.2,389.8,498.8,389.8
				z"/>
			<path d="M503.2,392.2h-0.6v-6.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1h0V392.2z M505,389.8c1.2,0,1.5-1.3,1.5-2.3c0-1-0.4-2.1-1.6-2.1
				c-1.2,0-1.7,1-1.7,2.1C503.2,388.6,503.6,389.8,505,389.8z"/>
			<path d="M508.9,387.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H508.9z M512.3,387.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H512.3z"/>
			<path d="M515,390.2h-0.6v-7.6h0.6V390.2z"/>
			<path d="M517.4,390.2h-0.6v-7.6h0.6V390.2z"/>
			<path d="M523.6,387.5c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S523.6,386.1,523.6,387.5z M521.2,385.3
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C522.9,386.6,522.4,385.3,521.2,385.3z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {rollingHillsClick()}} style = {rollingHills()} id="jefferson-group">
		<path id="jefferson-county" className="map-path " d="M581.5,392.3 581.5,369.5 581.5,367.5 580.1,367.8 556.6,367.8 556,367.8 
			554.2,367.8 532.1,368.2 530,368.3 530,369.2 530.5,390.3 530.5,406.8 532.6,406.8 555,406.7 581.7,406.2 581.5,396.3z 	"/>
		<g id="jefferson-label" className="county-label" >
			<path d="M535.1,388.3c0.1,0.8,0.6,1.4,1.4,1.4c1,0,1.3-1,1.3-1.9v-5.2h0.7v5.1c0,0.6,0,1.3-0.5,1.9c-0.4,0.5-1.1,0.7-1.7,0.7
				c-1.2,0-1.8-0.9-2-2H535.1z"/>
			<path d="M540.5,387.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H540.5z M543.9,387.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H543.9z"/>
			<path d="M546.4,390.2v-4.7h-1.1v-0.6h1.1v-1.1c0-0.9,0.4-1.3,1.3-1.3c0.2,0,0.4,0.1,0.6,0.1v0.5c-0.1,0-0.3,0-0.4,0
				c-0.9,0-0.9,0.4-0.9,1.2v0.7h1.2v0.6h-1.2v4.7H546.4z"/>
			<path d="M549.5,390.2v-4.7h-1.1v-0.6h1.1v-1.1c0-0.9,0.4-1.3,1.3-1.3c0.2,0,0.4,0.1,0.6,0.1v0.5c-0.1,0-0.3,0-0.4,0
				c-0.9,0-0.9,0.4-0.9,1.2v0.7h1.2v0.6h-1.2v4.7H549.5z"/>
			<path d="M552.5,387.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H552.5z M555.9,387.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H555.9z"/>
			<path d="M558.6,390.2H558v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V390.2z"/>
			<path d="M563.3,384.7c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C561.3,385.1,562.3,384.7,563.3,384.7z"/>
			<path d="M571.3,387.5c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S571.3,386.1,571.3,387.5z M568.9,385.3
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C570.6,386.6,570.1,385.3,568.9,385.3z"/>
			<path d="M573.3,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V390.2z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southEastIowaClick()}} style = {southeastIowa()} id="henry-group">
		<path id="henry-county" className="map-path " d="M583.1,367.3h-1.6v0.3v2v22.7v4l0.2,9.9v1l0.2,11.6v2.2h1.4h7.6l30-0.5c0-0.1,0-0.1,0-0.2
			c0,0.1-0.1-0.1-0.1-0.4c0.3,0.2,0.7,0.4,1,0.4l-0.5-19.8v-18.7v-2v-13l-13.5,0.2h-0.3l-16.6,0.3H583.1z"/>
		<g id="henry-label" className="county-label" >
			<path d="M588,390.2v-7.6h0.7v3.3h4.2v-3.3h0.7v7.6h-0.7v-3.6h-4.2v3.6H588z"/>
			<path d="M595.8,387.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H595.8z M599.2,387.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H599.2z"/>
			<path d="M601.9,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V390.2z"/>
			<path d="M607.8,390.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V390.2z"/>
			<path d="M611.1,384.9l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H611.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southEastIowaClick()}} style = {southeastIowa()} id="desmoines-group">
		<path id="desmoines-county" className="map-path " d="M665.7,379.3c-1.9,0-3.9,0-5.8,0c-3.8,0-7.6,0-11.4,0c0,0.1-23.8,0.4-27.1,0.5v2v18.7
			l0.5,19.8c0.1,0,0.2,0,0.3,0c0,0.2,0,0.3,0,0.5c0.2,0,0.3,0,0.5,0c0,0.2,0,0.3,0.1,0.5c0.4,0,0.8,0,1.2,0l0,0c0.4,0,0.8,0,1.2,0
			c0,0.3,0,0.7,0,1c0.3,0,0.5,0,0.8,0v0.1c0.9,0.1,2,0.4,2.2,0.4c0,0.2,0,0.3,0,0.5c0.5-0.1,2.2,0.9,2.8,0.9s1.3,0.5,1.2,1.1
			c0.2,0,0.4,0,0.5,0c-0.1,0.4-0.2,0.9,0,1.3c0,0.1,0.1,0.1,0.1,0.2c0.2,0,0.5,0,0.7,0c0,0.2,0,0.3,0,0.5c0,0,0,0,0.1,0h0.1
			c0-0.2,0-0.3,0-0.5c0.5,0,1,0,1.5,0c0,0.2,0,0.3,0,0.5c0.7,0,1.3,0,2,0c0,0.2,0,0.3,0,0.5c0.2,0,0.3,0,0.5,0c0.3,1.1,1.4,2,2.5,2
			c0,0.2,0,0.3,0,0.5c0.2,0,0.3,0,0.5,0c0,0.2,0,0.3,0,0.5c0.2,0,0.3,0,0.5,0c-0.1,0.3,0.2,0.6,0.5,0.5c0,0.7,0.6,1.2,1.1,1.1
			s1.1,0.4,0.9,0.8c0.5,0.2,1.7-0.9,1.5-1.4c0.6,0,1.3,0,1.9,0c0.5,0.8,1.5,2.1,1.6,2c0.2,0,0.3,0,0.5,0c0,0.1,0.6,0.6,1.2,0.9
			l-0.2-0.9v-0.5v-1l0.5-2.4v-0.5v-0.5h0.4h1.4c0.7-0.5,0.9-1.9,1.1-2.7c0.2-0.6,0.3-1.1,0.4-1.7c0.1-0.9-0.1-1.9-0.4-2.7
			c-0.1-0.2-0.2-0.5-0.4-0.7s-0.3-0.5-0.2-0.8c0.1-0.2,0.3-0.3,0.4-0.4c0.3-0.3,0.1-0.7,0.1-1.1c0-0.9,1-1.4,1.6-2
			c0.7-0.8,0.9-1.9,1.8-2.4c0.1-0.1,0.3-0.2,0.5-0.3c0.1,0,0.2-0.1,0.3-0.1c0.3-0.2,0.4-0.5,0.3-0.8c0.1,0,0.3,0,0.5,0
			c0-0.3,0-0.6,0-0.9c0.1-0.7,0.4-1.3,0.8-1.8c0.2-0.2,0.7-0.6,1.2-0.9s0.9-0.7,0.9-1v-0.1c0-0.1,0.1-0.2,0.1-0.3
			c0.1-0.1,0.2-0.1,0.3-0.1h0.1c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.5,0.4-1,0.4-1.6c0.2,0,0.3,0,0.5,0c-0.1-0.5,0.5-1.1,1-1
			c0-0.1,0.1-0.3,0.1-0.4c0.4-0.3,0.8-0.5,1.1-0.7c0.5-0.3,1.1-0.6,1.7-0.8c0.5-0.2,1.1-0.4,1.4-0.9c0.1-0.2,0.2-0.4,0.2-0.6
			c0.2-0.9,0.4-1.7,0.6-2.5c0.4-1.3,0.7-2.8,0.4-4.2c-0.1-0.6-0.4-1.2-0.4-1.7c0-0.4,0-0.7,0.1-1.1c0.2-0.5,0.6-0.8,0.8-1.2
			c0.4-0.9-0.1-2.2,0.7-2.8c-0.3-0.1-0.5-0.4-0.5-0.8s0.1-0.7,0.2-1c0.4-1.1,0.4-2.3,0.1-3.5c-0.3-1.3-0.2-2.5-0.8-3.7
			c0-0.1-0.3-0.1-0.8-0.1c-0.1,0-0.3,0-0.5,0C667.4,379.2,666,379.3,665.7,379.3z"/>
		<g id="desmoines-label" className="county-label" >
			<path d="M627.9,384.6c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8h-2.1v-7.6H627.9z M628.1,391.6c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H628.1z"/>
			<path d="M633.7,389.7c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H633.7z M637.1,389.1c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H637.1z"/>
			<path d="M641,386.7c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C639,387.1,640,386.7,641,386.7z"/>
			<path d="M625.9,404.8v-7.6h1.1l2.9,6.6l2.9-6.6h1v7.6h-0.7v-7h0l-2.9,7h-0.7l-2.9-7h0v7H625.9z"/>
			<path d="M640.2,402.2c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S640.2,400.8,640.2,402.2z M637.8,400
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2s1.8-1.2,1.8-2.2C639.6,401.2,639.1,400,637.8,400z"/>
			<path d="M642.3,398h-0.7v-0.8h0.7V398z M642.2,399.6v5.3h-0.6v-5.3H642.2z"/>
			<path d="M644.5,404.8h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V404.8z"/>
			<path d="M650.1,402.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H650.1z M653.5,401.8c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H653.5z"/>
			<path d="M657.4,399.4c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C655.5,399.8,656.5,399.4,657.4,399.4z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="fremont-group">
		<path id="fremont-county" className="map-path " d="M172.9,402.8l-1.9-0.1l0,0v0.6c-4.2-0.1-16.6-0.4-27.1-0.6c-2.3-0.2-3.9-0.4-3.9-0.5
			c0,0-7.9,0-8.6,0c-1.4,0-2.9,0-4.3,0c-1.2,0-2.2-0.3-3.4-0.5c-0.7-0.1-1.4-0.5-1.9-1.1l0.9,1.3c0,0.5,1.2,1.4,0.6,1.9
			c-0.3,0.2-0.5,0.4-0.8,0.6c-0.6,1.1-1.9,1.7-3.1,1.4c0,0.1,0,0.3,0,0.5c-0.2,0-0.3,0-0.5,0c0.1,0.2,0,0.3-0.1,0.4s-0.2,0.1-0.4,0.1
			c0,0.7,0,1.3,0,2c0.1,0,0.2,0,0.3,0c0.1,0,0.1,0,0.2,0c0,0.3,0,0.7,0,1l0,0l0,0c0.2,0,0.3,0,0.5,0c-0.1,0.8,0.1,1.7,0.6,2.4
			c-0.2,0.1-0.4,0.1-0.6,0.1c0,0.5,0,1,0,1.5h-0.1c-0.1,0-0.2,0-0.4,0c0,0.3,0,0.7,0,1c-0.2,0-0.3,0-0.5,0c0,0.3,0,0.7,0,1
			c0.2,0,0.3,0,0.5,0c0.6,1.2,1,2.5,1.1,3.8c-0.3-0.1-0.5,0.3-0.7,0.6c-0.2,0.2-0.4,0.5-0.6,0.5c-0.1,0-0.1,0-0.2-0.1
			c0,0.1,0,0.3,0,0.5c-0.2,0-0.3,0-0.5,0c0,0.1,0,0.2,0,0.3v0.1c-0.2,0.1-0.4,0.1-0.6,0.2c-0.7,0.2-1.3,0.4-1.9,0.5
			c0.1,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1c-0.2,0.3-0.4,0.6-0.6,0.9c-0.1,0-0.3,0-0.4,0c-0.2,1-0.5,2-0.9,3
			c0.3,0.7,0.5,1.4,0.8,2.1c0.1,0.1,0.1,0.4,0.3,0.5c0.2,0.2,0.4,0.2,0.6,0.3c0.2,0.1,0.3,0.1,0.5,0.2c0.4,0.1,0.8,0.3,1.2,0.4
			c0.2,0.4,0.4,0.7,0.6,1c0.2,0.1,0.3,0.1,0.4,0.1c0.2,0.7,0.3,1.3,0.4,2c0.1,0.3,0,0.6,0,0.9c-0.1,0.3-0.1,0.5-0.3,0.9
			c0.7,0.5,1.4,0.9,2.1,1.4c0.6,0.6,1.6,0.6,2.5,0.7c0.8,0.1,1.9,0.5,1.9,1.4c0.2,0,0.3,0,0.5,0c0,0.4,0,0.7,0,1
			c0.4,0.2,0.7,0.4,1,0.6c0.2,0.8,0,1.5,0,2.3c0,0.1,0,0.2,0,0.3c0.1,0.9,0.6,1.9,1.5,1.9c0.2,0.3,0.4,0.6,0.6,0.9h0.1
			c0.1,0,0.2,0,0.3,0c0,0.2,0,0.4,0,0.6c0,0.5,0,0.9,0,1.4c-0.3-0.1-0.6,0.2-0.5,0.5c-0.9-0.2-0.9,1-1.5,1h1c0.2,0,1.6,0.1,3.7,0.2
			c4.9,0.2,13.8,0.7,20.6,1c4.6,0.2,8.3,0.4,9.2,0.4c0.3,0.6,0.7,1.3,1,2c0.1,0.2,0.2,0.4,0.3,0.5c0.8,0,1.6,0,2.3,0
			c1.1,0,2.2,0,3.3,0c0.9,0,1.7,0,2.6,0h0.5v-0.5c0-0.9,0.1-2.5,0.2-4.5c0.3-6.7,1.1-17.5,0.9-17.5c-0.5-0.3-0.1-3.7-0.1-4.4
			c0-0.5,0-1,0-1.5c0.1-3.3,0.6-16.8,0.7-20.3c0-0.1,0-0.2,0-0.3c0.3,0,0.5,0,0.5,0S172.9,403.5,172.9,402.8z"/>
		<g id="fremont-label" className="county-label" >
			<path d="M126.7,428.4v-7.6h4.3v0.6h-3.6v2.7h3.5v0.6h-3.5v3.7H126.7z"/>
			<path d="M132.4,428.4h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V428.4z"/>
			<path d="M135.7,425.9c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H135.7z M139.1,425.4c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H139.1z"/>
			<path d="M141.8,423.9L141.8,423.9c0.4-0.6,1-0.9,1.7-0.9c0.8,0,1.5,0.5,1.7,1.2c0.4-0.6,1-1.2,1.8-1.2c1.7,0,1.9,1.5,1.9,2.1v3.3
				h-0.6V425c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6V425c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8v3h-0.6v-4.1
				c0-0.4,0-0.8-0.1-1.2h0.7L141.8,423.9z"/>
			<path d="M155.1,425.8c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8s0.8-2.8,2.5-2.8S155.1,424.4,155.1,425.8z M152.7,423.6
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C154.4,424.8,153.9,423.6,152.7,423.6z"/>
			<path d="M157.1,428.4h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H160V425
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V428.4z"/>
			<path d="M162.8,423.7h-1.1v-0.6h1.1V422l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V423.7z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {balanceOfCountiesClick()}} style = {balanceOfCounties()} id="page-group">
		<path id="page-county" className="map-path " d="M223.3,431.1H223v-0.5h-1.7l0.5-25.1v-0.7h0.3v-0.1l-49.2-1.9c0,0.6,0,1,0,1s-0.2,0-0.5,0
			c0,0.1,0,0.2,0,0.3c-0.1,3.5-0.6,17-0.7,20.3c0,0.5,0,1,0,1.5c0,0.7-0.4,4.1,0.1,4.4c0.2,0.1-0.6,10.9-0.9,17.5l0.1,2.9l6.6,0.3
			l15.5,0.7l24.1,0.8l1.6,0.1l3.5,0.1L223.3,431.1z"/>
		<g id="page-label" className="county-label" >
			<path d="M186.7,429.7v-7.6h1.9c1.5,0,3.1,0.3,3.1,2.2c0,1.8-1.6,2.2-3.1,2.2h-1.2v3.3H186.7z M187.4,425.8h1.7
				c1,0,1.9-0.3,1.9-1.5c0-1.2-0.9-1.5-1.9-1.5h-1.7V425.8z"/>
			<path d="M195.7,426c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V426z M194.1,429.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C192.9,429,193.4,429.3,194.1,429.3z"/>
			<path d="M201.6,424.5h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L201.6,424.5z M199.9,424.9c-1.1,0-1.6,1.2-1.6,2.1s0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C201.6,426,201,424.9,199.9,424.9z"/>
			<path d="M204.2,427.2c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H204.2z M207.6,426.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H207.6z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="taylor-group">
		<path id="taylor-county" className="map-path " d="M272.6,455.8 272.6,440.3 273.1,416.3 273.1,407.5 273,407.5 273.1,406.5 
			273.1,405.9 273.1,405.8 273.1,405.8 273.1,405.7 246.6,404.8 227.3,404.8 223.5,404.8 223.5,404.8 222.1,404.7 222.1,404.8 
			221.8,404.8 221.8,405.4 221.3,430.6 223,430.6 223,431.1 223.3,431.1 222.3,452.7 222.3,452.8 222.3,453.2 225.8,453.2 
			274.6,456.2 274.6,456 274.6,455.8z 	"/>
		<g id="taylor-label" className="county-label" >
			<path d="M235.8,422.8h-2.5v-0.6h5.6v0.6h-2.4l0,7h-0.7L235.8,422.8z"/>
			<path d="M241.9,426c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V426z M240.3,429.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C239.1,429,239.6,429.3,240.3,429.3z"/>
			<path d="M243.9,424.5l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H243.9z"/>
			<path d="M249.9,429.7h-0.6v-7.6h0.6V429.7z"/>
			<path d="M256.1,427.1c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C255.3,424.3,256.1,425.7,256.1,427.1z
				 M253.6,424.9c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C255.4,426.1,254.9,424.9,253.6,424.9z"/>
			<path d="M258,429.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6c-0.1,0-0.3,0-0.4,0
				c-0.9,0-1.4,0.7-1.5,1.7V429.7z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="ringgold-group">
		<path id="ringgold-county" className="map-path " d="M324.1,454.8 324.1,423.3 324.6,408.4 324.6,408.3 324.5,408.3 324.5,406.7 
			275.1,405.8 275.1,405.8 274.1,405.7 273.1,405.7 273.1,405.8 273.1,405.8 273.1,405.9 273.1,406.5 273,407.5 273.1,407.5 
			273.1,416.3 272.6,440.3 272.6,455.8 274.6,455.8 302.5,456.1 312.1,456.3 324.1,455.8 324.1,455.5z 	"/>
		<g id="ringgold-label" className="county-label" >
			<path d="M280.1,429.7h-0.7v-7.6h2.5c0.7,0,1.2,0,1.8,0.4c0.5,0.3,0.8,0.9,0.8,1.6c0,0.8-0.6,1.4-1.5,1.6v0c1,0.2,1.2,0.8,1.3,1.7
				c0.1,1.2,0.1,1.8,0.4,2.3h-0.8c-0.2-0.5-0.2-1-0.3-1.6c-0.2-1.7-0.3-2-1.6-2h-1.9V429.7z M281.6,425.5c1,0,2.2-0.1,2.2-1.4
				c0-1.5-1.4-1.4-2.1-1.4h-1.5v2.7H281.6z"/>
			<path d="M286.9,422.9h-0.7v-0.8h0.7V422.9z M286.9,424.5v5.3h-0.6v-5.3H286.9z"/>
			<path d="M289.2,429.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V429.7z"/>
			<path d="M298.1,424.5h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L298.1,424.5z M296.4,424.9c-1.1,0-1.6,1.2-1.6,2.1s0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C298.1,426,297.5,424.9,296.4,424.9z"/>
			<path d="M304,424.5h0.7c0,0.4-0.1,0.8-0.1,1.2v3.2c0,1.1,0.1,2.2-1.1,2.7c-0.4,0.2-0.7,0.2-1.2,0.2c-1,0-2.1-0.3-2.1-1.4h0.7
				c0.1,0.6,0.8,0.8,1.5,0.8c0.8,0,1.6-0.6,1.6-1.5v-1h0c-0.3,0.6-1,1-1.7,1c-1.6,0-2.3-1.2-2.3-2.7c0-1.4,0.6-2.8,2.3-2.8
				c0.8,0,1.3,0.4,1.7,1l0,0L304,424.5z M302.2,424.9c-1.1,0-1.6,1.2-1.6,2.1s0.5,2.1,1.7,2.1c1.2,0,1.7-1.1,1.7-2.2
				C303.9,426,303.4,424.9,302.2,424.9z"/>
			<path d="M310.7,427.1c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S310.7,425.7,310.7,427.1z M308.2,424.9
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C310,426.1,309.5,424.9,308.2,424.9z"/>
			<path d="M312.7,429.7H312v-7.6h0.6V429.7z"/>
			<path d="M318,429L318,429c-0.5,0.6-1.1,0.9-1.8,0.9c-1.6,0-2.2-1.5-2.2-2.8c0-1.4,0.6-2.8,2.2-2.8c0.7,0,1.4,0.3,1.8,1l0,0v-3.1
				h0.6v6.4c0,0.4,0,0.8,0.1,1.2H318L318,429z M316.3,424.9c-1.2,0-1.6,1.1-1.6,2.1c0,1,0.3,2.3,1.5,2.3c1.4,0,1.8-1.1,1.8-2.4
				C318,425.9,317.5,424.9,316.3,424.9z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {southCentralWestClick()}} style = {southCentralWest()} id="decatur-group">
		<path id="decatur-county" className="map-path " d="M375.5,449.4 375.5,449.3 376,408.8 376,408 376,407 326.5,406.5 324.6,406.5 
			324.6,406.7 324.5,406.7 324.5,408.3 324.6,408.3 324.6,408.4 324.1,423.3 324.1,454.8 324.1,454.8 358.1,454.8 375.5,454.8z 	"/>
		<g id="decatur-label" className="county-label" >
			<path d="M334.8,422.1c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8h-2.1v-7.6H334.8z M334.9,429.1c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H334.9z"/>
			<path d="M340.6,427.2c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H340.6z M344,426.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H344z"/>
			<path d="M349.4,426.1c-0.1-0.8-0.6-1.2-1.4-1.2c-1,0-1.6,1-1.6,2.2c0,1.2,0.6,2.2,1.6,2.2c0.8,0,1.4-0.5,1.4-1.2h0.7
				c-0.2,1.2-0.9,1.8-2.1,1.8c-1.6,0-2.3-1.4-2.3-2.8c0-1.4,0.8-2.8,2.4-2.8c1.1,0,2,0.7,2,1.8H349.4z"/>
			<path d="M354.3,426c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V426z M352.8,429.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C351.6,429,352.1,429.3,352.8,429.3z"/>
			<path d="M357.1,425H356v-0.6h1.1v-1.1l0.6-0.3v1.4h1.2v0.6h-1.2v3.5c0,0.5,0.2,0.7,0.7,0.7c0.2,0,0.4,0,0.5-0.1v0.5
				c-0.2,0.1-0.4,0.1-0.6,0.1c-1.3,0-1.3-0.9-1.3-1.6V425z"/>
			<path d="M363.4,424.5h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V424.5z"/>
			<path d="M366.4,429.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V429.7z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {rollingHillsClick()}} style = {rollingHills()} id="wayne-group">
		<path id="wayne-county" className="map-path " d="M427,439.3 427,428.3 427.4,416.3 427.4,408.6 427,408.6 427.1,407.8 427.1,407.2 
			377.5,407.2 377.5,407 376,407 376,407 376,408 376,408.8 375.5,449.3 375.5,449.4 375.5,454.8 375.5,456.2 428.8,455.7 
			428.8,455.6 427,455.6z 	"/>
		<g id="wayne-label" className="county-label" >
			<path d="M388.2,429.7h-1l-2-7.6h0.7l1.8,6.9h0l2.2-6.9h0.8l2.3,6.9h0l1.8-6.9h0.7l-2,7.6h-0.9l-2.2-6.9h0L388.2,429.7z"/>
			<path d="M399.1,426c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V426z M397.5,429.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C396.4,429,396.9,429.3,397.5,429.3z"/>
			<path d="M401.2,424.5l1.8,4.4l1.8-4.4h0.7l-2.9,7.3h-0.7l0.8-2l-2.2-5.3H401.2z"/>
			<path d="M407.1,429.7h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3H410v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V429.7z"/>
			<path d="M412.7,427.2c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H412.7z M416.1,426.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H416.1z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {rollingHillsClick()}} style = {rollingHills()} id="appanoose-group">
		<path id="appanoose-county" className="map-path " d="M480.9,453 480.9,408.6 480.9,408.2 481.3,408.2 481.3,407.1 478.6,407.3 
			478.4,407.3 428.8,407.3 428.8,407.2 427.4,407.2 427.4,400.8 427.1,407.2 427.1,407.8 427,408.6 427.4,408.6 427.4,416.3 
			427,428.3 427,439.3 427,455.6 428.8,455.6 431,455.6 464.1,453.9 480.9,453.1z 	"/>
		<g id="appanoose-label" className="county-label" >
			<path d="M438,423.2l3-7.6h0.8l3,7.6h-0.7l-0.8-2.1h-3.8l-0.8,2.1H438z M443.1,420.5l-1.6-4.3l-1.7,4.3H443.1z"/>
			<path d="M446.3,425.2h-0.6v-6.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1h0V425.2z M448.1,422.7c1.2,0,1.5-1.3,1.5-2.3c0-1-0.4-2.1-1.6-2.1
				c-1.2,0-1.7,1-1.7,2.1C446.3,421.6,446.8,422.7,448.1,422.7z"/>
			<path d="M452.2,425.2h-0.6v-6.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.6,1.1-1,1.8-1c1.6,0,2.2,1.4,2.2,2.8
				c0,1.3-0.6,2.8-2.1,2.8c-0.8,0-1.4-0.3-1.8-1h0V425.2z M454,422.7c1.2,0,1.5-1.3,1.5-2.3c0-1-0.4-2.1-1.6-2.1
				c-1.2,0-1.7,1-1.7,2.1C452.2,421.6,452.6,422.7,454,422.7z"/>
			<path d="M460.5,419.4c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V419.4z M459,422.7c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C457.8,422.4,458.3,422.7,459,422.7z"/>
			<path d="M462.1,420h2.7v0.6h-2.7V420z"/>
			<path d="M439.4,435.8h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V435.8z"/>
			<path d="M449.2,433.2c0,1.4-0.8,2.8-2.5,2.8c-1.7,0-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8C448.4,430.4,449.2,431.8,449.2,433.2z
				 M446.7,430.9c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C448.5,432.2,448,430.9,446.7,430.9z"/>
			<path d="M455.1,433.2c0,1.4-0.8,2.8-2.5,2.8s-2.5-1.4-2.5-2.8c0-1.4,0.8-2.8,2.5-2.8S455.1,431.8,455.1,433.2z M452.6,430.9
				c-1.3,0-1.8,1.2-1.8,2.2c0,1,0.5,2.2,1.8,2.2c1.3,0,1.8-1.2,1.8-2.2C454.4,432.2,453.9,430.9,452.6,430.9z"/>
			<path d="M458.1,430.4c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C456.2,430.7,457.2,430.4,458.1,430.4z"/>
			<path d="M462,433.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H462z M465.4,432.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H465.4z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {rollingHillsClick()}} style = {rollingHills()} id="davis-group">
		<path id="davis-county" className="map-path " d="M530.5,408.2 530.5,408.2 530.5,407.9 530.5,406.8 485.6,406.8 481.3,407.1 
			481.3,408.2 480.9,408.2 480.9,408.6 480.9,453 523.2,451.8 531,451.6 531,451.4z 	"/>
		<g id="davis-label" className="county-label" >
			<path d="M495,422.1c2.5,0,3.9,1.3,3.9,3.8c0,2.5-1.4,3.8-3.9,3.8H493v-7.6H495z M495.2,429.1c2.1,0,3-1.3,3-3.2
				c0-2.2-1.3-3.2-3.5-3.2h-1.1v6.3H495.2z"/>
			<path d="M503.5,426c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V426z M501.9,429.3c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C500.7,429,501.2,429.3,501.9,429.3z"/>
			<path d="M505.5,424.5l1.8,4.4l1.8-4.4h0.7l-2.1,5.3H507l-2.2-5.3H505.5z"/>
			<path d="M511.5,422.9h-0.7v-0.8h0.7V422.9z M511.5,424.5v5.3h-0.6v-5.3H511.5z"/>
			<path d="M514.9,424.3c1,0,1.8,0.3,1.9,1.5h-0.7c-0.1-0.7-0.7-0.9-1.3-0.9c-0.6,0-1.2,0.2-1.2,0.9c0,0.8,1,0.7,2.5,1.2
				c0.5,0.2,0.9,0.7,0.9,1.2c0,1.2-1.1,1.7-2.2,1.7c-0.9,0-2-0.4-2-1.6h0.7c0.1,0.8,0.7,1,1.5,1c0.7,0,1.4-0.3,1.4-1.1
				c0-0.8-0.8-0.9-1.7-1.1c-0.8-0.2-1.7-0.4-1.7-1.4C513,424.7,514,424.3,514.9,424.3z"/>
		</g>
	</g>



	<g className="county-group " onClick = {() => {rollingHillsClick()}} style = {rollingHills()} id="vanburen-group">
		<path id="vanburen-county" className="map-path " d="M582.4,447.7c0-1.5,0-3,0-4.5c0-3,0-9.7-0.1-9.9c-0.1-0.2-0.4-10.2-0.4-14.5
			c0,0,0,0,0.1,0l-0.2-11.6v-1l-26.7,0.5l-22.4,0.1h-2.1v1.1v0.3l0,0l0.5,43.2l51.1-2.9h0.3C582.4,448.1,582.4,447.9,582.4,447.7z"/>
		<g id="vanburen-label" className="county-label" >
			<path d="M545.4,422.5L545.4,422.5l2.4-6.9h0.7l-2.8,7.6H545l-2.8-7.6h0.7L545.4,422.5z"/>
			<path d="M551.8,419.4c-0.1-0.9-0.5-1.1-1.3-1.1c-0.7,0-1.2,0.2-1.3,0.9h-0.7c0.2-1.1,1-1.5,2-1.5c1.2,0,1.9,0.5,1.9,1.8v2.5
				c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8h0l0,0.1c-0.2,0.4-0.9,0.9-1.7,0.9c-1,0-1.8-0.6-1.8-1.6c0-0.7,0.4-1.3,1.1-1.5
				c0.7-0.3,1.6-0.2,2.4-0.2V419.4z M550.2,422.7c1.4,0,1.6-1.1,1.6-2.2c-0.9,0-2.8-0.1-2.8,1.2C549.1,422.4,549.6,422.7,550.2,422.7
				z"/>
			<path d="M554.7,423.2h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V423.2z"/>
			<path d="M543.2,435.8v-7.6l2.7,0c1.1,0,2.1,0.7,2.1,1.9c0,0.8-0.6,1.5-1.4,1.7v0c1,0.2,1.7,0.8,1.7,1.9c0,1-0.6,2-2.3,2H543.2z
				 M545.5,431.6c0.9,0,1.8-0.3,1.8-1.4c0-1.1-0.9-1.3-1.8-1.3h-1.6v2.7H545.5z M543.9,435.2h1.7c1.3,0,2.1-0.3,2.1-1.5
				c0-1.3-1-1.5-2.5-1.5h-1.3V435.2z"/>
			<path d="M553.5,430.5h0.6v4.1c0,0.4,0,0.8,0.1,1.2h-0.7l0-0.8l0,0c-0.4,0.7-1,1-1.7,1c-1.7,0-1.9-1.5-1.9-2.1v-3.3h0.6v3.4
				c0,0.9,0.5,1.5,1.4,1.5c1,0,1.5-0.9,1.5-1.8V430.5z"/>
			<path d="M556.5,435.8h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8h0c0.2-0.5,0.7-0.9,1.2-0.9c0.2,0,0.4,0,0.6,0v0.6
				c-0.1,0-0.3,0-0.4,0c-0.9,0-1.4,0.7-1.5,1.7V435.8z"/>
			<path d="M559.8,433.3c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H559.8z M563.2,432.7c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H563.2z"/>
			<path d="M565.9,435.8h-0.6v-4.1c0-0.4,0-0.8-0.1-1.2h0.7l0,0.8l0,0c0.4-0.7,1-1,1.7-1c1.7,0,1.9,1.5,1.9,2.1v3.3h-0.6v-3.4
				c0-0.9-0.5-1.5-1.4-1.5c-1,0-1.5,0.9-1.5,1.8V435.8z"/>
		</g>
	</g>



	<g className="county-group " onClick={() => {southEastIowaClick()}} style = {southeastIowa()} id="lee-group">
		<path id="lee-county" className="map-path " d="M650.5,434.7c-0.6-0.4-1.2-0.8-1.2-0.9c-0.2,0-0.3,0-0.5,0c-0.1,0.1-1.1-1.2-1.6-2
			c-0.6,0-1.3,0-1.9,0c0.2,0.5-1,1.6-1.5,1.4c0.2-0.4-0.4-0.9-0.9-0.8s-1.1-0.4-1.1-1.1c-0.3,0.1-0.6-0.2-0.5-0.5c-0.2,0-0.3,0-0.5,0
			c0-0.2,0-0.3,0-0.5c-0.2,0-0.3,0-0.5,0c0-0.2,0-0.3,0-0.5c-1.1,0-2.2-0.9-2.5-2c-0.2,0-0.3,0-0.5,0c0-0.2,0-0.3,0-0.5
			c-0.7,0-1.3,0-2,0c0-0.2,0-0.3,0-0.5c-0.5,0-1,0-1.5,0c0,0.2,0,0.3,0,0.5h-0.1c0,0,0,0-0.1,0c0-0.2,0-0.3,0-0.5c-0.2,0-0.5,0-0.7,0
			c0-0.1-0.1-0.1-0.1-0.2c-0.2-0.4-0.1-0.9,0-1.3c-0.1,0-0.3,0-0.5,0c0.1-0.6-0.6-1.1-1.2-1.1s-2.3-1-2.8-0.9c0-0.2,0-0.3,0-0.5
			c-0.2,0-1.3-0.3-2.2-0.4v-0.1c-0.3,0-0.5,0-0.8,0c0-0.3,0-0.7,0-1c-0.4,0-0.8,0-1.2,0l0,0c-0.4,0-0.8,0-1.2,0
			c-0.1-0.2-0.1-0.3-0.1-0.5c-0.2,0-0.3,0-0.5,0c0-0.2,0-0.3,0-0.5c-0.1,0-0.2,0-0.3,0c-0.4,0-0.7-0.2-1-0.4c0.1,0.3,0.1,0.4,0.1,0.4
			c0,0.1,0,0.1,0,0.2l-30,0.5h-7.6H582v-2.2c0,0,0,0-0.1,0c0,4.3,0.3,14.3,0.4,14.5c0.1,0.2,0.1,6.9,0.1,9.9c0,1.5,0,3,0,4.5
			c0,0.2,0,0.5,0,0.8c0,0.1,0,0.1,0,0.2c-0.1,0.9-0.1,1.9,0.3,2.4c0.4,0.3,1.1,0.4,1.8,0.7c0.3,0.1,0.6,0.2,0.8,0.4
			c0.4,0.3,0.8,0.7,1.3,0.6c-0.4,0.9-0.6,2-0.7,2.9c0,0.4,0,0.7,0,1.1c0.2,0,0.3,0,0.5,0c0,0.2,0,0.3,0,0.5c0.4-0.1,0.7,0.1,1.1,0.2
			c0.7,0.2,1.4,0.4,2.1,0.4c0.5,0,0.9,0,1.3-0.1c0,0.1,0,0.2,0,0.4c0,0.1,0,0.2,0,0.2c0.4,0,0.8,0,1.1,0c0.6,0.1,1.3,0.3,1.8,0.6v0.1
			c0,0.1,0,0.2,0,0.3c0.2,0,0.3,0,0.4,0h0.1c0,0.5,0,1,0,1.6c0,0.3,0,0.6,0,0.9c-0.1,0-0.3,0-0.4,0c-0.1,0.1-0.1,0.3-0.2,0.4
			c-0.2,0.4-0.3,0.9-0.2,1.4c0.1,0.6,0.9,1.1,1.4,0.7c0,0.2,0.1,0.3,0.1,0.5c0.1,0.1,0.2,0.1,0.4,0.2c0.5,0.3,1.1,0.4,1.6,0.4
			c0,0.2,0,0.3,0,0.5c0.2,0,0.4,0,0.5,0.1c-0.2,0.5,0.3,1.2,0.5,1.7c0.1,0.3,0.2,0.6,0.4,0.9c0.2,0.6,0.4,1.2,0.6,1.8
			c0.4,0,0.7,0,1,0c0,0.2,0,0.3,0,0.5c1-0.4,2.1,0.8,3.2,0.5c0.1,0,0.2-0.1,0.4-0.2c0.5-0.2,0.9-0.6,1.3-0.3c0,0.2,0,0.3,0,0.5l0,0
			c0.2,0,0.3,0,0.5,0c0.2,0.3,0,0.8-0.2,1.1s-0.6,0.6-0.8,0.9c-0.6,0.9-0.5,2.1-0.4,3.2c0.3,0.1,0.7,0.1,1,0.1c0.2,0,0.3,0,0.5,0
			c-0.3,0.4-0.5,0.9-0.7,1.4c-0.2,0.6-0.4,1.3-0.4,2c0.1,0,0.2,0,0.3,0s0.1,0,0.2,0c0,0.2,0,0.3,0,0.5c0.5,0,1,0,1.5,0
			c0,0.2,0,0.3,0,0.5c0.3,0,0.7,0,1,0v0.1c0,0.1,0,0.3,0,0.4c0.3,0,0.7,0,1,0c0-0.2,0-0.3,0-0.5l0,0c0.2,0,0.3,0,0.5,0
			c0,0.8,0,1.7,0,2.5c0.1,0,0.1,0,0.1,0c0.1,0,0.2,0,0.2,0s0,0,0.1,0h0.1c0,0.3,0,0.7,0,1c0.9,0,1.4,0.1,2-0.5h0.5c0,0.3,0,0.7,0,1
			c0,0.2,0,0.3,0,0.5c0.5-0.1,1.2,0.3,1.6-0.1c0.1-0.2,0.2-0.3,0.3-0.5c0.2-0.5,0.4-0.9,0.6-1.4c0.1,0,0.3,0,0.4,0v0.1
			c0,0.1,0,0.2,0,0.4c0.2,0,0.4,0,0.7,0c0.1,0,0.2,0,0.3,0c-0.1,0-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.2,0,0.3c0.1,0,0.2,0,0.3,0
			s0.1,0,0.1,0c0,0.2,0,0.3,0,0.5c0.2,0,0.3,0,0.5,0l0,0c0-0.2,0-0.3,0-0.5c0.2,0,0.3,0,0.5,0c0-0.2,0-0.4,0-0.6
			c0.8,0.1,1.8,0.2,2.6,0c0.4-0.1,0.7-0.3,1-0.5c0.2-0.2,0.5-0.5,0.8-0.4c0.2-2.2,0.1-4.4-0.5-6.5c-0.1,0-0.2,0-0.4,0h-0.1
			c-0.1-0.9-0.1-1.7,0-2.5c0.2-1,0.6-2,1-2.9c0.4-0.7,0.7-1.5,0.9-2.3c0.3-1.6,0.1-3.3-0.7-4.7c-0.2-0.4-0.5-0.7-0.7-1.1
			c-0.3-0.4-0.6-0.9-0.9-1.3c-0.1-0.2-0.3-0.5-0.6-0.6c-0.2-0.1-0.4-0.1-0.6-0.1c-1.9-0.3-1.8-2.9-0.8-4c0.5-0.5,1-0.9,1.3-1.4
			c0.1-0.2,0.2-0.3,0.2-0.5c0.4,0.1,0.8-0.3,1-0.7c0.6-1.2,1.3-2.4,1.9-3.7c0.2-0.3,0.4-0.7,0.6-1c1.5-1,3.2-1.9,4.9-2.7
			c0.5-0.2,1-0.4,1.5-0.6c0.6-0.2,1.4-0.4,2-0.2c0-0.2,0-0.3,0-0.5c0.7,0,1.3,0,2,0c0-0.2,0-0.3,0-0.5c0.3,0.2,0.6-0.2,0.9-0.4l0,0
			c0.3-0.1,0.4-0.1,0.7-0.1h0.1c2.9,0,5.7,0,8.6,0c0.3,0,0.6,0,0.9-0.1c0.3-0.1,0.6-0.3,0.8-0.5c1-0.8,2.1-1.5,3.1-2.3
			c0.4-0.4,0.8-0.7,1.3-0.9s0.9-0.3,1.3-0.6c0.4-0.3,0.7-0.7,0.7-1.2c0.2,0,0.3,0,0.5,0c-0.2-1.3,0.1-2.8,0.9-3.9
			c-0.3,0-1.5-0.6-1.5-0.5c0,0,0,0,0,0.1c0,0.2,0,0.3,0,0.4C651.5,435.3,651,435,650.5,434.7z"/>
		<g id="lee-label" className="county-label" >
			<path d="M596.6,442.5v-7.6h0.7v7h3.8v0.6H596.6z"/>
			<path d="M602.4,440c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H602.4z M605.8,439.5c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H605.8z"/>
			<path d="M608.3,440c0,1.1,0.5,2.1,1.8,2.1c0.7,0,1.4-0.5,1.5-1.3h0.7c-0.3,1.3-1.1,1.8-2.4,1.8c-1.6,0-2.3-1.4-2.3-2.8
				c0-1.4,0.8-2.8,2.4-2.8c1.8,0,2.4,1.3,2.4,3H608.3z M611.7,439.5c-0.1-1-0.6-1.8-1.7-1.8c-1,0-1.6,0.9-1.7,1.8H611.7z"/>
		</g>
	</g>

</svg>
</>

    )
}

export default HeatMap