import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { TextField, Select } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  MenuItem
} from "@material-ui/core";
// Picker
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DatePickerWrapper from "./DatePickerWrapper";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveStatus: false,
      values: {}
    };
  }

  onSave = values => {
    this.setState({ saveStatus: true, values: values });
  };

  convertDate = date => {
    var d = new Date(date);
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()].join("/");
  };

  render() {
    if (this.state.saveStatus) {
      return (
        <Redirect
          to={{
            pathname: "/results",
            title: this.state.values.title,
            description: this.state.values.description,
            dueDate: this.convertDate(this.state.values.dueDate),
            status: this.state.values.status
          }}
        />
      );
    }
    const onSubmit = async values => {
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      await sleep(300);
      this.onSave(values);
    };
    const validate = values => {
      const errors = {};
      if (!values.title) {
        errors.title = "Required";
      }
      if (!values.description) {
        errors.description = "Required";
      }
      return errors;
    };

    return (
      <div style={{ padding: 4 + "%", margin: "auto", maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          React Form
        </Typography>

        <Form
          onSubmit={onSubmit}
          initialValues={{ employed: true, stooge: "larry" }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      required
                      name="title"
                      component={TextField}
                      type="text"
                      label="Title"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="description"
                      fullWidth
                      required
                      component={TextField}
                      multiline
                      label="Description"
                    />
                  </Grid>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12}>
                      <Field
                        name="dueDate"
                        component={DatePickerWrapper}
                        fullWidth
                        margin="normal"
                        label="Due Date"
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <Grid item xs={12}>
                    <Field
                      fullWidth
                      name="status"
                      component={Select}
                      label="Status"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="ToDo">ToDo</MenuItem>
                      <MenuItem value="Ongoing">Ongoing</MenuItem>
                      <MenuItem value="Stalled">Stalled</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item style={{ margin: "auto" }} className="mt-5">
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={submitting}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </form>
          )}
        />
      </div>
    );
  }
}

export default TodoList;
