import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WindowHeight, WindowWidth } from '../GlobalCSS';

const questions = [
  {
    question: '1) What is the currency of India?',
    options: ['Rupee', 'Yen', 'Dollar', 'Euro'],
    correctAnswer: 'Rupee',
  },
  {
    question: '2) Which river is known as the "Ganga of the South"?',
    options: ['Yamuna', 'Godavari', 'Krishna', 'Cauvery'],
    correctAnswer: 'Godavari',
  },
  {
    question: '3) Who is known as the "Father of the Nation" in India?',
    options: ['Subhas Chandra Bose', 'Bhagat Singh', 'Mahatma Gandhi', 'Jawaharlal Nehru'],
    correctAnswer: 'Mahatma Gandhi',
  },
  {
    question: '4) In which year did India gain independence?',
    options: ['1945', '1947', '1950', '1962'],
    correctAnswer: '1947',
  },
  {
    question: '5) Which Indian state is known as the "Land of Five Rivers"?',
    options: ['Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan'],
    correctAnswer: 'Punjab',
  },
  {
    question: '6) Who composed the Indian National Anthem?',
    options: ['Rabindranath Tagore', 'Bankim Chandra Chattopadhyay', 'Sarojini Naidu', 'Subhas Chandra Bose'],
    correctAnswer: 'Rabindranath Tagore',
  },
  {
    question: '7) Which is the largest state in India by area?',
    options: ['Maharashtra', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh'],
    correctAnswer: 'Rajasthan',
  },
  {
    question: '8) Which planet is known as the "Red Planet"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: '9) Who was the first woman Prime Minister of India?',
    options: ['Indira Gandhi', 'Sonia Gandhi', 'Pratibha Patil', 'Mamata Banerjee'],
    correctAnswer: 'Indira Gandhi',
  },
  {
    question: '10) Which Indian festival is known as the "Festival of Lights"?',
    options: ['Diwali', 'Holi', 'Navratri', 'Durga Puja'],
    correctAnswer: 'Diwali',
  },
];

const Quiz = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    if (selectedOption !== null) {
      return; // Do nothing if an option is already selected
    }

    setSelectedOption(option);

    if (option === questions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  useEffect(() => {
    let timer;
    
    if (selectedOption !== null) {
      timer = setTimeout(() => {
        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          // Quiz completed
          navigation.navigate('Results', { score, totalQuestions: questions.length });
          // Reset quiz
          setCurrentQuestion(0);
          setScore(0);
        }
      }, 1000); // Wait for 3 seconds before moving to the next question
    }

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [currentQuestion, score, navigation, selectedOption]);

  return (
    <ScrollView  style={styles.container}>
      
        <View>
      <View style={styles.subContainer}>
        <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOption === option &&
                (questions[currentQuestion].correctAnswer === option
                  ? styles.correctOption
                  : styles.incorrectOption),
            ]}
            onPress={() => handleAnswer(option)}
            disabled={selectedOption !== null}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    width: WindowWidth,
    height:WindowHeight,
    backgroundColor:"#561d84",
  },
  subContainer: {
    height: WindowHeight * 0.6,
    width: WindowWidth * 0.8,
    borderColor: "white",
    borderWidth:2,
    borderRadius:25,
    margin:10,
    marginTop:120 ,
    marginLeft:35
  },
  optionText:{
    color:"white",
    textAlign:"center",
    fontSize:18,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign:"center",
    paddingTop:15,
    color:"white",
    margin:10
  },
  optionButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 8,
    margin:30,
    
  },
  
  correctOption: {
    backgroundColor: 'green',
  },
  incorrectOption: {
    backgroundColor: 'red',
  },
});

export default Quiz;
