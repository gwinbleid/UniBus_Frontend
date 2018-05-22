import React, { Component } from 'react';
import * as actions from '../../actions/index';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Field from '../../components/Parts/Field/Field';

const styles = theme => ({
    root: {
      marginTop: '10%',
      width: '100%',
    },
    demo: {
      height: '360px',
      width: '360px',
      margin: '15px',
      border: '3px solid',
      borderColor: theme.palette.text.primary,
      flexShrink: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
  });

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
        const { classes } = this.props;
        return (
            <Grid container>
                <Grid item xs={12} className={classes.root}>
                    <Grid
                        container
                        spacing={16}
                        alignItems='center'
                        alignContent='center'
                        direction='column'
                        justify='center'
                        className={classes.demo}
                    >


                    
                    <form onSubmit={this.onFormSubmit}>

                        <Field
                            placeholder='Login'
                            name='login'
                            value={this.state.fields.login}
                            onChange={this.onInputChange}
                            validate={(val) => (val ? false : 'Login Required')}
                        />

                        <br/>

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
                    </Grid>
                </Grid>
                
            </Grid>
        )
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);