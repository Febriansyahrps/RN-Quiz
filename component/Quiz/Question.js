import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button';

export default class Question extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: null,
    };
  }

  renderOptions = question => {
    if (question.type === 'boolean') {
      return [
        <RadioButton value={'True'} key={1}>
          <Text style={styles.radioText}>True</Text>
        </RadioButton>,

        <RadioButton value={'False'} key={2}>
          <Text style={styles.radioText}>False</Text>
        </RadioButton>,
      ];
    } else {
      const result = [];

      question.incorrect_answers.forEach((item, index) => {
        let key = `${question.id}-${index}`;

        if (index === this.props.correctPosition) {
          let key2 = `${question.id}-100`;
          result.push(
            <RadioButton value={question.correct_answer} key={key2}>
              <Text style={styles.radioText}>{question.correct_answer}</Text>
            </RadioButton>,
          );
        }

        result.push(
          <RadioButton value={item} key={key}>
            <Text style={styles.radioText}>{item}</Text>
          </RadioButton>,
        );
      });

      return result;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.number}>{this.props.current + 1} dari 5</Text>

        <View style={styles.container1}>
          <Text style={styles.question}>{this.props.question.question}</Text>
          <RadioGroup
            onSelect={(index, answer) => this.setState({answer})}
            selectedIndex={null}>
            {this.renderOptions(this.props.question)}
          </RadioGroup>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.onSelect(this.state.answer);
            }}>
            <Text style={styles.txtbtn}>Soal Berikutnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  radioText: {
    fontSize: 15,
  },
  number: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  question: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25,
    marginBottom: 15,
    alignItems: 'center',
  },
  button: {
    marginTop: 25,
    backgroundColor: '#FBC531',
    height: 30,
    borderRadius: 5,
  },
  txtbtn: {
    marginTop: 3,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    alignSelf: 'center',
  },
});