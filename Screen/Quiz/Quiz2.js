import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WindowHeight, WindowWidth } from "../GlobalCSS"

const questions = [
    {
        question: '1) What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'CH4'],
        correctAnswer: 'H2O',
      },
      {
        question: '2) Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
        correctAnswer: 'Albert Einstein',
      },
      {
        question: '3) What is the largest planet in our solar system?',
        options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
        correctAnswer: 'Jupiter',
      },
      {
        question: '4) What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
        correctAnswer: 'Mitochondria',
      },
      {
        question: '5) Which gas is most abundant in Earth\'s atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        correctAnswer: 'Nitrogen',
      },
      {
        question: '6) What is the process by which plants make their own food?',
        options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
        correctAnswer: 'Photosynthesis',
      },
      {
        question: '7) What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe', 'Cu'],
        correctAnswer: 'Au',
      },
      {
        question: '8) Which force is responsible for objects falling to the ground?',
        options: ['Magnetic Force', 'Electrostatic Force', 'Gravity', 'Friction'],
        correctAnswer: 'Gravity',
      },
      {
        question: '9) What is the SI unit of electric current?',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correctAnswer: 'Ampere',
      },
      {
        question: '10) Which planet is known as the "Red Planet"?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars',
      },
];

const Quiz2 = ({ navigation }) => {
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
      margin:30,
      marginTop:120,
    },
    optionText:{
      color:"white",
      textAlign:"center",
      fontSize:18,
    },
    questionText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
      textAlign:"center",
      paddingTop:15,
      color:"white",
      margin:5
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

export default Quiz2;
