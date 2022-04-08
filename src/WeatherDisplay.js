import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableRow, StyledTableCell } from "./Components/Theme";
function WeatherDisplay(data, error, isLoaded) {
  console.log(data);
  if (!error === null) {
    return <div>Error: {error.message}</div>;
  } else if (data == null) {
    return <div>Loading...</div>;
  } else {
    return <CustomizedTables {...data} />;
  }
}

function CustomizedTables(data) {
  function createData(name, value, data) {
    return { name, value, data };
  }

  const rows = [
    createData("Country:", data.location?.country),
    createData("Region:", data.location?.region),
    createData("Last updated", data.current?.last_updated),
    createData("temperature:", `${data.current?.temp_c} °C`),
    createData(
      "Weather Condition",
      <img
        src={data.current?.condition.icon}
        alt={data.current?.condition.text}
        title={data.current?.condition.text}
      />
    ),
    createData("precipitation:", `${data.current?.precip_mm} mm`),
    createData("Cloud coverage:", `${data.current?.cloud}%`),
  ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              Current weather data from {data.location?.name}
            </StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WeatherDisplay;
