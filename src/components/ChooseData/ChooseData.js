import React from 'react';
import {URL_SMALL, URL_BIG} from '../App/App';

class ChooseData extends React.Component {
    handleChange = event => {
        this.props.changeUrl(event.target.value)
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        this.props.loadData();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} >
                    <p>Select data size:</p>
                        <input type="radio" id="small" name="data" value={URL_SMALL} checked={this.props.url === URL_SMALL} onChange={this.handleChange} />
                        <label for="small">Small</label>
                        <input type="radio" id="big" name="data" value={URL_BIG} checked={this.props.url === URL_BIG} onChange={this.handleChange} />
                        <label for="big">Big</label>
                        <button type="submit">Submit</button>
                </form>
            </div> 
        );
    }
};

export default ChooseData;