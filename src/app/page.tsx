import Image from "next/image";
import ExamCard from "../components/ExamCard";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <main >
      <Navbar/>
      <div className="flex  gap-4 p-4 items-center">
      <ExamCard title = "exam 1" time = "15" noOfQuestions = {10} attempted = {false}/>
      <ExamCard title = "exam 1" time = "15" noOfQuestions = {10} attempted = {true}/>
      </div>
    </main>
  );
}
