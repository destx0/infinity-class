import React from "react";
import { Play, RotateCw, Timer } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ExamCard = (props) => {
	{
		const { title, time, noOfQuestions, attempted } = props;
		return (
			<>
				<Card className="w-[950px]">
					<CardHeader>
						<CardTitle>{title}</CardTitle>
						<div className="flex gap-2">
							<>
								<Timer className="w-1  h-1" />
								{time} mins
							</>
						</div>
					</CardHeader>

					<CardContent className="">
						<Badge
							variant="secondary"
							className="object-right text-gray-200"
						>
							Difficulty: easy
						</Badge>
						<CardHeader>{noOfQuestions} Questions </CardHeader>
					</CardContent>
					<CardFooter>
						<Button
							className="w-full gap-4"
							size="lg"
							variant={attempted ? "secondary" : "default"}
						>
							{attempted ? (
								<>
									<RotateCw /> Reattempt
								</>
							) : (
								<>
									<Play />
									Start Test
								</>
							)}
						</Button>
					</CardFooter>
				</Card>
			</>
		);
	}
};

export default ExamCard;
