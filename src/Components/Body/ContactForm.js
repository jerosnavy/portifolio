import { TextField } from "@material-ui/core";
import { useStyles } from "./ContactFormStyle";

export const RenderInputText = ({
    name,
    label,
    state,
    onChange,
    multiline,
    rows
  }) => {
    const { data,errors } = state;
    const classes= useStyles()

    return (
      <TextField
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}

        variant='outlined'
        label={label}
        fullWidth={true}
        name={name}
        value={data[name]}
        onChange = {onChange}
        multiline={multiline}
        rows={rows}
        error={errors[name] ? true : false}
        helperText={errors[name]}
      />
    );
  };