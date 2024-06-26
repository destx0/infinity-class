import Image from "next/image";
import ExamCard from "../components/ExamCard";
export default function Home() {
	return (
		<main>
			<div className="flex  gap-4 p-4 items-center">
				<ExamCard
					title="exam 1"
					time="15"
					noOfQuestions={10}
					attempted={false}
					difficulty="easy"
				/>
        <ExamCard
					title="exam 1"
					time="15"
					noOfQuestions={10}
					attempted={true}
					difficulty="medium"
				/>
				<ExamCard
					title="exam 1"
					time="15"
					noOfQuestions={10}
					attempted={true}
					difficulty="hard"
				/>

			</div>
		</main>
	);
}
