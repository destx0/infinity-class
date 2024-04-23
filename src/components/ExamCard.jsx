import React from "react";
import { Play, RotateCw, Timer } from "lucide-react";

import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Link,
	Image,
	Badge,
} from "@nextui-org/react";
// import { Button } from "@/components/ui/button";
import { Button } from "@nextui-org/react";
// import { Badge } from "@/components/ui/badge";

const ExamCard = (props) => {
	{
		const { title, time, noOfQuestions, attempted, difficulty } = props;
		let badgeColor;
		if (difficulty === "easy") {
			badgeColor = "success";
		} else if (difficulty === "medium") {
			badgeColor = "warning";
		} else {
			badgeColor = "danger";
		}
		return (
			<>
				<Badge
					content={difficulty}
					shape="circle"
					color={badgeColor}
					variant="solid"
					size="sm"
				>
					<Card className="pt-4">
						<CardHeader className="gap-1 pb-0 pt-2 px-4 flex-col items-start">
							<h2
								className="font-bold  text-large uppercase "
								style={{ textTransform: "uppercase" }}
							>
								{title}
							</h2>
							<div className="flex gap-3 justify-center ">
								<Timer size="18" />
								<small>15 mins</small>
							</div>
							<p className="text-default-400">
								{noOfQuestions} questions{" "}
							</p>
						</CardHeader>

						<CardFooter>
							<Button
								className="w-full gap-4"
								size="lg"
								color={attempted ? "secondary" : "primary"}
								variant="solid"
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
				</Badge>
			</>
		);
	}
};

export default ExamCard;
