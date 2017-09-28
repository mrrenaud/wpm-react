import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
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

  start() {
    if (this.state.started) {
      throw new Error('Already started.');
    }

    const sample = `Le prix Nobel est une récompense internationale décernée chaque année à des personnes ayant apporté un " grand bénéfice à l'humanité ". Ce prix porte le nom du chimiste suédois Alfred Nobel, qui a légué toute sa fortune pour la création de ce prix. Il existe en réalité plusieurs prix, car cette récompense est remise dans 5 domaines différents : la physique, la chimie, la médecine, la littérature et la paix. Les personnes qui reçoivent un prix Nobel se sont illustrées dans leur discipline grâce à une invention, une découverte, un travail... Le premier prix Nobel a été remis en 1901. Depuis, les prix sont décernés tous les ans, au mois d'octobre. La remise des prix a lieu le jour anniversaire de la mort d'Alfred Nobel, le 10 décembre.`;

    this.setState({
      started: true,
      startedAt: new Date(),
      source: sample,
      sourceLength: sample.length,
      value: '',
      valueLength: 0
    });
  }

  render() {
    if (this.state.started) {
      const words = this.state.value.split(' ').filter(w => w).length;
      const ellapsed = new Date() - this.state.startedAt;
      const wpm = Math.round(words / ellapsed * 60000) || 0;

      return (
        <div>
          <Paper className="sample">
            <h1>Sample Text</h1>
            <p>{this.state.source}</p>
          </Paper>
          <Paper className="sample">
            <h1>Type in the text</h1>
            <TextField
              autoFocus={true}
              errorText={this.state.errorText}
              floatingLabelText={`${this.state.valueLength}/${this.state.sourceLength} (${wpm} wpm)`}
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

    return (
      <div>
        <RaisedButton label="Start !" onClick={() => this.start()} primary={true} />
      </div>
    );
  }
}

export default App;
