import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function WeatherDisplay(data, error, isLoaded) {
  console.log(data);
  if (!error === null) {
    return <div>Error: {error.message}</div>;
  } else if (data == null) {
    return <div>Loading...</div>;
  } else {
    return <BasicTable {...data} />;
  }
}

function BasicTable(data) {
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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              Current weather data from {data.location?.name}
            </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Country, name, region , localtime
// last_updated , temp_c , condition:text , condition:icon , precip_mm

export default WeatherDisplay;
