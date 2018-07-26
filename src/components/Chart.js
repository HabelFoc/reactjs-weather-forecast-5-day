import React, { Fragment } from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';
import '../styles/chart.css';


// calculate average
function average(data){
	return _.round(_.sum(data)/data.length);
}


const Chart = ({ color, data, units }) => {
	return(
		<Fragment>
				<Sparklines data={data} width={180} height={120}>
					<SparklinesLine color={color} />
					<SparklinesReferenceLine type="avg" />
					<SparklinesSpots />
				</Sparklines>
			<span>Average: {average(data)} {units}</span>
		</Fragment>
	);
}


export default Chart;