import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import axios from 'axios'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name:string, calories:number, fat:number, carbs:number, protein:number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Fro", 159, 6.0, 24, 4.0),
  createData("Ice", 237, 9.0, 37, 4.3),
  createData("Ecl", 262, 16.0, 24, 6.0),
  createData("Cup", 305, 3.7, 67, 4.3),
  createData("Gin", 356, 16.0, 49, 3.9),
];

type TCoin = {
  name: string;
  fullName: string;
  imageUrl: string;
  price: number;
  volume24hour: number;
}

function CryptoTable() {
  const classes = useStyles();
  const [data, setData] = React.useState<TCoin[]>([])

  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
    .then(resp => {
      const coins = ''
      setData(resp.data.Data)
    })
  }, [])

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">FullName</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">volume24hour</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
                <TableCell align="left">{row.fullName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CryptoTable;
