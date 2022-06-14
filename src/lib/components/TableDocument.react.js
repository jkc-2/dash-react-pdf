import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

const TableDocument = ({header, rows, ...other}) => {
  let head = ["Col", "Col", "Col", "Col", "Col"];
  let row = ["Elem", "Elem", "Elem", "Elem", "Elem"]
  
  const createTableHeader = (header) => {
    return ( 
      <View style={tableRowStyle} fixed>
        {header.map((col, i) => {
          return <View key={i} style={tableColHeaderStyle}>
          <Text style={tableCellHeaderStyle}>{col}</Text>
        </View>
      })}
      </View>
    );
  };

  const createTableRow = (rows) => {
    return (
      <View style={tableRowStyle}>
        {rows.map((row, i) => {
          return <View style={tableColStyle}>
          <Text style={tableCellStyle}>{row}</Text>
        </View>
        })}
      </View>
    );
  };

  return (
    <PDFViewer style={{width: window.innerWidth, height: window.innerHeight}}>
    <Document>
      <Page
        style={pageStyle}
        size="A4"
        orientation="portrait">

        <View style={tableStyle}>
          {createTableHeader(head)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
          {createTableRow(row)}
        </View>

      </Page>
    </Document>
    </PDFViewer>
  );

};

const pageStyle = {
  paddingTop: 16,
  paddingHorizontal: 40,
  paddingBottom: 56
};

const tableStyle = {
  display: "table",
  width: "auto"
};

const tableRowStyle = {
  flexDirection: "row"
};

const firstTableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  backgroundColor: "#bdbdbd"
};

const tableColHeaderStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderBottomColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  backgroundColor: "#bdbdbd"
};

const firstTableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderTopWidth: 0
};

const tableColStyle = {
  width: "20%",
  borderStyle: "solid",
  borderColor: "#000",
  borderWidth: 1,
  borderLeftWidth: 0,
  borderTopWidth: 0
};

const tableCellHeaderStyle = {
  textAlign: "center",
  margin: 4,
  fontSize: 12,
  fontWeight: "bold"
};

const tableCellStyle = {
  textAlign: "center",
  margin: 5,
  fontSize: 10
};

export default TableDocument;