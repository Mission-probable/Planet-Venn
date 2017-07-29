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
        this.unCheckAll = this.unCheckAll.bind(this);
        this.state = { checked: false, };
    }

    unCheckAll() {
        console.log("Why won't it uncheck????");
        this.setState({ checked: false, })
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
                                        <Checkbox checkedIcon={<NavigationClose />} uncheckedIcon={<CheckBoxOutlineBlank />} />
                                    </td> 
                                    <td className="cell">
                                        <Checkbox checkedIcon={<NavigationClose />} uncheckedIcon={<CheckBoxOutlineBlank />} />
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