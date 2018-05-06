import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import Field from '../../components/Parts/Field/Field';

class Auth extends Component {
    state = {
        fields: {
            login: '',
            password: ''
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
              login: '',
              password: '',
            },
        });

        this.props.onAuth(this.state.fields.login, this.state.fields.password);
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
    
        if (!person.login) return true;
        if (!person.password) return true;
        if (errMessages.length) return true;
    
        return false;
    };

    render() {
        return (
            <div>
                <h1>Авторизируйся пжл</h1>

                <form onSubmit={this.onFormSubmit}>

                <Field
                    placeholder='Login'
                    name='login'
                    value={this.state.fields.login}
                    onChange={this.onInputChange}
                    validate={(val) => (val ? false : 'Login Required')}
                />

                <Field
                    placeholder='Password'
                    name='password'
                    value={this.state.fields.password}
                    onChange={this.onInputChange}
                    validate={(val) => (val ? false : 'Password Required')}
                />

                    <br />

    

                    <input type='submit' disabled={this.validate()} />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (login, password) => dispatch(actions.auth(login, password,))
    };
};

export default connect(null, mapDispatchToProps)(Auth);