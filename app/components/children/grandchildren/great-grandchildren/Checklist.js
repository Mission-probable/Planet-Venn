import React, {Component} from "react";
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import CheckBoxOutlineBlank from 'material-ui/svg-icons/toggle/check-box-outline-blank';

const ruleTypes = [
     'Red', 'Blue', 'Green', 'Satellite', 'Sun', 'Alien', 'Big', 'Small',
];

class Checklist extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.unCheckAll = this.unCheckAll.bind(this);
        this.state = { checked: false };
    }

    unCheckAll() {
        this.setState({ checked: false })
    }

    handleChange(event) {
        if (this.state.checked === true) {
            this.setState({ checked: false })
        } else {
            this.setState({ checked: true })
        }
    }
  	
    render() {
		return (
            <div className="checklistDiv ">
                <h3 >Checklist (Optional)</h3>
                
                <p>Click to place an X if the category is ruled out.</p>
                <div >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th id="left">Category 1</th> 
                                <th>Category 2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ruleTypes.map( (category, index) => (
                                <tr key={index}>
                                    <td> {category} </td>
                                    <td className="cell">
                                        <Checkbox checked={this.state.checked} onCheck={this.handleChange} checkedIcon={<NavigationClose />} uncheckedIcon={<CheckBoxOutlineBlank />} />
                                    </td> 
                                    <td className="cell">
                                        <Checkbox checked={this.state.checked} onCheck={this.handleChange} checkedIcon={<NavigationClose />} uncheckedIcon={<CheckBoxOutlineBlank />} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <FlatButton label="Reset Table" onClick={this.unCheckAll} />
                </div>
            </div>		
		);
	}
};

export default Checklist;