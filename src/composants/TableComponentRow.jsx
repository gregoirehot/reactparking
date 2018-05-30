import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
  

const TableComponentRow = (props) => {
    const { parking, index, classes } = props;
    return (
        <TableRow className={classes.row}>
            <CustomTableCell >{!parking.conducteur ? "Libre" : "Occupé"}</CustomTableCell >
            <CustomTableCell >{parking.title}</CustomTableCell >
            {/* <CustomTableCell >{parking.date}</CustomTableCell > */}
            <CustomTableCell >
                {/* <TableInput conducteur={parking.conducteur} onChange={this.updateConducteur} /> */}
                <div>
                    <input type="text" value={parking.conducteur}
                        onChange={(event) => props.updateParking(event, index)} />
                    <span></span>
                </div>
            </CustomTableCell >
            {/* <CustomTableCell >{parking.libre ? "Libre" : "Occupé"}</CustomTableCell > */}
        </TableRow>
    );
};

TableComponentRow.propTypes = {
    parking: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date),
        conducteur: PropTypes.string,
        libre: PropTypes.bool.isRequired
    }).isRequired
}

export default withStyles(styles)(TableComponentRow);

