import React from 'react';
import Button from 'react-bootstrap/Button'

// import "bootstrap/dist/css/bootstrap.css";

class ViewBuilding extends React.Component {
	render() {
		const {data, selectedBuilding} = this.props;
		const building = data			
			.filter(item => {				
				return item.id === selectedBuilding
			});

		return (
			<div>
				<div class="bgColorBlue p-2">				
					<p>
						{' '}
						<i>Click on a name to view more information</i>										
					</p>
					<p>
						{' '}
						<i>Or to add a new entry, click on the add button</i>										
					</p>
					<div class="text-right">
						<Button variant="primary">ADD</Button>
					</div>
				</div>
				<div >
					{
						(!building[0]) ? "" :
						<div class="p-5">
							<table class="tableAlignBottom" style={{tableLayout: "fixed", width:"100%", textAlign: "center"}}>
								<thead>
									<tr><th colSpan="6">{building[0].name || ""}</th></tr>
								</thead>
								<tbody>
									{!!building[0].code  &&
										<tr>
											<td class="halfSpanRight" colSpan="3">Code:</td>
											<td class="halfSpanLeft" colSpan="3">{building[0].code}</td>
										</tr>
									}									
									{!!building[0].address &&
										<tr>
											<td class="halfSpanRight" colSpan="3">Address:</td>
											<td class="halfSpanLeft" colSpan="3">{building[0].address}</td>
										</tr>
									}
									</tbody>

								{
									!!building[0].coordinates && 
									(!!building[0].coordinates.latitude || !!building[0].coordinates.longitude)	&&					
										<tbody>
												<tr><td class="oneFourthSpan" colSpan="2">Coordinates:</td></tr>
												{!!building[0].coordinates.latitude &&
													<tr>
														<td class="halfSpanRight" colSpan="3">Latitude:</td>
														<td class="halfSpanLeft" colSpan="3">{building[0].coordinates.latitude}</td>
													</tr>
												}
												{!!building[0].coordinates.latitude &&
													<tr>
														<td class="halfSpanRight" colSpan="3">Longitude:</td>
														<td class="halfSpanLeft" colSpan="3">{building[0].coordinates.longitude}</td>
													</tr>
												}											
										</tbody>											
								} 
									
								</table>							
							<div class="text-center">
									<Button variant="secondary">Delete</Button>
							</div>
						</div>
					}
				</div>

			</div>
		);
	}
}
export default ViewBuilding;


// <div>
// 					{
// 						(!building[0]) ? "" :
// 						<div>
// 							<table>
// 								<thead>
// 									<tr><th colSpan="6">{building[0].name || ""}</th></tr>
// 								</thead>
// 								<tbody>
// 									{!!building[0].code  &&
// 										<tr>
// 											<td class="halfSpan">Code:</td>
// 											<td class="halfSpan">{building[0].code}</td>
// 										</tr>
// 									}									
// 									{!!building[0].address &&
// 										<tr>
// 											<td class="halfSpan">Address:</td>
// 											<td class="halfSpan">{building[0].address}</td>
// 										</tr>
// 									}
// 								</tbody>
// 							</table>				
// 							<div> 
// 								{
// 									!!building[0].coordinates && 
// 									(!!building[0].coordinates.latitude || !!building[0].coordinates.longitude)	&&					
// 										<table>
// 											<tbody>
// 												<tr><td class="oneFourthSpan">Coordinates:</td></tr>
// 												{!!building[0].coordinates.latitude &&
// 													<tr>
// 														<td class="halfSpan">Latitude:</td>
// 														<td class="halfSpan">{building[0].coordinates.latitude}</td>
// 													</tr>
// 												}
// 												{!!building[0].coordinates.latitude &&
// 													<tr>
// 														<td class="halfSpan">Longitude:</td>
// 														<td class="halfSpan">{building[0].coordinates.longitude}</td>
// 													</tr>
// 												}											
// 											</tbody>
// 										</table>
// 								} 
// 							</div>
// 							<div class="text-center">
// 									<Button variant="secondary">Delete</Button>
// 							</div>
// 						</div>
// 					}
// 				</div>
