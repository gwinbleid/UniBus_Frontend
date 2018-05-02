import React, { Component } from 'react';

import Field from '../Parts/Field/Field';

export default class Login extends Component {
    state = {
        fields: {
            name: '',
        },
        fieldErrors: {},

    }

    onFormSubmit = (evt) => {
        const person = this.state.fields;

        evt.preventDefault();

        if (this.validate()) return;

        console.log(person);

        this.setState({
            fields: {
              name: '',
            },
        });
    }

    onInputChange = ({ name, value, error }) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
    
        fields[name] = value;
        fieldErrors[name] = error;
    
        this.setState({ fields, fieldErrors });
    };

    validate = () => {
        const person = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);
    
        if (!person.name) return true;
        if (errMessages.length) return true;
    
        return false;
    };

    render() {
        return (
            <div>
                <h1>Авторизируйся пжл</h1>

                <form onSubmit={this.onFormSubmit}>

                <Field
                    placeholder='Name'
                    name='name'
                    value={this.state.fields.name}
                    onChange={this.onInputChange}
                    validate={(val) => (val ? false : 'Name Required')}
                />

                    <br />

    

                    <input type='submit' disabled={this.validate()} />
                </form>
            </div>
        )
    }
}