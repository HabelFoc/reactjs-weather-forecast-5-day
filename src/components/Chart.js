import React, { Fragment } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


const Chart = ({ color, temps }) => {
	return(
		<Fragment>
			<span>100&#8451; (Celsius )</span>
				<Sparklines data={temps} min={0.0} max={100.0} width={180} height={120}>
					<SparklinesLine color={color} />
					<SparklinesSpots />
				</Sparklines>
			<span>0&#8451; (Celsius)</span>
		</Fragment>
	);
}


export default Chart;