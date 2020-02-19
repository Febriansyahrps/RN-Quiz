/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Question from './Question';

export default class Q1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      questions: [],

      current: 0,
      correctScore: 20,
      totalScore: 100,

      results: {
        score: 0,
        correctAnswers: 0,
      },
      completed: false,
    };
  }

  fetchQuestions = async () => {
    await this.setState({loading: true});
    const response = await fetch('http://52.91.62.79/public/api/quiz1');
    // const questions = require('./components/quiz.json');
    const questions = await response.json();
    const results = questions;
    console.log(questions);
    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    await this.setState({questions: results, loading: false});
  };

  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0,
        },
        completed: false,
      },
      () => {
        this.fetchQuestions();
      },
    );
  };

  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = {...this.state.results};

    results.score = isCorrect ? results.score + 20 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({
      current: index + 1,
      results,
      completed: index === 4 ? true : false,
    });
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          {!!this.state.loading && (
            <View style={styles.loadingQuestions}>
              <ActivityIndicator size="large" color="#00ff00" />
              <Text>Tunggu Sebentar</Text>
            </View>
          )}

          {!!this.state.questions.length > 0 && this.state.completed === false && (
            <Question
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
            />
          )}
          <View style={styles.container1}>
            {this.state.completed === true && (
              <View>
                <Text style={styles.kamu}>Nilai Kamu</Text>
                <Text style={styles.score}>{this.state.results.score}</Text>
                <Text style={styles.total}>Dari {100}</Text>
                <View style={styles.benarsalah}>
                  <Text style={styles.benar}>
                    Benar : {this.state.results.correctAnswers}
                  </Text>
                  <Text style={styles.salah}>
                    Salah: {5 - this.state.results.correctAnswers}
                  </Text>
                </View>

                <TouchableOpacity style={styles.btnulang} onPress={this.reset}>
                  <Text style={styles.txtulangi}>Ulangi</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.btnkeluar}>
                  <Text style={styles.txtkeluar}>Keluar</Text>
                </TouchableOpacity> */}
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
    paddingRight: 25,
    paddingLeft: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  loadingQuestions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  kamu: {
    textAlign: 'center',
    fontSize: 25,
  },
  score: {
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 75,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  total: {
    marginTop: 10,
    fontSize: 25,
    textAlign: 'center',
  },
  benarsalah: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  benar: {
    marginRight: 10,
    fontSize: 15,
  },
  salah: {
    marginLeft: 10,
    fontSize: 15,
  },
  btnulang: {
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: '#FBC531',
    height: 40,
    width: '50%',
    borderRadius: 5,
  },
  btnkeluar: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#FBC531',
    height: 30,
    width: '45%',
    borderRadius: 5,
  },
  txtulangi: {
    textAlign: 'center',
  },
  txtkeluar: {
    textAlign: 'center',
  },
});