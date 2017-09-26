import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: null,
      errorText: null,
      value: null
    };
  }

  onChange(value) {
    if (this.state.source.startsWith(value)) {
      this.setState({
        value,
        valueLength: value.length
      });
    }
  }

  componentWillMount() {
    const sample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis dignissim lorem. Ut ullamcorper nisl sed semper pulvinar. Aenean varius tempor augue, at tristique erat. Mauris fringilla nisi ut mi tincidunt scelerisque. Morbi porttitor massa sed nibh mollis, id blandit tortor fermentum. Aenean fringilla vitae erat quis euismod. In id hendrerit sem, id imperdiet ante. Etiam a dapibus urna. Mauris dictum neque non est auctor dapibus. Fusce sit amet nunc orci. Vivamus est sapien, facilisis eu faucibus ut, aliquam at magna. Nullam non metus pretium, sagittis nisi quis, vehicula ligula. Nulla congue dolor orci. Integer id ante at ex congue condimentum a a velit. Ut fringilla ligula sit amet mi lobortis, a mattis justo facilisis.';

    this.setState({
      source: sample,
      sourceLength: sample.length,
      value: '',
      valueLength: 0
    })
  }

  render() {
    return (
      <div>
        <AppBar title="WPM" />
        <Paper className="sample">
          <h1>Sample Text</h1>
          <p>{this.state.source}</p>
        </Paper>
        <Paper className="sample">
          <h1>Type in the text</h1>
          <TextField
            errorText={this.state.errorText}
            floatingLabelText={`${this.state.valueLength}/${this.state.sourceLength}`}
            fullWidth={true}
            multiLine={true}
            onChange={(event, value) => this.onChange(value)}
            rows={4}
            value={this.state.value}
          />
        </Paper>
      </div>
    );
  }
}

export default App;
