import PropTypes from 'prop-types';
import React from 'react';

// MATERIAL
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

// STYLES
const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit,
    },
});

class Field extends React.Component {
    static propTypes = {
        placeholder: PropTypes.string,
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
        validate: PropTypes.func,
        onChange: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            error: false,
        }
    }

    componentWillReceiveProps(update) {
        this.setState({ value: update.value });
    }

    onChange = (evt) => {
        const name = this.props.name;
        const value = evt.target.value;
        const error = this.props.validate ? this.props.validate(value) : false;
    
        this.setState({ value, error });
        this.props.onChange({ name, value, error });
    }

    render() {

        const { classes } = this.props;

        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor={this.props.name}>{this.props.placeholder}</InputLabel>
                <Input name={this.props.name} value={this.state.value} onChange={this.onChange} />
                <FormHelperText id="name-error-text">{this.state.error}</FormHelperText>
            </FormControl>
        )
    }
}

Field.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Field);