import React from 'react';
import TableComponentRow from './TableComponentRow'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  });

const TableComponent = (props) => {
    const { classes } = props;
    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Etat</CustomTableCell>
                        <CustomTableCell>Place #</CustomTableCell>
                        {/* <CustomTableCell>Date</CustomTableCell> */}
                        <CustomTableCell>Conducteur</CustomTableCell>
                        {/* <CustomTableCell>Changer l'état</CustomTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.parkings.map((p, index) =>
                        <TableComponentRow
                            key={index}
                            index={index}
                            parking={p}
                            updateParking={props.updateParking}
                        />)}
                </TableBody>
            </Table>
        </Paper>
    );
}

TableComponent.propTypes = {
    parkings: PropTypes.array.isRequired
}

export default withStyles(styles)(TableComponent);