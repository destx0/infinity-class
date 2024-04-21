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
						<CardDescription className="flex-row">
							<>
								<Timer />
								{time} mins
							</>
						</CardDescription>
					</CardHeader>

					<CardContent className="">
						<Badge variant="outline" className="object-right">
							Difficulty: easy
						</Badge>
						<CardDescription>
							{noOfQuestions} Questions{" "}
						</CardDescription>
					</CardContent>
					<CardFooter className="flex w-full  ">
						<Button
							className="w-full gap-4"
							size="lg"
							variant={attempted ? "secondary" : "default"}
						>
							{attempted ? (
								<>
									<Play /> Reattempt
								</>
							) : (
								<>
									<RotateCw />
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
