import React, { useState } from 'react';
import { Button, View, Text, Image, Modal } from 'react-native';
import * as Speech from 'expo-speech';
import {TTSText, Say} from "../Components/TTS.js";
import { TouchableOpacity } from 'react-native-gesture-handler';


//debugging array
// const fruits = ["Apple", "Banana", "Coconut", "Grapes", "Pineapple",
// "Lemon", "Avacado", "Blueberries", "Oranges", "Mango",
// "Strawberries", "Cherries", "Olives", "Watermelon", "Kiwi",
// "Peach", "Guava", "Grapefruit", "Lime", "Pumpkin"];

//Exports the fruit function that follows
export default function HomeScreen({ navigation }) {
//Database connection to populate the question array
const [fruits, setFruits] = React.useState([]);
const getFruits = () => {
	axios.get('https://node-server-udw2.onrender.com/fruits').then((response) => {
		console.log(response.data);
		setFruits(response.data);
	});
}
//NOT SURE WHAT IT'S SUPPOSED TO PASS TO OR IF THIS IS EVEN SPOSED TO BE HERE
{fruits.map(fruit => {})}

	//The questions are defined in an array with their answers.
	//Each answer is an element of the fruits array which has been imported in a random order.
	//This means that the values are always random.
	const questions = [
		{
			//QuestionText is the value that the question is about.
			questionText: fruits[0],
			//Answer option are the values the user picks from. They are set as either true or false if correct.
			answerOptions: [
				{ answerText: fruits[0], isCorrect: true },
				{ answerText: fruits[1], isCorrect: false },
				{ answerText: fruits[2], isCorrect: false },
				{ answerText: fruits[3], isCorrect: false },
			],
		},
		{
			questionText: fruits[4],
			answerOptions: [
				{ answerText: fruits[4], isCorrect: true },
				{ answerText: fruits[5], isCorrect: false },
				{ answerText: fruits[6], isCorrect: false },
				{ answerText: fruits[7], isCorrect: false },
			],
		},
		{
			questionText: fruits[8],
			answerOptions: [
				{ answerText: fruits[8], isCorrect: true },
				{ answerText: fruits[9], isCorrect: false },
				{ answerText: fruits[10], isCorrect: false },
				{ answerText: fruits[11], isCorrect: false },
			],
		},
		{
			questionText: fruits[12],
			answerOptions: [
				{ answerText: fruits[12], isCorrect: true },
				{ answerText: fruits[13], isCorrect: false },
				{ answerText: fruits[14], isCorrect: false },
				{ answerText: fruits[15], isCorrect: false },
			],
			
		},
		{
			questionText: fruits[16],
			answerOptions: [
				{ answerText: fruits[16], isCorrect: true },
				{ answerText: fruits[17], isCorrect: false },
				{ answerText: fruits[18], isCorrect: false },
				{ answerText: fruits[19], isCorrect: false },
			],		
		},
	];

	const [currentQuestion, setCurentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	//When an answer is clicked, it is evaluated and then score is either incremeted or not.
	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true){
			setScore(score +1);
		}
		else{	

		}

		//The question is set to the next in the array until the array length is reached.
		//Then, the score dialogue is shown instead.
		const nextQuestion = currentQuestion + 1;
		if(nextQuestion <questions.length){
					setCurentQuestion(nextQuestion);
		}
		else{
			setShowScore(true);
		}
	};

		const FinalScoreMessage = (props) => {
			if(props.score == 5){
				return(
						<TTSText style={{fontWeight:'bold', textAlign:'center', fontSize: '40', color: 'gold'}} text="Congratulations!" phrase="Congratulations!"/>
				)
			}
			else{
				return(
						<TTSText style={{fontWeight:'bold', textAlign:'center', fontSize: '40', color: 'gold'}} text="Oops try again" phrase="Oops...try again"/>
				)
			}
		};
    
	//This is the part shown to the user.
	return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ff6361'}}>
        {}
					{/* The user is shown their score and given options to try again or go home */}
					{/* This shows only while showScore equates to true */}
					{showScore ? (
						<View style={{backgroundColor: 'white', width:'80%',height:'30%', borderRadius: 10, alignItems:'center'}}>
					<FinalScoreMessage score={score}/>
					<TTSText style={{fontWeight:'bold', textAlign:'center', fontSize: '30', color:'black', marginBottom:10}} text={"You scored " + score + " out of " + questions.length} phrase={"You scored " + score + "out of " + questions.length}/>
					<TouchableOpacity style={{backgroundColor: 'lightblue', width: '50%', borderRadius: 10, marginBottom:15}} onPress={() => navigation.navigate('Categories')}>
					<Button color={'white'} title="Try Again?" />
					</TouchableOpacity>
				
					<TouchableOpacity style={{backgroundColor: 'lightgreen', width: '50%', borderRadius: 10}} onPress={() => navigation.navigate('Home')}>
					<Button color={'white'} title="Home" />
					</TouchableOpacity>
					</View>
        ) : (
			//The quiz section is shown while showScore equates to anything other than true
					<View style={{ flex: 1, width: '90%'}} >
						<View style={{ flex: 0.6, width: '100%', alignItems: 'center', justifyContent: 'center', borderBottomColor:'white', borderBottomWidth:1.5, marginBottom: 10}} >
							<View>
								<Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', backgroundColor:'lightblue', alignSelf:'center', borderRadius:10, overflow:'hidden', paddingRight:10, paddingLeft:10, width:'50%', height:'15%'}} >{currentQuestion+1} / {questions.length}{"\n"}</Text>
								<TTSText style={{ color: 'black', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}} text="What is this?" phrase="What is this?"/>
								<View style={{alignItems: 'center', justifyContent: 'center'}}>
									<Image style={{width: 250, height: 250}} source={require("../assets/splash.png")} />
								</View>
							</View>
						</View>
						<View style={{ flex: 0.4, width: '100%', alignItems: 'center', justifyContent: 'center'}} >
							<Text>
								<View style={{flexDirection: 'column'}}>
									{questions[currentQuestion].answerOptions.map((answerOption)=>
										<>
											<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:40}}>
												<TTSText style={{ color: 'black', fontSize: 20, fontWeight: 'bold'}} text={answerOption.answerText} phrase={answerOption.answerText}/>
												<TouchableOpacity style={{backgroundColor:'white', width:100, alignItems:'center', alignContent:'center', flex:1, borderRadius:10, marginLeft: 10}} onPress={()=>{Speech.stop(); Speech.speak(answerOption.answerText); handleAnswerButtonClick(answerOption.isCorrect);}}>
													<Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>Select{"\n"}</Text>
												</TouchableOpacity>
											</View>
										</>
										)}
								</View>
							</Text>
						</View>
					</View>
        )}
    	</View>
	);
}
