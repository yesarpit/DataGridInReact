import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import data from '../data/data';
var React = require('react');

// All constants
const selectRowProp = {
    mode: 'checkbox',
    bgColor: 'pink'
};
const primaryClass = "btn btn-primary";
const secondaryClass = "btn btn-secondary";
const confirmationMessage = "Are you sure you want to delete row";
// constant ends


//Main Grid container
export class GridContainer extends React.Component {

    constructor() {
        super();
        this.state = { tableData: data }
    }

    //
    updateTable(id) {
        const newData = this.state.tableData.filter(e => e.id !== id)
        this.setState({ tableData: newData })
    }
    createCustomInsertButton = (openModal) => {
        return (
            <button className={primaryClass} onClick={openModal}>Add Row</button>
        );
    }
    createCustomDeleteButton = (onClick) => {
        return (
            <button className={secondaryClass} onClick={onClick}>Delete Rows</button>
        );
    }

    deleteCorrespondingRow(row) {
        alert(`${confirmationMessage} ${row.id}`)
        this.updateTable(row.id)
    }
    deleteButtonCell(country, row) {
        return (
            <button className={primaryClass} onClick={this.deleteCorrespondingRow.bind(this, row, country)} >Delete Row</button>
        )
    }
    
    render() {
        const options={
            insertBtn:this.createCustomInsertButton,
            deleteBtn:this.createCustomDeleteButton
        }
        return (
            <BootstrapTable data={this.state.tableData} options={options} insertRow deleteRow selectRow={selectRowProp}
            >
                <TableHeaderColumn dataField='id' isKey={true} >ID</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
                <TableHeaderColumn dataField='pin'>Pin</TableHeaderColumn>
                <TableHeaderColumn dataField='country'>Country</TableHeaderColumn>
                <TableHeaderColumn dataFormat={this.deleteButtonCell.bind(this)} dataField='country'>Action</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}


