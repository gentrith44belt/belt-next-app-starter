import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function PostCard({
  id,
  heading,
}: {
  id: number;
  heading: string;
}) {
  return (
    <Card>
      <CardContent>
        <Link href={`posts/${id}`}>
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
