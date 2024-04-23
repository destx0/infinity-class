import React from "react";
import QuizBlock from "@/components/QuizBlock";
const questions = [
	{
		question: "What is the capital of France?",
		options: ["New York", "London", "Paris", "Dublin"],
		answer: "Paris",
	},
	{
		question: "Who is CEO of Tesla?",
		options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Tony Stark"],
		answer: "Elon Musk",
	},
	{
		question: "The iPhone was created by which company?",
		options: ["Apple", "Intel", "Amazon", "Microsoft"],
		answer: "Apple",
	},
	{
		question: "How many Harry Potter books are there?",
		options: ["1", "4", "6", "7"],
		answer: "7",
	},
];
export default function App() {
	return (
		<>
			<QuizBlock />
		</>
	);
}
