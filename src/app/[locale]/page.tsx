"use client";

import { Box, Typography } from "@mui/material";
import { Button } from "@src/components";
import { useAppDispatch, useAppSelector } from "@src/lib/redux";
import { decrement, increment } from "@src/lib/redux/counter-slice";

export default function Home() {
  const countValue = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3>Home</h3>

      <Typography variant="subtitle1">Persisted counter value:</Typography>
      <Box display="flex">
        <Button onClick={() => dispatch(increment())}>+</Button>
        <Typography mx={2}>{countValue}</Typography>
        <Button onClick={() => dispatch(decrement())}>-</Button>
      </Box>
    </div>
  );
}
