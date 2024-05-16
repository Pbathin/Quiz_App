import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { WindowHeight, WindowWidth } from '../GlobalCSS';

const questions = [
    {
        question: '1) What does CPU stand for?',
        options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Processor Unit', 'Central Personal Unit'],
        correctAnswer: 'Central Processing Unit',
      },
      {
        question: '2) Which programming language is known as the "Mother of All Languages"?',
        options: ['Java', 'C', 'Python', 'Assembly'],
        correctAnswer: 'C',
      },
      {
        question: '3) What is the purpose of the HTML "doctype" declaration?',
        options: ['To define the document type', 'To create a variable', 'To include a JavaScript file', 'To style the webpage'],
        correctAnswer: 'To define the document type',
      },
      {
        question: '4) Which of the following is a markup language used for structuring and presenting content on the web?',
        options: ['Java', 'Python', 'HTML', 'CSS'],
        correctAnswer: 'HTML',
      },
      {
        question: '5) What is the main function of an operating system?',
        options: ['Run applications', 'Manage hardware resources', 'Create documents', 'Play games'],
        correctAnswer: 'Manage hardware resources',
      },
      {
        question: '6) Which data type is not supported in JavaScript?',
        options: ['Number', 'String', 'Boolean', 'Float'],
        correctAnswer: 'Float',
      },
      {
        question: '7) What does the acronym "URL" stand for?',
        options: ['Uniform Resource Locator', 'Universal Reference Language', 'User Requirement List', 'Undergraduate Research Laboratory'],
        correctAnswer: 'Uniform Resource Locator',
      },
      {
        question: '8) In programming, what is the process of finding and fixing bugs called?',
        options: ['Debugging', 'Encoding', 'Decoding', 'Compiling'],
        correctAnswer: 'Debugging',
      },
      {
        question: '9) Which of the following is NOT a programming language?',
        options: ['Java', 'Python', 'MySQL', 'HTML'],
        correctAnswer: 'MySQL',
      },
      {
        question: '10) What is the purpose of CSS (Cascading Style Sheets) in web development?',
        options: ['To define the structure of a webpage', 'To create dynamic content', 'To style the webpage', 'To handle server-side logic'],
        correctAnswer: 'To style the webpage',
      },
];

const Quiz1 = ({ navigation }) => {
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
      height: WindowHeight * 0.59,
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
      marginBottom: 10,
      textAlign:"center",
      paddingTop:10,
      color:"white",
      margin:10
    },
    optionButton: {
      padding: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      marginBottom: 8,
      margin:25,
      
    },
    
    correctOption: {
      backgroundColor: 'green',
    },
    incorrectOption: {
      backgroundColor: 'red',
  },
});

export default Quiz1;
