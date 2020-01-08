import React from 'react';

class BuilingList extends React.Component {

	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, selectedUpdate, filterText} = this.props;

		const buildingList = data			
			.filter(item => {				
				return item.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
			})
			.map(directory => {				
				return (
					<tr key={directory.id} onClick={()=>selectedUpdate(directory.id)}>
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
